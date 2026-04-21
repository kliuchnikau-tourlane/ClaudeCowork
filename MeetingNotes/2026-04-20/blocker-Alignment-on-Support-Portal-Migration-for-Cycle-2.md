# [blocker] Alignment on Support Portal Migration for Cycle 2

**Date**: 2026-04-20
**Time**: 14:30 - 15:50
**Location**: PR-20 HQ-2-China (8) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- silvia.delatorre@tourlane.com
- kristina.lamza@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- magdalena.kaaden@tourlane.com
- karolina.grabowska@tourlane.com
- PR-20 HQ-2-China (8) [Camera, Google Meet, Mic, TV, Tablet]
- belen.beltran@tourlane.com
- markus.klemann-ext@tourlane.com
- shubham.verma@tourlane.com
- jakob.pupke@tourlane.com

## Transcript

[12:29:14] **You**: Set aside himself also defined with soil point because this is very supportive. There's a button there, whatever function you have to save some stuff, all of these things I think can you just one developer for himself and live in this is already done like a medium ticket let's say can be maybe like discussed or maybe somewhere in the ticket itself say and for large ticket then maybe we need this whole like meeting talk about something so break things more down and then maybe it's faster also sometimes because we need to discuss maybe so much one ticket and half our time this is already maybe 50% of augmentation.
[12:30:07] **You**: Is it also possible to.
[12:30:10] **You**: Endure to kind of like.
[12:30:14] **You**: Auto close tickets when a specific time has passed.
[12:30:18] **You**: Maybe because like if a ticket was around for let's say 180 days then it's probably so deprioritized and not so important.
[12:30:40] **You**: As you.
[12:30:42] **You**: Okay so what.
[12:30:46] **You**: Again.
[12:30:48] **You**: But usually I know there's usually there's pushback from the engineers I don't feel.
[12:30:55] **You**: Yeah but then COVID and then they reopen this right.
[12:31:04] **You**: I don't remember that no maybe no I think last time when I did it it was not that much.
[12:31:11] **You**: And it was from previous experiences that has done but do we agree on.
[12:31:15] **You**: This.
[12:31:17] **You**: Four topics no wait I think this is quite I mean what is small I still see the advantage of discussing I know you assign you to move in Kristina to move to Male.
[12:31:28] **You**: Did we unlock already or check if I don't know so I don't have a lot of meetings during the week.
[12:31:36] **You**: So Monday sounds fun fine to me I think Sasha Markus brought it up so I think as humans also find the zone mean Aleksei Alia does not participate in five minutes but I'm fine yeah.
[12:31:54] **You**: Well it's not separated it's like you can tend for yourself already prepare yourself I know Monday it's the it's a meeting day so I do no more going to be done exactly yeah and if you only problem it's Monday I see yeah we stay in here right the only problem this Monday feels it's like I assume that tickets will be provided with this pre-exignment on Friday I feel no one will look into them and you'll come to Monday not prepared on Thurs.
[12:32:28] **You**: Day that's of course yeah.
[12:32:34] **You**: This is great.
[12:32:35] **You**: Oops what's the 160 you have knowledge about the focus guy all of the guy that they were I think so I don't know the name as a room back in engineer so Markus maybe you want to maybe you can use in rubian to discover but let me think of this room at least I need to look into I have the same question sorry and he agreed that small tickets will be self-estimated by the author right what is it what is more.
[12:33:18] **You**: Self estimated between one and two circles one and five one in three everything between right let's do one and three what's the one and two three is quite small yeah but we sometimes we're discussing three and the solution is not clear I agree I think anything could wear solving the ticket is easier than writing the ticket itself into the user portal.
[12:33:44] **You**: Sorry sorry sorry that somehow makes stop talking we're not we shouldn't hear.
[12:33:55] **You**: Could.
[12:34:02] **You**: Hell.
[12:34:02] **You**: O.
[12:34:03] **You**: Hello hello.
[12:34:07] **You**: Hi Markus that's you right never met you yet yes I mean no I think it was some months ago here for today was no you know being in the office.
[12:34:27] **You**: Okay thanks for joining.
[12:34:31] **You**: On on a bit short notice from Friday to Monday.
[12:34:36] **You**: But well we will manage to do it so I can share my screen.
[12:34:42] **You**: Actually I need to leave in one hour but that would not be a problem.
[12:34:52] **You**: Yes I have.
[12:34:52] **You**: Kids due to today I.
[12:34:53] **You**: Cannot stay.
[12:34:54] **You**: Over.
[12:35:00] **You**: Okay so why are we here I try to because I also need to structure my thought so I just was I was just adding some.
[12:35:07] **You**: Slice.
[12:35:09] **You**: I think everyone is I mean I hope everyone is aware of the topic not sure how much was shared already before but at least you know the support portal that in the past Markus and I mean it was like owned by or it is still more or less so that is external or external engineering company.
[12:35:30] **You**: And now the idea is to move this to.
[12:35:34] **You**: Because from a product perspective we went through okay how do we envision how should customer access their user portal what is kind of the vision in terms of communication and at some point we just decided okay it's kind of one unified experience that we see in the vision which is the user portal indeed.
[12:35:54] **You**: But we also know that there is a lot of functionality already in the support portal behind the login which most likely fits closer to the user portal.
[12:36:04] **You**: And yeah we will come to that data so there are some constraints why we then decided okay there were like certain parts that at some point need to be migrated to the current infrastructure of the user portal.
[12:36:17] **You**: And then Silvia set up this session for today I think from my perspective it's only like a kickoff because I feel we cannot solve a lot of questions so it's maybe collecting questions challenging things or solutions I don't know sharing some concerns and then maybe we all.
[12:36:38] **You**: Weave and management need to go back and like trying to find answers to those questions and then I think we can really work into like start with technical solution design for example.
[12:36:49] **You**: So the agenda for today there's a short info in terms of what is the problem and why we are coming from then I would like to start with some high level like just a high level overview about the support portal so some use cases because I'm not sure how well where you are so I know I had a session with Shubham already on Friday but I think for the rest it's it's also kind of interesting and important to see.
[12:37:15] **You**: And then Markus was that nice I mean I didn't update you before actually but so there are two so Markus already created quite some documentation about what like how currently the infrastructure is how the architecture is looking like and then I aligned with Alexei okay what would be most beneficial for this round and we agreed I think at first point only the API integrations would be interesting and then also kind of everything around this phase one. So we decided let's say to keep it shorter so let's see if 20 minutes is enough because then we would like to open the room more for questions and like challenges, concerns everything that we essentially can take then to discuss over the week. Yeah and this API integration is basically what kind of contributes to this backend topic and backend topic was like the most unclear to us so it worth having focus on it today.
[12:38:11] **You**: And I mean anyhow she in the conference pitch and everyone can read through it at comments whatever but I think for the session it's important that we like rather align high level and really kind of look in high level capacity I don't know as mentioned questions.
[12:38:27] **You**: Bottlenecks.
[12:38:29] **You**: Okay.
[12:38:31] **You**: Then let's start with why we are doing it.
[12:38:36] **You**: Okay I think Kristina already covered the main topic right we have two systems and historically support portal accumulated a bunch of things that we features that we actually want to see in the new user portal instead, right? And we'd like to have like only one place where these things stay and it was decided to move this logic from support portal into user portal.
[12:39:06] **You**: And support portal will stay only with support specific things.
[12:39:12] **You**: The main issue here, the technical stack is very different, not very different but quite different and it will not be just move code from one place to another place but it's going to be like more of a, okay we have this system that is built.
[12:39:31] **You**: Inside Lambeth repository on top of custom view components with KnuxJS and we want to move it into Tourlane repository with how Tourlane does things and how Tolane wants to support these codes in the future, right? So we need to do a large migration effort here and this is what we are planning for the next two months and yeah I think today we're starting from just high level overview of what exactly we have on the support portal what are what kind of these things going to be moved and what's behind of them, what kind of data sits behind them, what's the backend for these views and how this kind of.
[12:40:28] **You**: Shape our future discussions about backends.
[12:40:31] **You**: For the front.
[12:40:33] **You**: Right, I think.
[12:40:35] **You**: That's rough summary.
[12:40:36] **You**: Back to you.
[12:40:37] **You**: Thank you.
[12:40:39] **You**: Okay.
[12:40:41] **You**: Then also why kind of do we need it? I mean it's kind of repetitive. So I think one is definitely the ownership conflict because as we mentioned in the like future product vision of the user portal we see a lot of overlaps with capabilities that we already have in the support portal.
[12:41:00] **You**: Then I mean your IUXY the current support model is at least not in the design specs in the design view as the website is and also the user portal.
[12:41:11] **You**: We also know that if we kind of keep it separated and we will invest more time to work on features and more capabilities. So for example everything around communication with the customer not sure how this will look like in the user portal but there's also currently communication with customers with the support partner so we know that this will kind of add double costs in the end because if so then we would need to add it to those two products which in the final vision we don't see that this will happen in two products but rather like one single contact for customers.
[12:41:43] **You**: And then I mean technically why this all was also popping up I mean that also is coming from the management and from the leadership round that currently it's the code base is owned by Lamz there were also some kind of ideas that were discussed before how to kind of address this challenge. But I think now the final decision wasn't even taking I don't know but at least this was the proposal to take it to migrate it.
[12:42:10] **You**: Okay.
[12:42:11] **You**: Then why now I mean it's it's only like one week.
[12:42:16] **You**: Actually my owners are asked to add all the topics by end of tomorrow. So let's see I think for this one we will just add a placeholder and then we will see where we will end.
[12:42:29] **You**: And yeah I think like overall.
[12:42:31] **You**: Just with the user portal moving on with like a clearer picture of how this will look like in the future it's also kind of a question of the ownership. So what does make sense being added to the support portal now while we maybe already know okay this functionality will be covered in the user portal at some point in time.
[12:42:52] **You**: Questions to this like high level introduction.
[12:42:57] **You**: Okay I think also Karolina.
[12:43:00] **You**: You are.
[12:43:00] **You**: Maybe more or less.
[12:43:02] **You**: Aligned and involved already.
[12:43:03] **You**: So then I decided maybe we can just start with a business use cases just like high level because then at least I feel it's also easier to understand when Markus will share a bit more insight about like the APIs and which information is pulled from which systems for what?
[12:43:19] **You**: So there's essentially two different let's say area so one is the kind of guest area where no identification is required.
[12:43:29] **You**: In the future vision we are somehow calling it help center and it's mainly a big use so it's content, it's destination content and it's also the, I call it now AI case creation because there are some AI detection that is part of the case creation itself.
[12:43:47] **You**: And then there's also the customer area where they need to log in so they need to authenticate. This is essentially what was brought live a couple of weeks ago.
[12:43:57] **You**: I mean some parts were already there so the trip summary was there before like a section for the app was there, the finance section where customers can access invoices. They see their balances so more around the payment status.
[12:44:11] **You**: And what was recently added was the post booking visualization.
[12:44:17] **You**: Which is essentially including all the information that we receive from suppliers.
[12:44:23] **You**: Including all the additional item information. So pickup times activity start times train gates, train departure nodes like a lot of information that is really required also from a customer perspective to deflate cases.
[12:44:37] **You**: That's also why we were kind of adding it to the support portal because it's kind of all the self service experience that we see in the future.
[12:44:46] **You**: So for the first one I was just adding the link to the support portal. I decided now for the german side because that has most information. The english kind of version does not have much or not that much content as the german one.
[12:45:00] **You**: So yeah on top customers can easily kind of search through the content that we have as mentioned in the beginning. It's an own kind of CMS where we are maintaining the content.
[12:45:12] **You**: Currently I'm working on this with Lucy from CSM so it's more.
[12:45:17] **You**: How to say like we are adding content at the best case there are some.
[12:45:23] **You**: Copywriters that are checking the copies but that was not really in focus of the past.
[12:45:29] **You**: Then we have some FAQ sections. So it's sorted by the topic and then there's always kind of a deeper link and some related articles from the same category.
[12:45:41] **You**: We also have it sorted by destination also by highest volume destination first.
[12:45:50] **You**: There's also this nice card that is here.
[12:45:52] **You**: We have some information about the app and kind of where to download. So also app and support portal.
[12:45:59] **You**: They are pretty time connected I would say. So there's also a lot of link outs to the support model from the app because usually this is what they do use after supply and customer confirmation phase.
[12:46:12] **You**: And then there is this kind of area where they and how they can create cases.
[12:46:19] **You**: So since now five months we put a lot of effort in. So since December to move customers to the support portal like previously they could always just send an email to the service at email address.
[12:46:30] **You**: It's not really structured. It was not really I mean it was not easy to follow.
[12:46:34] **You**: They could essentially send everything.
[12:46:36] **You**: So now what we are doing they need to select the topic and then based on the topic there are several flows that we trigger. So for example if it's a modification then there is an AI chat that is starting where we try to collect as many information as possible. So that's also kind of tied to this deflection milestone that we have.
[12:46:58] **You**: Also to speed up the time for agents that they work on cases so that they have all the information already before.
[12:47:04] **You**: And for example.
[12:47:07] **You**: I don't.
[12:47:08] **You**: Remember what was it for complaint.
[12:47:14] **You**: There's like if if the customer is asking for a refund for example then there's directly the information.
[12:47:21] **You**: For example.
[12:47:24] **You**: Adding the Iban and the account information. So just that you kind of see you can also click through it later but there are different flows based on.
[12:47:34] **You**: The selection of the topic. Also this whole topic selection will change until end of the cycle hopefully. And because we see that customers are not selecting the right topic and what is currently happening every topic that is created here is also a case category in Salesforce. So there's a one to one matching.
[12:47:53] **You**: And finance is doing all the planning all the financial forecasting based on those case categories and based on the share of the cases.
[12:48:01] **You**: Which is simply wrong.
[12:48:03] **You**: So they have like I don't know 30% general inquiry which is not correct. So we will try to solve this.
[12:48:10] **You**: So that's for the guest area and that will most likely remain in the current setup of the support project.
[12:48:19] **You**: And then we have the customer authenticated area and this is most likely also the capabilities and the function that will move to the support button.
[12:48:28] **You**: So there's, I mean there's also staging and we can also check it on staging but there's this new nice admin view that we have added for the customer service agents where they can just select every trip that they are working on and they will essentially see the same as what the customer sees.
[12:48:47] **You**: And that was a huge kind of improvement also for them because as you know for the app they need to find the pin code first then they need to take their own private mobile and log into all the itineraries and trips to kind of check what the customer sees. So now they will exactly seem the same information here in this view.
[12:49:05] **You**: So on top there is the strip summary. This is also where tripvis is linked. There's an information about the app, the pin code is here.
[12:49:14] **You**: This is kind of the invoice finance section. In that case there's just one invoice because it's already paid.
[12:49:21] **You**: But usually if there's flights then also the flight invoice is added here to the right. If there's an open balance that can be seen if something was already paid that can be seen. So it's most likely transparency about the invoice and payment status.
[12:49:37] **You**: What is and then what is new, what just went live recently is everything around the trip visualization and the documents. So what is now here is the documents from drip this. So I think it's exactly the same.
[12:49:48] **You**: Right and the ones that we were adding from documents dashboard automatically and uploading it to trip.
[12:49:53] **You**: This.
[12:49:54] **You**: In that case it's only the one from triplets. So no supplier documents.
[12:49:59] **You**: But yeah.
[12:50:01] **You**: And then here is the itinerary. It's like we decided to keep it lean let's say being in line with what customers see in the app. But the most important thing is that as I mentioned before we currently enrich it with all the information that we have from the post booking processes. So from the documents that we receive from the invoices that we receive. So we try to extract as many information as possible. Adding it to the item and then using it to display this information for the customer.
[12:50:32] **You**: And that's it mainly.
[12:50:39] **You**: Coming back to.
[12:50:41] **You**: This one here.
[12:50:42] **You**: So if there are no questions then maybe Markus I would propose.
[12:50:49] **You**: We are having a look at those two points and then maybe there are already some questions.
[12:50:54] **You**: That we.
[12:50:55] **You**: Can.
[12:50:55] **You**: Discuss.
[12:50:57] **You**: Of course like high level overview about these things. I mean there's everything let's say the main points are written down here. I did this last Friday on hookah or just a couple of hours but it saves us completely free of some smaller issues that say because I had to live this short time here. So we already have an overview of what we have for the system.
[12:51:29] **You**: Maybe it's easy when you just obey the image in the top.
[12:51:35] **You**: This one has pink maybe enough to expand it a bit. What we have.
[12:51:42] **You**: Basically we have this support is the next application as it's in a Muno like very similar to CFA mole.
[12:51:57] **You**: Cule. We have this one part of this one application. This was droppy as it's a headless signal. There are some mutual trees have locked inside and putting in a FAQ data. Let's say this is seven software.
[12:52:16] **You**: And we don't handle this now in the phase one yeah because this is mainly used for the guest area for the sport side to display in the next application.
[12:52:31] **You**: So this is not part then there are whole approach which we should be able to take it first. But other part with this now the next application we're talking about.
[12:52:45] **You**: Shot before and we have this different parts. One part is when behind the login as well customer can log in there the same endpoint from.
[12:52:57] **You**: The CM.
[12:52:59] **You**: S customer management. I asked some use the same detention today on the same setup as we are sitting with the path we also had password login but I think this was discussed and if we removed it again so we have only the magic link lock in there just gonna hear from the things I think it's really not let's say to give our understanding what we have. So first one is of course login.
[12:53:29] **You**: I think there's also very straightforward. Yeah just you connected.
[12:53:37] **You**: We have a plugin page.
[12:53:40] **You**: Like waiting page here. Not that now you have to check your mailbox now this is a very basic just I pages I think we can.
[12:53:50] **You**: Click this because it's important let's say then we also have gecko also access because we fetch some data summary when the customer logs in many free paths at the top part we call it the same like spelling or we call this like trip summary.
[12:54:17] **You**: And some of these data from left side these are fetched from geckodense and from the right side this is the Tour app there's a pin code this is fetched from the number server. So APIs have to be there to show the data but I think also geckos maybe also not really needed because maybe also all of this information you can fetch from triple this to the JSON which had to be ordered when the telescope Magdalen from the migration discusses what we really need also had a short look at this project of course that there are so many of these infrastructures are already there but I think there's no yet no collection there so this for example is one IDF to add but this thing is also very straightforward.
[12:55:12] **You**: And just maybe some common words to Knuck.js I mean this is also not from many of this but there's very similar to next.js yeah it's a very straightforward although typescript and this also with the CFA project also has server side codes that say and the same as we do in the sports area so we have this next platform for the front end and we have inside we have to call some backend functions and there's no real need for the software itself to write if ICR so we can just qualify from the front end that can function a little bit down here also with typescript and module features and think also this in the CFA so negative something that can reuse and place I think these are the two parts the next part the sales force yeah this belongs more to the invoice section. There's also Kristina Shubh before as we show there's an endpoint named now but we just fetch invoice data there we display this we display pending payments in different ways I think there are maybe three to four states with the payment can have if it's completely like a finished paid or the first rate is paid or there's some credit note this is also like one component one API fetches there and also example the whole UI behalf in this mobile wasn't a storybook so maybe this is also not yet written somewhere component we have inside this moment this viewable video storybook yeah and you also click through each state of one component like in verses Vera and the invoice have five states so it's also very straight for that to click through this.
[12:57:19] **You**: And this we have almost each icon component in the system so I think after this meeting.
[12:57:29] **You**: Also the password because I think it's puzzle protected and just the variable staging on after the meeting everything is very helpful let's say the biggest part this is the passing of a triple and I think we are the source where we're busy done we had some discussions there for this feature I think this was notably.
[12:57:59] **You**: Planned let's say this comes more K more like on the fly because I said okay delivered in one sprint yeah because I know the knowledge of a business logic from the Lambda server and from the Lambda software and from there I can deliver the same feature which we have a mobile now I can deliver this in the V and I think this also was very available or is still very valuable one type of customer itself inverse also with the virtual enrichment you have from document dashboard this is the next part I will talk about soon but yeah focus now on the trim minister it was very fast done and the whole passing of this triple Jason is very similar as Lama servers doing this reason I go to live a trust and it's this is the same trip with transfers and accommodation and activities they're the same way and the others were heaviest business code logic let's say but this is also because it max yeah it's written in typescript and that we of course also know the project where I have to migrate through this next year so for me it's really straightforward and I think there's also no need for ruby as an asphodel because I think Silvia also asked me if I now will be but for me I thought normal current status now that this is not needed and I can just use logic which I have currently in postpop hotel rewrite this and also make it easier to review inside the CFA project so this is also when typescript also the same language nothing with the changes there but this yeah I think it's the heaviest part take advice at that yeah no items and bitumens to give a little bit background layer as we pass the locks because for me I'm also 50% of the front nigurine and I'm also responsible for witness dashboard we pass a lot of documents and we extract many important machines there like KBF here like activity it does tomorrow at 10 for example goes one over one and they have this information in the tokens dashboard and we can.
[13:00:43] **You**: Access this on this we have now also from the pub before this Kristin I can enrich these different states for the trip with this data from the virtuals and that's the reason we can display the mobile app and also know on the web you can display many motivations based on this extracted data so these two things I think are most valuable parts to migrate the eye I think before this is just a pin code but of course the API connection to Lambda server has to be VIR but I think it also transferred anything can be like copy paste that say maybe some more protection a bit but we have to see this and for me it was not familiar of CFA project structure where I mean I had a quick look there of course but yeah I mean this is maybe part of the first print to align where place logic.
[13:01:49] **You**: Yeah but these are mainly the API integrations oil for the.
[13:01:57] **You**: Area behind the rocket they have some more things but these things are more for the note give us like a sneak peek because this diagram here just reflects the phase one because the phase one is just sitting area but not here mentioned.
[13:02:24] **You**: What we do the moment customers writing the request when we do some stuff we are too soon just the customer answer based on the FAQ data we have and some external domains I think like we decided that we are doing just part one right so we're not just locked in part and spark just stays as is so we may kind of just focus on only on these sides of motion there's more things about this video just focus on phase one and second you go to right side a bit more yes yeah and to mention also infrastructure if you are hosting a flare as also for documents dashboard yeah so it's also the current stack also from Tourlane what is new here we host on postgres the database where the data from the system is not part here of course yeah, but just mentioned it you have postgres and we use sword base as a layer on top and there is the FAQ data stored and the customer request stored but yeah as mentioned this is not part here but you have to compete with it and to understand where we set the data it's the two of these.
[13:03:52] **You**: Yeah and I've mentioned parts there for upstairs and vector and this is also belongs much of.
[13:04:02] **You**: Guest area and they don't need this yet I think for the migration because the user can log in and see the summary invoices documents and veterinary what the right side is also sees effective data or purposes one part you have to think about if you want this if if customers logs in in the new portal if you also want to see data but I think there's also maybe not part of phase one not really data maybe you want to show there but you just mentioned it maybe yeah so we may show it right we'll see if it part of the design right but probably we should focus on all the other features not related to support portal.
[13:04:55] **You**: Kind of business domain.
[13:04:58] **You**: Okay but I think as a high overview I think that's it a more details you can see the tables if you have something like anything also saw some comments there also try to answer it.
[13:05:10] **You**: Yeah I think that is.
[13:05:13] **You**: So this one sorry you already kind of mentioned as well right as part of your.
[13:05:20] **You**: So no no need to go through this in detail no, nobody thinks you know I think it's quite.
[13:05:33] **You**: Cool.
[13:05:33] **You**: Okay.
[13:05:34] **You**: Then I mean.
[13:05:36] **You**: Time for questions yes.
[13:05:40] **You**: I don't know then I feel like I go first or no we do okay my main question was basically because like looking at the authenticated area right so the login logic logging logic something we already have you mentioned you're calling gecko API to get the information about the trips I think we might not need it because we get this information already also from cm like your travel request and all the all the details so you know what trips you have currently in planning so I guess this is something we already have new reports.
[13:06:11] **You**: And then going to the right there was the invoices so connecting to salesforce I think for me this is the main question here should it just come directly from salesforce should we build some service that we should connect to?
[13:06:25] **You**: Because this I'm not clear at all about this like also does it need to come from Salesforce do we have a different place where we store invoices as well or is it just sales force?
[13:06:35] **You**: And then the biggest part of this what you mentioned.
[13:06:39] **You**: Yeah before we even start talking about this migration is anyway something that we have to do anyway and.
[13:06:46] **You**: Our user portal right so the question is yeah is it been staying with us and then we are just enriching it with all this data like you mentioned for the document dashboard.
[13:06:57] **You**: Or is it like still two different things right but this is more for the business and design here to figure out how to taught this few few things to start if you say it's more up for business then you mean if it should be two visualizations or one.
[13:07:16] **You**: Yeah because I right now there was a four time when you log in you see this dashboard of like okay you have this one trip that is currently in planning and this trip already has like a trip details page which is a simpler triple and then we also have a link to triples right so this is where I'm thinking exactly like since you are logged in maybe it is a trim bits with more information yeah you don't have to build two different views right yeah I think I was asking I think in the future vision it's definitely just one visualization I'm just not sure how then like technically it will work but I think in best case I don't know there were like three versions for planning and then when one was confirmed then this is kind of.
[13:08:00] **You**: Up to date version and then this one gets enrichment ever we have information like more information available and then it might get bigger and bigger and more.
[13:08:08] **You**: Including more data.
[13:08:11] **You**: But technically not true back to the scriptures because you mentioned.
[13:08:19] **You**: Of course fish from the endpoint will get travel but not enough for the measure needs pick a fetch these things here north cause the states from each trip were customer health then based on this year I use gecko it was triple built each stage of a trip and that for example because of data from the dashboard we have where I have to place for example the document for each item for example the customer has a captivity on that five let's say we can assign the document directly to this day for example there so episode big part and you mentioned also before sales force I mean of course in point written and I accessed a red design source yeah this is special language there and pull out the data and I mean I can also do just one to one yeah copy it but but for first layer or something this can be discussed.
[13:09:48] **You**: Currently portal is already connected to Grade that's not the case we are connected to cm and to see I'm sorry this is connected to its own the same JSON.
[13:10:00] **You**: Markus was talking about earlier but this is not done yet migrated sorry no then I can go.
[13:10:06] **You**: Okay then sorry just to so Trip is connected to gecko.
[13:10:13] **You**: That's I think it's on gecko I don't know is it's in gekro it's like an esprit Jason right like so it's just a JSON file we fetch from.
[13:10:23] **You**: Gecko from but then like the original source is gecko or yeah I think the strip sink is generating it and then it's connected to I don't know and then it's.
[13:10:35] **You**: Three days.
[13:10:41] **You**: And sorry Jakob because I think it was connected to this one so the M is also already connected to salesforce because of the account data and everything right I guess.
[13:10:52] **You**: So I think what Markus said about this weird language that salesforce uses right you I guess you use that to fetch the invoice.
[13:11:04] **You**: Or something.
[13:11:07] **You**: We could maybe do the same in Sierra.
[13:11:11] **You**: Okay I mean the slide connection to salesforce and you can just write okay what you want to fetch from sales trip you know the customer trip you can just ask give me the data you have the sales force or salesforce has much much more.
[13:11:33] **You**: Data let's say for the future we can also list the whole customer request user has because for some of them customer support each customer sends request or sensors case between also in the future very nice to show to the customer real we request he sent before.
[13:11:58] **You**: It's not Kristina note maybe like it's something to discuss I don't know if domain wise we should put it in customer manager management or rather building a service should it come from triple on air like you know because I don't know if conceptually invoice belongs to a customer or rather to the trip but right now we don't have this so it's just something like before we start putting 7cm maybe should.
[13:12:25] **You**: Also align on this how it should be like moving on.
[13:12:29] **You**: And what are ideas either account for what was the other I don't know if it belongs to customer probably not account rather customer or like traveler right or to the trip itself so yeah these are all those things that we.
[13:12:45] **You**: Wanted to tackle also eventually when airport will have time rights to also split the because right now customer and passenger is the same.
[13:12:55] **You**: Where does the invoice data belong to yeah.
[13:12:58] **You**: So what I mean is that so now we said okay right now Markus is calling directly some place for us right like sure we could do the same in CMA fetch it or we could put it in cm but before we put it in CM I would rather discuss it because what if we in the future I don't know if it doesn't belong to the trip right so maybe we should have a different service that handles strip data.
[13:13:20] **You**: And then we call that one for that.
[13:13:23] **You**: You know like in case of invoice data that really originates from Salesforce because it's some Salesforce plugin that handles all these that prints basically the invoices and invoices the customer so the source of sales force.
[13:13:42] **You**: Yeah so I think.
[13:13:44] **You**: It's fine.
[13:13:46] **You**: Then we use some proxy maybe it's CM or maybe some other service to to fetch that data some layer between.
[13:13:55] **You**: Sorry for me as non techie what would be the answer then to use CM to.
[13:14:02] **You**: Get the invoices.
[13:14:06] **You**: Most most likely yeah or some CFA backend but most likely CM because yeah it already has this sales force integration.
[13:14:18] **You**: Makes sense that's there but see I would basically just the proxy.
[13:14:23] **You**: Like get some ID make sure this ID belongs to the customer and then purchase the connect the invoices.
[13:14:33] **You**: I mean see what store the invoice.
[13:14:36] **You**: S in some database I think.
[13:14:41] **You**: One question to this as though why decide for some functions that use.
[13:14:47] **You**: CM like a wrapper or just correct as I say I mean we're going to figure out if there are some more functions.
[13:14:56] **You**: Where have to change it in the future and have to think okay do we have to make this change of could now be and for me also having so many replasts today but understanding is also like a typescript project or this is the program right.
[13:15:24] **You**: Now let's use maybe on the shule.
[13:15:29] **You**: Yeah I mean I'm saying it doesn't have to be.
[13:15:33] **You**: CM.
[13:15:35] **You**: Can also be some CFA I don't know nuxtjs whatever it's called it's also server side right yeah of course I mean have a function on server side it's also very valuable to render some stuff faster than say or another way if the server side rendering things which was next year has has but I think these are more very.
[13:16:00] **You**: Questions I'd say I think the cannabis plant or something.
[13:16:04] **You**: And.
[13:16:08] **You**: I mean do we have also server side rendering with next gen is.
[13:16:12] **You**: So basically next year only the data of the sales of the invoice would be fetched from CM and I guess also cashed right so.
[13:16:27] **You**: I can go.
[13:16:30] **You**: Just just I wanted to mention that.
[13:16:32] **You**: Yeah we should definitely discuss it in not just.
[13:16:36] **You**: You know yeah I think it's good to have this written down so maybe it needs like we need to have another session to exactly define them what is coming from.
[13:16:46] **You**: Now?
[13:16:48] **You**: I actually wanted to like step take a step out of these very detailed discussions and just.
[13:16:55] **You**: Come back I'm also trying to follow them all discussion and get some structure in right so basically and we all know it right but basically what we're doing the support model has this post login and it has a lot of functionality in there but actually when you.
[13:17:09] **You**: Explain it right now there was even more functionality that I wasn't fully aware for example the option for the customer service agents to lock in themselves see the support portal information that is there that I think is super important.
[13:17:25] **You**: For us to also migrate over because for me the question that we all actually make available because for me the sounds then customer service agents in the future will also have to be able to log into the user portal at some point because for me.
[13:17:39] **You**: What I'm trying to understand right now is.
[13:17:42] **You**: How do we do the migration because I mean there's several things that we need to work on right there is first of all I have this big question do we actually have to migrate on the back end to our back end? I mean I understood this business or tech management request right that we own we have the code ownership etc.
[13:18:01] **You**: But so is this something that has to happen and then how will it happen? And of course and that's also why I'm just trying to get a clearer structure inside we have to for everything create designs and this is not a thing of like days of doing it.
[13:18:18] **You**: And then I need to send a question is also how do we migrate right.
[13:18:22] **You**: Because what happens or is this going to be like a functionality by functionality migration but what is the interim state of these two portals then?
[13:18:31] **You**: I'm trying to just make sure that we're not going into this.
[13:18:35] **You**: We're just migrating what's post login but then we have this we have some things available in one portal but they're not in the other anymore and what is the things we want to migrate?
[13:18:48] **You**: Maybe this is not the question for this round here right now but it's still a very important one to go into cycle to planning for me and for me it would already be super important to know exactly what is everything that is right now behind the post login that we might because right now how I feel it is we're talking a lot about the trip visualization and the invoices but even that will be.
[13:19:12] **You**: Very difficult to migrate all at once in the cycle right because.
[13:19:17] **You**: We need time to prepare the designs.
[13:19:21] **You**: And then do the migration so who's doing what also I mean it's maybe also one.
[13:19:27] **You**: Is Markus are you doing the back end migration then the foxes team doing the front end.
[13:19:34] **You**: What is our plan here?
[13:19:36] **You**: And what can be done in parallel I want to parallelize work as much as possible.
[13:19:40] **You**: But for this we need to really scope out.
[13:19:44] **You**: What exactly has to be done.
[13:19:59] **You**: About this what you said exactly maybe first because it's shorter the customer service managers this admin view do they have access to sales first they do right yeah yeah because then this is then this functionality we will have also in the user portal and the login S so this will be downloaded portal MVP so potentially it would use the same.
[13:20:23] **You**: We just have to check I don't know if they see exactly the same as the customers yes right or is there more details because that's something extra we would have to.
[13:20:33] **You**: Know.
[13:20:36] **You**: Sorry Karina just to just to understand because initially we have this you know decided but like the proposal was to keep this admin view like as part of like not migrating it also to keep the scope like more limited because we also thought okay maybe it's like fine because it does not have like it's not the main functionality and we can like potentially alter my point of data but there is already something that goes into the same direction for the user portal.
[13:21:03] **You**: So current ranking size for every account that your view has about travel crossing and anyone who has login to Salesforce can log in as a customer to their.
[13:21:13] **You**: Dealer portal. So this is don't even know that yeah that's maybe something we can tell them about I don't know between this laboratory from right because it's a count.
[13:21:26] **You**: What is your admin view? What does it exactly do? Like you log in as the customer no novice features like.
[13:21:39] **You**: Gris neck but I didn't use it. I mean I should just have this dedicated look in here for an I just fetch the same UI stuff inside there as a customer see it.
[13:21:57] **You**: S not really.
[13:22:01] **You**: Before but just can enter here a number here and then with the data and we just render the same things for UI which the customers seeing right now. This is not a real impersonate but there are also no reason to go.
[13:22:22] **You**: Yeah.
[13:22:23] **You**: So.
[13:22:23] **You**: Yeah makes sense.
[13:22:26] **You**: We can also I mean you can even in your application if you don't want to migrate it.
[13:22:32] **You**: But.
[13:22:33] **You**: But if we migrate all of the functionality to user portal and at some point deprecate whatever is behind it support portal login but then.
[13:22:43] **You**: The customer service agent needs a new viewer to see this.
[13:22:45] **You**: Right?
[13:22:46] **You**: I'm just already a bit concerned also it's a very big detail but I'm already not happy that everybody has access to salesforce can log into any user portal.
[13:22:57] **You**: Of all our customers and now we're also opening this up to the service agent.
[13:23:05] **You**: Yeah there may be as you said Kristina for now we can ignore it not tell them it's there and think about it as a phase two.
[13:23:12] **You**: Definitely fine.
[13:23:14] **You**: For us so what is the concern that they that CSM access the user portal but it would be fine if we keep our admin view let's say.
[13:23:25] **You**: Yeah I think maybe we're going into too much detail I just don't understand why how does admin view will still be valuable if that functionality doesn't live there anymore.
[13:23:36] **You**: Is just a completely different link it's just like who will maintain it and the idea was it will be made with life support portal responsibility so not with foxes so we keep it there could we maintain there if there's no function or I don't know capabilities and user portal then for sure we need to think but I think the main insight was it's not like much effort to kind of keep this in sync even if there's a new functionality and then at some point maybe in a couple of months we can see how do we like how we want to migrate it for now maybe it would be easier if we just keep it separated then it's not part of the migration.
[13:24:09] **You**: Of the initial migration and then we reassess in a couple of weeks or months.
[13:24:15] **You**: Because then we would also not have this issue of CSM can log in into the like user portal but as far as I understood it's already a problem.
[13:24:23] **You**: Like the problem will not be there after the migration it's already currently in issue.
[13:24:28] **You**: Yeah yeah I know it is okay the quick question are we all on the same page here right I just want to ask this question and we're all on the same page.
[13:24:39] **You**: That with these functionalities they were just explained to us like this overview the invoices the strip b once this is migrated into the user portal that's behind the log in view for the customer will not exist in a support portal anymore.
[13:24:53] **You**: That's the goal.
[13:24:57] **You**: But also it's fine like I think from the migration strategy or roller strategy I think it's easy because it's not like breaking the flow we can also keep it both running for a week and then we don't know decommission.
[13:25:08] **You**: Support yeah because I think yeah I think over time because again right.
[13:25:14] **You**: We might start with the trip with the visualization but only do the invoices at a later step so I want to have have both.
[13:25:30] **You**: So keeping it running and both running for some time I mean then that kind of limits us in the extent to what and how we migrate I think right so for example I saw that there are some.
[13:25:47] **You**: Databases in superstore and redis instance in I don't know so I mean do we want to keep this.
[13:25:57] **You**: In I guess this is I mean do we want to keep this there where it is because this is not the way we run databases we usually have them in AWS and I think makes sense to have everything in AWS yeah those databases they were for those things that are staying with support portal right so all the databases all the super base rights Markus they were kind of part of the bigger picture but we are not.
[13:26:27] **You**: They are not the part that we're migrating all the things that we are migrating they are just.
[13:26:33] **You**: Kind of stateless things that grab data from apis and shows it.
[13:26:40] **You**: So yeah the database CNS is like only for storing support portal things.
[13:26:47] **You**: So yeah it's out of scope for our discussion.
[13:26:51] **You**: And just one thing because I need to leave now but can you take over taking notes and questions oh no.
[13:26:59] **You**: So now back to none of your the backend migration right because I think this is actually what you're asking about also just to make sure everything that we need for the log-in user portal support part means trim this with yeah, triplets which we will anyway need to do in the user portal then it needs the documents dashboard that currently is owned by Lambos.
[13:27:25] **You**: Then this pin it's also an API from Lambos dashboard is from.
[13:27:32] **You**: Tourlane yeah so this is also just an inter point.
[13:27:39] **You**: K and then both pin have to be a connection to Lama star of which we have already of course in terms of code I can just copy over.
[13:27:57] **You**: But when you say coffee over you mean that you would put it in CFA like server side code yes migrations.
[13:28:08] **You**: No no no let's just give function I mean I had a quick look here in the cf.
[13:28:15] **You**: Next source functions here when I think also there are some structural rings like the user things and libraries yeah I just.
[13:28:26] **You**: Pressed like.
[13:28:29] **You**: Instruction there they are the new Knight.
[13:28:36] **You**: Yeah because I think that means that basically right now like we are not blocked by any backend that has to be migrated because in theory everything that you're doing like get invoice get just caught it up just transcriptic code can just be put as a server side function sure but I think there was another thing that Veronica had mentioned that she would like those backends to also migrate eventually.
[13:29:00] **You**: Right it doesn't need to block the current the force of migration.
[13:29:05] **You**: Up here I think it's a question mainly Alexei creates and clarify the something she wants to do sooner or later.
[13:29:14] **You**: Because then if we migrate this we also have to make sure we don't break the contract inside user portal simulator don't have to come back and redo that connection.
[13:29:24] **You**: Yeah this is what we are clarifying with Veronica.
[13:29:28] **You**: So the latest part that she shared with me that contract with Lambo is that we cannot just take code as is and copy it to our part so that would violate kind of code ownership and we would need to rewrite it instead and we discussed it with Markus today so this was pretty much anyways the plan for Markus to kind of not copy the things but adapt them on the fly refactor them on the fly rename them on the fly and improve them on the fly because Markus kind of also sees improvements so it won't be like copy over but rewrite we should be safe and this is like going to be managed.
[13:30:18] **You**: Inside Lama right so Markus part of Lambus and they own this kind of agreement and they will follow this as well.
[13:30:27] **You**: Just virtual point I mean the heaviest finger of all this portal is not locked in.
[13:30:35] **You**: Source code because let's say features they are getting the forms I mean we couldn't see this now yeah but there are a lot of things happening and the moment customers.
[13:30:51] **You**: Were writing a request for heavier Kabosis I mean I think I mentioned this in phase I think for free today but does this not a party so if it was known just this area takes much more longer.
[13:31:13] **You**: Time let's say to migrate and also not in real value for the customer I would say because there's no VM.
[13:31:22] **You**: Improvement this so if it was skip it for this nonfiction yeah it's like not worth time investment so it's like so much that we migrate what really we want to manage inside Tourlane and own inside Tourlane and everything else kind of stays there.
[13:31:43] **You**: Actually so.
[13:31:46] **You**: No one is sharing anymore right so let me share again.
[13:31:57] **You**: So about backend to close this topic.
[13:32:03] **You**: From what I students we had like a worry that this migration will require kind of a lot of backend work and it's kind of something that team focuses team won't be able to really support and that's why Magdalena invited Jakob.
[13:32:21] **You**: And Karolina what you mentioned it doesn't look like it's a big backend but it's rather like back and forth and just calling APIs so it won't require a big backend and your team will be able to maintain it supported or I misunderstood it.
[13:32:41] **You**: No no it's correct it's just yeah a lot of different services so yeah of course we couldn't argue at one point that maybe we should have a service like that but for now I think if we just one of my like migrated it's not a blocker.
[13:32:56] **You**: It's only been a question is it okay that we are calling external Lambos APIs right like is it something that we are all aware of that will happen.
[13:33:07] **You**: So yeah we can also think there's just one after Marriage just for the pin code yeah another pinch could be just daught in Lambus database and for the devices the fingers not storing this of course in this point but this cannot be in our feature yes just like another third party service that we get from just a code line numbers over here give me the pen for the booking number and whoever.
[13:33:57] **You**: Civilization there.
[13:34:09] **You**: Is also like one concern I have sure we can call.
[13:34:13] **You**: Salesforce directly right from CFA but again let's also add an extra authorization that's needed right that is not the customer login but actually.
[13:34:23] **You**: Tour name.
[13:34:25] **You**: Oh I guess no I'm not sure something I need to private check that's why like I think.
[13:34:31] **You**: For initial migration we can also agree we can put everything in CFA but I'm thinking having an extra layer to handle this stuff maybe is a bit better moving on.
[13:34:44] **You**: Because you know what I can see if I we already.
[13:34:49] **You**: We have this one layer of authentication which is.
[13:34:52] **You**: This customer am I authenticated and authorized to see this application right.
[13:34:57] **You**: And then I don't I don't think I would like to add more into CFA like oh now I'm calling size force but I'm a two layer I'm not a customer you know what I mean?
[13:35:06] **You**: Because I think the authorization is different right to get sales for stuff it's not a customer looking so that means that it adds more complexity to our app and this is where I would.
[13:35:17] **You**: Rather flag that it would be cooled if we are imported in CM then or somewhere else.
[13:35:24] **You**: But I don't think it's a blocker necessarily like we can initially do it like this sure.
[13:35:30] **You**: But moving on everything.
[13:35:32] **You**: Better.
[13:35:32] **You**: Maybe.
[13:35:33] **You**: To.
[13:35:33] **You**: Discuss it.
[13:35:45] **You**: We can discuss it yep.
[13:35:47] **You**: All right.
[13:35:50] **You**: My question yeah sorry who's next Jakob.
[13:35:59] **You**: I think my question hasn't been answered more or less maybe if you can go back to this image in from the beginning.
[13:36:08] **You**: Image from them right of all the services yeah let me find it never mind I think also this I think basically you want to only migrate the top two things there the front end and then this.
[13:36:30] **You**: What now is maybe you can share it I can find just a second.
[13:36:38] **You**: Almost there almost there.
[13:36:43] **You**: The next four this one right.
[13:36:48] **You**: So you want to only migrate the top layer and but not the yeah everything what is under.
[13:36:58] **You**: It stays the same basically so these are like external servers mentioned things these are just some simple function call this function sphere has to be inside the server side function of a natural application because of like front end fetch them with in this case ttpc one function gives me customs here and then functions are called inside CFA project and there's no interaction anymore as if a project has this date now interaction with portal with the K state well I mean that's another topic here for the future if we decide or if some decides we want to show if a q data inside the new user portal then you have to fetch data from the support for the system.
[13:38:13] **You**: Also saw some UI let's say proposals the customer can plug in of course now when the new portal in this look area let's say he can make some request and we have the suggest the user.
[13:38:40] **You**: An answer before he sent to real society so this prence do a lot of sex was.
[13:38:49] **You**: Cases let's say but for this we need enrichment from this that should suggest the customer the minute this direct connection from the new user party to small tile but this is not the case.
[13:39:10] **You**: So I think for now for the first phase we were just migrate yeah what is in the view.
[13:39:17] **You**: Which means the trophies is an absolute enabler for everything so we cannot do anything until we actually have the troop disconnection I would say.
[13:39:25] **You**: And I think you stop stays in unauthenticated support portal we can just move users there right like have questions regular have a function I like to.
[13:39:41] **You**: Prefill it as much as for such a just you can say like maybe because I'm a customer has some questions about like say modifying something we can also fetch or call this you are an event from the new prototype regular best cases already very much.
[13:40:07] **You**: Pre-filled let's say not as the other things feature.
[13:40:11] **You**: Yeah.
[13:40:13] **You**: I know the time is almost off but I still want to Aleksei I need to highlight this once again there is.
[13:40:21] **You**: Whether we migrate the backend fully to Tourlane or not is really important question to solve not just because of what we're doing right now.
[13:40:29] **You**: But it's also if we decide to I hear very different points of view right from a pragmatic point of view we don't have to do it but then there is veronica have to do it.
[13:40:39] **You**: Then the problem is like this decision I need this to be done because if she says if we go through with like we need to migrate the back end we have a vacuum of who owns it.
[13:40:51] **You**: Right now the foxys team has zero backend engineers like when we want to migrate the back end who will take over it I have absolutely no confirmation so far that Jakob will really come into the team and will also be responsible for it we have a backend engineer joining but that doesn't give me any confirmation right now if this is gonna.
[13:41:09] **You**: Be part of the pops team it's a very important decision that we have.
[13:41:15] **You**: This early on and then also maybe flag capacity problems or dependencies or something.
[13:41:21] **You**: It also depends on what we're doing at the next steps right so I just wanted to mention that one more time.
[13:41:27] **You**: Yeah I see that this is important but I feel like I don't fully understand the scope here right so.
[13:41:39] **You**: If we say we are migrating backend and there is no ownership on your team for that what's in scope for this backend let's say on this image because initially we said okay this just kind of a set of calls to apis and this is like not a really.
[13:42:00] **You**: Large backend nothing's fancy but what's the difficult part that if migrated to Tourlane won't be maintained by your team so I'm trying to understand like what exactly are the options and what are the kind of difficulties.
[13:42:21] **You**: I mean I'm not an engineer.
[13:42:23] **You**: But I guess the difficulty could be that the front end engineers have to own these services then I don't know yeah the services.
[13:42:35] **You**: Which ones because Lamba's API document reports they are all.
[13:42:42] **You**: Sources with ownership right and the only thing that we have in the support portal is this kind of.
[13:42:52] **You**: Backend for the frontal layer that gets this data together.
[13:42:58] **You**: And prepares it for display.
[13:43:00] **You**: And this is what we are migrating right.
[13:43:04] **You**: Is the rain anything else like engineers do you see not the first one I mean of course also here the button there points of course when they are there and the biggest part is the middle one you have a three parsing so we have like this nice part this is just a function inside vector so this is one function there is no external something there's just this one bit let's say function which has to be written and of course the business also have to be.
[13:43:51] **You**: Reviewed to someone I mean so there's a set of as no real capacity and I think there's normally a bigger engineer but a few others it's very important of course that.
[13:44:06] **You**: Reviewer.
[13:44:09] **You**: Knowledge then and I think also have to be light years or who is like in there fights of course if I hit right but someone have to review the things also pass to clarify.
[13:44:28] **You**: Okay so then it's like still in this box that is like nitra source tRPC h2s handlers which we are migrating right so this is what we call backend here same like next year just framework but it has the same techniques yeah this is clear okay about backend I would love to kind of just sit as engineers maybe Karolina Markus me Silvia and just talk through the codes and what are the options for migrations what are the difficulties and then if we know exactly how it.
[13:45:12] **You**: May like look like after migration and what are the difficulties that will manage around that and request kind of someone to join your team or whatever so we know exactly what's in scope and what are the difficulties and things like Jakob also may have may help us with figuring it out.
[13:45:36] **You**: And this is what we can do for the backend part and for the front end part I guess the second track is like for you Magdalena Shubham and Kristina to sit together to look at the pictures, existing features that we have on the offer and figure out which ones you want to actually have in your user portal eventually.
[13:45:57] **You**: Because maybe we'll not migrate everything maybe you won't need everything maybe some things you already have. So this is also important to know like okay we want this we want that and then once we have a list and we have backend talk between engineers we can plan the next steps.
[13:46:18] **You**: Yeah this is how this has already started so we got access to support portal and Shubhamke fam they are I will try to like this week is also my focus to get familiar and then we make them we work on the what is currently part of the support board and how can we behind the login and how can we.
[13:46:38] **You**: Put that into user portal and what do we need and what don't we need and then yeah I will follow up on the back end topic maybe tomorrow hopefully Silvia is back if she's not back we can do it without Silvia.
[13:46:56] **You**: All right.
[13:46:58] **You**: I also transcribe this so you wouldn't get notes to that thank you very much thank you.
[13:47:06] **You**: Time just passed very quickly right have a good day.
[13:47:11] **You**: Thank you.
[13:47:17] **You**: All right are we done with meetings today's story book yeah okay template of like a showcase which my components we have in the system I think I'll also just kick through it say yeah this thing that you showed me that all the components we can just look at the schedule and to see the state of invoices we have like five states we have five states of recommendation let's say that we are not much about a few there's also very literature at one point so they just when they talk with Kristina and Magdalena they can just go through the components as well.
[13:48:05] **You**: Rather than just ages see of course then they can look at admir there's the same way just to check through or can we have a foundation.
[13:48:21] **You**: Opening there for comparison maybe I just write like a list or something over you how to say structured for your I components because I had this I have also this.
[13:48:39] **You**: Time for example I was on topic headline of Ultra on the left side there's like the time yeah day one day before six yeah and then the right side next to it there are things on high level there are the destinations each destination says accommodation and activities.
[13:49:01] **You**: Maybe there's something else yeah but maybe it's also available now so we can see each component and for viscous points of course we have to be like.
[13:49:11] **You**: You can design or maybe to me first yeah to lose design if you thought maybe very fast yeah to deliver this already design like in the POC okay here's a design and then they have.
[13:49:24] **You**: More time than to to think about okay we have done here but just to move things around yeah yeah faster they want to know yeah fair but yeah maybe you can share with Kristina because Kristina going to be mainly driving this part.
[13:49:44] **You**: Right and for us about this backend and still kind of starting to understand what they're worried is about the backend part and how much of a yeah front end but.
[13:50:01] **You**: It's like there's already a lot of scope yeah so like the real deal backend it's like it stays right and what we are migrating is like scene aggregation layer so like it's always part of the front end so it's like it's easy to work purpose mentioned here that CM is ribbon great for me also I would avoid Kosmiba project it's more like a ruby wrapper although for some functions I mean as we have this trickle this is ruby then we have this CM customer miniature is also ruby but this is like a mapper of.
[13:50:52] **You**: Delta then and then currently we are using that MR2 to display some data why there's this no layer what you voice to can be function this CM layer because this is because I want a rarity to fetch from the server side functions in Grab interface data from sales force for example directly or from.
[13:51:28] **You**: Kick or otherwise each of these repair functions have to be metal in this CM.
[13:51:36] **You**: Project you know how this CM works is like what kind of conceptualist like aggregator layer is it like a pass rule from a function then reduce when I look at norm in this treble crossing but I see just a small.
[13:51:56] **You**: Data from Kiwikau like very restricted although there's an athlete it's called get my travels there then I can maybe five years on all of this so it starts whatever five years okay the main source of gigag has 500 fields so just now I think you have to fully size as a customer in this rapper and then in truncing there is they already assigned back to you.
[13:52:33] **You**: So you can say okay I'm now customer X.
[13:52:38] **You**: Custom X I can ask see I'm giving my invoices give me my two motions and when it now stay ready who you are and then fetches were the data but I am druidly this in server side I know for example of course the T number along the between the numbers fixed its static it's there and I don't need to know who is calling this.
[13:53:08] **You**: Was because on this for knowing that because the customer looks in this pocket when he's over for his eyes yeah and my server side now then.
[13:53:23] **You**: Hover customer is and I know the customer has like five trips and I do these fetches with a booking member not with the authorization from the user itself for the so the direct connection yeah you're not doing whales because it's never exposed to public so there's yeah there's no need or they have failure but then kind of they seem becomes like yet another.
[13:53:59] **You**: BFF in front of BFF in the current operator also the reuse also this for plugin let's say we use this Kunti for Klugen and for give it the trips or the resistance okay so we at least use this CM already for a bit because we just get five fields therefore showing a trip and it's not enough you do it once and then you fish it again for real okay let's data with mentors yeah yeah so it's just kind of level of direction that is kind of just.
[13:54:46] **You**: Staying in your way every time you're like okay I need one more field okay I need to go there change it get it there pass it here now I can finally use it so yeah.
[13:54:58] **You**: Okay so it's kind of questionable architecturally why is it there?
[13:55:04] **You**: Right this way because it also has some.
[13:55:11] **You**: Feature and today employee can impersonate another customer let's say yeah but I mean my solution is like the same yeah I mean.
[13:55:23] **You**: The employee don't have to.
[13:55:26] **You**: Personally the customer so don't have to be like it just have to show the same data as the customer see and what their services UI frameworks you just place the same U just fill it with our didn't say yeah very data like you're someone else but it's like not really impersonation it's especially when it's kind of.
[13:55:52] **You**: Only for showing right when you don't do.
[13:55:56] **You**: Any actions you're not impersonating really great of course I mean normally this customer services things do some personal.
[13:56:08] **You**: Also to manipulate normally some data for the cousin model because I can lock in as the user and as of the name of a user I can do some stuff.
[13:56:23] **You**: This also has yeah I want to look at the user because they don't see something so I can kind of maybe take over the sessions take over session see what what's actually happening there debug maybe something so it's also helpful but yeah it's like really for only for.
[13:56:40] **You**: This customer focusing customer facing future.
[13:56:45] **You**: Kind of tools I don't know here we have options if they really.
[13:56:51] **You**: Want this CM in the in the middle what would it mean it would mean like we put all our functions there.
[13:57:02] **You**: Like new functions so select trip planner for the user portal so it has like not 5 fields by 25 fields something like that was a reason I think also to use next.js for the project that next.js has of course also front-end bracket and it's also possible to within this next S or the server side code yeah so for me.
[13:57:36] **You**: Let's say place a function server side in the next.js application it not in another external cost much.
[13:57:51] **You**: Layout yeah this doesn't.
[13:57:56] **You**: Yeah it really need to be valuable to have it.
[13:58:01] **You**: Like this yet another service in the middle that you need to maintain okay but I guess this is what they mean by backend right when they were frontend team that cannot write this and maintain this functions on cm and you all don't really want to add anything to CM you want to just have things in this CFA or how is it called and what functions let's say investor have to get reviewed it's like five to six I that.
[13:58:47] **You**: I mean this is also show just some code lines with the heavy partis just this big passing function I mean this is also like source code it's there and easier than to review but it's people also have just front end but there's a back end that's my biggest question like what how do they work?
[13:59:19] **You**: Yes so like how how is your architecture organized how do you work?
[13:59:28] **You**: As standing would be maybe mean maybe like okay exactly for me because we assume that yeah it's like just server side function just call make two lines of transformation not a big deal but maybe they mean something bigger
