# Refinement Späti team

**Date**: 2026-04-23
**Time**: 15:00 - 15:50
**Location**: PR-20 HQ-2-Chile (4) [TV]

## Attendees

- wieland.pfesdorf@tourlane.com
- l.braun-ext@tourlane.com
- pedro.alves@tourlane.com
- kiryl.karetnikau@tourlane.com
- claudia.tita@tourlane.com
- nishant.tomer@tourlane.com
- talha.mahmood@tourlane.com
- Spati
- aliaksei.kliuchnikau@tourlane.com
- PR-20 HQ-2-Italy (15) [Camera, Google Meet, Mic, TV, Tablet]
- PR-20 HQ-2-Chile (4) [TV]

## Transcript

[13:01:35] **Other**: I think the weirdest was a couple of days ago. Like there was a very strong wind.
[13:01:42] **Other**: Very, very cloudy.
[13:01:44] **Other**: But the wind was really, really warm. It's like when you open the oven and you get this, like this super hot breath.
[13:01:54] **Other**: Opening the window felt a little bit like that. Like that's this is weird. This is not good.
[13:02:00] **Other**: I think.
[13:02:06] **Other**: Yeah.
[13:02:08] **Other**: And I missed all the storms, which was a couple of months ago.
[13:02:15] **Other**: So that is that bullet.
[13:02:20] **Other**: I'm actually also in Portugal next week.
[13:02:22] **Other**: Oh, cool.
[13:02:24] **Other**: But it's just an accolony in Manila, but it's quite a good.
[13:02:35] **Other**: Something that Portuguese usually don't do.
[13:02:40] **Other**: No one in Portugal says, oh, well, in Portugal, but in Malay, they just say, well, no, I'm not in Portugal.
[13:02:47] **Other**: Which just pisses off everyone in the island.
[13:02:57] **Other**: We're all here.
[13:02:59] **Other**: Maybe let's start. Let's see what we have.
[13:03:04] **Other**: In day.
[13:03:09] **Other**: Claudia, do you want us to start from something specific?
[13:03:16] **Other**: No.
[13:03:17] **Other**: I saw that there already some things there.
[13:03:22] **Other**: Okay.
[13:03:23] **Other**: So just to warm up, maybe I would suggest.
[13:03:31] **Other**: A couple of tasks.
[13:03:33] **Other**: They are marked as.
[13:03:36] **Other**: Depth.
[13:03:37] **Other**: Ready.
[13:03:39] **Other**: But they quite, it would be nice to have these features, like for the developers.
[13:03:45] **Other**: First of all.
[13:03:47] **Other**: I'm talking about MCP servers.
[13:03:50] **Other**: For, for the, for this, like for them as our services that have databases. So we could easily explore.
[13:04:00] **Other**: The using the AI. We could easily explore things and, like, it will enable us to debug on faster.
[13:04:10] **Other**: So maybe.
[13:04:11] **Other**: We.
[13:04:12] **Other**: Of course, some of them will have higher priority. For example, mapping service. Well, it's.
[13:04:22] **Other**: It's in use, but not really.
[13:04:26] **Other**: In, in use right. Like, I mean, not heavily used right now. So maybe we could, when time comes to implement, maybe we can prioritize and say we start from elephant account to come.
[13:04:36] **Other**: But anyways, the, the idea is to build.
[13:04:41] **Other**: MCP servers.
[13:04:43] **Other**: For every single.
[13:04:48] **Other**: Service that we have already with in a databases. We already have.
[13:04:55] **Other**: One for catalog.
[13:04:58] **Other**: Which I use and, you know, Claudia uses and maybe someone else.
[13:05:04] **Other**: But it's quite nice to have this to your agent could easily connect to attempt.
[13:05:11] **Other**: To.
[13:05:14] **Other**: The license to give you an idea on what's going on, how to, how it is better to build.
[13:05:21] **Other**: Or how to address the issue or whatever.
[13:05:26] **Other**: So it's quite, quite nice to have.
[13:05:30] **Other**: So.
[13:05:31] **Other**: Yeah, so basically, I listed.
[13:05:36] **Other**: Them the steps, like what, how we want to build it.
[13:05:42] **Other**: Some basic actually tools. But of course, the, like the list of tools could be extended in the future. So, for example, we realized, okay, we need something more.
[13:05:53] **Other**: It's quite easy to add more tools.
[13:05:56] **Other**: There.
[13:05:59] **Other**: And. Yeah, like, I mean, we could start with something basic, but then, of course, extend.
[13:06:05] **Other**: This is just like kind of the first step to, to have MCP.
[13:06:10] **Other**: Also to have the authentication process for, for the, for the server.
[13:06:19] **Other**: And then if and when needed, we extend the list of, of tools.
[13:06:26] **Other**: Any questions?
[13:06:37] **Other**: Now?
[13:06:42] **Other**: Then I guess we can estimate.
[13:06:49] **Other**: Do you need to estimate each of them or. No, I think I, like, they're quite, quite similar. So we estimate once.
[13:06:57] **Other**: And then.
[13:07:01] **Other**: All right, I'm sitting for everything.
[13:07:14] **Other**: I mean, there are too many mcbs to keep track of. Can we add one more MCP to connect all these MCP? I just use one MCP.
[13:07:27] **Other**: Nishant, the good thing is that you should not keep track of all of these mcps.
[13:07:33] **Other**: Right. So not personally at least.
[13:07:39] **Other**: Okay.
[13:07:42] **Other**: But you could think about building.
[13:07:45] **Other**: The general, like the main, the primary MCP, of course.
[13:07:53] **Other**: I guess we give them all a five.
[13:07:59] **Other**: Do this.
[13:08:01] **Other**: I put five, you know. Okay.
[13:08:07] **Other**: All right. So.
[13:08:09] **Other**: That's good.
[13:08:10] **Other**: So now we go to catalog.
[13:08:13] **Other**: Probably.
[13:08:14] **Other**: Right? Do you want to do anything else from Tech depth? I see that you guys moved a lot of tickets.
[13:08:20] **Other**: But.
[13:08:23] **Other**: This was here.
[13:08:28] **Other**: One, two.
[13:08:38] **Other**: Yes.
[13:08:41] **Other**: I mean.
[13:08:46] **Other**: So first thing is there's no other update except what is there and what is there is we.
[13:08:56] **Other**: Faced a situation some time ago in habit loose adapter.
[13:09:00] **Other**: Where search stopped working offer search.
[13:09:03] **Other**: And the problem was that.
[13:09:05] **Other**: Requests. So we have a peculiar situation for heavy tools specifically where we map the TMC ID to another ID before we do the searching with the ab tools API.
[13:09:20] **Other**: And mapping is stored in redis cache and we update it in a particular manner.
[13:09:26] **Other**: And what happened? I mean, at least the symptom was that.
[13:09:32] **Other**: The IDs got changed from the supplier side.
[13:09:37] **Other**: I mean, it should not have been a problem because we have the mapping cache, whatever, and on every sketch from supplier, they get updated.
[13:09:46] **Other**: But somehow it was still using the whole IDs.
[13:09:51] **Other**: Then I, I dropped the cache.
[13:09:55] **Other**: I confirmed the drop.
[13:09:59] **Other**: But I did, I did another refetch from supplier.
[13:10:05] **Other**: It was still either. So in, in any case, the situation was the cache, like the, the refetching did not help.
[13:10:15] **Other**: Then I dropped the cat again and let it fill one by one.
[13:10:20] **Other**: So there is like two mechanism for filling bulk filling and filling one by one.
[13:10:25] **Other**: In any case, the second time one by one filling, it worked.
[13:10:31] **Other**: And I did like some investigation around why cash interpreter. I also checked logs for weekend fetches for the fetch I did and everything.
[13:10:42] **Other**: And nothing seemed out of ordinary in terms of data we get from supplier. So data looked good.
[13:10:49] **Other**: Somehow the cash population itself.
[13:10:53] **Other**: Did not work correctly.
[13:10:55] **Other**: So we maybe can give it like a time wind, like fixed time to investigate or something.
[13:11:05] **Other**: Now the problem is that.
[13:11:09] **Other**: This happened only once hasn't happened again.
[13:11:14] **Other**: But that could just be.
[13:11:16] **Other**: Because supplier hasn't updated IDs again. So this might be a problem.
[13:11:23] **Other**: Still. So we should at least check it once. We can definitely simulate like IDs change on our side.
[13:11:31] **Other**: But Nisham, what if, what if we don't update the ideas? What if we just like flash the caching game?
[13:11:39] **Other**: So what's the expected behavior that it repopulates?
[13:11:42] **Other**: Yeah. Yeah. So you just drop the again and it will populate it one by one.
[13:11:49] **Other**: But not bulk. Not in bulk.
[13:11:51] **Other**: I mean, yeah, the bulk thing did not work for me for some reason. I have. This is like mysterious because there is no difference. There is no difference. Maybe the supplier apis or whatever.
[13:12:07] **Other**: Actually, because we rotate log or something, I actually collected all the relevant logs and attached it in this confluence document.
[13:12:17] **Other**: So that we have the logs of the that time.
[13:12:22] **Other**: So in any case, yeah, we just need to check it once.
[13:12:33] **Other**: So.
[13:12:35] **Other**: I mean, I would recommend, let's, I mean, we can give it like a maximum if you want of a five pointer and just.
[13:12:44] **Other**: If we don't see the problem, then, yeah, we fall back to cash busting or whatever.
[13:12:54] **Other**: So what we do is to make or give five points.
[13:12:59] **Other**: Yeah. I mean, I would not. I mean, there's nothing to estimate. We don't know. Let's just give it five, like time box or whatever box it was maybe time box.
[13:13:11] **Other**: It.
[13:13:12] **Other**: Yeah. What do you think about there?
[13:13:19] **Other**: To be honest, I don't.
[13:13:23] **Other**: So this happened a long time ago, right? And it did not happen afterwards.
[13:13:28] **Other**: It's. It's not update their IDs.
[13:13:32] **Other**: So we don't know what would happen if they update the, the IDC again. So what, like, work out of the box?
[13:13:40] **Other**: Or have things. So this is when the supplier updates the at least.
[13:13:45] **Other**: Right?
[13:13:54] **Other**: Okay. So basically they've changed the hotel like this on their end. And because of our caching, they didn't get updated. And this calls everything to fail. Now I get it.
[13:14:06] **Other**: And is this only in the adapter or in all the adopters?
[13:14:11] **Other**: Only in this one.
[13:14:15] **Other**: Okay.
[13:14:19] **Other**: And why are you so short? That's only in this one just because of. Because this sort of mapping only happens in this director. Okay.
[13:14:35] **Other**: So what we do about it.
[13:14:38] **Other**: 10 bucks.
[13:14:44] **Other**: I would time box it.
[13:14:48] **Other**: Am I wrong?
[13:14:52] **Other**: So this is for when.
[13:14:56] **Other**: Supplier changes I their internal IDs and internalism and their own IDs that they exposed to us.
[13:15:05] **Other**: It's still the same accommodations.
[13:15:08] **Other**: But we only have.
[13:15:11] **Other**: And this only happens with average tours or why do we only have this mapping parameters?
[13:15:19] **Other**: So there are.
[13:15:21] **Other**: Two different IDs for abitu supplier.
[13:15:25] **Other**: One is what we call internally dmci ID, which is the same as other adapters. So for all adapters, we have this concept called dmcid, which is like the id we receive from supplier we store in any elephant and we use it for searching and whatever.
[13:15:42] **Other**: And this is the same ID we use also for fetching gata IDs.
[13:15:47] **Other**: So this part is same for all adapters.
[13:15:51] **Other**: But like other adapters, this ID doesn't work for searching for abitors Supply.
[13:16:00] **Other**: For searching. They provide another ID.
[13:16:06] **Other**: And to. And because we don't store that ID, we only store the dmc ID because we need it for gta fetching and for other stuff.
[13:16:13] **Other**: What we do is we map the dmc ID to this ID in, in real time, basically using this cache we store in redis.
[13:16:24] **Other**: So when we receive search request from our other systems, we take the incoming ID, map it to the.
[13:16:32] **Other**: ID we need. And then we use that for searching.
[13:16:36] **Other**: So this is how it is.
[13:16:39] **Other**: And, yeah, that's. I mean, because.
[13:16:41] **Other**: Yeah.
[13:16:45] **Other**: Okay, so because avers uses a special IDE just for the purpose of searching for, I just searching. What about booking? They use the quote.
[13:16:57] **Other**: I mean, yeah, for booking, they don't need id or anything. They like they generate off IDs or whatever.
[13:17:06] **Other**: So I mean, that, that, that makes sense. I would love to have a chat with the person at Avi tours that came up with this idea.
[13:17:17] **Other**: But, yeah, thanks for. It's for you this special. Actually, it's even worse.
[13:17:23] **Other**: So in reality, they have four type of IDs.
[13:17:28] **Other**: I mean, you can have enough clearly.
[13:17:32] **Other**: And, and basically. So they come in pairs. So to each and they are land. So you can use this pair or that pair and something, something on which pair you decide to use. You can also decide which G out that channel also come with multiple TLC channels. Yes. Yes.
[13:17:56] **Other**: And apparently they adhere to too many standards at the same time.
[13:18:04] **Other**: Anyway, yeah, that's the thing and that's the situation.
[13:18:12] **Other**: I would be very curious to know how this would work from 11 attack.
[13:18:21] **Other**: If they would do this kind of weird shenanigan for us or not.
[13:18:27] **Other**: Something interesting to keep in mind. Yeah. But anyway, thanks for the walkthrough question clarified.
[13:18:37] **Other**: All right, coming back to the estimation. Should we estimate?
[13:18:41] **Other**: Should we have five story points should be time boxed?
[13:18:45] **Other**: How the. What do you think?
[13:18:46] **Other**: Maybe 10 bucks. No. Yeah. I mean, hopefully they stop changing ideas without telling us. So this is also a habit worth for me. This is not the highest prior now. But of course the heat breaks. Then you would tell me it broke because of me. Anyway.
[13:19:13] **Other**: So the other topic.
[13:19:19] **Other**: Now.
[13:19:20] **Other**: So do you want to start looking into this elephant cleanup?
[13:19:25] **Other**: Task or should we continue with catalog? Because I saw there is one Titget also for the data warehouse set up for catalog, which could potentially probably unblock accommodation recommendation.
[13:19:37] **Other**: No.
[13:19:39] **Other**: Yeah, could be. We have here two tasks exactly for this topic. Okay.
[13:19:46] **Other**: Yeah. Let's start with this.
[13:19:49] **You**: The only tasks that we need to unblock accommodation recommendation.
[13:19:54] **You**: Everything in these two tasks.
[13:19:57] **Other**: For us. Yes. But also, I think data team will have, have to do something from their end as well.
[13:20:05] **You**: Yeah, of course.
[13:20:09] **Other**: All right, let's start with.
[13:20:13] **Other**: Catalog part.
[13:20:17] **Other**: So.
[13:20:21] **Other**: The, the goal is to make sure that all the changes.
[13:20:27] **Other**: Are sent to data warehouse.
[13:20:32] **Other**: All the changes to sellable accommodations.
[13:20:35] **Other**: Table, either accommodations or lower condition is created or updated. We have to send this event to data warehouse.
[13:20:48] **Other**: The events, the schema schemas are described in the document.
[13:20:57] **Other**: The ticket describes exactly like the, like what we need to do.
[13:21:03] **Other**: To.
[13:21:06] **Other**: In scope of this ticket.
[13:21:08] **Other**: So first of all, of course, we, we register the schemas. I think we, like, we have done the same process before.
[13:21:18] **Other**: We Define the schema and then we kind of deploy it. I think we, we have to reach out to someone from data team to, to deploy the schema to production.
[13:21:30] **Other**: Then this is the first step.
[13:21:32] **Other**: Then the second step would be to make sure that we.
[13:21:37] **Other**: Like.
[13:21:39] **Other**: Push events according to based on the schema. So for that, we already have.
[13:21:45] **Other**: The, the gem, some, some ruby gems.
[13:21:50] **Other**: To, to cover these functionality specifically.
[13:21:55] **Other**: Then we set up this generic set the configuration. We said the URL of, of the, where exactly we're going to push it.
[13:22:07] **Other**: And then in, in catalog, we will have the service which will be responsible for, like to, to build events and then to.
[13:22:22] **Other**: Build events to, to have the sidekick job, which runs in the background.
[13:22:31] **Other**: And, and uses this, this event Builder and. Yeah. And eventually what we want to do is to make sure that this process is the part of the curation process. So whenever we.
[13:22:47] **Other**: You remember, we, we had this sophisticated process of building the sellable accommodations. And whenever this last step is done, because we have a lot of different previous steps, like build compositions. And even before something we have as well. And as a last step, once the sellable accommodation is created or updated, we want to push this event.
[13:23:13] **Other**: Ually to data warehouse. So, yeah, it's, everything is here quite straightforward.
[13:23:20] **Other**: Nothing really nothing special.
[13:23:25] **Other**: Just.
[13:23:26] **Other**: Push the data.
[13:23:28] **Other**: Again.
[13:23:33] **Other**: The event, the schema is described here.
[13:23:42] **Other**: The only thing that is currently missing.
[13:23:46] **Other**: Is.
[13:23:48] **Other**: Let me show it to you.
[13:23:51] **Other**: Ancestors three here.
[13:23:54] **Other**: So we don't have it in catalog.
[13:23:57] **Other**: And for that, we'll need to go somewhere.
[13:24:01] **Other**: To pull the data.
[13:24:22] **Other**: All right. Something is not connected yet. Now I do realize it.
[13:24:33] **Other**: So basically ancestors tree is the array of.
[13:24:37] **Other**: Of objects.
[13:24:41] **Other**: Which represent, which represents the array.
[13:24:46] **Other**: Like.
[13:24:48] **Other**: IDs.
[13:24:50] **Other**: From destinations domain. Right now it's, it's an element. They are all in elephants. So ID from elephant and the type of this area. It could be either continent or country or area.
[13:25:06] **Other**: Once received by, by the data team, they can use these UADs. They can use the existing elephant API to get the data and to see the, like whatever they want they can use. They can get content, they can get gel shapes.
[13:25:25] **Other**: They can get images, whatever they want, they can get from the existing API.
[13:25:31] **Other**: The only API that is right now missing is.
[13:25:40] **Other**: The ancestors three API.
[13:25:43] **Other**: Which, which is not yet built on, on the element side.
[13:25:48] **Other**: But now I think there was something missing.
[13:25:59] **Other**: In the schema or something missing for this. No, no, something missing from the, from the process perspective. So the task is about.
[13:26:08] **Other**: The task is about.
[13:26:11] **Other**: Actually pushing the data for the sellable accommodation itself. But the.
[13:26:19] **Other**: The endpoint is planned to be the bulk end point which receives multiple.
[13:26:27] **Other**: Geocordinates.
[13:26:29] **Other**: In a single, in a single request.
[13:26:32] **Other**: But that means that we'll need to change catalog to not to send request one by one.
[13:26:40] **Other**: But group them into, like, into, into some chunks to, to get this data from, from Pedro.
[13:26:58] **Other**: I was going on such a nice trip of not being with your own new thing.
[13:27:04] **Other**: You're still showing the, the event schema.
[13:27:08] **Other**: On adding the information to catalog, which I think is what you're referring to.
[13:27:17] **Other**: Is, is this part of this task?
[13:27:20] **Other**: Yeah, that's the thing that I, I did not consider that, like, really this part is somehow missing. So we can maybe brainstorm it and, like, decide now. We did consider what the plan was. We can move forward right now with these events without ancestry.
[13:27:43] **Other**: At least we already have something flowing. We built these capabilities into the system.
[13:27:50] **Other**: And then it's just, you know, customizing here and there a little bit. All right. So the, the second iteration will be to add these ancestral street property. Right.
[13:28:04] **Other**: Yeah. So this we can, we can brainstorm a little bit in the coming days.
[13:28:10] **Other**: Okay. Then.
[13:28:14] **Other**: And then that's fine. Technical notes. I will say that we can.
[13:28:25] **Other**: Ignore ancestors three answers.
[13:28:31] **Other**: Screen.
[13:28:40] **Other**: Now.
[13:28:46] **Other**: So.
[13:28:47] **Other**: Okay.
[13:28:51] **Other**: All right, good.
[13:28:54] **Other**: But then the other task, which is for to expose the ancestors free data could also be discussed later.
[13:29:05] **Other**: Right. Because.
[13:29:11] **Other**: Let me. Yeah.
[13:29:12] **Other**: So maybe, maybe a bit of context for, for the rest of the group that you also get some view of what might change. The ancestry tree is something that would fall very nicely into something that was considered quite some time ago, which was the enrichment process.
[13:29:32] **Other**: So this is where we add properties to our cellular accommodations.
[13:29:39] **Other**: Which do not come exclusively from our content sources.
[13:29:45] **Other**: The ancestry is a very good example. Another thing is something that Claudia also has in mind, which is the combination of NPS coming from our own customers.
[13:29:55] **Other**: We don't really have that process in place.
[13:29:59] **Other**: Or did we spend any time thinking about that. But this, this process gives us these a chance to do things in a more straightforward and efficient way because, like Kiryl mentioned a moment ago, let's say we would just put something in either content onboarding or content curation.
[13:30:24] **Other**: Then you would have to do this one by one, one accommodation per accommodation, per accommodation, for accommodation.
[13:30:30] **Other**: Which is not ideal.
[13:30:33] **Other**: And maybe there's something else you want to do pull data from other places. And this will just make the job just very heavy and hard to manage.
[13:30:42] **Other**: So this is why we, there's just the idea doing the content enrichment process.
[13:30:48] **Other**: So.
[13:30:48] **Other**: Right now, this is all we have to share. We just need to a moment to think about this.
[13:30:55] **Other**: Regarding the timeline. I did talk to.
[13:31:01] **Other**: And explain. You're going to get event. The events will come without the ancestry.
[13:31:07] **Other**: You can get it later.
[13:31:10] **Other**: This is fine.
[13:31:11] **Other**: Because they honestly don't really know how to use the data that well.
[13:31:18] **Other**: So it's not like they're blocked waiting for the, the array.
[13:31:24] **Other**: I'm going to take the opportunity to also add something to.
[13:31:31] **Other**: What Aleksei mentioned. If this is enough to unblock the accommodation recommendation team regarding accommodation data, yes.
[13:31:42] **Other**: So the, obviously the ancestor tree would fall somewhere between accommodation recommendation and the route Builder.
[13:31:49] **Other**: But one thing that they bring up now every now and then is room level data.
[13:31:55] **Other**: So this is not included yet.
[13:31:58] **Other**: We also just have general idea of how that should work, but nothing concrete that could be in a task right now.
[13:32:05] **You**: So no recommendations.
[13:32:07] **You**: That they like. What's the word for.
[13:32:11] **You**: This?
[13:32:12] **You**: Amenities?
[13:32:14] **You**: For room level and things like that, what they want.
[13:32:17] **You**: Right?
[13:32:18] **Other**: Right. For the room level.
[13:32:19] **Other**: No.
[13:32:20] **You**: Okay. And we'll need to.
[13:32:24] **You**: Add it.
[13:32:26] **You**: See two. This is what they definitely need.
[13:32:31] **Other**: No.
[13:32:31] **Other**: I mean, there are no plans to add level data in C2.
[13:32:40] **You**: Okay.
[13:32:43] **You**: Then we would just give them.
[13:32:47] **Other**: I mean, let's see how the cycle planning. But so far, I think, yeah, all sorts of meeting today kind of.
[13:32:54] **Other**: Like I have not seen from level data being requested from us in cycle.
[13:32:59] **Other**: Two.
[13:33:00] **You**: Okay.
[13:33:02] **Other**: And we have enough data in catalog for them to start using which they are not using yet.
[13:33:08] **Other**: So. But, yeah, with this communicated to you by you in Pedro that we needed now, the room level.
[13:33:15] **Other**: No.
[13:33:16] **Other**: No, not. It's just that every now and then the discussion seems to either we need geographical data, we need room level data.
[13:33:26] **Other**: But I haven't heard anything concrete.
[13:33:30] **Other**: Yeah, I think it's, I mean, it looks like we won't do it.
[13:33:36] **You**: Then we need to clearly state it in our.
[13:33:40] **You**: Cycle plan so it's visible that we are not including data. So they won't say that. Okay. But we expected this.
[13:33:49] **Other**: And we have more than enough data now that we added and catalog that you're not using yet. So they, I think it's a good starting point already.
[13:33:56] **Other**: Yeah, that, that depends a bit on the conversation, because sometimes you say, turns out accommodation date is not that relevant because customers really ask for things on the room level.
[13:34:09] **Other**: So again, it.
[13:34:12] **Other**: What I would say is that the level of certainty is not high.
[13:34:17] **Other**: Enough to force the hand of the Spati team to do a, b or c.
[13:34:24] **Other**: So, yeah, it's complicated, but we also, I mean, we had the same discussion with them, and every time to search for room level data, you need to have enough accommodation data to pre-sleep the hotels because you're not going to search for it for rooms. But yeah.
[13:34:41] **You**: Okay.
[13:34:43] **You**: Then let's plan that we are not including room level.
[13:34:47] **You**: And communicated to a condition recommendation team.
[13:34:51] **You**: Albatross.
[13:34:52] **You**: I guess.
[13:34:53] **You**: And, yeah, see how the next couple of weeks with planning go.
[13:34:59] **You**: Yeah. For now, let's not aim for it.
[13:35:14] **Other**: Any questions?
[13:35:16] **Other**: About the task?
[13:36:02] **Other**: Everybody is to meet five.
[13:36:08] **Other**: Sorry, just we, this is just for me to confirm. This will be to add both to the.
[13:36:19] **Other**: To the.
[13:36:21] **Other**: Content curation job.
[13:36:22] **Other**: Right. I missed that part, content creation. Exactly. Yes.
[13:36:27] **Other**: And then just one final note moving forward. We would like to leverage these events more.
[13:36:36] **Other**: So this, I guess this goes on to everyone. If you see some, if you identify something that you would like to track, which does not fall into just typical.
[13:36:52] **Other**: Application operations, which could be you, which couldn't send use logs or, or metrics, so especially things like event business events.
[13:37:05] **Other**: Definitely think about creating such an event.
[13:37:10] **Other**: In track anything. Maybe it's, oh, we enable this. We disable that. We introduce a new content provider or, I don't know.
[13:37:24] **Other**: Just keep in your mind that this is a tool that we can leverage more.
[13:37:33] **Other**: So feel free to, you're encouraged to bring it up. Any opportunity that you see.
[13:37:41] **Other**: How do we decide if this is actually needed or not? Like, should we coordinate with data team or like, should we just, like, think about it and say, right, this could be useful. Let's bring it to the team first.
[13:37:56] **Other**: Yeah, I would, I would imagine that this is, should be a discussion exclusively within your team.
[13:38:05] **Other**: So this could be because Claudia wants to track something. This could be because some business stakeholder request the report from analytics and then analytics is going to ask you, hey, can you give us this data? And instead of saying, yeah, sure, here's the endpoint where you can pull the information from or here's the access to the database.
[13:38:26] **Other**: Is a sure, I'll create an event for, for you to, to track this.
[13:38:32] **Other**: So you can come from any of these places. If you also want to track something, which again is not strictly application operations, then this is a, this is a good tool to use.
[13:38:46] **Other**: From here on out, you should just create events data. If it's data engineering, they are just making sure that the pipes are working for you for the data to flow.
[13:38:56] **Other**: Data analytics will either work with you to create a report, which is either requested by you or requested by a business stakeholder.
[13:39:03] **Other**: So they're not going to gatekeep the, the events.
[13:39:09] **Other**: If you're not comfy, if you're not sure about the schema of an event, do reach out to data engineering. So, for example, Stefano was kind enough to review the proposal of the event schema. He made some notes and we made some modifications around it.
[13:39:28] **Other**: But they're not the gatekeepers. No, nor would the scale.
[13:40:02] **Other**: Waiting.
[13:40:04] **Other**: So for this one, I think then we will discuss it a bit later.
[13:40:09] **Other**: Basically, this is the new endpoint in elephant that will expose this ancestors tree data.
[13:40:17] **Other**: But, yeah, let's discuss it once we have an understanding how exactly we're going to use it.
[13:40:26] **Other**: Like.
[13:40:28] **Other**: But I think we'll discuss it maybe tomorrow.
[13:40:32] **Other**: Already.
[13:40:35] **Other**: So we can have these tasks together with the other one.
[13:40:44] **You**: So, Kiryl, if you don't mind, maybe for the last 10 minutes, if we kind of done with this part.
[13:40:52] **You**: Maybe we can quickly discuss the 11 infotech current.
[13:40:58] **You**: Effort.
[13:41:00] **You**: And there are some things that we need to tackle.
[13:41:04] **You**: Quite, quite soon. Maybe not necessarily. We create some tickets for it, but at least I wanted to catch up with everyone. So right now we have this 11 infotech.
[13:41:15] **You**: They provided us with some API.
[13:41:18] **You**: And Talha is the one who.
[13:41:21] **You**: S focusing on it right now. Talha is out for two days and there are some things that are, that require kind of follow-up the earlier, the better from our side.
[13:41:34] **You**: So I, we discussed with Claudia.
[13:41:37] **You**: That it will be much more beneficial for us to have.
[13:41:41] **You**: Some resiliency in this area. So not only Talha works on that.
[13:41:47] **You**: But someone joins him and we work, like, on.
[13:41:53] **You**: This area until we, we have more clarity.
[13:41:57] **You**: Like with, with more resources.
[13:42:00] **You**: So, yeah, Nishant, maybe you can join us.
[13:42:03] **You**: If you don't have, like, some huge things on that, like in your pipeline at the moment.
[13:42:10] **You**: Yeah.
[13:42:11] **You**: Then if you can join us, would be great to cover up for Talha and help him.
[13:42:18] **You**: And also, I was a little bit spread all, all over the topics and want to catch up with this topic as well.
[13:42:26] **You**: So from what I've seen, there are some concerns about.
[13:42:33] **You**: This API that they provided. 11 info deck.
[13:42:38] **You**: And Talha raised some concerns, Pedro raised some concerns.
[13:42:43] **You**: And now we are at the moment when we can still kind of follow up and change some course.
[13:42:50] **You**: We can request bigger changes than just kind of tiny field is not working.
[13:42:57] **You**: And Pedro, I guess this is what you propose, right? So for us to pause a little bit and think of how exactly we expect this API look like and not just kind of.
[13:43:11] **You**: Buy into what they provide us on the go.
[13:43:15] **You**: Right.
[13:43:18] **Other**: Correct. I can add some additional contacts. So as part of this integration, we always expected to align on an API between Tourlane and the vendor.
[13:43:31] **Other**: If the vendor would have a nice enough API, we would have to bother with that.
[13:43:39] **Other**: Which is not the case. Like I already mentioned, so already going on a few requests.
[13:43:49] **Other**: And from the looks of it, I don't, I see no reason why we, we should think that there, we won't have more.
[13:43:56] **Other**: So in that sense, it would be better to.
[13:44:02] **Other**: Just propose an API, which Nishant email might be, might remember our back and forth last year with the Andes Viva API proposal.
[13:44:14] **Other**: So that API was already kind of in line with even the improvements we would like to see in our own adapter api.
[13:44:22] **Other**: So this, I think this is would be a very good starting point.
[13:44:27] **Other**: So we would essentially use the API as a contract.
[13:44:31] **Other**: Which is kind of its point.
[13:44:34] **Other**: And we would already get ahead of the curve of how the interaction between us and 11 of attack would go.
[13:44:44] **You**: And this, this API that we proposed last year to another vendor, we have some docs for this.
[13:44:53] **You**: Right? Okay, perfect. Can you, can you share it with me and Nishant?
[13:44:58] **You**: So we, we see it. I will add.
[13:45:03] **You**: Nish.
[13:45:03] **You**: Ant.
[13:45:04] **Other**: Nishant was the one that wrote it. So, yeah, I can quickly pull it up.
[13:45:10] **Other**: I, I have it. So I will add it in our slack.
[13:45:14] **Other**: Yeah, actually.
[13:45:16] **Other**: I, I got a chance to read it again after few months after I wrote it.
[13:45:22] **Other**: And at that time, I already, like, saw some improvement, which I forgot now. So I will review it again.
[13:45:30] **Other**: And maybe make some more comments or small, small edits.
[13:45:36] **Other**: But I'm still struggling to understand is if this is really.
[13:45:41] **Other**: Like a fully.
[13:45:44] **Other**: Structural problem with the way all the revenue for Tech endpoints were.
[13:45:52] **Other**: No, if this is a problem with all the level infotech endpoints that they need to rewrite them or if this would.
[13:46:00] **Other**: Be smaller request for additional functionality, I don't know Talha mentioned that you're missing pagination, for example.
[13:46:08] **Other**: So also for me to manage a bit, this is also why I would like to have some feedback on next week already.
[13:46:16] **Other**: To already set the expectations with 11 infotech, since now we got the testing credentials so we can either go back and be like, okay, we're missing some functionality or some fields which you could add for us to this or we go back and we say.
[13:46:30] **Other**: Actually, this is not what we want.
[13:46:32] **Other**: And you have to implement a fully new API for us. Since we are now in the testing phase, it's not too late. But I also don't want to delay this project too much. And I want to be very transparent and set the expectations with revenue for tech. Yeah. So this would be.
[13:46:48] **Other**: Also something really important for me to understand if it's just some additional functionality that we are requesting from them. That could be added maybe even at a later point, or they need to rewrite all the endpoints for us.
[13:47:02] **Other**: I, I wouldn't say rewrite.
[13:47:08] **Other**: It's pretty much what the this team is doing when they write the adapter.
[13:47:17] **Other**: And it was just beyond their end.
[13:47:20] **Other**: So whenever we need to ask for a change, a correction, adding something.
[13:47:28] **Other**: We are adding that work. And from the looks of it, the, the result that we get is not ideal. So we requested the endpoints. Hey, can you send us an endpoint? Give us an endpoint to call the data from hotels automatically.
[13:47:45] **Other**: It says you created a separate API with a separate post name, separate authentication mechanism.
[13:47:55] **Other**: So that's, that's not what we want. And also adds more complexity and issues on, on our side, which is kind of.
[13:48:05] **Other**: Missing the whole point of this work.
[13:48:07] **Other**: Second, we always expected to do this work.
[13:48:15] **Other**: We maybe, I don't know, so we're not doing it, but initially, this was always the expectation.
[13:48:20] **Other**: There would be a first alignment on how the API should look like.
[13:48:25] **Other**: And then we would move forward. We kind of were in the hopes that the API would be good enough. We're seeing that it's not that they would also, they always said, oh, yeah, we'll build you a custom Gateway.
[13:48:39] **Other**: Okay.
[13:48:40] **Other**: Where is it?
[13:48:41] **Other**: Because right now it feels like we're just getting the, the default Factory.
[13:48:48] **Other**: So I, I don't think that this is growing the scope of the project. I understand that this might be taking a step back, but I am fully confident that this would allow us to, to, to do two or three steps forward.
[13:49:01] **Other**: Yeah. And I mean, so far.
[13:49:04] **Other**: We asked for very small things. But the additional get done when we ask for to get accommodation endpoint, I mean, we send them exactly.
[13:49:16] **Other**: The example of the request and the response, and they did it in a few days. So if we are clear with what we want, we're going again, we're also not aligned on what to send them, so. And my ultimate rework.
[13:49:29] **You**: Our goal to align all together, like what we have right now from them, what we want.
[13:49:30] **Other**: So.
[13:49:31] **Other**: Okay. Yeah.
[13:49:36] **You**: Based kind of document from, from the past.
[13:49:36] **Other**: Yes.
[13:49:39] **You**: And maybe like on Monday when Talha is back.
[13:49:42] **You**: We all three can kind of just prepare a request to them.
[13:49:48] **Other**: Sounds good. So also, I would call out that if we are using their SaaS product, some requests that we may ask if we would keep just asking, okay, can you make this change? Can we make this change? Could actually break their customers, their other customers.
[13:50:08] **Other**: So.
[13:50:10] **Other**: It's.
[13:50:10] **You**: If we use their kind of generic. Yeah.
[13:50:13] **Other**: Yeah.
[13:50:15] **You**: Okay.
[13:50:15] **Other**: Or another thing is that maybe the advantage of being some on something more generic is that if they have an entire update that they do for a supplier, it kind of automatically.
[13:50:29] **Other**: Gets propagated into all.
[13:50:30] **Other**: Those. I, I fully expect that this will just be a thin layer on top of their existing API. I highly doubt that they would really build everything.
[13:50:41] **Other**: Which is why I said that what we would be asking is pretty much what we are already doing.
[13:50:48] **Other**: I, at least for me in their place, I would not build an entirely new service. I would just say, okay, let's being clear with what they want, what we want. We are aligned and then I get it done. If I don't get it done when we are Karen is back the week after. So with your track for sure. And they seem really engaged so far. Let's see.
[13:51:14] **You**: All right.
[13:51:16] **Other**: But.
[13:51:17] **You**: Will you have a bit of time tomorrow to look into this all together?
[13:51:23] **Other**: When Talha's back.
[13:51:25] **You**: I would like to look into it before Talha's back. Right. If he's kind of sick for longer, we need just proceed.
[13:51:32] **Other**: In.
[13:51:33] **You**: Or have our proposal and just Talha on board and we move on.
[13:51:38] **Other**: Yes, I think time is of the essence. I, I can.
[13:51:43] **Other**: Walk through this with Nishant. If you have to also have time tomorrow, Nishant.
[13:51:48] **You**: Perfect. Yeah. Also invite me, please.
[13:51:50] **Other**: Okay.
[13:51:51] **You**: Great. All right.
[13:51:55] **You**: I have a plan.
[13:52:01] **You**: All right, back to you, Kiryl. Wrap it up.
[13:52:09] **Other**: All right.
[13:52:10] **Other**: That's a wrap.
[13:52:12] **Other**: We're done.
[13:52:13] **You**: Perfect.
[13:52:17] **Other**: I want to add some more things here.
[13:52:22] **Other**: Yeah. So I was really like, I'm learning and I'm seeing a lot about how much actually not working at five teams in Pero brings us.
[13:52:34] **Other**: And I would really like to create a lot more focus.
[13:52:38] **Other**: Work for us.
[13:52:40] **Other**: And priorities max two at the time. So we avoid the situation in which we have too many topics right now.
[13:52:47] **Other**: If we say now next two weeks, we get a leveling for take up and running and the feedback and then we get it done together. I mean.
[13:52:56] **Other**: Two people maybe on a topic, max three. But yeah, this is just a node that I'm seeing that it works really good when we are.
[13:53:05] **Other**: Focused on a limited number of topics. So this is also what I, yeah, I raised to Alexei today and we'll try to do better moving forward that also when we do sprint planning that we have.
[13:53:19] **Other**: Two topics that are very important running at the same time and that we try to wrap it up. I think a good example was expedia that we said experience certification highest priority. We get it done.
[13:53:30] **Other**: We move on to the next topic. The next topic at the moment for me is getting 11 infotech live with the first API.
[13:53:38] **Other**: And having a good migration plan.
[13:53:40] **Other**: For the others.
[13:53:42] **Other**: So we have streamline process to onboard the others and then destinations. So always like running to in parallel with one the highest priority to get done first.
[13:53:54] **Other**: And then picking up. So this also right now in the getting closer to the core three planning, I'll do my best to try to not get new topics. So if we align that.
[13:54:07] **Other**: We will start to work on the destination, then this is priority that the application destination plus you can sourcing and that's it. And we get one of them done and then we can form new topics rather than dragging in five topics for months.
[13:54:23] **Other**: Yeah.
[13:54:27] **You**: Yes.
[13:54:28] **You**: Exactly. Focus.
[13:54:30] **You**: Getting.
[13:54:31] **Other**: And we've seen this a bit this morning also with three planner 2.0. We had an alignment and they also run into issues simply because.
[13:54:41] **Other**: They were running too many things at the same time for too long without seeing the impact and now needing to stop some of them as well rather than just delivering the first one and then picking up next one.
[13:54:54] **Other**: They were splitting the team and running too many things in parallel, which also did not work out great there.
[13:55:05] **You**: Other mistakes.
[13:55:07] **Other**: I mean, we did it a lot as well. So yeah, but this is how many types of planning. So let's get this 11 input tech guys.
[13:55:17] **Other**: Live.
[13:55:20] **Other**: And start new things.
[13:55:24] **You**: Perfect.
[13:55:30] **You**: All right.
[13:55:31] **You**: Thanks, everyone.
