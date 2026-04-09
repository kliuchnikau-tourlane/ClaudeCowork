# Kick-off: Destinations onboarding

**Date**: 2026-04-08
**Time**: 14:30 – 15:30

## Attendees

- wieland.pfesdorf@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- pedro.alves@tourlane.com
- kiryl.karetnikau@tourlane.com
- claudia.tita@tourlane.com

## Notes

Destinations Concepts doc: 

[https://docs.google.com/document/d/1LkT9tFPXEDdofRne0-Ieh2wnCC7zQ2vJ0_4ria2Fo9s/edit?tab=t.0](https://docs.google.com/document/d/1LkT9tFPXEDdofRne0-Ieh2wnCC7zQ2vJ0_4ria2Fo9s/edit?tab=t.0)

Destinations Content - effort estimation doc:

[https://docs.google.com/document/d/1vxYy0JKAfFO_pXcSvLHYohXkbNQbvxxdM_zt8B9ddgE/edit?tab=t.0](https://docs.google.com/document/d/1vxYy0JKAfFO_pXcSvLHYohXkbNQbvxxdM_zt8B9ddgE/edit?tab=t.0)

## Transcript

[12:32:18] **Other**: Great motivation Claudia.
[12:32:27] **Other**: Good afternoon.
[12:32:31] **Other**: Okay then everyone is here.
[12:32:41] **Other**: Do you want to kick us off Alexei?
[12:32:48] **You**: All right.
[12:32:48] **Other**: Or should I just.
[12:32:49] **You**: Well, yeah, yeah, I think I already synced with everyone, mostly in one-on-ones and we are finally all in the same room.
[12:33:01] **You**: Just to talk about destinations.
[12:33:05] **You**: As a particular topic for the future. It's been a painful part of our systems.
[12:33:15] **You**: And we're very.
[12:33:17] **You**: Interested in getting it solved.
[12:33:20] **You**: Soon.
[12:33:21] **You**: Eventually.
[12:33:23] **You**: And yeah, we're here to just kick it off and Wieland. Thanks for stepping in and willing to actually figure it out.
[12:33:36] **You**: So.
[12:33:36] **You**: Yeah, I think, yeah, you can take it away, tell us everything you know.
[12:33:42] **Other**: All right.
[12:33:45] **Other**: First challenge with the topic is there are way too many destinations.
[12:33:54] **Other**: Or the concept of destinations is a very fleeting one.
[12:33:59] **Other**: From team to team or stakeholder group to stakeholder group. They will have a different understanding of what destination is the best way to.
[12:34:10] **Other**: Reason through that is to go through this document.
[12:34:16] **Other**: So these details all of destinations or destination concepts that we have and what is their relationship and where do they overlap.
[12:34:30] **Other**: How do we go from one to the other?
[12:34:33] **Other**: So before doing anything, I highly recommend going through the documents and becoming familiar with it.
[12:34:41] **Other**: Within this document, the one that we will be mostly looking into is let me.
[12:35:01] **Other**: Is the one about touristic areas.
[12:35:05] **Other**: Because.
[12:35:06] **Other**: There should be.
[12:35:14] **Other**: Category now of original.
[12:35:16] **Other**: Yes.
[12:35:17] **Other**: So.
[12:35:21] **Other**: Things are a bit more tightly coupled across these different or not tightly coupled but there's some overlap between the destinations but for the most part we are looking at touristic areas.
[12:35:38] **Other**: Now touristic areas depending on who you're talking to could be implicitly non administrative areas.
[12:35:50] **Other**: And sometimes through carries can include administrative areas.
[12:35:58] **Other**: I think definitely touristic areas are a separate entity in and of itself.
[12:36:08] **Other**: Because there are two main use cases for it.
[12:36:14] **Other**: One is how to aggregate accommodations and activities or anything else.
[12:36:24] **Other**: And also try to.
[12:36:28] **Other**: Map to where they belong initially speaking.
[12:36:35] **Other**: Touristic area has definitely fallen to the first case where we may want to group items with different views.
[12:36:46] **Other**: You can say, oh, I want.
[12:36:50] **Other**: All the combinations in Berlin.
[12:36:55] **Other**: Or I just want the ones in, I don't know, cases are actually still too administrative areas.
[12:37:03] **Other**: But.
[12:37:05] **Other**: You can cut geographical area in different ways. And one of them will be admissive, the other one won't. But an accommodation or an activity will still be within both.
[12:37:17] **Other**: It's just that when you search for a touristic area in non-administered one, it will be something that a customer has heard of or is looking because everyone says, oh, this is the place to go.
[12:37:37] **Other**: So this aggregation, I know that today we use accommodations associated with the so-called ancestor tree.
[12:37:51] **Other**: But to my knowledge, this is only used for trip planner to aggregate accommodations in what is the common denominator between them and not for searching. But Kiryl correct me if I'm wrong. We are not using the ancestor tree to search for accommodations.
[12:38:12] **Other**: Are we? That's correct.
[12:38:14] **Other**: No.
[12:38:15] **Other**: Well, this might change.
[12:38:19] **Other**: We don't know exactly how.
[12:38:21] **Other**: This is still being discussed, but we know that for the route builder, they want to say, I want to go here. I want to go there.
[12:38:32] **Other**: And these here and there, so these stops, these will be areas or points of interest and a radius around them.
[12:38:40] **Other**: And the idea is to search for accommodations and activities based on this.
[12:38:45] **Other**: So it is a bit different than today's map search.
[12:38:50] **Other**: Either this will be completely different way of searching.
[12:38:56] **Other**: Or we will have to go from specifying an area to then still run some sort of map search on this.
[12:39:07] **Other**: Again still unclear. But the big focus here is given the name of an area.
[12:39:15] **Other**: We should be able to identify all the accommodations within that area.
[12:39:20] **Other**: The next used characteristic areas is for visualization purposes, which is why here in this document, it's actually part of visualization or.
[12:39:33] **Other**: Offer visualization destinations.
[12:39:35] **Other**: So essentially these touristic areas are used to again.
[12:39:41] **Other**: For visualization purposes and interceptors.
[12:39:45] **Other**: Cluster accommodations.
[12:39:46] **Other**: Around a certain area and then say, hey, you are going to be staying here.
[12:39:51] **Other**: They will have some nice pictures name, some description.
[12:39:57] **Other**: And in some cases, again, mostly for administrative areas, they will also have some good to know some trip and some tips.
[12:40:07] **Other**: Health wise, weather wise legal wise, whatever.
[12:40:12] **Other**: So this type of content is what is today hosted in an elephant.
[12:40:20] **Other**: We consider dropping this. I would, I think it's easier to assume that we're going to keep it at least for a while longer.
[12:40:27] **Other**: Rather than trying to reimagine drip is entirely.
[12:40:33] **Other**: And with everything around destinations.
[12:40:35] **Other**: Okay.
[12:40:38] **Other**: To summarize two use cases, we were just talking about content images, descriptions and useful information.
[12:40:47] **Other**: And aggregating accommodations.
[12:40:53] **Other**: So any questions so far?
[12:40:57] **Other**: Cool.
[12:40:59] **Other**: Maybe.
[12:41:02] **Other**: A couple of things. You mentioned we will be able to search by touristic error name. Right. So, but this name specifically where it will come from like, I mean, what would be the source of this touristic errors? Who will be inserting them in our system?
[12:41:23] **Other**: And maybe and maybe the second question, how this will be different from what we already have.
[12:41:30] **Other**: At this moment. We don't search by recruitment. But like conceptually what would be the difference from the current state?
[12:41:41] **Other**: Okay, so essentially this is work, this whole initiative is going to answer.
[12:41:46] **Other**: Right now. We have some ideas.
[12:41:51] **Other**: In terms of source of what is a touristic area.
[12:41:57] **Other**: Specifically geographical information.
[12:41:59] **Other**: Right now the best source we have is expedia geography API.
[12:42:05] **Other**: It provides the ancestor tree. It provides bounding boxes.
[12:42:11] **Other**: It is very complete.
[12:42:15] **Other**: So it looks good in terms of richness of data. Again, geography data looks very good.
[12:42:22] **Other**: Has absolutely no content whatsoever. Best thing we get is the name translated.
[12:42:29] **Other**: And that's about it.
[12:42:32] **Other**: So this alone should be enough to cover.
[12:42:38] **Other**: The grouping part of it.
[12:42:42] **Other**: Regarding content, again still no great idea, but some ideas. Some of them I think are good.
[12:42:53] **Other**: But the premise for the existing ideas is that we keep the content that we have today.
[12:43:01] **Other**: Which has a bit of a challenge.
[12:43:05] **Other**: And that challenge is okay. So if we have a new source of geographical data.
[12:43:12] **Other**: And we have content that comes from a different source and is linked to a different type of or different data sets, how do we map one to the other?
[12:43:24] **Other**: So this is one of the things that we will have figured out. How do we go from expedia areas to.
[12:43:36] **Other**: Areas?
[12:43:38] **Other**: Unclear.
[12:43:41] **Other**: Because I'm not even sure if we have to, but I'm guessing we do like because they're most likely or will be multiple touristic areas which will overlap.
[12:43:50] **Other**: And like which ones you go for. Do you have one with data, one without data? How does that supposed to work data and content?
[12:44:01] **Other**: So this is definitely one of the things that we need to look into and this right now there's absolutely no idea how to address it.
[12:44:13] **Other**: Pedro. One more, sorry. What if it is not possible? Like I mean to map these two collections.
[12:44:20] **Other**: Is it a blocker or like we have my expectations, my expectations that will be, it should be easy enough to detect.
[12:44:31] **Other**: To map a good chunk of it, especially for the well known areas.
[12:44:35] **Other**: And there will be a few of them where that will be left scratching our head. I have no idea how to how many we're talking about and this is going to influence our response to it. But if it's not possible.
[12:44:49] **Other**: We do engineering, we don't do magic. So I guess it's not possible. At which point we make a decision. Either we cut them. We cut one or the other.
[12:45:01] **Other**: Obviously there's a big premise or a big requirement which is moving forward.
[12:45:10] **Other**: Every area needs to have a bounding box.
[12:45:15] **Other**: Or polygon or whatever. So this is a kind of a big thing.
[12:45:25] **Other**: One more point just to wrap up is that the fetching content, there are two options.
[12:45:36] **Other**: One, we explore collaboration with the branding team because they are already doing this work.
[12:45:44] **Other**: They are fetching content images and they claim to have better content than the ones request from better.
[12:45:53] **Other**: They are translating are writing the useful information all of this text.
[12:45:59] **Other**: They are writing it and they go through copyright and then they go through a translator and then they put it in a website. So they are already doing all of this work.
[12:46:09] **Other**: To generate content. They don't care about the geographical area like the polygon.
[12:46:15] **Other**: They still don't care. So one option is to explore some collaboration here.
[12:46:24] **Other**: Which sounds really good in theory, but this also means aligning the travel experience team with the branding. And this I have no idea how in line they are.
[12:46:35] **Other**: When they're building these landing pages.
[12:46:39] **Other**: But this is option one and again in theory, I think it's the better sounding one.
[12:46:46] **Other**: Someone is already building all of the content, supposedly better quality.
[12:46:51] **Other**: Why do we need to go in and reinvent the wheel?
[12:46:54] **Other**: Again, still some challenges. The other option is.
[12:47:00] **Other**: We essentially augment the capabilities of item curator.
[12:47:05] **Other**: To support building or adding new content.
[12:47:12] **Other**: So what happens today is either the content exists in vector or it doesn't.
[12:47:18] **Other**: And if it doesn't, then the CI team reaches out to that two. And through weeks long negotiation and fine tuning, they have the image that they want. They have the shape that they want, which they actually don't know what the shape is. They just know that some accommodations are within the shape and others aren't. And when they detect that accommodation is within the shape or not within the shape that is expected, then they reach out to them and say, hey, this should or should not be there. So change the thing so that it is oriented.
[12:47:54] **Other**: So there's a bit of a back and forth.
[12:47:56] **Other**: Here.
[12:47:59] **Other**: So if they're already doing all of this work, might as well just give them the tools and just upload the pictures and be done with it.
[12:48:07] **Other**: It's going to be much faster. There's still going to be doing the same work and we don't have to depend on a third party.
[12:48:14] **Other**: So these are two options that we have.
[12:48:22] **Other**: Again, the premises that we keep the data and we need to map it somehow.
[12:48:26] **Other**: Because otherwise.
[12:48:28] **Other**: This manual or alignment thing, this can work well for new destinations moving forward.
[12:48:35] **Other**: It will not work well to rebuild the many, many areas that we have today.
[12:48:41] **Other**: So that's not going to be very feasible.
[12:48:47] **Other**: Just pray, head over to you, villain. One last option which no one exactly knows which one it is.
[12:48:55] **Other**: But I guess if there is another.
[12:48:59] **Other**: Package that offers geographical areas and content, I guess we can also go for that one. But I don't have any reference to one. So I wouldn't even know where to start.
[12:49:11] **Other**: Before we move on to the next point.
[12:49:13] **Other**: Figo, everyone. Yes, I actually have three topics. The first thing, aren't we then still dependent on that too if we establish a connection between our current areas and expedia and isn't the plan to deprecate that too?
[12:49:30] **Other**: Oh no, you keep the data.
[12:49:33] **Other**: Then new data will be so any new destination will come from whatever new method we put in place.
[12:49:41] **Other**: Any existing destination or area data, then we just keep data. So even if we would just item curator, for example, to allow to adjust them, we would still need to have the mapping first.
[12:50:01] **Other**: Oh no, the other way around. So even if we have a mapping, we would still later need to add some functionality to add new destinations.
[12:50:11] **Other**: We are not fully covered. Okay. Because we would drop integration. So if we do need to keep adding content and descriptions.
[12:50:22] **Other**: Then we still need that support.
[12:50:27] **Other**: Now how this can actually look like, then I would recommend this other document.
[12:50:36] **Other**: That is the best or the closest that we have.
[12:50:47] **Other**: A link to this other document.
[12:50:49] **Other**: Right?
[12:50:52] **Other**: The FF estimation one. Correct.
[12:50:56] **Other**: So this is.
[12:51:04] **Other**: So the background here was that we wanted to get rid of destinations potentially or keep them.
[12:51:11] **Other**: And what would that look like?
[12:51:13] **Other**: So again, there's a bit of context here, but.
[12:51:18] **Other**: This is the most relevant section. So what does it mean to keep destination content within supply?
[12:51:24] **Other**: And within trip planner.
[12:51:29] **Other**: And if we were to drop.
[12:51:32] **Other**: You'll notice that the difference between dropping and keeping it is not.
[12:51:38] **Other**: That significant because again, we still want to have this geographical information so that we can use to group the accommodations and to search for them.
[12:51:54] **Other**: This document already goes into a bit more details on what we change and provides a bit of.
[12:52:04] **Other**: Outlines with the solution would look like in the end. But the devil's in the details and there are a lot of details.
[12:52:12] **Other**: That are in no way covered here.
[12:52:14] **Other**: But still, it's a very good way to start getting diving deeper into the actual concrete work that needs to be done.
[12:52:30] **Other**: That would be it in terms of the existing material.
[12:52:37] **Other**: Any more questions right now.
[12:52:39] **Other**: Yes. So my main question would actually be what the core problem is that we want to solve because I do understand the use case. Okay, we want to allow search and accommodations by administrative areas, could be use case. We want to have content for these areas. I understand.
[12:53:01] **Other**: But where is the actual business requirement or like what is the problem that we are solving and why do we need to solve it now?
[12:53:09] **Other**: So why is now the time to solve it?
[12:53:13] **Other**: The timing comes from we want to get rid of that.
[12:53:21] **Other**: As part of the TP2 and also automating content. Essentially you want to get rid of that.
[12:53:29] **Other**: Too. Okay.
[12:53:32] **Other**: The business case, well, again for the aggregation part is because your planner is redoing how they build routes.
[12:53:44] **Other**: And these areas is kind of a big deal for them.
[12:53:50] **Other**: The content, this is what Robert went back and forth trying to maybe get some idea. And the truth is there is none.
[12:54:02] **Other**: No one can really say, yeah, no, this thing increases our conversion rate by x.
[12:54:11] **Other**: And what it looks like is it's going to be more costly to try and figure it out.
[12:54:18] **Other**: Than not doing it, especially because of the timing aspect.
[12:54:24] **Other**: Okay.
[12:54:25] **Other**: Makes sense. Thanks.
[12:54:31] **Other**: Okay, so ultimately what we need an API that through planner can communicate with.
[12:54:41] **Other**: To do.
[12:54:45] **Other**: These areas.
[12:54:48] **Other**: Most likely there will also be some sharing of the data to the data warehouse. More on that later. As in later when they know what they, how they want this to look like not later in the session. And also a way to manage the destination or area data that we host in this new domain.
[12:55:12] **Other**: So this is where that revised item curator would come in.
[12:55:19] **Other**: Additionally, in the on the API side, you also need to share this content with trip planner and or tripvis. I'm not entirely sure how that is going to look like, but also we need to serve the data. It's up to foxes and the motion team to understand where the separation between where some things are the realm of drip planner and others are not. So beyond that, we just need to serve the data.
[12:55:52] **Other**: So yeah, these are the deliverables. Alexei, go ahead.
[12:55:59] **You**: A little bit.
[12:56:01] **You**: Back to the previous.
[12:56:05] **You**: Question that we don't have. So we are getting rid of.
[12:56:11] **You**: Veto. That's why we are rebuilding these destinations, right? And currently trip planner builds their routes based on where to IDs. So they are like kind of building the routes based on destinations, but they really depend on better ideas.
[12:56:28] **You**: Right? In theory.
[12:56:35] **You**: Country planner kind of get rid of direct dependency on veto.
[12:56:42] **You**: Without rewriting the destinations part.
[12:56:48] **You**: I mean destinations and veto destinations and expedited destinations, they're a little bit different, right? So what we want now, what we are discussing now is we want to have these destinations topic abstract from underlying service, like data sort, right? We don't want our clients of destinations. No, this came from expedia or this came from Pedro, right? We want them to use destinations, abstract destinations. That's it, right? We are encapsulating all the details behind this abstraction.
[12:57:23] **You**: And this allows us to build this service and make it more maintainable. So in the future, we won't have such kind of dependencies from tree planner directly to veto. And now we cannot move that to anywhere.
[12:57:36] **You**: Right? So this is like our goal for this service.
[12:57:46] **Other**: Kind of, sort of. So definitely it serves as a way to.
[12:57:53] **Other**: Drop this dependency on that. Um, however, the independency.
[12:58:02] **Other**: In trip planner is a bit trickier than that. So for example they use head to IDs.
[12:58:12] **Other**: For location, but not the IDs of the areas.
[12:58:17] **Other**: They use the vector IDs of the accommodations.
[12:58:20] **Other**: Which just makes things a bit more confusing.
[12:58:21] **You**: Yeah.
[12:58:23] **Other**: So this means that even if you replace entirely vet to area, the area content.
[12:58:31] **Other**: With something else area content, you're not actually solving the other thing.
[12:58:36] **Other**: So this is where things get a bit trickier. But definitely we need an alternative to also for destination content and destination information. For example, today everyone already knows, but today that too doesn't give us the geographical shape of an area.
[12:58:59] **Other**: They might still do it for if they have it, but they also don't guarantee that it will stay there.
[12:59:05] **Other**: And any new destination will have a link between area and accommodation.
[12:59:11] **Other**: Explicitly like say you belong. This is your ID of the area.
[12:59:17] **Other**: It's not going to give you the polygon.
[12:59:21] **Other**: And then you kind of figure it out.
[12:59:25] **Other**: So that's another thing that we would like to get rid which actually does, this one does cause a dependency not just for vet to as destination content, but also a way to link the accommodations to the areas.
[12:59:46] **Other**: So yes, we need to get, we need this to get rid of the other one, but it's a bit more nuanced.
[12:59:55] **You**: Okay, so like our main pain with that is like it's unmaintainable and kind of.
[13:00:03] **You**: We cannot rely on veto for destinations going forward. That's why we also kind of decouple destinations from veto in addition to accommodations from veteran, right? Because there are like two streams that we have. They do this, right? So destinations we do is like what we are selling here and recommendation dependency on that is like separate stream that will be happening in parallel.
[13:00:30] **Other**: For spectrum perspective, they are separate.
[13:00:35] **Other**: Not, not for much of, because not so much.
[13:00:41] **Other**: Theme again, it's a, it's a, it's a bit more entangled, as I understood.
[13:00:48] **Other**: What a timeline perspective though.
[13:00:52] **Other**: As far as I understood.
[13:00:54] **Other**: We can focus on accommodations first.
[13:01:00] **Other**: And when we drop the connection to vetu, we know, okay, we're not going to get new area data, which then means we can't launch new destinations.
[13:01:12] **Other**: We can launch new corridors as long as those corridors include a destination that we already have.
[13:01:20] **Other**: So corridors, the market and destination and new destinations destinations that we don't have today. And if we, when we drop that to, we will stop having them.
[13:01:34] **Other**: Which means that we can survive for a while.
[13:01:39] **Other**: Without launching new destinations. Again, we need to make sure that there's no one, no big plans to, to launch this new destinations.
[13:01:47] **Other**: But we can survive for a while while we focus on accommodations.
[13:01:53] **Other**: And then we move on to replacing content source for areas.
[13:02:00] **You**: So like.
[13:02:02] **You**: And did I get it right that like accommodation coupling from ved with like urgent and nothing will move without it. And with destination decoupling from wed is not that kind of press in any way. It can take.
[13:02:20] **Other**: Yes, in the sense that we definitely have definitely processed more accommodations than we launched new destinations.
[13:02:29] **Other**: Also from a business impact, automating content onboarding for accommodations.
[13:02:36] **Other**: Has a tremendous impact.
[13:02:41] **You**: Then what I have like so far what we discussed like so we.
[13:02:45] **You**: Want solution independent of wed tool.
[13:02:49] **You**: What we want to build this kind of destination service and we will be owner of this service and we'll be kind of guiding the rest of the company how to use it, how to properly apply it, how to take data from it and use it for search and all these things. So we are here in the driving position as an owner of this and we'll need to kind of build the guide guidance, right? Kiryl to answering your question like how well we do this kind of search. We will need to explain and figure it out.
[13:03:22] **You**: Destinations must have polygon and contents.
[13:03:26] **You**: To things.
[13:03:27] **You**: Are important for destinations and we need to find solution when all destinations have goals.
[13:03:36] **You**: And later we'll be adding search capabilities based on destinations, but we don't.
[13:03:41] **You**: We're not sure at this very moment how exactly so we'll figure it out. It's kind of for the future.
[13:03:48] **You**: And also.
[13:03:51] **You**: Pedro provided some solutions and ideas on how we can solve this, right? But we are still kind of a bit early in this. They are not kind of.
[13:04:03] **You**: Finalized solutions. So we should be also open to more.
[13:04:08] **You**: Ideas, right?
[13:04:10] **You**: If some idea comes to your mind don't drop it, investigate figure out maybe we missed something. So also don't kind of.
[13:04:20] **You**: Focus on this too. Yeah that's all I have written so far.
[13:04:25] **You**: Right.
[13:04:26] **Other**: Yeah, that sounds about it. Again,
[13:04:32] **Other**: Just keep in mind the separation because.
[13:04:37] **Other**: When.
[13:04:38] **Other**: When you, for example, if annual or ruben reach out to you, they're definitely going to be wondering about. So when can I tell you this beach? And you tell me the hotels in this beach.
[13:04:53] **Other**: They are going to come in from the search perspective.
[13:04:57] **Other**: When you block launching new destinations, it might be more travel experience that says, why can't why can't we get content for this new destination? And they want the content.
[13:05:12] **Other**: More than the search because they just expect that everything will be implicitly and no one is searching for the beach.
[13:05:21] **Other**: Or they might search for the beach. But then when they go from the area to the accommodation is through the map search. So there's like this intermediary in between.
[13:05:33] **Other**: You search for the POI or the area in the map and then you search for the accommodations within.
[13:05:45] **Other**: The bounding box.
[13:05:47] **Other**: So there's like an intermediary step there. So that's why when, when you break this, you will get different people asking for different things.
[13:06:05] **Other**: And no, I don't know exactly which one should take priority. I would say most likely rename the flow as is.
[13:06:14] **Other**: If someone says, screw that, we can hold off launching new destinations.
[13:06:21] **Other**: Just get trip planner to route builder out there faster.
[13:06:26] **Other**: Sure. Given that the company might have to adjust to where we send customers to.
[13:06:33] **Other**: I could see launching new destinations more becoming more of a thing.
[13:06:41] **Other**: Which would also most likely also put pressure on the API outsourcing because that's one of the things we do to launch a new destination.
[13:06:50] **Other**: So.
[13:06:51] **Other**: Whenever I save now in terms of priorities definitely needs double checking and can change in the coming weeks.
[13:06:59] **You**: So we'll need to definitely.
[13:07:01] **You**: Have every kind of trade off that we plan. Right.
[13:07:06] **You**: Explicitly mentioned kind of described. So here are the options. We cannot do everything. We are kind of ordering first this and that so we don't.
[13:07:18] **You**: So either don't expect we do everything. So yeah, this is important to manage and make it obvious for everyone.
[13:07:30] **Other**: I have a question. So when you are saying here to launch new destinations, do you also mean areas in existing destinations or do you just mean like new countries?
[13:07:41] **Other**: Basically.
[13:07:44] **Other**: I was referring to new countries if they want new areas in existing destinations.
[13:07:52] **Other**: So this technically will always work. It's just tripvis won't look as nice.
[13:07:58] **Other**: Okay, then I can give an update on this. I don't think that since for API outsourcing all of the destinations we have now in the backlog are destinations that we're already selling.
[13:08:11] **Other**: So I don't think that there will be, we don't have any new destination in the area outsourcing backlog. All of them are for the ones that are already live.
[13:08:23] **Other**: Because I checked with this. There are plans to launch Finland.
[13:08:29] **Other**: And one more.
[13:08:31] **Other**: I don't remember.
[13:08:35] **Other**: Yeah.
[13:08:36] **Other**: Like two more Finland and another Nordic.
[13:08:41] **Other**: Countries. I forgot which one. And.
[13:08:47] **Other**: We already know right.
[13:08:48] **Other**: Yeah, I think maybe Sweden.
[13:08:52] **Other**: And Finland. I think I will confirm. But these are the only two that are still under discussion for this year.
[13:09:01] **Other**: So maybe we can do some preparation work if we know that these two might come as well.
[13:09:10] **Other**: But yeah actually that's a that's a good point like I mean we still have the challenge of mapping areas from one provider to the other.
[13:09:26] **Other**: But I mean.
[13:09:28] **Other**: We can also explore just getting fetching as much content from as many destinations as we can from that. But that's also increases how much mapping we'll have to do.
[13:09:47] **Other**: And when we mapped to that two areas remember that there's one version where there will be a polygon and another version that there won't be one.
[13:10:00] **Other**: I would still try to keep in mind so I check now yeah it was written for some reason I first we don't already have yeah, so it's Finland and Sweden and these are the only two that might come this year.
[13:10:12] **Other**: But other than that all the destinations we have.
[13:10:17] **Other**: Are already there. So yeah, I don't think that this will be related to API sourcing. We don't have new destinations there.
[13:10:29] **Other**: I think that makes sense. I was just saying if we need to start diverting customers to somewhere else and we're running out of somewhere else's.
[13:10:39] **Other**: That that could be a thing. But definitely you're more into that than I am. So I'll defer to what you said.
[13:10:49] **Other**: But I think if nothing else this could be a good call out to do in the cycle planning saying hey we're going to do this.
[13:10:59] **Other**: So no one gets any funny ideas about all of a sudden launching new destinations.
[13:11:17] **Other**: Yeah so from here on out I'm not sure how deep into the rabbit hole you want to be I did start.
[13:11:27] **Other**: Brainstorming a bit what what this.
[13:11:32] **Other**: This new domain would do.
[13:11:36] **Other**: I don't have much in that regard but if if everyone's up to it.
[13:11:42] **Other**: We can start looking at some notes that I have for the for this domain.
[13:11:50] **Other**: Sure.
[13:11:55] **Other**: So that.
[13:11:57] **Other**: S pretty much it.
[13:12:02] **Other**: So I.
[13:12:04] **Other**: Given that we invest quite a bit of time into looking at this as a different something that we could hand over to a different different team is because we saw that there's.
[13:12:18] **Other**: Connection.
[13:12:21] **Other**: But not areas is a part of accommodations or accommodations are part of areas like can have one without the other.
[13:12:32] **Other**: Same thing with activities.
[13:12:34] **Other**: Like if a kid areas were part of that accommodations the activities are also happen in a certain area.
[13:12:43] **Other**: Like how would this look like?
[13:12:47] **Other**: So I was thinking that areas would be a separate domain trip planner could potentially query for areas independently to build a route or something like that.
[13:13:00] **Other**: But could also query for accommodations based on on on areas or the other way around so catalog could do an area lookup asynchronously to maybe map accommodations to areas for example depends exactly how we plan to use this for searching because if you want to tell catalog hey give me all the combinations around.
[13:13:29] **Other**: This national park.
[13:13:33] **Other**: That's one way so then catalogs has to understand how to go from a national park to all the accommodations in the national park.
[13:13:44] **Other**: Or you can have trip planner.
[13:13:49] **Other**: Asking the errors hey give me all the accommodations within this area which is a bit strange because then areas is you.
[13:13:58] **Other**: Got anyway.
[13:14:01] **Other**: Either for you can have something like.
[13:14:05] **Other**: I want to search in this national park and then you go from the national park to polygon to then search for accommodations when it's polygon pretty much the same thing we do with map search although a polygon can be a very different data structure than the bounding box.
[13:14:24] **Other**: So these things need to look into so when trip planner queries for accommodations when you give an area we could do a geo shape so you give it the following time.
[13:14:35] **Other**: If you give it the area.
[13:14:39] **Other**: You say oh I can build the ancestor tree so then I if I when I can just go and look up the ancestry well yeah, but then you have to do this for all the accommodations so this is would be extremely inefficient or you have some a lot of the reverse look ups back and forth and like ah damn that's like that can be a lot to also do so we can still explore this but right now as you heard Kiryl say we actually don't use the ancestry tree in search cases so this is not a thing that we have today.
[13:15:12] **Other**: But we know this we know we want our clients want to get a list of accommodations based on a certain area.
[13:15:22] **Other**: You need to figure out exactly how that looks like.
[13:15:27] **Other**: So I've been calling it areas because destinations is such an overloaded term that I it's been easier for me to kind of this is myself from it by just calling areas.
[13:15:41] **Other**: So what is it what would be this what would be this domain's responsibility so sourcing geodata.
[13:15:49] **Other**: Mapping items to areas so building this ancestry essentially so you could just get a coordinate okay I am here what is my my ancestor tree and also sourcing content for the geodata?
[13:16:08] **Other**: So notice that I'm separating there's geo data and then there's content for that geotata.
[13:16:18] **Other**: We already kind of mentioned the migration of existing data to the new data source we talked about this option which is you match what you can you replace what you can so Kiryl said okay what if it's not possible to match well I guess we can replace it.
[13:16:39] **Other**: Or you replace everything.
[13:16:43] **Other**: But we can't really do this because we still need to reuse the content otherwise this is not sustainable.
[13:16:51] **Other**: So because I did humor the option to just say no we forget about whatever geographical data that one that we have today and we just go for the one that we have.
[13:17:04] **Other**: But then you still have all of that content and how do you know which content to use where.
[13:17:11] **Other**: Definitely this is going to be the I think the biggest challenge.
[13:17:20] **Other**: Right now definitely helps to clarify or to think.
[13:17:27] **Other**: Out the search could look like because the search I think it's just an easier way to get into the topic.
[13:17:33] **Other**: Because the search doesn't have any.
[13:17:39] **Other**: Dependency or any legacy to it.
[13:17:43] **Other**: So you don't need to worry about but what about the mapping between the rz we don't care that's mostly for the content perspective.
[13:17:51] **Other**: Even if you have like two areas which are extremely similar and even if and you will always have that because if nothing else it's just going to be a touristic area which might be exactly the same as a city so you're going to have that actually categorizes some of its areas as jurisdict and administrative.
[13:18:14] **Other**: So there are a few which have a double meaning.
[13:18:21] **Other**: So for searching for searching purposes that that's fine for content that's it's a bit more tricky so that's where the mapping or the matching comes in.
[13:18:33] **Other**: Yeah as I said not much to go on right now again I also put this on hold waiting for today's session these are the main challenges any questions right now?
[13:18:51] **Other**: What will be the timeline and the next steps like do we have some exploration phase where we kind of explore it or what is the idea here depends what you want to export.
[13:19:06] **Other**: I don't know so from looking at it I think the use case with making available what we already have seems more urgent even though we only want to launch two destinations so I would.
[13:19:23] **Other**: Probably start by looking at how trip planner currently consumes these APIs to understand what is the requirement from the client's perspective.
[13:19:36] **Other**: And then start from there maybe.
[13:19:39] **Other**: Sure that that's that's one way to go about it.
[13:19:46] **Other**: You tackle the biggest challenge head on.
[13:19:49] **Other**: That works.
[13:19:51] **Other**: In terms of timeline like I said the focus first is accommodations so the one of the features of manual items is also to search for.
[13:20:05] **Other**: Areas rather than just accommodations so meaning that when I say okay we need an API to serve this today you have something I guess which could be reused just like we're now going to look at serving the manual items for accommodations from catalog.
[13:20:29] **Other**: You'll you'll have something to compare to.
[13:20:41] **Other**: Not answer the question entirely.
[13:20:46] **Other**: I'm still not entirely sure okay so.
[13:20:52] **Other**: Because the focus today's focus for areas is content there are two scenarios where this content is used.
[13:21:04] **Other**: One way it goes straight to that two and it should now come straight from this new service.
[13:21:16] **Other**: And in that in that case yeah, you need to understand how it is actually used just like we're doing it for the catalog to replace manual replace vattoo as the source search.
[13:21:35] **Other**: To replace metro as a search for combinations.
[13:21:38] **Other**: In menual items so you need to you'll need a similar API for these areas as well.
[13:21:46] **Other**: On top of that.
[13:21:48] **Other**: There is querying for content in the scope of a trip.
[13:21:57] **Other**: Where they start with the accommodations then they look at the accommodations and they see the ancestor tree and then from there they say okay I want content for these destinations.
[13:22:09] **Other**: Give me content for these destinations.
[13:22:14] **Other**: For content it's these two things.
[13:22:27] **Other**: Do you notice that when to replace the manual items that means that this would already have all of the data that we have today.
[13:22:38] **Other**: So you can just do search for you need to pass on the content and the all the data that we have in elephants.
[13:22:47] **Other**: To this new system.
[13:22:51] **Other**: I guess we can explore migration an intermediary step where everything goes straight to elephant given that you would still have to do some work there.
[13:23:07] **Other**: Not sure how much is actually going to benefit us.
[13:23:15] **Other**: Okay.
[13:23:27] **You**: Okay, so then.
[13:23:31] **You**: What's the plan for.
[13:23:34] **You**: April?
[13:23:35] **You**: Right. So we are planning next cycle.
[13:23:39] **You**: In April.
[13:23:41] **You**: I guess it's a good time to actually do the investigation and figure out and get familiar and kind of clarify the questions and how things are used and what's out there.
[13:23:55] **You**: Right. And then we can.
[13:23:57] **You**: Prioritize figure out what are the options, what to go first. And yeah, now we need to go into investigation.
[13:24:09] **Other**: So now we started the new sprint yesterday for this for which this was not really planned and then it's also only two more days left of this week and then next week we landed on infra week so we also have to keep in mind that he is on infra and I think it's not really realistic.
[13:24:31] **Other**: To communicate or like to aim to start now.
[13:24:34] **Other**: I don't yeah maybe you can start thinking about it vlan but the actual discovery work and planning will happen probably after the infra week.
[13:24:45] **Other**: And this is really mid April what we would need to have for the planning and what I need from you by the end of the month is really understanding how much capacity from our team and from the other teams we should block for this topic and this require discovery.
[13:25:02] **Other**: Covering the last two weeks of April.
[13:25:05] **Other**: And for me this would be I mean.
[13:25:11] **You**: And we'll need this by the end of April, not like middle of April.
[13:25:17] **Other**: We should check the cycle.
[13:25:22] **Other**: Planning thing I think there are already some invites sent out so by the time we go to the cycle planning.
[13:25:30] **Other**: We need to know how much capacity.
[13:25:34] **Other**: This would require from our team and from the others.
[13:25:39] **Other**: Which is a difficult task.
[13:25:42] **Other**: But.
[13:25:45] **You**: Same for other initiatives. I guess this and next week and for destinations we can look at it from kind of 20th of April.
[13:25:56] **You**: This is the week when we have team events. Wieland, are you in.
[13:26:01] **You**: The office this week?
[13:26:03] **You**: So yeah, and we can just.
[13:26:05] **You**: Maybe swarm on this topic work together.
[13:26:09] **You**: Because we'll all likely gonna be in the office. So it's gonna be a bit easier to coordinate and brainstorm and assess. So yeah, I think next week.
[13:26:19] **You**: Infra build week and then we look into destinations.
[13:26:26] **Other**: I'm only in the office until Wednesday.
[13:26:29] **Other**: So.
[13:26:30] **Other**: But.
[13:26:32] **You**: Yep.
[13:26:34] **You**: Wednesday you're in the office or you already.
[13:26:55] **Other**: Anything else.
[13:27:02] **Other**: Thank you for the introduction.
[13:27:04] **You**: Thank you.
[13:27:06] **Other**: Yeah, I will then suggest that you go through all of those documents if you haven't done already come back with additional questions definitely become familiar with the data model that we have today.
[13:27:24] **Other**: And not not that this is super important but maybe some interesting tasks for you to become even more familiar just for example try to see how many how many areas do we have with and without shape how can we go from one thing to like accommodations to properties and vice versa.
[13:27:53] **Other**: For example one thing I always found interesting is that expedia does not share the areas where that where an accommodation is but it will go from the areas to the accommodations.
[13:28:09] **Other**: So you can go from the geography API to accommodation IDs but not the other way around.
[13:28:19] **Other**: They must have seen something there I think they mentioned something like yeah, I mean like an accommodation can mean a lot of different areas like which one would it be so how to how to frame that so maybe we're oversimplifying in our ancestry tree we're not I don't know I guess it kind of depends on how you how you look at it.
[13:28:43] **Other**: But definitely these I think would be a good task for you to.
[13:28:48] **Other**: Really get into the nitty gritty details of the this challenge.
[13:29:01] **Other**: Topic.
[13:29:08] **Other**: If there's nothing else then we can get one minute.
[13:29:13] **Other**: All right.
