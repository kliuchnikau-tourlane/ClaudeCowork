# EM - Delivery Management

**Date**: 2026-05-05
**Time**: 16:00 - 16:55
**Location**: PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- robert.wolf@tourlane.com
- veronica.garcia@tourlane.com
- EM
- aliaksei.kliuchnikau@tourlane.com
- PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]
- thorsten.dietzsch@tourlane.com

## Transcript

[14:03:39] **Other**: Not now because the system has decided in a way that it's
[14:03:44] **Other**: without like, they have used the tools that they
[14:03:47] **Other**: are supposed to have or that they currently have.
[14:03:50] **Other**: But this is where I do believe
[14:03:55] **Other**: In other systems, need to have a proper integration.
[14:03:58] **Other**: And not pushing data in random fields.
[14:04:01] **Other**: And this is where I see the dependency more
[14:04:05] **Other**: to
[14:04:06] **Other**: yeah, data science at the moment. They can use the platform.
[14:04:11] **Other**: Like, we have two options. Like, either we use the platform that we have
[14:04:14] **Other**: the data the AI hub,
[14:04:17] **Other**: to provide an API that's access that is accessing the database.
[14:04:21] **Other**: Or we are asking data engineers?
[14:04:23] **Other**: To provide a new setup to host some API.
[14:04:26] **Other**: So three options. We use
[14:04:31] **Other**: export functionalities that we have in AirBite,
[14:04:34] **Other**: to write in target systems, so, like, exporting a CSV
[14:04:38] **Other**: pushing Option two is
[14:04:42] **Other**: using the AI hub to create an API to access the CDP.
[14:04:46] **Other**: Option three is data engineering are creating a new API.
[14:04:50] **Other**: And posting system environment.
[14:04:53] **Other**: I don't know fully
[14:04:56] **Other**: I have a tendency to option two.
[14:04:58] **Other**: Okay. But that would be basically also this
[14:05:02] **Other**: on the CDP infrastructure.
[14:05:05] **Other**: Design. Right? Yeah.
[14:05:07] **Other**: Austin?
[14:05:10] **Other**: I don't know that technical solution well, but we
[14:05:13] **Other**: also have these embedded
[14:05:16] **Other**: reports
[14:05:17] **Other**: Yeah. Embedded look at like, this is Yes.
[14:05:20] **Other**: It's it's a like, the one discussion is how do we enable the
[14:05:25] **Other**: test now
[14:05:26] **Other**: The problem is actually we need to understand how we enable this
[14:05:30] **Other**: CDP information for other systems in general.
[14:05:32] **Other**: Like,
[14:05:33] **Other**: how do we do now validate this assumption?
[14:05:37] **Other**: As possible, but also, like, how do we put this onto production then in in the in the real world?
[14:05:42] **Other**: Yeah. But this is the activation layer. Right? Which could be Yep.
[14:05:46] **Other**: Which could be high touch, for example. It could be homegrown.
[14:05:50] **Other**: And for this one, I'm but could it
[14:05:53] **Other**: would it work for this case? What do you think about these embedded reports?
[14:05:57] **Other**: I suggested this initially. I oh, you suggest this
[14:06:00] **Other**: Okay. Because to me, that would be it could be a good op
[14:06:03] **Other**: because it would be once it's implemented, we could just
[14:06:06] **Other**: change against because of the loading time, but we can
[14:06:10] **Other**: like, we can take this offline. But there are three three options. The question for me is, do we already want to
[14:06:15] **Other**: a technical
[14:06:16] **Other**: infrastructure?
[14:06:18] **Other**: Research for the full hosting
[14:06:20] **Other**: do we say we wait for the MVP to to understand if it provides value?
[14:06:24] **Other**: Okay.
[14:06:25] **Other**: Because the MVP, we can do many ways and fast.
[14:06:30] **Other**: Yeah.
[14:06:31] **Other**: Okay. So this may be something. I I have to CDP check-in tomorrow with and Joanna.
[14:06:38] **Other**: Now that it looks like we can work on that in the next eight weeks, which is great,
[14:06:44] **Other**: the two of us, we we can discuss or
[14:06:47] **Other**: together with Micha.
[14:06:48] **Other**: Mhmm.
[14:06:51] **Other**: Ja, as as as the target is MVP and even MVP, we have a lot of options.
[14:06:55] **Other**: Like, we can discuss and write some down. It's for me, the the upline question is
[14:07:00] **Other**: how do we do this in the long term? I'm thinking telescope.
[14:07:03] **Other**: Like, how can we enable the MEP fast
[14:07:06] **Other**: while not, ignoring the the
[14:07:09] **Other**: target state so that we don't accumulate too much technical debt.
[14:07:13] **Other**: But it's not learned fast.
[14:07:16] **Other**: Yeah. But in c three, everyone wants to implement this so that I have to say I don't know yet.
[14:07:21] **Other**: Mhmm.
[14:07:22] **Other**: Yeah. But that's that's one of the
[14:07:24] **Other**: one of the questions maybe that we can target in the discovery.
[14:07:28] **Other**: Mhmm.
[14:07:29] **Other**: Nice. But just, I mean, I'm I'm quite happy because, like,
[14:07:33] **Other**: few hours ago, it looked like hitting a brick wall, and now it's it's it looks like we are
[14:07:38] **Other**: getting with our thick heads, we're getting through that brick wall.
[14:07:42] **Other**: Yes.
[14:07:45] **Other**: So what we did last
[14:07:49] **Other**: session, we went through the cycle one of the team
[14:07:56] **Other**: and then looked into cycle
[14:07:58] **Other**: two. Why? To understand what was
[14:08:02] **Other**: cycle one, what was
[14:08:04] **Other**: able to be finished, and what is
[14:08:07] **Other**: an overflow into into cycle
[14:08:12] **Other**: two.
[14:08:14] **Other**: And, yeah, understand, so to say, high level the the health of
[14:08:18] **Other**: cycle one.
[14:08:19] **Other**: And then
[14:08:20] **Other**: going into cycle two, what would we pick up?
[14:08:24] **Other**: So since, you know, Thalsen, you you were
[14:08:29] **Other**: kind of put into this one,
[14:08:32] **Other**: We would shortly start
[14:08:36] **Other**: with with you to, yeah,
[14:08:39] **Other**: I don't know if it's interesting to say then to the other
[14:08:42] **Other**: teams and so on, but then let's start with you.
[14:08:46] **Other**: If you want, you can then leave
[14:08:50] **Other**: earlier the meeting.
[14:08:54] **Other**: Okay. Then what I did is yeah.
[14:08:59] **Other**: Here,
[14:09:00] **Other**: showing is a cycle one of the date
[14:09:04] **Other**: and AI team.
[14:09:07] **Other**: Since we didn't do the foxes
[14:09:11] **Other**: Albert Rose and Mochi,
[14:09:14] **Other**: Please also share the agent efficiency topic
[14:09:17] **Other**: So we looked into first what was achieved,
[14:09:22] **Other**: and
[14:09:24] **Other**: yeah, what was was
[14:09:27] **Other**: what was really done in in the cycle one.
[14:09:30] **Other**: Alright. Let me open that.
[14:09:34] **Other**: Today.
[14:09:37] **Other**: Make it bigger? Do you mind the same?
[14:09:46] **Other**: Let me open that as well. So you would want me to
[14:09:50] **Other**: give an overview now of what was achieved and what was not achieved?
[14:09:53] **Other**: Mhmm.
[14:09:55] **Other**: Yeah. So from top to bottom, so customer agent matching, we didn't touch.
[14:09:59] **Other**: In in the last quarter. So that was on
[14:10:02] **Other**: we put that on on on pause. So the reason was
[14:10:07] **Other**: don't know how much detail you want, but the reason was this was the last thing that Hector did before leaving.
[14:10:12] **Other**: Was right before Pixian start, and we said we rolled it out.
[14:10:16] **Other**: But under the constraint that if if any
[14:10:20] **Other**: question mark comes up, we pause it.
[14:10:23] **Other**: So that we don't risk anything through peak season, and then we pick it up
[14:10:27] **Other**: when we have more capacity after peak season. So now
[14:10:32] **Other**: we are so so what then came up was some inconsistency that Roman, I
[14:10:37] **Other**: think, introduced through
[14:10:39] **Other**: through the steering of freelancers, which
[14:10:42] **Other**: so we would have needed to to spend more time on that, and then we do
[14:10:46] **Other**: as per the process that we agreed that we would pause it. And we could now
[14:10:51] **Other**: theoretically, at any moment in time, we could pick it up again.
[14:10:55] **Other**: And and bring it live.
[14:10:57] **Other**: But but we didn't do it in the last cycle.
[14:11:04] **Other**: Same with the improved demand forecasting. So there is an input for the
[14:11:08] **Other**: sales capacity steering, because of
[14:11:11] **Other**: our own capacity and because
[14:11:14] **Other**: the consuming teams, for example,
[14:11:18] **Other**: steering, we agreed that the forecast is good enough to get us through peak season.
[14:11:23] **Other**: So we didn't touch that.
[14:11:24] **Other**: But this might be something that we pick up again in,
[14:11:28] **Other**: preparation for the next peak season.
[14:11:30] **Other**: This means also customer agent matching is not going
[14:11:34] **Other**: to
[14:11:36] **Other**: into c two. Right? It's not on the on the
[14:11:40] **Other**: Not currently. What the question is
[14:11:43] **Other**: we we have now we will get now extra capacity if we say we don't do lead scoring.
[14:11:48] **Other**: And we don't do the, we don't replace it by the research
[14:11:52] **Other**: for the smart smart calling.
[14:11:55] **Other**: This might open up
[14:11:57] **Other**: capacity for either another pricing work package
[14:12:01] **Other**: or come.
[14:12:02] **Other**: And we need to check how much effort that is and which one we could put in.
[14:12:08] **Other**: I mean, it's it could make a lot of sense. Yep.
[14:12:13] **Other**: Okay.
[14:12:14] **Other**: Yep. Yep.
[14:12:17] **Other**: And then, okay, then hand over task. This is probably not
[14:12:20] **Other**: interesting for you. Yeah. We we did that.
[14:12:23] **Other**: And then marketing support.
[14:12:26] **Other**: This this is ongoing. So the pricing analysis we did. So this is the
[14:12:30] **Other**: the quarterly refresh of the markup recommendations where every quarter
[14:12:35] **Other**: we run these elasticity analyses on data science side.
[14:12:39] **Other**: And then marketing. So now our share in pricing takes that,
[14:12:44] **Other**: and uses some other information like our history of markup adjustments and so on.
[14:12:49] **Other**: To come up with a suggestion that they then present to Fibor and Roman and then to
[14:12:53] **Other**: Julian and Frank. We did that once a quarter, and we did that last
[14:12:57] **Other**: in March. And the next one would be
[14:13:00] **Other**: in June. And this is also part of the
[14:13:03] **Other**: of the road map. And some of these work packages that we discussed as
[14:13:07] **Other**: part of pricing would go beyond just rerunning the analysis. They would add
[14:13:11] **Other**: more functionality to By the way, I would assign it to milestone
[14:13:16] **Other**: for technically because you are adjusting the the mark ups, which is the sales price
[14:13:21] **Other**: Yeah. Good. Good.
[14:13:24] **Other**: Alkan, ich weiß nicht, Alkan,
[14:13:28] **Other**: Robert, you are just stealing some
[14:13:31] **Other**: some markup
[14:13:35] **Other**: milestone. Maybe I need to talk to Bjorn and Achille first because I did nothing.
[14:13:40] **Other**: Be honest. But it's technically this milestone.
[14:13:44] **Other**: Just get it for you. Okay. But I I yeah.
[14:13:48] **Other**: I mean and you are you are doing that for in situ
[14:13:53] **Other**: two?
[14:13:53] **Other**: Yes. I mean, this what we're like, the the pricing analysis? Yes.
[14:13:58] **Other**: It's on the road map. Yeah. This is on the road.
[14:14:01] **Other**: Just the question is how much we do. So the baseline would be to rerun the existing script
[14:14:06] **Other**: This will do in any case, and then
[14:14:09] **Other**: Achille has some ideas of, how to go beyond that.
[14:14:13] **Other**: Including seasonality and other other
[14:14:17] **Other**: like, other ideas to make the model more relevant and more complex.
[14:14:20] **Other**: And this is basically what we're discussing with
[14:14:23] **Other**: marketing now. Yes. But the baseline, at least we do in, in q two as well,
[14:14:28] **Other**: and the next time would be for June so that then, I think,
[14:14:32] **Other**: what Julian and Frank want to do is to only adjust
[14:14:35] **Other**: prices once per quarter. So this is then
[14:14:37] **Other**: always once per quarter, and the next time would be June to adjust
[14:14:42] **Other**: prices and adjust markups for them July, August, and September.
[14:14:46] **Other**: Yes. And the second topic is The US paid search
[14:14:50] **Other**: cost reduction. So here, the main
[14:14:52] **Other**: idea is that in in The US, the cost per
[14:14:56] **Other**: opportunity for
[14:14:59] **Other**: a nonbrand search is €800, which is
[14:15:03] **Other**: about double what we need to for the channel to break even.
[14:15:07] **Other**: And, yeah, that that's basically the idea where we work on with data science.
[14:15:12] **Other**: And it's for scaling The US, there is two channels. One is the
[14:15:16] **Other**: paid social, but we like, marketing assumes there's some ceilings. We can't
[14:15:20] **Other**: scale that channel very well. So the, the paid search and all the brand will be
[14:15:24] **Other**: become more important. This is why it's important to bring down the cost of that.
[14:15:28] **Other**: And this is what we're currently working on. And,
[14:15:32] **Other**: we had a
[14:15:33] **Other**: review meeting
[14:15:35] **Other**: this morning, which was at the same time at the data weekly meetings. So I need to
[14:15:39] **Other**: to need to catch up. It it sounds like it went well, but I I ran the other meeting.
[14:15:44] **Other**: Yes. But this this this is also continuing.
[14:15:51] **Other**: Okay. But all so
[14:15:53] **Other**: those were all delivered?
[14:15:57] **Other**: Only customer agent matching was paused.
[14:16:01] **Other**: Yeah. And the improved demand forecast. So if you if you scroll to the right a little bit, there is a
[14:16:05] **Other**: phase. I just
[14:16:07] **Other**: a bit more and more. What's up? Now now back back back back back.
[14:16:12] **Other**: Back. Stop.
[14:16:13] **Other**: There's yeah. So this is deployed deployed. Or
[14:16:18] **Other**: Is the handover I mean, handover task is
[14:16:21] **Other**: Yeah. Yeah. I mean, it's it's done, or we we can now hear it. Yeah.
[14:16:26] **Other**: I mean, whatever we wanna put there. And then pricing analysis was delivered. US paid
[14:16:31] **Other**: cost reduction is in progress.
[14:16:33] **Other**: We could maybe chunk it and say the first milestone was delivered and now in in
[14:16:37] **Other**: c at c two, it's it's it's continuing. But it was
[14:16:41] **Other**: like, mean, everything was as planned.
[14:16:43] **Other**: Yeah. Okay.
[14:16:46] **Other**: Yeah.
[14:16:49] **Other**: Good. Then agent efficiency.
[14:16:52] **Other**: Okay. I so I can speak slightly less informed about those.
[14:16:58] **Other**: I think the I would probably need to check out the
[14:17:03] **Other**: exactly how we did there. So for accommodation recommendation, I know that
[14:17:10] **Other**: we we did the discovery. We
[14:17:13] **Other**: that, for example, the that's that we only
[14:17:17] **Other**: called the recommender in 50% of the time, then also only in the sub
[14:17:22] **Other**: of these
[14:17:23] **Other**: made a recommendation. Okay. I I need to check exactly how we did the three.
[14:17:28] **Other**: To give you an informed
[14:17:30] **Other**: like, as informed. I mean, we can look at the up to date one.
[14:17:35] **Other**: Because I asked, email to UpToDate last week.
[14:17:39] **Other**: We can just directly go to the one from q two From q week because we
[14:17:45] **Other**: this is also something that we would have discussed, on Thursday.
[14:17:49] **Other**: What is the name of the q two one?
[14:17:52] **Other**: Because there should be everything up to date.
[14:17:55] **Other**: Yeah.
[14:17:56] **Other**: Yeah.
[14:17:57] **Other**: What's the name of that one q two two
[14:18:03] **Other**: I'm showing it.
[14:18:05] **Other**: Great.
[14:18:08] **Other**: So the transport recommendation is
[14:18:13] **Other**: in development and the accommodation v one
[14:18:18] **Other**: also in development.
[14:18:21] **Other**: Yes. That's the start from from last week.
[14:18:25] **Other**: Last week.
[14:18:27] **Other**: Thursday.
[14:18:29] **Other**: And
[14:18:30] **Other**: yeah,
[14:18:34] **Other**: Yep. True. Okay.
[14:18:36] **Other**: Yeah. I think this I only need to check one time
[14:18:39] **Other**: mean, we we would discuss it latest in two days on Thursday.
[14:18:44] **Other**: Just one remark. Back end discovery, front end
[14:18:48] **Other**: discovery, truth assembly, I would see more on the Albert Rosmochie tab instead of
[14:18:52] **Other**: the AI
[14:18:54] **Other**: Angie. Want to want to balance it.
[14:18:57] **Other**: I think what what email did was now because it's now one team that I think
[14:19:01] **Other**: that's probably the same if you go to the
[14:19:03] **Other**: the Albatross
[14:19:04] **Other**: Yeah. Exactly. That's what I'm checking now.
[14:19:08] **Other**: If you go to the AvaTraus tab.
[14:19:10] **Other**: I think he basically duplicates then that because it's it's it's the same. Content
[14:19:15] **Other**: back end discovery phase and begin delivery, front end discovery phase and
[14:19:19] **Other**: begin delivery.
[14:19:24] **Other**: Yep. And to then transport recommendation, accommodation,
[14:19:28] **Other**: So that's a duplicate of those. Mhmm.
[14:19:34] **Other**: Yes. It's a duplicate
[14:19:37] **Other**: to have it in one place for you guys for our Thursday meeting.
[14:19:41] **Other**: Yeah.
[14:19:41] **Other**: Yep.
[14:19:45] **Other**: I can see. Look into the AI hub
[14:19:49] **Other**: either. We we need to then then switch, but yeah.
[14:19:53] **Other**: Yeah. Okay. But
[14:19:56] **Other**: short exactly. What we had on the CDP side is this
[14:20:00] **Other**: conflict, but on the others, you are
[14:20:04] **Other**: not
[14:20:05] **Other**: so you are not blocked or you are confident you can deliver
[14:20:12] **Other**: This is now looking?
[14:20:14] **Other**: Or CDP and backward looking?
[14:20:17] **Other**: This one is now q two So we are now looking forward looking. Okay.
[14:20:23] **Other**: So Okay.
[14:20:25] **Other**: Okay. Yeah. For CDP, yeah, for CDP, forward looking is
[14:20:28] **Other**: is the main dependency is Salesforce. This is what we have been
[14:20:33] **Other**: discussing, like, yesterday and how they call it.
[14:20:35] **Other**: Otherwise, the rest is internal.
[14:20:37] **Other**: And we shouldn't be blocked as far as we know today.
[14:20:42] **Other**: And then in terms of data science forward looking,
[14:20:47] **Other**: we're also not blocks. We the only thing that we need to figure out now is
[14:20:52] **Other**: if we don't do lead scoring, if we don't do the research for, smart calling,
[14:20:57] **Other**: what do we do with that capacity? Is it maybe come? Is it maybe another pricing
[14:21:01] **Other**: work package?
[14:21:03] **Other**: That's
[14:21:04] **Other**: that's now with the free capacity. It's in it's it's now
[14:21:09] **Other**: an opportunity to fill it with something good. And otherwise, it's
[14:21:13] **Other**: I think we are
[14:21:14] **Other**: we are close to set.
[14:21:16] **Other**: What was the goal of
[14:21:18] **Other**: come? So which KPI would have moved to that?
[14:21:23] **Other**: C m one, probably, we need to re I think it's not called c m one at
[14:21:28] **Other**: anymore. So before, Cam was only looking at c f three.
[14:21:32] **Other**: Without without looking at profit in any way.
[14:21:35] **Other**: So we were just looking at how our agents are closing, but not
[14:21:39] **Other**: exactly, but not a profit. And this is now both together.
[14:21:45] **Other**: So, basically, it would also pay into the
[14:21:49] **Other**: milestone four Yeah.
[14:21:53] **Other**: Yeah. Which means Robert which means here then
[14:21:59] **Other**: it's it's on us.
[14:22:02] **Other**: To have that discussion
[14:22:05] **Other**: So if we decide that the lead score is not
[14:22:08] **Other**: going in, to have the discussion in which one so which one would have the higher impact and then
[14:22:15] **Other**: what would we want to take in. Right?
[14:22:20] **Other**: So do you know
[14:22:22] **Other**: where where
[14:22:25] **Other**: where our backlog is clearest? So, Achille,
[14:22:29] **Other**: backlog versus come backlog.
[14:22:32] **Other**: And this come in backlog
[14:22:35] **Other**: also, or is this
[14:22:37] **Other**: is all in that one?
[14:22:39] **Other**: What should we exactly who who would
[14:22:42] **Other**: who who has a stake in common, you mean? Or Yeah. Basically, so
[14:22:46] **Other**: business from a business side, who is owning it or wants it?
[14:22:51] **Other**: Even?
[14:22:52] **Other**: I mean, Roman and would want it.
[14:22:55] **Other**: The country leads.
[14:22:59] **Other**: Comes more from a funnel efficiency perspective.
[14:23:04] **Other**: Mhmm.
[14:23:05] **Other**: But this is not, like, an efficiency topic. It's more
[14:23:09] **Other**: business impact, really, like, business profitability.
[14:23:14] **Other**: Okay. Then it's in our pillar to decide which one we would like
[14:23:18] **Other**: to have in case that we say, okay, we have capacity in the data.
[14:23:23] **Other**: Mhmm.
[14:23:24] **Other**: One one node to cam
[14:23:28] **Other**: If we change smart
[14:23:31] **Other**: call, like, the problem is, like, it's conflicting with smart calling. It needs to be touched
[14:23:34] **Other**: anyways if you're smart calling.
[14:23:37] **Other**: The problem is, like, as I don't know when smart calling comes,
[14:23:40] **Other**: I cannot definitely say postpone it, but my initial reaction
[14:23:45] **Other**: was to postpone it.
[14:23:47] **Other**: Smart calling will come?
[14:23:48] **Other**: Cum because the way cum works is is is conflicting with smart
[14:23:52] **Other**: calling. It's not possible, so it needs to be adjusted.
[14:23:55] **Other**: It's actually a good foundation
[14:23:58] **Other**: for smart calling, but it's not in the way how it's currently implemented.
[14:24:02] **Other**: That means if we can foresee that we will work on smart calling,
[14:24:05] **Other**: that would be an argument to focus on pricing
[14:24:08] **Other**: because here we have a clear
[14:24:11] **Other**: there's no no brainer. There's there's not conflicting with something.
[14:24:14] **Other**: Or what I'm saying is if we work on comm, it can be that we in c three,
[14:24:18] **Other**: or as soon as have an additional
[14:24:21] **Other**: capacity,
[14:24:22] **Other**: need to work on this again.
[14:24:24] **Other**: Mhmm.
[14:24:26] **Other**: But, I mean,
[14:24:29] **Other**: my guessing would be to if we can to pull income,
[14:24:32] **Other**: rather have an an iteration on on on the cum algorithm and integration
[14:24:37] **Other**: Or, I mean, how how is Yeah. That that doesn't make sense.
[14:24:41] **Other**: Because we had come
[14:24:43] **Other**: it was really
[14:24:45] **Other**: showing very good
[14:24:49] **Other**: So from what Emile said, it was really
[14:24:53] **Other**: going into the right direction, and we pause it
[14:24:56] **Other**: because of the freelancers, which we don't have anymore.
[14:25:00] **Other**: As a world that is developed and never went live before Christmas,
[14:25:05] **Other**: It was it went live. So it it went live for
[14:25:09] **Other**: maybe, like, two weeks or something. And then
[14:25:13] **Other**: I don't know, some some some bugs, some alert, something happened, and we had
[14:25:18] **Other**: before
[14:25:19] **Other**: we had before agreed
[14:25:21] **Other**: to get sales capacity live and to not put, the peak season at any risk
[14:25:26] **Other**: Okay. But then I'm reverting my sentence. If the development work is already done,
[14:25:31] **Other**: it does not make sense to postpone this by five months or whatever.
[14:25:34] **Other**: Now we just need to dust it. Yep. I mean, probably
[14:25:38] **Other**: Yeah. To to not go too deep into the
[14:25:41] **Other**: one, I would ask you, Robert and please
[14:25:46] **Other**: So first we need to take the decision that LeadScore is out
[14:25:50] **Other**: right if this is out then it would be
[14:25:54] **Other**: Robert and Thompson to to discuss on which
[14:25:59] **Other**: one would be the the the best topic to work on, or or if
[14:26:03] **Other**: pricing or not because both contribute to milestone four.
[14:26:08] **Other**: And
[14:26:11] **Other**: from that perspective,
[14:26:15] **Other**: also looking into our strategy what would be the best one to
[14:26:19] **Other**: to then
[14:26:22] **Other**: do. And
[14:26:23] **Other**: that would be
[14:26:25] **Other**: here
[14:26:27] **Other**: looking forward on this cycle too then.
[14:26:31] **Other**: Do we do that tomorrow, Robert? Or
[14:26:34] **Other**: how do we do that?
[14:26:36] **Other**: When
[14:26:38] **Other**: I don't You need to take the lead scores.
[14:26:42] **Other**: Spike decision.
[14:26:44] **Other**: Uh-huh.
[14:26:45] **Other**: Who takes that?
[14:26:46] **Other**: But you're so muted. It's I can't hear it all.
[14:26:50] **Other**: Oh, wait. The lead score decision is already made. We are pouring this. The reason is that
[14:26:55] **Other**: we have, at the moment, no way to use the lead score.
[14:26:58] **Other**: Yeah. Or at least
[14:27:00] **Other**: first information that I would need where it should be used. If it's used in agent prioritization, I have to say no way.
[14:27:05] **Other**: Yeah. That's the idea from your
[14:27:09] **Other**: Okay.
[14:27:09] **Other**: Like, move it. Okay. So then this decision is done. No leads course
[14:27:13] **Other**: spike in q two. Okay? Yep. Now it's on us to find out
[14:27:16] **Other**: what we fill the new capacity with.
[14:27:19] **Other**: I need to understand, like, in terms of impact and in terms of
[14:27:22] **Other**: feasibility, is this a one to one replacement, or would come be longer, for example?
[14:27:26] **Other**: Does it fit in the same road map
[14:27:29] **Other**: We can discuss this offline. My my my point would be market analysis
[14:27:33] **Other**: Let's do it because it's only one week and 220 k.
[14:27:37] **Other**: Then let's focus on come.
[14:27:39] **Other**: And disable
[14:27:40] **Other**: score, but we take it offline.
[14:27:42] **Other**: Okay.
[14:27:46] **Other**: Okay. Yeah.
[14:27:49] **Other**: Then I need to understand what is the
[14:27:52] **Other**: consequence of taking lead score
[14:27:55] **Other**: out for milestone one.
[14:27:58] **Other**: But that I would discuss then tomorrow with Christina.
[14:28:01] **Other**: Yeah. She proposes in.
[14:28:03] **Other**: Yeah. And from my just, like, my 2¢, if we do the research now,
[14:28:08] **Other**: we could still theoretically use it in q three.
[14:28:13] **Other**: The option one is
[14:28:15] **Other**: is more based on luck. Right? It could be that our existing model and
[14:28:19] **Other**: service
[14:28:20] **Other**: are suited to whatever we wanna do with it,
[14:28:24] **Other**: but this this is more based on luck. The second is we can flip it and say,
[14:28:28] **Other**: in q three, we could use the existing one for whatever we wanna use it for.
[14:28:32] **Other**: And then the last one would be to defer
[14:28:35] **Other**: the impact and say, we just shift everything by one quarter.
[14:28:38] **Other**: Say, we we do the research then and
[14:28:40] **Other**: q three and the implementation in q four.
[14:28:47] **Other**: Mhmm.
[14:28:49] **Other**: Yeah.
[14:28:50] **Other**: Ausprobieren. Görn, starts challenging this a little bit, and says, hey. Why not
[14:28:58] **Other**: why not, look into a more holistic customer score that not only has
[14:29:03] **Other**: the
[14:29:03] **Other**: view of milestone one and agent efficiency, but looks
[14:29:08] **Other**: like, he he makes the point that he is that he owns the
[14:29:12] **Other**: he's responsible for
[14:29:14] **Other**: conversion efficiency.
[14:29:16] **Other**: And whether this should and
[14:29:19] **Other**: whether this shouldn't also include,
[14:29:21] **Other**: requirements from Nirvana and CRM and whatnot.
[14:29:25] **Other**: But just for context, this might come up
[14:29:32] **Other**: Yeah. Okay.
[14:29:38] **Other**: Okay. Yeah.
[14:29:40] **Other**: I got it. Then
[14:29:44] **Other**: From my understanding, something like a customer score would be more
[14:29:49] **Other**: related to CDP. Right?
[14:29:51] **Other**: Is this a long term development for the CDP?
[14:29:54] **Other**: Yeah. Let's discuss that
[14:29:57] **Other**: in another round.
[14:29:59] **Other**: I understand. Yeah,
[14:30:00] **Other**: So that's why also question mark on the whole lead score topic.
[14:30:06] **Other**: Fine. For the delivery management, it would
[14:30:10] **Other**: be rather how we feel now the capacity that we have.
[14:30:14] **Other**: Since we took this one out.
[14:30:16] **Other**: This means we would trade
[14:30:20] **Other**: parts of milestone one to gain
[14:30:23] **Other**: in milestone four hopefully, on top.
[14:30:28] **Other**: Robert, and not just additive.
[14:30:32] **Other**: Basically, changing the markup was part of my pricing
[14:30:37] **Other**: service proposal.
[14:30:40] **Other**: So it's Okay. I don't know.
[14:30:44] **Other**: Gut. Then let's
[14:30:49] **Other**: go into
[14:30:52] **Other**: foxes, albatros,
[14:30:55] **Other**: Yep. Yeah. I know, Robert, if you can
[14:31:00] **Other**: take those. Much is the team that I can give the best uptake right now.
[14:31:05] **Other**: And it's right now.
[14:31:07] **Other**: Or we look first in c one No. Let's go look forward. Video duplication.
[14:31:14] **Other**: This is where we now have full focus switch
[14:31:19] **Other**: but it's a really slow start because the whole kickoff meetings are happening right now.
[14:31:24] **Other**: Happening only to in this week.
[14:31:27] **Other**: That means the people are busy now reading the existing documentation, getting context.
[14:31:31] **Other**: But
[14:31:34] **Other**: it's a really slow start, and we really, really need to coordinate this.
[14:31:40] **Other**: The people are thrown into cold water now.
[14:31:42] **Other**: Mhmm.
[14:31:44] **Other**: Yeah.
[14:31:45] **Other**: Congrats. Monday, you start.
[14:31:47] **Other**: Kick off meeting happens during the week.
[14:31:50] **Other**: And at the moment, it's quite isolated. So the truth planner team looks into this
[14:31:55] **Other**: the stability team looks into this.
[14:31:57] **Other**: This is a very coordinated research.
[14:32:02] **Other**: Okay.
[14:32:05] **Other**: But this means we are not in phase five five solution design or
[14:32:10] **Other**: are we kind of in the problem statement? Or
[14:32:13] **Other**: I think this is something that was confusing because
[14:32:17] **Other**: elements of the previous phases were not fully
[14:32:20] **Other**: analyzed, but we are getting sorry. This
[14:32:25] **Other**: phase five sorry. No. Provided application
[14:32:28] **Other**: we are in the solution design, definitely.
[14:32:30] **Other**: That's what I'm saying.
[14:32:31] **Other**: Okay.
[14:32:32] **Other**: We are in If we are solution design in in in in in in in in
[14:32:37] **Other**: ist different topic.
[14:32:38] **Other**: But for phase for v two, we are definitely in phase five.
[14:32:42] **Other**: Okay.
[14:32:43] **Other**: But this means
[14:32:45] **Other**: everybody's now getting onboarded on phase five solution design, and this is I mean, this is part of the
[14:32:54] **Other**: of the
[14:32:57] **Other**: of the cycle
[14:32:59] **Other**: but, also, this is
[14:33:01] **Other**: also the reason why you, Alexei say
[14:33:05] **Other**: vitro deprecation will
[14:33:08] **Other**: yeah. It's hard to say if after cycle two, it's done.
[14:33:13] **You**: Yeah. It's kind of
[14:33:15] **You**: still a lot of risk, a lot of uncertainties, kind of
[14:33:19] **You**: very uncertain, kind of large thing.
[14:33:22] **You**: So some things may pop up. We will
[14:33:25] **You**: aim to do it altogether
[14:33:28] **You**: in scope of cycle two. But, yeah, there is still a risk
[14:33:32] **You**: that it will
[14:33:33] **You**: something will pop up.
[14:33:35] **Other**: Yeah. I mean, this is this is also something for me as a
[14:33:40] **Other**: signal to understand that
[14:33:43] **Other**: if you do phase five,
[14:33:45] **Other**: within the cycle,
[14:33:47] **Other**: then it's hard to
[14:33:50] **Other**: give a delivery
[14:33:53] **Other**: road map. Right?
[14:33:54] **Other**: Yep. Okay. That's where all the time, like,
[14:33:59] **Other**: Ja.
[14:34:03] **Other**: Definitely it's impossible.
[14:34:05] **Other**: It's it's it's really impossible at the current state. Definitely.
[14:34:09] **Other**: Yeah, and this is something I want also
[14:34:13] **Other**: that we would that we flag that explicitly.
[14:34:18] **Other**: So to make very clear that
[14:34:20] **Other**: the solution design is also part of
[14:34:23] **Other**: being able to do a delivery road map.
[14:34:28] **Other**: Of course, we need to do that.
[14:34:30] **Other**: But this also signals also for us. And it's not a free pass. I'm
[14:34:35] **Other**: I'm really saying it's not a free pass of him
[14:34:38] **Other**: going over the cycle.
[14:34:41] **Other**: But it also gives good
[14:34:44] **Other**: understanding on what is
[14:34:47] **Other**: can be expected.
[14:34:50] **Other**: Right? Because it's it's not yet done.
[14:34:55] **Other**: And I also would understand how to interpret
[14:34:59] **Other**: what we want to achieve and how much risk we have within that cycle.
[14:35:04] **Other**: Yeah. I would also highlight it's really special.
[14:35:07] **Other**: Like, in this area, we don't have much context knowledge. No one works into this
[14:35:11] **Other**: area for a long time.
[14:35:13] **Other**: And it's a cost team knowledge gap.
[14:35:17] **Other**: Yep.
[14:35:19] **Other**: It's a weedies
[14:35:20] **Other**: critical initiative.
[14:35:24] **Other**: Which means
[14:35:28] **Other**: who is
[14:35:30] **Other**: taking the lead to have that very clear.
[14:35:35] **Other**: Across both teams
[14:35:37] **Other**: And
[14:35:39] **Other**: highlight regularly
[14:35:41] **Other**: Also, in in this delivery management meetings,
[14:35:45] **Other**: that if we are on track or not.
[14:35:48] **Other**: Who has that ownership?
[14:35:50] **You**: So they're gonna be me and Sylvia.
[14:35:55] **You**: And also Pedro.
[14:35:57] **You**: To some degree, but is this round? It's
[14:36:00] **You**: me and Silvia, while Silvia is out.
[14:36:02] **You**: Me.
[14:36:06] **Other**: Okay.
[14:36:11] **Other**: Three names is
[14:36:12] **Other**: two too too many. I understand that you will need to coordinate
[14:36:14] **You**: Yep.
[14:36:19] **Other**: or to get to the topics, but I would like to have
[14:36:23] **Other**: kind of one person spokesperson
[14:36:26] **You**: Yeah.
[14:36:28] **You**: Affirm me.
[14:36:33] **Other**: Great.
[14:36:34] **Other**: I think that would help.
[14:36:35] **You**: Yeah. And on technical one, Pedro is supporting me. Gregor is
[14:36:40] **You**: kind of just
[14:36:40] **You**: not
[14:36:42] **You**: committing too much to it because he he's living, so he's supporting us but not
[14:36:47] **You**: doing the delivery things. He's kind of
[14:36:49] **You**: more
[14:36:50] **You**: guiding the team and training the team.
[14:36:55] **Other**: Yep.
[14:36:56] **Other**: Perfect. Thank you, Alex.
[14:36:59] **Other**: Okay. Perfect.
[14:37:02] **Other**: Then
[14:37:04] **Other**: let's go with
[14:37:08] **Other**: throat builder v zero.
[14:37:10] **Other**: Yes. This is in a similar state, but my
[14:37:15] **Other**: similar but different. We have done this
[14:37:18] **Other**: meeting last week. We have a lot of open
[14:37:22] **Other**: that are currently clarified on how we want to build it.
[14:37:27] **Other**: The underlying
[14:37:28] **Other**: problem that I see is that the team that was currently working on this
[14:37:32] **Other**: is in
[14:37:34] **Other**: a very iterative mindset.
[14:37:36] **Other**: So they have
[14:37:39] **Other**: they have a lot of open questions and want to figure this out on the way
[14:37:43] **Other**: on the product tech and engineering back from both sides, actually.
[14:37:48] **Other**: Which is a problem for delivery roadmap as well.
[14:37:50] **Other**: To to to explain this,
[14:37:56] **Other**: I have asked to write down all open questions, and
[14:38:00] **Other**: there are elements like main DMC selections, rental car selections, rental car solution
[14:38:07] **Other**: location selection, which
[14:38:10] **Other**: has some ideas how to solve it.
[14:38:13] **Other**: But we are not 100% sure if they are working.
[14:38:21] **Other**: That means
[14:38:24] **Other**: a lot of work packages in with him.
[14:38:27] **Other**: Which
[14:38:30] **Other**: will be figured out at the moment.
[14:38:32] **Other**: But this also brings us in a state where delivery is really hard to estimate.
[14:38:37] **Other**: Or we say for each work package, we decide on one and go for this. And if we need to iterate, then
[14:38:45] **Other**: this needs to be a change in the road map.
[14:38:47] **Other**: But it's also assigned for
[14:38:50] **Other**: It's also assigned for me that the first version is critical on the impact level.
[14:38:55] **Other**: So it's not only risk on delivery, but also an impact
[14:38:59] **Other**: The reason for this is if you don't pick the right rental car location, how crucial
[14:39:03] **Other**: is this for the offer.
[14:39:04] **Other**: By
[14:39:08] **Other**: But is this a symptom of
[14:39:11] **Other**: the slicing of the problem?
[14:39:14] **Other**: Or
[14:39:17] **Other**: I guess so. So this I mean, in the end, they want to have now the
[14:39:22] **Other**: first time ever a composed new offer.
[14:39:25] **Other**: So historically, we were always copying a valid offer as a starting point.
[14:39:30] **Other**: But now we are changing this
[14:39:33] **Other**: completely. We are creating a completely new offer.
[14:39:36] **Other**: That means everything that was implicit in this old offer is lost.
[14:39:41] **Other**: And we have to find now matching items and matching elements for
[14:39:45] **Other**: each
[14:39:46] **Other**: part of the offer, which makes the problem huge because now we have to
[14:39:51] **Other**: find accommodation, transports,
[14:39:53] **Other**: rentals, and all the other items in the trip.
[14:39:56] **Other**: And they need to be
[14:39:59] **Other**: composed.
[14:40:04] **Other**: Doesn't make sense what I'm say? Or do go to explain?
[14:40:09] **Other**: Yes.
[14:40:13] **Other**: Here we are
[14:40:14] **Other**: kind of going into a
[14:40:17] **Other**: a hand situation.
[14:40:20] **Other**: Any eye-problem?
[14:40:25] **Other**: Word by word translation was easy.
[14:40:30] **Other**: So meaning meaning
[14:40:34] **Other**: tanto se
[14:40:37] **Other**: what is the start? What is the
[14:40:40] **Other**: start of the the
[14:40:42] **Other**: do we have first like the
[14:40:46] **Other**: because I have was under the impression we decide the route
[14:40:51] **Other**: We have the points, then we understand
[14:40:54] **Other**: how we get from a to b.
[14:40:56] **Other**: The transport leg but this is again not a
[14:41:00] **Other**: simple because you need to know which airport you are taking which
[14:41:05] **Other**: accommodation you're taking
[14:41:08] **Other**: which
[14:41:09] **Other**: car
[14:41:10] **Other**: you are taking to decide you have to move
[14:41:14] **Other**: from here to there.
[14:41:16] **Other**: It's also a symptom of a technical decision. Basically what you have in mind is
[14:41:21] **Other**: a rent a route builder where you have the spots and the human can fill in the gap.
[14:41:26] **Other**: Yeah. What's the guy decided now is to continue the offer in the Trip Planner one
[14:41:31] **Other**: means all the elements have to be there.
[14:41:37] **Other**: And
[14:41:40] **Other**: And I think the approach from the team currently is to fill in
[14:41:44] **Other**: everything
[14:41:46] **Other**: with the first match or with the first occurrence, which can be a valid approach to have a valid offer
[14:41:53] **Other**: if it generates the impact. At the moment, I have some thoughts.
[14:41:56] **Other**: Okay. But this is giving
[14:41:59] **Other**: Okay. But this is giving me a
[14:42:02] **Other**: gun again another another delivery signal
[14:42:06] **Other**: Right? Because you're telling me now that
[14:42:11] **Other**: delivery management or building up the the the
[14:42:16] **Other**: road map
[14:42:18] **Other**: is hard
[14:42:20] **Other**: So
[14:42:21] **Other**: what how do we approach now to get more
[14:42:25] **Other**: certainty into the delivery?
[14:42:29] **Other**: Since I
[14:42:32] **Other**: feel or since I know this is a complex
[14:42:36] **Other**: topic.
[14:42:37] **Other**: Trying to get the wholeness of the answers of
[14:42:42] **Other**: all of that,
[14:42:44] **Other**: is basically writing documents and a lot of
[14:42:49] **Other**: things
[14:42:50] **Other**: So for me, it's rather going back to
[14:42:54] **Other**: slice the problem
[14:42:56] **Other**: differently.
[14:42:58] **Other**: And then get from there
[14:43:01] **Other**: Or what is our strategy to
[14:43:04] **Other**: package that?
[14:43:06] **Other**: Yep. Because now you you you collected
[14:43:10] **Other**: how many questions and I don't know if once one one of those question is maybe giving you
[14:43:16] **Other**: weeks of research
[14:43:19] **Other**: At the moment, I don't like, I have some ideas to act
[14:43:24] **Other**: with some questions, but we really need to to talk or to add
[14:43:28] **Other**: to have another slide which has maybe way less impact
[14:43:32] **Other**: but we have an iteration.
[14:43:34] **Other**: At the moment, we have no iterations.
[14:43:36] **Other**: It's just something to zero
[14:43:41] **Other**: the MVP v zero is already a huge thing.
[14:43:45] **Other**: It puts all this complexity in. Yes.
[14:43:51] **Other**: Wow.
[14:43:54] **Other**: And the the shift comes really from
[14:43:58] **Other**: we copy an existing offer to recompose a completely new offer.
[14:44:02] **Other**: Wow.
[14:44:04] **Other**: This is a major fuck up, Robert.
[14:44:08] **Other**: Six months in,
[14:44:11] **Other**: and the team working on whatever
[14:44:27] **Other**: The problem is what we can deliver is something where you have
[14:44:31] **Other**: elements that are required in the trip. If they match together,
[14:44:35] **Other**: I really I'm not sure.
[14:44:46] **Other**: So we can create a valid consistent trip
[14:44:53] **Other**: That if this is fulfilling
[14:44:56] **Other**: the customer needs, if this is
[14:45:00] **Other**: helping the agent to plan a trip. I'm not sure.
[14:45:02] **Other**: Because if we've always picked the rental car from the air
[14:45:06] **Other**: because we have no way to select anything,
[14:45:08] **Other**: It can be a week start.
[14:45:11] **Other**: Okay. But is this because we started with transport recommendation?
[14:45:16] **Other**: No. It's like if you create a new trip, you have to answer all these questions.
[14:45:21] **Other**: And
[14:45:22] **Other**: again, for a certain subset of trips, we will have the right choices
[14:45:27] **Other**: Or what I'm saying is for other 40% or whatever, we will make guesses
[14:45:31] **Other**: that I want.
[14:45:32] **Other**: And I think this is not taken into account that then the agent needs to time
[14:45:36] **Other**: first of all, to recognize this.
[14:45:38] **Other**: Secondly, to fix it
[14:45:40] **Other**: which is then reducing the impact again on the destination where it works.
[14:45:44] **Other**: So we have
[14:45:45] **Other**: only taken the positive impact
[14:45:49] **Other**: Okay. Then is it a question also to
[14:45:53] **Other**: to say how
[14:45:55] **Other**: because we said the the or the team
[14:45:58] **Other**: said,
[14:45:59] **Other**: needs to be a bookable offer.
[14:46:01] **Other**: That gets out of the route builder.
[14:46:05] **Other**: This is for a filter.
[14:46:07] **Other**: Yeah. But it's
[14:46:10] **Other**: doesn't need to be completely correct. Right?
[14:46:13] **Other**: Or it doesn't what is the level of correctness versus
[14:46:18] **Other**: so on.
[14:46:19] **Other**: Yep. So if if I would say
[14:46:22] **Other**: want to have, like, a bookable offer where
[14:46:25] **Other**: at least the route is 100% correct,
[14:46:28] **Other**: but everything else is like
[14:46:31] **Other**: then we are
[14:46:33] **Other**: have all the Yeah. This is what we can do. Slicing.
[14:46:38] **Other**: Yep.
[14:46:38] **Other**: Okay.
[14:46:39] **Other**: Is what we can do.
[14:46:40] **Other**: Good.
[14:46:44] **Other**: Yeah. From the delivery perspective again,
[14:46:48] **Other**: who is
[14:46:53] **Other**: doing this slicing
[14:46:57] **Other**: looking into
[14:47:00] **Other**: how the team is taking the topics. So
[14:47:05] **Other**: who is the major
[14:47:07] **Other**: person here?
[14:47:08] **Other**: I think Silvia.
[14:47:14] **Other**: I can support with slicing the making decisions and help them here.
[14:47:18] **Other**: I mean, Gregor is here to make the technical feasibility.
[14:47:23] **Other**: That we have a a slicing that makes sense on the business side, but it's reducing the
[14:47:27] **Other**: complexity of the problem.
[14:47:29] **Other**: This is the discussion that we need to have.
[14:47:33] **Other**: What what about Elinus is on the vitro deprecation.
[14:47:38] **Other**: Yes.
[14:47:39] **Other**: It's Lucas.
[14:47:43] **Other**: Who is the next one? Lukas is working on these topics?
[14:47:48] **Other**: And he's a mid level engineer. Right?
[14:47:51] **Other**: Yep.
[14:47:52] **Other**: Can we give him this
[14:47:57] **Other**: I mean, I understand. Yeah. Sylvia, from a management perspective, but
[14:48:01] **Other**: I would like to have an ownership in the engineering
[14:48:05] **Other**: to make a proposal on that
[14:48:09] **Other**: that has more context on, understanding how this is
[14:48:14] **Other**: works and so on. And
[14:48:16] **Other**: management acts as reviewer mentor.
[14:48:19] **Other**: We can try.
[14:48:25] **Other**: I mean, it's a huge thing.
[14:48:29] **Other**: To put on a mid level.
[14:48:32] **Other**: But it could also foster ownership and
[14:48:36] **Other**: with the
[14:48:39] **Other**: with mentorship, it could also boost his
[14:48:43] **Other**: yeah,
[14:48:44] **Other**: career in the sense of learning.
[14:48:47] **Other**: But he needs to get that mandate.
[14:48:52] **Other**: Yep. To also
[14:48:54] **Other**: slice and ask or bring proposals
[14:48:58] **Other**: how to slice that so that we have
[14:49:04] **Other**: we can really get into a delivery road map
[14:49:08] **Other**: Right now I feel it's like again a
[14:49:11] **Other**: bunch of mud
[14:49:15] **Other**: I can talk to him tomorrow.
[14:49:17] **Other**: On behalf of Sylvia.
[14:49:18] **Other**: It still gives us the delivery roadmap most likely only for the first flight.
[14:49:23] **Other**: Because this is the one that's well defined then.
[14:49:25] **Other**: Not to the full impact.
[14:49:31] **Other**: Like, we can create a slide
[14:49:35] **Other**: Yep.
[14:49:36] **Other**: Discuss. So give him the
[14:49:39] **Other**: to to to look into and to decide also
[14:49:43] **Other**: is this the correct slicing? How should we do it? What would be the best
[14:49:48] **Other**: with the goal that we
[14:49:50] **Other**: have
[14:49:53] **Other**: an MVP faster. I feel that
[14:49:58] **Other**: we are not using
[14:50:00] **Other**: what we have yet.
[14:50:03] **Other**: And that he brings some ideas
[14:50:06] **Other**: Maybe he's just taking as orders.
[14:50:09] **Other**: Like, this was sliced, and I don't know who sliced it.
[14:50:13] **Other**: A PM?
[14:50:14] **Other**: Or was it Gregor and why
[14:50:19] **Other**: I think in general, like the team assumption was
[14:50:22] **Other**: that they like, I think they were thinking about slices, but the
[14:50:26] **Other**: the idea was once we face a problem, we iterate as long as it's
[14:50:30] **Other**: solved, and then we go to the next one. So
[14:50:33] **Other**: this is what I mean initially with this iterative mindset.
[14:50:36] **Other**: Which is preventing us from from coming up with roadmap and even a communicated slice.
[14:50:41] **Other**: At the moment, they they are working on, oh, we find a problem. We solve it.
[14:50:45] **Other**: Which is problematic.
[14:50:54] **Other**: Okay.
[14:50:56] **Other**: Good. Then
[14:50:58] **Other**: first, please take it. I would like to
[14:51:01] **Other**: see kind of what is our strategy behind
[14:51:05] **Other**: and that
[14:51:06] **Other**: yeah, try to give it first to Lukasz see how he responds.
[14:51:12] **Other**: And then
[14:51:14] **Other**: go from there.
[14:51:15] **Other**: Yep.
[14:51:19] **Other**: Good. Then flight
[14:51:24] **Other**: look up.
[14:51:28] **Other**: We are in the pilot phase. Right?
[14:51:30] **Other**: Yeah. And I'm waiting for feedback.
[14:51:33] **Other**: So from conclusion of the pilot phase.
[14:51:36] **Other**: What do you mean? So how do we validate that it's
[14:51:41] **Other**: impactful, or what conclusions?
[14:51:43] **Other**: Yeah.
[14:51:44] **Other**: Like, at at the moment, it's assumed that that MVP brings night
[14:51:48] **Other**: minutes.
[14:51:50] **Other**: And I'm not sure about this, so I read I want to really see if it's
[14:51:54] **Other**: if it gets this positive feedback.
[14:51:56] **Other**: Yeah. So she's here at Road kind of, what his assumptions were and how are we measuring that.
[14:52:06] **Other**: It was, like, with with interviews. Right?
[14:52:10] **Other**: So Right.
[14:52:12] **Other**: Qualitative.
[14:52:14] **Other**: Austin? Do we already know what we would do with this? Why
[14:52:19] **Other**: case it's working?
[14:52:21] **Other**: Because it's it's currently it's at VibeCon at LiveCode at that. Right?
[14:52:26] **Other**: Mhmm.
[14:52:27] **Other**: I I saw that, and he printed this, and then this AI champions group
