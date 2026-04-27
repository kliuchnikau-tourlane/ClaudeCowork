> Source-of-truth markdown lives in the repo at `OUTPUTS/2026-04-24_TripPlannerWetu-sequence-diagrams/TripPlannerWetu_Documentation.md`. Each diagram below has a placeholder where the rendered image goes (upload `diagram_*.png` from `/diagrams/`) and a collapsible block with the Mermaid source so it can be regenerated.

Actors / systems used throughout:

- **Sales Agent** — operator in TripPlanner.
- **Trip Planner FE** — the agent UI.
- **TripPlanner BE** (a.k.a. Gecko API) — backend that orchestrates everything below.
- **Accommodations Search** — external service called directly by the FE. Returns each accommodation with an optional `wetu_id`, read from Elephant's `external_ids[source=='wetu']`. Does not call Wetu directly.
- **Wetu** — external supplier. Two surfaces: the **Search** method (by name) and the **Itinerary** methods (`SaveItinerary` is publicly documented; `LoadItinerary` is undocumented / private). Wetu has two ID kinds: *content IDs* (integers — accommodations, areas, transport stops) and *itinerary IDs* (UUIDs). Both are written as `wetu_id` below; context disambiguates.
- **Elephant** — internal accommodation / touristic-area store. Source of truth for content shown to customers via TripViz.
- **Routing Service** — our routing / geometry service that computes routes and geometry for transport legs.
- **Sidekiq Worker** — TripPlanner BE's background-job processor (`Trip::UploadWorker` builds the TripViz JSON; `WetuSyncWorker` is used for async re-syncs).
- **Salesforce CRM** — receives an opportunity-owner update during TripViz sync (`SyncOpportunityOwner`).
- **S3** — storage for the generated TripViz JSON.
- **Lambus** — receives the same JSON payload as S3 from `Trip::UploadWorker`.
- **TripViz** — customer-facing trip visualization, reads its JSON from S3. Never talks to Wetu.

---

## Diagram 1 — Link content: mapping an existing accommodation to a Wetu record

Accommodations Search returns an item without a `wetu_id` ("Content unlinked"). The agent searches Wetu by name, picks a match, and the `wetu_id` is saved onto the Trip's offer item. No descriptions or images yet — those arrive during TripViz sync.

> 📎 **Image: Diagram 1** — upload `diagram_1.png` here.

<details>
<summary>Diagram 1 — Mermaid source</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant AS as Accommodations Search
    participant Wetu as Wetu

    Agent->>TP: Open offer, search accommodations in destination
    TP->>AS: Search accommodations<br/>(direct call from FE — does not go through BE)
    AS-->>TP: List (each item: elephant_uuid, wetu_id?)
    TP-->>Agent: Cards — items without wetu_id show "Content unlinked"

    Agent->>TP: Pick unlinked accommodation, type name in "Link content"
    TP->>BE: Search Wetu by name
    BE->>Wetu: Search method<br/>(may mix accommodations and areas,<br/>filtered to accommodations only)
    Wetu-->>BE: Candidates (wetu_id, title, area)
    BE-->>TP: Candidates
    TP-->>Agent: List of Wetu candidates

    Agent->>TP: Select candidate, click "Add to offer"
    TP->>BE: Persist link (elephant_uuid ↔ wetu_id)
    BE->>BE: Save wetu_id onto the Trip's offer item<br/>(Trip lives inside Gecko API)
    Note over BE: Only the mapping is stored here.<br/>Content (descriptions, images) arrives<br/>during TripViz sync (Diagram 2).
    BE-->>TP: Linked
```

</details>

Side flow when Wetu has no match. The agent escalates to the Content Integration (CI) team, who emails Wetu (Excel list) and waits 1–4 days for Wetu to add the content. CI then uses TripPlanner with their own offer to link the new Wetu content (the same Diagram 1 flow) and runs a TripViz sync to import it into Elephant. After that the agent's offer can sync that content normally.

---

## Diagram 1b — Happy path: accommodation already has `wetu_id`

Short alternative to Diagram 1. If Accommodations Search already returns a `wetu_id`, the agent just picks the item — no Wetu round-trip, no "Link content" form.

> 📎 **Image: Diagram 1b** — upload `diagram_1b.png` here.

<details>
<summary>Diagram 1b — Mermaid source</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant AS as Accommodations Search

    Agent->>TP: Open offer, search accommodations in destination
    TP->>AS: Search accommodations<br/>(direct call from FE)
    AS-->>TP: List (each item: elephant_uuid + wetu_id)
    TP-->>Agent: Cards — content linked, no warning

    Agent->>TP: Pick accommodation, click "Add to offer"
    TP->>BE: Add to offer
    BE->>BE: Save (elephant_uuid, wetu_id) onto<br/>the Trip's offer item
    Note over BE: No Wetu call needed.<br/>Content still arrives during TripViz sync (Diagram 2).
    BE-->>TP: Added
```

