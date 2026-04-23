# Content Automation Milestone: Weekly Check

**Date**: 2026-04-22
**Time**: 11:00 - 11:30

## Attendees

- claudia.tita@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- kiryl.karetnikau@tourlane.com
- pedro.alves@tourlane.com

## Transcript

[09:01:58] **Other**: Oh, goodness. I just.
[09:02:01] **Other**: So the next time we'll win. No worries.
[09:02:09] **Other**: Yeah, but I did my best. Yeah, but actually, for dinner, we went to an ukrainian restaurant, and it was very, very good. I really liked it.
[09:02:27] **Other**: Good.
[09:02:30] **Other**: I actually want to spend this time with you to talk about the cycle planning.
[09:02:38] **Other**: And how we can decide exactly what we should have on the roadmap for continuing working on catalog.
[09:02:47] **Other**: In cycle two.
[09:02:51] **Other**: And trying to maybe discuss what would be like the must-have things and what things could help could wait a bit more.
[09:03:03] **Other**: Sure.
[09:03:07] **Other**: I have to say that this yesterday I was surprised to. I mean, I knew that will make changes to accommodation search, but now that it will be like kind of fully deprecated. Yeah. So maybe we can also have a bit of a chat about what are the plans there.
[09:03:28] **Other**: Okay, so.
[09:03:31] **Other**: Accommodation search is.
[09:03:35] **Other**: Well, suffers from the same issue as many other components in the existing architecture.
[09:03:41] **Other**: There's a bit of a bit of everything there. There's a bit of content, there's a bit of supply logic.
[09:03:51] **Other**: And as part of the project, we want to untangle that so that we have clear separation and ownership.
[09:04:00] **Other**: It's not likely to be deprecated anytime soon.
[09:04:06] **Other**: Which, to be fair, does play a bit to our advantage because it gives us this very nice buffer space. I keep the bringing up.
[09:04:14] **Other**: To allow the team to work and develop the new systems and trip planner doesn't have to change with everything that we do.
[09:04:25] **Other**: So that's why I said yesterday that combination search would only be fully deprecated when tp1 is also fully deprecated.
[09:04:35] **Other**: Until then, whatever do you want to build as part of tp2, that could, for example, call catalog immediately, just like if you want to work on the supply smart booking logic or whatever. Then if we have the supply domain, then they can reach out directly to the supply domain.
[09:05:00] **Other**: But don't expect accommodation search to disappear anytime soon.
[09:05:11] **Other**: I'm not sure to answer your question, Claudia.
[09:05:26] **You**: All right, you're mute.
[09:05:27] **You**: D.
[09:05:30] **Other**: Sorry.
[09:05:31] **Other**: Yeah. So for.
[09:05:36] **Other**: For smart booking is not necessary that.
[09:05:42] **Other**: Wait, let me write it.
[09:05:45] **Other**: We could in theory just have something that works for smart booking in booking platform directly.
[09:05:52] **Other**: Independently what, what happens in triplanner one or 2.0. Right.
[09:05:57] **Other**: So this.
[09:06:00] **Other**: Yeah, but it's not.
[09:06:02] **Other**: Okay.
[09:06:03] **Other**: Yeah, that, that's, that was in Kiryl's document and what I also brought up yesterday. So if we can start working on supply domain and booking platform and just use that directly doesn't have to.
[09:06:16] **Other**: Do anything differently. I obviously, there's the kind of a gray area there, which is, okay, if they use that for smart booking, then what about all of the things that they are already doing as part of the.
[09:06:35] **Other**: The booking requests, checking status and all of that. So this is, I don't know, we would have to see what that would look like. But basically it would be the same process that we have today with trip planner and catalog.
[09:06:53] **Other**: We're launching something, developing something. We try to minimize friction with clients and we'll just have to go one by one.
[09:07:12] **You**: Actually bouts accommodation search.
[09:07:17] **You**: So.
[09:07:17] **You**: In scope of vet deprecation, we are doing search on catalog as well.
[09:07:26] **You**: Right. So which end point do we add? We add, like, some special endpoints.
[09:07:31] **You**: That allow us to.
[09:07:34] **You**: Wait, what are the two use cases we, we need to support.
[09:07:42] **Other**: I think it's more than two, but let me.
[09:07:48] **Other**: Let me show you essentially want to.
[09:07:56] **Other**: So these two search accommodations.
[09:07:59] **You**: Yes.
[09:08:01] **Other**: Let me.
[09:08:03] **Other**: And price refresh and search combinations actually already. We, we specify this in a way that can serve the different use cases that we have in mind.
[09:08:16] **Other**: So, for example.
[09:08:19] **Other**: You will need to support the existing map search. You need a bounding box.
[09:08:28] **Other**: Parameter. If you want to support the future GP2, hey, give me something for this area. You can submit an area ID if you want to fetch data for specific accommodations. You have, you can submit uuids.
[09:08:47] **Other**: Then we took the chance to learn from past experience and we developed an endpoint specific for fetching. No, not this one.
[09:08:58] **Other**: Price refresh, which today pretty much works like just doing map search all over again.
[09:09:05] **Other**: Although they will specify the accommodation IDs.
[09:09:11] **Other**: But for example, then trip planner needs to go and try to map.
[09:09:17] **Other**: The rate.
[09:09:19] **Other**: So they do the same request, like similar to a map search request.
[09:09:23] **Other**: And then they have to go and take the look at the response.
[09:09:26] **Other**: Look at the trip data and then compare the rates to try to figure out if they're the same rights or not.
[09:09:34] **Other**: So this sounds familiar. It's because it's what we're also trying to do with room level mapping.
[09:09:40] **Other**: So ideally, this was something that we could serve from catalog, but that obviously would be done in, in supply. So, so that we could, they could specify, hey, have this accommodation. I selected these rooms and these are the rates. And then in the response, we could say response.
[09:10:04] **Other**: Again, you return the accommodations with their properties and the rates. And then if this, if one of the rights was a selected property, then undisselected rate, then we would indicate this is the one. If there's no.
[09:10:18] **Other**: Rate with selected true, that then means the original rate is gone.
[09:10:24] **Other**: So, yeah, so these are mostly quoting specific endpoints where we basically have just a better understanding of how these things work and we can Define better what to do where. So these are the endpoints that we're looking to add to catalog at this point.
[09:10:42] **You**: Yeah. And does it mean that.
[09:10:46] **You**: Triplanar one will switch to both of these?
[09:10:49] **Other**: Unlikely.
[09:10:51] **Other**: We can, this is what I meant with accommodation search being there until tp1 is gone. So what will happen most likely is.
[09:11:04] **Other**: Let's say supply and, and catalog are done.
[09:11:08] **Other**: And everything's working. And we have decommissioned quite a few of the services that we can. You still have accommodation search there because trip planner one is not likely to change the catalog.
[09:11:19] **Other**: So what would that mean? That would mean that they would still be doing the same request with the same parameters.
[09:11:26] **Other**: To a combination search and then a combination search. Take those parameters and issues the request to catalog.
[09:11:31] **You**: Okay, so we're kind of. We're not changing their side. We're kind of.
[09:11:38] **You**: Doing this in direction similar to how we added check in checkouts.
[09:11:43] **Other**: Yes. With the understanding that there's, they're not likely to.
[09:11:51] **Other**: Expand on any of additional functionality, like amenities.
[09:11:59] **Other**: Not likely to happen.
[09:12:02] **Other**: Or these themes start rating. I think they have it, but customer rating, not sure.
[09:12:10] **Other**: So some search filters will not be used even if they're there.
[09:12:19] **You**: Okay.
[09:12:20] **You**: So.
[09:12:21] **You**: That means, like, we are adding this new search endpoint.
[09:12:26] **You**: But.
[09:12:27] **You**: Kind of old certain points won't be deprecated because.
[09:12:32] **You**: They're not switching to the new one.
[09:12:34] **You**: Directly.
[09:12:37] **Other**: Not with TP1.
[09:12:38] **You**: Okay. Okay. Then, yeah, if they would switch to this one. Yeah, we would just deprecate the old one pretty much this cycle. But this not happening.
[09:12:38] **Other**: No.
[09:12:49] **Other**: The, what they would integrate directly with catalog is because of this one.
[09:12:55] **Other**: So this is what's going to allow replacing veto.
[09:13:00] **Other**: So the manual items, interestingly enough, will reach out to catalog directly.
[09:13:06] **Other**: Because otherwise we, we may have to add this accommodation search in the off chance that it's not there. If it is, then most likely they would then prefer to do it via accommodation search because they already have a client for that.
[09:13:23] **Other**: And if we develop this functionality for manual accommodation, it can be somehow also do it for.
[09:13:32] **Other**: The booking platform.
[09:13:34] **Other**: Then. So they also use this new endpoint.
[09:13:40] **Other**: Well, this endpoint is to just search the entirety of catalog. From what I understood from booking platform, what they want is.
[09:13:52] **Other**: So basically we need the same, but to search only in Supply.
[09:13:59] **Other**: Again, it depends what you mean the same, because it feels like the use cases are different. So with, from booking platform, you'll say, I have a rate for this accommodation.
[09:14:14] **Other**: Which in this case, it's going to be for a specific supplier. Sorry, I didn't mean to say like the same functionality. I meant to say, like the same.
[09:14:23] **Other**: Processes we do now that we are developing a new endpoint for a new case for.
[09:14:30] **Other**: Us.
[09:14:32] **Other**: Yeah. It's also like the one for booking that one will be new.
[09:14:35] **Other**: So, yeah, this is what I meant. Not. I understand that the functionality is different and use cases for booking platform and manual items for sure.
[09:14:44] **Other**: I see.
[09:14:46] **Other**: Yeah, I, I think they're, they're against, at least for me, I find it super helpful to.
[09:14:56] **Other**: See the dependencies between the different projects and the features that we need to enable.
[09:15:03] **Other**: From one and the other.
[09:15:05] **Other**: But this board, amazing board that you shared with us yesterday was actually not shared with us. I don't. It was the first time I saw it. Like, I, I did see it while walking at the office on the screen of Robert, but it was actually not shared with us this. No, no, I, I just created it before I shared it with Robert.
[09:15:25] **Other**: Actually.
[09:15:26] **Other**: So if you, if you feel that you've been missing out on something you haven't, it was just that new.
[09:15:37] **Other**: If you could.
[09:15:41] **Other**: Let me do that already before I forget.
[09:15:56] **Other**: Yeah.
[09:15:58] **Other**: Anyway, I, where was I?
[09:16:02] **Other**: Yeah, like this one.
[09:16:04] **Other**: So.
[09:16:09] **Other**: Again, it's really, you need to pick.
[09:16:13] **Other**: There are a lot of stuff we can do.
[09:16:19] **Other**: But, and right now the whole ancestry thing is.
[09:16:23] **Other**: Interesting.
[09:16:26] **Other**: And we need to solve it.
[09:16:32] **Other**: And I still need to collect some data before I can consider rapid finalized. I required, I know that you already at least taken the first pass.
[09:16:42] **Other**: Alia, not sure if you had a chance as well.
[09:16:46] **Other**: We need a thumbs up from Veronica before we can send it for approval.
[09:16:53] **Other**: From Karen and his team. So I want to, I want to finalize that soon so that runik has a chance to go through it. And then we can go through the, the rest of the process. So please do take some time to take a look at it. It can be massively consequential to the rest of the work we're doing because basically we've been talking about maybe making some time for us by not doing any of this.
[09:17:22] **Other**: And if the decision is a no go from Karen.
[09:17:27] **Other**: We're going to have to do this.
[09:17:34] **Other**: So Karen is out, actually, for two weeks.
[09:17:38] **Other**: Two. Okay, next week completely. And then it's back. So we won't have much before the cycle planning.
[09:17:47] **Other**: But I already like on high level, I think it was quite clear from him.
[09:18:00] **Other**: I mean, we need like everything is good as long as we can support importing data from some additional destinations that he told us and then probably the rapid would go through. But it's very unlikely to have a decision on not launching new destinations for a long time.
[09:18:19] **Other**: Yeah, I think this is, I mean, we don't know how many different destinations we have there. So maybe it would be nice to put in some more to, I have the list. I have everything from Karen. He gave me before his vacation. I will just share with you. No, sorry, I meant. I meant destinations in tattoo to say, hey, we have these many destinations in vetu of these destinations we have this much.
[09:18:48] **Other**: Share. And then so we still have this much share. But of course they want to know exactly which one, not just numbers.
[09:18:56] **Other**: Because if it's something that like no one cares and it's, it's pointless.
[09:19:03] **Other**: But yeah, so we still need to add some numbers to the, to the rapid.
[09:19:11] **Other**: Without them, the sentence, we cannot launch two destinations is obviously not, not great.
[09:19:20] **Other**: Yeah. So depending on where we go.
[09:19:24] **Other**: We may, we may need to put work into doing all of this or not.
[09:19:34] **Other**: Yeah. This is for this obviously is necessary for supply, sorry, hard booking, smart working logic.
[09:19:43] **Other**: So these are all the things that we would have to do. Again, we can find a way to try to get fast track some things and hide in between behind other components. So as we continue working exactly what we're doing with catalog.
[09:20:00] **Other**: But mostly this is what you, what you're looking at.
[09:20:08] **Other**: Yeah. From catalog.
[09:20:11] **Other**: These are all the same things that we've been discussing for the few last few weeks, so nothing here new. I guess obviously the more important ones. This one and this one.
[09:20:26] **Other**: Oh, and sorry. And everything here, because this is what allow us to get rid of vet to and make catalog the single source of true so that we can really use all the inventory that we have.
[09:20:48] **Other**: Going to be on a challenging cycle planning because we have so many things that we need to work on.
[09:20:58] **Other**: But this is to visualize it.
[09:21:02] **Other**: Would be very nice. Thank you Pedro.
[09:21:06] **Other**: Yeah. So to be clear, some of these things are in Robert's original dependency map just goes into a few extra layers of detail. So basically everything that has like a thicker border, it's in the original map.
[09:21:29] **Other**: But yeah, the devil's in the details. So exactly how and what connects some things. It's, it's unclear. So not all of these connections are in the original map.
[09:21:47] **Other**: Yeah.
[09:21:48] **Other**: For example, Claudia, when you say, ah, we need to visualize the, what we have in catalog so that we can properly control that thing.
[09:21:58] **Other**: And, and, you know, release new accommodations released in destinations.
[09:22:02] **Other**: You're looking at this part.
[09:22:04] **Other**: Yes.
[09:22:09] **Other**: When you want to keep up with feature parity, we need to extend the beta that we have in catalog. So we're talking about content enrichment.
[09:22:20] **Other**: Obviously puturlane preferred as a part of catalog management because this is still a highly manual process. Yeah. So it's not something that we can do.
[09:22:32] **Other**: And. Yeah. So again, this is just to really.
[09:22:36] **Other**: To enable making the whole thing.
[09:22:39] **Other**: Bring the value.
[09:22:57] **Other**: S concerns.
[09:22:59] **Other**: Surprises.
[09:23:01] **Other**: Plot twists.
[09:23:04] **Other**: No plot twist. I mean, looking at.
[09:23:22] **You**: About rapid Pedro, can you send me the link? I just cannot find it now.
[09:23:28] **Other**: Okay.
[09:23:30] **Other**: I think I shared it by email when I gave everyone access.
[09:23:37] **Other**: But.
[09:23:47] **You**: Rapid wet.
[09:23:48] **You**: Two.
[09:23:49] **You**: Yeah.
[09:23:50] **You**: Found it.
[09:24:00] **Other**: My concern is that if you do also here, it's quite clear like this bed to the deprecation.
[09:24:10] **Other**: Then we will do.
[09:24:14] **Other**: The content enrichment.
[09:24:17] **Other**: And making catalog a source of truth. But then me, I don't know if we're going to be able to catalog management as well.
[09:24:25] **Other**: I think, I guess the question is.
[09:24:29] **Other**: If it's scalable to do it without it. Exactly.
[09:24:38] **Other**: You can go by with manual control.
[09:24:44] **Other**: And rely on, on the engineering team to.
[09:24:48] **Other**: Touch a bit here. Teacher bit there, which is kind of how we're working today. If you say, no, no, I don't, I don't want to start with the bad habits from the past and we have to do. But. Yeah, but seeing the speed of development for catalog, I think maybe building this would still, like, be a lot less.
[09:25:09] **Other**: Complexity.
[09:25:11] **Other**: And capacity than this ones.
[09:25:15] **Other**: Sounds like an easier task to do this part than just our tree and the vet to the application. But we would also need to come together to put some effort estimations on each of them.
[09:25:28] **You**: Yeah. Can we really, really.
[09:25:31] **You**: Do anything apart from weather deprecation?
[09:25:34] **You**: Like.
[09:25:34] **Other**: That's the question because we also have the bio sourcing, which is unclear.
[09:25:38] **Other**: How much effort will require.
[09:25:44] **Other**: So the, the.
[09:25:47] **Other**: Ancestor tree from Kyla's perspective is really straightforward.
[09:25:53] **Other**: We, we haven't finalized the specification, but right now what we're looking at is as part of a content enrichment process catalog just says, hey, I have something in these geo coordinates. Give me an ancestor tree.
[09:26:10] **Other**: So that, that, that's it. And we can do this with elephants.
[09:26:17] **Other**: If we want to, if we can afford to use the data set that we have from vector, and if we can't, then again, from catalog doesn't really change much. It's just, okay, now we have to replace all of this functionality in this new domain.
[09:26:34] **Other**: So the ancestor tree from catalog's perspective is really not much of an issue there.
[09:26:42] **You**: It depends if we can reuse. It's kind of. We can just do it. If we cannot reuse, we need to build.
[09:26:49] **You**: A bunch of.
[09:26:50] **Other**: Yeah. Yes.
[09:26:54] **Other**: But again, that's, I just wanted to clarify what's actually the deciding factor between a complex solution and a simple one. So it's not strictly catalog related.
[09:27:21] **Other**: I guess from the smart booking logic, I would also want.
[09:27:27] **Other**: So I think that the feature in and of itself would already be impactful. The question is, before we have.
[09:27:37] **Other**: Access to more of Expedia and access to all of the other suppliers, how impactful would it be? Because it's not like flamingo has nothing else to do.
[09:27:46] **Other**: Right.
[09:27:48] **You**: Yeah, they have some ideas, but.
[09:27:50] **You**: Yeah.
[09:27:51] **You**: Smart booking was.
[09:27:53] **You**: Like.
[09:27:54] **You**: The idea that it's going to be.
[09:27:56] **You**: Like highest impact.
[09:27:58] **You**: Yeah.
[09:27:59] **Other**: 100. I agree. The question is that highest impact is it taking into account expedia and broader selection of suppliers.
[09:28:09] **Other**: Or is it taking into account just what we have today?
[09:28:14] **You**: It's difficult to say, right? Because what Christina proposed yesterday, right?
[09:28:19] **You**: So initially we want to just launch.
[09:28:23] **You**: And take it.
[09:28:25] **You**: Kind of slower and carefully release it at what we have right now. And by the time we have it, like, tested and working, then it actually makes impact because expedia in parallel also release more. So it's kind of.
[09:28:43] **You**: A little timelines that kind of converge at the point when it all makes.
[09:28:48] **You**: Huge impact. So.
[09:28:50] **You**: Yeah.
[09:28:51] **Other**: Right. And, and that's the tricky part, because if you can build all these capabilities in parallel, then I agree with you 100. That time checks out.
[09:29:02] **Other**: The thing is.
[09:29:04] **Other**: If you can't build all the things that actually then allows you, when everything is set and done to just, you know, release a floodgates and access all the destinations and all the accommodations, then you won't have some things there and you won't have access to the same.
[09:29:21] **Other**: Wealth of inventory.
[09:29:23] **Other**: As you would otherwise have.
[09:29:24] **Other**: So because, again, if you, if you're working on this, then you may, maybe you won't be able to work on this or you maybe do a little bit of everything, but not everything. And so nothing will be fully done.
[09:29:40] **Other**: Meaning that you will always have some limited impact.
[09:29:46] **Other**: And.
[09:29:47] **Other**: I, I don't want you to be surprised again later.
[09:29:49] **Other**: So if you haven't heard about this.
[09:29:52] **Other**: You may get transferred pricing as well.
[09:29:58] **You**: At some point.
[09:30:00] **You**: And, like, yeah.
[09:30:04] **You**: I've seen it in kind of.
[09:30:07] **You**: Milestone documents. It.
[09:30:09] **You**: S kind of quite clear that it's one of the priorities for this year, but how realistic it is for us to work on that.
[09:30:18] **You**: It's kind of, like, not the question was that was even brought up.
[09:30:24] **You**: Yet.
[09:30:25] **You**: So.
[09:30:26] **Other**: Yeah.
[09:30:28] **Other**: So.
[09:30:33] **Other**: As here, I only have from, for route builder, we only have like the, okay, we need the ancestors for you because they need it for route builder.
[09:30:41] **Other**: The Tourlane preferred apparently it's like me.
[09:30:45] **Other**: If it's there, great. If it's not, may not be that impactful. So this one may actually not be as relevant.
[09:30:53] **Other**: So Tourlane preferred might be more relevant just for TP one.
[09:30:59] **Other**: But the feedback that Claudia got from tx is that no, no, this is important. Don't drop it as I understood it. I mean, it's, it's right. I mean, it's just an assumption now that they won't need it in TP tour because it seems like this accommodations are what they are making, what is making certain these nations really perform well.
[09:31:22] **Other**: But, yeah, so without this, I'm not sure we need to see. Right.
[09:31:28] **Other**: Maybe I think there is not 100 certainty that whatever AI recommendation is going to find will have the same conversion.
[09:31:39] **Other**: Impact as this student referred. So let's see that they decide that whatever they want, they have there, they will want also some human curation.
[09:31:52] **Other**: In accommodation recommendation.
[09:31:55] **Other**: And, and this is where there's, I think there's an additional complexity to all of this because we're, we're breaking stuff and part of breaking stuff is dealing with the Fallout.
[09:32:08] **Other**: Or we have an extra step of alignment.
[09:32:12] **Other**: Okay. So, for example, now, okay, we asked. So we need to get the alignment.
[09:32:20] **Other**: For the Tourlane preferred.
[09:32:22] **Other**: We try to get rid of destinations.
[09:32:25] **Other**: Didn't work. We were just getting bogged down in endless alignments and discussions of what does it mean and whatnot. So here we took the decision and say, screw this. Let's just do it ourselves and we'll just do it separately. So if at any point someone does agree that it doesn't belong in this team, we can just hand over.
[09:32:42] **Other**: Okay. And we're still kind of figuring out exactly how to handle this part still in terms of not if, but when.
[09:32:56] **Other**: Basically means, yeah, if we can do it later, then we pause new launches. If we, if we can pause new launches, we have to do it now.
[09:33:08] **Other**: But I think we, everyone needs to be aware and by everyone, I think this group is aware, but not sure how aware business stakeholders are that part of this project is breaking stuff.
[09:33:22] **Other**: And we purposely don't want to bring all of the past habits.
[09:33:27] **Other**: Yeah. And this is what ronik and robert are trying to, like, also formalize within tp2.
[09:33:38] **Other**: Because otherwise we end up being stuck in this endless loop of, oh, we need to worry about this. We need to worry about that. That doesn't exist anywhere else. We actually don't want to have it still.
[09:33:48] **Other**: So.
[09:33:51] **Other**: Either we ask for permission or we ask for, we ask for apologies.
[09:33:58] **Other**: That's what I want to say.
[09:34:00] **Other**: But, yeah, I expect these things to keep happening and we'll find a lot more when you start looking at supply as well.
[09:34:15] **You**: Back to planning. Right now we need to.
[09:34:20] **You**: Focus on planning the next cycle.
[09:34:24] **You**: So we need to assess that duplication.
[09:34:28] **You**: Parts.
[09:34:30] **You**: And then look at all other things on, on the picture.
[09:34:34] **You**: If we have any space. What are the priorities?
[09:34:38] **You**: Might be?
[09:34:42] **You**: And for veto deprecation, do we have any on.
[09:34:46] **You**: This image?
[09:34:49] **Other**: I think the only thing which is specific to web deprecation is this one.
[09:34:55] **Other**: Which we're not going to be doing anything Grand because basically we're just going to use the search endpoint, which we would build anyway.
[09:35:05] **Other**: So that's what I think it's not so from accommodations perspective and catalog specifically replacing that to is me.
[09:35:16] **Other**: Not such a big thing because. So you have to migrate to uids, which you would always have to do.
[09:35:23] **Other**: And this is not strictly about to relate it, but definitely there's a touch point there.
[09:35:29] **Other**: More in the sense that we need vet to, to be able to make, we need veto gone to be able to make catalog, the single source of truth. So it's more of an indirect dependency than a direct one. This is the only direct one.
[09:35:44] **Other**: Which its impact in terms of effort and require and capacity from the team is minimized because we're going to be using the search endpoint.
[09:35:54] **Other**: So that's, that's that, that's that.
[09:35:58] **Other**: Then again, we, the ancestor tree, but because anyway, as you can see, we would need it for other things. So it's kind of all over the place.
[09:36:08] **Other**: My concern with the vet rule deprecation is more on the destination area. So this is where we would most likely need something in elephants.
[09:36:19] **Other**: Or this.
[09:36:36] **You**: Okay.
[09:36:37] **You**: Claudia, about cycle planning. What are the kind of deadlines?
[09:36:43] **You**: That are approaching.
[09:36:49] **Other**: Alignment on Monday.
[09:36:52] **Other**: Just like to get some guidance and feedback. So here, which it's on Monday, we should already have.
[09:37:00] **Other**: Short listed list of topics.
[09:37:03] **Other**: That we discuss with Robert and Veronica is no longer in this meeting. But yeah, so we meet with Robert and Christine on Monday just to have a check in and a shortlisted list of topics and description that we go through together.
[09:37:24] **Other**: So this would happen then. Yeah. As I said on Monday.
[09:37:31] **Other**: And. Yeah, next week, then we would need to have the estimations and be done with the planning.
[09:37:38] **Other**: And there is also an alignment on the fort. So next week is basically the week in which we are already on Monday have a list of shortlisted topics, discuss them with Robert and Christine and then try to come up with estimations and proposal roadmap until the week after. So the first week of May.
[09:37:58] **You**: Okay, so we do estimates, like next week.
[09:38:02] **You**: Or short lists.
[09:38:05] **You**: What do we have? What do we have apart from beta and API resourcing?
[09:38:11] **Other**: Yeah. So with outsourcing and I want to try to do the catalog management part.
[09:38:19] **Other**: So this would be my proposal.
[09:38:22] **Other**: But.
[09:38:24] **You**: Okay. Yeah, we can put catalog management and then Christina will bring smart booking and it's going to be like a discussion.
[09:38:33] **You**: If it's going to be like actually smart booking.
[09:38:36] **You**: Next.
[09:38:38] **You**: And kind of Supply domain.
[09:38:40] **You**: Or catalog management.
[09:38:42] **You**: So I think we'll, we'll need to have this discussion next week.
[09:38:46] **Other**: You're forgetting about destination.
[09:38:47] **Other**: S.
[09:38:48] **You**: Destinations. Yeah.
[09:38:53] **You**: And destinations.
[09:38:55] **You**: Yeah, it was, it felt like destinations. We can delay, delay until C3.
[09:39:03] **You**: Do you still feel like we can delay this topic and it won't hurt us in cycle two if we don't.
[09:39:11] **You**: Rush it.
[09:39:12] **You**: At all.
[09:39:16] **Other**: Cycle three is two into months, right? Because cycle two is supposed to be two months and then we will go back to quarter.
[09:39:23] **Other**: So doing catalog management Supply and apiosourcing in two months sounds highly optimistic.
[09:39:36] **Other**: But borderline unrealistic.
[09:39:37] **Other**: Actually, don't just actually unrealistic. Let's be fair. It's unrealistic. And also keep in mind that they said that vland ones like will be three weeks and on infrastructure May has like four public holidays. So basically May is like four three. I don't know. But once every month, probably four.
[09:40:00] **Other**: So you can basically continue consider this cycle.
[09:40:04] **Other**: What like seven weeks out of which vlan is also three weeks of.
[09:40:09] **You**: Yeah. Vland won't be with us. We'll be maybe planning the destinations for cycle three.
[09:40:18] **You**: That's.
[09:40:18] **You**: All we can.
[09:40:20] **You**: Expect from villains.
[09:40:22] **You**: Plus infra.
[09:40:24] **You**: And then maybe cycle three. We actually do destinations.
[09:40:37] **Other**: Because until we do the first reach for API Outsourcing, I also can estimate how much work we would need from the team to do the switches plus.
[09:40:49] **Other**: Yeah. How everything will work. So this also where it's like a bit uncertain.
[09:40:55] **You**: I'd say we need.
[09:40:57] **You**: To kind of plan more than we expect.
[09:41:05] **Other**: We are always very optimistic.
[09:41:10] **Other**: There will for sure be some effort into launching Expedia then and then doing their.
[09:41:17] **Other**: The switch to catalog for certain destinations. So we also need to account that.
[09:41:24] **You**: Yeah. So.
[09:41:25] **You**: Like that.
[09:41:27] **You**: And API sourcing. Is that it?
[09:41:31] **Other**: But we also need the catalog management, so it's very tricky.
[09:41:35] **You**: Okay.
[09:41:37] **You**: Let's put catalog management. Maybe we can look into.
[09:41:46] **You**: Deeper into effort required there. Like, is it.
[09:41:50] **You**: Like.
[09:41:54] **You**: How much do we need on this Cadillac management site again?
[09:42:00] **You**: Is it like.
[09:42:04] **You**: Can you show the, the picture again for catalyst management? What are the things we want?
[09:42:08] **Other**: Sure.
[09:42:12] **Other**: A lot more than what, what I have here, that's for sure. But the first things that came to mind because these are what we've been discussing more often.
[09:42:24] **Other**: So this is just exactly how we do it. So this is just a UI.
[09:42:30] **Other**: Where we essentially need.
[09:42:33] **Other**: An item curator, but slightly different. And whether we build something new or we fork and rework item curator.
[09:42:46] **Other**: That's up to the engineering team.
[09:42:49] **Other**: Tourlane preferred, basically just something there that allows us to do the same thing we do today.
[09:42:56] **Other**: Someone goes there and presses a button, a checkbox to say to run preferred. This is what Claudia was looking for to be able to control do more gradual rollout of both catalog and, and Expedia. So you want to enable disabled destinations.
[09:43:11] **Other**: I guess there might be more things, more ways that you would like to control the catalog Claudia.
[09:43:19] **Other**: So, you know, this is something that Kiry and I discuss every now and then. Essentially there are some aspects that are done in SCM.
[09:43:32] **Other**: Which obviously would also like to split like many other components.
[09:43:37] **Other**: Kind of mixed.
[09:43:40] **Other**: So basically decommissioning SCM is.
[09:43:46] **Other**: Like, basically we.
[09:43:48] **Other**: Is kind of done when we build this, this new experience, unless there's something that we actively need to go into SEM and, and tear down.
[09:43:58] **Other**: Because if it's not.
[09:44:00] **Other**: Like, if it's harmless, then we can, we can leave it because it won't have any impact if it will have an impact and we have to go in and change it somehow.
[09:44:10] **You**: Okay.
[09:44:13] **You**: And apart from these things, you mentioned there, there are more. Claudia, do you expect.
[09:44:21] **You**: Other things?
[09:44:23] **You**: From Catholic management?
[09:44:26] **Other**: Yes, absolutely. But the thing is that.
[09:44:31] **Other**: We will first start.
[09:44:35] **Other**: Using. Let me look at.
[09:44:42] **Other**: I think what we have here, it's a good start considering we will launch expedia gradually and we don't have it yet, so we, my launch maybe in the last, I don't know, in one or two months. Right. So I think what I have here is sufficient to begin with to gradually launch Expedia and then add more as we go. So this can also mean that we can plan more features for cycle three.
[09:45:09] **Other**: Yeah.
[09:45:10] **You**: Okay.
[09:45:11] **Other**: Let's see, since also tree planner 1.0 won't use that much from catalog the data, right? And 2.0 seems to be still not needing so much catalog data in cycle two, right? I mean, I don't know what their plans, but I think that for using catalog across all the destinations, that will also require to have more advanced catalog management capabilities. This can also come then later in cycle three as long as we have some basic functionality in cycle.
[09:45:47] **Other**: That would be my proposal for this, considering the Expedia delay and the gradual rollout that is planned for switching to expedia content, I think we should be fine with some basic functionality in cycle two. So we have more.
[09:46:03] **Other**: Capacity to work on the outsourcing.
[09:46:10] **Other**: And destination and veto. Although I have to say that this destination and veto is very clear here.
[09:46:19] **Other**: But it's. Yeah.
[09:46:21] **Other**: If we would have to choose one, right? So is either supporting the veto deprecation or building this destination system.
[09:46:30] **Other**: Foundation, which one would be the first one we need to go to?
[09:46:37] **Other**: It's actually not necessarily one or the other. No, I, I meant four. I understand. But I meant from the, we won't have capacity to do everything. Right. So if we, if we would have to choose now between what we prior first, the veto deprecation or the destination system.
[09:46:59] **Other**: Well, that, that's the thing. So the destination system would be part of the vetted application.
[09:47:04] **Other**: In the sense that it could, if you, if you focus on that, then the vetted application can instead use a new destination system rather than using elephant.
[09:47:14] **Other**: So this map here. Yeah. Is kind of on the assumption that we can, we could find a way to not do it right now, because otherwise, yeah, I think.
[09:47:32] **Other**: Well, actually, now that I think about it, if you, if you build this, most likely you wouldn't need that, that feature in, in drip planner at all.
[09:47:46] **Other**: Because you essentially have everything.
[09:47:51] **Other**: So it's different.
[09:47:55] **Other**: Okay.
[09:47:56] **Other**: Yeah, it's tricky. I've skipped another way then. Maybe this makes it clearer for me at least.
[09:48:05] **Other**: Can we have building the new destination system? Yes.
[09:48:11] **Other**: Yes. So we would use elephant. Correct. Okay.
[09:48:16] **Other**: And. Okay.
[09:48:21] **Other**: Yeah. Between catalog and destinations, that by far catalog is going to have more impact.
[09:48:28] **Other**: Because it's, it's your, it's your bottleneck to use more accommodations.
[09:48:35] **Other**: And some access to more supply.
[09:48:36] **Other**: Okay.
[09:48:37] **Other**: And then I see. So basically.
[09:48:43] **Other**: And then is it the right time to put already the discovery and destination system, or should we just focus on the deprecation first, Alexei? Because then.
[09:48:55] **You**: Implementation wise, we should focus on it, but I would put at least some work into destinations that were ready next cycle.
[09:49:06] **You**: Maybe not much.
[09:49:15] **Other**: I see. So then our proposal for Monday will be catalog management Outsourcing and the to the application with technical discovery for destination system.
[09:49:26] **You**: And API sourcing.
[09:49:28] **Other**: Yeah.
[09:49:31] **Other**: It's already a lot.
[09:49:36] **Other**: Yeah.
[09:49:37] **You**: And smaller ones. Do we have any smaller ones?
[09:49:40] **You**: We, we need data for in the data warehouse.
[09:49:48] **You**: Just syncing data there.
[09:49:51] **You**: So it's also kind of.
[09:49:53] **You**: Will require a bit more work.
[09:49:57] **Other**: We already have something so that this was actually part of the updates for today. There is already agreement on the, the data model that was proposed.
[09:50:06] **Other**: They understand that we need a bit more work to have the answers are treated there.
[09:50:10] **Other**: But, yeah.
[09:50:12] **Other**: All good.
[09:50:14] **Other**: So we already had a second round of specifying the event, and I think we can already have a task to just send those events.
[09:50:24] **You**: Just publish events.
[09:50:25] **You**: It's like not.
[09:50:28] **You**: Not much work left.
[09:50:29] **You**: There.
[09:50:30] **Other**: Yeah. And I, I expect maybe just a slightly larger effort because you need to build a client to send events.
[09:50:38] **Other**: But from then on, I, and this is if we don't already have some gem lying around that we can just import to catalog.
[09:50:46] **Other**: Do we have something like that, Kiryl?
[09:50:49] **Other**: Amazing. So then it's. Yeah. Increase specified event in catalog and then ship it.
[09:51:01] **You**: But.
[09:51:02] **You**: We should also include.
[09:51:04] **You**: This as a way we want.
[09:51:06] **Other**: Don't worry. They will find us.
[09:51:09] **You**: Oh, yeah.
[09:51:14] **Other**: And then the small things they will find us.
[09:51:17] **Other**: And. Yeah, let's see also of the meeting tomorrow with the 2.0 and the strong Crotation service, which I really hope it won't come because.
[09:51:28] **Other**: Yeah.
[09:51:29] **You**: But.
[09:51:30] **You**: Yeah, how can it come, like, before we.
[09:51:33] **You**: Finish with kind of 10 other things?
[09:51:36] **Other**: Welcome tourlane because someone will tell you that it's more important that you take this now than all of the other 10 things that you said you want to do.
[09:51:46] **You**: Yeah. Fun times.
[09:51:48] **Other**: Yeah.
[09:51:49] **Other**: Let's see. I mean, if they all say this is a full block or 40 planner 2.0.
[09:51:55] **Other**: Yeah.
[09:51:58] **Other**: Again, clearly it belongs within the steam. It's just the timing. So.
[09:52:08] **Other**: It's, it's not one of those I, I have nothing to do with this kind of thing.
[09:52:13] **Other**: That would.
[09:52:15] **You**: Like we are doing api Outsourcing to free up time to actually be able to do things like that. But we're not there yet.
[09:52:25] **Other**: Yeah.
[09:52:30] **Other**: Everyone's struggling with lack of capacity.
[09:52:36] **Other**: And I think we are still the biggest team in terms of capacity.
[09:52:41] **Other**: So.
[09:52:41] **You**: Still, we're not kind of infinite. We've been kind of.
[09:52:47] **You**: More than we can.
[09:52:48] **You**: Do.
[09:52:48] **You**: Still.
[09:52:50] **Other**: You heard, Christina, I asked this one, like, oh, you are five engineers. I don't understand why you cannot do this.
[09:52:57] **You**: Then Pedro show this picture. She's like, okay.
[09:53:00] **Other**: Yeah, yeah, for sure.
[09:53:03] **Other**: Okay.
[09:53:03] **Other**: Good. Then we are very much over time. But thank you so much. I think we are starting then with the good alignment. I will prepare something for Monday.
[09:53:04] **You**: Yeah.
[09:53:16] **Other**: Yeah. And then you can take it from there.
[09:53:19] **You**: Thank you.
[09:53:20] **Other**: I'm sorry for kind of taking over this meeting, but I really wanted to discuss with you how to move forward with the planning.
[09:53:28] **Other**: Hi, I agree that, you know, I've been saying this for a few weeks now. I, I also need this Clarity.
[09:53:36] **Other**: Because we need to understand where we put the effort into designing and developing. So this is, in fact, the most important thing that we need to figure out right now.
[09:53:55] **You**: We kind of took over our one on one. Do you want to move it?
[09:53:59] **You**: To 30?
[09:54:00] **Other**: Yeah, I will move. Good. Thank you. Bye.
[09:54:02] **You**: Cool.
