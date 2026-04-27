> Source-of-truth markdown lives in the repo at `OUTPUTS/2026-04-24_TripPlannerWetu-sequence-diagrams/TripPlannerWetu_Documentation.md`. Each diagram below shows a pre-rendered image (via Kroki) plus a collapsible block with the Mermaid source so it can be extended / regenerated later.

Actors / systems used throughout:

- **Sales Agent** — operator in TripPlanner.
- **Trip Planner FE** — the agent UI.
- **TripPlanner BE** (a.k.a. Gecko API) — backend that orchestrates everything below.
- **Accommodation Search** — our accommodation-search service (not a Wetu endpoint). Returns the candidate list with or without a `wetu_id`.
- **Wetu** — external supplier. Two surfaces are used: the **Content / Suggestions API** (search by name) and the **Itinerary API** (private, used to pull enriched content per itinerary).
- **Elephant** — internal accommodation / touristic-area store. Source of truth for content shown to customers via TripViz.
- **Routing Service** — our routing / geometry service that computes routes and geometry for transport legs.
- **Sidekiq Worker** — TripPlanner BE's background-job processor (builds the TripViz JSON).
- **S3** — storage for the generated TripViz JSON.
- **TripViz** — customer-facing trip visualization, reads its JSON from S3. Never talks to Wetu.

---

## Diagram 1 — Link content: mapping an existing accommodation to a Wetu record

Context. An accommodation returned by Accommodation Search without a `wetu_id` shows a "Content unlinked" warning. The agent uses the "Link content" form to search Wetu by name and pick a match. Only the **mapping** (`wetu_id` saved onto the offer item inside the Trip) is persisted at this step — no descriptions or images are fetched yet. The Trip object itself lives inside Gecko API, so this is a local write; Elephant is not touched here.

