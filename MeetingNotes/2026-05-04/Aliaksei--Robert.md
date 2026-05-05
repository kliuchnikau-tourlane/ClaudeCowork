# Aliaksei / Robert

**Date**: 2026-05-04
**Time**: 16:00 - 16:40

## Attendees

- robert.wolf@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- PR-20 HQ-2-Ecuador (4) [Camera, Google Meet, Mic, TV]

## Transcript

[14:00:10] **You**: Okay.
[14:04:46] **You**: Hello.
[14:04:48] **You**: How are you doing?
[14:04:53] **Other**: Still in the two planar to help
[14:04:55] **You**: Triplantar tip help. Okay.
[14:04:59] **You**: What's going on there?
[14:05:02] **Other**: The problem is that the team is in a deadlock, basically.
[14:05:07] **You**: Okay.
[14:05:08] **Other**: Because we have, like,
[14:05:10] **Other**: we have a lot of ambitions, but the team is quite
[14:05:15] **Other**: quite small. And on the same time, we have made mistakes, like
[14:05:19] **Other**: having them working on the transport pricing service.
[14:05:22] **Other**: Which
[14:05:23] **Other**: belongs on to the supply service.
[14:05:26] **Other**: Area, which actually consumed capacity
[14:05:30] **You**: Mhmm.
[14:05:31] **Other**: 30% of the capacity from cycle one.
[14:05:33] **Other**: Which is now missing to catch up with our original goals.
[14:05:34] **You**: Okay. Yeah.
[14:05:37] **Other**: And if you go deeper, you need actually to really detangle
[14:05:44] **Other**: If you really look into into the root causes of
[14:05:48] **Other**: some of the problems, you realize, okay. It's all missing supply integrations.
[14:05:51] **Other**: So, basically, we need to figure out how we can
[14:05:55] **Other**: paralyze supply to a certain degree.
[14:05:59] **Other**: Because
[14:06:01] **You**: Yeah.
[14:06:02] **Other**: Because, like, with the people that you have from the speedy team, you will not be able to
[14:06:07] **Other**: provide this API, this this item level APIs as fast as they are needed.
[14:06:11] **You**: Yeah, yeah.
[14:06:13] **You**: We have
[14:06:14] **You**: a little bit too much to support.
[14:06:18] **You**: Before we we can do that.
[14:06:20] **You**: Yeah. And also this API outsourcing,
[14:06:25] **You**: it's not, like, as smooth
[14:06:28] **You**: as it could have been.
[14:06:29] **You**: So
[14:06:30] **You**: we'll
[14:06:30] **Other**: Yeah. I think
[14:06:31] **You**: can you hear me?
[14:06:32] **You**: Yeah. So yeah. And also, like,
[14:06:36] **You**: API support outsourcing that could have kind of uploaded us
[14:06:40] **You**: on some things. It's, like, not
[14:06:42] **You**: that smooth, and we are
[14:06:44] **You**: I'm not sure how how well you follow this
[14:06:47] **You**: discussion on API outsourcing. Yeah. So
[14:06:51] **You**: so far, there are
[14:06:55] **You**: quite, like, low quality
[14:06:57] **You**: APIs they provide, and we found quite a lot of mistakes and things
[14:07:02] **You**: that are inconsistent and kind of just
[14:07:05] **You**: errors that are not handled and kind of
[14:07:10] **You**: things are not documented. So we are kind of
[14:07:12] **You**: pushing back on this
[14:07:15] **You**: quite a lot and kind of
[14:07:16] **Other**: And this my understanding, this is integration.
[14:07:17] **You**: rushing
[14:07:18] **You**: from the yeah. This
[14:07:20] **Other**: From the API gateway.
[14:07:23] **You**: 11 InfaTech gateway that would
[14:07:25] **You**: cover a lot of things behind it. But this initial gateway is, like,
[14:07:30] **You**: quite inconsistent, quite a lot of
[14:07:33] **You**: technical issues. So we are kind of
[14:07:36] **You**: in discussions with them on
[14:07:38] **You**: kind of
[14:07:39] **You**: let's
[14:07:41] **You**: slow down
[14:07:42] **You**: This is what we need. These are the issues that we have, and
[14:07:46] **You**: we need you to provide this before we can integrate with your API gateway because it's, like,
[14:07:51] **You**: of too low
[14:07:52] **You**: quality for us to
[14:07:54] **You**: get benefit from.
[14:07:55] **You**: Otherwise, we would be supporting all the weird cases on API gateway
[14:08:00] **You**: and this API gateway would be leaking
[14:08:04] **You**: kind of
[14:08:05] **You**: supplier responses
[14:08:08] **You**: directly without any obstruction on them, and we would end up
[14:08:12] **You**: kind of doing
[14:08:14] **You**: not getting getting benefit from them. So
[14:08:15] **Other**: Okay. But this would actually mean
[14:08:17] **You**: So
[14:08:19] **Other**: that the adapter that they are now building for the supplier gateway needs to be adjusted
[14:08:24] **Other**: each integration.
[14:08:24] **You**: If we just accept this
[14:08:29] **You**: gateway that they provide, yeah,
[14:08:32] **You**: Like,
[14:08:33] **You**: some fields
[14:08:34] **You**: yeah, we don't do anything on that. We just
[14:08:37] **You**: give you whatever supplier gives us, and every supplier has different
[14:08:42] **You**: very small
[14:08:42] **Other**: Can you make sense?
[14:08:44] **You**: Sorry?
[14:08:45] **Other**: Can you make an example?
[14:08:46] **You**: We have, like,
[14:08:50] **You**: documents with 22 that we sent them. Are you in this 11 info tech channel?
[14:08:58] **You**: 11 InfoTech implementation. Yeah. So there is a
[14:08:58] **Other**: Yes.
[14:09:02] **You**: document
[14:09:04] **You**: not
[14:09:06] **Other**: Il
[14:09:09] **You**: On on on Google 11 Infotech dash implementation.
[14:09:10] **Other**: Infotechnologie.
[14:09:11] **Other**: Ja,
[14:09:14] **You**: That
[14:09:15] **Other**: And which document should I click? The one from today?
[14:09:17] **You**: The doc the docs, Google Docs document I think from today's
[14:09:22] **You**: line. It's
[14:09:23] **You**: I don't know.
[14:09:24] **You**: This is the
[14:09:25] **You**: thing that they sent us. Wait. From the last
[14:09:29] **Other**: Yep.
[14:09:29] **You**: week. Let me just find it. It's like the one that Dalha shared.
[14:09:34] **Other**: The the reason for my question is if if it's now an initial
[14:09:37] **Other**: problem with integrating their API gateway, I would be relaxed.
[14:09:41] **Other**: Because the assumption is that this is once it's done,
[14:09:45] **Other**: we have integrated it. But if this points out now out now to a consistent
[14:09:49] **You**: Yeah.
[14:09:50] **Other**: problem,
[14:09:52] **You**: Yeah. Yeah. So we we want to really have, like, gateway that's what's
[14:09:57] **You**: actually match our use case. We want, like, one integration that
[14:10:02] **You**: is that is quite quite clear on on the interface, and we we're
[14:10:07] **You**: done.
[14:10:07] **You**: So, like,
[14:10:09] **You**: but currently, it's not
[14:10:12] **You**: like,
[14:10:13] **You**: point two booking API nor error handling, just kind of
[14:10:17] **You**: generic exceptions.
[14:10:25] **You**: Nunca assiste que é isso? Não sei lá.
[14:10:30] **You**: Quite a lot of things.
[14:10:31] **You**: That they gathered here.
[14:10:33] **Other**: Yeah.
[14:10:34] **You**: So, yeah, we're working on kind of resolving this and kind of pushing back on that. So
[14:10:39] **You**: it's not as fast as it could have been. So that's why we are kind of committing to
[14:10:44] **You**: one splatter for now. But
[14:10:48] **You**: again, back to this discussion that
[14:10:51] **You**: we
[14:10:52] **You**: we are not there yet. So
[14:10:55] **You**: they can
[14:10:56] **You**: offload us from accommodations.
[14:11:00] **You**: So we can support, like, other activities and things like the
[14:11:04] **You**: and flights. It's quite difficult. So, yeah,
[14:11:10] **You**: How do we how do we provide all the things that
[14:11:14] **You**: Tripliner needs?
[14:11:16] **You**: Need
[14:11:17] **You**: activities
[14:11:19] **You**: They need flights. They need transport. Right?
[14:11:20] **Other**: Yep.
[14:11:24] **Other**: By the way, the the check-in and checkout times
[14:11:27] **Other**: ah, sie, dass Expedia, for example, offer the time sein?
[14:11:29] **You**: I
[14:11:32] **You**: Expedia,
[14:11:35] **You**: I don't think they offer time zone. Chicken checkout, they are
[14:11:39] **You**: usually in the
[14:11:41] **Other**: Yeah.
[14:11:41] **You**: kind of
[14:11:42] **You**: destination time zone. Right? The other fields,
[14:11:43] **Other**: Yeah.
[14:11:46] **You**: no. The other fields either
[14:11:49] **You**: they have to have
[14:11:51] **You**: kind of
[14:11:52] **You**: time zone
[14:11:54] **You**: or we currently
[14:11:57] **You**: just
[14:11:58] **You**: talk with every single supplier and get
[14:12:01] **You**: confirmation from them that this is the time zone you can assume, and then we kind of
[14:12:06] **You**: derive it. But for this gateway, we would like to actually have it
[14:12:10] **You**: Right?
[14:12:10] **You**: So we don't need kind of per supplier have a custom handlers yet again.
[14:12:14] **Other**: I'm just saying the August and we failed.
[14:12:19] **Other**: Like, an
[14:12:20] **Other**: does not have a
[14:12:21] **You**: Sorry.
[14:12:23] **Other**: und awesome means, they fehlt.
[14:12:25] **Other**: Or what I'm saying is if Expedia like, we always
[14:12:29] **Other**: failed with providing this time zone, to be honest. Like, our internal systems
[14:12:33] **Other**: our check-in, check out, and also activity start and end date,
[14:12:36] **Other**: We were never managed to add time zones because it was
[14:12:39] **Other**: impossible to know where x like, it actually depends really on the geolocation and
[14:12:43] **You**: No.
[14:12:44] **Other**: time on the hotel and the activities and so on. And if
[14:12:47] **Other**: also has no
[14:12:51] **Other**: no time zone is really indicating a general problem to the wife's time zone.
[14:12:57] **Other**: All what I'm trying to say is
[14:12:59] **Other**: we may can't ask for the impossible.
[14:13:02] **Other**: If it's not market standard. But if it's market
[14:13:06] **Other**: standard, we should really ask for this.
[14:13:06] **You**: Yeah. Yeah. So chicken chicals, we are not asking this. This is, like,
[14:13:11] **You**: confirmed. But other fields, they are
[14:13:11] **Other**: Okay. Yeah. No.
[14:13:13] **You**: kind of
[14:13:14] **You**: possible. So yeah.
[14:13:17] **You**: We're debating. So
[14:13:18] **You**: and there are other things.
[14:13:21] **You**: Also send them kind of
[14:13:22] **You**: some
[14:13:24] **You**: API specification that maybe
[14:13:29] **You**: they can provide us. So, yeah, we are in contact.
[14:13:33] **You**: But overall,
[14:13:34] **You**: it's it is a process.
[14:13:35] **Other**: Who was creating the document?
[14:13:36] **You**: So
[14:13:37] **You**: dental
[14:13:39] **Other**: Okay.
[14:13:41] **You**: h for this one.
[14:13:42] **Other**: Nice.
[14:13:42] **You**: Mhmm. Yeah, yeah. They they did
[14:13:45] **You**: quite good job, very clear every point. So
[14:13:49] **You**: our 11 colleagues can understand it. So yeah.
[14:13:52] **You**: Good.
[14:13:53] **Other**: Okay. And are they refusing to
[14:13:57] **Other**: implement something? So is it more like a okay. Yeah.
[14:13:59] **You**: This is what we are kind of just trying to understand. Right? We are
[14:14:03] **You**: trying to understand how much they want to adjust and how much they just want
[14:14:08] **You**: to bounce and dodge our
[14:14:12] **You**: requirements. So this is kind of
[14:14:14] **You**: what is happening. Tomorrow, we have, like,
[14:14:17] **You**: first meaningful session with them or after they read through this
[14:14:21] **You**: things, they will provide our us concrete answers. So
[14:14:26] **You**: we will... We're looking for how they react to our
[14:14:29] **You**: request, how they kind of
[14:14:32] **You**: open
[14:14:33] **You**: in reality versus open
[14:14:36] **You**: in theory to to making these adjustments.
[14:14:42] **Other**: Yeah. Let's see. Okay. That should be
[14:14:45] **Other**: But to be honest, hopefully, most of the
[14:14:48] **Other**: fields are implemented once.
[14:14:51] **Other**: Working for our suppliers.
[14:14:52] **You**: Yeah. Yeah. We we really want
[14:14:55] **You**: just kind of
[14:14:56] **You**: have normal boolean fields that we don't need to worry about that it
[14:15:00] **You**: will return integer or or whatever.
[14:15:02] **Other**: Yeah.
[14:15:03] **You**: So things like that.
[14:15:04] **Other**: But some, I'm pretty sure there you will have problems like
[14:15:09] **Other**: cancellation fees and cancellation prices is also, like, a huge
[14:15:14] **Other**: mess in the market.
[14:15:15] **Other**: So this is why it also for big suppliers, we sometimes get strings.
[14:15:20] **Other**: Like texts.
[14:15:21] **You**: Yep.
[14:15:22] **Other**: Describing the policy instead of really value. But yeah.
[14:15:26] **You**: Yeah. That's
[14:15:28] **You**: right. So we are kind of just trying to describe
[14:15:32] **You**: majority of our things in our
[14:15:35] **You**: kind of
[14:15:35] **You**: discussing them one by one before we
[14:15:38] **You**: just commit blindly to things and then find that they don't work.
[14:15:41] **Other**: Okay. Besides this, so so API integration is
[14:15:46] **Other**: something that's that's ongoing for V2.
[14:15:50] **Other**: Migration. Have set up now like, this
[14:15:53] **Other**: week, the sales the
[14:15:56] **Other**: the team
[14:15:57] **Other**: wie
[14:17:56] **Other**: Sorry.
[14:18:01] **Other**: I had to go... My dog was playing. Had to go downstairs. Und dann I realized,
[14:18:05] **Other**: fuck, my Internet broke today and I just didn't have time to restart the
[14:18:09] **You**: Okay.
[14:18:10] **Other**: laptop. So I was still connected to my mobile phone. And
[14:18:14] **Other**: which then wake down. Anyways,
[14:18:17] **Other**: sorry. What was my question? My question was regarding
[14:18:19] **You**: So
[14:18:21] **You**: Yeah.
[14:18:22] **You**: I do the application. So we invest quite a lot of of time into better deprecation.
[14:18:29] **You**: Planning,
[14:18:30] **You**: refine
[14:18:31] **You**: the scope,
[14:18:34] **You**: We have quite a good certainty about
[14:18:37] **You**: what needs to be done and how long it will take.
[14:18:38] **Other**: Are you on the website, or, also, have do you have a
[14:18:40] **You**: Actually,
[14:18:43] **Other**: feeling for the trip planner team that they have in understanding what to do?
[14:18:45] **You**: Or the trip planner team yeah. This is what I'm
[14:18:48] **You**: I want to
[14:18:49] **You**: to discuss with you. Right? So
[14:18:50] **You**: we have a
[14:18:52] **You**: general understanding for trip planner team gonna
[14:18:56] **You**: do. Right? And Gregor gave us
[14:19:00] **You**: quite a lot of onboarding, but I feel like we're
[14:19:05] **You**: at this point, we are missing kind of
[14:19:08] **You**: three planner team commitment to this topic. Right? We don't know who gonna be
[14:19:12] **You**: from their team.
[14:19:14] **You**: On this topic, so we can actually
[14:19:16] **You**: join forces and start
[14:19:18] **You**: making kind of
[14:19:19] **You**: unified plan.
[14:19:20] **You**: And
[14:19:21] **You**: overall,
[14:19:23] **You**: this is what's
[14:19:24] **You**: I feel like was missing in this cycle planet.
[14:19:30] **You**: I I would really benefit from
[14:19:33] **You**: some particular
[14:19:34] **You**: technical leads on the teams
[14:19:37] **You**: which kind of cover particular topics like
[14:19:41] **You**: route builder, this is a person who kind of
[14:19:44] **You**: investigates, knows architecture, can answer topics. Same for the
[14:19:48] **You**: Same same for topic.
[14:19:52] **You**: But felt like they were all
[14:19:55] **You**: very busy with
[14:19:57] **You**: finishing the sprint commitments and didn't
[14:20:00] **You**: start really looking into
[14:20:03] **You**: initiatives for for the cycle.
[14:20:06] **You**: So they have, like, general idea, but
[14:20:09] **You**: no kind of technical
[14:20:11] **You**: solution
[14:20:12] **You**: design
[14:20:14] **You**: No people kind of
[14:20:16] **You**: deep into this topic yet.
[14:20:18] **You**: And for example, this Right? All of these topics that were
[14:20:21] **You**: looking at, they're quite tricky. They're not
[14:20:25] **You**: they're horizon two, and
[14:20:27] **You**: they have quite a lot of uncertainty.
[14:20:31] **You**: Like, two weeks ago,
[14:20:34] **You**: general idea, we had, like,
[14:20:35] **You**: one assessment. After two weeks, we
[14:20:38] **You**: found quite a lot of things that we and actually
[14:20:43] **You**: our assessments grew. So we
[14:20:46] **You**: realized that, oh, we need two more people at this
[14:20:50] **You**: for four months in order for us to make these projects happen.
[14:20:54] **You**: So I'm worried that front end part
[14:20:55] **Other**: Yep.
[14:20:57] **You**: with two engineers will not be enough. It will
[14:21:00] **You**: kind of
[14:21:00] **You**: discover some blockers
[14:21:03] **You**: quite
[14:21:04] **You**: soon during implementations. Yeah.
[14:21:04] **Other**: Oh, super.
[14:21:08] **Other**: My point is we do have splitted the team. Right? They are now
[14:21:13] **Other**: two people responding. Like,
[14:21:15] **Other**: at least one person is responsible for the v two, for the whole quarter, for the whole cycle.
[14:21:19] **Other**: At least one.
[14:21:22] **Other**: And we
[14:21:23] **Other**: like, on the back end side, and I'm pretty sure that we have one person on the front end side.
[14:21:27] **You**: From from the team?
[14:21:30] **Other**: Sorry. Now I'm talking about the
[14:21:34] **Other**: no, Mocci Team. From my understanding, is responsible
[14:21:38] **Other**: for the migration on the backend side, so she should have already full
[14:21:42] **Other**: this print. She should have full time. And
[14:21:46] **Other**: be responsible for the front end part.
[14:21:50] **You**: Class n niche.
[14:21:52] **You**: Yeah. Okay.
[14:21:55] **Other**: And Gregor is supporting this, basically, the research
[14:21:59] **Other**: So the idea was that Gregor is
[14:22:01] **Other**: can give Elinus a kickstart explaining what she needs to do, where and why.
[14:22:03] **You**: Ajá.
[14:22:06] **Other**: And that we basically try to paralyze it.
[14:22:09] **Other**: It means that Anish can work on the front end task already.
[14:22:12] **Other**: While Alina is working on a different
[14:22:16] **Other**: ja,
[14:22:17] **Other**: topic that is enabling way to form the backend side. And I think it's a script structure.
[14:22:19] **You**: Mhmm.
[14:22:23] **You**: Okay. So you're taking over from
[14:22:27] **Other**: Ja, en dat
[14:22:28] **You**: Silvia for planning this?
[14:22:30] **Other**: Ja, and that this was my understanding how it was.
[14:22:33] **Other**: Planned. I'm not sure if it was communicated. Silvia is back from my understanding tomorrow.
[14:22:37] **You**: Okay. Okay.
[14:22:38] **Other**: Nee, out of office.
[14:22:43] **Other**: Yeah. We need to to figure out
[14:22:47] **Other**: let me ask around and bring you in contact with one person, but you should
[14:22:50] **You**: Yeah, yeah. Then
[14:22:51] **Other**: have one dedicated person.
[14:22:53] **You**: Yeah, yeah. Then at least what we discussed with Celia as well,
[14:22:58] **You**: that we want our teams kind of joining to
[14:23:02] **You**: one virtual team and work together
[14:23:05] **You**: So we have, like, more communication, collaboration.
[14:23:08] **You**: From the start.
[14:23:10] **You**: On this because, yeah, they better really make a
[14:23:14] **You**: unified plan rather than kind of
[14:23:17] **You**: front end separately, back end separately,
[14:23:20] **You**: separately. So they all kind of work together and
[14:23:24] **You**: make it work rather than kind of make their part work.
[14:23:31] **You**: So, yeah, if early innings and an issue can start, yeah,
[14:23:35] **You**: we can we can onboard that.
[14:23:36] **Other**: Let me double check this and
[14:23:39] **You**: Yeah. Cool.
[14:23:40] **Other**: I'm I hope I can clarify this today.
[14:23:42] **Other**: Because then you would have already contact persons, and then it's
[14:23:47] **Other**: basically
[14:23:49] **Other**: aligning on what can be done in which order and which parallelization.
[14:23:54] **Other**: So from my understanding, for example, changing the search
[14:23:57] **Other**: should be easier. Like, for example, linking an accommodation manually
[14:24:02] **Other**: is just Front End, von my understanding.
[14:24:07] **You**: Manual item?
[14:24:10] **Other**: Now if you if you have an accommodation and you want to link it against the catalog,
[14:24:15] **You**: Ok. Yeah.
[14:24:15] **Other**: from my understanding, that's more front end work, but this is where
[14:24:21] **Other**: Gregor can also help paralyzing this work.
[14:24:22] **You**: Yeah.
[14:24:25] **You**: Yeah.
[14:24:26] **You**: So far,
[14:24:28] **You**: I have, like,
[14:24:28] **Other**: Ja, ich am eigentlich, dass Du das
[14:24:29] **You**: proper understanding of, like,
[14:24:32] **You**: what's on the front end. So we need to build, like, proper solution so we have, like, a full picture.
[14:24:37] **You**: Of what fits where
[14:24:39] **You**: how how do we slice it, and, yeah,
[14:24:42] **Other**: Yep.
[14:24:43] **You**: I
[14:24:45] **Other**: Mhmm.
[14:24:45] **You**: the earlier, the better.
[14:24:47] **You**: Yeah.
[14:24:47] **You**: Cool.
[14:24:50] **You**: Mhmm.
[14:24:50] **Other**: Okay. Hopefully today.
[14:24:52] **Other**: Because I'm pretty sure that we discussed to split the team, and you have at least one front end one back end.
[14:24:57] **You**: Okay. Yeah. And then
[14:25:00] **You**: hopefully, if
[14:25:01] **You**: they look into things and realize that they will need
[14:25:05] **You**: way more support from the teams. They will raise it, at least.
[14:25:08] **Other**: Yeah. This now,
[14:25:10] **You**: Okay.
[14:25:14] **Other**: At least we will know how much work is left inside
[14:25:18] **Other**: three and maybe the dependency to your team is mostly resolved.
[14:25:22] **Other**: So that the Triple Planner has work left. But, yeah, I don't know at the moment.
[14:25:22] **You**: Mhmm.
[14:25:26] **Other**: The research is probably not fully done or was not fully done?
[14:25:28] **You**: Yep.
[14:25:33] **You**: Good. So
[14:25:37] **You**: now we can work on this. And about the second part
[14:25:41] **You**: second project that they're working on,
[14:25:44] **You**: is it? Like, route builder. Right? How
[14:25:48] **You**: well refined is route builder? Do they have, like,
[14:25:51] **You**: solution design that they can onboard
[14:25:54] **You**: with? Because I feel like me, Pedro, we don't have, like,
[14:25:58] **You**: good understanding of what this route builder actually is and how it's gonna work.
[14:26:02] **Other**: Yeah. It's busy
[14:26:06] **Other**: Ja, als so offer creator,
[14:26:10] **Other**: That you have certain certain dates and then so from the AI Hub
[14:26:16] **Other**: in den and is create 'n empty offer that fulfillst these requirements. But I would ask you to wait till Thursday till Sylvia is back and can organize this onboarding.
[14:26:25] **You**: Mhmm. Yeah. Yeah.
[14:26:28] **Other**: But from the concept, it's basically you are answering some questions.
[14:26:32] **You**: Mhmm.
[14:26:32] **Other**: And I can also link you the conference
[14:26:35] **Other**: pages
[14:26:37] **Other**: The idea is
[14:26:40] **Other**: The idea is that you're answering some
[14:26:42] **Other**: questions, and then the
[14:26:44] **Other**: the trip is created automatically with the elements that we have in our catalog.
[14:26:49] **Other**: So basic cloud builder as a human is to stop
[14:26:53] **Other**: like, the places that you want to visit and the number of nights that you want to stay on these places.
[14:26:59] **Other**: Then these places, then we are looking for an
[14:27:04] **Other**: accommodation on each of these places for the numbers of states that they are specified.
[14:27:06] **You**: Yep.
[14:27:08] **Other**: To put them into a trip.
[14:27:12] **Other**: And then we are look using the other searches like
[14:27:18] **Other**: rental cars, transport, whatever we have, or activities to find meaningful
[14:27:23] **Other**: for the trips.
[14:27:25] **Other**: The first version should be able to work with
[14:27:30] **Other**: the existing accommodations and recommender
[14:27:33] **Other**: that we have. Can you hear me? I'm losing.
[14:27:37] **You**: I hear you, but video is shaky. Yeah.
[14:27:40] **You**: Can you hear me?
[14:27:43] **You**: One two. One two.
[14:27:52] **Other**: Yeah. I can hear you, but I'm losing you.
[14:27:57] **Other**: Me restart quickly my router. I'm connected with my mobile phone.
[14:27:57] **You**: Ajá.
[14:28:32] **Other**: Alexis, can you hear me?
[14:28:33] **You**: Yep.
[14:28:35] **You**: Yeah. I can hear.
[14:28:38] **Other**: Okay. Still connected ist mein Mobilphone, bitte
[14:28:42] **Other**: I'm restarting the router now to have a stable
[14:28:43] **You**: Cool.
[14:28:45] **Other**: Wi Fi.
[14:28:47] **You**: No worries.
[14:28:51] **Other**: So
[14:28:56] **You**: Yeah.
[14:28:58] **You**: Then for RouteBuilder,
[14:29:01] **You**: ja,
[14:29:03] **You**: I'll take a look at
[14:29:05] **You**: the conference.
[14:29:07] **You**: You wanted to send me Confluence, and I'll
[14:29:11] **You**: catch up with
[14:29:13] **You**: Sylvia. Hopefully, she's back tomorrow.
[14:29:18] **Other**: She's out to Wednesday. So I pinged Alimus.
[14:29:23] **You**: Elise also
[14:29:26] **You**: on the route builder.
[14:29:29] **Other**: No, that I think Alina's
[14:29:33] **Other**: to support the submitted application.
[14:29:40] **You**: K. Ja.
[14:29:43] **You**: And for for next cycle planning, I think we need to
[14:29:48] **You**: have tech leads maybe more engaged
[14:29:51] **You**: in cycle planning. So they
[14:29:53] **You**: they're available
[14:29:56] **You**: for kind of
[14:29:58] **You**: last couple of weeks of cycle planning?
[14:30:00] **Other**: Yeah. We have I think
[14:30:06] **Other**: I think what we have missed is actually to start
[14:30:10] **Other**: planning or start aligning earlier. I mean,
[14:30:15] **Other**: the was already a huge effort to to sneak in.
[14:30:15] **You**: Yeah.
[14:30:19] **Other**: But it would be next time also for the smart booking platform, for example, to
[14:30:24] **Other**: to
[14:30:25] **Other**: in the last months, we already check
[14:30:27] **Other**: would be the next steps
[14:30:29] **Other**: So basically,
[14:30:32] **Other**: for smart booking, probably you will not the steps, but
[14:30:36] **Other**: then in c three, you probably will roll out
[14:30:37] **You**: Ya, ya,
[14:30:39] **Other**: That means what does it mean
[14:30:41] **Other**: Roll out and get then you have a better better idea.
[14:30:46] **Other**: And for such huge topics for we should have had
[14:30:49] **Other**: proper proper research ticket.
[14:30:53] **You**: So
[14:30:55] **You**: and especially, like, this cycle, we had so many
[14:30:59] **You**: kind of
[14:31:00] **You**: horizon two, three topics
[14:31:04] **You**: Pretty much everything is kind of very new, very
[14:31:08] **You**: high on
[14:31:10] **You**: discovery.
[14:31:11] **You**: It was
[14:31:12] **You**: quite hard to to plan reliably at least.
[14:31:13] **Other**: Yeah. I think it's
[14:31:16] **Other**: Yeah. I think it's it's a it's a general problem that we had
[14:31:20] **Other**: in cycle one that we have started so many complex initiatives.
[14:31:23] **Other**: And even if we flex and assign
[14:31:25] **Other**: cycle three, we we we have proper time.
[14:31:29] **Other**: Like, we started this too late, or
[14:31:33] **Other**: in the end, we went smoothly into into implementation because we thought, okay. No. It's not as bad.
[14:31:40] **Other**: For example, this whole Vito
[14:31:43] **Other**: I'm not sure if the supply team actually understood the Veto-Dependencies
[14:31:47] **Other**: Like, it's also only something that they learned in cycle
[14:31:49] **You**: Yeah. Yeah. It's like
[14:31:50] **Other**: one. Right?
[14:31:51] **Other**: And there was no no no
[14:31:54] **Other**: discovery plan for the TripleLiner team.
[14:31:57] **Other**: And this would have been required to to
[14:32:01] **Other**: start cycle two with a proper
[14:32:04] **Other**: well known discovery, and we have tried now to
[14:32:08] **Other**: sneak this discovery in
[14:32:11] **Other**: Alexia, one last question. The Fox's team support portal.
[14:32:11] **You**: Yep.
[14:32:13] **You**: Mhmm.
[14:32:17] **Other**: My understanding, we do have now
[14:32:20] **Other**: we had a technical discussion for the trip list and the technical discussion about the back end for the support
[14:32:25] **Other**: portal. Right?
[14:32:26] **You**: Yeah.
[14:32:27] **You**: So we had these discussions and then we paused.
[14:32:31] **You**: For for the time being. In the past week, we
[14:32:34] **You**: didn't progress anywhere. So we felt like, okay.
[14:32:38] **You**: This
[14:32:39] **Other**: Ist die Team überhaupt because the Truepfels is now built by the front of team wide?
[14:32:43] **You**: Yeah. About
[14:32:47] **You**: being built by the front end team, this is what Sylvia mentioned
[14:32:51] **You**: before
[14:32:52] **You**: going sick, and she mentioned that we need to
[14:32:56] **You**: properly plan, like, which parts
[14:32:59] **You**: is done by foxes, which where Marco can sit, what he can do. Like,
[14:33:06] **You**: because, yeah,
[14:33:08] **Other**: Do you see a need in cycle two for for back end?
[14:33:11] **You**: I from what I'm the
[14:33:12] **Other**: For Ruby back end?
[14:33:16] **You**: how
[14:33:18] **You**: this project is built and what
[14:33:20] **You**: what it needs, it doesn't really need Ruby back ends. I
[14:33:24] **You**: didn't feel the need for Ruby back end and technical people, they looked at it
[14:33:29] **You**: they felt like, yeah, it's kind of quite a thin
[14:33:32] **You**: wrapper layer on top of APIs just
[14:33:35] **You**: to have a better presentation. It's, like, not much
[14:33:39] **You**: real real logic, just
[14:33:40] **You**: back and for the front end, so we can
[14:33:43] **You**: put it next.
[14:33:45] **You**: Front
[14:33:45] **Other**: And is this only for like, the this is sent back
[14:33:49] **You**: Only for user portal. Right? So
[14:33:50] **Other**: end for the user portal and the support portal?
[14:33:54] **You**: portal has its own backend.
[14:33:56] **You**: Support portal, because we are kind of
[14:33:59] **You**: moving
[14:34:01] **You**: part of its logic
[14:34:02] **You**: that belongs to user portal into user portal.
[14:34:05] **You**: And support portal stays with its own
[14:34:09] **You**: backend, and support portal indeed has quite a lot of backends.
[14:34:13] **You**: It has, like, a lot of AI training and
[14:34:16] **You**: whatever.
[14:34:19] **Other**: And that means the user portal has
[14:34:22] **Other**: two back ends then. This is the the back end that they're currently
[14:34:25] **Other**: maintaining and the back end for the support functionality.
[14:34:32] **You**: I'm not sure about the backend they're maintaining right now.
[14:34:36] **You**: I felt like
[14:34:39] **You**: the things that we are expecting from support
[14:34:42] **You**: portal will kind of fit into
[14:34:44] **You**: type of back ends that they use. Right? Because we are not taking anything support
[14:34:49] **You**: portal specific, right, from support portal. We're taking user portal specific.
[14:34:54] **You**: That
[14:34:56] **You**: stays currently in the wrong place. Right? We're just moving it in
[14:34:59] **You**: user portal, and it stays kind of fits naturally into how they are
[14:35:04] **You**: building it right now.
[14:35:06] **You**: So
[14:35:09] **You**: yeah,
[14:35:09] **Other**: Ok.
[14:35:10] **You**: we don't plan any kind of support portal specific on their side.
[14:35:14] **Other**: What I need to understand is how they architect
[14:35:18] **Other**: looks like for TripVis user and support portal.
[14:35:19] **You**: Yeah,
[14:35:22] **You**: Also,
[14:35:24] **You**: same topic. Right? So would be great if
[14:35:27] **You**: Carolina wasn't that busy with implementation, and she could have
[14:35:32] **You**: supported us, but she was busy. So we're
[14:35:35] **You**: probably gonna be doing this in the next two weeks, this
[14:35:39] **You**: solution and looking to how
[14:35:41] **You**: exactly this looks like, who gonna be
[14:35:44] **You**: taking what where Markus puts his logic and
[14:35:47] **Other**: Okay. Then I will will look to
[14:35:49] **You**: such such things.
[14:35:50] **You**: Yeah. Yeah. So I'm not sure
[14:35:51] **Other**: Then I will will look into
[14:35:55] **You**: who who makes a call here in the team.
[14:35:59] **You**: While Sylvia is out.
[14:36:00] **You**: Right? If they are busy with something, if they can
[14:36:02] **Other**: Is is this always something which
[14:36:03] **You**: kind of switch to support
[14:36:06] **Other**: a recall required soonish?
[14:36:10] **You**: Yeah, because we plan that Markus will be with
[14:36:14] **You**: our team this and next week, and then he already joins Foxes and
[14:36:18] **You**: full time works on and we have all the
[14:36:20] **Other**: Okay.
[14:36:21] **You**: things kinda finalized and planned by then.
[14:36:23] **You**: So, yeah, it's quite important that in the next
[14:36:24] **Other**: Okay.
[14:36:27] **You**: basically, two weeks, we
[14:36:29] **You**: finalize all the questions.
[14:36:29] **Other**: Okay.
[14:36:33] **Other**: Okay. Do you have any question topics, questions, concerns?
[14:36:37] **You**: Yeah. For the next cycle, we we we can
[14:36:41] **You**: discuss it maybe
[14:36:43] **You**: in in
[14:36:44] **You**: in the group
[14:36:46] **You**: delivery plane. Right? How can we maybe
[14:36:50] **You**: add
[14:36:52] **You**: leads to
[14:36:54] **You**: contribute more to the cycle planning. So we are not just
[14:36:58] **You**: engineering managers or
[14:37:02] **You**: managers guessing sometimes, but do enough
[14:37:06] **You**: solution design and and research before we commit to
[14:37:11] **You**: kind of
[14:37:12] **You**: cycles. I'm
[14:37:13] **You**: feeling that this cycle
[14:37:15] **You**: there were some commitments
[14:37:20] **You**: done on kind of
[14:37:22] **You**: not enough technical research. Like,
[14:37:25] **You**: vet on the front and trout builder. I feel like their team pulled quite a lot.
[14:37:30] **You**: I'm not sure if they really
[14:37:33] **You**: gonna be able to commit this.
[14:37:35] **You**: To these things.
[14:37:39] **Other**: It's it's it's indeed a pause, and the pause is
[14:37:42] **Other**: we actually need to have a backlog of research initiatives
[14:37:46] **Other**: Right now, initiatives come in and are supposed to be delivered in the same
[14:37:51] **Other**: cycle, and we are asked for delivery timeline, which we can't.
[14:37:52] **You**: Yep.
[14:37:55] **Other**: And
[14:37:55] **You**: Yeah. This is
[14:37:57] **Other**: We need to get ahead and actually
[14:38:00] **Other**: for the next cycle planning, we need to think
[14:38:04] **Other**: not only for the next cycle, but also the the initiatives that we need to discover for the cycle
[14:38:08] **Other**: the next cycle.
[14:38:09] **Other**: So, basically, in cycle three, we need to have make sure that the
[14:38:13] **Other**: are in that we need for cycle four.
[14:38:14] **You**: Yeah.
[14:38:16] **You**: Yeah. And for, like,
[14:38:18] **You**: for cycle three,
[14:38:20] **You**: what we need to do
[14:38:22] **You**: it's already upon us. It's
[14:38:24] **You**: short two month cycle. Basically, we already need
[14:38:28] **You**: in a month to
[14:38:30] **You**: be be going
[14:38:31] **Other**: Yes.
[14:38:32] **Other**: This is why we need these learnings to have fast
[14:38:36] **Other**: because this is, like, a cycle actually, I'm happy that's the short cycle.
[14:38:36] **You**: Yep.
[14:38:42] **Other**: Because we are not losing so much time. Basically, we have now two months to to to set up in a better way for cycle three.
[14:38:45] **You**: Yep.
[14:38:49] **Other**: Yep.
[14:38:51] **You**: And also, like,
[14:38:52] **You**: Sylvia being sick,
[14:38:54] **You**: we need
[14:38:55] **You**: better resilience on the team. So
[14:38:58] **You**: tech leads step up
[14:39:00] **You**: If I'm sick in in in cycle planning, it shouldn't
[14:39:03] **You**: kind of break the pace for others.
[14:39:06] **You**: So, yeah,
[14:39:10] **You**: my my bed is, like,
[14:39:12] **You**: if we can engage tech leads on the teams
[14:39:15] **You**: more into planning, that will will help already.
[14:39:17] **Other**: In the end, the the technical
[14:39:20] **Other**: The the technical researchers for V2 and and also, like,
[14:39:23] **Other**: drauf should come from the techniques, not from the end.
[14:39:28] **Other**: So basically,
[14:39:31] **Other**: I think the ends are filling a gap now. The question is, what is the gap?
[14:39:35] **You**: Even even PMs are filling the gap.
[14:39:40] **Other**: What what prevented us from
[14:39:43] **Other**: from delegating the way to duplication to the techniques?
[14:39:48] **You**: On my team, Tech Leads,
[14:39:52] **You**: we
[14:39:55] **You**: actually dedicated time. Right? So it was
[14:39:58] **You**: was a choice. Right? Either we
[14:40:00] **You**: like, last month of the cycle, we
[14:40:01] **Other**: ¿Te le va?
[14:40:03] **You**: push
[14:40:04] **You**: for delivery for what we committed, right, and kind of
[14:40:08] **You**: hope that planning goes well with our best
[14:40:12] **You**: guess, or we actually delay a little bit things, but
[14:40:17] **You**: make a better planning. So we need to make better planning and something
[14:40:21] **You**: teams, I feel like,
[14:40:23] **You**: foxes and
[14:40:25] **You**: albatros, they
[14:40:28] **You**: they did more on kind of
[14:40:29] **You**: they pushed more for delivery.
[14:40:31] **You**: In them. Right? And we need
[14:40:33] **You**: we have had a little bit of, kind of asymmetry here.
[14:40:38] **You**: And
[14:40:38] **Other**: Yep.
[14:40:39] **Other**: So it's not it's not that we never thought about the
[14:40:43] **Other**: tech leads or responsibilities were unclear. It was just an optimization for delivery.
[14:40:47] **You**: I I think so.
[14:40:48] **You**: My because
[14:40:50] **You**: if Carolina, for example, was available to do all this
[14:40:54] **You**: technical
[14:40:55] **You**: research and help me and answer the questions, we would be much
[14:41:00] **You**: kind of
[14:41:01] **You**: more confident in the starting cycle. But then they would not
[14:41:05] **You**: probably delivered what they promised, in cycle
[14:41:09] **You**: So, yeah, it's it's it's this trade off.
[14:41:12] **You**: And same with v two on front end. I
[14:41:16] **You**: just have
[14:41:18] **You**: and and niche
[14:41:20] **You**: now. Right? So
[14:41:21] **You**: we had them
[14:41:22] **You**: like, two weeks ago, that would help a lot.
[14:41:25] **You**: With
[14:41:26] **You**: cross team planning.
[14:41:27] **Other**: Yeah. Got it. So, Alinas has time?
[14:41:29] **You**: Mhmm.
[14:41:31] **Other**: So
[14:41:33] **Other**: basically, I ask her to ping you, and I will ping Anish.
[14:41:33] **You**: Mhmm.
[14:41:36] **Other**: That we have proper team then.
[14:41:37] **You**: Yeah. And Gregor is available to
[14:41:42] **You**: support us, to kind of glue everything together.
[14:41:44] **Other**: Yes.
[14:41:45] **You**: While he's here.
[14:41:46] **Other**: Yeah. So, basically, he's would not necessarily code. I mean, if you have
[14:41:49] **You**: Mhmm.
[14:41:51] **Other**: time, can do.
[14:41:52] **Other**: But it's more important that he actually says, okay. This is the things that we can start.
[14:41:56] **Other**: This is the thing where once you have a supply API
[14:42:01] **Other**: like, I'm not even sure if Alinas can start right now.
[14:42:02] **You**: Probably she needs
[14:42:06] **You**: a lot of discovery.
[14:42:08] **You**: Right?
[14:42:08] **You**: And getting it sent.
[14:42:10] **You**: Understand how how things fit into, like, what's plans.
[14:42:10] **Other**: We have
[14:42:15] **You**: Yeah. Yeah.
[14:42:15] **Other**: Yeah. And this is where maybe the team
[14:42:20] **Other**: the SPETI team can set up kickoff meeting with Alinas and Gregor.
[14:42:25] **Other**: Explaining also, like, what they're doing next. And
[14:42:29] **Other**: because Alina has now time to also do the discovery. I mean, it's not enough
[14:42:33] **Other**: to do the road map planning, delivery road map, but at least she better plan what to do.
[14:42:38] **Other**: I
[14:42:39] **You**: Okay. Ja, dann
[14:42:41] **Other**: guess to have it as fast as possible with Gregory, Adidas, and Denise as
[14:42:46] **Other**: small kickoff meeting in combination with the people that you have assigned.
[14:42:48] **You**: Yep.
[14:42:50] **Other**: That we can basically organize how we deliver this.
[14:42:53] **You**: Mhmm. Good. Yeah. Then we won't wait for
[14:42:58] **You**: Celia.
[14:42:59] **You**: Celia recovers, and we we start this week already.
[14:43:03] **You**: Yeah.
[14:43:04] **Other**: Like, it's it's urgent. Like, we have
[14:43:06] **Other**: now pushed all other requests for the team. They have only two task now, RouteBuilder and V2. And RouteBuilder has a little priority because it's
[14:43:15] **Other**: blocking a lot of initiatives from email and the TripleLiner two.
[14:43:19] **Other**: I hope at some point we have a delivery overview over the route builder.
[14:43:24] **Other**: And we may shift more people back to the data verification.
[14:43:25] **You**: Okay.
[14:43:28] **Other**: But moment we need as much
[14:43:31] **Other**: speed on the work
[14:43:34] **You**: Okay.
[14:43:35] **You**: Yeah.
[14:43:36] **You**: So
[14:43:38] **You**: this should work. Right? So
[14:43:40] **Other**: Yep.
[14:43:41] **You**: I think
[14:43:44] **You**: think we will we'll we'll start and should be fine.
[14:43:44] **Other**: Okay, perfekt. Senden
[14:43:47] **Other**: Okay. Perfect. Then you organize or, like, the speedy team?
[14:43:51] **You**: Yep.
[14:43:51] **Other**: Meaning you can delegate this. They should they'll organize the
[14:43:56] **Other**: kickoff meeting. They should
[14:43:57] **Other**: I think, in the V2 application, they should
[14:43:59] **Other**: more
[14:44:01] **Other**: keep everything together. It's a it's it's it's a this initiative is led by the Speaker team.
[14:44:06] **Other**: And the team is doing their
[14:44:09] **Other**: to support you, but this is an initiative from the team.
[14:44:11] **You**: Okay.
[14:44:13] **Other**: For the Fox's team, I will ask around how we
[14:44:16] **Other**: the architecture and what are the next steps here.
[14:44:17] **You**: Okay.
[14:44:21] **You**: Perfect.
[14:44:25] **Other**: Anything else? And the yeah. Roadmap planning needs to be improved.
[14:44:27] **You**: Yeah, definitely. About
[14:44:32] **You**: Gregor replacement. I I spoke with Veronica. She wants
[14:44:36] **You**: to
[14:44:37] **You**: hire staff engineer.
[14:44:39] **You**: So, yeah, please, if if we when we
[14:44:43] **You**: start hiring, I'd like to also
[14:44:45] **You**: maybe participate
[14:44:47] **You**: So, also, include me
[14:44:49] **You**: Good.
[14:44:50] **Other**: Okay.
[14:44:51] **Other**: Yeah. We have to to create a kickoff form and go from there.
[14:44:51] **You**: Mhmm.
[14:44:56] **You**: Good. Anything urgent I need to know?
[14:44:57] **Other**: Okay.
[14:44:58] **Other**: No. It's
[14:45:02] **You**: Okay.
[14:45:02] **Other**: it's really, like, getting out of this mess at the moment.
[14:45:06] **You**: Mhmm. Yep.
[14:45:06] **Other**: The more structured delivery phase again.
[14:45:10] **Other**: And at the moment, everyone is nervous because we can't give a delivery roadmap.
[14:45:15] **Other**: Because we
[14:45:16] **You**: Yeah, yeah, yeah.
[14:45:16] **Other**: we are not we don't know.
[14:45:18] **Other**: And this is it.
[14:45:20] **You**: Today meeting in the morning, it
[14:45:24] **You**: felt like everyone is, like,
[14:45:25] **You**: very
[14:45:26] **You**: on the edge stressed out. Like, so, yeah.
[14:45:28] **Other**: I mean, it's
[14:45:31] **You**: We
[14:45:32] **Other**: look at this Expedia certification.
[14:45:34] **Other**: Yeah, maybe we are fast, maybe not. API
[14:45:37] **Other**: so much depending now on them that we can't do a profitability. Is blocked
[14:45:38] **You**: Yep.
[14:45:42] **Other**: teams. Route builder is the same. We didn't have fully finalized the discovery, so we can't
[14:45:45] **You**: Yeah.
[14:45:47] **Other**: commit to an online. That means for major teams, for major initiatives, we are blocked.
[14:45:52] **Other**: Smart booking looks good.
[14:45:55] **Other**: But ja, als
[14:45:55] **You**: It's still kind of, like,
[14:45:56] **Other**: c-three.
[14:45:58] **You**: a little bit low on
[14:46:01] **You**: resources. So, yeah,
[14:46:02] **Other**: Is
[14:46:04] **You**: c three.
[14:46:05] **You**: Yeah, yeah.
[14:46:05] **Other**: Is Sasha using AI?
[14:46:08] **Other**: For Kunden?
[14:46:10] **You**: Everyone is using AI nowadays.
[14:46:12] **You**: Sasha was kind of a conservative user, but
[14:46:16] **You**: he's kind of using it more and more, and he's forcing himself to code
[14:46:21] **You**: once a week without AI.
[14:46:24] **You**: So he's, like, not rusty, but
[14:46:26] **You**: yeah, he's also... Everyone is kind of
[14:46:28] **You**: full full on with AI.
[14:46:30] **Other**: Do you see a speed improvement basis, like, for the booking platform?
[14:46:36] **You**: Some things, definitely.
[14:46:38] **You**: Especially with
[14:46:40] **You**: documents in the airport that
[14:46:43] **You**: they inherited from Markus. Right? It's different text text.
[14:46:47] **You**: And they are kind of
[14:46:49] **You**: supporting each with help of AI. Without it, they would be, like, in trouble.
[14:46:55] **Other**: Ability to translate
[14:46:57] **You**: Yeah. Translates
[14:46:57] **Other**: Code bis between different text text.
[14:47:00] **You**: and explain ever since much, much quicker.
[14:47:04] **You**: In writing, actually, my personal
[14:47:07] **You**: experience, like, two months ago, it was writing way better than
[14:47:10] **You**: now.
[14:47:10] **You**: Claude is kind of really degrading slowly. And
[14:47:15] **You**: yeah, hopefully, it recovers.
[14:47:20] **Other**: We have to see. Okay. Thank you.
[14:47:23] **You**: Alright. See you.
[14:47:24] **Other**: You too. Bye.
[14:47:25] **You**: Have a good day.
