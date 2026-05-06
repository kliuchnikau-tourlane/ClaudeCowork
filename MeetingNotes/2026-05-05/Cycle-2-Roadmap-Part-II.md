# Cycle 2 Roadmap: Part II

**Date**: 2026-05-05
**Time**: 15:00 - 16:00
**Location**: PR-20 HQ-2-Italy (15) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- sascha.burku@tourlane.com
- kristina.lamza@tourlane.com
- minh.nguyen@tourlane.com
- oleksii.mazurik@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- markus.klemann-ext@tourlane.com
- PR-20 HQ-2-Italy (15) [Camera, Google Meet, Mic, TV, Tablet]

## Transcript

[13:04:52] **You**: PTI. And I found already not, like, in four weeks but only now, I found already some
[13:05:00] **You**: correlation between some certain
[13:05:03] **You**: and specific dog type, and I think that's exactly what
[13:05:08] **You**: Cristina wanted, but maybe I'm missing something. So
[13:05:11] **You**: after I've created a historical lookup
[13:05:15] **You**: script based on Marcus' design,
[13:05:18] **You**: for every nonvoucher, nonservice list, and non...
[13:05:22] **You**: For API.
[13:05:23] **You**: I found this
[13:05:25] **You**: like, correlation
[13:05:27] **You**: for GoCity Vouchers, this UUIDs,
[13:05:30] **You**: For Warner Brothers, this UUID. For Universal Studio,
[13:05:34] **You**: this, SummitWatch, or inside the ink pass.
[13:05:37] **You**: You can see them all.
[13:05:39] **You**: So what are these UUIDs?
[13:05:41] **You**: That's very easy. This is
[13:05:44] **You**: our beloved
[13:05:47] **You**: curator, UUIDs.
[13:05:49] **You**: So, basically, when people add
[13:05:52] **You**: trip to trip
[13:05:53] **You**: this
[13:05:55] **You**: elephant these are elephant UUIDs.
[13:05:57] **You**: So
[13:05:58] **You**: all of these activities
[13:06:00] **You**: can be found
[13:06:02] **You**: in
[13:06:03] **You**: trip planner, sorry, in
[13:06:06] **You**: items,.tel service. I assume that you might move somewhere, Alex.
[13:06:10] **You**: You might know better for this new content API.
[13:06:14] **You**: Mhmm. And, basically,
[13:06:16] **You**: like,
[13:06:17] **You**: to be honest, I feel that this
[13:06:20] **You**: concludes
[13:06:21] **You**: for at least ATI, the historical lookup, because
[13:06:26] **You**: everything else is present in service list.
[13:06:29] **You**: And service list serves as a ticket for a lot of cases.
[13:06:34] **You**: Voucher, but we already can
[13:06:38] **You**: example, build something to enforce
[13:06:41] **You**: if there is this ID on the trip item, we enforce
[13:06:45] **You**: voucher and
[13:06:47] **You**: specific doc type, like
[13:06:49] **You**: so
[13:06:49] **You**: if it's, like, Summit One Wonder Build, reinforced voucher,
[13:06:53] **You**: and Summit Voucher for this item to
[13:06:56] **You**: not be marked as missing.
[13:06:58] **You**: Sasha?
[13:07:00] **You**: Yeah.
[13:07:01] **You**: This is exactly where my suggestion was coming from the last time.
[13:07:05] **You**: Mhmm. That we have this what you do now,
[13:07:08] **You**: Yeah. Persistent in the database, in the Exactly. Small
[13:07:15] **You**: which I would definitely do. Exactly. And I'm like Yeah.
[13:07:20] **You**: Okay. And I don't see here a lot of work. So, basically,
[13:07:24] **You**: we go to American Tours International. I know. So this is for ATM
[13:07:29] **You**: but
[13:07:30] **You**: with this finding, we can enlarge the scope
[13:07:33] **You**: one supplier to at least five suppliers.
[13:07:35] **You**: Right?
[13:07:36] **You**: And find other find others. But, basically, in this section,
[13:07:40] **You**: for GoCity voucher, we can say
[13:07:43] **You**: add this new section with UUIDs. I don't know which
[13:07:46] **You**: be understandable for us.
[13:07:48] **You**: Only, which we can reach.
[13:07:50] **You**: Another proposal is that we can do it even nicer
[13:07:55] **You**: if you want to make it better for people who will use
[13:07:59] **You**: this TMC second page unless we have
[13:08:01] **You**: if you have time, so we can build
[13:08:04] **You**: the bridge between items curator. So
[13:08:07] **You**: people can add these activities using search.
[13:08:10] **You**: So, basically, there will be search bar here. Mhmm.
[13:08:14] **You**: Where you type name of the activity and edit, and it will be populate
[13:08:18] **You**: with UUIDs from items curator.
[13:08:21] **You**: Because
[13:08:22] **You**: in ItemsCurator, this
[13:08:24] **You**: activity information, like,
[13:08:26] **You**: this name, this map, sometimes they have
[13:08:30] **You**: images, you know,
[13:08:32] **You**: Mhmm. We can do it nicer in the documents dashboard, but
[13:08:35] **You**: only it's needed. It will be extra work, and we need to understand
[13:08:39] **You**: whether we need it or not.
[13:08:40] **You**: Is it only for
[13:08:42] **You**: doctor Madashbott?
[13:08:43] **You**: Visual? Yeah. And not for Yeah. Don't but so, yeah, I feel like but it
[13:08:48] **You**: if you do it this way, basically,
[13:08:51] **You**: I feel that developers won't participate
[13:08:56] **You**: fill in the database. I feel like
[13:08:58] **You**: you do a nice input,
[13:09:00] **You**: then someone else can enrich this input. Because if if it will be only UI
[13:09:05] **You**: then
[13:09:06] **You**: only us will be the only people who can, like, fill this UUID
[13:09:10] **You**: Ds. But if it will be
[13:09:12] **You**: like, nicer input, then
[13:09:15] **You**: because
[13:09:15] **You**: I don't think, like, agent understands the concept of UUID.
[13:09:19] **You**: But they feel they understand the concept of, like, specific activity being present, you know, so they can
[13:09:24] **You**: they I'm sure they know that there are five certain
[13:09:27] **You**: activities that must have this certain voucher, you know.
[13:09:37] **You**: Your
[13:09:38] **You**: you already retrieved
[13:09:41] **You**: Do we really need this
[13:09:44] **You**: connection there? No, dices,
[13:09:47] **You**: like that's I was thinking how to make it nicer.
[13:09:50] **You**: I was just proposing maybe we want
[13:09:53] **You**: it to be nicer, but from what I feel that initial
[13:09:56] **You**: scope for two months could be reduced
[13:09:59] **You**: and also maybe we can also enlarge the amount of suppliers. But
[13:10:03] **You**: the big drawback of this, it works only for
[13:10:06] **You**: unfortunately, activities.
[13:10:08] **You**: I did your PTI.
[13:10:09] **You**: Or activities. No. Activities. For some For every activity.
[13:10:13] **You**: Which is here, which is in items curator. But to be honest,
[13:10:18] **You**: non activity
[13:10:20] **You**: like, non historical lookup plus connecting this UUIDs to dog types
[13:10:25] **You**: I didn't see proposal from
[13:10:28] **You**: Marcos or from you.
[13:10:29] **You**: So I don't think we have
[13:10:31] **You**: alternative idea in the air. I've heard, like, there was always this idea.
[13:10:36] **You**: On the table to connect these UIDs.
[13:10:39] **You**: To doc types for now, and I think it already will be good enough.
[13:10:44] **You**: But, yes, there are lots of stuff
[13:10:48] **You**: to do more. There are bus tickets.
[13:10:51] **You**: That are missing
[13:10:52] **You**: There are ferry tickets that are missing
[13:10:54] **You**: But here, I But these are all other items. Right? Like,
[13:10:59] **You**: rental, transport,
[13:11:01] **You**: leg,
[13:11:02] **You**: leg transport.
[13:11:03] **You**: Which if you go to items Yeah. You go to
[13:11:06] **You**: Trick. Items page to the Please. To the
[13:11:10] **You**: yeah. But, yeah, there is nothing about that. Exactly. Like,
[13:11:14] **You**: accommodation activity that's Yes. And
[13:11:17] **You**: area, which probably Which we don't eat. Yes. Exactly.
[13:11:20] **You**: Yep. So There, it could be another
[13:11:23] **You**: like,
[13:11:24] **You**: there, I mean, we could do completeness check versions
[13:11:29] **You**: three.
[13:11:30] **You**: Do it later.
[13:11:32] **You**: But I feel what Cristina and Markus and Nicolas were in the
[13:11:36] **You**: version one.
[13:11:37] **You**: I feel at least this
[13:11:40] **You**: etickets, now they can be enforced.
[13:11:43] **You**: So it will be, like, actively
[13:11:46] **You**: visualized as missing
[13:11:48] **You**: Version one and two.
[13:11:50] **You**: Version yeah.
[13:11:53] **You**: Yeah.
[13:11:54] **You**: So version one is required, in my opinion,
[13:11:56] **You**: So we have to finish it because it will
[13:11:59] **You**: it will do part of the job, so it will enforce vouchers.
[13:12:04] **You**: Also types that we can predict already to be enforced.
[13:12:08] **You**: And not have a suggestion.
[13:12:12] **You**: So we have this UID, which is
[13:12:15] **You**: connected to activity. That means whenever we receive
[13:12:20] **You**: activity with
[13:12:22] **You**: either
[13:12:24] **You**: the new idea
[13:12:26] **You**: you just provide, and we
[13:12:28] **You**: know automatically how many document
[13:12:31] **You**: is required for this Yeah. It it's Yes.
[13:12:35] **You**: Not AI even needed for that. Yes.
[13:12:37] **You**: And we can do the same for
[13:12:42] **You**: sunny cars and easy Exactly. What will be done?
[13:12:46] **You**: With version milestone one and two.
[13:12:49] **You**: No. But, I mean, with
[13:12:50] **You**: what you present,
[13:12:52] **You**: we store everything in one collection, one table. Instead of UI, we just say,
[13:12:59] **You**: for
[13:13:00] **You**: Sunday cars,
[13:13:02] **You**: we don't need an But Sunday car
[13:13:04] **You**: Sunny car doesn't work like that. Yes. Sunny cars
[13:13:07] **You**: they just need voucher.
[13:13:10] **You**: For any cars, version van will already cover this.
[13:13:14] **You**: So you'll you'll already
[13:13:17] **You**: force voucher.
[13:13:18] **You**: Yes.
[13:13:19] **You**: Sunday first always has
[13:13:22] **You**: like, I I think, mean mean
[13:13:29] **You**: No. For for SunnyCards, something different because SunnyCards and UUID is still
[13:13:32] **You**: every time we Exactly. There's Okay. Okay. So there is no correlation.
[13:13:36] **You**: Yes. But for SunnyCard, we will save the name.
[13:13:40] **You**: Example. Or for eSIM, we can save the name as
[13:13:44] **You**: like, an identifier to say,
[13:13:47] **You**: if we have this name,
[13:13:48] **You**: if we have this UID, then
[13:13:50] **You**: yeah, we need
[13:13:51] **You**: But the cars will always have another name.
[13:13:57] **You**: But, specifically, for signing cards, it's not
[13:14:00] **You**: important. It will be so, you know, for sure, it will be rental type.
[13:14:04] **You**: Sorry. It will be always type rental. There will be nothing
[13:14:09] **You**: else. Mhmm.
[13:14:10] **You**: And we will always enforce voucher.
[13:14:13] **You**: That's it.
[13:14:14] **You**: This is already will be covered in version one. Yes.
[13:14:17] **You**: And for first seed, we will only have other item
[13:14:21] **You**: which will be only other item.
[13:14:24] **You**: You know? The voucher.
[13:14:26] **You**: Doing currently is we all the information from the setting, and then we do
[13:14:31] **You**: automatic and and the code. Right?
[13:14:34] **You**: What you suggest right now is we have a
[13:14:36] **You**: table, a collection to look up
[13:14:38] **You**: till we're, like, on top of that.
[13:14:42] **You**: So that's why it will be, like, version two, but maybe, like,
[13:14:45] **You**: it's not even version two. It will be, phase two.
[13:14:48] **You**: So phase one, there'll be
[13:14:50] **You**: looking for this
[13:14:53] **You**: what Markus suggested, that voucher will be
[13:14:56] **You**: Yeah. Voucher will be required. But for phase two,
[13:15:01] **You**: will do also second document requirement.
[13:15:05] **You**: I'm just thinking if there's a way to kinda, like, merge
[13:15:10] **You**: this to
[13:15:11] **You**: they're all merchant trip.
[13:15:13] **You**: Generator.
[13:15:14] **You**: What am I saying? Trip report generator.
[13:15:20] **You**: Is
[13:15:21] **You**: Doing, like, these are protein
[13:15:25] **You**: This
[13:15:27] **You**: is creating the the missing report.
[13:15:29] **You**: Differently. One is
[13:15:31] **You**: doing everything in the code, and the other one is
[13:15:34] **You**: look up in the collection.
[13:15:35] **You**: And
[13:15:36] **You**: just tell you by way which
[13:15:39] **You**: document is missing.
[13:15:42] **You**: So you have this
[13:15:45] **You**: connection from UID and saying
[13:15:48] **You**: if
[13:15:49] **You**: Here's a trip.
[13:15:50] **You**: So
[13:15:52] **You**: we are you can, like, on this example, you can
[13:15:55] **You**: show what's going on. So so here,
[13:16:00] **You**: in this
[13:16:01] **You**: API voucher, we we look at the
[13:16:04] **You**: UID,
[13:16:05] **You**: If the UID of
[13:16:07] **You**: an activity is
[13:16:09] **You**: belongs to the table that you just provide,
[13:16:12] **You**: then we don't automatically
[13:16:17] **You**: a go CD voucher is missing.
[13:16:19] **You**: Ticket is missing.
[13:16:20] **You**: Right?
[13:16:21] **You**: We put it in a collections. Almost.
[13:16:25] **You**: So from what I understood, from
[13:16:29] **You**: all the documents that are
[13:16:31] **You**: lying
[13:16:32] **You**: I fed them to the cloud.
[13:16:34] **You**: In Confluence. Mhmm. The requirement is to not only require the
[13:16:38] **You**: Alcatraz voucher,
[13:16:40] **You**: but also require ATI voucher.
[13:16:43] **You**: So this
[13:16:44] **You**: activities
[13:16:46] **You**: from this list
[13:16:47] **You**: still have requirement from having the
[13:16:50] **You**: enlisted in the voucher
[13:16:52] **You**: which
[13:16:53] **You**: I'll show you. Like,
[13:16:55] **You**: this voucher.
[13:16:56] **You**: Which you probably saw. So there is this activity in
[13:16:59] **You**: like, they have this basic info saying that a ticket is required
[13:17:04] **You**: Yes. And then we can so it will be combination of two rules. It will be, like,
[13:17:09] **You**: first,
[13:17:10] **You**: deterministic approach from Markus phase one. So we will check that
[13:17:15] **You**: okay, this is type activity. And for type activity, we require a voucher
[13:17:19] **You**: from phase one, that are version one,
[13:17:23] **You**: Right?
[13:17:24] **You**: Okay.
[13:17:25] **You**: So this is will be service list or voucher is required?
[13:17:29] **You**: Mhmm.
[13:17:30] **You**: And then phase two will be pickup
[13:17:33] **You**: Okay.
[13:17:36] **You**: Ok, now I got it.
[13:17:39] **You**: Yeah.
[13:17:39] **You**: It it's separate. But I think min you mean, like,
[13:17:43] **You**: we have the UID
[13:17:45] **You**: and then, like, there's the key and there's the value. Yes. It's
[13:17:50] **You**: kind of like
[13:17:51] **You**: it might not be one document, like, not one type. It might
[13:17:54] **You**: be multiple types that Yes.
[13:17:56] **You**: That's exactly what I'm
[13:17:58] **You**: Right. Right. That's what I got. Because
[13:18:02] **You**: on that example, they
[13:18:04] **You**: provided that was, like,
[13:18:05] **You**: was mentioned in
[13:18:07] **You**: this document, the voucher document, but it also needs an explicit go city voucher.
[13:18:12] **You**: Yes. Like, NYCX program. So
[13:18:15] **You**: so we would need a mapping table that kind of, like, would
[13:18:19] **You**: fulfill that.
[13:18:20] **You**: Part of that. We can do In case if we only
[13:18:23] **You**: get one PDF,
[13:18:25] **You**: it's it's an error because we know it should be partly
[13:18:29] **You**: or it should be definitely it should definitely have
[13:18:32] **You**: the go seek departure.
[13:18:34] **You**: That's scheduled. Yes. One must have.
[13:18:36] **You**: But if there are
[13:18:38] **You**: other vouchers that are not listed here,
[13:18:42] **You**: The system won't work, and the system will keep ignoring those vouchers.
[13:18:45] **You**: And the system will not
[13:18:47] **You**: mark them as missing or something.
[13:18:50] **You**: So it's very important to
[13:18:52] **You**: classify everything correctly.
[13:18:54] **You**: So whatever is in the documents dashboard, DMC settings, and
[13:18:58] **You**: classification model,
[13:19:00] **You**: So if it's if it's there,
[13:19:04] **You**: then we can do this
[13:19:06] **You**: historical lookup data
[13:19:08] **You**: version plus
[13:19:10] **You**: the version one enforcement. But if it's not,
[13:19:14] **You**: there, then, yeah, unfortunately, we can't do it.
[13:19:18] **You**: Yeah. That's my, like,
[13:19:21] **You**: that's why I
[13:19:30] **You**: had to do the
[13:19:31] **You**: like, you had to run
[13:19:33] **You**: whatever, like, the script that ran
[13:19:36] **You**: from historical data back to whatever 2000 or
[13:19:42] **You**: '5,
[13:19:43] **You**: And then you've got a big bunch of
[13:19:46] **You**: data out of that.
[13:19:48] **You**: Mhmm.
[13:19:50] **You**: But it's only, like,
[13:19:52] **You**: very many times
[13:19:53] **You**: it's marked as missing.
[13:19:56] **You**: But it's actually unknown.
[13:19:58] **You**: So, but I think this is not part of this ticket. So,
[13:20:02] **You**: I feel like
[13:20:06] **You**: because
[13:20:07] **You**: because, like, making it nice for the manual input is
[13:20:10] **You**: is is one thing
[13:20:11] **You**: making it more automatic
[13:20:12] **You**: Yeah. Yeah. So based
[13:20:15] **You**: That's
[13:20:16] **You**: My point speaking.
[13:20:18] **You**: Yes. So we can do weekly based.
[13:20:21] **You**: But
[13:20:23] **You**: maybe
[13:20:24] **You**: in the following quarters or if you have time.
[13:20:27] **You**: Because if you'll, like, see
[13:20:30] **You**: schedule a job, you'll need some time to
[13:20:32] **You**: be implemented. My point is it's, we first focus on
[13:20:36] **You**: doing what we promised,
[13:20:37] **You**: delivering
[13:20:38] **You**: like, initial. So what we can do from developer side, we can prefill this.
[13:20:43] **You**: UUIDs.
[13:20:44] **You**: So this script will let us run
[13:20:48] **You**: and prefill everything.
[13:20:50] **You**: But, I agree with you then, like,
[13:20:53] **You**: in next quarter, for example, we can
[13:20:56] **You**: automate that with running it in
[13:20:58] **You**: scheduled way once per week or once per month even.
[13:21:02] **You**: Is it really that it's hard to
[13:21:07] **You**: No. It's not hard. It's just like
[13:21:12] **You**: I sometimes
[13:21:13] **You**: want to
[13:21:14] **You**: verify the outcome of this script, you know, because this
[13:21:17] **You**: like, written with AI.
[13:21:20] **You**: So you don't want to automate it? You want to run it
[13:21:23] **You**: manually? Or before like
[13:21:26] **You**: I want to understand what I'm, Putin.
[13:21:29] **You**: And I wanted to crosscheck this UUID that they're actually
[13:21:34] **You**: present
[13:21:35] **You**: In the 11 in the Eleven database. So that's my point. But
[13:21:39] **You**: that's why maybe we can build the dashboard because the elephant can actually
[13:21:44] **You**: so sorry. We can build the connection between elephant and
[13:21:48] **You**: between items curator and
[13:21:50] **You**: documents dashboard. In this case, if you run the script and we cross verify this
[13:21:55] **You**: UUIDs and if they're present there,
[13:21:57] **You**: then we can reach. But I feel like
[13:22:00] **You**: like, let's
[13:22:02] **You**: try to maybe push this automation to milestone five Because you already suggested that in milestone five, if I'm not mistaken.
[13:22:10] **You**: We try to No. I I suggested it already, like,
[13:22:13] **You**: maybe earlier.
[13:22:14] **You**: Mhmm.
[13:22:15] **You**: I mean,
[13:22:18] **You**: immediately, one night,
[13:22:20] **You**: when I saw this, I was, like, thinking that needs to be, like, a mapping table.
[13:22:25] **You**: Or, like, there should be a mapping table, and
[13:22:28] **You**: if you run, like, if you run this script on a regular basis, then the mapping table
[13:22:32] **You**: discrete the
[13:22:35] **You**: I mean,
[13:22:39] **You**: If if you say that the
[13:22:41] **You**: that you want to, of course,
[13:22:45] **You**: have a, like, supervised
[13:22:49] **You**: I think this is a this is a supervised task.
[13:22:52] **You**: So, of course, like like, as we do now. Right?
[13:22:55] **You**: The classification with this report Exactly. That comes out of a
[13:23:01] **You**: one of us always picks the picks the ticket, and
[13:23:05] **You**: runs the script, and then
[13:23:06] **You**: checks and then updates. Like,
[13:23:09] **You**: in the script, you'll probably also have to
[13:23:11] **You**: possibility then to update the
[13:23:14] **You**: data in a in
[13:23:16] **You**: the database, then, of course, this is also
[13:23:18] **You**: fine.
[13:23:19] **You**: Mhmm.
[13:23:20] **You**: Yeah. It could be this way, but, also, like,
[13:23:24] **You**: quite frankly, if we
[13:23:26] **You**: I feel that single time right now, also a second
[13:23:30] **You**: very subjective feeling. I feel like
[13:23:32] **You**: if you'll run into single time,
[13:23:34] **You**: So this document type, as I said, they're very rigid.
[13:23:37] **You**: So
[13:23:38] **You**: they are usually, like, they want to change
[13:23:41] **You**: probably in years.
[13:23:43] **You**: So
[13:23:45] **You**: yeah, so I don't see
[13:23:48] **You**: here. Maybe, like,
[13:23:50] **You**: very frequent change. But, yeah, you can add another milestone if you're, like,
[13:23:54] **You**: more. But right now, we sort of, like,
[13:23:57] **You**: from what I understand, we sort of signed the agreement that we will promise to deliver this.
[13:24:02] **You**: And the leadership knows about that. And we didn't promise to deliver
[13:24:06] **You**: automated way. The first Automated way
[13:24:11] **You**: is here to save us some manual work. Right? It's like for us,
[13:24:16] **You**: we need to decide, like, if
[13:24:19] **You**: we're fine with this
[13:24:21] **You**: manual work or we actually need automated way to
[13:24:25] **You**: wrap it up? Right? Because, yeah,
[13:24:28] **You**: need to do solutions
[13:24:30] **You**: as we see
[13:24:32] **You**: to a level of where we can maintain them and
[13:24:36] **You**: not kind of
[13:24:37] **You**: a lot of burden because if we kind of accumulate a lot of manual tasks, it
[13:24:42] **You**: becomes harder and harder. So if we have
[13:24:45] **You**: option to do automated
[13:24:48] **You**: way and we can rely on it, then we should consider it.
[13:24:53] **You**: And No. Yeah. It's, like, not something that leadership will say no. It's
[13:24:58] **You**: on us to make a call here. I'm just coming from conservative approach.
[13:25:02] **You**: I'm in favor of building what we promised, and then what
[13:25:05] **You**: didn't promise, we built after what we
[13:25:07] **You**: what has promised is delivered.
[13:25:09] **You**: Or we can have stealth deliveries.
[13:25:11] **You**: If someone has time, you can also do it in parallel.
[13:25:15] **You**: And I'm coming from the the the approach that
[13:25:19] **You**: a lot of these automatic
[13:25:22] **You**: like
[13:25:22] **You**: through meetings,
[13:25:24] **You**: the sync automatic tasks are
[13:25:31] **You**: which Now it can be done by us. It's not going to happen.
[13:25:35] **You**: That's why I'm saying
[13:25:37] **You**: if we I we can't do some automation in ours, then
[13:25:43] **You**: we're good fun. We can
[13:25:45] **You**: From
[13:25:47] **You**: Yamaha.
[13:25:48] **You**: And have the stealth secret approach, the the stealth approach of
[13:25:55] **You**: on advising that one as well. If
[13:25:57] **You**: whoever would like
[13:25:58] **You**: whoever can look at this on a weekly basis or on a by weekly basis,
[13:26:02] **You**: for the
[13:26:10] **You**: Mhmm.
[13:26:12] **You**: Meow. So
[13:26:15] **You**: But there is so this
[13:26:18] **You**: I feel this is
[13:26:20] **You**: for now the maximum what we can do with
[13:26:25] **You**: like, this mapping UID to
[13:26:28] **You**: like,
[13:26:31] **You**: specific doc types, and I think it will already be an improvement. But still,
[13:26:35] **You**: we are, like, we want the solution solve all the use cases.
[13:26:40] **You**: So, for example, bus tickets
[13:26:43] **You**: and, like, I don't see right now very
[13:26:48] **You**: good and robust way to, for example,
[13:26:51] **You**: correspond bus ticket to
[13:26:53] **You**: some specific transport with this approach. It has to be
[13:26:57] **You**: AI judge approach. So AI has to say
[13:27:00] **You**: But
[13:27:02] **You**: yeah, I'm not sure about that.
[13:27:05] **You**: And these bus tickets, I think we can talk to Christine.
[13:27:09] **You**: But historical lookout will not
[13:27:11] **You**: provide any output
[13:27:12] **You**: from for transport since they are
[13:27:15] **You**: they have hashes and COID, so there will be never a correlation
[13:27:19] **You**: between a transport
[13:27:21] **You**: and
[13:27:25] **You**: and
[13:27:26] **You**: the type.
[13:27:29] **You**: But one last point. But, yeah, what we can do, we can, for sure, some teams
[13:27:34] **You**: and force these pass tickets.
[13:27:36] **You**: Just
[13:27:36] **You**: in force.
[13:27:37] **You**: The dog type for transport, for example.
[13:27:40] **You**: Sasha?
[13:27:45] **You**: This is not our
[13:27:47] **You**: Can we still edit
[13:27:50] **You**: this musthum? Yeah. We can.
[13:27:53] **You**: Yeah. Because maybe we should write it to completeness check.
[13:27:56] **You**: Initial rollout, and then more focus on accommodation.
[13:28:00] **You**: And activities.
[13:28:02] **You**: Right? Because that's what's I mean, I'm not sure if if
[13:28:05] **You**: the
[13:28:05] **You**: if we clearly communicated that.
[13:28:08] **You**: Yeah. Just add its
[13:28:10] **You**: If you see that you mean probably here?
[13:28:13] **You**: Right? You mean b
[13:28:16] **You**: 10 the column b, you mean. Correct? Who is sharing the screen?
[13:28:24] **You**: Who's sharing the screen? Ah, yes. Sorry. I thought you were sharing the one.
[13:28:29] **You**: This you mean.
[13:28:30] **You**: Right?
[13:28:31] **You**: Yeah. Yeah. So then it's kind of, like, clear.
[13:28:35] **You**: Yeah. So Just add some
[13:28:38] **You**: additional But it's not true because, like, we will cover rentals.
[13:28:43] **You**: With tiny cars.
[13:28:44] **You**: So it's already three types. Some other items
[13:28:48] **You**: with ACM
[13:28:49] **You**: So Now the more
[13:28:52] **You**: the more correct way, it'll be completeness checked.
[13:28:55] **You**: Some booking documents. Ok.
[13:29:00] **You**: Yeah.
[13:29:04] **You**: Booking documents, and we
[13:29:09] **You**: specify types.
[13:29:12] **You**: Kind of
[13:29:13] **You**: what can we add?
[13:29:15] **You**: But yeah.
[13:29:17] **You**: I think everything.
[13:29:19] **You**: Except transcript.
[13:29:21] **You**: Transfers?
[13:29:27] **You**: Mhmm.
[13:29:30] **You**: Mhmm. For that Now that I'll just add command here.
[13:29:37] **You**: And, also, not for every
[13:29:42] **You**: yeah,
[13:29:44] **You**: Just that. Because there are rentals that are submitted
[13:29:48] **You**: for for example, by
[13:29:49] **You**: Asian Trails.
[13:29:51] **You**: But they usually provide this
[13:29:54] **You**: rental information inside
[13:29:56] **You**: vouchers.
[13:29:57] **You**: So voucher already serves you as a
[13:30:02] **You**: like, voucher
[13:30:03] **You**: that you can use on the rental on the spot to
[13:30:07] **You**: claim your
[13:30:08] **You**: car? Mhmm.
[13:30:10] **You**: But, yeah, right now, so I see this is the maximum we can do with
[13:30:15] **You**: current approach.
[13:30:16] **You**: But for this, to be honest, we
[13:30:19] **You**: need that much time from what I understand, from what I can
[13:30:22] **You**: tell.
[13:30:23] **You**: Yeah. And so
[13:30:27] **You**: you mean, check v two, both
[13:30:30] **You**: Yeah. Both of them gonna be shorter.
[13:30:32] **You**: Right? Yeah. So if you think, like, in one, two weeks, we can do historical lookup with this direct. Yeah. Comparison, and then other two weeks, we can
[13:30:45] **You**: dedicate to just
[13:30:46] **You**: make the very basic
[13:30:48] **You**: So I can say that very basic
[13:30:50] **You**: implementation
[13:30:52] **You**: inside DMC settings without connecting to
[13:30:55] **You**: oops.
[13:30:58] **You**: Like that?
[13:31:01] **You**: Are you you're an
[13:31:06] **You**: Let me share the screen.
[13:31:09] **You**: For example, what I mean
[13:31:11] **You**: Yep. That here we add this
[13:31:14] **You**: just list of UUIDs for now.
[13:31:16] **You**: Process go city voucher,
[13:31:18] **You**: since it's an activity.
[13:31:20] **You**: But still, version one and version two has to finish.
[13:31:23] **You**: That's like
[13:31:25] **You**: we have to finish them with Markus.
[13:31:29] **You**: And, yeah, I would
[13:31:31] **You**: не...
[13:31:32] **You**: Some support on that.
[13:31:35] **You**: Okay.
[13:31:37] **You**: Sharing the
[13:31:39] **You**: roadmap thing. Right? So I adjusted this
[13:31:42] **You**: to look like that. Right? So we have one engineer here.
[13:31:48] **You**: Just finishing this, finishing that.
[13:31:50] **You**: This is what you propose.
[13:31:53] **You**: Mhmm. And in the next month, we can focus on
[13:31:56] **You**: rolling it out to more
[13:31:58] **You**: GMCs.
[13:32:02] **You**: Next cycle limit.
[13:32:04] **You**: No. Next month.
[13:32:06] **You**: I mean Next month? Because this is empty.
[13:32:08] **You**: What?
[13:32:10] **You**: I mean, you see that this next month is empty?
[13:32:14] **You**: Yeah. And
[13:32:16] **You**: if we have You're saying there are other initiatives? Yeah. Looking
[13:32:21] **You**: a little bit higher. We have, I think, kind of
[13:32:23] **You**: craving for attention.
[13:32:26] **You**: Yeah. So smart booking.
[13:32:29] **You**: And why Cristina asked me to
[13:32:32] **You**: look at check with two.
[13:32:34] **You**: She she was actually ready to drop something, so it's
[13:32:39] **You**: in favor of
[13:32:41] **You**: smart... Having more time for smart booking.
[13:32:43] **You**: Okay. So now with your estimate, I don't think
[13:32:48] **You**: we should drop it.
[13:32:49] **You**: Should get it done. Mhmm.
[13:32:51] **You**: If it's like that, if you guys all agree that
[13:32:54] **You**: it sounds
[13:32:56] **You**: But from all the meetings? Correct.
[13:33:00] **You**: Yeah. I'm just doing it how I understood what was the proposal and what was the initiative.
[13:33:05] **You**: So did you
[13:33:06] **You**: have any other memories or understanding of the initiative?
[13:33:11] **You**: So maybe Marcus and Cristina meant something else.
[13:33:15] **You**: So do you guys
[13:33:17] **You**: make sense?
[13:33:18] **You**: Right?
[13:33:20] **You**: Yeah. Especially. Yes. So
[13:33:22] **You**: based on your finding, I I agree that the historical lookup will take
[13:33:26] **You**: two weeks.
[13:33:27] **You**: It should be easy, but then the AI judge There will be no AI judge.
[13:33:35] **You**: So instead of EI judge, it's gonna be like Sorry. The board, EI judge will be
[13:33:40] **You**: replaced with
[13:33:41] **You**: With what? Judge.
[13:33:44] **You**: I don't know. It will be in just function. No. Like,
[13:33:48] **You**: Oh, I non AI non AI judge. Go. The historical lookup. No.
[13:33:55] **You**: More DMCs?
[13:33:59] **You**: So to find more
[13:34:01] **You**: candidates,
[13:34:03] **You**: basically,
[13:34:04] **You**: to find and cross verify and, like,
[13:34:07] **You**: align it
[13:34:09] **You**: So what I want, I want, like, signed
[13:34:11] **You**: I want to present the document to Cristina and Miklas, and I want them to say, okay. This is enough.
[13:34:16] **You**: And then after they say this is enough, we create this non
[13:34:20] **You**: AI deterministic judge, put it to the system, and enforce this check.
[13:34:25] **You**: Yes. So that's why I put, like, two weeks because I feel like they need to cross verify the findings of this this
[13:34:32] **You**: items curator.
[13:34:33] **You**: Themselves.
[13:34:34] **You**: So I understand it's a job. If if the script is done already, said it will be
[13:34:39] **You**: by the end of this week, but
[13:34:41] **You**: my point is it said, yeah, I want, like,
[13:34:45] **You**: confirmation from Nicolas and Cristina.
[13:34:48] **You**: Saying this is
[13:34:49] **You**: know
[13:34:50] **You**: So the scope of this v two restore lookup is
[13:34:54] **You**: to cross verify this list.
[13:34:56] **You**: And
[13:34:57] **You**: And then enforce it inside the thyp generation.
[13:35:01] **You**: Thyroid report generation.
[13:35:03] **You**: Enforce this next phase.
[13:35:05] **You**: But still, we need to not forget that we have
[13:35:10] **You**: version one that was supposed to be delivered by but he got sick.
[13:35:14] **You**: So
[13:35:17] **You**: it should be done by end of month.
[13:35:20] **You**: But
[13:35:21] **You**: let's hope it will be done faster.
[13:35:29] **You**: So I feel if two people are working on this, we can do it by the end of the month.
[13:35:33] **You**: If I understood correctly the scope, and this is enough.
[13:35:36] **You**: For Cristina. Otherwise, as Cristina proposed, we
[13:35:41] **You**: cut some things. But I feel if she says cut it,
[13:35:45] **You**: and
[13:35:46] **You**: we say we can do this
[13:35:47] **You**: short in a short amount of time, then
[13:35:50] **You**: I think Yeah. If the shortest amount of time So limited functionality is better.
[13:35:54] **You**: Right, than no functionality?
[13:35:57] **You**: Yeah. Unless it's kind of
[13:36:00] **You**: if it helps.
[13:36:02] **You**: If it provides value. Yeah.
[13:36:04] **You**: Yeah. Alright. Then if we freed up
[13:36:07] **You**: sometime
[13:36:09] **You**: in June, right, we can
[13:36:12] **You**: in theory,
[13:36:14] **You**: do more for the
[13:36:17] **You**: Smartbooking.
[13:36:18] **You**: Right? Then I guess, like, this thing actually shifts here.
[13:36:22] **You**: And we'll have, like, two people
[13:36:24] **You**: available for smart booking already. So everyone just
[13:36:28] **You**: on smart booking. Here two weeks, is out, but
[13:36:32] **You**: we can finish the
[13:36:35] **You**: API.
[13:36:36] **You**: And already starts implementing core logic.
[13:36:40] **You**: Right?
[13:36:42] **You**: Can we just do, like,
[13:36:45] **You**: this here?
[13:36:47] **You**: Like that.
[13:36:51] **You**: With a better color.
[13:36:53] **You**: Yes.
[13:36:55] **You**: Is it something we can do?
[13:36:57] **You**: With
[13:36:58] **You**: one, maybe, like,
[13:37:02] **You**: two, three.
[13:37:05] **You**: At this point.
[13:37:08] **You**: Sasha will do back.
[13:37:10] **You**: Sasha will be back here. Wait. There is no
[13:37:13] **You**: No anymore?
[13:37:15] **You**: Last one.
[13:37:18] **You**: Well,
[13:37:19] **You**: because then the next cycle starts. Yeah. Yeah. But
[13:37:23] **You**: like
[13:37:24] **You**: these are the inter weeks planned for this. Done quarter.
[13:37:27] **You**: Forget that there. This line. This line. Yeah.
[13:37:31] **You**: So, yeah,
[13:37:33] **You**: we have two people So put available here. Two.
[13:37:38] **You**: Can we do it like that?
[13:37:41] **You**: I guess. Yes.
[13:37:43] **You**: Do you see any
[13:37:45] **You**: weirdness
[13:37:47] **You**: this picture?
[13:37:48] **You**: What about the full itinerary email
[13:37:52] **You**: Mhmm.
[13:37:56] **You**: I I do think, oh, that's
[13:37:59] **You**: something she
[13:38:01] **You**: wants to do.
[13:38:02] **You**: Mhmm. So if you like, we we can do, like,
[13:38:07] **You**: this.
[13:38:10] **You**: Or it requires some other things?
[13:38:13] **You**: No. No. The the full itinerary email is
[13:38:17] **You**: So it can be done just
[13:38:20] **You**: It can be done
[13:38:21] **You**: It can already be done now.
[13:38:23] **You**: For example, if you want to know.
[13:38:25] **You**: Okay.
[13:38:27] **You**: But, anyway, June, we can
[13:38:30] **You**: dedicate these things, finish this thing, then you're back. We all
[13:38:34] **You**: focus on the remaining core logic
[13:38:38] **You**: and at least we have some time to work on core logic. It won't be done this
[13:38:42] **You**: spring, but
[13:38:44] **You**: we will progress.
[13:38:45] **You**: Okay?
[13:38:48] **You**: That's
[13:38:50] **You**: sounds good.
[13:38:54] **You**: Yes.
[13:38:56] **You**: Just a quick question.
[13:38:58] **You**: Ah, yeah. Up to you. No. Not me.
[13:39:08] **You**: Was stuck. Okay. I will just raise my hand in the air.
[13:39:11] **You**: So my question is
[13:39:13] **You**: just out of curiosity.
[13:39:15] **You**: About full itinerary email.
[13:39:19] **You**: So we need to
[13:39:21] **You**: tweak the existing version
[13:39:23] **You**: It's alright.
[13:39:25] **You**: We need to
[13:39:28] **You**: check the current version.
[13:39:32] **You**: Made some database adjustments
[13:39:34] **You**: Mhmm. If it's still
[13:39:35] **You**: looks like the like, it it still works as expected.
[13:39:39] **You**: Mhmm.
[13:39:40] **You**: And
[13:39:40] **You**: probably do some smaller
[13:39:42] **You**: refractory stairs so that
[13:39:44] **You**: that too
[13:39:45] **You**: And it might
[13:39:46] **You**: the email per se should look
[13:39:49] **You**: Okay. And then
[13:39:51] **You**: the triggering of the email was the
[13:39:54] **You**: will be correlated with
[13:39:57] **You**: limb platter supply confirmed.
[13:40:01] **You**: If you will, only say
[13:40:03] **You**: we had this very hard problem about
[13:40:07] **You**: we should send this email.
[13:40:09] **You**: And I came to the agreement with
[13:40:12] **You**: The best time to send out this email is
[13:40:15] **You**: when supply confirmed was clicked in
[13:40:18] **You**: Correct. Mhmm. But we get the
[13:40:20] **You**: notification. What
[13:40:23] **You**: So we will send this email, if I'm remember correctly,
[13:40:27] **You**: non third party, all
[13:40:31] **You**: except non third party suppliers
[13:40:33] **You**: of stricter.
[13:40:35] **You**: So And it contains limited information
[13:40:38] **You**: Except signing cards and accept FirstT. Right?
[13:40:41] **You**: I'm not
[13:40:45] **You**: Not sure. I think first he doesn't want to know the full itinerary.
[13:40:49] **You**: They are not... The point what... The the reason why I say that because
[13:40:54] **You**: we don't
[13:40:55] **You**: enforce
[13:40:59] **You**: so First G and Sani cards, they are not
[13:41:02] **You**: third party.
[13:41:03] **You**: Yeah. And the front end and back end will
[13:41:07] **You**: treat them as non third party. So that's my point. Maybe we have to
[13:41:11] **You**: make an adjustment, as you said,
[13:41:12] **You**: But, yeah, I agree. It can be done in one sprint. Only cars, I'm pretty sure
[13:41:21] **You**: but tummy cars
[13:41:23] **You**: definitely that
[13:41:25] **You**: But
[13:41:27] **You**: But
[13:41:28] **You**: that's why I said, like, a good
[13:41:29] **You**: some small adjustments
[13:41:39] **You**: really mentally there.
[13:41:40] **You**: Like, how how the email looks like and sound that's important. That's kind of it.
[13:41:44] **You**: The was the was the how it but more like, as you said, like,
[13:41:48] **You**: ensure that the email is only sent to the non
[13:41:52] **You**: non third party
[13:41:55] **You**: suppliers of the trip
[13:41:57] **You**: And
[13:41:59] **You**: and, also, of course,
[13:42:01] **You**: those that are most
[13:42:02] **You**: for those that's not gonna like, they I think it's
[13:42:06] **You**: mostly relevant for the ones with accommodations.
[13:42:09] **You**: We have
[13:42:12] **You**: Yeah. And you have to somehow make it
[13:42:14] **You**: very obvious that
[13:42:15] **You**: like, I understand that John Vue, ATI, and others would
[13:42:19] **You**: probably expect this email, but
[13:42:21] **You**: some smaller DMCs might not expect this email, and Nicolas must
[13:42:25] **You**: like, tell this to people because I don't want this
[13:42:28] **You**: email be treated as, like, we would like to book something from you, you know?
[13:42:32] **You**: So they will do double booking or something else.
[13:42:36] **You**: You know?
[13:42:37] **You**: Yeah.
[13:42:39] **You**: But
[13:42:39] **You**: think that
[13:42:40] **You**: should be also clear in the email.
[13:42:43] **You**: Like, I mean, from subject and
[13:42:47] **You**: and and and how the liver looks like.
[13:42:48] **You**: But
[13:42:51] **You**: yeah,
[13:42:52] **You**: we can't check
[13:42:54] **You**: can check with Christina definitely, but
[13:43:05] **You**: Fazer o
[13:43:07] **You**: place is probably rollout is out of
[13:43:10] **You**: Yeah. Out of but, also, I
[13:43:14] **You**: feel if you scroll left,
[13:43:18] **You**: Yeah.
[13:43:18] **You**: So here,
[13:43:20] **You**: for example,
[13:43:22] **You**: May 4 So I don't know how
[13:43:26] **You**: do you achieve?
[13:43:27] **You**: Which which may CV twenty one and CV twenty two.
[13:43:31] **You**: CV twenty one twenty two. And because of this Yeah. We have this
[13:43:36] **You**: capacities.
[13:43:36] **You**: Yeah. Listed here. So
[13:43:38] **You**: there are no people
[13:43:41] **You**: There are no people.
[13:43:43] **You**: For that.
[13:43:44] **You**: So Sasha and I was?
[13:43:45] **You**: So We are finishing this. Is out. Don't forget.
[13:43:49] **You**: I feel like Christina moved. But I'm not sure, like,
[13:43:52] **You**: what column 16 like, onboard two new supplies for doctor Luck. What did I say? Like,
[13:43:59] **You**: what are what are we supposed to? I think new models
[13:44:04] **You**: We need to train new classification models.
[13:44:08] **You**: With dog types.
[13:44:13] **You**: Check the dentist for it. I know.
[13:44:16] **You**: And then maintain document classification rate.
[13:44:18] **You**: I don't know. Maybe exclude a couple of models, I didn't see proposed
[13:44:22] **You**: from product. So I don't know what
[13:44:24] **You**: what we need to do.
[13:44:25] **You**: I sort of understand what we need to do in the enable removal of all data documents.
[13:44:29] **You**: I feel like
[13:44:30] **You**: who put this estimation on the line 18 you
[13:44:35] **You**: or Cristina?
[13:44:36] **You**: I think it was Marcus.
[13:44:40] **You**: So does it It was include
[13:44:43] **You**: only the job that we estimated already, or it's like
[13:44:48] **You**: this advanced check is also included?
[13:44:52] **You**: Well, that's my curiosity. I don't
[13:44:56] **You**: know anything about this. Alright.
[13:44:59] **You**: But, yeah, it will be could be a good project
[13:45:03] **You**: so we can kick kick it in.
[13:45:05] **You**: But he can take it over when he's back.
[13:45:08] **You**: When he's back.
[13:45:09] **You**: Okay. But for this too,
[13:45:13] **You**: Right? So they are kind of
[13:45:15] **You**: should we move them here and move this here?
[13:45:20] **You**: But then we won't have just capacity.
[13:45:23] **You**: Then we have this.
[13:45:25] **You**: But is it enough?
[13:45:28] **You**: One engineer for implement CoreLogic MVP?
[13:45:32] **You**: But
[13:45:33] **You**: as we said, we definitely won't finish it this
[13:45:37] **You**: Autumn. Quarter. Right?
[13:45:39] **You**: So
[13:45:40] **You**: this is kind of
[13:45:41] **You**: carries over for a month into next
[13:45:45] **You**: cycle. Okay. This is, like, assessment. So we start by Christine and Pathurst. Right?
[13:45:49] **You**: Yeah. Yeah.
[13:45:51] **You**: Definitely. Good.
[13:45:52] **You**: So this is more realistic.
[13:45:56] **You**: Yes. But, yes,
[13:45:59] **You**: I just don't know what you can do in one week for line number 17.
[13:46:03] **You**: But
[13:46:05] **You**: sure.
[13:46:05] **You**: Line number
[13:46:07] **You**: 17? Yeah.
[13:46:16] **You**: This is debatable. Then played the the overball
[13:46:28] **You**: in every sprint now.
[13:46:31] **You**: Don't don't use more than half a day. Cristina says not only weekly task,
[13:46:36] **You**: Okay. Not this one. Okay.
[13:46:39] **You**: So Markus and Cristina added some vague information that is
[13:46:43] **You**: understood only by them.
[13:46:45] **You**: Mhmm.
[13:46:46] **You**: Yeah.
[13:46:48] **You**: Another topic I wanted to discuss with you.
[13:46:51] **You**: We have some information that's
[13:46:55] **You**: only understood by Markus and some information that's only understood by Cristina.
[13:47:01] **You**: What do we need to make all the information understood by
[13:47:06] **You**: everyone?
[13:47:07] **You**: Ornun. Yes.
[13:47:10] **You**: What kind of ordnung?
[13:47:18] **You**: So
[13:47:19] **You**: some information that is only understood by Cristina, if it
[13:47:22] **You**: doesn't
[13:47:23] **You**: bother us,
[13:47:24] **You**: So if it doesn't need us, then
[13:47:28] **You**: I think we don't need to understand. Yes. Some
[13:47:31] **You**: true, but some work that
[13:47:34] **You**: that's what connected to us, but
[13:47:36] **You**: for example, this thing. Right? So we have this milestone.
[13:47:39] **You**: And we don't really clearly understand what it is, how it is,
[13:47:44] **You**: like,
[13:47:45] **You**: it's vague information with just kind of
[13:47:48] **You**: some information from Cristina. Mhmm. Right? It's not a task. It's not a document. It's not a kind of
[13:47:53] **You**: product pitch
[13:47:56] **You**: product decision document for all
[13:48:00] **You**: initiatives that we I mean, that would be lovely.
[13:48:03] **You**: But maybe even some brief explanation.
[13:48:06] **You**: In one paragraph could be good.
[13:48:09] **You**: Mhmm. But I feel
[13:48:11] **You**: from what
[13:48:13] **You**: you talked about
[13:48:14] **You**: on our one on one Mhmm. And with Sasha and me in the morning. So
[13:48:19] **You**: there is this overall
[13:48:21] **You**: knowledge gap between us and Markus with him running these scripts.
[13:48:25] **You**: And knowing some
[13:48:28] **You**: and we do not run the scripts, and we do not know these ratings.
[13:48:31] **You**: So, for example,
[13:48:33] **You**: maintain document classification rate. What
[13:48:36] **You**: rate?
[13:48:37] **You**: On what scale?
[13:48:39] **You**: On what... From what script? You know?
[13:48:41] **You**: What does it mean? So,
[13:48:43] **You**: suggestion will be to
[13:48:44] **You**: maybe Actually, I had comments about it.
[13:48:48] **You**: And Cristina marked them as
[13:48:50] **You**: completed. Now it's, like, less information. Not completed. Because it was, like,
[13:48:55] **You**: written 90% somewhere here. Wait.
[13:48:59] **You**: Maybe maybe it's not But, yeah, so, to simplify what I say,
[13:49:04] **You**: so, to bridge the gap between us and Marcus,
[13:49:07] **You**: dashboards.
[13:49:08] **You**: Dashboards.
[13:49:10] **You**: Yeah. This is a minimum.
[13:49:13] **You**: Less ER, less script.
[13:49:14] **You**: Less what?
[13:49:16] **You**: Less PRs.
[13:49:17] **You**: Less PRs? This is what we discussed yesterday. In the dashboard.
[13:49:21] **You**: Wait. Well, SPRs, no. This won't work because
[13:49:25] **You**: will start packing everything in one PR. So this is bad.
[13:49:29] **You**: Metric. Bad metric.
[13:49:31] **You**: But in the course.
[13:49:33] **You**: First, Markus if Markus has time to work on non
[13:49:37] **You**: cycle
[13:49:39] **You**: critical initiatives, then he has time to work on dashboards.
[13:49:43] **You**: And this, like, dashboards
[13:49:47] **You**: can go from the process when we actually
[13:49:50] **You**: make sure that things that Markus works with Cristina on are actually
[13:49:56] **You**: planned and agreed with the entire team. And this is like
[13:50:00] **You**: the point when team kind of can raise, okay.
[13:50:02] **You**: For this initiative, you guys need to include dashboards
[13:50:06] **You**: into your plan because otherwise, we won't be able to
[13:50:10] **You**: maintain it and things like that. Sort of. Yeah.
[13:50:13] **You**: So for me, I really like sports.
[13:50:17] **You**: Mhmm.
[13:50:19] **You**: Do you mean?
[13:50:20] **You**: How do you say? What I mean? Parts.
[13:50:23] **You**: Documents dashboard,
[13:50:25] **You**: want Grafana. Built with
[13:50:26] **You**: It doesn't it won't work in Grafana. So
[13:50:31] **You**: I want we have limited resources, and Pedro and I and you
[13:50:36] **You**: don't have time to build it in Grafana. If Grafana doesn't
[13:50:38] **You**: provide us this package. Right? We will try to do some Your time. Research.
[13:50:43] **You**: Okay. Right? But if it won't work, so I think at least we have to do them
[13:50:48] **You**: at least we have to do them inside the documents dashboard, because
[13:50:52] **You**: it's at least
[13:50:54] **You**: like, programmatic space where, actually,
[13:50:58] **You**: we can build new dashboards and
[13:51:00] **You**: since it's just JavaScript, basically, we can do anything
[13:51:05] **You**: JavaScript. Right? So we can send
[13:51:07] **You**: Slack notifications what Graphan is doing, but we would need cloud to build this
[13:51:12] **You**: for us.
[13:51:13] **You**: At least we will have, like,
[13:51:15] **You**: not hidden in scripts and CSVs in the emails, but
[13:51:19] **You**: we will have, like,
[13:51:21] **You**: explicit
[13:51:22] **You**: dashboards, you know, that will highlight some
[13:51:26] **You**: things that needs to point to For example, for classification rate, we can do
[13:51:31] **You**: already this dashboard.
[13:51:33] **You**: Right? And then Cristina can say, okay. Improve me
[13:51:36] **You**: this rate by this percent.
[13:51:38] **You**: Right?
[13:51:39] **You**: And then we would understand what what does it mean and how to track it.
[13:51:44] **You**: Example. Or Marcus is working on QC zero out of zero problem.
[13:51:47] **You**: Why is it the problem? How many documents are is this problem in this in per day?
[13:51:52] **You**: You know?
[13:51:53] **You**: Can be another dashboard.
[13:51:55] **You**: And this in this all can be retrieved from MongoDB
[13:51:59] **You**: already.
[13:51:59] **You**: What we do for file these
[13:52:02] **You**: what we do for
[13:52:04] **You**: failed rentals. So it's not exactly what we do for CloudWatch logs.
[13:52:09] **You**: Dashboard for trip imports, but
[13:52:11] **You**: already our dashboard includes some login. So
[13:52:16] **You**: what I've realized.
[13:52:17] **You**: So now we would need to push it
[13:52:20] **You**: as a next at least next cycle, we have to
[13:52:23] **You**: bring it up.
[13:52:24] **You**: Yeah. It's 100%. I agree.
[13:52:30] **You**: But this cycle, there is no space.
[13:52:32] **You**: Yeah. But next cycle plan is in one month.
[13:52:35] **You**: So it's
[13:52:37] **You**: Wait. That's so commented.
[13:52:41] **You**: Me dijo, no
[13:52:43] **You**: So I think, like, for to make this planning better,
[13:52:46] **You**: we include this technical depth. We make it
[13:52:50] **You**: a must to be included into the next cycle planning.
[13:52:53] **You**: Or quarter planning, because
[13:52:56] **You**: it's the last cycle. Now we're going to be back two quarters.
[13:53:00] **You**: So next quarter,
[13:53:02] **You**: we include this technical debt, which is
[13:53:06] **You**: dashboard. We make sure that everyone works
[13:53:11] **You**: in ordnung as we agree with the team. So
[13:53:15] **You**: team discuss, prepares necessary documents,
[13:53:19] **You**: makes technical decisions, only then jumps to implementation.
[13:53:23] **You**: And that we have technical for larger
[13:53:27] **You**: that we have technical document like the one that
[13:53:30] **You**: Alexi shared, with template. And we also need
[13:53:35] **You**: more clear
[13:53:38] **You**: products and company document for these initiatives. So
[13:53:43] **You**: Cristina can write, like, one two with the template one? That we
[13:53:49] **You**: define and kind of that includes what we as engineers need from
[13:53:54] **You**: her that she can feel and
[13:53:56] **You**: we
[13:53:57] **You**: have much easier time
[13:53:59] **You**: making
[13:54:01] **You**: decisions and
[13:54:04] **You**: deriving meaning from all these initiatives.
[13:54:06] **You**: Mhmm. So I think, like, this is
[13:54:09] **You**: if we do all of this,
[13:54:12] **You**: in in this small cycle, that would be already
[13:54:16] **You**: a great success.
[13:54:17] **You**: GM.
[13:54:20] **You**: Yeah. So my proposal will be maybe to make a deadline. So Cristina one pager for what she wants to work on.
[13:54:27] **You**: Mhmm.
[13:54:29] **You**: Next.
[13:54:30] **You**: Until
[13:54:31] **You**: middle of, like, last month.
[13:54:34] **You**: And then we give engineers one Until middle of last month of the cycle? Yes.
[13:54:40] **You**: For example, if next cycle starts in July 1, then
[13:54:44] **You**: at least we would need this
[13:54:46] **You**: product
[13:54:47] **You**: proposals, one, two weeks in advance,
[13:54:50] **You**: Mhmm. Then vi tu
[13:54:52] **You**: dieses
[13:54:54] **You**: one week of
[13:54:55] **You**: developers will provide the developer proposal Mhmm. And share and
[13:55:00] **You**: brainstorm and do whatever
[13:55:01] **You**: you need. Yeah. So it's like
[13:55:03] **You**: so there is a buffer,
[13:55:04] **You**: this week where we do this moving, so we do the moving when the quarter started.
[13:55:09] **You**: Yeah. So it's, like, at least
[13:55:11] **You**: the deadline, if we do all of this a bit earlier, better, but, you know,
[13:55:15] **You**: probably this is, like,
[13:55:17] **You**: the max we can stretch. Yeah, Sascha?
[13:55:20] **You**: Do you want to already mark this here in this
[13:55:25] **You**: document?
[13:55:26] **You**: That there would be one week where
[13:55:28] **You**: there would be no capacity because we will all
[13:55:31] **You**: do again cycle planning.
[13:55:33] **You**: I mean, I will be out. So it's it's your main problem.
[13:55:40] **You**: Exactly, Саша. Exactly.
[13:55:46] **You**: No. I don't know when I'm out.
[13:55:49] **You**: So Alexia just put this week there, but it might be different week.
[13:55:55] **You**: You can, like, maybe being out.
[13:55:57] **You**: Somewhere else.
[13:56:01] **You**: I can move you out.
[13:56:03] **You**: Yeah. Yeah. Yeah. Just so it doesn't
[13:56:07] **You**: I don't know which it will be.
[13:56:09] **You**: Okay.
[13:56:10] **You**: But, yeah, that's basically the idea. That's, like,
[13:56:14] **You**: I think we need to enforce
[13:56:17] **You**: if documents has to be shared, it must be two pager maximum
[13:56:21] **You**: So we need, I think, to enforce it from everyone. Yeah. We need templates.
[13:56:26] **You**: This template that you shared for us engineers is helpful, and we need to provide some
[13:56:30] **You**: similar
[13:56:32] **You**: for Christina so she doesn't invent things. And Yeah.
[13:56:36] **You**: Also,
[13:56:38] **You**: it's easier for her. And, yeah,
[13:56:41] **You**: I think we all need to figure out what we want from her
[13:56:45] **You**: Right? I will I can prepare some things
[13:56:47] **You**: and we'll run through your
[13:56:49] **You**: review.
[13:56:50] **You**: And then we can
[13:56:51] **You**: talk to Cristina. This is what we need from you.
[13:56:56] **You**: I I mean,
[13:56:58] **You**: it's quite easy, right, when we go through
[13:56:59] **You**: her.
[13:57:00] **You**: We want the
[13:57:02] **You**: understandable tickets
[13:57:05] **You**: that are
[13:57:06] **You**: let's say, have
[13:57:08] **You**: good acceptance criterias
[13:57:10] **You**: or
[13:57:11] **You**: at least some acceptance criterias,
[13:57:14] **You**: that we can
[13:57:16] **You**: probably refine them a bit more technically.
[13:57:19] **You**: If we need to.
[13:57:20] **You**: Mhmm. We can work
[13:57:22] **You**: work
[13:57:23] **You**: That's usually what I my risk risk. I would love
[13:57:28] **You**: would love these
[13:57:29] **You**: numbers to be actually explained how they were calculated and
[13:57:34] **You**: so we can actually make sense if
[13:57:38] **You**: these initiatives that we were picking actually brings the value we
[13:57:42] **You**: So we can double check before we commit to things. Yeah. So we're not doing kind of
[13:57:46] **You**: low impact initiatives.
[13:57:50] **You**: I think she she calculates that by using some
[13:57:55] **You**: snowplow dashboards.
[13:57:59] **You**: Yeah. But in these documents, would be great to have, like, explanation of
[13:58:03] **You**: how these numbers were calculated and why they are
[13:58:06] **You**: they look this way. How how
[13:58:09] **You**: exactly we gonna be
[13:58:10] **You**: making this impact?
[13:58:12] **You**: I mean, for for the
[13:58:15] **You**: for the the
[13:58:17] **You**: smart booking logic,
[13:58:19] **You**: there is in the complex page.
[13:58:24] **You**: And I also commented on that because I
[13:58:26] **You**: I found the formula. There was some error on it.
[13:58:29] **You**: At least it looks like. But
[13:58:31] **You**: Good. Wasn't.
[13:58:32] **You**: I feel
[13:58:35] **You**: so what you want, Sasha, I agree with you. I also want that, but I think we
[13:58:39] **You**: Cristina's, like, involvement and everything, I think it's
[13:58:42] **You**: we will ever get the
[13:58:44] **You**: all the tickets breakdown from her, so I think it will be a joint. Of course.
[13:58:48] **You**: Of course. It will be a joint. It's just impossible.
[13:58:51] **You**: Just impossible. But, yeah, at least, like,
[13:58:54] **You**: we can ask
[13:58:56] **You**: maybe for this product one pagers. Mhmm. And, also, those numbers
[13:59:00] **You**: like,
[13:59:01] **You**: I mean, I checked some of them, and
[13:59:03] **You**: I don't even know.
[13:59:05] **You**: Is it even possible to
[13:59:07] **You**: calculate it? Yeah, but if it's
[13:59:11] **You**: impossible, we need to kind of
[13:59:12] **You**: be clear about
[13:59:15] **You**: kind of
[13:59:15] **You**: how do we some process impact. How do we
[13:59:18] **You**: It will be break and impact gonna be delivered. So yep.
[13:59:23] **You**: Right, guys. Sorry. Need to run yet another meeting
[13:59:27] **You**: Fun times. But I think we
[13:59:31] **You**: all agree with
[13:59:33] **You**: Q2 timeline now. Yeah. Looks good. Right?
[13:59:37] **You**: We shrink completeness check.
[13:59:39] **You**: Yeah. And do bare minimum.