![Diagram 1 (rendered via Kroki)](https://kroki.io/mermaid/png/eNplVEFu2zAQvOcVC19qA0oC9CgUKWRHDQoYrVAZ6DGgqbVFWCJVkrLjW099QV6Yl3S5kmJH8sWQODvcnZmVwz8taomPSuytqG-AfqL1Rrf1Fm33KL2xkOxRexAOclGh6x75uBHWK6kaQcebLCA2VjWQVUJrtPAtnaCW6YAaQMv0y9beP8yfUB4MJNn3xaQoyUNRIqWpa1MIr4yGHIWV5QT6G30bwPy_MtqHzu8hb_d7dKHQ3XANz3D78LDJYvjZoAaz26GNwDEtzX11lwOloQjlmp-ZYJNR9TKN4SndjOE70myMX6aET_K4b3xU0vWU3_aca-U8zFEQTnmsY8AKm5Lme25bVURwoumeVfF1MVD3k_xC11beDQ2GG8OcMayELRy8_X1lPgcn5UvT-oEIXGlOMBv0anWl9AGL2VSrTMnD-_nHISLw5wZBixqDYLM1YUB2lLOPmvUasEnbM5dcRApv42vHBkiXk8aalzN401X3_CE3EZ_X4gy1ehlbIjR1a1G4DrVTlUdLExDPCGl0de50DRcMjqyIQBGE4j_vRaN5la8wYt6xExf81Ax21-z6AS7Aidg52S79BRKBrIL-s6TgzjmzI2kztC7wB4coQte5gbd_r4Pji4vebIg44nsYSFIDvkRe00-uu4aD0znAO16pI4bFcKpAGO3uD-MRzJGXm9aLBGW6WjSN0ntQDhx9Vkj9kjy4Y9IhenPaG0n87EUEqhaUggVJbMN9DC1aG1i4i_ysJcz7Dxh8XtyNbFhzTv8DV9KbKQ)

<details>
<summary>View Mermaid source (Diagram 1)</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant AS as Accommodation Search
    participant Wetu as Wetu Content / Suggestions

    Agent->>TP: Open offer, search accommodations in destination
    TP->>BE: GET accommodations for destination
    BE->>AS: Search accommodations
    AS-->>BE: List (each item: elephant_uuid, wetu_id?)
    BE-->>TP: Results
    TP-->>Agent: Cards — items without wetu_id show "Content unlinked"

    Agent->>TP: Pick unlinked accommodation, type name in "Link content"
    TP->>BE: Search Wetu by name
    BE->>Wetu: Suggestions by name<br/>(proxy to Wetu content API,<br/>may mix accommodations and areas,<br/>filtered to accommodations only)
    Wetu-->>BE: Candidates (wetu_id, title, area)
    BE-->>TP: Candidates
    TP-->>Agent: List of Wetu candidates

    Agent->>TP: Select candidate, click "Add to offer"
    TP->>BE: Persist link (elephant_uuid ↔ wetu_id)
    BE->>BE: Save wetu_id onto the Trip's offer item<br/>(Trip lives inside Gecko API)
    Note over BE: Only the mapping is stored here.<br/>Content (descriptions, images) arrives<br/>during Trip Sync (Diagram 2).
    BE-->>TP: Linked
```

</details>

Post-deprecation note. When we stop taking content from Wetu, "Link content" against Wetu goes away for regular accommodations — Accommodation Search only returns items that already have content in our Catalog.

Offline side flow (not drawn). If Accommodation Search returns nothing for the name the agent needs, the agent reaches out to the Content Integration team. That team batches requests, emails Wetu (Excel list mentioned on the Miro sketch), waits 1–4 days for Wetu to populate content, then runs the Trip Sync themselves. Entirely out-of-band — no TripPlanner UI involved — so it's not drawn as a sequence diagram, but it's the implicit "otherwise" branch of this flow.

---

## Diagram 1b — Happy path: picking an accommodation that already has `wetu_id`

Context. This is the short alternative to Diagram 1. If Accommodation Search returns the accommodation with a `wetu_id` already attached (it was linked on a previous trip and the content is already in Elephant), the agent just picks it — no "Link content" form, no Wetu round-trip. The `wetu_id` is saved onto the Trip's offer item and the offer is ready for Trip Sync (Diagram 2).

![Diagram 1b (rendered via Kroki)](https://kroki.io/mermaid/png/eNptU8tu2zAQvOcrFrnURp0U6FEoDMiJGhQIWqES0GOwJtc2YWqpkJRT3_oR_cJ-SVeUnPgR39Y7M7szSwV67ogV3Rtce2yuQH7YRcddsyQ_lCo6D_maOAIGqNBSGMrUbtFHo0yL0q7LHlF700JpkZk8fC0uUIvigDqAFsWXpf80nzyQ2jrIy2_TC1Je9aRcKdc0TmM0jqEi9GpzlbBpoZv5vC4z-NESg1utyM8gJIyYOCIGMAyaQjSc6iRQl8JeFBk8FPU5fCUBnOMXheDzKhu3OKMMO1U3o-ajCREmhIIzkZoMyFK7EV9PXWc0fIQXit2T0dOD9OjkJ4XOxnBYsJ_Y-8zgDr0O8O_PX1COY38aa3hLegbs4AU9G15fBlMatT1ddAbK9n9e51pDdENq16eBHLferPedCnckto69zF6tgCzm0l3jhtK5P4RBJGWQlL67SOB26QlkUsEvIYNCa4GJNOlksec32LbiCdB6Qr0H-i2Rih6_TjjxBV6EPIvAcv_uq7lNvLsxPDmtjETvzU4et-58Pyq942rPCibj5wGfp7dnF5JwSP8Hek8SBg)

<details>
<summary>View Mermaid source (Diagram 1b)</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant AS as Accommodation Search

    Agent->>TP: Open offer, search accommodations in destination
    TP->>BE: GET accommodations for destination
    BE->>AS: Search accommodations
    AS-->>BE: List (each item: elephant_uuid + wetu_id)
    BE-->>TP: Results
    TP-->>Agent: Cards — content linked, no warning

    Agent->>TP: Pick accommodation, click "Add to offer"
    TP->>BE: Add to offer
    BE->>BE: Save (elephant_uuid, wetu_id) onto<br/>the Trip's offer item
    Note over BE: No Wetu call needed — the mapping already exists on<br/>the accommodation returned by Accommodation Search.<br/>Content still arrives during Trip Sync (Diagram 2).
    BE-->>TP: Added
```

</details>

Precondition for Trip Sync. Trip Sync can only run once **every** accommodation on the Trip has a `wetu_id` attached to its offer item — i.e. every accommodation has gone through either Diagram 1a or Diagram 1b (or Diagram 3 for manual input).

---

## Diagram 2 — Trip Sync: enriching the itinerary via Wetu's Itinerary API

Context. The heavy interaction. On "Trip with Sync", TripPlanner BE sends the itinerary skeleton (`wetu_id`s + leg dates) to Wetu's **itinerary** API, pulls the enriched itinerary back, and upserts accommodations and touristic areas into Elephant. A Sidekiq job then builds the TripViz JSON purely from Elephant (Wetu is not touched in that step).

Two important callouts from Gregor:
- The endpoint id pulling the enriched itinerary is Wetu's **private** API (the one that drives their own UI). 
- Before end-2024, area hierarchy was derived purely from polygons imported from Wetu. Polygons became unreliable / missing, so we additionally persist the explicit accommodation → area mapping that Wetu exposes in the enriched itinerary.

![Diagram 2 (rendered via Kroki)](https://kroki.io/mermaid/png/eNqtVt1u2zYUvs9THPhmMiZ3QbIroQ0Qp06RGUiNydkuhiGgpGObDUWyJGXXverVHmDYE_TR8iQ7JOUf2S5QtA3g6Ifn9_vOjyy-b1CW-JqzuWH1GdAfa5ySTV2giY-lUwau5ygdMAs5E2jjYzjWzDhecs3oeDrxElPDNUwEkxIN3I6OpIajjdRGaDh6WZhfrpI3WD4puJ7c9Y-U_kTXeLVwvXOc1JhZe9kj0ZFAvfCy4YadiDMfh0x4hU_8PSTD0bG__DKIXB7nSHH_wT9uUvC3SdlYp2o0_bMgHsAZXF1NJxncCF4-QS9gsuJuAflalr0gNp2QzHCUhVfgvETi_z_yKsZzrxyCWgaAMhg2XFTAt6nbJxRITEGxBoOs4nIOboEhqp9sAFTNZqTMHdY2Ix5LVdeqYo6T0opwJEegSUDgPA3ydAN0jjb1lmpMoTBMBssJnbFynUIjG4tVm-lwRCl4SjKYPEx3wUU6T3q08HP0EXP0yoMWhx2tjbZoHFaHTt6MpoDS8HKB1aE3bfiS7MYKebjbldFpF7_lb-8jI6WSjgj76-8sGHr-9LmLlYXnT_8BFYt0fMbJMQHeJhNhA6jQlgR7lE6YEECVPbf9FHjN5mi3hp1qDLdUTMCIs6-wfMM0UapWEp7_-ZdSsQ6NjG_9i1w1lMH1jCBh4UW8bZUTrcR67mNaLVACWzIuWCGwfzrRYMDHBTXTmljfmmHcWFCzLYct_UIpDbc0HZCViwNbXO6ADcJbKkNbZnDLZXWgs0s_UmqwVKaCyRi4BWy7-bFpNg0SxpOgjv9AmFrvstPyp7w-aF98HcI6JCUUwxc8obAI97j6ou0bgo5sd3KKRimDVyBx1TWdAnPU8EVDSq82me_5k7H-_fUE3N1S-lq8vej3wfwt0KbQVuJpjLfHwGegDVrK4htwp8sPgPs4LT-LoDvNHjuWt43Tfd3v9JFvdUpNiSU1-syoOkzr7RwOLUYk-pearYVixFZB07-dpVVFahTj4OL84teULGnBStrEBgVntMGB0Nu0e79bN5RNu40uzs_jtnk73qwgOgn7KmuXlKVjrHpUXsy6vSmfjzMYSfpaaBB6RdhFm_3nR2kP3qlit7-2GTNvL4VKUahSOSiEon3ok_QHHhBNAePZwcLz3n6PYMXvCY_w3joLzx2wY13m472CR3c4lagQw9xNqVca6cw6jtlTJRvHOOVrOD2cngrB0aAF53o-N7QjaWv5_cYgkSruopIMtdRSf9EA1_1drPllXJ0euCX_-OKdVTKC0aLbyvjNty8DCf023x2gNMrW6GXgOupmgZqOtR3dN63yYMbK8O3gYV5yXP0PMVtRZg)

<details>
<summary>View Mermaid source (Diagram 2)</summary>

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Sales Agent
    participant TP as Trip Planner FE
    participant BE as TripPlanner BE<br/>(Gecko API)
    participant Wetu as Wetu Itinerary API
    participant Eleph as Elephant
    participant SK as Sidekiq (BE)
    participant S3 as S3
    participant TripViz as TripViz (customer)

    Agent->>TP: Click "Trip with Sync"
    TP->>BE: Sync trip (trip_id)
    Note over BE: Build itinerary skeleton by reading the Trip's<br/>offer items: accommodation wetu_id per leg,<br/>leg dates, theme, branding (legacy, unused)

    BE->>Wetu: PUT itinerary<br/>(accommodation wetu_ids + dates)
    Wetu-->>BE: Itinerary upserted
    BE->>Wetu: GET enriched itinerary<br/>(private Wetu UI API)
    Wetu-->>BE: Itinerary JSON with content[]:<br/>• accommodations — identified by wetu_id,<br/>  descriptions (all langs), images<br/>• touristic areas — identified by wetu_id,<br/>  Cape Town → Western Cape → South Africa → Africa<br/>  (polygons when available)<br/>• accommodation → area mapping<br/>  (pairs of wetu_ids)

    loop For each accommodation in content[]
        BE->>Eleph: Find accommodation by wetu_id<br/>(record PK is elephant_uuid)
        alt Exists in Elephant
            BE->>Eleph: Update descriptions, images<br/>(by elephant_uuid)
        else New
            BE->>Eleph: Create accommodation<br/>(PK = new elephant_uuid, attribute = wetu_id)
        end
    end

    loop For each touristic area in content[]
        BE->>Eleph: Find area by wetu_id<br/>(record PK is elephant_uuid)
        alt Exists
            BE->>Eleph: Update descriptions, images, polygon<br/>(by elephant_uuid, polygon if present)
        else New
            BE->>Eleph: Create area<br/>(PK = new elephant_uuid, attribute = wetu_id)
        end
        BE->>Eleph: Upsert (accommodation_elephant_uuid → area_elephant_uuid) mapping<br/>— resolved from the wetu_id pairs in the payload above<br/>(added end-2024, replaces reliance on polygons)
    end

    BE-->>TP: 200 Sync OK
    TP-->>Agent: "Trip synced" toast

    BE->>SK: Enqueue "build TripViz JSON" job (trip_id)<br/>— async, does not block the sync response

    Note over SK: Resolve Trip → offer items → elephant_uuids
    SK->>Eleph: Fetch accommodations, areas, country,<br/>descriptions, images (all queries by elephant_uuid)
    Eleph-->>SK: Aggregated data (no Wetu calls in this step)
    SK->>S3: PUT tripviz.json

    TripViz->>S3: GET tripviz.json (on customer open)
    S3-->>TripViz: JSON
    TripViz-->>Agent: Customer-facing trip view
```

</details>

### ID assumptions used above (please verify — flag any wetu_id leaks)

The point of this list is to make every ID explicit so we can spot any wetu-specific ID sneaking into storage or logic where it doesn't belong. Confidence reflects how sure I am; "verify" items are where I'd like Gregor to confirm or correct.

| Step | Assumed ID in use | Confidence |
|------|-------------------|------------|
| Sync trigger — TP FE → BE | `trip_id` | High |
| Build itinerary skeleton | `wetu_id` per accommodation, read off the Trip's offer items (stored in Gecko API) | High |
| PUT / GET itinerary at Wetu | `wetu_id` on the wire (forced by Wetu's API) | High |
| Itinerary JSON content[] — accommodations, areas, and the accommodation→area pairs all identified by `wetu_id` inside Wetu's namespace | High |
| Elephant lookup for an accommodation / area | query by the `wetu_id` attribute; record PK is `elephant_uuid` | **Verify** — need to confirm Elephant actually has a `wetu_id` index rather than re-scanning |
| Elephant create for an accommodation / area | `elephant_uuid` as PK, `wetu_id` stored as attribute | High |
| Explicit accommodation → area mapping stored in Elephant | `elephant_accommodation_uuid → elephant_area_uuid` (translated from the `wetu_id` pair before persisting) | **Verify** — if we actually persist `wetu_id` pairs here, that's a wetu_id leak into Elephant worth retiring during deprecation |
| Sidekiq job argument | `trip_id` (job resolves to `elephant_uuid`s itself by reading the Trip) | **Verify** — job could equally take the offer_id or a list of elephant_uuids |
| Sidekiq fetches from Elephant | all queries by `elephant_uuid` | High |
| S3 object | keyed by `trip_id` (or a derived URL) | **Verify** |

Post-deprecation note. This is the interaction we want to remove. Content should come from catalog (Expedia / own-managed) instead of Wetu. Gregor: *"this would all just go away, without replacement"* — the upsert-into-Elephant half and the Sidekiq / S3 / TripViz half stay; only the Wetu calls and the Wetu-sourced content drop out.

Addresses the open question pinned on the Miro sketch ("why is area syncing done separately from the itinerary API call?") — it isn't a separate call. Areas arrive inside the same enriched itinerary payload as accommodations; we just branch on type and upsert into different Elephant tables. Worth re-checking in code that there's truly no second round-trip.

---

## Diagram 3 — Manual input with Link Content (accommodation or area, same flow)

Context. Used where there is no DMC API connection (Accommodation Search returns nothing). The agent creates a manual entry on the Trip **without** an Elephant UUID. Link Content returns a **mixed list** from Wetu — both accommodations and areas in the same response — and the agent can pick any one of them. **Both kinds of item are linked the same way**: the picked `wetu_id` is saved onto a single slot on the manual entry, with no type flag stored alongside it. The accommodation-vs-area distinction only surfaces later, at render time, when TripViz fetches the resolved Elephant entity and sees whether it's an accommodation record or an area record. The campground case is just a concrete instance of picking an area (e.g. "Cape Town") instead of a hotel — same operation, same storage, different rendering downstream.

Because there is no Elephant UUID yet, the first Trip Sync both enriches content **and** establishes the `elephant_uuid` on the manual entry so the invariant "TripViz only reads Elephant" holds.

![Diagram 3 (rendered via Kroki)](https://kroki.io/mermaid/png/eNptVMty2zoM3fcrMN7UmTppp8tMmxk7Udv0YXtq595lhqZgixOKVEkqqbrqR_QL75dcgJQUy6oXtkUBIM7BOfD4o0Yj8UaJgxPlC6CPqIM1dblDlx5lsA7mBzQBhIeN0OjTY3xdCReUVJWg19s1R2ydqmCthTHo4EM2ilpkXVQXtMje7dzrq-lHlA8W5uvbs1HSvxhqTou_U2lN4H5egQqKKgjXjFMyjVXBOfEPnbyIIbH186ur7foSrh2KgFAKUwsNdO4asAYC9ZY6MqLEGTgO-u_3HzAWnqiBe5XP-D-2he_rWuWpge2aSi-yS1ij88qHQe0YscjaiI14RKi0kFhYnRMNBMpGXl56sPs9naiAZZfUtsxZ-RjJqkIDk6_KPEBLzmQGoakQGMKwtQ0KJ4tE5a55Doid8SmF1IcD-qCs8YMQfnvelvmmfmIOmkEyN0JKW5Y2FylrvrwBQfT6SKQiUgsET3XAoa8ognhFQW08qVB0rMZYYfLU-V6LA0wHdeF1LHp2Qso15SiKIGVOn1NrT_3tSby58sQzj1Y3_ZgoNRJ4CXPT0JgC9cI4ChtQA2XxRUkFUpTVwdmaGpPCI7yHSskHEKZtZjSNDSlDkl2osOxaO0Wy-n4EpZ9NmmCXQ0JomfmLdNo3STbM7kg6sXvGtJl_y8BrG4j8g3A5WZjjIs2zGLVcHXFeJe0SewW6NPglsQL2MZqV1GaOr4-XH-v8IpacD-A--ggXlIflakt9SOty1o-VQuuGqY9ZDOIf9QuUIRSeYMDe2bL3MAjGYNguQZV4cSIEpu9v9rjWPLBJXE1RcJvGyMmJLegoWp80RN_3naWPbLG-29LO-Zhtn_cOTD0itPsT3p6NbJIZp2RBSPuUJComTcd2eyqJL1LwTrC2aG3dbj9l31tLwFg8SX2J8VaDx1OaRcpYK-S5uvLo4v7uO53R7qk93N3d3sBOkeDM4Rlum3uX0mgDHBv0RMhB7DR2ck5PSVMVD4lQRmHRBmBWSJ-VaLQVLbnxoo6qwT6FKVv3qWDyGFGs8kQIZGE9mrOhIxaE4CS_98WxNMeWmAHtOa15n_cOSAL-UOu90j7JhjVJ-HIft0ivx8mpAt--eZOUtPpyOpMoyH4sKscH9QM-b1ZL2NVK56Ss7iJe4crUyAMj4vqZXQwsskfaWSQYxtj7g65QoeGRDdjoN2syj09r7lzSMuismR52gremNTGBK6eCNLdujN1VF_8DeZy2_g)

<details>
<summary>View Mermaid source (Diagram 3)</summary>

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
    BE->>BE: Save wetu_id onto the Trip's offer item<br/>— SAME slot regardless of type,<br/>NO type flag persisted here
    Note over BE: One wetu_id on the manual entry.<br/>Accommodation vs area is NOT recorded locally —<br/>TripViz infers it from Elephant at render time.
    BE-->>TP: Linked

    Agent->>TP: Click "Trip with Sync"
    TP->>BE: Sync trip (trip_id)
    BE->>Wetu: PUT + GET itinerary (see Diagram 2)
    Wetu-->>BE: Enriched itinerary<br/>(the linked wetu_id comes back as EITHER<br/>an accommodation OR an area entry)

    Note over BE,Eleph: Same upsert as Diagram 2, plus UUID binding
    BE->>Eleph: Upsert by wetu_id<br/>(accommodation table OR area table,<br/>per the type in Wetu's payload)
    Eleph-->>BE: elephant_uuid (for whichever type was chosen)
    BE->>BE: Bind elephant_uuid onto the manual entry<br/>— SAME slot, still no type flag.<br/>Fulfils "TripViz reads only Elephant".
    BE-->>TP: 200 Sync OK

    Note over Agent,Eleph: Sidekiq JSON build + TripViz continue as in Diagram 2.<br/>TripViz fetches the Elephant entity by elephant_uuid<br/>and renders hotel-card vs area-card based on<br/>the entity's type in Elephant.
```

</details>

Post-deprecation note. Replace the Wetu search with a search against our own catalog that returns the same mixed list (accommodations + areas). The storage contract on the Trip's offer item doesn't change — still one `wetu_id`-equivalent slot, still no type flag. The UUID-binding-on-first-sync step goes away because picking a catalog item already returns an `elephant_uuid` directly.

---

## Diagram 4 — Transport leg location search (self-contained)

Context. For transport legs we need named waypoints with coordinates (airport, train station, harbor, ferry port, sometimes even an accommodation acting as a pickup point). These are pulled from Wetu's location search and saved onto the Trip's leg inside Gecko API — **nothing is written to Elephant**. The Routing Service then computes the geometry between the two waypoints so TripViz can draw the line with a proper route.

![Diagram 4 (rendered via Kroki)](https://kroki.io/mermaid/png/eNplk8Fu2zAMhu95CqKXJZiT3IMhRdN6RYBhM5JgPRasxNlCbMmT5ATeaQ-xJ9yTjJLiekh8sGzzp_TxJ-3oZ0da0JPC0mIzAb6w80Z3zRvZ9Cq8sfBQkvaADvZYk0uvMdyi9UqoFjl8KILiYFULRY1ak4XP-Y1qkw-qQbTJP73Z5Xr6TOJo4KHYzm6SXsh3IS2uX4xAr4yGPaEV1Y14tw_Snem80iWL7EkJmkRZBJ-v14diBblUHrxF7VpjPdRUZuD7luCMfWuU9omKFuUC7h6RAwdz1rDVnqyOAFjfJdRDwXtu8tWFKGHWF0wXJZucJeH7auR3UZ2OQSFM0xiZUjJASxgWZQMdPzk_hCq0b8a6dHTYcn45_RG1VLwDd2h65u-vA8KrkhlobCiDGv2y1uVsgLqYMabeGlUocQRjVak0LEGSY1_jtle142n0Drg8dnQs_V3BgdD8Dy7EV7H4a1b4GGF5EcZYGU4jl2xiF3oHDPI-LPD39x_Ia2qr0PtOe9OJiuR1geFsmWr7ajxjnOLkrcI8do4du4H4wXOvJNugfA-8pTheGKzptJx7LuIeXOBkKOuXpOX9bAHf-H9KA6AclEZTFrMstTVy5Kx8BQglmblUnBjUFXWWn5Vgl6P42ZiypvAXCSZbMnETLW9g--QWk9HV3Z5bZ5q244oYi-_T1Kjs_z4lL3b7YU52UckIDXnbh552dmzo6FnS8SDKHqbBjtC47-oXNNjO_gGJomIz)

<details>
<summary>View Mermaid source (Diagram 4)</summary>

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

    Note over BE: BE uses wetu_location_id for identity checks<br/>(round-trip? same start/end?). Once Wetu is gone,<br/>replace with a geo-distance heuristic or<br/>Google Places / Nominatim IDs.

    BE->>RS: Compute route (origin, destination)
    RS-->>BE: Route geometry / duration
    BE-->>TP: Route ready (for TripViz map)
```

</details>

Post-deprecation note. The simplest of the four to replace — swap Wetu location search for Google Places or Nominatim (OSM), licensing permitting, and replace the wetu_location_id-based identity checks in BE internals with a geo-distance heuristic. Gregor called this *"a story on a sprint, not an initiative"*.

---

## Open questions to refine together

1. **Accommodation Search branch** (Diagram 1). On the Miro sketch, the arrow from Accommodation Search labels the return as "accommodations with optional wetu_id". Is that service reading `wetu_id` straight from Elephant, or does it merge from elsewhere? Worth pinning before we remove Wetu — it drives whether "Link content" can disappear entirely or needs a catalog-backed replacement.
2. **Itinerary API payload shape** (Diagram 2). Areas and accommodations currently arrive in the same `content[]` array. The Miro question *"why area syncing done separately from itinerary API?"* — I think it's a naming artefact, not a separate network call. Worth confirming in the Gecko code before we promise "one diagram covers both".
3. **Explicit accommodation → area mapping** (Diagram 2). Stored on the accommodation, on the area, or a join? Affects what needs to be sourced from elsewhere once Wetu's polygons / hierarchy go away.
4. **Manual entry storage (Diagram 3).** The diagram assumes Link Content stores a single `wetu_id` slot with no type flag on the manual entry, and that TripViz infers "accommodation vs area" from the Elephant entity at render time. Worth confirming that (a) the slot is actually type-agnostic and (b) TripViz really does read the type from Elephant and not from a flag on the Trip's offer item.
5. **Transport leg internal checks** (Diagram 4). Besides round-trip / same-start-end, any other Gecko logic keyed on `wetu_location_id` (transport type inference, leg merging, etc.) that should be surfaced before we kill Wetu?
6. **Content Integration team offline flow**. Not drawn. Worth a 5th diagram (even a boxes-and-arrows one) if we want it in the same doc — currently only mentioned in prose under Diagram 1.
7. **Dead theme/branding buttons**. Gregor flagged that "theme" and "branding" selectors on the trip page drove only the legacy Wetu-side visualization, which no customer hits. Remove from UI rather than model — not drawn.