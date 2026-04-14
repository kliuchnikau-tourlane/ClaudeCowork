# Wetu Deprecation & Catalog System Rollout - KickOff

**Date**: 2026-04-13
**Time**: 15:45 - 16:35

## Attendees

- silvia.delatorre@tourlane.com
- gregor.schmidt@tourlane.com
- robert.wolf@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- pedro.alves@tourlane.com
- karolina.grabowska@tourlane.com
- kiryl.karetnikau@tourlane.com

## Transcript

[13:45:39] **Other**: Bigger.
[13:45:45] **Other**: How are you doing this Monday?
[13:45:49] **Other**: I think I keep saying I would have a meeting last Monday when you created three meetings on my calendar.
[13:45:56] **Other**: Is there anything like a meeting last Monday on Petrolane? No, I just had a better feedback to create three meetings.
[13:46:07] **Other**: I will complete action.
[13:46:18] **Other**: Yeah, yeah, complete Karen.
[13:46:25] **Other**: I'm the organizer.
[13:46:26] **Other**: Right?
[13:46:30] **Other**: I created another meeting today just to see all of you.
[13:46:35] **Other**: Now. The reason is that for.
[13:46:39] **Other**: In the past weeks since the dependency graph, since maybe a couple weeks more, we are basically discussing how rule out make use of our XPD capabilities.
[13:46:54] **Other**: While the Expedia certification is ongoing, we also.
[13:46:59] **Other**: Want to start having content and we also want to make use of the content automation that was planned by the speak.
[13:47:07] **Other**: Content automation is in the end.
[13:47:09] **Other**: Just.
[13:47:10] **Other**: One initiative that first of all removes the manual rough to wait on most of the many supply, which also would allow us to add new supply to our systems or make additional supply accessible.
[13:47:26] **Other**: With additional supply and mean actually additional more accommodations.
[13:47:31] **Other**: Specifically with the outsourcing initiatives, we really assume that we will have more supply digital connected with these two initiatives.
[13:47:42] **Other**: Because with API outsourcing, we are basically adding more inventory without the need for all data importance. And with content automation, we don't rely on humans to enable just 200 out of the 20,000, but basically make all the supply accessible that we want to.
[13:48:05] **Other**: Expanding our supply is something that we are aiming for to make more hotels available.
[13:48:13] **Other**: Background, it's this additional supply, connected supply, we want to tackle a lot of initiatives. So basically we want to have smart leakage, we want to have efficiency because they can have more supply that they can choose from.
[13:48:29] **Other**: That means the supply extension.
[13:48:35] **Other**: Is a meaningful goal for us. One big question so far.
[13:48:42] **Other**: Good.
[13:48:43] **Other**: One big blocker that we have realized is that the truth planner is in the end one system or this system where you create our content by adding new accommodations and adding accommodations to veto.
[13:48:58] **Other**: I mean, there are more ways of doing this properly, but the triplet has at the moment.
[13:49:03] **Other**: An option to import a supply from v2.
[13:49:08] **Other**: Import content. And actually has a radial dependency built into planner.
[13:49:16] **Other**: And whenever I'm saying something more, please. That means inside the two, we want to remove this V2 dependency.
[13:49:26] **Other**: And here not only to unblock the speedy initiatives, also to clean up our domains because this.
[13:49:35] **Other**: Connection to.
[13:49:38] **Other**: Is an architectural depth that we have now since three, four years. And we really want to tackle this. That means inside cycle two, we really want to start working on this.
[13:49:50] **Other**: And what I'm getting asked for is.
[13:49:52] **Other**: How much work is it actually?
[13:49:55] **Other**: And I don't need weekdays or whatever. I just need to understand plus a high level blocking packages that are in front of us.
[13:50:04] **Other**: There we have a lot of discussions with Pedro. Click on me, but also Silvia.
[13:50:12] **Other**: And I don't know if we already have this common understanding of the work packages that are in front of us.
[13:50:21] **Other**: And for me.
[13:50:26] **Other**: What did I say two years? Three years.
[13:50:32] **Other**: So basically what I would like to understand is do we already have a high level an understanding of the high level problem packages? If not, how can we get this high level understanding?
[13:50:44] **Other**: And now I would hand first to Aleksei and Pedro because you have to start looking from this like that.
[13:50:55] **Other**: Have something already.
[13:50:57] **Other**: Yes.
[13:51:00] **Other**: So.
[13:51:03] **Other**: To assist in the application.
[13:51:09] **Other**: We had to choices.
[13:51:11] **Other**: We either just completely break with what is there, which practically means dropping manual items. And by extension, we could not fully support offline suppliers or unrequest accommodations or any kind of modifications which heavily rely on that feature.
[13:51:34] **Other**: Or we can keep supporting that feature and change those processes gradually with tp2.
[13:51:42] **Other**: So we're going to, we went with supporting, keep supporting manual items.
[13:51:48] **Other**: And to do that catalog will replace that to as a source of accommodation content.
[13:51:58] **Other**: That that will offer today.
[13:52:02] **Other**: One comment. That means.
[13:52:05] **Other**: We still change in a way that we can only select manually what's in the catalog.
[13:52:13] **Other**: Yes, which is in a sense similar to what you have today with Pet2, where you can only select what's in vetu. The big difference is if something is not in Petro, you can ask the CI team or TX to reach out to veto. And after a few emails content would show up in vatu and then you could again pull it.
[13:52:36] **Other**: So with Expedia, that's not going to happen. But on the other hand.
[13:52:44] **Other**: XP does have like two or three times the inventory that vector has. So we also expect less need to do that in the first place.
[13:52:56] **Other**: To support this.
[13:52:59] **Other**: There was a bit of a concern that we would have to break with kind of a key behavior in catalog, which is we only fetch content for matching inventory. So you would have to have a matching supply.
[13:53:16] **Other**: Inventory supply record or an inventory record.
[13:53:20] **Other**: Which was put in question because we also, at least initially don't want to access expedia's entire inventory.
[13:53:28] **Other**: We still want to restrict it to matching dmc content.
[13:53:36] **Other**: Now to cut the short, we will not change that behavior, but we will enable the entire expedia inventory, which is what we already have today. So no need to change the process.
[13:53:52] **Other**: So content onboarding will work as usual.
[13:53:57] **Other**: We need to develop a search feature.
[13:54:01] **Other**: That matches the manual items search feature also in catalog essentially this means search by name.
[13:54:13] **Other**: It was what was not initially planned, but that's just an additional filter that we for the search functionality that we would always want to have.
[13:54:23] **Other**: This is not done yet. So this is work to be done.
[13:54:28] **Other**: To enable all this work, something still needs to control.
[13:54:36] **Other**: Whether we offer rates.
[13:54:39] **Other**: From expedient inventory without a matching DMC inventory to back it up.
[13:54:45] **Other**: But this will be supplies responsibility.
[13:54:48] **Other**: So when we get a request from trip planner to quote an accommodation.
[13:54:56] **Other**: And we saw and we and supply sees, oh, we, I have this accommodation. It has inventory, but no DMC inventory. So it will filter out that from the search results.
[13:55:09] **Other**: So yeah, these are the key points for the scratchy team. Essentially what's left to do is the search endpoint. And when fetching rates, making sure that we don't serve extrapedia rates if there's no matching DMC rights as well.
[13:55:38] **Other**: That means on a high level what you would start. Let me just recap on a high level. You would basically start serving accommodations in the accommodation search endpoint without v2 ID.
[13:55:53] **Other**: Correct.
[13:55:57] **Other**: That means the Tolar would receive accommodations without ratio ID.
[13:56:01] **Other**: They would need to handle this to bypass one workflow manual workflows in manual accommodations. You could provide another endpoint, that could search in our catalog system and very quick link manual accommodations by yourself to solve the specific workflow.
[13:56:20] **Other**: Okay.
[13:56:21] **Other**: Got it. Yeah, I should mention something else.
[13:56:29] **Other**: Or manual input is also used for destinations. This is still very much work in progress. So we will be able to keep serving this from elephant.
[13:56:42] **Other**: But limited to what is already an elephant, a fallback plan to. So if we do this, if we just say what's an elephant, then essentially we are blocked to launch new destinations.
[13:56:58] **Other**: Fallback option is to just try to import as much content as possible from vet tool, although we know that this is still a problem regarding the geographical shape.
[13:57:09] **Other**: But it doesn't really change the problem. So we still have that.
[13:57:14] **Other**: We may just end up with more regions or more destinations that we have to fetch or that we have to somehow map.
[13:57:22] **Other**: To red replacement.
[13:57:25] **Other**: But beyond, because it will take a while until we have that alternative in place.
[13:57:31] **Other**: This is where we may have, this is where we will have some limitations.
[13:57:35] **Other**: Okay.
[13:57:41] **Other**: Yeah, this was actually what I wanted to ask.
[13:57:45] **Other**: So.
[13:57:48] **Other**: For the manual items, we are currently able to search for accommodations and areas where you said destinations. So the assumption is that we would.
[13:57:58] **Other**: Search for those areas in elephant.
[13:58:03] **Other**: And hope that they are already there and have been imported in the past.
[13:58:07] **Other**: Somehow.
[13:58:09] **Other**: Correct. It is a no limitation from what we gather are round two destinations that we're planning to launch this year of northern countries.
[13:58:26] **Other**: A new destination as a never sold this.
[13:58:35] **Other**: We are releasing to destinations. Sorry. This week we are launching two destinations.
[13:58:41] **Other**: But those are just new corridors, right?
[13:58:48] **Other**: So we have the destination, but it's a new corridor.
[13:58:53] **Other**: And new market.
[13:58:55] **Other**: Right? Yes.
[13:58:58] **Other**: And so one is we don't, the other one is another nordic country.
[13:59:05] **Other**: I mean, they're not that many. So just one or the others.
[13:59:11] **Other**: I mean for the timeline, it's really also up to you as an up to trip planner how to plan the deprecation of vetu if this is something that you can do piecemeal. Like, okay, we do accommodations first. We do the areas, destinations or second or know that there's no one or the other. It's the same thing when we turn off one, we turn off the other.
[13:59:42] **Other**: I think the key thing is understanding the limitations, which is when we turn that off, there's no way for us to add new destinations until a full replacement is in place.
[14:00:00] **Other**: New destinations until a full replacement is in place.
[14:00:05] **Other**: Go watch more detail.
[14:00:07] **Other**: Like when you say destination, are you now referring to countries and things we haven't at the inquiry experience? I used to referring to the area.
[14:00:19] **Other**: The small interesting area.
[14:00:22] **Other**: All of the above, I guess. So whatever we use the virtual content for from countries touristic areas and anything in between.
[14:00:34] **Other**: If we deprecate fatu right now we have nothing to replace it.
[14:00:44] **Other**: And it might take a while until something's there and by a while, I mean definitely in the months range.
[14:00:51] **Other**: Hopefully you less than a quarter.
[14:00:53] **Other**: But that I cannot promise anything.
[14:01:00] **Other**: So if we.
[14:01:02] **Other**: Just because I know this company. So if we change.
[14:01:06] **Other**: The API, like the user interface in trip planner to use.
[14:01:11] **Other**: Elephants area search and catalogs accommodation search instead of V2's content search.
[14:01:16] **Other**: Tomorrow.
[14:01:20] **Other**: Assuming that we have passed the XPGS certification.
[14:01:24] **Other**: First. So maybe next week, not tomorrow.
[14:01:32] **Other**: And then the next day somebody comes in and says, I need a stop in.
[14:01:37] **Other**: Delra.
[14:01:39] **Other**: Then our answer will be a luck. Try again next year.
[14:01:47] **Other**: Hopefully with a shorter timeline than next year. But yes, to be clear, this should be transparent to business stakeholders so that they are not surprised by this. So this might be all the way up to Karen or above.
[14:02:09] **Other**: Who will be responsible to get this buy.
[14:02:15] **Other**: Team, the multi team.
[14:02:18] **Other**: Robert.
[14:02:20] **Other**: To be honest, I think it's a speedy team, but I, we will support.
[14:02:25] **Other**: Like I have two risks now or like two decisions that needs to be announced. And the one is manual accommodations can only be replaced with Expedia inventory.
[14:02:34] **Other**: And the second risk is.
[14:02:37] **Other**: We are starting in cycle two with touristic areas that we currently have.
[14:02:43] **Other**: And we will not able to extend neutralistic areas as long as we don't have a founder solution to do this on scale.
[14:02:51] **Other**: I mean, the first part is that anything like we can only sell expedia accommodations. Also API connected. We are 100% relying on exterior.
[14:03:05] **Other**: Which again is still a bigger set than.
[14:03:11] **Other**: Yeah, yeah. But it's.
[14:03:14] **Other**: Something like there is this assumption that Expedia will have certain gaps in their inventory.
[14:03:22] **Other**: And we are not sure how big those gaps are and how much they affect the trips feed used to sell.
[14:03:32] **Other**: You Alexei or Kiryl remember better than I, but I seem to the number 95% comes to mind.
[14:03:40] **Other**: So I think the problem is that it's unequal distributed. Overall we have no problem over all their concrete.
[14:03:49] **Other**: High.
[14:03:50] **Other**: There are maybe small destinations.
[14:03:53] **Other**: Not by geographically or talking volume. There are some African destinations where we may have not as good coverage by expedia. But this is what we need to waste a service. This is what we need to work out.
[14:04:07] **Other**: It's not overall.
[14:04:09] **Other**: Like honestly 95% of our destinations will work. It's really one, two, three destinations where we may have a problem with this decision.
[14:04:18] **Other**: And then the question is how we implement this manual work. In the worst case, we will show no images with a name on the accommodation. But this manual work in the trip planner could be more complex.
[14:04:31] **Other**: Sorry for prolonging the conversation. I know you had your hand raised, but I just wanted to cover this last point.
[14:04:40] **Other**: There's there is an orthogonal topic here, which is whether we keep existing a combination content, especially if there's no matching expedia content.
[14:04:54] **Other**: This is something that we haven't looked into, but it's something that we would look into regardless.
[14:05:00] **Other**: So I didn't mention it specifically because again, it would always, it's always something we would be doing.
[14:05:08] **Other**: And if we see that it actually has more relevance now than before, then sure.
[14:05:16] **Other**: We can bring it up in terms of how soon we tackle that.
[14:05:21] **Other**: But it's not like, okay, we're going to switch from what we have to something completely different and we're going to drop the existing data set.
[14:05:30] **Other**: Doesn't have to be that way.
[14:05:33] **Other**: Where we might see some limits is expedia as a whole bunch of properties that we won't have.
[14:05:42] **Other**: But again, this is also.
[14:05:44] **Other**: No.
[14:05:48] **Other**: I do have three questions.
[14:05:50] **Other**: So initially it was one, so but the first question that I have is just to validate my understanding. You mentioned that you will be returning the prizes of Expedia that have a matching DMC.
[14:06:01] **Other**: That means that the content will still be what we have on the existing DMC. So we are not unlocking completely expedia.
[14:06:10] **Other**: Like all the content of expedia will not be returned anyway unless we had it already in the past.
[14:06:18] **Other**: As.
[14:06:20] **Other**: For the MC sorry.
[14:06:24] **Other**: Correct.
[14:06:26] **Other**: So today we limit inventory from OTAs, mostly hotels to that which has DMC, which is also covered by dmcs to make sure that we don't overdo it on DOTA inventory risking mix and match.
[14:06:45] **Other**: And expedia also because of the big gap in terms of what is covered by expedient inventory.
[14:06:53] **Other**: Or.
[14:06:54] **Other**: The gap of expedient, which is not covered by DMC inventory. We are restricted initially until like Robert said we have smart working in place.
[14:07:06] **Other**: And also as we are two nuances or to.
[14:07:16] **Other**: Things that help with this one expedia enabling expedient content will also enable a lot more DMC inventory that we don't have today because of the lack content. So that's one. And because we are teams also started the integration with or early stages of the integration with the supplier.
[14:07:43] **Other**: Starting in May, we shouldn't expect to see more and more suppliers so that the inventory can go continuously grow.
[14:07:53] **Other**: That's good news. Like at least that there are some extra inventory that will be unlocked. So my second question is related to this gap that was maybe surfaced before. So if there's any gap like who's going to be responsible for the user experience and if there are some workarounds or anything that needs to be done because it might come at some point that it will become a request for the trip planner.
[14:08:16] **Other**: And we will definitely not be able to do anything. So like who's going to make sure that there is this process understanding and what will we do? Like what's the default response for this is not included in expedia for like these three destinations that maybe Robert mentioned.
[14:08:35] **Other**: But who will handle that part.
[14:08:38] **Other**: As far as I didn't get the gap in what?
[14:08:42] **Other**: Between the inventory that we have and that we.
[14:08:46] **Other**: Could offer at the end.
[14:08:49] **Other**: What Silvia is saying the triple energy may well get support requests from sales agent. Hey, can you add this accommodations or do get business requests to add in accommodation? I think.
[14:09:01] **Other**: The speedy team is responsible and we really need to be clear to the business side that this is a decision that we can only do this if we can only achieve the supply extension.
[14:09:10] **Other**: And content automation if we make this decision.
[14:09:13] **Other**: The decision is actually already made.
[14:09:17] **Other**: And for me it's more a question how do we bring this into the organization and do they understand the consequences of this decision?
[14:09:27] **Other**: Not showing up is already a thing today. So I'm not, I didn't fully understand what would be the difference. They have a process to bring show them up like this is the difference. Like now they have a way even a manual and if it takes two, three days or four weeks they have a chance of doing it. Right now if the accommodation not in Expedia, there's no chance of doing.
[14:09:50] **Other**: Yeah, well that's the point that was mentioned like the principle. It would be what up to the Schmidti team to make this transparent to Karen so that here anyone else can make a decision.
[14:10:07] **Other**: To say yeah that this is fine.
[14:10:11] **Other**: To be clear there's no really no way around this.
[14:10:18] **Other**: So yeah it's fun. It's just we all it's much more technical than what it is like for the rest of the people. So sorry it's technical enough for others to really understand the deep consequences that this have. So that's what I wanted to to make sure that in terms of support and everything, it kind of clarified. I do still have like two questions. Like one is more like also like regarding expedia. So I probably had to be this person, but we are relying on experience certification. We're assuming that it will work. Is there any chance that they would say hey for whatever reason you cannot use the content or these forward like that they tell us you need to pause or that we reach the API limits or anything that could block the operation itself.
[14:11:09] **Other**: The certification.
[14:11:12] **Other**: I think the biggest risk point is the vouchers. Like say.
[14:11:17] **Other**: Are do you know.
[14:11:18] **Other**: More?
[14:11:19] **You**: Everything is going.
[14:11:21] **You**: According to a plan, right? We are kind of two-thirds.
[14:11:26] **You**: Done with certification requirements.
[14:11:29] **You**: And we don't expect them to kind of on the last item to say no, but there is always a risk.
[14:11:37] **You**: Of tsunami and things like that.
[14:11:41] **You**: So.
[14:11:43] **You**: But yeah, realistically, we don't see.
[14:11:47] **You**: This at the moment.
[14:11:49] **You**: They may just abort process at the last stage.
[14:11:55] **Other**: On top of that what can happen even past the certification is we decide not to sell more expedia, not to do more bookings with Expedia because of the credit limit.
[14:12:08] **Other**: But beyond that XPD actually change to their requirements in a way that is a lot more favorable to us compared to a couple of years ago.
[14:12:20] **Other**: A couple of years ago they said you can only use our content if you're booking with us.
[14:12:25] **Other**: Now they say you have to use our content regardless.
[14:12:30] **Other**: So this actually plays in our favor.
[14:12:32] **Other**: But then we have like nice. So basically like what I want to know is like that we have like a good API rate limit and that we are not bounded to the booking with them because then that will also.
[14:12:43] **Other**: Reduce the option. So like this search like the lookup versus booking rate.
[14:12:50] **Other**: Yeah anticipating anything that could break after the certification, the whole operation.
[14:12:59] **Other**: What they call the shopping API is rate limited. The content API is not the content API we just use in the background. So it's not part of the request path.
[14:13:11] **Other**: But yeah, I mean again business as usual. We also have rate limits on hotel beds and we hit them every now and then.
[14:13:22] **Other**: Okay.
[14:13:26] **Other**: No I was just going to say my last question because you mentioned mix and match and because I'm not so sure like how this is working.
[14:13:33] **Other**: Do we need to change anything on mix and match like if there are any IDs or anything that makes sense for us.
[14:13:39] **Other**: In the front end for whatever it is.
[14:13:42] **Other**: That we have to change.
[14:13:44] **Other**: No, no change. So this would always be within either catalog or supply.
[14:13:54] **Other**: For a while we considered doing this filtering on catalog side.
[14:14:01] **Other**: But actually it actually makes more sense to do it on supply because it is a supply concern.
[14:14:06] **Other**: So this would always be just not a concern of trip planner to look at whatever rates are coming and see oh I see a raise from expedite. I don't see right from a DMC. So I'm going to ignore this one.
[14:14:20] **Other**: So this is would always be within either catalog or supply.
[14:14:27] **Other**: And for the rest of mix and matches again business as usual.
[14:14:34] **Other**: I think the important point here is that at the moment.
[14:14:38] **Other**: Like we should not mix different initiatives for the moment. We will still book with the DMC. We will still select even in the plan as a room from the DMC. We will just have the content from Expedia.
[14:14:52] **Other**: And also yeah. This is why for the quoting we do require the DMC overlap.
[14:14:56] **Other**: That means we always need to have a matching partner on the DMC side. But right now what would need to be clear is we are not enabling even the inventory from the DMC because we don't have some content.
[14:15:10] **Other**: For the for the DMC. That means even just.
[14:15:18] **Other**: Any evening what we have contracted and what we have access to from the DMC is currently not possible.
[14:15:23] **Other**: And this initiative would allow us to scale up at least on the DMC side that we make all the deep sea inventory accessible and on the same time it lays the foundation to then really switch to more fancy more advanced way with smart booking and XPD coding.
[14:15:39] **Other**: But in the first step it just makes the DMC content or like the BMC and then to be more accessible by having the automated content from Expedia.
[14:15:53] **Other**: Okay.
[14:15:56] **Other**: Saying this from the speedy team I three main work packages.
[14:16:02] **Other**: Accommodation like removing the V2 ID from the endpoints.
[14:16:06] **Other**: Providing an endpoint for manual accommodation search in catalog and providing an endpoint for manual.
[14:16:12] **Other**: Area search.
[14:16:13] **Other**: In the new area system. So this is a main work package beside what you have already built with a catalyst system.
[14:16:22] **Other**: Yeah. Can we do the removing part last?
[14:16:29] **Other**: My mom would be like to break things.
[14:16:31] **Other**: Right.
[14:16:34] **Other**: I get your point.
[14:16:36] **Other**: On the trip planner side. Do we have a similar understanding on like don't send me this confluence page from 2020.
[14:16:46] **Other**: Is there something what we already knew that needs to be done on the triplet aside from my understanding it's of course we to now link the manual searches for accommodation and accommodation. But from your head do you already know some high level work packages?
[14:17:04] **Other**: It's exactly those two.
[14:17:06] **Other**: So using the.
[14:17:10] **Other**: Every other thing maybe it's in the old area search that has been part of elephants since 2020. I don't know. Then use the accommodation search from catalog.
[14:17:22] **Other**: Then.
[14:17:24] **Other**: We need to figure out.
[14:17:30] **Other**: How we.
[14:17:34] **Other**: Transport stops.
[14:17:40] **Other**: Because they will have like we first of all we need to decide whether we want to keep using v2 as a transport stop provider or whether we want to use in different source like google places or nominatum.
[14:17:57] **Other**: And then we need to decide how we can turn this into like how we can.
[14:18:06] **Other**: We need to change our internal data structure so that we can.
[14:18:11] **Other**: Create proper transport with shops that are coming from different places. Like right now all stop locations come from.
[14:18:20] **Other**: V2 they are either an accommodation or an area or.
[14:18:25] **Other**: Like a harbor or whatever all coming from the same V2 database with a unique ID.
[14:18:36] **Other**: Which makes certain things easy.
[14:18:39] **Other**: And then we they would come from different sources like the.
[14:18:45] **Other**: Would be a catalog accommodation, UUID. It would be an elephant area UUID or it would be some kind of ID from.
[14:18:58] **Other**: Whatever location provider we use.
[14:19:03] **Other**: And this is doable. It's just somebody needs to have.
[14:19:07] **Other**: A good think about it and figure out whether there's edge cases we need and how the migration can be done.
[14:19:16] **Other**: If we need a migration if we can just continue doing what we've done and then only.
[14:19:23] **Other**: Like gradually migrate that if you use the drip planner that you then.
[14:19:29] **Other**: Replace all transports with new transport locations when you change them.
[14:19:34] **Other**: I have two questions Gregor this is affecting current needs about like the transport recommendation as well like the stuff that we are building in cycle one would need to touch again because of this.
[14:19:45] **Other**: Correct?
[14:19:48] **Other**: But this thing currently does it's looking up transport locations that are recommended and trying to map them to v2 locations.
[14:19:56] **Other**: Change this again.
[14:19:59] **Other**: Yes would need to.
[14:20:02] **Other**: Like if we want to have unique IDs on every transport location then this would need to look up I don't know Google places instead of v2 ids.
[14:20:14] **Other**: Or it if we don't need transport IDs like location IDs then we can remove it and just store the geolocation and the name that we already get from the recommendation.
[14:20:26] **Other**: Okay is there anything more besides these things?
[14:20:33] **Other**: Well we obviously need to stop syncing webstore.
[14:20:37] **Other**: But this should be the easiest of all of them.
[14:20:42] **Other**: But the tripvs like the tree bees gets content from web two and it directly.
[14:20:50] **Other**: But it has it uses the web to ID for something.
[14:20:54] **Other**: And yes but it wouldn't do that anymore.
[14:20:57] **Other**: This is to change it.
[14:21:02] **Other**: When we change the linking form then we don't need to look at the vehicle IDs anymore. Like if we are linking.
[14:21:13] **Other**: If we change the manual accommodation form to directly fetch an accommodation ID and we don't need to look at the v2 content ID anymore.
[14:21:23] **Other**: And then we can change this lookup.
[14:21:26] **Other**: So yes there's a certain cleanup step that I that is hard for me to describe.
[14:21:35] **Other**: So you're right in the sense that there is some additional work but it's part of this.
[14:21:42] **Other**: Changing the search.
[14:21:46] **Other**: I would say but it's the same it's not yeah I mean it's it's correct to point this out. Yes, it's an extra.
[14:21:52] **Other**: Height.
[14:21:53] **Other**: So the export item I'm trying to further down the extra.
[14:22:00] **Other**: The extra item is currently and this is not like I don't know how to condense this.
[14:22:07] **Other**: Currently the trip planner or gecko backend feeds the v2 id as the primary source for accommodation.
[14:22:18] **Other**: For the accommodation record.
[14:22:21] **Other**: And during the triple sync it will.
[14:22:24] **Other**: Like it that only.
[14:22:29] **Other**: Thing if everything has a virtual ID and if during the trip is sync it will fetch the v2 ID from elephant and replace the proper UUI like the previous UUID with the one that it found. And so those things need to stop.
[14:22:47] **Other**: Pedro.
[14:22:52] **Other**: Just for me to.
[14:22:55] **Other**: See if I got it right. So I'm looking at the list of use cases and that we collected a couple years ago about the interaction with Petu. I just want to see if we cover all of them. So obviously fetching content for accommodations that goes away.
[14:23:14] **Other**: Manual input that's the combination areas which are which are used for campgrounds. So I guess this also covered destination content the same. So the custom start and then locations for like transport. This is the transport that you mentioned a minute ago I assume.
[14:23:39] **Other**: Then fixed routes.
[14:23:42] **Other**: Is this still a thing?
[14:23:44] **Other**: So I actually like two years ago or so.
[14:23:51] **Other**: I downloaded all the fixed routes that we have created in v2 and replace the proper v2 look up with look up into this YAML file.
[14:24:02] **Other**: And nobody ever complained that they are not able to change the routes anymore. So I think this is just an unused feature that I.
[14:24:12] **Other**: Replaced with a static look up to make sure that I'm not breaking anybody's weird use cases and apparently like I would even say this is really not used and somebody's just accidentally clicking that thing occasionally. But.
[14:24:26] **Other**: Anyway it's not a problem.
[14:24:30] **Other**: Okay so then yeah.
[14:24:39] **Other**: I'm trying to. Okay, so then that was it.
[14:24:45] **Other**: I think we will need to add something which is at least to block users to add.
[14:24:49] **Other**: Accommodations on the front end.
[14:24:52] **Other**: No, I mean this is a manual linking right. They can still add the accommodation in the trip planner.
[14:24:57] **Other**: But they need to link it against like link it against content. And currently this linking happens with v2.
[14:25:04] **Other**: Like you have an accommodation search and then you link it against the v2 content. And what we would do is they would still add a manual accommodation but they could link a king against the catalog content.
[14:25:15] **Other**: But we said that like if they want to have a new stop this will not work because now we don't have the gear shape or whatever is what we have from web two. So we should block it because if people is able to use these in their mind it will not be clear like why they cannot add a new destination or a new stop because you are offering these options. So one thing is to create like to associate a manual accommodation rather than to create a new content. Like I think the creation of new content should be blocked.
[14:25:48] **Other**: There's no such thing. There's no explicit create new content in triplan. I user interface. What they do is they link content from v2 and if that didn't exist before it will be created automatically.
[14:26:01] **Other**: But it's the same interaction if they pick in something that was imported in the past or something that was never imported before.
[14:26:10] **Other**: One different. So the only difference would now be that the list only includes items that have been imported previously.
[14:26:21] **Other**: I mean the difference is actually we as we have some catalog, this expedia content, the likelihood that you can't find anything is lower because expedia is so much bigger. What is actually the restriction that has in mind.
[14:26:36] **Other**: Is we can now import manually everything that expedia has with an existing touristic area.
[14:26:43] **Other**: Which should be the case for most of our soil destinations.
[14:26:47] **Other**: But with the old way to manual accommodations, we also imported the touristic areas.
[14:26:53] **Other**: Right. Yeah. That means we have a nasal limitation.
[14:26:58] **Other**: Now when you link against the catalog system, you should only be able to link accommodations with a touristic areas.
[14:27:08] **Other**: Right, good point. I forgot about that.
[14:27:11] **Other**: I forgot about that because again, this was something that we were discussing either way.
[14:27:20] **Other**: Until we have full replacement for destinations. A plan is to look at the geo shapes that we do have.
[14:27:31] **Other**: Do this manual association.
[14:27:34] **Other**: So that we can serve additional Expedia content.
[14:27:41] **Other**: Properly linked to area data.
[14:27:47] **You**: They want to.
[14:27:48] **Other**: Which brings me.
[14:27:48] **You**: Put.
[14:27:52] **You**: The shapes that we got from wet. We just map them to conditions from experience.
[14:27:56] **Other**: Correct.
[14:27:57] **Other**: Yeah. Eventually we'll have.
[14:28:02] **Other**: The new destination area domain and then that will be the new service that owns all that and will be able to complete the assignment of accommodations to areas administrative and touristic ones alike.
[14:28:20] **Other**: I have something to add here. So we will not get any new errors within geo shapes, right?
[14:28:26] **Other**: So the so the amount is already limited.
[14:28:31] **Other**: That's not correct.
[14:28:33] **Other**: Small nuanced like for new areas we may or may not get it get a geo shape.
[14:28:42] **Other**: How to understand like if we.
[14:28:47] **Other**: Will or will not because like this is important right? No, it depends on vitu's internal data.
[14:28:53] **Other**: Like they.
[14:28:54] **Other**: When we import an area it may or may not have a geo shape.
[14:28:59] **Other**: But then if we switch to the research.
[14:29:05] **Other**: Coming from elephant or from Pedro. Right. So in this case how this symbol happened between that and our system.
[14:29:16] **Other**: Doesn't.
[14:29:20] **Other**: Anymore.
[14:29:22] **Other**: But we have new areas to be able to do this mapping between Alice and accommodations.
[14:29:29] **Other**: That's what I asked earlier like the if there somebody asks for new areas the answer will be yes next year.
[14:29:42] **Other**: Something similar question would be what if somebody wants to change the pictures or the description of areas or add in translation.
[14:29:54] **Other**: This can be done in that incurator already.
[14:29:57] **Other**: Know no not really.
[14:30:00] **Other**: But kind of because item curator is explicitly limited to admin areas.
[14:30:09] **Other**: You can extend the things that are out you can expose everything else.
[14:30:12] **Other**: And like that's not the problem at all.
[14:30:15] **Other**: Okay it would be one of the work packages that Robert may want to write down.
[14:30:22] **Other**: Which work package to manageable item curator to add a heuristic area.
[14:30:28] **Other**: Which would be not necessarily tied to the v2 coach because we have another work package which is building on top of touristic areas.
[14:30:40] **Other**: Like this is about the veto deploration in the trip planner.
[14:30:43] **Other**: Which has some connection.
[14:30:45] **Other**: To a touristic area replacement but the touristic area replacement is actually quite separate.
[14:30:52] **Other**: We're not talking about a replacement. We're just talking about keeping the current touristic areas to date.
[14:30:58] **Other**: Okay all good.
[14:31:01] **Other**: Then I would change the restrictions that we are introducing is in the twid planner they can only add accommodations from the Expedia inventory with existing areas.
[14:31:13] **Other**: So as long as we can map an existing area as long as part of the Expedia inventory we can add manual accommodation into the.
[14:31:22] **Other**: Other two conditions that that are met.
[14:31:25] **Other**: And existing areas means we can map it by gear shape or by anything else. But this is a restrictions in general that we're using for manual items. This is a good limitations for the new destinations.
[14:31:37] **Other**: Silver this is the big limitation for the new destination because all manual accreditation the moment you want accommodations. This is the restriction that you have. It needs to be part of the XPD invention.
[14:31:52] **Other**: And it needs to be covered by an existing area.
[14:31:55] **Other**: In an existing destination that we are selling since a couple of years, the likelihood that we have an area is quite high.
[14:32:02] **Other**: Yeah, I'm talking about the new destinations right like the two that we are going to launch this year.
[14:32:10] **Other**: The new corridors like the new destination.
[14:32:12] **Other**: S.
[14:32:13] **Other**: Like because I understood that these are not just corridors but like the brand new destinations.
[14:32:19] **Other**: But we don't have.
[14:32:21] **Other**: Touristic areas for yet.
[14:32:25] **Other**: So let me just answer this like we will have another initiative to build up or extend over our touristic area approach. This most likely goes into cycle 3 because in cycle 1 I would focus to the place or like take only our touristic areas that we currently have. But we need to find a touristic error replacement in the speedy team.
[14:32:47] **Other**: Okay or whatever. But for me these.
[14:32:51] **Other**: Are, as I said, I don't necessarily see this put to initiative connected.
[14:32:56] **Other**: You need to have an endpoint virtualistic areas.
[14:33:00] **Other**: For this initiative, but everything else is then separated.
[14:33:04] **Other**: And we can iterate over touristic areas in this BD team without impacting another team again.
[14:33:16] **Other**: I felt like we were maybe mixing a whole bunch of topics right now.
[14:33:22] **Other**: So.
[14:33:25] **Other**: There are let me start by saying how I sitting. So we have different levels of areas from the continent all the way to touristic area small touristic area could be a neighborhood city center or something.
[14:33:43] **Other**: Every accommodation will have at least.
[14:33:52] **Other**: Content for that because we have content for all mostly all countries.
[14:33:58] **Other**: As long as they weren't.
[14:34:00] **Other**: Changed or created since they're like the last six years.
[14:34:06] **Other**: So we will have content for all of those we may not have.
[14:34:15] **Other**: Below that level of. So in that sense.
[14:34:22] **Other**: We can serve every accommodation that we have.
[14:34:26] **Other**: The limitation is on trip contriput may end up having a much larger grouping than if we were to have touristic areas where we could group in smaller areas as I understood it.
[14:34:44] **Other**: Then it's also a decision on how.
[14:34:50] **Other**: We filter out exactly accommodations. This is the thing. It's not has, does it have is does it have detailed enough or not?
[14:35:03] **Other**: That's one regarding the replacement.
[14:35:08] **Other**: Yeah they're separate but very well connected because today we have a feature that allows us to launch new destinations and if we deprecate that we won't we will be unable to launch new destination.
[14:35:25] **Other**: And so we'll just buy ourselves some label a lot of accommodations for the destinations that we have right now and we will work on replacing