</details>

TripViz sync runs only once every accommodation on the Trip has a `wetu_id` (via Diagram 1, 1b, or 3).

---

## Diagram 2 — TripViz sync: enriching the itinerary via Wetu's Itinerary API

The heavy interaction. BE sends the itinerary skeleton to Wetu (`SaveItinerary`), pulls enriched content back (`LoadItinerary`, undocumented), upserts into Elephant, then a background worker builds the TripViz JSON from Elephant alone (no Wetu calls in that step).

Note: before end-2024 the area hierarchy was derived from Wetu polygons; polygons became unreliable, so we now also persist the explicit accommodation → area mapping that Wetu exposes.

> 📎 **Image: Diagram 2** — upload `diagram_2.png` here.

<details>
<summary>Diagram 2 — Mermaid source</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant Wetu as Wetu Itinerary API
    participant Eleph as Elephant
    participant SF as Salesforce CRM
    participant SK as Sidekiq (BE)
    participant S3 as S3
    participant Lambus as Lambus
    participant TripViz as TripViz (customer)

    Agent->>TP: Click "TripViz sync"
    TP->>BE: Sync trip (trip_id)
    Note over BE: Build itinerary skeleton from the Trip's offer items.<br/>First sync runs inline (drawn here).<br/>Subsequent re-syncs are delegated to WetuSyncWorker async.

    BE->>Wetu: SaveItinerary<br/>(content IDs of accommodations + dates)
    Wetu-->>BE: itinerary_id (UUID)
    BE->>Wetu: LoadItinerary(itinerary_id)<br/>(undocumented private API)
    Wetu-->>BE: Itinerary JSON content[]:<br/>• accommodations (descriptions, images)<br/>• touristic areas<br/>  (Cape Town → Western Cape → South Africa → Africa,<br/>  polygons when available)<br/>• accommodation → area mapping<br/>  (pairs of content IDs on each accommodation)

    loop For each touristic area (sync_destinations!)
        BE->>Eleph: Find area by wetu_id<br/>(no Google Places fallback for areas)
        alt Exists
            BE->>Eleph: Update descriptions, images, polygon
        else New
            BE->>Eleph: Create area<br/>(stores wetu_id as attribute)
        end
    end

    loop For each accommodation (sync_accommodations!)
        BE->>Eleph: Find accommodation by external_ids[source=='wetu']
        alt Found by Wetu ID
            BE->>Eleph: Update descriptions, images
        else Not found by Wetu ID
            BE->>Eleph: Find accommodation by Google Places ID
            alt Found by Google Places, not yet linked to any Wetu content
                BE->>Eleph: Add Wetu external_id to that accommodation,<br/>update descriptions, images
            else Not found, OR Google Places match already linked<br/>to a different Wetu content
                BE->>Eleph: Create accommodation<br/>(external_ids += {source:'wetu', external_id:wetu_id})
            end
        end
        BE->>Eleph: Set accommodation.touristic_area_uuids<br/>(array of elephant_area_uuids,<br/>resolved from the content-ID pairs above)
    end

    BE->>SF: SyncOpportunityOwner<br/>(opportunity-owner update)
    SF-->>BE: OK

    BE->>SK: Enqueue Trip::UploadWorker (trip_id)<br/>— async, does not block the response
    BE-->>TP: 200 Sync OK
    TP-->>Agent: "TripViz synced" toast

    Note over SK: Trip::UploadWorker builds the TripViz JSON<br/>from Elephant only (no Wetu calls).
    SK->>Eleph: Fetch accommodations, areas, country, content
    Eleph-->>SK: Aggregated data
    SK->>S3: PUT tripviz.json
    SK->>Lambus: PUT same payload

    TripViz->>S3: GET tripviz.json (on customer open)
    S3-->>TripViz: JSON
    TripViz-->>Agent: Customer-facing trip view
