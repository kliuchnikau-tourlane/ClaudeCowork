# 1:1 - Sascha / Aliaksei

**Date**: 2026-04-08
**Time**: ~15:00 – 15:45

## Attendees

- sascha.burku@tourlane.com
- aliaksei.kliuchnikau@tourlane.com

## Transcript

[15:00:00] **You**: Hello. Can you hear me?
[15:00:02] **Other**: Yes.
[15:00:03] **You**: All right. All good. All right. Good to see you been been a while.
[15:00:08] **Other**: In a while, but I got the feeling like our last. One of one was not so long ago.
[15:00:13] **You**: Yeah yeah just just two weeks ago.
[15:00:16] **Other**: Yeah. Meaning, like, you know. I was not working. You were not working.
[15:00:21] **You**: Yeah true you've been out.
[15:00:24] **Other**: Kind of.
[15:00:25] **You**: Yum yum.
[15:00:27] **Other**: Like. We've all been out. So. Nothing. Not so much from my side. That I can actually report you.
[15:00:34] **You**: It was me and marcus who were. Kind of just grinding everything.
[15:00:39] **Other**: Yeah.
[15:00:40] **You**: Flashback from. Christmas times when meaningless again alone. Okay yeah true we didn't didn't. Have anything but I think. We can sink still about about a bunch of things. So now we have this cycle planning happening it's pretty much april and by the end of april we need to have a plan.
[15:00:58] **Other**: Yeah. Yep. Yeah.
[15:01:00] **You**: So I think christina will be back next week and will be more active on this but yeah I've seen you already started looking and thinking about the smart booking part.
[15:01:10] **Other**: Exactly. Yeah.
[15:01:12] **You**: Right so and we'll need to.
[15:01:14] **Other**: Yeah.
[15:01:15] **You**: Dive deeper into all of the potential topics that we can handle and we'll need to kind of probably quite aggressively prioritize them because all the teams I see they have like at least twice as much ideas and things in their pipeline that they can. Actually do so we'll need to kind of deprioritize something and we'll need to. Also draw dependencies all of these things have dependencies as like smart booking clear dependencies on all of the things in spati at least and yeah we'll need to connect all the dots because yeah I'm not sure who gonna be doing what since it's all changing and the more we look into it the more kind of uncertainty we have so yeah I think we're gonna be working quite a lot on these topics. So about smart booking what's on your mind so far what do you think about this whole initiative?
[15:02:05] **Other**: So you might have seen already me reaching out. In the sliding. So best thing would be if someone of speed also feels responsible there. Providing some more. Yeah. Probably providing some. Some ideas. What could make sense? Especially. API contract wise would. What we should do. Because so far, my. My findings point more towards. We can build everything on our own. But then we would basically, we would copy the. The accommodation search approach. And include something else. And we would build this into. Booking platform. I mean, if there is wished that. Booking platform is anyway, the only source of truth or smart booking. Then this is okay. That we do this. But. I'm not sure, you know, if this is kind of like the. The best way to. To go there. Like using the current resources. Might work, but might be also inefficient.
[15:03:00] **You**: So. Again so we need. To map room level content. Between different dmcs right?
[15:03:08] **Other**: Yes, exactly.
[15:03:10] **You**: So right now doesn't have api right and we'll need to somehow do this mapping.
[15:03:16] **Other**: Yeah.
[15:03:17] **You**: And for this we have several options right here provides. API and we just query it and get all the data right and second one you mentioned. We at flamingo can implement it. Okay.
[15:03:30] **Other**: Let me quickly. Share with you. The graft of this. Of that page. And then if you go to. Decision logic. If you go here.
[15:03:40] **You**: Long document okay.
[15:03:42] **Other**: Yeah. With some.
[15:03:44] **You**: Which page.
[15:03:46] **Other**: I I sent you the actual link here. Hopefully the decision steps apply. That should be. Oh, sorry. No, it was wrong data flow diagram. You just need to scroll a little bit down there.
[15:03:58] **You**: Oh yeah decision steps right.
[15:04:00] **Other**: Then it's kind of like. Yeah, but. But.
[15:04:04] **You**: Beautiful diagram yes.
[15:04:06] **Other**: But the data flow diagram probably prints out a little bit better. What's happening.
[15:04:12] **You**: Okay okay yeah what we have here.
[15:04:15] **Other**: Trip planner. Trip planner forwards as the. The data. And then what we do is kind of like. We solve candidate suppliers. That's kind of like how it's. How it's called. So we kind of like. Kind of like need to figure out. So we need to get, like, we first need to figure out, like. On a room level. Or, like, if you want to do this on a room level or if we wanted to descend on an accommodation level. So to say. But I. I assume, like, first we will get. We will try to. To get the. Get the same room back. And then kind of, like, based on. On the room level, we can probably work something out on. Like, coming from a room level to an accommodation level. Where we then can start querying. Already existing APIs like this get accommodation. Has it got accommodation? Offers? Get. Get accommodated. Yeah. Get accommodation offers, and then we kind of like we would get more information like this. This rate key. Some. Some metadata. Something like that. Is kind of, like, needed.
[15:05:15] **You**: Yeah but like first point is like the critical here right.
[15:05:19] **Other**: Yeah. And that's why I said, like, this is just now my. My. My draft. And there is a. There is this very important question, and that's kind of like where I attacked Christina here. About accommodation level. Like, is this the Milestone one? Or is it the. Or. Or. Does it already need to be on. On. On rumble? Because if it needs to be in room level, then we definitely need something from pt side. Like, we need something. Like this matching logic. Like this. And this. This. This must live somewhere in. In our inventory, like that we can say, like one room. Has. Its siblings. In other DMC. S, because I wouldn't know how to do that.
[15:06:00] **You**: Yeah and we cannot do it ourselves on our side right so we need this information from.
[15:06:07] **Other**: Well, we would. If we would do it on. On our side, then we would constantly, like, we would. We would start becoming an inventory on. On our side, I think, which is probably not the correct domain.
[15:06:18] **You**: Yeah and we need kind of all the internal IDs we need to connect to this kind of room level mapping provider I think it's geonics that what they use.
[15:06:28] **Other**: Yeah. Yeah. Yeah. That's also what I already wrote down here. Gemonics. But there's a. There was a second one, and that's where I was confused.
[15:06:38] **You**: I'm confused I never heard about that second one to be fair. Yeah I never heard about this one.
[15:06:45] **Other**: Yeah, but. But in. So I was. I was going through the Bruno, the Bruno at point. And I was asking, like, the. The clot. Hey. Check out. What can I use there? And there this showed up is. And then I was following, you know, the. The traces was also reading online. Wise. And then, like, it looks like it is the. Another way of. Of that. But if you say, like.
[15:07:10] **You**: But this is it. Like. Implemented and in use or it's some kind of debt code experiment.
[15:07:16] **Other**: I'm not sure, but, like, it shows up in Bruno. So in the thing, like in. In. In the. In the. Postman substitution that we're now using. There, there shows up in the list, which means, like, something is zero. Or something was there.
[15:07:30] **You**: Yeah. Yeah.
[15:07:31] **Other**: I can't like. And. And since Bruno is a relatively new project.
[15:07:36] **You**: It may be that code right. But kind of here just auto migrated everything from postman to bruna.
[15:07:42] **Other**: Yeah, yeah, yeah. I get it.
[15:07:45] **You**: Yeah so it may be kind of some old experiment that kind of.
[15:07:49] **Other**: Of course.
[15:07:50] **You**: Never got cleaned up so yeah we can clarify is this how is it called vector.
[15:07:56] **Other**: Yeah. I tried to find it.
[15:07:59] **You**: Yeah so if we want if we would do that on our side we would need to kind of really. Do all this kind of geonics API queries that they already do. Kind of.
[15:08:08] **Other**: Yeah.
[15:08:09] **You**: Yeah.
[15:08:10] **Other**: I somewhere in. In. In. The spiti supply domain. This demonic mapping is. Persistent or needs to be persisted or will be persistent. And that would be great to have an API endpoint. Where. Wherever this is persisted. This will kind of, like, tell us. Okay. For this room. You have. These other DMCs that you can query. And if we get, like. Like. And if we get this back, then we. We kind of, like, strategically can more. Query the. This get accommodation offers where we get the rates back that we can say, like, okay, we will query this, this, this, this.
[15:08:50] **You**: We have ideas we can just query them one by one.
[15:08:53] **Other**: And then we. Exactly. We. We have IDs and we see what the. The prices will be. Kind of like. And then we can judge. This is the lowest price. This is the highest price. But there is. These are on requests. These are. There is everything book bookable. You know, and then we can make some smart logic. Like probably will split, will take a few of them, a few of them so that we can. Like. But that's. That's a very, like, more straight. Like, that's then when we're already into that part where we can think about.
[15:09:20] **You**: Yeah yeah that's fully on our site we have all the data which is just for us to decide how we use it and how we rate things how we kind of. Protest things and so then for this mapping. Like on their side on our sides looks like. No reason to pull it into our system we don't need to know about this geonic service and it should be kind of really exposed from the only question here right so it's it's on schpeti they can implement it hopefully might if they won't find possibility okay we can potentially just. Do this kind of API on their servers somehow. In theory.
[15:09:58] **Other**: Yeah. I mean, this would be like calling this. This. If you look at number 16 room mapping supported suppliers. I mean, yeah, we could potentially do this as well on our side. But then, like, we would need to know. Like, we would need to. Either.
[15:10:13] **You**: Not not not we I mean we we can maybe just extend their system to expose this API. So we just extend supply service.
[15:10:22] **Other**: Well. That's. That's what I meant. So it's. It's a potential options that, like, it's kind of like a proxy acts like a proxy. For forwarding it. Maybe a little bit more normalized. You know, like not this. Supplier ID on their side, but, you know, more getting back. Like supplier. And. But, but still, like. Some. Some translation needs to happen. Like this. This room rate. Or this. This internal room. Whatever. Like, it's called room DMC ID. I think that's what it. What this is.
[15:10:55] **You**: Yeah they have this this mappings already build so they will need to transfer there and back.
[15:10:62] **Other**: Yeah. So, yeah. So that's the only thing we. We can forward somehow. We can forward this. We can select this. This is the room DMC ID. And then, I mean. What. What we will would need to get back, like, from this. To monics is then. Like, we would forward our, like, this room DMC ID. But I'm not sure, like, how demonics will, you know, can work with that. So there is something. There's a. A knowledge Gap missing from my side. That I don't have.
[15:11:20] **You**: Yeah yeah but it's already in use right so it's already somehow implemented in this search thing so we potentially can just.
[15:11:28] **Other**: And that's. And that's.
[15:11:30] **You**: Extract it and use it in search and also allow to query it by API. Right.
[15:11:35] **Other**: Yeah, but it would be great. Like. Where is it used? Like, it has. There must be some. Some usage in the speed domain.
[15:11:42] **You**: Yeah.
[15:11:43] **Other**: And if that usage is that it's persisted somewhere. Then it's like, that's what I mean from our side. Probably makes sense. We call an endpoint where the persistence layer is. Not the API. That's kind of. Like hopefully.
[15:11:55] **You**: Yeah yeah definitely need to tell us if we are to help them with these apis they need to tell us like what exactly how it works where to put and yeah then we can probably just do it if they tell us what to do.
[15:12:05] **Other**: That.
[15:12:06] **You**: If they won't be able to prioritize it. So from the look of it might be already in just one query to gmonics and just return the results maps maybe not not a big deal so yeah so.
[15:12:18] **Other**: Yeah, but what I think is, like, the. The. The one that I found in Bruno is the.
[15:12:24] **You**: What's.
[15:12:25] **Other**: The API call, the direct API call to the demonic system. So if we would call this from booking plot from site, we would get back the direct mnemonics answer, which has then probably some keys and identifiers in it.
[15:12:38] **You**: Your.
[15:12:39] **Other**: Which we will not understand by room DMC.
[15:12:42] **You**: We don't want that we don't want to talk to.
[15:12:45] **Other**: Like. Exactly.
[15:12:46] **You**: Jocks yeah because kind of built this kind of internal mapper service which is kind of. Actually. Hide all the. Mapping ideas because behind its own abstract ID and yeah they built the entire system around it and they definitely doesn't make sense penetrated it should be mapper service.
[15:13:00] **Other**: Yeah. Do you know how it's called? Mapping service? Updated six hours ago or great that we talk? Because then. I will actually use that one and see.
[15:13:10] **You**: Yeah but I'm not sure it's kind of it will be the right.
[15:13:14] **Other**: What I can get out.
[15:13:15] **You**: Place to query nice but it may it's me.
[15:13:18] **Other**: I've been sidekick.
[15:13:19] **You**: Maybe.
[15:13:20] **Other**: Okay.
[15:13:21] **You**: Sure. So yeah yeah I think it's quite clear that we need somewhere on the spatio services.
[15:13:28] **Other**: So we.
[15:13:29] **You**: We just give them our gymsy room ID gets all the other DMC rooms IDs back with DMC name and then we can query dimsis. Prices one by one and yeah so in your chats can you maybe write down like okay what are you trying to build to explain that you're looking for smart booking and to implement smart booking you'll need. Kind of ability to map from room ID to another remedy and we'll need API and then yeah probably tag someone. To to look into it and kind of investigate what needs to be done and how and then we. Decide right so assumption that somehow will have this right and then you're kind of solution design based on assumptions that we will have it and if we won't have it then we cannot have smart booking right so this is kind of a central first.
[15:14:20] **Other**: Yeah, I'm not sure if this.
[15:14:22] **You**: Kind of.
[15:14:23] **Other**: Mapper here is the right. App because it has something in with accommodation in it.
[15:14:28] **You**: Yeah.
[15:14:29] **Other**: But on the accommodations. So probably not the.
[15:14:32] **You**: True but maybe it's the place where they want to put it because. It's as you saw it's actively developed it's still kind of not final they're moving things from elephant there they're rewriting things so it kind of yeah I guess in your chat just write what you need. And I will probably ask Kirill to kind of coordinate and explain. And come up with kind of what we'll need to do on spaschite and then we decide like how we prioritize it who can make it. Okay so yeah just tag me in this chat when you when you write this. Yeah so should should be fine I think we'll find a way either they implement it or if they explain to us. We can do it. Should be fine. Good. All right. Apart from that. I don't think I have any anything particular right so other topics Christina will be back it looks like maybe Marcus will be very busy with. Actually rewriting. Support portal. In react.
[15:15:35] **Other**: Yeah.
[15:15:36] **You**: For because you heard about this right so we have this. What's it in focus team that they are building this user portal right user profile and other things so they're taking over this area they're investing into it and they are kind of building that graph a new system there and this system conceptually kind of intersects 80% of its logic with what we have in the supply portal.
[15:15:57] **Other**: Yeah.
[15:15:58] **You**: If you look at list of your trips in user profile not in the support portal. So now that we have many things already in support portal it makes sense to actually merge them and move them to user profile but they are in different technology and with different front end second. S basically require.
[15:16:15] **Other**: Yeah. So there's a back end in Ruby and rails, and then there needs to be a front end.
[15:16:22] **You**: S. Yeah and front end is in view.js with some special libraries with some different CMS from what we use not using design system and design libraries Tourlane is using in all of the front end.
[15:16:35] **Other**: You mean the. The one that markers built is in future.
[15:16:39] **You**: Yeah. Yeah yeah yeah yeah.
[15:16:41] **Other**: S? Yeah. Yeah. Yeah, of course.
[15:16:43] **You**: Yeah.
[15:16:44] **Other**: Like, why would love us do something else? They would just make it. And I bet there's also probably a mongo or whatever used.
[15:16:52] **You**: Some special CMS that. S kind of migrate to content for.
[15:16:56] **Other**: Okay, awesome. Okay. Okay.
[15:16:58] **You**: So yeah this is likely something that will.
[15:17:00] **Other**: Good.
[15:17:01] **You**: Happen.
[15:17:02] **Other**: Okay.
[15:17:03] **You**: That will require basically a rewrite of these things or migration as much as possible.
[15:17:08] **Other**: Yeah.
[15:17:09] **You**: To this new stack and kind of giving it to foxes for ownership. So yeah basically foxes will be kind of owning this user or tell profile and as such they will be owning. Basically self service capabilities for users and kind of. How we avoid users from creating tickets. Right this goes to their side because previously it was like on Christina and support portal and now it's if we have user portal then it doesn't make sense to keep putting this kind of self-service things into support portal support portal should be like stripped down very simple your cases FAQ. Right and everything else build a portal with fox so yeah things are changing.
[15:17:50] **Other**: Again.
[15:17:51] **You**: Yeah yeah that's a weird rewrite and this weird technologies are kind of.
[15:17:56] **Other**: Good.
[15:17:57] **You**: Pain in the butt. Now. Speaking about weird technologies we have documents dashboard so you had some ideas about what might be improved and changed and kind of made differently. How can we make it happen? How can we maybe. Demo these ideas maybe kind of propose these ideas for the team. So we can actually make them actionable and move on if we. Do.
[15:18:18] **Other**: That really depends on. On the prior. Right. For the next quarter. If smart booking and. And let's say also triplanet 2.0 is. Is a topic then I don't see any. Time.
[15:18:30] **You**: Room to. Chime in.
[15:18:32] **Other**: No, I don't. Because, like, these. The ideas. Like some of my. My ideas are bigger changes. Like, let's say.
[15:18:40] **You**: Get rid of this event.
[15:18:42] **Other**: Let's. Well, yeah. Kind of like. Or like. Or get rid of the mongodb and use a real proper SQL database. You know, these are very hardcore, hardcore.
[15:18:52] **You**: Kind.
[15:18:53] **Other**: Changes that have. And at the moment. Have no. How to say no. No. No. Well. Do they have money wise output? I don't think so. That there will be so much money safe with that. There will be a bit of money saved because, like, the. The. The. The initial assumption was that. The mongol DB and hosting it on. On. On mongodb.com. way cheaper. But this mongodb has already upgraded itself automatically to tier whatever. Like today in. In refinement markers and outlook. And we saw it's already tier 10. And because of whatever, like user. So much user access happening at some time, and then it's like downgrading it, like upgrading, downgrading it automatically. Which, like, if, as you remember, for. For postgres, we did it once. We did it once, and now it's very stable. It's really proper stable.
[15:19:50] **You**: Of.
[15:19:51] **Other**: So. And that's something like this I would also, like, would like to have. But I don't like. I don't want to play around in building, like, for example, in. In. In AWS atlas. Atlas DP because I do. I do remember this. That can be also very. Very annoying. What I. What I would rather plan is to. To do this changing of. Mongo to. To Postgres. Call that we have.
[15:20:12] **You**: Yeah this is what I mean. So we have this idea and we need to move it forward right so we need to kind of explain it we need to sell it we need to show like pros and cons and make a decision as a team if we are going with it or not and then put it into kind of planning right if not in this planning cycle.
[15:20:30] **Other**: Yeah.
[15:20:31] **You**: Maybe next one maybe we always dedicate things to such kind of technical depth topic right.
[15:20:38] **Other**: Well.
[15:20:39] **You**: So yeah.
[15:20:40] **Other**: We have a site where. Where exactly this topic is was written out. For. For. For tech. That. Exactly. That one.
[15:20:48] **You**: Okay so yeah.
[15:20:50] **Other**: It wasn't suggestion from my side already. It's. It's long. And same with the. With this ability. But for that everything, I'm. I'm also not sure, like, how big the. The. The. The impact is. Because, like, as I said, like, still to me, like a technology I would not use on. On. On a daily base. Like this. This view. This view. Framework. So I. I can't tell you, you know, like, I can't evaluate. How, like, is it worth doing it? Or is it okay that we pay this five bucks or not? No. At the moment, I think we're paying nothing. Right. Because.
[15:21:18] **You**: Now actually Marco rewritten it so it's kind of free.
[15:21:22] **Other**: Yeah. Yeah. So it's. So it still kept in this industry. So, like, these. These are the. These ideas that I have or that I think makes sense. They. They. They are not like. They're not contributing.
[15:21:34] **You**: And it's fine.
[15:21:35] **Other**: Like, to the project itself. They would. They were tech depth, as you said. And. And we all know what happens to tech tap. You will not work until. Until you can no longer. Ignore it. Which is kind of like the data that I'm waiting, you know, that the mongodb is no longer scaling them much. And then we have to work.
[15:21:55] **You**: Well guys. If manga is good at something it's good at scaling so it's kind of gonna be a long wait yeah so manga has weird things in other parts.
[15:22:04] **Other**: Yeah, I know. I know, I know. This kind of. Or let's say, like, if the. If the cost factor is then going.
[15:22:11] **You**: But.
[15:22:12] **Other**: Going that up.
[15:22:14] **You**: Yeah it.
[15:22:15] **Other**: But.
[15:22:16] **You**: S the annoyance is like maintainability and kind of stability of the system right so. This is what we need to wait in. Like we have example of.
[15:22:25] **Other**: To be honest, I would also wait for. For. For the new infrastructure. Part. So. So to say I would make it as. As part of. Once we have the. The. This. This pilot project ready. And set up, then. Then I probably would get also a better feeling about. Getting it away from flyer or moving it into the. The infrastructure, you know, and then it's like it's already at the right place where you could say, hey.
[15:22:50] **You**: Yeah.
[15:22:51] **Other**: Rds is not so far away. Because we just do the terraform.
[15:22:55] **You**: If we are touching it why don't we kind of make it a little bit so yeah.
[15:22:60] **Other**: Yeah. Yeah. Yeah. And that's basically where. Where I was waiting. So. So for me, I I I don't see. Any improvement that we can do. In. Like, unless we. We really say in q2, we also make this a prior topic. We can. I mean.
[15:23:12] **You**: We should always have some technical depth as a prior but yeah you're right that we have this infra and infra kind of de facto kind of eats up our a lot of our kind of technical.
[15:23:22] **Other**: Yeah.
[15:23:23] **You**: Depth budgets for.
[15:23:25] **Other**: Exactly. So next week I will be again off for the infra week.
[15:23:30] **You**: Yeah. Yeah and the week after so yeah yeah.
[15:23:34] **Other**: So. And the week after.
[15:23:36] **You**: Right.
[15:23:37] **Other**: I write. Oh, no.
[15:23:39] **You**: You have two weeks this month.
[15:23:41] **Other**: No, no. I was only. Okay. All right. But. But there is first of May. So one day it's off. Oh, no. I haven't seen that. Okay, now. Now. Now I've seen it. Okay. All right.
[15:23:52] **You**: One day let's yeah yeah good stuff. Okay. Yeah fun time. All right yeah but we'll we'll need to move technical depth things somehow more kind of feasible with kind of. Higher priority because right now.
[15:24:02] **Other**: Yeah.
[15:24:03] **You**: It's hard.
[15:24:05] **Other**: I will set myself this Friday a reminder. To. Check. Dd tag depth. Confluence page. Check the status. And make some adjustments. So that at least. We see that something is done. Internal. I'll let you know when we have our next one in one session. About what my feelings.
[15:24:22] **You**: Yeah actually one thing I remember so you've been out last week as well so you didn't participate in tpda all hands. Have you heard about Gregor.
[15:24:32] **Other**: Nope. No. What?
[15:24:34] **You**: Is living in two months.
[15:24:36] **Other**: Whoa. Okay. No, I have not.
[15:24:39] **You**: Or in two and a half. Right.
[15:24:41] **Other**: Okay.
[15:24:42] **You**: So this is new for you.
[15:24:44] **Other**: Yeah, that's new for me.
[15:24:46] **You**: Yeah I also learned yesterday Claudia was like yeah by the way last tpda. They announced it so yeah.
[15:24:53] **Other**: Okay.
[15:24:54] **You**: This is also. An interesting.
[15:24:56] **Other**: Okay.
[15:24:57] **You**: Top. Ic.
[15:24:58] **Other**: Yep.
[15:24:59] **You**: Surprised.
[15:25:00] **Other**: That's. Yeah, now I'm really surprised. Okay.
[15:25:03] **You**: Yeah I also don't know what.
[15:25:05] **Other**: Okay.
[15:25:06] **You**: What happened why exactly. And yeah if not in he'll be back on pretty much next week. So but.
[15:25:12] **Other**: Yep.
[15:25:13] **You**: We need to have it in consideration and Gregor has quite a lot of. Knowledge that other people don't have and next few months we definitely need to prioritize. Kind of get new knowledge if we need it.
[15:25:25] **Other**: Okay. Well, good thing for info kill this. With kind of like. Since we wrote down a lot, we have a very good. Shared knowledge there. So there's a. That's a good thing. So.
[15:25:35] **You**: Perfect.
[15:25:36] **Other**: And since he was not really working in the last. In the last infra, in the last two in infra weeks as well, like he didn't provide. Too much content.
[15:25:46] **You**: Yeah. So.
[15:25:47] **Other**: He was more receiving content from us.
[15:25:50] **You**: You guys.
[15:25:51] **Other**: And. And doing more reviewing. So. Yeah, kind of like in integral, we. We're kind of, like, prepared. For all the other topics.
[15:25:60] **You**: Worked last week. With Jacob.
[15:26:02] **Other**: They did work because I saw. Like, there was some. Some work was done because I. I received some. Some review comments. On. On. On one of the. The. The infra PPRs. And I'm pretty sure we didn't received as well something.
[15:26:14] **You**: Sure. Okay. So yeah yeah this is like some. Something to definitely keep in mind. So. I don't know the details but yeah, it is what it is.
[15:26:22] **Other**: Good. All right. Yeah. Well, I will see him next week. He will probably. Provide us more information.
[15:26:29] **You**: Shares some yeah yeah. Curious to know. Good and apart from that also cycle planning vacation plans what about your vacation plans for next month May June.
[15:26:38] **Other**: Right. Nothing.
[15:26:39] **You**: Nothing.
[15:26:40] **Other**: I have nothing planned there in these two. So there are these. Things tall based, but I already told my girlfriend I will definitely not travel there because, like, so much people are traveling there. I have no. I have no interest in doing that. With. I think it's called with Monday. Is it called with this May around May?
[15:26:58] **You**: Oh yeah. Yeah. I don't know what this.
[15:27:01] **Other**: Because, like, there are two weeks of. Of holidays, and I think it's maybe in Berlin as well as well.
[15:27:08] **You**: So Mayday and where is it. Eight of. 8 of May the result right now oh yeah. Ascension day.
[15:27:16] **Other**: Assumption date. Yeah.
[15:27:18] **You**: It's on Thursday and then Friday is working day. So. Okay I took a vacation.
[15:27:23] **Other**: So. My vacation will actually more happen in. September.
[15:27:28] **You**: September.
[15:27:29] **Other**: Yeah.
[15:27:30] **You**: Okay.
[15:27:31] **Other**: End of August. September. Plus, I will also take two days and unfortunately this will probably. You will not like it. Or if you expected me to see this will happen when we have the. Takeoff summer event in Berlin, because unfortunately, this always happens on my birthday. And my girlfriend already planned something from me on my birthday. So. So I'm not able to come.
[15:27:52] **You**: So you always miss it.
[15:27:54] **Other**: Yeah, I missed it also last year. So it. It's like, it's. It's already happening on. On July 3rd.
[15:28:00] **You**: Unfortunately.
[15:28:02] **Other**: And, you know, it's my birthday, so it's. Like.
[15:28:06] **You**: So next.
[15:28:07] **Other**: And. And I have plans on the.
[15:28:09] **You**: Yeah yeah next year the plan is to kind of. Lobby some other date with our office manager.
[15:28:15] **Other**: Kind of like. I mean, it. It only has to happen, you know, let me check. If. Well, if it happens on, let's say, well, next year, July. The 3rd is a Sunday. So it's a very unlikely to happen there.
[15:28:28] **You**: Okay so you have a chance.
[15:28:30] **Other**: So it's probably will happen.
[15:28:32] **You**: July the 4th and then you're out.
[15:28:34] **Other**: Yes. Well, it probably happens. No, no, it. It probably happens, like the days before. Like 31st or, like, first and second, which is okay.
[15:28:42] **You**: Friday. Okay.
[15:28:44] **Other**: Oh, sorry. No, it's not. It's a Saturday next year.
[15:28:48] **You**: So.
[15:28:49] **Other**: Which is. Well, okay. Which would be not so bad. But since.
[15:28:53] **You**: Let's see yeah so.
[15:28:55] **Other**: Yeah. But. But anyway, so this is. So this is my plan. So these two days. And then two weeks, at least. In the. The end of September. So there's, I think long, long enough time regarding any. Planning. And then some. Some days in winter and some days. Like some days in autumn and some days in Winter. So then. And also.
[15:29:12] **You**: Okay.
[15:29:13] **Other**: That's what I learned. We have not like, at least I have now more holidays. That's also what I learned.
[15:29:19] **You**: What do you mean you have more than you thought?
[15:29:22] **Other**: So. Yes, because of. That was part of the. The all hands. No, not. Not all hands of the. What's the other meeting called? The Town hall? Meeting? So. Yeah. So people that stayed with Toulane one, two, three or four years. You get every year. Each year you're with Tolane, you get one additional. Holiday now per year.
[15:29:42] **You**: Okay how many do they have.
[15:29:44] **Other**: Up to 30.
[15:29:46] **You**: Up to 30?
[15:29:48] **Other**: Which. Up to 30. So 20, 26 and starting. And then 30 is the maximum, which is pretty much the standard in every other German component.
[15:29:56] **You**: Okay. Yeah yeah yeah. Yeah yeah.
[15:29:59] **Other**: When you. When you already start. Like, okay.
[15:30:02] **You**: We have a great moment for you.
[15:30:04] **Other**: So. So that's not why I got three more days, which I can just.
[15:30:08] **You**: That's yeah it's it's good good three more days. All right good to know yeah I think I. Haven't seen this info yet I need to watch this.
[15:30:16] **Other**: Yeah.
[15:30:17] **You**: Meeting.
[15:30:18] **Other**: Okay. All right.
[15:30:20] **You**: Good perfect then yeah have a great day.
[15:30:23] **Other**: Then. Yeah, YouTube. See you in the next.
[15:30:26] **You**: Tomorrow.
[15:30:27] **Other**: Bye-bye.
