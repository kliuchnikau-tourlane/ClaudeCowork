# Support Portal Migration: Backend Follow-Up

**Date**: 2026-04-23
**Time**: 11:40 - 12:30

## Attendees

- silvia.delatorre@tourlane.com
- jakob.pupke@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- markus.klemann-ext@tourlane.com
- karolina.grabowska@tourlane.com
- PR-20 HQ-2-China (8) [Camera, Google Meet, Mic, TV, Tablet]

## Transcript

[09:40:29] **Other**: Hey.
[09:40:29] **You**: Hello.
[09:40:31] **Other**: How's it going?
[09:40:33] **You**: Quite good.
[09:40:35] **You**: We had the Demiran this week.
[09:40:38] **You**: I think half of the team still recovering.
[09:40:42] **You**: Hello Markus.
[09:40:43] **Other**: Was it fun? I saw you did like this reality TV know like the quiz something.
[09:40:49] **You**: Yeah.
[09:40:49] **You**: It was like we went for.
[09:40:53] **You**: This kind of a bunch of different team games with split in three teams and competed now we know who is more competitive on the team who is less competitive?
[09:41:06] **You**: We know that Christine is very competitive and cloudy yeah this is what we know.
[09:41:06] **Other**: Always good to know.
[09:41:09] **Other**: Yeah. Yes.
[09:41:13] **You**: Yeah.
[09:41:15] **You**: Yeah it was fun and then Aleksei took us to Ukrainian place.
[09:41:21] **You**: Yeah yeah he was ordering for 10 people like and and it was ordered in 10 languages.
[09:41:27] **You**: In ukrainian russian german and english and yeah our waitress handled all of all of the languages perfectly.
[09:41:37] **You**: Feels like she knows everything.
[09:41:40] **Other**: Very cool.
[09:41:42] **Other**: Sounds like a fun team event.
[09:41:44] **You**: Yeah.
[09:41:47] **Other**: I also want to plant something for us.
[09:41:51] **You**: Do do team events like quarterly half a year yeah.
[09:41:55] **Other**: We try to do every quarter.
[09:41:57] **Other**: Yeah.
[09:41:57] **Other**: I'm just always struggling with the budget.
[09:42:00] **Other**: I don't know.
[09:42:01] **Other**: Just not enough money to do something for.
[09:42:03] **Other**: Him.
[09:42:05] **Other**: But.
[09:42:08] **Other**: Jakub, can you hear us? You look like someone is wrong.
[09:42:15] **You**: We cannot hear you.
[09:42:18] **You**: Something is wrong.
[09:42:21] **You**: And I think we wait for Silvia I'm not sure if she joins now or she has some other things to finish.
[09:42:31] **You**: Yes yes we hear you.
[09:42:32] **Other**: Yeah.
[09:42:32] **Other**: Yes.
[09:42:34] **You**: Okay yeah I see Silvia is a little bit busy.
[09:42:41] **You**: So maybe she will join a bit later but I think we can start and maybe we should start with transcript of the talk if you don't mind.
[09:42:54] **You**: Because Silvia really appreciate.
[09:42:56] **You**: That.
[09:42:58] **You**: Okay.
[09:42:59] **You**: Thank you for for joining finding time.
[09:43:04] **You**: So what's the agenda for today?
[09:43:09] **You**: I think our main question was how do we.
[09:43:15] **You**: Handle the technical part of the migration and specifically the backend right and what do we consider backends how kind of thick back end it is how thin packet it is right so from the pictures it looks like the backend part that Markus is migrating into user portal is mainly API request and transforming preparing.
[09:43:41] **You**: Them for display so it's kind of sounds quite thin backends.
[09:43:48] **You**: And hello Silvia.
[09:43:52] **You**: Yeah we.
[09:43:53] **Other**: Hello.
[09:43:55] **You**: Just started and we are starting transcript.
[09:44:00] **You**: All right so yeah so as I mentioned we we can talk about.
[09:44:08] **You**: This everything behind front end and maybe Markus can show us like the amount of it and kind of type of the.
[09:44:20] **You**: Code that's going to be moved and maybe Karolina you can explain a little bit how these types of backend logic are handled is it kind of going into purely backend service like ruby servers or whatever or just going into like thin back and forth front and maybe in JavaScript so yeah this is like what I'd like to really understand and understand.
[09:44:46] **You**: The technology that we are choosing for that kind of.
[09:44:51] **You**: Receiving end and.
[09:44:54] **You**: Yeah then we can.
[09:44:57] **You**: Talk it.
[09:44:57] **You**: Through.
[09:44:59] **You**: Markus maybe you can just show us a little bit of your part.
[09:45:04] **Other**: Of course. Of course.
[09:45:05] **Other**: Yeah. Hello together.
[09:45:08] **Other**: Maybe I give a quick. You're just like walk through what's the different parts again so we're on the same page.
[09:45:17] **Other**: Screen sharing is working now.
[09:45:20] **Other**: Yeah. Considering. Okay. Yeah. I mean, I talk about this. Although last time a bit, but yeah, I mean, there's also important to see some things. Sometimes was better. I mean, this here is the production page now. Yeah. From the pivotal. And we have this page in three different markets comment crunch, of course.
[09:45:40] **Other**: And, yeah, I mean, the normal landing page. Yeah, but we are talking specifically not about kings.
[09:45:50] **Other**: And. But about a. Did it get it page for this contact form we talk about only about this, like behind login area here.
[09:45:59] **Other**: I think that's the midnight shortage.
[09:46:02] **Other**: Of a view from the administrator, but just to showcase this is here with you. But customers seeing and what we talk about to migrate. But this part here on the right side, I will talk about this one. This I call it like a summary. Yeah. Just in general, some information from the itself with a link to cryptos.
[09:46:25] **Other**: Pin code is fetched from lambos.
[09:46:29] **Other**: You can add.
[09:46:34] **Other**: Okay. Am I muted or not? No.
[09:46:35] **You**: No.
[09:46:35] **Other**: No.
[09:46:36] **You**: We're here.
[09:46:38] **Other**: Can you say where each of these things come from?
[09:46:44] **Other**: Yeah, of course Delusion. I mean, I already have like a diagram here, but I would call you first something visually. Yeah. And then after this, I would say we go into function a bit more. Yeah. Yeah. So we have a part to this. Lemos that say there's a sales part. You have invoices. We have different states here. This is all those here, but in storybook here's based on two different states of. Yeah. We have for the customer.
[09:47:12] **Other**: This is just array where we show the same documents as cryptos. And this one here is a big task.
[09:47:19] **You**: It comes from document dashboard our service.
[09:47:24] **Other**: Which one do you mean? This one?
[09:47:25] **You**: This one.
[09:47:26] **Other**: No, this is the same data as shown in cryptos.
[09:47:32] **Other**: Yeah. I mean, first of all, he has built by a big Jason, I believe. Yeah. And we also use this big JS, you know, to pass information. Yeah. And this is basically in the same. Yeah, I pass the same letter here. Just have a link and that's it. Yeah. Although nothing special here. What was I thinking? Also, I think there was planned Kristina also to display this part here as a good to know section. It's also just some swings just in place, which I think was never the discussed or part, because I think there's more like pre booking. So this also was a lot of Skopia. Yeah, but, yeah, let's focus here.
[09:47:32] **You**: Okay so it's from trip piece okay.
[09:48:13] **Other**: Kungi with these things. And this one here is a big part which we talk about. This is the passing and enrichment from many different APIs to be able to show you the same, like in ternary with, let's say, as in the mobile. Yeah.
[09:48:30] **Other**: So we have this in a quadrione, you packed, and then we just stable tripping stages. So each stage is like a destination, as you can see here.
[09:48:43] **Other**: Destinations are highlighted.
[09:48:45] **Other**: And then for each destination, like more information here.
[09:48:52] **Other**: Where it is some images, this is also mainly from truth.
[09:48:56] **Other**: Ers, Jason. And this, for example, heretic is when the next part. Yeah. Or each destination has accommodation. And for example, this information is here. These are enriched by the data we have from the documents dashboard. Yeah. And that's the reason we can play, we can place this ticket info questions here. I'm not sure if I find an example here. Okay, here's one. It's an activity.
[09:49:25] **Other**: Minimal stable. In this case, here's now.
[09:49:31] **Other**: Time mentioned here and also no document here.
[09:49:34] **Other**: Attached able to place this documents specifically for a date or for an activity or, for example, where it's needed because we have these data enrichment from the documents dashboard.
[09:49:53] **Other**: Yeah. And here many different views. Let's say here's also, for example, transport you, it's a each time we have modifications here or like your IV show like a slider.
[09:50:09] **Other**: Let's say. Yeah. So basically, there are many components and this is the view from the customer, but also called last time he reviews the same, like code based, but we don't expose access to this port page to whiskey. Yeah. So we give it numbers here. But this is the same software.
[09:50:43] **Other**: Just a view now for the potent employees. And here we just fetch or render the same UI components. Yeah. So it's, this is one to one is the same. Yeah. So this is understand now how that works together. Yes, Silvia.
[09:51:01] **Other**: Yeah. So, like something that we need to also be cautious about is like this admin, because in the past for.
[09:51:09] **Other**: For something different that I don't remember right now, we added in the CFA also like a role or some features for the admin. So for a different user and the CFA is actually like designed to be for the customer. So it was very controversial at that time.
[09:51:28] **Other**: For the teams that, that had to kind of see this feature being included. So maybe we would need to also take time to, to evaluate how to, how to make this, because then we could run into issues.
[09:51:44] **Other**: That then the user wants to have different features, you know, like the admin would like to have edit rights or something like that. So if we go into that area, then we kind of break also this domain because that's on the sales area. So one of my other things.
[09:52:01] **Other**: So it's, it's a bit.
[09:52:04] **Other**: Yeah. Just like to, to flesh it out here. But, yeah, probably like Karina has much more insights on this part.
[09:52:13] **Other**: No, I just want to say, I think what we mentioned on Monday is that this part is not a part of this workshop at all.
[09:52:19] **Other**: Because it's not something we will be migrating now. So this, it's, I think it's right that we need more time to think about it where it belongs.
[09:52:26] **Other**: Yeah. I just wanted to make sure, like, for now, we don't migrate this part.
[09:52:29] **Other**: Right?
[09:52:30] **Other**: Yeah, correct. And then there's also my understanding as my state. I mean, just for you as we have kind of components. Yeah. For customer and also for the administrator. Yeah. So we can see the same, of course. But in the future, this area here is when not, not, do not anymore visible for the customer. Yeah. Because we're a customer blocks and we use a portal. So with everything here, but of course this, he will stay and also some new features already planned. Yeah. And plus employ, for example, here, here we have like a table view of meaningful mentions that we showed maybe 14,000 support requests. Yeah. This is a very good book for, like, say to look in the support realm request run some users there, see some kpis. But yeah, this is not part. And the first is the phase one is just replacement of this one here. Yeah. Yeah. One thing.
[09:53:29] **You**: Yeah so then we so this is like the only scope we should look at today right this this page and all its data sources.
[09:53:39] **You**: Right.
[09:53:39] **Other**: Yeah. Correct. Correct. Yes, things. Yeah. And one thing more, because in the confluence page, this is like storybook. Yeah. And you can also limit kick through if you cover, I think also was the idea that some designs have to be planned, let's say. So here's also like crypto section here. Yeah. There you can see different states. I mean, Klika, let's say different states. I think this is also here quite important here. Yeah.
[09:54:12] **Other**: But yeah, I mean, sure, because this is the AMOLED kick through, but also have to be in mind.
[09:54:18] **Other**: When I.
[09:54:20] **You**: About this storybook I know I shared it with Silvia I'm not sure if everyone else seen the access to it you all have it yeah.
[09:54:30] **You**: Okay.
[09:54:30] **Other**: Markus started interconference page.
[09:54:32] **Other**: Right? No, correct.
[09:54:33] **You**: Perfect.
[09:54:37] **Other**: Okay. And I think, I mean, I want to focus more on backup now. So share me a little screen. I mean, this is also like a little nothing really super magic. Yeah, it's more, very like straightforward. How they do this just like a diagram. Yeah. How we fetch the data from there and what's actually happening there. And I think it's, I mean, this is all written in typescript. Yeah. So I think for me now, it's very straight profiles how I will implement this in, in the cfa project because, I mean, an offsite you have next for this typescript in the site is react. And this also our next S, it also has server side functions. Yeah. So this is basically the same, maybe a little bit rereading, of course, to make the things better and understandable. But in general, when we start. Yeah. First maybe question.
[09:55:36] **Other**: I mean, just this, just before. I mean, I just generally did this with a good tools, let's say very particular have something visual. Yeah. I can share this in the page.
[09:55:56] **Other**: Yeah. But as from the perspective on the customer, also he looks in, he go to this page, which I showed before, then something's happening in all place of this year, this part. This is just a server side part. This will be the same, I think if you line in the next.
[09:56:14] **Other**: Application and then multiple API calls have to be made. Yeah. To visit before. Yeah, this is mainly for login. And also, I think get trips. We do the same. Yeah, we get this get trips. But this is not enough. Yeah. To build this in ternary and also not enough to solve pin, let's say, and also not enough for shoulder invoices. So, I mean, Markus also, for the board to completely maybe not use, maybe gets travels because, for example, because I think this is just a small, like.
[09:56:59] **Other**: Data, let's say. But of course for the short feature access to Salesforce, to API and there's like the main source of everything of this. But, yeah, this is, I think this can be decided in the actually sprint then.
[09:57:18] **Other**: Let's say about. Yeah, just the apis mentioned CM, Salesforce, gecko API, dashboard for the trip enrichment. And this is for S3 Jason. And all of us together, let's say this is then the big function, which.
[09:57:37] **Other**: Do different things and pass the data in this way so I can display it. Yeah.
[09:57:45] **Other**: And this, the daily approach. Yeah. But everything on this one is maybe it's, say, breaking down one big type of function. And then that's it.
[09:57:57] **Other**: And with that say smaller things to display or something there or in voices, all of this. But I think it's very straightforward.
[09:58:09] **Other**: To do this.
[09:58:12] **Other**: Yeah. Maybe have some more important things here. I mean, I also looked a bit in the CFA project. I mean, if I can, if I have time to continue now, I could just share my thoughts and say, I think we are thinking the past also was used fastly five and three. But I think I heard this out of scope and not anymore the good approach to this already, but maybe correct. Yeah. So for me, I think the right way is to go for the server side actions. Yeah. And when I saw here already some libraries, I was just at my functions there to review and that's it. And then after this backend things. Yeah. I mean, we can talk about the front end, of course. And for me also, not sure I should wait.
[09:58:58] **Other**: Until the designs are ready or I just do, let's say my things. I mean, I also have, like, okay, what about ready? Maybe something. Yeah, like you see it for some data putters behind, behind picture flex, let's say. Yeah. So just not visible customer, but other people already. And then after this antibodies, that's already this one can be reflected or whatever. And also this refactoring also has also been maybe does not my part, let's say. But other team has more focus on front end.
[09:59:37] **Other**: And. Yeah.
[09:59:39] **Other**: Yeah.
[09:59:39] **You**: Thank you Markus, you already have some options in mind good I think let's hear what Karolina and Jakob have on their minds and maybe they can.
[09:59:40] **Other**: Thanks.
[09:59:51] **You**: Bring even more options here and then we can discuss like which is like more meaningful.
[09:59:59] **Other**: Good.
[10:00:02] **Other**: I can start like why I was saying, yeah, I wouldn't recommend to start already with the front end. There are two things that I think it's great that you also have your components in the storybook, but I think I would really like us if we putting it in the user portal to actually bring it all to fusion or at least to see if a and not use yet another different components library in CFA that, yeah, we don't own or we don't know. Right. So that would be the first thing. But I think like, just to take also a step back before we even do all those features that support portal right now offers to the users.
[10:00:32] **Other**: I think we first need to build a trip within the user portal here. It's then the question like, is it us building it or is it Markus then building it? And she also has the knowledge I didn't really mind.
[10:00:42] **Other**: But the way I see it, at least.
[10:00:45] **Other**: I think from also what I understood from product and design in my team.
[10:00:49] **Other**: Basically what we want to do, we want to build the trims and then enrich it with the same data that you, Markus had like documents and invoices.
[10:00:59] **Other**: In this, in this case. I also have a question if we really have to call gecko. Like, I wonder how much more information is there in Grow that we cannot get in the trip this, right? So this is something I don't know and I would like to maybe, maybe get. I don't know if Markus, you have this data or we just have to look in the code because that would also be nice to, to just, you know, understand what is, what is the need.
[10:01:19] **Other**: So the way I see it, like first we have to build a trivis.
[10:01:23] **Other**: And this is pretty straightforward because it's basically exactly what Markus suggested. We're just going to have a server side call, get the trip with JSON, map it into whatever new design we're getting. So, yeah, I also don't know how it will look like.
[10:01:37] **Other**: And then once this is done, I think we can start enriching things because we have this idea that maybe we will have two versions of triplets that will be very similar, but one will you will be able to see when you're logged in.
[10:01:48] **Other**: And then we show you more details. Also invoices like your names and stuff like this. And then we have like the trivis that you can see without the login and then we strip it with from all this confidential or like, you know, private data. So I think then this, what you were showing us would belong into this trip is once you logged in.
[10:02:08] **Other**: And for me, then the, to my, too many questions are.
[10:02:13] **Other**: Do we want to really add connection to Salesforce directly from CFA? I'm not happy about that for sure.
[10:02:20] **Other**: And this is where I would then ask, does it make sense to put it in CM as a proxy because this is where we get anyway?
[10:02:26] **Other**: A lot of details doesn't belong to like, like we mentioned, right on Monday. Does it belong to customer? Does it rather belong to the trip? I don't know.
[10:02:33] **Other**: That's something we need to discuss.
[10:02:36] **Other**: And then documents dashboard. I think you also mentioned this is already also something we can easily call them from cfa. Sounds good to me. I don't know if it needs an extra authentication.
[10:02:46] **Other**: Then. Yeah, that's just something to. To look into.
[10:02:49] **Other**: Yeah. So that's more or less.
[10:02:53] **Other**: My thoughts for now.
[10:02:55] **Other**: Yeah, agree on that. And there's an extra variable that I will add in these, which is we don't have to take it immediately, but at least we have to keep it in mind, which is the content that we are taking from the Json from trip views.
[10:03:11] **Other**: Should not be really taken from there. It should be taken from the content team. So the images ideally and everything should be taken from the original source of truth.
[10:03:23] **Other**: So what we are moving in the future is that this Json will die at some point in the future. And ideally, like what we could have is like an aggregation layer where it has to live probably like that's a different conversation, but this aggregation layer will have to.
[10:03:41] **Other**: Get probably this connection that it's already having with sales force for the invoices with the document dashboard for vouchers and other documents.
[10:03:50] **Other**: We get, unfortunately, because there are also some documents there.
[10:03:55] **Other**: But, and also for the trip, but in the future also the, the content itself, it should be fetched from the.
[10:04:03] **Other**: From the original source of truth, basically.
[10:04:08] **Other**: One question to this, which one is this? Is this.
[10:04:12] **Other**: All our sort of truth for this content, like content catalog, I guess.
[10:04:18] **Other**: Like the images and descriptions. So I think it's at least for now descriptions, it's elephant.
[10:04:24] **You**: Yeah it should be content catalog.
[10:04:26] **Other**: But should be content catalog. Yes.
[10:04:28] **Other**: And then we have also, like here, Alexei, that he would tell us, like, when these things are ready, then we can use them.
[10:04:35] **Other**: But, but, yeah, like in the meantime, we can use this, this trip with Jason. But keep in mind that that will die at some point. Like, it's not gonna die immediately. But if we can build this cleaner, it's better.
[10:04:50] **Other**: But doesn't it have to stay alive?
[10:04:52] **Other**: Until the true planner 2.0 is there anyway?
[10:04:55] **Other**: So, like, I don't know if it makes sense to already talk about it right now. It feels like it's more long term.
[10:05:02] **Other**: Yeah, it's gonna stay for some time anyway.
[10:05:05] **Other**: But.
[10:05:06] **Other**: It's not on the content catalog, right? It's more also like all the other data that chip planner has to give us.
[10:05:12] **Other**: So unless we have this, I don't think we can replace triplets.
[10:05:16] **Other**: But there's other information that will be probably also taken in the future only from the booking platform.
[10:05:23] **Other**: So that's also information, like the bookings, status and other information will be taken from the booking platform and not from get-go.
[10:05:35] **Other**: But now we are focusing on migrating this rather in cycle to rise.
[10:05:39] **Other**: So it's just, I, I get it. Like, it's good to think about it for sure, but I feel like it's more long-term plan. Yeah. Maybe we need to.
[10:05:47] **Other**: Like, one short-term thing, one a bit more long term. Yeah. Like a future refactoring. Yeah. Yeah. Because I feel like right now, when you think about it, like, just pragmatically, we have triplets, we have documents, we have invoices.
[10:06:00] **Other**: And that's those three things, right? Like maybe gecko, but, yeah, again, I don't know if it's really necessary. So that's something to check.
[10:06:07] **Other**: So in theory, it's free endpoints to build this page, so it's not the worst, I would say, to not have this aggregation layer yet.
[10:06:15] **Other**: And maybe think about it as an extra. But I don't know. I'm open also to, to be challenged here.
[10:06:21] **Other**: Okay. Then I'm not completely clear because then in any case, like, what I'm thinking is, like, we can have, like, a first version of this aggregation layer, which is the rebuild of this backend that lambus has. So this is kind of like the beginning of it.
[10:06:36] **Other**: And ideally, like, because also, like, what's the future picture of this?
[10:06:40] **Other**: That they mobile application?
[10:06:42] **Other**: And the CFA?
[10:06:44] **Other**: Both uses this new backend?
[10:06:47] **Other**: So both should move to that back end.
[10:06:51] **Other**: Which backend.
[10:06:53] **Other**: The backend that doesn't exist.
[10:06:55] **Other**: Okay.
[10:06:56] **Other**: So the migration. So. So the migration of this logic.
[10:07:02] **Other**: That lambus has already built for enriching. So to get the data from get go and to enrich it.
[10:07:11] **Other**: So essentially something like a trip with service or whatever we call it in the future. I don't know what it is.
[10:07:17] **Other**: Yeah.
[10:07:22] **You**: What are the actual options and what's the difference between them? I don't catch this so right now we have this logic aggregates something right and how different it is from what Silvia is describing.
[10:07:37] **Other**: So it's. The difference is that some elements are for the long term.
[10:07:45] **Other**: And what I'm saying is that we should build an endpoint that could be used not only by us in the new trip with migration, but also in the future should be scalable or should be used also by the mobile application.
[10:08:01] **Other**: Because part of it, it will come with the proper authentication. Like there are like many other elements that might come on that.
[10:08:09] **Other**: And that will need to change.
[10:08:12] **You**: But do we do we know.
[10:08:12] **Other**: But.
[10:08:14] **You**: What's gonna be needed and how it's gonna look like and.
[10:08:17] **You**: Like.
[10:08:19] **You**: So right now this this is like a real use case of how it can be used right so it's in theory can just form the future needs.
[10:08:29] **You**: And evolve into it right or we can.
[10:08:33] **You**: Try to get the future and design how it may look in the future.
[10:08:38] **You**: And if it's gonna be different from what it is right now.
[10:08:44] **You**: I guess.
[10:08:46] **You**: All right yeah Markus.
[10:08:48] **You**: What do you think?
[10:08:50] **Other**: Yeah, I mean, like a central place which we also then be mobile app with a mobile app. You mean as the current Klein app.
[10:09:03] **Other**: Or mean? Okay. I mean, back on there. I mean, what numbers have a very tightly coupled to the numbers, so I would say. And this is again. I mean, this is again another layer, let's say. And this is also like a white level. And this will be, I think, a very, very difficult to do this.
[10:09:29] **Other**: To use for the mobile app then the same endpoint either right now just mentioned this because of this.
[10:09:40] **Other**: Patient we have in numbers is very tightly coupled to the level server.
[10:09:46] **Other**: This is a very important there to understand.
[10:09:50] **Other**: Yeah. Let's say for you. I mean, for future, let's say we have like a few more questions. Silvia, like future things already. Maybe you can just mention it and then think about this. For example, also now we have sometimes these problems that we have lambda server, we have to have this property, we have no association and maybe other more like typescript applications and they also interacting with apis. Various also in Del made also a good chance now to create like a shared package for types, let's say, mean also in this group already for the npm js. I think this fuel news already very out can be shared to reference to the projects. I think it's a very good maybe selling point now or maybe industrial really like a follow up after maybe an MVP to have like the shared package for all typescript types in general because always getting things and things are going to break that say anything for the future. Also this could be very helpful to have this.
[10:10:52] **Other**: And then in general, I mean it was 10 like for 34 sprints in general. And then some questions for me now as a hubo candy sprints. Let's say okay we also want to know maybe first back and focus and then step by step in the front end things. But this of course has to be planned. I mean I have.
[10:11:10] **Other**: Knowledge, let's say what for example have to be done there. I can also, of course, support there. But yeah, for me this is not clear yet. And also when it starts.
[10:11:20] **Other**: And also who will review, let's say because I heard back end persons coming soon, but he is focused on ruby. But this thing will not help to review like back and things for me also just like typescript and I think maybe also don't have to be in really deep backends developer for these are my questions now but this is maybe.
[10:11:54] **Other**: Can be answered in the terms right.
[10:11:59] **Other**: Why do we have to stay now which language we are using for something is that really so important.
[10:12:10] **Other**: Basically it will determine who can build it. So theoretically we have capacity for Markus to build it. It will build an untype script, but he doesn't know ruby.
[10:12:20] **Other**: I mean I would again take a step back and really talk about do we really need a new service for it? Because as you said if mobile app cannot use it and the only consumer is CFA.
[10:12:31] **Other**: And in the end the page is free endpoints.
[10:12:34] **Other**: Do we really need a microservice for this?
[10:12:36] **Other**: Or new API, right? That somebody has to maintain because I mean writing the backend sure we can also probably review especially if it's again tRPC and pastify things that we already know.
[10:12:48] **Other**: I think it's more about who will maintain it later, right? Like the main reason we also don't want our BFF is that it's just a pain to keep it deployed, keep it always in sync, make sure nothing breaks. So we have those types, the schema like, you know checks to make sure nothing broke.
[10:13:03] **Other**: So I think this is more a concern for me here. Like sure anyone can we can build this backend anywhere and like if Markus has time great.
[10:13:13] **Other**: But it's more a question of like yeah who's gonna then own it and take care of it.
[10:13:18] **Other**: So for me this is then and is it really worth it at this point? I don't really know like it looks to me we just need invoices and documents and triplets, right? And maybe get right. So okay in the worst case it's four endpoints.
[10:13:31] **Other**: I don't know if it's so bad.
[10:13:37] **Other**: I don't know what you guys think like we can also do the all those calls on the server side. I mean somewhere the code has to live.
[10:13:46] **Other**: Somewhere. This code has to.
[10:13:50] **Other**: So you say you're saying it doesn't have to be a new service instead it could live where?
[10:13:57] **Other**: In CFA.
[10:13:58] **Other**: We could have like a server side course because also the same yeah they also don't have to happen all at once. You can just get trip visit start painting it to the user and then, you know, get all the data because it shows a bit later in the page as well right like there are things we can do.
[10:14:17] **Other**: Yeah the only thing I don't want to do I don't want to connect to salesforce from CFA. So that's where I'm asking where can we put the invoices.
[10:14:24] **Other**: But if we say it doesn't belong to CM then yes maybe we need a new service and then let's put everything there.
[10:14:29] **Other**: But I think this is the main question we need to answer.
[10:14:33] **Other**: But maybe.
[10:14:38] **Other**: We can flesh out the options.
[10:14:40] **Other**: No you go you go ahead.
[10:14:42] **Other**: We can write the options and then compare the trade-offs especially like on what does it mean in maintenance and also what does it mean in complexity too because also like we have kind of like a direction from the company like try to avoid microservices and build things on the domain.
[10:15:02] **Other**: That's one thing but on the other hand.
[10:15:06] **Other**: Even though right now we don't want the mobile app to use it because of the dependencies that it has.
[10:15:15] **Other**: Maybe we will move on that direction too. So maybe we'll tie already this.
[10:15:21] **Other**: Into less reusability. So for example if you want to use these for.
[10:15:27] **Other**: Something else like you want to have an AI agent I'm just linking on the future if it's not a microservices like it's not a service that can be reused. Like what are we already denied for the future or like where are the trade-offs? But that's.
[10:15:45] **Other**: Just my thing. Now you can go.
[10:15:51] **Other**: Yeah I mean setting domain.
[10:15:55] **Other**: Things boundaries aside. Of course.
[10:16:02] **Other**: A important aspect.
[10:16:06] **Other**: The thing is right now I'm talking about invoice. I think naturally for me it would feel natural to just put that in CM.
[10:16:17] **Other**: Also has now.
[10:16:20] **Other**: All this customer salesforce connection.
[10:16:23] **Other**: Flights passengers.
[10:16:27] **Other**: Something else that I do not recall right now.
[10:16:32] **Other**: For me it feels natural to put that also in CN.
[10:16:37] **Other**: And about other than that I would agree with Karolina that the other things trip this whatever it was.
[10:16:46] **Other**: Feels okay to me to put that into the CFA backend layer.
[10:16:56] **Other**: So agree I mean again maybe in the future when we move away from triplets and then we see okay it's not just one JSON but then we need to call booking platform.
[10:17:05] **Other**: Trip planner 2.0 something content.
[10:17:08] **Other**: Blah blah blah right and then it actually becomes 10 endpoints instead of one JSON then maybe this would be the point to think about a service.
[10:17:15] **Other**: I'm just thinking for now it feels a little bit.
[10:17:19] **Other**: Maybe.
[10:17:20] **Other**: Overblown but I don't know.
[10:17:21] **You**: For now we consider this is like this logic has only one use case we don't have any other use cases so it's kind of view specific logic that only needed for this view so we don't need to over complicate it to invent future uses if we have like at least second use.
[10:17:39] **You**: In place then we can build some something reusable and refactor things but yeah if we kind of go simpler routes and say it's like.
[10:17:51] **You**: Few specific then it's kind of just a simple solution.
[10:17:56] **You**: Right.
[10:18:02] **Other**: Agree but we should document the decision because I know that probably robert will push back on this.
[10:18:08] **You**: Yeah Robert definitely asked me to write down our decision after this call so since Markus wrote a bunch of documents and kind of has kind of written kind of his point of view already maybe Karolina Silvia Jakob maybe you can.
[10:18:29] **You**: Write down these two options because you have more context into it and kind of then we have this architectural decision record.
[10:18:41] **You**: Migration logic and backend for this new service and at least we have this document trail here.
[10:18:51] **You**: Work for you.
[10:18:56] **Other**: One next week sorry yeah okay something of his faces and you have a sprint thing okay how much I need for this to migrate now yeah this backend things let's say the views to cfa best of course better stay in the same like language of course I mean it's a little forward to migrate now from next S to next.js and but precision for example now goes to backend services or Gran race when this will blow very much the sprint, let's say anything, although in this point we have to do this because we want to have some features for the customer side and maybe have this feature oil ready some there. So this is my vision let's say won't bring much effect currently to a customer if the certain cause of the direction okay no we don't go on the server side functions anymore in TypeScript the same feature.
[10:20:09] **Other**: The customer will see but this maybe takes when again double time just to mention this.
[10:20:17] **Other**: Okay.
[10:20:19] **You**: Yeah I think this is like one of the factors when we have these two options in documented right we have like pros and cons and this is like one of the factors for why we make this decision to make it a simpler route.
[10:20:36] **Other**: About documenting I just cannot do anything this or next week I'm still pushing the user portal actually and I'm writing the release plan.
[10:20:45] **Other**: So I don't want to like commit to another thing that I would probably not find times more.
[10:20:49] **You**: Okay.
[10:20:49] **Other**: I can help and review and like add my comments and thoughts but I don't want to like fully structure it sorry.
[10:20:54] **You**: Fair point fair point.
[10:20:56] **You**: Yeah yeah Silvia maybe.
[10:21:00] **You**: We can do it together.
[10:21:04] **Other**: You also have limited time and like after like the like we have a separate ratio about maybe posting a project that it's ongoing and I really need to be on on that so it's it's complex and we're probably.
[10:21:19] **You**: Yeah no one have time for docum.
[10:21:19] **Other**: Yeah.
[10:21:20] **Other**: But I think it's something.
[10:21:21] **You**: Ents.
[10:21:23] **Other**: Yeah like the meeting of the 27th we will not have this information it's just like.
[10:21:30] **Other**: We need it for cycle too right.
[10:21:33] **Other**: Because yeah then what do we work on in foxes if you don't have an agreement here?
[10:21:39] **Other**: I think it's extremely important for our roadmap Silvia so I don't know maybe we need to I'm not saying we have to have a food decision back then yeah I should only work my time working here I cannot spend more of my nights working on this.
[10:21:59] **You**: All right I think.
[10:22:01] **You**: If you can do it I can do like very poor job very schematic one.
[10:22:09] **Other**: I can then help you maybe enrich it a bit.
[10:22:10] **You**: Yeah just we take it offline.
[10:22:14] **You**: So at least we have nodes from this call.
[10:22:18] **You**: I'll use the power of ai.
[10:22:20] **You**: To help us here so yeah.
[10:22:24] **Other**: So just to quickly summarize this decision that you want which one did we actually take.
[10:22:33] **Other**: And what are the options the options are own service and what Karolina and I suggested no.
[10:22:41] **You**: One option is like everything in ruby like more kind of aggregated Ruby service right this is one.
[10:22:50] **You**: And second one putting salesforce part into cm and the rest stays with front end right that's the second one.
[10:22:51] **Other**: So.
[10:22:59] **Other**: Yeah I would even maybe say.
[10:23:01] **Other**: Like sorry would also be a new service in I don't know TypeScript exactly so I would rather keep two options without mentioning languages but just like okay this is like all handled with CFA only right now or extra service and depending on which one yeah Robert or whoever is happy then we can maybe agree who has time to write this new service right because again then it's a question of who owned it moving on and yeah who will be using it as well?
[10:23:34] **Other**: And who has to write then right waste time.
[10:23:36] **You**: Yeah first of all we need to be happy with it right so it's our job to sell it to robot so he's like okay you put legwork you thought about options with your choice so this is our our goal with this one.
[10:23:37] **Other**: Yeah.
[10:23:53] **You**: All right then let's try to document something I'll share some summary and we can maybe put some meat in the dock.
[10:24:05] **You**: Perfect.
[10:24:06] **You**: Good all right.
[10:24:06] **Other**: Thanks.
[10:24:07] **Other**: I gotta go.
[10:24:09] **Other**: I mean I would sometimes to work on this Alexei tomorrow but yeah.
[10:24:14] **You**: Yeah tomorrow might be actually possible.
[10:24:18] **You**: Perfect all right thank you everyone.