```

</details>

Async re-sync. If the offer was already fully synced before, `Wetu::UpdateService.sync` enqueues `WetuSyncWorker` and the FE gets `200 Sync OK` immediately; the worker performs the same sequence out-of-band.

### ID storage in Elephant after TripViz sync

Wetu IDs persisted into Elephant during sync:

| Elephant row | Where the Wetu ID is stored |
|---|---|
| accommodation | tagged entry in `external_ids[]`: `{ source: 'wetu', external_id: <wetu_id> }` |
| area | `wetu_id` column (direct attribute) |

Internal Elephant references set during sync (no Wetu IDs leak through):

| Elephant row | Field | Holds |
|---|---|---|
| accommodation | `touristic_area_uuids` | array of Elephant area UUIDs (resolved from Wetu pairs before persisting) |

---

## Diagram 3 — Manual input with Link Content (accommodation or area, same flow)

Used when Accommodations Search returns nothing. The agent creates a manual entry, then uses Link Content to pick from a mixed list (accommodations AND areas) returned by Wetu. Both kinds are linked the same way (single `wetu_id` slot). The accommodation-vs-area distinction only surfaces at render time, from which UUID field on the offer item is populated. Campground = pick an area instead of a hotel; same flow.

> 📎 **Image: Diagram 3** — upload `diagram_3.png` here.

<details>
<summary>Diagram 3 — Mermaid source</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant Wetu as Wetu (content + itinerary)
    participant Eleph as Elephant

    Agent->>TP: Create manual entry on trip<br/>(name, rate — no wetu_id, no elephant_uuid)
    TP->>BE: Persist manual entry
    BE->>BE: Save placeholder onto Trip's offer item
    BE-->>TP: Saved

    Agent->>TP: Open "Link content", type name
    TP->>BE: Search Wetu by name
    BE->>Wetu: Suggestions by name
    Wetu-->>BE: Mixed list — accommodations AND areas<br/>in the same response, each with wetu_id<br/>and type flag (accommodation / area)
    BE-->>TP: Candidates (type flag used for display only)
    TP-->>Agent: Any match — hotel or area<br/>(campground case = pick an area)

    Agent->>TP: Select any candidate (accommodation OR area)
    TP->>BE: Link candidate's wetu_id
    BE->>BE: Save wetu_id onto the offer item
    BE-->>TP: Linked

    Agent->>TP: Click "TripViz sync"
    TP->>BE: Sync trip (trip_id)
    BE->>Wetu: SaveItinerary + LoadItinerary (see Diagram 2)
    Wetu-->>BE: Enriched itinerary<br/>(the linked wetu_id comes back EITHER<br/>under leg.accommodation OR under leg.destinations)

    Note over BE,Eleph: Same upsert as Diagram 2, plus UUID binding
    alt Wetu payload places it under leg.accommodation
        BE->>Eleph: UpsertService.create_accommodation by wetu_id
        Eleph-->>BE: accommodation elephant_uuid
        BE->>BE: update_offer_for_accommodation:<br/>set accommodation_uuid on the offer item
    else Wetu payload places it under leg.destinations
        BE->>Eleph: UpsertService.create_area by wetu_id
        Eleph-->>BE: area elephant_uuid
        BE->>BE: update_offer_for_touristic_area:<br/>set touristic_area_uuid on the offer item
    end
    BE-->>TP: 200 Sync OK

    Note over Agent,Eleph: Sidekiq JSON build + TripViz continue as in Diagram 2.<br/>TripViz reads which UUID is populated:<br/>accommodation_uuid → render as hotel-card,<br/>touristic_area_uuid → render as area-card.
```

</details>

---

## Diagram 4 — Transport leg location search (self-contained)

Named waypoints (airport, station, harbor, …) are pulled from Wetu's location search and saved onto the Trip's leg. **Nothing is written to Elephant.** Routing Service computes the geometry for TripViz to draw the line.

> 📎 **Image: Diagram 4** — upload `diagram_4.png` here.

<details>
<summary>Diagram 4 — Mermaid source</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant Wetu as Wetu Location Search
    participant RS as Routing Service

    Agent->>TP: Edit transport leg, type waypoint<br/>(e.g. "Cape Town International")
    TP->>BE: Search Wetu locations
    BE->>Wetu: Location search<br/>(accommodations, areas, airports, stations, harbors)
    Wetu-->>BE: Candidates (wetu_location_id, name, lat/lng)
    BE-->>TP: Candidates

    Agent->>TP: Pick origin / destination
    TP->>BE: Save waypoint on leg
    BE->>BE: Save on Trip's leg:<br/>wetu_location_id + name + coordinates<br/>(stays in Gecko API — Elephant untouched)
    BE-->>TP: Saved

    BE->>RS: Compute route (origin, destination)
    RS-->>BE: Route geometry / duration
    BE-->>TP: Route ready (for TripViz map)
```

</details>

Post-deprecation note. The simplest of the four to replace — swap Wetu location search for Google Places or Nominatim (OSM), licensing permitting, and replace the `wetu_location_id`-based identity checks in BE internals with a geo-distance heuristic.