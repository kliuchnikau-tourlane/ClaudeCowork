# 1:1 - Wieland / Aliaksei

**Date**: 2026-04-23
**Time**: 16:15 - 17:00

## Attendees

- wieland.pfesdorf@tourlane.com
- aliaksei.kliuchnikau@tourlane.com

## Transcript

[14:15:35] **You**: Hello.
[14:15:36] **Other**: Hello. Hello.
[14:15:38] **You**: All right all good.
[14:15:39] **You**: How are you doing?
[14:15:42] **Other**: Actually today, super tired after the return.
[14:15:46] **Other**: It got so late.
[14:15:48] **Other**: And.
[14:15:49] **You**: Your train was delayed a bunch.
[14:15:52] **Other**: It was not delayed, but it got pretty late. So I think I arrived in cologne at around midnight, and then I still made some food. And so it was like one or so when I went to bed. So now.
[14:16:04] **You**: Oh.
[14:16:05] **You**: My.
[14:16:07] **You**: Okay.
[14:16:10] **You**: Very good very hungover yesterday during the day like everyone else.
[14:16:16] **You**: Yeah I think I took it lighter than the others because I dropped a bit earlier so you are still kind of drinking while I was already kind of getting to sleep so I'm the lucky one so yeah I'm feeling fine.
[14:16:32] **You**: Just kind of.
[14:16:34] **Other**: We went into a bar and leon, like, bought, like, a huge round. He bought, like, eight beers and then shots. And, like, what the are you doing?
[14:16:43] **You**: Okay so Leon just warmed up.
[14:16:46] **Other**: Yeah.
[14:16:49] **You**: Second breath at 11 let's go.
[14:16:52] **Other**: Yeah.
[14:16:53] **You**: Okay good stuff.
[14:16:55] **Other**: Yeah.
[14:16:56] **You**: So.
[14:16:56] **Other**: Fun.
[14:16:57] **You**: Yeah.
[14:16:58] **You**: It was it was nice.
[14:17:01] **You**: Team events good good to have it from time to time.
[14:17:07] **You**: Sadly you'll you'll skip the next one the the large big team one.
[14:17:12] **You**: But the one after we need to organize.
[14:17:16] **You**: Maybe September covers like that.
[14:17:20] **You**: Good.
[14:17:24] **You**: So.
[14:17:27] **You**: Let me see.
[14:17:29] **You**: What did we want to discuss yeah I wanted to catch up like how did you.
[14:17:35] **You**: Had a chance to catch up with.
[14:17:40] **You**: Gregor yesterday?
[14:17:42] **You**: Right.
[14:17:43] **Other**: Yeah.
[14:17:44] **You**: Good good yeah and this recording I hope it might be useful for you we actually sat down with key rail and started.
[14:17:57] **You**: Making thickness diagram out of it I want to finish it today.
[14:18:04] **You**: Is it sending.
[14:18:06] **You**: It is sending.
[14:18:12] **You**: Should have.
[14:18:13] **You**: Access.
[14:18:17] **Other**: Yes. Looks good. Nice.
[14:18:19] **You**: Yeah so we will try to put all these things like on the picture it's not final but yeah.
[14:18:27] **You**: Just to have all.
[14:18:28] **You**: The.
[14:18:30] **You**: Things in play for main.
[14:18:33] **You**: Request like when you connect accommodation that has some content that is known to our system when you just connect some really random manual item and when you add.
[14:18:47] **You**: Transport.
[14:18:48] **You**: Like.
[14:18:50] **You**: Three main things when the weather isn't playing.
[14:18:54] **You**: And I guess I guess like for transport leg we won't be working on this yet right for manual and others will likely be working on.
[14:19:06] **You**: But.
[14:19:07] **You**: Yeah.
[14:19:12] **Other**: I have a more detailed look.
[14:19:17] **You**: Is it like next week the infra guild again.
[14:19:23] **You**: All right.
[14:19:24] **Other**: It's going to be a tough context switch then also.
[14:19:28] **Other**: I will try to wrap up as much as I can tomorrow for the areas topic. But I think, yeah, the discovery is not yet done.
[14:19:37] **Other**: Do you know.
[14:19:39] **Other**: What the deadline is for?
[14:19:42] **Other**: Like giving this discovery work?
[14:19:45] **You**: Yeah so I don't think there is a discovery at the moment there is a deadline anymore at the moment so yeah I wanted to ask you about like what do you want to what kind of plan do you have what kind of things you want to discover right what kind of questions you want to have answered and what kind of questions you want to kind of delay and maybe just maybe if you have some plan.
[14:20:12] **You**: Forming in your head we can start from this and see like what might be a meaningful plan to kind of tackle this and what can we plan right because as claudia mentioned right so.
[14:20:26] **You**: We're worried to over commit over.
[14:20:30] **You**: Kind of spread on too many topics and this like API outsourcing is already in play and that deprecation at least for accommodations.
[14:20:42] **You**: It's like super important but whether the application for destinations it's kind of.
[14:20:50] **You**: Manageable to live without it being done in situ but in c3 it's likely going to be needed.
[14:21:00] **You**: So yeah C2 will.
[14:21:03] **Other**: Why? Why is that? So why is removing accommodations more important than areas?
[14:21:10] **You**: Accommodation dependency on.
[14:21:13] **You**: Veto from cheap planner so from what I understand like since we have these destinations from veto already in system and we kind of maybe can add these polygons to the missing ones somehow and then we kind of just connect all our Expedia.
[14:21:34] **You**: Accommodations to this wet tool.
[14:21:38] **You**: Destinations and it will work with triplanner right so it kind of weaken.
[14:21:45] **You**: Launch more expedient stuff even though we'll be using wet to destination for them right but we cannot launch Expedia stuff planner depends on veto content for accommodations.
[14:22:05] **You**: That's why they're kind of two separate streams at the moment.
[14:22:06] **Other**: But.
[14:22:09] **Other**: But then the plan is to work on these areas a bit more deeply in Q3.
[14:22:16] **You**: Likely or if we can afford it before.
[14:22:20] **You**: Then yeah let's talk but again we need to make a plan of like what is.
[14:22:28] **You**: Manageable for us.
[14:22:31] **Other**: Because actually for areas, I think it's pretty similar as well. So right now we can only use accommodations from Expedia.
[14:22:44] **Other**: That have an overlap with wetu because only if we have this overlap, we have the area as well.
[14:22:52] **You**: But this overlap we can calculate based on geo shapes right.
[14:22:57] **Other**: At the moment, not at the moment, we're not doing this.
[14:23:01] **You**: But but we can.
[14:23:03] **You**: Right.
[14:23:06] **Other**: So maybe like as an intermediate early step before we focus on the large thing.
[14:23:13] **Other**: We. That could be an idea.
[14:23:16] **Other**: That before we actually build a full-blown service around areas, we first.
[14:23:23] **Other**: Just use the area poly. Yeah, that could be a quick win, actually. Yeah.
[14:23:29] **You**: From what I think this is like what Pdor is proposing to do.
[14:23:34] **You**: Let me check I think here he wrote some.
[14:23:39] **You**: Even business rapid.
[14:23:43] **You**: For what if we take these technical thing what would it mean for business for business it would mean like we are freezing destinations we're not adding any new destinations and things like that.
[14:23:56] **You**: So I think.
[14:24:02] **You**: Wait deprecation.
[14:24:04] **You**: Okay I didn't read this rabbit but nevertheless I will send it your way.
[14:24:12] **You**: So maybe.
[14:24:14] **You**: You will read it.
[14:24:18] **You**: And find some.
[14:24:21] **You**: Points there right to connect the dots again this is like my understanding I may be a little bit off.
[14:24:29] **You**: Here we have destinations mentioned in the doc.
[14:24:33] **You**: So hopefully my understanding of how I explained it.
[14:24:38] **You**: Is what is being kind of.
[14:24:40] **You**: The idea that is proposed here.
[14:24:48] **Other**: So it would be the.
[14:24:52] **Other**: Okay, but then. Then honestly, I'm. I'm not really sure what my role is at the moment because I feel like so many people are looking into this vetu topic. And for now, I think this kind of business rapid is exactly what I am looking into it now to, like, first of all understand the problem.
[14:25:10] **Other**: Quantify the numbers. I'm also curious.
[14:25:14] **Other**: The hypothesis here, like increased shelf bookable hotels from 40k to 300k.
[14:25:20] **You**: This is like with the entire bet lubrication right so if we duplicate veto then we can increase it right and this is what Pd rank is calculated.
[14:25:21] **Other**: This number.
[14:25:33] **Other**: But the 300k, I would be curious about, and I would like to challenge that because actually getting this number is. Is very complicated, and I'm looking.
[14:25:42] **Other**: Right now.
[14:25:44] **Other**: Because we need to check the actual overlap.
[14:25:47] **Other**: Of Expedia accommodations with the areas we have imported.
[14:25:53] **Other**: So let's say we have 400k Expedia hotels in total, which is roughly what we have in the database.
[14:25:57] **You**: Yeah.
[14:25:59] **You**: Okay.
[14:26:00] **Other**: But maybe out of those 400k.
[14:26:04] **Other**: Only 100 live with an areas that we currently own and have imported.
[14:26:13] **Other**: Right.
[14:26:15] **Other**: So.
[14:26:17] **Other**: But I I.
[14:26:21] **Other**: Mean, I can reach out to and ask him, but I doubt that they did this overlap.
[14:26:26] **Other**: Calculation because also Gregor was looking into it. So that's also why I'm now confused.
[14:26:31] **Other**: I think so many people are looking into this topic, and now I know what my role and. And actually position is in the moment.
[14:26:39] **You**: And this is also an issue right that so many people are looking into it and there are.
[14:26:46] **You**: Like a bit too many kind of voices.
[14:26:50] **You**: And sometimes conflicting information from random directions.
[14:26:57] **You**: So I would hope that you can actually get all the.
[14:27:03] **You**: Points of view and make.
[14:27:08] **You**: A consistent view out of them and connect all the dots like from who is working on what why like what the kind of temporary approach in which projects for destinations what the like future plan for destination service and things like that right.
[14:27:31] **You**: To make sense of it so you can be like trusted with.
[14:27:37] **You**: Just.
[14:27:38] **You**: I can go to you and ask what do we have for destinations how it works and you can tell me.
[14:27:43] **You**: Because yeah at the moment I'm also kind of struggling like better doing something Gregor I heard some rumor here and there and this is like also.
[14:27:56] **You**: A little bit.
[14:27:58] **You**: What adds to this reputation of destinations of being too difficult so if we make sense of it.
[14:28:08] **You**: Right this is like the goal number one so you at least understand all these kind of.
[14:28:16] **You**: Fractal information points.
[14:28:19] **Other**: So it's not actually about driving this for now, but it's more about understanding what's going on, what are the goals, who is planning what and maybe create like a document summarizing all the ideas and plans to.
[14:28:36] **You**: Yeah I think this is like the first step right you it's hard to drive before you're kind of you have all the.
[14:28:45] **You**: Kind of.
[14:28:48] **You**: Things under kind of your radar and then if you're like part of the all this discussions and around this and you can kind of keep track of of it then probably the next step is to drive the future things for now I guess like PDR and Gregor are kind of driving the immediate next steps right and maybe you can already just on board with everything right and hopefully you you don't need to challenge it so you won't find.
[14:29:25] **You**: Like crazy inconsistencies between world views between Gregor, Pdor me and everyone else.
[14:29:34] **You**: If you find like consistent picture then this is good if you find inconsistencies this is like.
[14:29:40] **You**: Will be already quite a lot.
[14:29:44] **You**: So yeah I don't expect for you to kind of solve everything in in the beginning of C2 it's more like you're onboarding to the topic and getting into the information flow so you kind of know everything around this topic.
[14:30:01] **You**: And information doesn't sleep past you.
[14:30:05] **You**: Right this is like main goal for now.
[14:30:10] **You**: Right.
[14:30:12] **Other**: Sounds like a plan.
[14:30:16] **You**: And what was your idea on top of that?
[14:30:20] **You**: Did you expect to work on something else or maybe you have already some kind of.
[14:30:26] **You**: Things planned.
[14:30:29] **Other**: So what I did is I experimented a bit with mapping so. So we have, like 7 areas.
[14:30:40] **Other**: In total.
[14:30:42] **Other**: 6.5k have a polygon and 500 are missing, and I experimented a bit with an approach on how to map the 500 missing ones.
[14:30:52] **Other**: And it looks.
[14:30:53] **You**: Yeah.
[14:30:54] **Other**: Promising.
[14:30:54] **You**: And I think this 500 will need to solve.
[14:31:00] **You**: In C2 right likely.
[14:31:03] **Other**: In what?
[14:31:04] **You**: In cycle two right this 500 is.
[14:31:08] **You**: Probably what we need to know.
[14:31:10] **Other**: Not necessarily. So we also want to look into what would be the impact if we just drop them.
[14:31:16] **Other**: So how many accumulations would we actually lose?
[14:31:20] **Other**: But in general, I am quite positive about these 500s that we can map them with a little bit of manual overseeing and also 500 is not the biggest number. I mean, worst case, it's half or maybe one day of work.
[14:31:36] **Other**: To go through all the results and check if they are, if they make sense.
[14:31:40] **Other**: So I think mapping should
[14:31:43] **Other**: Define. Maybe we don't need it.
[14:31:45] **You**: And by mapping you mean we add polygon from somewhere.
[14:31:46] **Other**: But.
[14:31:51] **You**: From expedia.
[14:31:52] **Other**: Yeah.
[14:31:54] **You**: Okay so we had polygon and then kind of maybe.
[14:31:59] **You**: 70 track manually.
[14:32:02] **You**: Something like okay.
[14:32:03] **Other**: I already, like, I checked 30 examples, and we could map, like, two third with expedia. So maybe we will not be able to make all of the 500 ones. That's pretty likely.
[14:32:19] **Other**: So, yeah, that's. That's one thing I was looking into right now. I'm looking into exactly this number.
[14:32:25] **Other**: How much inventory we will actually enable from expedia if we feel shaped mapping. And this is quite tricky because the accommodation data lives on staging, but the area starts live some production, and even the data on staging was not entirely important yet for the accommodations we want. So we. We only imported, like, 150k hotels. So now I imported everything and I'm planning to do, like, a dump to my local database from both production and staging.
[14:33:02] **Other**: To the analysis.
[14:33:05] **Other**: And then in general, for me, the bigger picture looks like.
[14:33:13] **Other**: We will have some manual curation aspect into it.
[14:33:20] **Other**: So what I also experimented a bit was, like, generating the texts itself with AI works pretty solid.
[14:33:32] **You**: Just grab the theorem.
[14:33:35] **Other**: Yeah.
[14:33:36] **Other**: But the images are the problem, so I don't think that we will be able to find high quality images in an automated way.
[14:33:46] **You**: But it's only for 500 right.
[14:33:47] **Other**: So.
[14:33:49] **Other**: No, I meant going forward in the long term. Right. We also want to maybe be able to launch new destinations.
[14:33:57] **Other**: And use the whole Expedia regions.
[14:34:04] **Other**: So I think there will be some sort of manual work involved. So for now, for me, the solution looks like.
[14:34:13] **Other**: We have two milestones versus we use the shapes we have at the moment.
[14:34:20] **Other**: Then we cannot launch new destinations, but we enable Expedia inventory.
[14:34:24] **You**: Yep.
[14:34:24] **Other**: And then second part on top of this is that we have a new area service.
[14:34:30] **Other**: Which uses the Expedia regions and polygons and on top of that some manual creation or some semi manual creation. So this is how it looks now.
[14:34:42] **You**: So yeah this part two you will be able to.
[14:34:46] **You**: Work and prepare right and in the part one.
[14:34:52] **You**: Also sanity check and get into the.
[14:34:56] **You**: Fluence also check this rabbits right review for that and it's good if you if you see some.
[14:35:08] **You**: Things are wrong.
[14:35:10] **You**: Also yeah I think it's good to catch up with bedroom to get his perspective on destinations and if what you.
[14:35:21] **You**: Kind of gathered and heard from different sources.
[14:35:24] **You**: Is.
[14:35:26] **You**: Same in his mind right so this will be also very useful.
[14:35:34] **Other**: Can I comment in this bracket?
[14:35:38] **Other**: Or is this already communicated to.
[14:35:41] **You**: Seeds shared with Karen with travel people.
[14:35:46] **You**: Maybe you can just write to petro.
[14:35:50] **You**: L slack.
[14:35:52] **You**: Yeah.
[14:35:53] **You**: Probably better.
[14:35:54] **You**: Share with bedroom otherwise.
[14:36:00] **Other**: Okay. Interesting. Yeah. Okay. Also.
[14:36:05] **Other**: Yeah, it looks like it's working progress, right? Because he also comments.
[14:36:21] **You**: Not sure.
[14:36:22] **You**: Yeah he still wants to get.
[14:36:27] **You**: Kind of review but he already shared with Karen I guess he wanted to write it for current I'm I don't.
[14:36:36] **Other**: Okay, I would just ask him first. Or maybe I would just comment. I don't know. I would see.
[14:36:39] **You**: Yeah.
[14:36:41] **You**: Yeah but catching up with Pdor I guess it's like.
[14:36:42] **Other**: But.
[14:36:45] **You**: One of the last parts of the puzzle maybe also roberts do you do you have any one once with robot or some kind of catch up screen.
[14:36:54] **You**: Yeah but once you have a picture maybe you can also run it.
[14:36:55] **Other**: No.
[14:37:00] **You**: Through roberts mines so rubber doesn't have like different views it's also important to manage robots in our life so we are not divergent and robert is not divergent so yeah this is also.
[14:37:16] **You**: Important thing.
[14:37:17] **Other**: Okay.
[14:37:18] **Other**: Cool. Yeah. Sounds like a plan.
[14:37:21] **You**: Yeah.
[14:37:22] **You**: So.
[14:37:26] **Other**: Actually create a to do for me.
[14:37:52] **You**: Anything else do you have you wanted to discuss.
[14:37:57] **Other**: I had one topic, which is a bit.
[14:38:01] **Other**: Not topic work related. I was chaired from franc some options like company options agreements.
[14:38:12] **Other**: I. I don't know. I have never signed something like this and I wanted to ask you from your experience. This is something that I can safely sign. Is it. Did you do it?
[14:38:23] **Other**: Is there any.
[14:38:24] **You**: I don't think I did it yet.
[14:38:26] **Other**: Okay.
[14:38:27] **Other**: So.
[14:38:28] **You**: Their vesting is like not immediate.
[14:38:31] **You**: So yeah I didn't sign anything yet I haven't seen the contract.
[14:38:36] **You**: So yeah.
[14:38:39] **Other**: In general.
[14:38:40] **You**: Some dock on confluence about it.
[14:38:44] **You**: In this.
[14:38:47] **You**: Op whatever.
[14:38:51] **You**: Let me see.
[14:38:53] **You**: Confidence.
[14:38:58] **You**: Employee stock option plan.
[14:39:00] **You**: Right.
[14:39:12] **You**: Has like.
[14:39:14] **You**: Sorry this video does not exist.
[14:39:17] **You**: As a main picture for this page.
[14:39:22] **Other**: There's also Pdf.
[14:39:23] **You**: Yeah.
[14:39:25] **You**: So this should.
[14:39:27] **You**: Explain a bit.
[14:39:30] **You**: Yeah.
[14:39:32] **Other**: Yeah.
[14:39:32] **You**: So this is what you received right.
[14:39:35] **Other**: Yeah.
[14:39:38] **You**: Okay.
[14:39:39] **You**: Yeah I I haven't seen this sorry.
[14:39:42] **You**: So this is the only page I know about this topic and what kind of worries do we have.
[14:39:53] **Other**: 18 pages of contract, and I didn't understand all of these legal stuff. And usually I would just put everything into chat GPT, but I don't know if this is something I can put into chat GPT, so. Yeah.
[14:39:55] **You**: Okay.
[14:40:05] **You**: Only in the corporate.
[14:40:05] **Other**: I don't know.
[14:40:07] **Other**: Sorry.
[14:40:07] **You**: I'm not sure maybe in the corporate cloth.
[14:40:11] **Other**: Maybe.
[14:40:12] **You**: I think claude has this zero retention policy.
[14:40:19] **You**: I'm not sure if it's enabled for us.
[14:40:21] **You**: But yeah I wouldn't sign any contracts nowadays without at least kind of.
[14:40:27] **You**: Give me summary of what I want I need to worry about.
[14:40:32] **You**: Do you see anything special.
[14:40:35] **You**: So yeah yeah running the truth.
[14:40:39] **You**: Cloth.
[14:40:42] **Other**: I would just do it.
[14:40:43] **You**: Yes.
[14:40:44] **Other**: Yeah, I will anonymize it first or something, but.
[14:40:47] **Other**: Yeah.
[14:40:47] **You**: Yeah yeah if you if you have your data there.
[14:40:51] **You**: And it's a good thing just kind of run the the meat of it.
[14:40:56] **Other**: Okay.
[14:40:57] **Other**: Cool.
[14:40:58] **Other**: Then I will just do that.
[14:41:00] **Other**: Thanks.
[14:41:00] **You**: Yeah.
[14:41:02] **You**: And is it like were you.
[14:41:06] **You**: The first time you received this.
[14:41:11] **Other**: I received it, I would say some months after my probation ended randomly, I got an email.
[14:41:19] **You**: Yeah.
[14:41:20] **Other**: Honestly, I have never signed the first one because I was too lazy to read through it, and I think it was like 500 euro.
[14:41:29] **Other**: In value. So I was like, okay.
[14:41:32] **Other**: I'm not reading 18 pages of contract for four years of vesting for 500 euro.
[14:41:38] **Other**: But now it's a bit more. So.
[14:41:41] **You**: Okay.
[14:41:41] **Other**: That's.
[14:41:42] **Other**: Why I'm considering to sign.
[14:41:42] **You**: Okay.
[14:41:44] **You**: Sure sure yeah.
[14:41:48] **You**: Then tell me what if you find something suspicious there if you find something like that worries you.
[14:41:55] **Other**: Okay, so that's also why I wanted to ask. Maybe you have read it and know if everything is signed.
[14:42:00] **You**: Yeah I haven't read it so sorry.
[14:42:03] **Other**: Okay.
[14:42:04] **You**: Maybe someone from K read it like k should know right.
[14:42:11] **Other**: Yeah.
[14:42:11] **You**: Should have signed it years ago.
[14:42:14] **You**: 300 whatever.
[14:42:18] **Other**: You just signed it.
[14:42:19] **You**: Yeah yeah.
[14:42:21] **You**: What girl is very optimistic nothing bad can happen out of it come me fine.
[14:42:24] **Other**: Yeah.
[14:42:27] **Other**: Yeah.
[14:42:30] **You**: And it works.
[14:42:31] **Other**: It works. Yeah.
[14:42:32] **You**: For real this one.
[14:42:34] **Other**: Yeah.
[14:42:35] **You**: Right yeah it's if you're if you'll do like more thorough read.
[14:42:41] **You**: Let me know.
[14:42:42] **Other**: Okay.
[14:42:44] **Other**: I mean, also, I, of course, read a bit about it and the likelihood of really, like executing them is very low in general for. For startups.
[14:42:55] **Other**: So. But.
[14:42:56] **Other**: Yeah, let's.
[14:42:58] **You**: It depends I also had it once in another company it was a startup I didn't care much.
[14:43:06] **You**: I tried to revise it and move everything into salary back then.
[14:43:12] **Other**: Okay.
[14:43:12] **You**: Like an option I'd rather get like small salary bigger package or bigger package.
[14:43:19] **You**: Smaller salary so yeah I went like maximum seller.
[14:43:23] **Other**: Yeah.
[14:43:24] **You**: It blocked back back then.
[14:43:26] **Other**: Yeah. Nice.
[14:43:30] **Other**: Okay.
[14:43:30] **You**: Good.
[14:43:30] **Other**: Yeah, that's it from my side.
[14:43:33] **Other**: Then.
[14:43:35] **You**: What else.
[14:43:38] **You**: So.
[14:43:40] **You**: Occasion we discussed.
[14:43:43] **You**: 11 infot is cast yeah next quarter and overall about the team how do you feel like the team is doing nowadays how the mood is how kind of working with everyone.
[14:43:58] **You**: Going anything kind of.
[14:44:01] **You**: New recently.
[14:44:04] **Other**: I really like it every day working with the team. And also I really like the team event. I think we are still very close. I would really like to see nishant again. I hope that he's not.
[14:44:14] **You**: Yeah I spoke to him he said like yeah next time two months and one just tell me I'll do it I'll do it.
[14:44:23] **Other**: I hope that he's not unhappy that he cannot join.
[14:44:26] **You**: Yeah he now should be able to join come on like he was it was like the main one of the main goals for him to move so now time to execute so next team events we just organized around.
[14:44:31] **Other**: Yeah.
[14:44:42] **Other**: That.
[14:44:42] **Other**: Would be cool.
[14:44:44] **Other**: So. Yeah, but apart from that, everything.
[14:44:47] **Other**: Is cool.
[14:44:51] **You**: And in infra guild.
[14:44:55] **You**: So you guys are kind of just electing who is gonna take over from Gregor still kind of non-use there.
[14:45:05] **Other**: I think robot will decided. So I think Grega will propose.
[14:45:12] **Other**: That either Jakob or I said to take it over and then someone from management will make the decision.
[14:45:21] **You**: Actually let me check in for guilt and for guilt.
[14:45:26] **You**: Actually Gregor proposed kind of intro weeks.
[14:45:34] **You**: For infern Guild.
[14:45:36] **You**: For tackle two this three weeks.
[14:45:39] **You**: Basically week 2022 and 24.
[14:45:43] **You**: So it's yet again one week there when we here there here there here.
[14:45:50] **You**: And then three weeks at the end of cycle are with the team it's at least kind of around planning and when.
[14:46:01] **You**: Cycle ends and things wrap up.
[14:46:04] **You**: You'll have like three weeks with the team and otherwise weak there a week here.
[14:46:13] **You**: Okay and the next third quarter you guys probably will plan.
[14:46:19] **You**: Later.
[14:46:23] **You**: Okay.
[14:46:25] **You**: So this is fine right.
[14:46:26] **You**: Like we here how does it work.
[14:46:32] **You**: First cycle you were not.
[14:46:34] **You**: Too much happy about it how how is it still unhappy about or you.
[14:46:40] **You**: Find.
[14:46:41] **Other**: I mean, in general, it's fine, of course.
[14:46:45] **Other**: But the context switching is a bit tough for me.
[14:46:49] **Other**: So I noticed, like.
[14:46:52] **Other**: This week I need one or two days to actually, like, really get up back into the topics and also, like, focus the attention back to where I should put it. So, yeah.
[14:47:08] **Other**: I. But I think that's usual with this kind of context switching.
[14:47:12] **Other**: And.
[14:47:12] **Other**: Yeah.
[14:47:13] **You**: Yeah and other folks on the on the group they don't want kind of more.
[14:47:20] **You**: Kind of connected weeks for infra guild they voted against it.
[14:47:26] **Other**: To be honest, I don't know what's their opinion is about it.
[14:47:30] **You**: Yeah so maybe you guys can discuss it in the group.
[14:47:34] **You**: To make sure.
[14:47:36] **You**: We're not just kind of.
[14:47:38] **You**: Cargo cult in this approach and it's actually.
[14:47:44] **You**: Group decision.
[14:47:46] **Other**: I think it was also there was a retro where also product and so on participating. This is also coming from. From them more that Sasha is not out for too long for his flamingo duties or something.
[14:47:50] **You**: Yeah yeah.
[14:47:59] **Other**: But I don't know.
[14:48:00] **Other**: Really don't know. I just accepted it. And now, I mean, it's. It's working for me.
[14:48:05] **Other**: I don't want to.
[14:48:06] **You**: That's kind of if it's kind of more useful for and helpful for you to just focus in a stretch and then be back it also should be fine for.
[14:48:18] **You**: Product products shouldn't defend.
[14:48:21] **You**: This.
[14:48:22] **You**: It's still up to to you you have like more defined movies they they may have preferences.
[14:48:31] **You**: To consider so yeah please double check with the team maybe everyone is kind of oh I hate this context and we don't know.
[14:48:41] **Other**: Yeah. But what's working really well is that I don't have any leakage.
[14:48:46] **Other**: From the topic into each other. I I think for the others, it's so much more tougher. They do have support cases or always other topics.
[14:48:55] **Other**: For me. I really block everything that comes up. And, for example, now there are two PR still open for infra that I could merge, but when it's Monday.
[14:49:06] **You**: You're not talking to them yeah.
[14:49:08] **Other**: Yeah, exactly. So I think this, this works quite well.
[14:49:10] **You**: Good.
[14:49:11] **Other**: But of course, I'm also not, like, in a position where our cop is where he has to push the zoom migration. So I think it's. It's really tough for him.
[14:49:22] **You**: To know.
[14:49:24] **You**: Some.
[14:49:25] **You**: And Jacob I heard he's kind of about to finish this migration.
[14:49:31] **Other**: Okay.
[14:49:31] **You**: Hopefully he'll be kind of.
[14:49:34] **You**: A bit free because.
[14:49:37] **You**: This entire migration sounds quite stressful and.
[14:49:41] **You**: They were.
[14:49:44] **Other**: Yeah.
[14:49:45] **You**: All right.
[14:49:46] **You**: Good.
[14:49:48] **You**: Then.
[14:49:49] **You**: Let me know as soon as you have some news.
[14:49:54] **You**: For our team.
[14:49:56] **You**: Plane is happening as cloud mentioned.
[14:50:00] **You**: We're trying to focus on listings.
[14:50:02] **You**: And get them done before picking the next one.
[14:50:06] **You**: So this is good I think engineers always love it.
[14:50:11] **You**: Hopefully a little bit less context vision here and so the example she mentioned is.
[14:50:17] **You**: Kind of trip planner team was working for several weeks on.
[14:50:25] **You**: Transport automation and danger.
[14:50:28] **You**: Robert came like why are you working on this it's part of spati you're kind of doing it absolutely wrong just throw it away.
[14:50:37] **You**: And stop working on it so they kind of lost.
[14:50:40] **You**: Weeks or even months.
[14:50:43] **You**: On this so and this transporting will eventually come to us but not in cycle two.
[14:50:52] **You**: Managed to not pull this in.
[14:50:56] **You**: So yeah it's something we understand we want to have it right transport is like one part of the puzzle of what supply is and why we want apis outsourcing to free up time for these things and exactly this but yeah we're not there yet and gladly.
[14:51:19] **You**: This part is paused at least.
[14:51:21] **You**: A little bit less.
[14:51:24] **You**: Distractions and yet another things.
[14:51:28] **You**: Eventually we'll get to it.
[14:51:30] **You**: I think this transport.
[14:51:33] **You**: C3 maybe C4.
[14:51:36] **You**: Already.
[14:51:38] **You**: Huge things are happening.
[14:51:41] **Other**: Actually bought all of these trip plana things that are happening. I'm so confused. Like, I really don't know what's going on with sir planet 2. And I don't know, even though there are regular updates, I I really have no idea.
[14:51:54] **Other**: What the status there is and what's happening.
[14:51:57] **You**: Well Trip planner 2 is kind of.
[14:52:00] **You**: Stopped for now.
[14:52:03] **You**: We're doing kind of it's mainly because they built on top of 3 planner 1 backend.
[14:52:12] **You**: And they want like 3 planner tube to be kind of new and fresh.
[14:52:18] **You**: And if you're built on top of the old backend as is you cannot be new fresh so you first need to at least a little bit clean up the old back end before you build on top of it.
[14:52:30] **You**: So at least they're throwing away veto integration.
[14:52:34] **You**: And looking at other things that.
[14:52:38] **You**: Other domains that.
[14:52:40] **You**: Are into this backend which shouldn't be there like pricing is another domain which is between kind of supply and trip planner but shouldn't be in Q.
[14:52:51] **You**: It's like a completely separating so.
[14:52:55] **You**: They are drawing weather away.
[14:53:00] **You**: And also giving these nations to us and maybe extracting prices.
[14:53:06] **You**: And after that.
[14:53:08] **You**: Trip planner backend can be kind of.
[14:53:11] **You**: In a fine state to build on top and UI on top also.
[14:53:16] **Other**: But they use the same one.
[14:53:18] **Other**: The same backend.
[14:53:21] **You**: They will build on top of this it's just another UI.
[14:53:21] **Other**: Okay.
[14:53:26] **Other**: Because Gregor shared this loss of engineering. I broke through it yesterday, and there's this. There are so many interesting.
[14:53:33] **Other**: Things in there that I learned. And this. This one came to the top of my head right now that they want to build new stuff entirely.
[14:53:43] **You**: Yeah.
[14:53:45] **You**: So they're not building entirely new right so they're kind of building on top of it so it's like not planner to it's like 1.1.
[14:53:55] **You**: 5 evolution.
[14:53:57] **You**: So yeah in general g planner.
[14:54:00] **You**: 2 not even starting yet so all still a preparation work we had like two hour workshop this morning about just kind of.
[14:54:14] **You**: Main.
[14:54:15] **You**: Concepts and design.
[14:54:19] **You**: Philosophy.
[14:54:22] **You**: Kind of.
[14:54:24] **You**: Enlightening experience.
[14:54:26] **You**: You know.
[14:54:26] **Other**: That sounds very theoretical.
[14:54:29] **You**: Sort of yeah.
[14:54:30] **You**: So.
[14:54:31] **Other**: Yeah.
[14:54:32] **You**: The level of theory is still too high at the moment I feel like still too many business people on this project and not enough.
[14:54:43] **You**: Technical people involved yet.
[14:54:46] **You**: So there is clearly in balance for me so they're.
[14:54:53] **You**: Engineering organization is struggling definitely with pressure.
[14:54:58] **You**: For example.
[14:55:00] **You**: For trip
