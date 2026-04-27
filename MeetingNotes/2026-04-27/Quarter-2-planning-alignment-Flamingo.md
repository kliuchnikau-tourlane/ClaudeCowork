# Quarter 2 planning alignment (Flamingo)

**Date**: 2026-04-27
**Time**: 11:30 - 11:55
**Location**: PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]
- kristina.lamza@tourlane.com
- sascha.burku@tourlane.com
- christine.berg@tourlane.com
- ron.schmidt@tourlane.com
- robert.wolf@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- stephanie.louw@tourlane.com

## Transcript

[09:30:17] **Other**: Hello.
[09:30:17] **You**: Hello.
[09:30:25] **Other**: How are you?
[09:30:27] **Other**: Good. I just had a minute on the balcony in the sun.
[09:30:32] **Other**: You can also go outside while listening.
[09:30:35] **Other**: Yeah.
[09:30:36] **Other**: Yeah.
[09:30:37] **Other**: Good.
[09:30:38] **Other**: Just do it.
[09:30:40] **Other**: I I assume now it's, like, nice, but maybe in a month it's already hot on your balcony.
[09:30:48] **Other**: Usually I have a bit of issues than seeing something on my. On the display.
[09:30:53] **Other**: So. Oh, yeah.
[09:30:55] **Other**: Thank you for now. Hello.
[09:30:57] **Other**: Hello.
[09:31:02] **Other**: Okay.
[09:31:05] **Other**: Everyone here.
[09:31:08] **Other**: Except Steph. I think she.
[09:31:11] **Other**: Replied as maybe.
[09:31:13] **Other**: I know.
[09:31:14] **Other**: No, she accepted.
[09:31:18] **Other**: Let me share.
[09:31:26] **Other**: Okay, so also, just as a.
[09:31:29] **Other**: First update to the roadmap is not yet finalized, so we still need to do this exercise in the team. But this is at least what we would like to do. But also keeping in mind I added a short, like, capacity planning node. I mean, infra git is.
[09:31:48] **Other**: For sure. We know that this will happen, but since it's a short cycle and it's still three weeks.
[09:31:55] **Other**: Yeah.
[09:31:58] **Other**: I just wanted to kind of highlight that this is almost half of the full cycle for Sascha. And then we also agreed that Marcus will support the access team and the migration of the user portal. So we were just aligning this morning that he will still support two more weeks in the news cycle. So then roughly six out of eight weeks. I mean, that's also still a bit flexible, but he will join the. The foxes team also for now with full focus. Let's see if there will be any changes, because I also know from Aleksei that the technical kind of architecture design discussion is still in.
[09:32:32] **Other**: Review.
[09:32:33] **Other**: So I don't know if there were any new insights that maybe there is a new backend engineer coming already in May. I have no idea then that might change. But, yeah, this just the plan that we currently take into consideration. Hey, Steph.
[09:32:50] **Other**: Your haircut.
[09:32:52] **Other**: Oh, looks british.
[09:32:55] **Other**: Thank you. Distracted for a second. Nice. Looks very good.
[09:33:00] **You**: From our sites. Yeah, we can just say that Marcus is six out of eight weeks. And for this initiative.
[09:33:09] **You**: We'll be tracking it within the fox's C2 tab, right? We don't add anything here for our team.
[09:33:17] **You**: Okay.
[09:33:18] **You**: Yeah. So we are still kind of refining and looking at who is taking what, but.
[09:33:24] **You**: Yeah, from our side, Marcos, we just consider he's not.
[09:33:29] **You**: In our plan.
[09:33:30] **You**: Ning.
[09:33:31] **Other**: Yeah, I think that's the best.
[09:33:33] **Other**: Approach.
[09:33:38] **Other**: Just one question to this infrastructure guild. So when Sascha is working in this gate, is he doing something for flamingo or is he doing something for a general.
[09:33:46] **Other**: Setup?
[09:33:47] **Other**: Generous General.
[09:33:50] **Other**: In C2. The plan is to build up this general setup.
[09:33:53] **Other**: And in C3, then every team is applying this knowledge for their team and updated updating their teams.
[09:34:00] **Other**: Is there somewhere like delivery overview for this whole infrastructure topic like a roadmap? And there is basically a task list for each cycle.
[09:34:11] **Other**: I can find this and share.
[09:34:12] **Other**: It.
[09:34:13] **Other**: Or can you add it here as a tap? I don't know. Infra. Yeah. Not in flamingo team, but really as a known tapiomine.
[09:34:22] **Other**: Yeah. Got it. Thank you.
[09:34:24] **Other**: Yeah. Maybe with the high level buckets, because there is one list, at least with the kind of weeks and who will support in which week.
[09:34:31] **Other**: So is a team week or is it infra week?
[09:34:34] **Other**: But maybe also under the deliverables.
[09:34:37] **Other**: And. Yeah. Then from cycle three, I mean, I guess anyhow, we need to reassess and tbda because I guess more teams need to do things and, like, block some capacity.
[09:34:49] **Other**: Okay, so the main focus for the flamingos will be on the smart booking logic MVP because that's a huge new product in new functionality that we will implement. We did some discovery in this cycle. Also some technical research already. There were some.
[09:35:08] **Other**: Challenges here and there, but I think now we found at least the solution to start with. So not being blocked by dependencies to other teams. I know the, the second kind of leadership round.
[09:35:20] **Other**: Sign off is still open. So I will schedule it. Let's see. Maybe for next week because I still need to finish, like, all the things we just kind of finalize the discussion on the solution last week.
[09:35:29] **Other**: So I still need this week to kind of prepare. And then the, the goal for the MVP is that we apply this new kind of core smart.
[09:35:40] **Other**: Booking logic, but only like with a short or like with a limited set of features, which will be available. So if we found an item that is available that initially from the main supplier wasn't available or if the price is cheaper, maybe there will be also logic if the price is higher, but then available. So we need to discuss like exactly on those rules also in the upcoming week. So this is more here covered with edge cases. I added one additional line because I feel this might increase the work on the core logic a bit. So if we also want to kind of cover some.
[09:36:14] **Other**: Some of these edge cases, let's say if the price is only 2% higher, but therefore like in comparison, it is available then, for example, I would go with hate and rather book the one that is available because we know this will also help us further down in the systems and in the like operational processes. But as mentioned, that still needs to be discussed. And second part of the MVP is that we will start only with hotel beds because also this like very broad logic of comparing supplier to another supplier, like maybe to a main supplier is a bit more complex in terms of how we are receiving the data and how we match the rooms. And here we have the dependency to speedy as well, where there's most likely no capacity this cycle.
[09:36:57] **Other**: And they also need to first finish like their overall vision on the whole supply domain who will serve which data to which teams to which products, et cetera. So, yeah, I would also push for that this there is a timeline for this, at least in the course of cycle two, because at some point then we would kind of switch back from our interim solution that we will now build. It's not costing much, but still at some point we need to kind of switch back.
[09:37:23] **Other**: So yeah, we will start with the technical prerequisites, which is kind of the integration of all the APIs. We will then implement the score logic, which is mainly the business logic and which criteria do we want to take into consideration. So there is availability, there's price, there's also mix and match in the first like for this MVP, we will not migrate any mix and match promptly to us that will come later. So we will just access the data. Also it will stay in trip planner. That will also just come later to kind of decommission this mix and match logic in drip planner.
[09:37:56] **Other**: Then the edge cases I already mentioned. So we just need to kind of.
[09:37:59] **Other**: Dive a bit deeper on this core logic. So what does it mean? What is if, for example, there's no item at all that could be found, no item available, no lower price. What are we doing? Then most likely there will be a project that we use just coming from triplana, which will work for now. But when triplana is ready and will not forward any DM.
[09:38:20] **Other**: Cs, also this needs to be reviewed. So we kind of need to have this whole concept in place, but still trying to start with a limited scope for this MVP. Then tracking and monitoring is an issue that we also need to address. It's not only for legal purposes, but also kind of.
[09:38:38] **Other**: To decide how we want to proceed. So for example, like one use case could be if the big cemetch is reached, what would be the potential if it would have not been there. So if we could, I don't know, exchange to 90%
[09:38:52] **Other**: Of 70%
[09:38:54] **Other**: So that's also something from a business perspective that we want to at least learn a bit more and yeah, all of this we kind of need to find ways how to track it and how to make this available. And for legal purposes, I mean there was this, there was like a discussion in the past from like, I think a flight operator and they were booking flights for customers. And then after customer was confirming, they kind of checked again and then booked lower rates. So there was like a court.
[09:39:23] **Other**: Issue or like an issue in front of the court. So I was just summarizing everything that we want to do. I was sharing it with legal and we are now also waiting on feedback from legal site.
[09:39:33] **Other**: Most likely it's okay, but it's still like.
[09:39:38] **Other**: A small risk. So let's see.
[09:39:41] **Other**: And also for this, I mean, we need to have like assuming then.
[09:39:45] **Other**: There will be some feedback from customers that we at least, I don't know, do we need to keep this data two years, five years? I have no idea. So just something that we need to consider to discuss with legal as well.
[09:39:57] **Other**: One thing, if we are exchanging now with hotels more and more, then also the share of hotbets items that is booked with the more and we know already since I think two years now that it is an issue for the main suppliers to kind of detect where the customer is. So especially for on the ground service for when customers do have issues. So we had this concept in the past already to provide this like full itinerary email on top where we just list all the names, departure dates, hotel specifications. Even if this item was booked with hotel vets. So this is now more critical because yeah, as mentioned, we will definitely increase the share of items booked via hotel beds now. So that is one smaller part here. Good thing is we worked already in the past.
[09:40:43] **Other**: I think two times, but it was never prioritized to go live. So at least there was some infrastructure already there. Also the requirements are clarified with GX and it's like really a limited scope, I would say. So it's really an easy email that we will create.
[09:41:00] **Other**: And then as also agreed, we will kind of roll this out as an MVP. So we will just think about which suppliers to onboard first.
[09:41:10] **Other**: Also the discovery is not yet fully done here on which would be the best ones. And then people like enable more and more suppliers to be kind of onboarded to this core logic.
[09:41:21] **Other**: It's quite a lot. So we also did the like rough estimation already in shirt sizes. And I tried to edit here and then I was running out of columns because also this is a short cycle. So we need to kind of do this reassessment in the team again as mentioned in the beginning because maybe some parts can be parallelized, some parts maybe not. Maybe we can, I don't know, move the tracking to a later point.
[09:41:46] **Other**: But still roll out one supplier just to test this logic. So this is something that we still need to discuss.
[09:41:52] **Other**: And like see how we can best deliver something until the end of cycle one.
[09:41:57] **Other**: Just for the like one question. So who will discover is basically done and this is why we are now in delivery for smart booking.
[09:42:06] **Other**: I mean, we are not yet in delivery, but we already entered phase two. And I think phase four, which is kind of, okay, there were different solutions discussed. Some were dismissed because dependency to speedy or too complex and now kind of the risk. I mean, you are, I think, aware of like taking a bit technical depth, but then rather delivering sooner. That is kind of the final solution. So I will just like write this all together.
[09:42:29] **Other**: And then it's kind of signing off this phase.
[09:42:34] **Other**: Do we want to add five phase fives then as a visibility? Because this is something we will conclude in cycle.
[09:42:41] **Other**: S.
[09:42:42] **Other**: My face is delivery.
[09:42:44] **Other**: Right?
[09:42:45] **Other**: No, face is the final solution plan.
[09:42:54] **Other**: I think I would like to add it then to the next session already.
[09:42:59] **Other**: Like I mentioned that I will schedule a next session to cover phase two and phase four, but then I think it makes already sense adding five face face five.
[09:43:07] **Other**: Because otherwise, I mean, if this is the official step that we would need to set it off before starting implementation.
[09:43:14] **Other**: Yeah, I mean there are some questions paneling. You have done pre work, but officially it's not done.
[09:43:20] **Other**: Okay. Yeah, then the legal assessment there are some pending steps and you're in a good position because you have used cycle one to do this research. But officially it's not fully done and I don't see this be done in four days.
[09:43:34] **Other**: Yeah, that's.
[09:43:37] **Other**: True. Yeah, I think then it's more about if we want like if we want to.
[09:43:42] **Other**: Wait.
[09:43:43] **Other**: Until the first assessment from legal, for example, is done or if we can already start with like this risk of which I would prepare because we prefer because we are ready. I mean like there's technically or like.
[09:43:56] **Other**: No question.
[09:43:57] **Other**: I think as long as we have this decision before we roll out also, I mean if we say that maybe one person's working on it now for the next weeks then also the.
[09:44:08] **Other**: Allocation of people is limited. So I think the risk is then lower.
[09:44:12] **Other**: If the outcome is no. Like we cannot do it at all. As I said, I'm fine. I just want to have the visibility that we are working on this still.
[09:44:21] **Other**: I also don't believe it's in high risk.
[09:44:23] **Other**: Okay, then let me prepare everything hopefully by end of the week and then we can discuss it next week and at least in the leadership round kind of align. Okay, we will still start working on it, even though we know like those three points are maybe open or pending.
[09:44:40] **Other**: Okay then the next one is the completeness check. I think this is what you hopefully still remember from this cycle because we were not able to finish this one. So it's quite a complex thing which we all had a session this morning.
[09:44:55] **Other**: And I mean it's maybe mainly complex because the supplier are working differently the items are differently. What drip planner has differently and also the documents are not all kind of.
[09:45:06] **Other**: Equally the same. So now the idea was that we use some historical data to kind of check hey this item in the past required document ABC but it's not that easy because also along the way like along the implementation we discovered for example that there are always different ideas for the same item coming from trip planner. So this was kind of not a solution that is working for all.
[09:45:28] **Other**: Which kind of delayed the implementation a bit. But we are about to finish this core logic implementation. So this will hopefully go live within the next two weeks. Then there are some suppliers that are already on the short list to be rolled out. That will also happen within the next week.
[09:45:47] **Other**: Two weeks I hope and then for the full rollout I mean we still need to assess. So there are some follow up sessions that we need to have because of those new findings that were just kind of found out last week and the week before.
[09:46:01] **Other**: So yeah and then also it's kind of a knowledge transfer question, I would say, because since marcos will then no longer at least officially no longer be with the team. We also need to assess like internally who can take it over. I mean was kind of raising hands to to support on this one. But still it's a huge and a very complex product.
[09:46:24] **Other**: So yeah.
[09:46:25] **Other**: We would just need to assess within the team who can take it then to let's say finish this full rollout.
[09:46:35] **Other**: Yeah, I have two questions when you say he's no longer part of the team you mean because you will spend some time in the foxes team.
[09:46:40] **Other**: Yes but then he comes back.
[09:46:44] **Other**: That is my goal.
[09:46:46] **Other**: Okay I think I just want people still need to discuss but yes.
[09:46:52] **Other**: And then the second question is maybe it's already like a process.
[09:46:58] **Other**: But so whenever we now onboard a new supplier is that officially a step in the onboarding process that we check the documents and say, I don't know we cannot launch a new supplier when we are clear about the documents.
[09:47:15] **Other**: Yes and no, I would say so it's a bit related to this last one. So it's kind of re curing task. So there was there were some workshops in cycle one with travel experience and with supply teams. So they are pretty much aware now they have also a lot more rights and documents dashboard now so they can kind of for example enable suppliers disabled suppliers they can decide.
[09:47:38] **Other**: Which documents to upload which not. So they like kind of we shifted a lot of responsibility to them like to the operational teams to also kind of give them more background on hey what what is required to make this work. So I think that's really good.
[09:47:50] **Other**: And they also changed it on their onboarding slides for suppliers so that it's pretty clear this was also part of this partners edge email rollout that we did.
[09:47:59] **Other**: So it should be much better. I'm just not sure if everything is covered completely but at least we are in the process of.
[09:48:08] **Other**: Shifting responsibility and also making it to suppliers what are our requirements. Some suppliers are still sending excel files whereas it's clearly written it needs to be PDF for example. So now the supply team is more aware of like following up here.
[09:48:34] **Other**: Macro's capacity.
[09:48:38] **Other**: So yeah two questions one Marcus capacity is already clarified for me it's not finally the site of that's a moment to six weeks whatever. The other question is with supply outsourcing. So this API outsourcing. We are massively increasing the speed onboarding new suppliers. For you it's not a change because they just get digitalized and we have worked with them before.
[09:49:04] **Other**: Okay. So you don't I mean that was my question in the last MBA to car on and he mentioned yes should not be it will not impact our processes. So even if they are onboarded via API they will send that is that was what he mentioned the same documents like via the same flow so it should not impact documents. I think the only difference is that the booking confirmation becomes maybe then immediate. So if you call the booking endpoint and the booking endpoint confirms and you have a confirmation for the booking, you may have then less need for the booking confirmation passing for the voucher part in its basis in.
[09:49:41] **Other**: Yes.
[09:49:43] **Other**: That's true. Whereas still it will only work for the accommodations. So for all other item types we still will kind of.
[09:49:53] **Other**: Benefit from the confirmation flow.
[09:49:56] **Other**: Got it.
[09:49:57] **Other**: And I mean since we are already kind of in this bucket.
[09:50:02] **Other**: So these are more like qualitative improvements I would say. So also some really nice findings from this audit that I mentioned that we did together with the supply team and the travel experience team. But there's one that I added and we also discuss it in the team briefly. So we need to think about a more sustainable way because currently I mean we can.
[09:50:22] **Other**: I would say it's one person that is that could only be busy with like onboarding new suppliers onboarding new documents checking the quality checks improving here and there because like it's just the dependency to external is just too high and they are constantly changing things.
[09:50:38] **Other**: I don't know. For example adding prices to a document that is customer facing which we just are discovering here and there which would not be there and we cannot like build fallbacks for all those solutions. I mean like we could and we will also build it now that we exclude prices. But I mean that's just not maintainable in the future. And also with like more suppliers being onboarded. Like even this one for dark rollout for the US market. They have like I don't know.
[09:51:04] **Other**: 15 new documents because it's train, it's activities, it's accommodations. It's just like a lot of documents that we really receive. So what we will work on in cycle two is what I will also take over as kind of an overall vision for this whole documents part which is not yet there and also thinking about as part of this a more sustainable way to like onboarding new document new suppliers is there maybe an easier way like maybe we don't need this whole complex logic for 50% of the suppliers.
[09:51:34] **Other**: Because I don't know they're just selling two documents let's say. I mean that's something that we need to evaluate and like discover.
[09:51:41] **Other**: Also to kind of move responsibility more to the operational teams. For example to supply two ticks. Currently whenever there's a new document like someone from the editing team needs to be involved to get this onboarded and we already noticed that we are a bottleneck like not only because of the capacity and the tube size but it's just too many suppliers with too many documents and this will also increase the more we grow. So that's definitely something that we need to look into now and then coming up with a plan for.
[09:52:11] **Other**: Second half.
[09:52:13] **Other**: Of 2026.
[09:52:17] **Other**: That's it mainly.
[09:52:20] **Other**: Any questions.
[09:52:22] **Other**: And as mentioned when this part is finalized then we can also show it in the leadership channel.
[09:52:33] **Other**: Because you know your team doesn't need any support from Steph.
[09:52:38] **Other**: Or any other designer in that cycle.
[09:52:41] **Other**: To see that correctly.
[09:52:44] **Other**: Yeah, let me just briefly check but.
[09:52:49] **Other**: Yeah good news to us for that cycle.
[09:52:55] **Other**: Yeah yeah I think maybe in the future for the smart booking logic we can kind of think about that like having more transparency for users. What did we exchange to what and why but for the MVP maybe that's not required.
[09:53:14] **Other**: And I mean yeah data I edit but since data is not here.
[09:53:18] **Other**: I will discuss it maybe independently with.
[09:53:26] **Other**: You.
[09:53:27] **Other**: Okay then thank you.
[09:53:30] **Other**: And if there are questions just let us know.
[09:53:34] **Other**: Thank you.
[09:53:35] **You**: Thank you.
