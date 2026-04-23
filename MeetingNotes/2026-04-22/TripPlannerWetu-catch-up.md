# TripPlanner<>Wetu catch up

**Date**: 2026-04-22
**Time**: 12:00 - 12:45
**Location**: PR-20 HQ-2-China (8) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- gregor.schmidt@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- kiryl.karetnikau@tourlane.com
- PR-20 HQ-2-China (8) [Camera, Google Meet, Mic, TV, Tablet]

## Transcript

[10:00:57] **You**: I don't remember what the wedding kit of the asparagus from Gran.
[10:01:01] **You**: Ada.
[10:01:34] **Other**: I'm obviously with a verbal primitive terminal.
[10:01:58] **Other**: Poster over.
[10:02:05] **Other**: Here and today should.
[10:02:09] **Other**: Comes to the.
[10:02:21] **Other**: Next.
[10:02:23] **You**: Sell a bunch of houses.
[10:02:42] **You**: I know it was interesting.
[10:03:05] **Other**: Reduce.
[10:03:09] **Other**: R.
[10:03:10] **Other**: Seeing the window instead of you when I look at the technique.
[10:03:14] **You**: Not really.
[10:03:16] **Other**: A reflection that's what the word I was looking for.
[10:03:19] **Other**: Can you ping vlan? He was still very focused at his desk.
[10:03:24] **You**: Yeah, yeah. I told him to kind of catch up with you, but yeah, for. For today, I think.
[10:03:32] **You**: We. We can catch up with our villains. Right. Beyond this working on destinations.
[10:03:37] **You**: And maybe we just sit here and talk about veto. Yeah. Yeah. V has another topic.
[10:03:39] **Other**: I thought he was harder for me.
[10:03:45] **You**: He wanted to catch up with him.
[10:03:47] **You**: So, yeah, sorry we couldn't make it.
[10:03:50] **Other**: I thought he was part of this meeting, but then he was. Okay.
[10:03:51] **You**: No, no, no. All good.
[10:03:53] **You**: Sorry we couldn't make it to the office. We had our successful team event yesterday.
[10:03:59] **You**: Some people were at home at like 1 30, like Kiryl.
[10:04:05] **You**: And. Yeah.
[10:04:07] **You**: Part of the team is maybe like the entire team is hangover.
[10:04:14] **Other**: People are thinking, never mind. It's fine. I hope it was as fun as it sounds.
[10:04:20] **You**: Oh, yeah.
[10:04:20] **Other**: Anyway, not just depressed and therefore thinking.
[10:04:24] **You**: No, no, no.
[10:04:26] **You**: It was really fun.
[10:04:28] **You**: Cool.
[10:04:29] **You**: Thank you, Gregor, for finding time.
[10:04:32] **Other**: Of course.
[10:04:33] **You**: So we have this vet migration.
[10:04:37] **You**: Right? Pedra is a little bit ahead of us.
[10:04:42] **You**: Not more.
[10:04:44] **You**: And you obviously know quite a bunch about veto, and I wanted to just have some time for us to maybe walk through how trip planner interacts with veto and kind of where it gets IDs when it kind of uses these ideas for what kind of apis are maybe called at which point. So we have, like, maybe some sequence diagram of things happening right at the moment, and then we can actually much easier reason of.
[10:05:17] **You**: Like, the future.
[10:05:19] **You**: Picture without that. So we can say, see clearly how things move from current situation to know that interaction. So maybe we can draw something today together.
[10:05:41] **Other**: Let me check my extensive Excali draw.
[10:05:47] **Other**: I'm using Excalibur and not mirror.
[10:05:50] **You**: Yeah. If you prefer bricks, caly draw, if you know how to kind of draw sequence diagrams there, we can.
[10:05:50] **Other**: And can only have.
[10:05:57] **Other**: No, no. Like I was just checking if I like, I think I have explained this.
[10:06:06] **Other**: Repeatedly in the past. And I was wondering whether maybe still have something flying around.
[10:06:18] **Other**: But I think I don't.
[10:06:24] **You**: Clean it once again. Sorry.
[10:06:26] **Other**: Send it here.
[10:06:28] **Other**: Ah, yeah. Here's one small thing.
[10:06:30] **Other**: Okay, yeah, this could be useful.
[10:06:33] **Other**: So the first thing I have to.
[10:06:39] **Other**: First thing I have to tell you is there's not one sequence, but.
[10:06:46] **Other**: Different interactions for different purposes.
[10:06:50] **Other**: And depending on what we're talking about, the replacements will be.
[10:06:55] **Other**: With the replacement replacing v2 just means to not do something anymore.
[10:07:01] **Other**: Or to use a different source.
[10:07:05] **Other**: And therefore I would let me see. Maybe we can.
[10:07:19] **Other**: I'm wondering, maybe it's easier if I try to show.
[10:07:25] **Other**: What trip planner does and when. And you maybe draw the sequence in the background.
[10:07:29] **You**: Yeah.
[10:07:31] **You**: Definitely.
[10:07:36] **Other**: By the way, I asked Sylvia whether somebody from what she would like to join the meeting because they will also like, while they should be experts on the topic, they not necessarily are. Like not everybody at least.
[10:07:51] **Other**: But she said that there's no single person already tasked to be heading this part, this initiative.
[10:08:00] **Other**: But she also said that maybe it would be possible that we transcribe the meetings so that she can look at it later on. Was that be okay for you?
[10:08:08] **You**: Just record the entire thing so they can watch.
[10:08:11] **Other**: Same for me. Like, I don't care. I will not watch the recording or the read the transcription.
[10:08:18] **You**: Yeah.
[10:08:18] **Other**: But.
[10:08:19] **You**: Let's do it.
[10:08:20] **Other**: Okay.
[10:08:23] **You**: I'm starting.
[10:08:24] **Other**: Okay.
[10:08:27] **You**: Hello.
[10:08:29] **You**: Future viewers. Welcome to our podcast.
[10:08:37] **Other**: So let's use.
[10:08:42] **Other**: Staging because.
[10:08:47] **Other**: Yeah.
[10:08:48] **Other**: Because that's easier there because we don't have everything connected already.
[10:08:55] **Other**: So.
[10:09:00] **Other**: Is used, as I said in multiple places. For one, it's used as.
[10:09:08] **Other**: A data source for accommodation data.
[10:09:12] **Other**: So you all know that if you have an offer and, I don't know, you want to go to some accommodation that was never sold.
[10:09:24] **Other**: In Tourlane before.
[10:09:26] **Other**: What you can do is you can search for that accommodation in v2 and it will automatically be imported into our system.
[10:09:37] **Other**: And let's show, let's, let's try to look at how this actually works. So any, any destination you're particularly familiar with where we have a DMC.
[10:09:49] **Other**: Connected on staging.
[10:09:55] **Other**: United States.
[10:09:56] **Other**: Also.
[10:09:58] **Other**: Okay. And let's go.
[10:10:03] **Other**: Take a short trip.
[10:10:06] **Other**: I didn't select the market. Probably not.
[10:10:11] **Other**: So this is now a very unusual use case because I create like a blank offer that agents can't do that. I'm just doing this here for simplicity.
[10:10:33] **Other**: And tempter done. Just one response. Let's be a bit more forgiving and also expect on request.
[10:10:43] **Other**: So what you can see already is like we have one of them has images.
[10:10:50] **Other**: The other ones don't.
[10:10:58] **Other**: And this means we have never sold them. So they went, they are not connected to our, they are not connected to V2. They are, they exist in our.
[10:11:07] **Other**: An elephant in this case because they have been imported via the DMC via to call, but they are not connected to V2. They cannot be visualized.
[10:11:17] **You**: So in this case, like accommodation search didn't return veto ID for them.
[10:11:19] **Other**: So.
[10:11:23] **Other**: Exactly.
[10:11:23] **Other**: So if we go to, remember the clove street hotel.
[10:11:32] **Other**: Staging.
[10:11:49] **Other**: This shouldn't take so long.
[10:11:54] **Other**: Okay, I thought this would be a more unique name than it is.
[10:12:05] **Other**: This one is it did it. That's it. So we have it connected to booking com, to gyata, Google places, hotel beds, private safari and terrava, but no V2. And as you can see, there's no.
[10:12:17] **Other**: No description and no images. So somebody redesigned this page.
[10:12:23] **Other**: Oh, somebody seriously redesigned this page.
[10:12:27] **Other**: That's useful.
[10:12:29] **Other**: So what happens when the agent now wants to sell this accommodation, they can click on it, they can pick a room.
[10:12:38] **Other**: But they have this warning here, content unlinked. And this links to this form down here.
[10:12:45] **Other**: Which enables the agent to search in v2's database. So this is actually a search result provided by gecko API, but it's really just a proxy to the v2 search.
[10:12:59] **Other**: And by clicking add to offer now, what happens is that this item is stored with the elephant ID that we got from accommodation search. And we also remember that this is linked to the v2 IDE that we found using the, the content search that you just saw at the end.
[10:13:18] **Other**: And that's it. So that's what.
[10:13:20] **Other**: What we do for now.
[10:13:22] **Other**: But during the trip with sync.
[10:13:26] **Other**: A lot of stuff happens. And this is what I actually found in my Kali draw.
[10:13:32] **Other**: So I can use that.
[10:13:34] **Other**: So like one step back.
[10:13:38] **Other**: What you just saw was if you look at this. So the triple.
[10:13:43] **Other**: The, this was the accommodation search in the way to content. So the client in this case, the drip planner front end asked the trip planner back end, can you give me all accommodations that are available in, in vitu that start with that, that have the name clove Street something?
[10:13:49] **You**: Yep.
[10:14:02] **Other**: And then triptana back end will go to v2, ask for suggestions with that name.
[10:14:09] **Other**: And then return those things. And the, the client will remember which ID was selected.
[10:14:15] **Other**: And that's the end of the, the whole interaction. So this doesn't interact with, with the other services yet.
[10:14:24] **Other**: The complicated part starts now with the V2 sync. So what.
[10:14:28] **Other**: And here you can see gecko API. So that's the trip back end.
[10:14:32] **Other**: And V2 and elephant.
[10:14:38] **Other**: So what, when you click trip with sync, which I will do now for hopefully.
[10:14:45] **Other**: It doesn't work because it's too long.
[10:14:48] **Other**: Just selected one night, but itinerary has three.
[10:14:52] **Other**: Okay, if I now click clip this sync.
[10:14:57] **Other**: A lot of things will happen. And at the end of those, a lot of things.
[10:15:07] **Other**: We'll see a success message.
[10:15:15] **Other**: Q waiting music.
[10:15:23] **Other**: Yeah, this is one of the reasons why we want to get rid of v2 in the trip planner because it's slow.
[10:15:39] **Other**: And we see the effect already.
[10:15:41] **Other**: Yeah.
[10:15:43] **Other**: So a lot of.
[10:15:46] **Other**: Things happened and one of those things is that we now have a description here, and we now have images here, although they are weirdly tagged with catalog instead of, I can explain what's happening here, actually.
[10:16:00] **Other**: So we replace web content with the content from expedia.
[10:16:05] **Other**: Which now lives in, in catalog system. That's why you can see the catalog and actually the description could also look.
[10:16:15] **Other**: Or it's different from bet. So we have a description now, but it's not the video description.
[10:16:21] **Other**: Exactly. So how we do, like, or the accommodations that have that.
[10:16:27] **Other**: To connection, we replace the content.
[10:16:32] **You**: Okay, so it's kind of.
[10:16:35] **You**: Taking that and just taking.
[10:16:38] **Other**: Requirement with accommodation.
[10:16:40] **Other**: Is connected to virtual, which means, like, we don't break this trip planner part.
[10:16:47] **Other**: But we already use Expedia.
[10:16:50] **Other**: Content. So this is what you see is coming from Expedia.
[10:16:59] **You**: All cases.
[10:17:01] **You**: Or.
[10:17:03] **Other**: We launched some of the suppliers.
[10:17:09] **Other**: So this, like this enrichment, this enrichment process exactly works for a limited amount of them. Yeah, of course, we know, but, like, we'll need now to, to get the list.
[10:17:10] **You**: Which.
[10:17:10] **You**: One.
[10:17:21] **You**: Okay.
[10:17:21] **Other**: Okay, then I can't trust item curator anymore. What I can trust is my, my dear elephant viewer.
[10:17:30] **Other**: So here you can still see the, the descriptions that were now imported from v2 in all the various languages, even dutch, and that we don't use anymore.
[10:17:42] **Other**: And we also have.
[10:17:46] **Other**: We don't have.
[10:17:49] **Other**: Images from.
[10:17:52] **Other**: No attachments, whatever.
[10:17:55] **You**: So again, for our case, we didn't have this thing synced from vaidu.
[10:18:02] **You**: We checked in whether this Klube treat hotel. It has data. And we made search by name. It found that ID stored it. And then during.
[10:18:08] **Other**: Yep.
[10:18:18] **You**: Trip, we think.
[10:18:19] **Other**: Exactly. Now, this is what I wanted to. Yeah, exactly. I wanted to show the result first, and now I should tell you how it works.
[10:18:27] **Other**: So what gecko API does, it has access to the itinerary eye of v2, not the content API.
[10:18:33] **Other**: So the only entity it can talk with is like a talk about is itinerary. So what it does, it's sending the full itinerary to v2.
[10:18:42] **Other**: And this means the accommodation IDs, the dates when they, the accommodations are used mostly.
[10:18:49] **Other**: And then it's loading the itinerary back.
[10:18:53] **Other**: This was actually, like, this is outdated a bit.
[10:19:05] **Other**: What it then does, it.
[10:19:07] **Other**: S looking at the itinerary.
[10:19:11] **Other**: That we get from v2, including the content.
[10:19:19] **Other**: Also briefly show you how this would look like.
[10:19:42] **Other**: So.
[10:19:43] **Other**: Like, this is the veto visualization of this. This is the, the same itinerary.
[10:19:49] **Other**: So August 1st, close street hotel.
[10:19:52] **Other**: Here you see the v2 images. You see.
[10:19:58] **Other**: The description.
[10:20:00] **Other**: And what we fetch is we fetch this JSON document. That is the basis for this visualization for v2. And in there we have this content thing.
[10:20:10] **Other**: And one of the items here is the hotel.
[10:20:14] **Other**: And in there you can find.
[10:20:17] **Other**: The descriptions in the various languages and the images are also here somewhere.
[10:20:24] **Other**: So what.
[10:20:27] **Other**: Gecko API does, it sends the full, like the itinerary skeleton, the IDs and the dates to wetu and then loads this enriched content document.
[10:20:38] **Other**: Which includes all the descriptions and image references for all items in the itinerary.
[10:20:44] **Other**: And then what way to gecko API does,
[10:20:48] **Other**: It's trying to find those accommodations.
[10:20:52] **Other**: In elephant and potentially if it's already there, it's updating the existing accommodation. If it's not there, then it's even creating a new accommodation. And it does the same thing for the area. So you can see here I zil means destinations.
[10:21:09] **Other**: Come on.
[10:21:14] **Other**: Something's really slow here. Could be the office as well.
[10:21:19] **Other**: So we don't only see that this is the clove street hotel. We also see that it's cape town and we get a description and images for cape town as well.
[10:21:29] **Other**: And so what, again, this is what gecko API does. It's looking at the.
[10:21:34] **Other**: Accommodations and touristic areas in the itinerary and sending them to elephant.
[10:21:41] **You**: Down in the Json. Can you show how it is, how it looked like?
[10:21:47] **You**: Somewhere?
[10:21:48] **Other**: Yeah. Yeah. So this is here the, the first item in the content list is the accommodation. The second item is Cape Town.
[10:21:56] **Other**: The area, and then it continues the next bigger area is also included, western cape.
[10:22:03] **Other**: And, and then for whatever reason, first Africa and then South Africa.
[10:22:08] **Other**: So those are touristic areas or destinations in vitro lingo.
[10:22:14] **Other**: Vitro terminology that belong to this itinerary.
[10:22:20] **Other**: So no geofapes already.
[10:22:25] **Other**: It does have. No, this is the.
[10:22:34] **Other**: Teacher.
[10:22:36] **Other**: I think this may not have. Oh, this one does. Yeah.
[10:22:43] **Other**: Cape Town does not have polygon anymore.
[10:22:48] **Other**: Southern cape seems to have a western cake. Sorry. Western cape seems to have polygons.
[10:22:57] **Other**: But I'm pretty sure that cape town has had.
[10:23:00] **Other**: A polygon at some point, so we probably have it in elephant.
[10:23:04] **Other**: And eventually it was removed from this data source. Like, I think I mentioned.
[10:23:09] **Other**: This. I definitely mentioned this in other meetings.
[10:23:13] **Other**: So the, this, this API that we are using here is a private API that was built by v2 to drive this user interface.
[10:23:22] **Other**: And potentially other things. I don't know.
[10:23:26] **Other**: But it's not a public API, so it's actually we are accessing content that we don't have the license tool.
[10:23:33] **You**: So we reverse engineered their API.
[10:23:37] **Other**: Yeah. I mean, reverse engineering is like a.
[10:23:40] **Other**: Strong word for using the network to find, find adjacent. But yeah.
[10:23:46] **You**: So.
[10:23:47] **Other**: Like, if you, if you were, if you were a judge, you may consider this hacking. I would consider this engineering.
[10:23:47] **You**: Yeah.
[10:23:53] **You**: Yes.
[10:23:54] **You**: Yes.
[10:23:57] **Other**: And, yeah, and.
[10:23:59] **Other**: This, and this exposes this, this polygon.
[10:24:05] **Other**: Attribute for and used to do with it for all areas.
[10:24:11] **Other**: And we made use of that by putting that into elephant. And we were, I could also.
[10:24:18] **Other**: Includes the explicit connection between the accommodation and the area in here. So this is the.
[10:24:29] **Other**: Like it has two, two main parts, the content, which is the representation of the.
[10:24:36] **Other**: Yeah, the content database and the itinerary, which is the representation of what is this itinerary. Right. So this is like the thing we send to veto. We have the first stop.
[10:24:47] **Other**: It's going to this content entity ID. This is the exact same content entity ID that we selected previously when I did this link content thing.
[10:24:56] **Other**: And here you will, and here you also see that this is booked for one day. And you see that it is.
[10:25:07] **Other**: Like somewhere here. Yeah, the start date plus the fact that this is the first leg means that this is booked from the paper, sorry, August 1st for one night.
[10:25:18] **Other**: And in here you can see the destinations.
[10:25:23] **Other**: So this accommodation, this closed Street hotel belongs to those destinations. And again, destinations, artistic areas, same thing, different wording.
[10:25:34] **Other**: And here you can see this, these are the destinations. This belongs to the destination with the ID 509, which is Cape Town and so on. So here we have the explicit mapping provided by accommodation to areas.
[10:25:49] **Other**: And for the most part, we ignored that. So for the longest time, we did not look at this. Instead, we only looked at the polygons, imported them into elephant and did the, and did this as part of the ancestor tree ourselves.
[10:26:03] **Other**: But then in the last year, no end.
[10:26:05] **Other**: Of 2024, I think we noticed that the polygons were sometimes missing or incomplete.
[10:26:14] **Other**: And then we do told as well what you're looking at is really not something that we are working with.
[10:26:21] **Other**: And you shouldn't look at this in the first place.
[10:26:25] **Other**: And instead we manage this explicitly. And so we change this and now we.
[10:26:31] **Other**: Additionally to the polygons if they're available, we explicitly store this mapping also in elephant.
[10:26:38] **Other**: So that.
[10:26:41] **Other**: We know that the clove street hotel is in cape town, even though cape town currently doesn't have a polygon.
[10:26:52] **Other**: Cool, cool.
[10:26:53] **You**: Okay.
[10:26:53] **Other**: Cool.
[10:26:54] **Other**: So this is like the second.
[10:26:58] **Other**: Like this whole sentient reload the itinerary right to elephant.
[10:27:06] **Other**: This is like the second big interaction pattern that we have with v2. And this is something that we would get rid of.
[10:27:12] **Other**: Right. So we don't want to import content from v2 going forward.
[10:27:19] **You**: Yeah.
[10:27:19] **You**: Yeah. You want it.
[10:27:19] **Other**: Yeah. Therefore.
[10:27:20] **You**: To happen.
[10:27:21] **You**: On.
[10:27:22] **You**: The catalog.
[10:27:23] **Other**: We will take content either from expedia or we will manage the areas ourselves or find a different source for that.
[10:27:30] **Other**: So this would all just go away.
[10:27:32] **You**: Yeah.
[10:27:32] **You**: Yeah.
[10:27:33] **Other**: Without replacement.
[10:27:37] **Other**: And this last thing here is just as an fyi. So this sidekick is a background job for gecko API, the background job processor.
[10:27:46] **Other**: And when we generate the trip is what we actually do is we synchronously do this v2 interaction. And then asynchronously schedule a job to generate the JSON that is used for the trip visualization. And this background job then does not interact with way too at all. It really only fetches data from elephant.
[10:28:08] **Other**: And visual and collects information. Like this is the accommodation, this is the area, those are the pictures, those are the descriptions. This is the country that you're going to and so on.
[10:28:19] **Other**: And then puts this into a JSON file that stored on S3, which is then used by the trip.
[10:28:24] **Other**: This. So if we like this whole bottom part here does not look at v2 at all. It doesn't care.
[10:28:33] **You**: Good.
[10:28:33] **Other**: And that also means that.
[10:28:37] **Other**: When I say the triples needs veto to work, it's because of this top part.
[10:28:43] **Other**: Not because.
[10:28:45] **Other**: The, the trip is itself would need to be too.
[10:28:49] **Other**: The trip is doesn't care where the content's coming from. It's really only looking at elephant.
[10:28:54] **Other**: And if like, apparently today elephant is providing content from Expedia or whether it's providing content from v2 or whether somebody clicked edit and change the content manually.
[10:29:09] **Other**: It doesn't care.
[10:29:11] **You**: Good. Perfect.
[10:29:12] **You**: Okay.
[10:29:14] **You**: Yeah. But first part also kind of has.
[10:29:17] **You**: A bit more to it, right? So sometimes we have data in vet.
[10:29:23] **You**: We can find it.
[10:29:25] **You**: And just import it. And sometimes we don't have it. Right. So this is like.
[10:29:29] **You**: Another.
[10:29:29] **Other**: Yeah, this is what would happen if you like.
[10:29:36] **Other**: Go back to map search.
[10:29:39] **Other**: And then.
[10:29:44] **Other**: Like use some obscure.
[10:29:47] **Other**: I mean, it probably works in Cape Town.
[10:29:50] **Other**: Because V2 is based in South Africa, if I'm not mistaken.
[10:29:55] **Other**: But it would be possible that you search and you don't get a result.
[10:30:01] **Other**: Well, there you go.
[10:30:04] **Other**: And what would now happen is that the sales agent would reach out to content integration team and tell them I want to use the sellers hone hot, whatever hotel. And can you please tell V2 to provide this content for me?
[10:30:20] **Other**: And what their content integration team then does, it's collecting those on a daily basis, sending a list to Vetu waits for a day, two, three, four, whatever.
[10:30:31] **Other**: And V2 tells them it's there now. And then the content integration team will double check.
[10:30:37] **Other**: And then provide this information back to the sales agent so that they can then.
[10:30:42] **Other**: The content integration team will probably already do the trip with sync. So the data will then be there properly and not just. And the agent will not do the link content anymore.
[10:30:55] **You**: Usually at this point they are like, okay, now content. I'm blocked. I'm just waiting for another.
[10:31:02] **Other**: Either the, either that or they.
[10:31:06] **Other**: Will select another one because they are not willing to wait.
[10:31:10] **You**: Yeah.
[10:31:10] **Other**: Also a possibility.
[10:31:11] **Other**: Right?
[10:31:11] **You**: Definitely.
[10:31:13] **You**: And, yeah, I actually thought that content integration team has just some UI where they just add things to that too.
[10:31:23] **You**: And it. It is there. And now we can immediately query it. But it's not that way.
[10:31:29] **You**: Right.
[10:31:33] **Other**: So V2 does have an admin UI.
[10:31:37] **Other**: Yes, I'm not a robot.
[10:31:40] **You**: You never know these days.
[10:31:44] **Other**: Well, I'm pretty sure.
[10:31:47] **Other**: Sorry, I need to find the password first.
[10:31:51] **Other**: In three password saves.
[10:31:56] **Other**: This.
[10:32:17] **Other**: Morning.
[10:32:24] **Other**: So they have a UI. For example, this here.
[10:32:49] **Other**: I think.
[10:32:49] **Other**: It's surpr.
[10:32:50] **Other**: Ised.
[10:32:55] **Other**: I have no clue why this is also.
[10:33:06] **Other**: Yeah. So here you can see the.
[10:33:10] **Other**: The ad menu if the accommodation already exists.
[10:33:15] **Other**: They can also change the description here. They can also manipulate the images here.
[10:33:22] **Other**: If the accommodation doesn't exist, they will need to reach out to v2, if I'm not mistaken. I'm not sure they can create a new accommodation directly.
[10:33:33] **You**: At least.
[10:33:33] **You**: Just review things.
[10:33:35] **Other**: However,
[10:33:38] **Other**: I mean, they could just as well change the description and item curator today.
[10:33:43] **Other**: There's no real reason why they wouldn't use that.
[10:33:47] **Other**: At least for accommodations, for areas.
[10:33:50] **Other**: I mean, this has brought up more than once. There's no.
[10:33:56] **Other**: No way to explicitly find them in item curator. You would need to know the uuid of the area and then you would need to manipulate the URL to get.
[10:34:06] **Other**: There because the user interface is limited to admin areas. That doesn't expose touristic areas.
[10:34:15] **Other**: So this was the accommodation flow. Then there's the.
[10:34:21] **Other**: Manual input. So for manual input, we have kind of the same user.
[10:34:29] **Other**: Similar thing here.
[10:34:33] **Other**: You have the same link content thingy.
[10:34:38] **Other**: Where you can then select which.
[10:34:42] **Other**: Which accommodation you want to link this record to.
[10:34:50] **Other**: And now this is where they go.
[10:34:54] **Other**: Ah, there.
[10:34:57] **Other**: And now this should be.
[10:35:02] **Other**: Yeah. Now it's at the other end of the country because I selected a different clove.
[10:35:09] **Other**: Portal.
[10:35:11] **Other**: It's called glow files.
[10:35:13] **Other**: Now.
[10:35:20] **Other**: Which is now not situated in Cape Town, but in that area called clove.
[10:35:34] **Other**: So this is the use case where.
[10:35:39] **Other**: In destinations where we don't have a proper API connection, for example, they would be able to manually add an accommodation this way.
[10:35:49] **Other**: And what, what's happening is the same thing. So during the trip with sync, if this accommodation was totally new during the trip with sync, we would send the base itinerary.
[10:36:00] **Other**: Load the content, restrict the data and create the accommodation in elephant.
[10:36:08] **Other**: I don't want to check now if this particular accommodation already exists enough and or not. And if it already exists, we would extend it.
[10:36:17] **Other**: And we would also use this interaction to, like, in contrast to the map search use case that we saw before. This record now has no elephant UUID. We don't know yet which accommodation an elephant this refers to.
[10:36:32] **Other**: With the map search, we always get the uuid as a first class entity, so to say, like, it's always there.
[10:36:40] **Other**: With a manual search, we don't because we only search in v2.
[10:36:43] **Other**: Right. And only during the trip, this sync.
[10:36:46] **Other**: We eventually make this connection.
[10:36:49] **Other**: Like potentially we already find this earlier.
[10:36:54] **Other**: But depending on the state of the accommodation and vetu. I'm sorry, an elephant.
[10:37:00] **Other**: But we definitely need to fit this thing to be 100 sure that we get this.
[10:37:05] **Other**: This UUID connection so that we then can.
[10:37:09] **Other**: Fulfill our promise down here.
[10:37:12] **Other**: That, that this can only fetch data from elephant. For that, we need the uuid. Otherwise we wouldn't be able to only look into.
[10:37:19] **Other**: That.
[10:37:21] **Other**: And then manual accommodations.
[10:37:26] **Other**: And not, doesn't, don't necessarily need to be regular accommodations. It could also be something like a campground.
[10:37:34] **Other**: Where we don't select an individual accommodation.
[10:37:38] **Other**: But we select an area where we, or an individual campground, but we select an area where the customer will stay.
[10:37:51] **Other**: And.
[10:37:53] **Other**: It should be in here somewhere.
[10:37:57] **Other**: It's not.
[10:38:04] **Other**: Yeah, this filter is out. This user interface filters out accommodation, but a lot of those things are tagged as other.
[10:38:14] **Other**: Which is why it doesn't, all those are activities that are in the same database like v2 is really weird that way.
[10:38:26] **Other**: Yeah.
[10:38:27] **Other**: Like, I was hoping I would find the area clove, but that's not specific enough.
[10:38:33] **Other**: So that's a challenge for the agents in this scenario. Let's use.
[10:38:39] **Other**: Logic.
[10:38:40] **Other**: Link.
[10:38:41] **Other**: Yeah. Yeah. Now we have an area match.
[10:38:45] **Other**: So in this case, the assumption is that the customer would stay in the area of cape town in one of the campgrounds that we suggest to them.
[10:38:59] **Other**: Then it would probably not be a luxury room anymore, but just then that's something. And there would be no bed and breakfast, but this would be.
[10:39:11] **Other**: Only.
[10:39:14] **Other**: And they would probably pay this on the spot and not we pay this. Maybe probably depends on the destination.
[10:39:23] **Other**: So now this is linked to an area.
[10:39:27] **Other**: This looks slightly different.
[10:39:33] **Other**: In the prep is also in v2.
[10:39:37] **Other**: So here now.
[10:39:41] **Other**: The accommodation is the city.
[10:39:44] **Other**: And not a single accommodation anymore.
[10:39:47] **Other**: And where's my tab here?
[10:39:50] **Other**: Same here. Now we have this camping card instead of.
[10:39:57] **Other**: A proper accommodation.
[10:39:58] **Other**: But the basics behind the scenes is still the same. So we send now an itinerary where the accommodation where the area is.
[10:40:08] **Other**: The accommodation.
[10:40:12] **Other**: And, and so we, we, this is how you can also explicitly sync an area between.
[10:40:19] **Other**: Like, otherwise we need an accommodation within the area in order to import it into elephant.
[10:40:25] **Other**: Now we explicitly only look at the area. The result is the same. We'll have an area in the elephant that, that is Cape Town now in this case.
[10:40:35] **Other**: But I'm showing it because we have this.
[10:40:40] **Other**: We have this link content thing that does not only link accommodations.
[10:40:45] **Other**: But it can also be used to link areas.
[10:40:52] **Other**: And the last point or the last way to interact with v2 content is this.
[10:40:58] **Other**: So here we have again a location search.
[10:41:06] **Other**: And this is now looking for any kind of location. This could be both the clothes.
[10:41:15] **Other**: Hotel that we saw earlier.
[10:41:17] **Other**: Could be the cape town area that we already saw.
[10:41:24] **Other**: But it can also be like an airport or like a proper transport location.
[10:41:36] **Other**: And.
[10:41:37] **Other**: This.
[10:41:38] **Other**: Is not linked to.
[10:41:40] **Other**: To elephant at all.
[10:41:41] **Other**: So what we do with this is we only use it to.
[10:41:48] **Other**: A second.
[10:41:51] **Other**: Changes. So we know that we move to the other side again. Yeah.
[10:41:55] **Other**: Right.
[10:41:58] **Other**: To draw this line, so to say.
[10:42:01] **Other**: So we have our accommodation, which is here, which is actually just the area of the camping example. But now we can draw this line.
[10:42:10] **Other**: To the airport.
[10:42:13] **Other**: We need a name for that and we need a location for that. And that is what we are pulling from v2.
[10:42:20] **Other**: So that we.
[10:42:21] **Other**: Can tell the customer where do they need to go, where do they start? How do they get from, from the airport to the first accommodation, for example, and how long will it take approximately? And there's obviously more involved use cases.
[10:42:40] **Other**: Where.
[10:42:41] **Other**: They actually take the car to a harbor, then a ferry and then again the car to another this part or where.
[10:42:49] **Other**: They, like trips with transit in japan, where they take a train.
[10:42:56] **Other**: So they first need to take a private transfer to the train station.
[10:43:00] **Other**: From one train station to the another train station in a different city.
[10:43:05] **Other**: And then again, a private transfer to their accommodation. So that's why we need this location database, because we're looking for more things than just airports and accommodations in there. We are looking for basically every kind of transportation hub.
[10:43:20] **Other**: And we do provides this.
[10:43:23] **Other**: And that's why we're using it.
[10:43:26] **Other**: But this particular thing doesn't need to be an elephant because it's not like this Cape Town International airport. It's not something we sell. It's not an item that, that is sold. It's not our invent, like not the inventory, not the supplier we're talking about.
[10:43:42] **Other**: It's really just a tool for the planning.
[10:43:46] **Other**: And we would, when we want to get rid of v2, we would probably replace this search with something like Google places or numinat.
[10:43:54] **Other**: And from based on open street map.
[10:43:58] **Other**: Depending on licensing and pricing.
[10:44:02] **Other**: We don't need.
[10:44:05] **Other**: Like, we, we don't do anything with those things.
[10:44:09] **Other**: But.
[10:44:10] **Other**: But show them.
[10:44:11] **Other**: Right. We don't add content to them either.
[10:44:14] **Other**: Like, you look at the trip this for this. Okay. I didn't sync it yet.
[10:44:21] **Other**: Or we have is.
[10:44:27] **Other**: Did I not save? No, I didn't.
[10:44:30] **Other**: I did.
[10:44:32] **You**: There was a.
[10:44:33] **You**: Self.
[10:44:34] **Other**: Ah, this. Yeah.
[10:44:35] **You**: Yeah.
[10:44:35] **Other**: So here, that's all we got. It's from Cape Town to Cape Town International airport. Up here we have the route.
[10:44:43] **Other**: And we don't know anything, any details about K plan international airport. No images, no descriptions, no opening hours.
[10:44:51] **You**: Okay.
[10:44:52] **Other**: Nothing.
[10:44:53] **Other**: Right. That's the name and a location.
[10:44:55] **Other**: So this is like the simplest thing that we can.
[10:44:58] **You**: Yeah.
[10:44:59] **Other**: Replace.
[10:45:00] **You**: Just 0. A point B. That's all we know. And the name.
[10:45:05] **Other**: Exactly. And for the this manual accommodation use case, it's also pretty straightforward. Like if we select the, like if we're talking about how to.
[10:45:15] **Other**: How to replace v2 with interactions with the supply services.
[10:45:20] **Other**: Or with the Schmidti services more general.
[10:45:25] **Other**: Like if this is selecting campground, then what we would want to do is we would basically do.
[10:45:31] **Other**: The same thing.
[10:45:33] **Other**: That.
[10:45:35] **Other**: Item curator does here.
[10:45:37] **Other**: So somebody like already have selected.
[10:45:42] **Other**: South Africa up here.
[10:45:45] **Other**: And so what we would need to do is type cloth.
[10:45:51] **Other**: And get the results. This is now again, this is limited to admin areas. We would obviously search for touristic areas and then we would have the thing we are looking for.
[10:46:02] **Other**: And find like the last one, the, if this is.
[10:46:07] **Other**: Related to a regular accommodation.
[10:46:11] **Other**: This link content shouldn't search in. We do anymore, but it would again search.
[10:46:16] **Other**: Like I can only show elephant now because I don't have a user interface for catalog.
[10:46:22] **Other**: But again, this would be the same thing as searching clove here.
[10:46:30] **Other**: And we would show the results like what are the accommodations with content?
[10:46:34] **Other**: That we know.
[10:46:37] **Other**: And then the user can select one of them.
[10:46:39] **Other**: And the first use case that I showed with map search that wouldn't happen anymore.
[10:46:44] **Other**: Because there's no reason for us to show.
[10:46:48] **Other**: Like accommodation search would only return results that already have content.
[10:46:54] **Other**: Right.
[10:46:56] **You**: Yeah.
[10:46:56] **Other**: So that doesn't need replacing either. That just needs to be removed.
[10:47:03] **Other**: Please user interface.
[10:47:06] **You**: Transport leg is, like, very self-contained isolated.
[10:47:10] **You**: It's like not.
[10:47:12] **You**: Not a painful part at the moment.
[10:47:12] **Other**: Exactly.
[10:47:14] **You**: So. Okay.
[10:47:16] **Other**: Yeah.
[10:47:19] **Other**: And then we're.
[10:47:21] **Other**: Going to basically and we can remove some of the buttons here. So this still has.
[10:47:28] **Other**: Can still select the theme and branding, which is only relevant for the veto visualization, which is not used by anything anymore.
[10:47:37] **Other**: This can be removed then and some other.
[10:47:39] **You**: Why? Why is it relevant for bed to visualization?
[10:47:43] **Other**: Because it's like, okay, now you've seen, let's take something else.
[10:47:53] **Other**: Let's take the new theme.
[10:47:55] **Other**: And the branding for Tourlane Africa.
[10:47:59] **Other**: And save changes.
[10:48:02] **Other**: And triple the sync. So now you remember this.
[10:48:10] **Other**: And this looks different now, does it? No, it doesn't. Well, it should look kind of different. There's slight differences between the themes and the brandings in the video visualization. So this is all the, those two buttons impact how this looks like. But this is not used by anybody.
[10:48:27] **You**: Yeah.
[10:48:27] **Other**: So it doesn't matter what you select.
[10:48:29] **You**: So they are just.
[10:48:29] **Other**: There.
[10:48:30] **You**: Kind of.
[10:48:32] **Other**: Legacy from a time when we still use the veto visualization towards our customers.
[10:48:35] **You**: Okay.
[10:48:36] **You**: Okay.
[10:48:41] **Other**: Oh, we are over time also. But yes, I think that's all I can show. So I hope you understand why it's not just one sequence diagram, but it's multiple.
[10:48:49] **You**: Yeah.
[10:48:53] **Other**: But at the same time, I think.
[10:48:56] **Other**: The replacement strategy is pretty straightforward from, for most of the interactions. At least when we're looking at what does the, how does the interaction between gecko and speedy change?
[10:49:09] **Other**: Within gecko API, we need to do some cleanup as well that I didn't address now because it would be too much detail and not help you because we use the way to ID for some things internally, like to identify whether the start location and the end location of transport is the same, for example. We use the v2 ID today.
[10:49:31] **Other**: We want to figure, like, we want to, for some use cases, we need to know whether a transport is like a round trip.
[10:49:40] **Other**: And when we don't have, when we're not getting this from veto anymore, but from a different source.
[10:49:45] **Other**: You can probably not use that logic anymore. We will probably need to use something like a geo distance comparison, whatever.
[10:49:52] **Other**: But again, this is something that is trip planner internal.
[10:49:58] **Other**: And as for each of those questions, there's probably a relatively straightforward answer. We just need to identify all of them, address them, and then they.
[10:50:07] **Other**: Re good.
[10:50:08] **You**: And this thing, for example, like internal chip planner things, are they also kind of.
[10:50:14] **You**: Something we'll need to tackle in.
[10:50:19] **You**: Next cycle?
[10:50:21] **Other**: They need to be addressed as part of the veto deprecation, because if we don't get v2 IDs for transport locations anymore, then we can't use those IDs to identify, like identity.
[10:50:22] **You**: Yeah.
[10:50:36] **Other**: Purposes anymore.
[10:50:38] **You**: Yeah.
[10:50:38] **Other**: So they need to be taken into account. But again, like, I think for each of them, there's.
[10:50:46] **Other**: Probably a relatively easy alternative.
[10:50:53] **Other**: And it's not a big, like, it's like it's a story on a sprint, but it's not an initiative.
[10:51:00] **Other**: Or, or something like that, if that makes sense.
[10:51:03] **You**: All right.
[10:51:03] **You**: Thanks a lot for. For the overview.
[10:51:07] **You**: And I'm quite, quite happy that we made the recording. Now I think, like, I should have invited villains because it touches a lot on destinations as well.
[10:51:16] **Other**: Which is why I thought he was in the meeting, but I can, like, no more, like, we, we have a meeting today anyway, and I can.
[10:51:17] **You**: Yeah.
[10:51:18] **You**: Yeah.
[10:51:24] **Other**: Given.
[10:51:26] **Other**: The same thing, like, it's fine. I can, I can explain this every day.
[10:51:27] **You**: Yeah. I'll share. I'll share.
[10:51:30] **You**: Recording with him as well.
[10:51:32] **You**: And, yeah, Kiryl, maybe we can also, as a follow-up draw sequence diagram of our understanding and maybe kind of.
[10:51:41] **You**: Gregor may kind of.
[10:51:43] **You**: Check if it's all correct. Our understanding.
[10:51:48] **You**: Then.
[10:51:48] **Other**: Yeah, of course.
[10:51:50] **You**: Perfect. All right. Thanks a lot.
[10:51:52] **Other**: Thank you. Bye bye.
[10:51:55] **You**: Have a good day.
[10:51:56] **You**: Job.
