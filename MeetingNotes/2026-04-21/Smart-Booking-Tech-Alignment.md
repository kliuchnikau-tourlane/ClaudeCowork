# Smart Booking Tech Alignment

**Date**: 2026-04-21
**Time**: 14:00 - 15:00
**Location**: PR-20 HQ-2-Italy (15) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- PR-20 HQ-2-Italy (15) [Camera, Google Meet, Mic, TV, Tablet]
- sascha.burku@tourlane.com
- kristina.lamza@tourlane.com
- claudia.tita@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- kiryl.karetnikau@tourlane.com
- pedro.alves@tourlane.com
- minh.nguyen@tourlane.com

## Transcript

[12:00:10] **You**: The scheme is wrong.
[12:00:13] **You**: For me.
[12:00:34] **You**: Oh wow.
[12:00:43] **You**: Why is it focusing on me?
[12:00:54] **You**: Move?
[12:00:55] **You**: No gesture? How do I.
[12:00:58] **You**: Operate this?
[12:00:59] **You**: Technology manually?
[12:01:06] **You**: No, then man.
[12:01:07] **You**: Okay.
[12:01:17] **You**: The last meeting for today.
[12:01:19] **You**: We can do it.
[12:01:26] **You**: To other.
[12:01:26] **You**: Videos.
[12:01:31] **You**: That doesn't count.
[12:01:38] **You**: For this one we need Claudia Kristina and Pedro.
[12:01:44] **You**: This Kristina doesn't.
[12:01:47] **You**: Hurt really table.
[12:01:48] **You**: S yeah we can just.
[12:01:53] **You**: Look at them through the mirror.
[12:02:08] **You**: This.
[12:02:08] **You**: Bedroom.
[12:02:13] **You**: Hopefully.
[12:02:21] **You**: What login.
[12:02:23] **You**: Chicken.
[12:02:25] **You**: Kiryl checked in.
[12:02:27] **You**: The room.
[12:02:30] **You**: Okay.
[12:02:49] **You**: Thanks for joining.
[12:02:54] **You**: Pedro.
[12:02:54] **You**: Was the only one.
[12:02:55] **You**: Being.
[12:02:56] **You**: All trying.
[12:02:58] **You**: Rest.
[12:02:58] **You**: Is here okay.
[12:03:01] **You**: Start.
[12:03:05] **You**: Hello.
[12:03:07] **You**: Hell.
[12:03:07] **You**: O.
[12:03:11] **You**: Is your haircut or is it just looking.
[12:03:13] **You**: Like.
[12:03:14] **You**: You are on this huge screen now.
[12:03:21] **You**: I wish so and so you will be smaller then yeah big brother is watching us.
[12:03:35] **You**: It's a it's a tiny picture in the middle now.
[12:03:43] **You**: Completely.
[12:03:43] **You**: Sorry.
[12:03:48] **You**: Okay so your hair is not cut.
[12:03:52] **You**: Ting back to my initial question huh.
[12:03:57] **You**: Sorry.
[12:03:57] **You**: I was not.
[12:03:58] **You**: Prepared I would know.
[12:03:59] **You**: That this was on the agenda yes it is see I'm seeing it okay I will make you smaller now to not making feeling incomfortable I could very self conscious right now.
[12:04:15] **You**: Okay so yeah thanks for joining I just try to create something for at least giving it a bit structure because I thought now there are so many people in that we best invest our time so first things first it's not that everything is already aligned and we will move into cycle 2 with this I mean I would love to work on it but let's see what is the outcome here because actually I have an idea how it will look like from oh sorry from a business perspective.
[12:04:42] **You**: But I'm missing quite some information on the technical side and Sascha did some technical research when I was on vacation as well but I think since as we know system is quite complex I also I'm just curious to understand like what is the flow and assuming we want to reach this kind of state as milestone one what would be required who would need to do what so I kind of tried to structure it and hope that we can at least get answers to some of the questions.
[12:05:09] **You**: And if not maybe there are other questions that you have I will just add it here.
[12:05:13] **You**: So I will first start with high level overview what is it about essentially also what is this milestone one about?
[12:05:22] **You**: Then I mean I have some ideas of the technical challenges but maybe that's not all.
[12:05:27] **You**: And what I would like to do is actually not sure if this is the outcome of this meeting maybe not because it's only one hour but like I would like to understand what is coming or what is required from which system that we can kind of achieve this milestone one because actually I have no idea where all this data is living in at the moment.
[12:05:44] **You**: I know from robot he told me some things about we need these ideas to fetch this and whatever and I have no idea and that's also kind of the challenge because I don't know where is exactly the dependency to speedy and is this maybe something that we can bid on our own or I don't know open for discussion.
[12:06:03] **You**: And then yeah just like some more open questions if we if we can get there we can also just mark it here so if you have something in between just I will actually share it with you.
[12:06:15] **You**: And you can just directly add your questions.
[12:06:19] **You**: If something is popping up.
[12:06:22] **You**: I will share it.
[12:06:25] **You**: I will pin it in the meetings or whoever is joining then that it's still there.
[12:06:34] **You**: Okay let's start.
[12:06:37] **You**: And I mean also to be quite honest the milestone owners which is also me we need to submit kind of the proposal of inits today by end of today I was adding this my booking logic now at least phrasing it as MVP because even if there is dependency even if for example there is no capacity in PTT maybe something that we can already start with so just that you know it's there but like what we will deliver is still not clear.
[12:07:07] **You**: Okay so for today yeah I would like to define the technical prerequisites for the smart booking logic decision engine however we call it so that in the end the outcome is that we know kind of the technical requirements that we know I actually added dependencies but now it's gone.
[12:07:28] **You**: Also some risks because maybe we know already that things will not be there I also read that some things will be decommissioned soon or deprecated so just if we are aware already of certain kind of dependencies would be good to understand it here and that we also come up with some maybe next steps at least having more input and insights on what is open.
[12:07:49] **You**: So currently as you know there is not no kind of smart system at all.
[12:07:54] **You**: So whenever a trip is created in trip planner there's always this DMC relation so every item that is added to tripana does have a DMC selected and whenever this is exported to booking platform we simply book what we get kind of so we are not asking or not like challenging if this is the best way and if this is the best kind of offer to book but the desired state is more that we come.
[12:08:18] **You**: Like that we enter a word where we have like something like a smart supplier selection I would call it that automatically detects based on which rooms the customer wants to book which is the best suitable supplier so that we are kind of moving away from supplier specific booking rather to like this is the room what is an equivalent room.
[12:08:39] **You**: To book for the customer?
[12:08:42] **You**: And for milestone one and I was just adding it here because I thought maybe it's easier to understand because this whole topic can be quite complex because there are different criteria so we can look for price for sure what is the lowest price we can check for availability for sure I mean dropping us kind of doing it already also with the help of this for example hot ipads lookup we have mix and match so the kind of idea or decision is also taking that this will move to booking domain at some point in time because currently it lives in triplanda but the goal is that agents should not kind of think about mix and match they should just select kind of the room and the room type the customer wants to have and then we decide okay like up to which X10 can we use mix and match there's also some like business requirements with like credit line limitations I think we have it for expedia but maybe for more suppliers.
[12:09:31] **You**: And maybe there's more like complexity in the future milestones that we do not see now so I think it's also good to understand what is the scope for milestone one and also here I mean I'm also open for feedback because I mean yeah let's see what is possible maybe there are some ways to make it still working with a very MVP implementation which maybe requires less feedy involvement so let's just discuss how it can potentially work.
[12:09:58] **You**: So the idea is because triptana will also not do any changes so they will still keep the mix and match on their end maybe they I think will work on it in cycle three then to kind of remove it from the trip planner domain. So triple and I will send kind of what they currently send so we know this is the item we also know to which DMC it belongs. Then the idea would be that we kind of do again what trip planner already did in the past which is kind of.
[12:10:25] **You**: Searching or asking video services to check for hey what is the price what is the ability per item?
[12:10:32] **You**: Also this mix and match which is in Fiti's domain.
[12:10:38] **You**: Then I don't know why this is what I would like to understand we either apply those fun booking logic but we would need to know for this one kind of what is an equivalent room and for this I think we also need to take some information that we have before and then request geomonics or wherever it is.
[12:10:58] **You**: To kind of get this information okay for this room that you want to have this is an equivalent room and then we kind of do this logic okay this is the prices I don't know 10 times lower or five times higher or whatever it's not available so we are not taking it so then all this kind of smart booking decision needs to happen on our end.
[12:11:16] **You**: And the idea was that for milestone one we are only doing it for hotel beds because I heard there are some limitations.
[12:11:26] **You**: That like hood habits is the most reliable kind of supplier to take so that we are in the first milestone only checking if the mix and match is already reached because I think data insights from robot also revealed that agents are only using it 30% whereas like they could potentially extend it to 70% 90% whatever.
[12:11:51] **You**: Rate is that is added.
[12:11:54] **You**: In this mix and match configuration.
[12:11:56] **You**: So the first lightstone would be we only focus on this one we get all the rooms we kind of check okay what is the mix and match is it already reached if not we try to check okay what are other items that we can book via hotel beds because the assumption is based on data insights that you type it's cheaper than the DMC so kind of lower the supplier price.
[12:12:21] **You**: Yes.
[12:12:26] **You**: I really don't fully get this point with the hotel so the idea is that every time there is the MC in the booking right you would search if a booking fails or you just search if there is a cheaper price for did I understand this correctly yeah, so the idea was to make it kind of as easy as possible so just testing kind of the flow setting up the flow by not but not exchanging like on a very complex level only exchanging if the mix and match is not yet reached or exceeded we kind of fill up.
[12:12:58] **You**: To this kind of mix and matches reached.
[12:13:01] **You**: So we only kind of exchange to with hotel beds.
[12:13:05] **You**: And this is to optimize the price.
[12:13:08] **You**: Yeah price and availability and mix and match because like this data that was shared kind of showed that I think currently they're using maybe 15% on average like they as sales agents but they could use maybe 70% so for the remaining 55 we can just check hey if we would exchange it is the price cheaper and then what would be kind of the gain on our side in terms of like monetary.
[12:13:36] **You**: Does it make sense I mean just from the but also open to discuss the scope I think it's just the easiest what is the goal of this to optimize for I mean I guess that you don't let's say that in most of the destinations now we do have the hotel bed cup so for the availability information I mean as long as there is a match so every time you would exchange now with the rule over mapping you would already know the availability from quarter bed so I don't know if you optimize necessary for availability because you would know that this room might be available in the games as well so I guess that then you would optimize for price right I mean that would be the main optimization but for sure it could also optimize availability if like this hotel lookup is not 100% like because it's just taking.
[12:14:24] **You**: What.
[12:14:25] **You**: It's just our I mean it's confirmed by data but still not 100% if it's available with hot tablets it's also available with the DMC so it's not 100% one to one relation so that maybe there's a small potential that we can also optimize availability but yes price would be the first.
[12:14:40] **You**: Just kind of to test this because also on our side we need like it's complete different booking logic we are not sending any booking request we kind of need to like store this information waiting until we have everything then sending the rest of the information because it's only for rooms so we still need to kind of follow the old booking logic for all other items so it's more like setting up like making the system ready let's say and this would be the easiest use case I guess but if there's other ideas.
[12:15:08] **You**: Because the initial use case for this that I first off was that the goal could be replacing rooms that you could not book.
[12:15:19] **You**: That was my initial idea that was my kind of easiest easiest solution but then I think robot and also Veronica they looked into the data because I mean he's busy with this for quite some time and the kind of win wasn't that huge.
[12:15:33] **You**: Like compared to like price optimizations.
[12:15:38] **You**: Yeah.
[12:15:41] **You**: But if we any are doing it I mean maybe we can still do it everything that is failing just trying to book.
[12:15:49] **You**: Okay we would also need to create a line for hot templates because.
[12:15:53] **You**: There might be some limitations.
[12:15:55] **You**: There as well.
[12:16:01] **You**: So we have it the same as for expedia like some limitation.
[12:16:07] **You**: I'm not sure what extent but for sure if we start looking three times more with hotel distribution check.
[12:16:13] **You**: S on stuff as well.
[12:16:15] **You**: Why do we go with hotel beds for this one and not with expedia.
[12:16:22] **You**: I think because experience don't that already.
[12:16:25] **You**: But I mean that's also what I mentioned to Sascha earlier if possible we can build it the way that we can simply maybe enable the next Pedia whenever it's ready and then it's following kind of the safe report.
[12:16:40] **You**: And we also have this bigger in Latin America where all where is always cheaper so up to you.
[12:16:47] **You**: How.
[12:16:47] **You**: To.
[12:16:48] **You**: Keep in mind that we also have.
[12:16:50] **You**: This.
[12:16:57] **You**: Yeah.
[12:16:59] **You**: Speaking from also more technical perspective what Kristina.
[12:17:04] **You**: Tried to like scratched on the surface is.
[12:17:10] **You**: Regarding this hotel that integration is this something we can reduce out of the box?
[12:17:16] **You**: In let's say accommodation search which is considered a stabricated or is there some work that needs to be done which kind of like already.
[12:17:31] **You**: Makes this tour that we build something based on that so no.
[12:17:38] **You**: Okay so one question would be.
[12:17:42] **You**: How to deal with deprecation.
[12:17:44] **You**: Of because I still don't understand they would need to do something in order to enable this just for hotel beds just this mapping for hotel bed.
[12:17:54] **You**: S something needs to be done already now so right now we have this logic living in accommodation search but the things that you cannot easily reuse it somehow so to be able to reuse it we will need to.
[12:18:08] **You**: Adjust it and like expose it to everyone to you and to us internally.
[12:18:14] **You**: But we don't have yet the place where we can put it because it's supply domain is the new thing the right place to to boot this logic into but it does not exist yet so and when will the accommodation shots be deprecated?
[12:18:31] **You**: As soon as we're ready we can.
[12:18:34] **You**: But the other what will mean.
[12:18:36] **You**: So soon as we are ready to like I don't know but the other thing that we also do not.
[12:18:45] **You**: Add the legacy systems that are a little bit appreciated like I mean I know what you are now thinking about let's let's update the computation search and let's develop this feature there. I don't think this is possible.
[12:19:02] **You**: Because we have a kind of the rule and agreement that we don't do this like we only update the legacy systems to support some migration steps like some things that we cannot really go forward without.
[12:19:19] **You**: If this is the brand new feature like that and we will need to build it.
[12:19:23] **You**: In the.
[12:19:23] **You**: New system like we have catalog already.
[12:19:27] **You**: Or we will have supplied which.
[12:19:29] **You**: Is.
[12:19:29] **You**: Not.
[12:19:30] **You**: Yet.
[12:19:31] **You**: Exists and also what's the feature is in the accommodation search is quite different from how we want to use it for room level mapping right so in accommodation search it's used for actually checking availability right but here we need to use the same servers but for completely different purposes to find alternatives it's like very different usage so it's kind of new features that need to be built.
[12:20:16] **You**: Yes you can die so Kristina to answer your question on when.
[12:20:23] **You**: This could be done this is actually going to be very tricky answer and I'll think you're going to like it so would you prefer to keep discussing the logic and the features that we're aiming for or we would you prefer to just tackle this head on.
[12:20:42] **You**: I mean if this is agreed then I'm just interested in how can we still like what is then kind of what is the next step to move forward?
[12:20:51] **You**: Then I guess we need to have this new supply endpoint or however it's called domain whatever and then the question would be how can we build it if we if this is the way to move forward without waiting a year until it's maybe done.
[12:21:08] **You**: But yeah I mean that's also maybe a bigger discussion that we can take.
[12:21:12] **You**: Offline.
[12:21:13] **You**: Or as a like one stream let's say which is still open yeah that's right so far doesn't look right but maybe I think today would be mostly about understanding what you're aiming to build.
[12:21:36] **You**: Yes.
[12:21:41] **You**: Back to the discussion for now.
[12:21:43] **You**: Yeah.
[12:21:45] **You**: And yeah I'm still curious so when is the deprecation planned just roughly.
[12:21:52] **You**: It's maybe just one sentence without discussing just like.
[12:21:57] **You**: It depends heavily on this consider to be a higher priority if smart booking logic is considered to be a high priority then I guess in the coming weeks we would focus on this.
[12:22:12] **You**: Right now virtual migration is the number one.
[12:22:18] **You**: This is going to keep busy for quite a few weeks but actually no more cyclic about two months because there are big dependencies on geographical data which for now we don't really have a good answer to.
[12:22:36] **You**: We can cut some corners if some business stakeholders accept some limitations like launching new domain.
[12:22:45] **You**: If these are not accepted then we need to build additional capabilities like the destination domain.
[12:22:56] **You**: Because this is also addicting for route builder so this is yet another project that is kind of competing for priority and resources.
[12:23:08] **You**: Okay so I think that's enough I mean that's enough for me so I understood it's more a topic of prioritization and not of like technical dependencies or something so everything can be worked on it's just it's unblocked let's say but it's just a matter of priorities because okay yeah two main topics actually vet is one and second one the team is working on is this API outsourcing onboarding because we signed the contract with outsourcing partner and yeah it's time to actually.
[12:23:42] **You**: Put some work into it.
[12:23:44] **You**: And can I ask Claudia is this veto deprecation and API outsourcing it's it's all part of my Jennikau milestone right.
[12:23:53] **You**: API outsourcing yes data deprecation I'm not sure where they will put that okay but maybe agent optimization or something which milestone.
[12:24:05] **You**: You can use just to understand.
[12:24:07] **You**: To whom to talk to.
[12:24:08] **You**: Okay but I need this institution.
[12:24:13] **You**: Whatever I guess content.
[12:24:18] **You**: On meaning kind of onboarding falls into yeah they need to under us but yeah I mean they could also put it under age.
[12:24:26] **You**: Nt.
[12:24:27] **You**: Okay yeah no I just wanted to understand two of whom to talk to okay.
[12:24:35] **You**: But still good to know that it's not like a technical blocker it's rather a matter of time and priority.
[12:24:40] **You**: Good.
[12:24:43] **You**: Then let me go back.
[12:24:48] **You**: Yeah so I mean is this like I think it's not like really really good to understand here but like what would be the logic now is we are getting the trick from trip planner we know what is the current supply what is the current room then I guess there is some magic on we decide how to.
[12:25:02] **You**: Put this information together to then at some point get like equivalent rooms from first step only water beds which is maybe easier maybe not second step also from other dmcs for example then we would kind of take all this information applying some smart logic that is also not yet really defined in details.
[12:25:23] **You**: Which then would give us the possibility to send out the booking request then we kind of wait what we will get back because this is kind of the current process that we already have so we will essentially put something before sending the booking request and then the rest I guess everything will more or less remain the same so we are sending the moving because we API we are sending them the remaining one via email.
[12:25:45] **You**: And one thing that I just added is that we will also need to think about some tricking but this is I guess mainly with us so that we understand okay what was initially in the trip what did we want to book maybe but maybe mix and veg was already exceeded then we kind of store the price so that we can also run some analysis later I don't know for example if there would be no mixed image at all what could what would be the potential just as an example and there are other use cases as well.
[12:26:10] **You**: So that would be kind of the smallest scope assessment I would say just to move with the kind of purpose and goal to test this new flow and like not making it super complex but like different DMCs not migrating mix and match kind of.
[12:26:26] **You**: Trying to keep the other systems as they are but still kind of working on the smart booking logic as a like first.
[12:26:37] **You**: MVP.
[12:26:39] **You**: It's so dark now.
[12:26:40] **You**: But.
[12:26:42] **You**: Not.
[12:26:42] **You**: Sure okay.
[12:26:43] **You**: Since we are.
[12:26:46] **You**: Not running out of time but it's half half of the time is already over so I think what I feel kind of are the three points and I think maybe the first one is what we what I would like to understand today better also with like being the owner of all this nice logic kind of how do we know if one room is the equivalent room to another room from hotels or another supplier.
[12:27:11] **You**: So is this already is this something that will work out of the box is there anything that we need to take over on booking side? Is it hey this is IDA and then you give me ID B C and D with prices and supplier name or I have no idea then this is more like on technical decisions or what are we doing if I don't know we are not getting this information because then essentially booking is blocked like what is the kind of fall that may be what is if we are not finding any rule maybe all the rooms are more expensive so what are we doing then? So that is more on our side I guess and then this kind of everything around tracking what I just mentioned and this is also more with.
[12:27:48] **You**: Booking platform then.
[12:27:50] **You**: So if possible I would like to go to this point not sure how to document it.
[12:27:56] **You**: But or maybe it's already somewhere documented as part of this room level mapping.
[12:28:02] **You**: In it that we had to know the details how we fished yeah I would really like to understand where are the kind of contact points to then decide okay this would need to be built kind of in treaties domain. So here we are currently blocked either we build it on our own or we do it in cycle three mornings for that.
[12:28:22] **You**: We send something and we will sit back with the.
[12:28:27] **You**: Rooms already just wait I will start but this was also part of the technical.
[12:28:33] **You**: Reason that you guys did so yeah but it's I mean for me it's really hard to follow based on how it's written so maybe we can kind of having a flow or something hey I'm having this idea and then I need to request it here and then this here kind of is in speedy domain and then this is kind of the gap that we would need to address technically to I don't know build this new or adding functionality or deprecating or whatever other steps.
[12:29:00] **You**: I mean I can try to make notes but like what I would like to understand is what is.
[12:29:06] **You**: What is happening on our side and where we would need kind of speedy to.
[12:29:11] **You**: Do something for this first use case.
[12:29:14] **You**: And as I understood we already agreed we will not add anything accommodation search API but we will rather build something new.
[12:29:22] **You**: And is this everything if this is built then everything will work out of the box or do we need more from speedy site? I think we'll need to like based on milestones that you already defined that Sascha defined in his document that include me also like iterate because like the first milestone.
[12:29:43] **You**: Only assumes that better returns.
[12:29:46] **You**: Just method information excluding the rates but like the rates will be pitched separately by putting.
[12:29:55] **You**: Platform but if we already integrate with the race endpoint then we will be able to send a more complete data to these mneumonics API API which will give more precise results for the Madin.
[12:30:12] **You**: Right so we'll need to actually dig deeper into this topic how how exactly you want to organize this.
[12:30:21] **You**: Communication between we can play from a creative services.
[12:30:30] **You**: Okay we just focus on the basic param that I actually described already in the document so that's fine.
[12:30:40] **You**: But if we want to have more precise results and precise means what does it mean that the mapping is more accurate.
[12:30:49] **You**: Or okay.
[12:30:50] **You**: This is what robert tested so we can start with lower inflammation lower attributes.
[12:30:58] **You**: We're booking document can already start working with but in future we can extend this can extend this when there's more time when it's even needed maybe you know we find out that it's not needed and really it just works fine with the low latency that we emulate try to keep.
[12:31:18] **You**: So but this deprecation sorry I also need to go one step back.
[12:31:23] **You**: Sorry Pedro can I ask us to this deployation one more question?
[12:31:27] **You**: It doesn't mean that it will be okay.
[12:31:32] **You**: So strictly speaking you don't really need to wait for the application exactly yeah because that's mostly for quelling to trip planner.
[12:31:42] **You**: So the shutdown of this API is more connected to the not too when we can start quoting with TP2 then smart cooking.
[12:31:52] **You**: So technically you could already get some offers at some point in time and TP2 is not fully enabled that you should be able to process.
[12:32:04] **You**: Layer so you can still build the new domains in the background of accommodation search for trip planner convenience.
[12:32:15] **You**: But it would be still already using those new services so meaning that people can platform could communicate directly to the supplier name so it's not a strict dependency.
[12:32:27] **You**: I see people nodding but I didn't understand it sorry so what so so accommodation but just to confirm so accommodation search is kind of out of scope so we will never so we will never use it so this is okay so this is correct but then in order to kind of work on this milestone we would need to have this new endpoints ready or endpoint endpoint yeah okay new domain.
[12:32:52] **You**: And what was this with triple planner 2.0.
[12:32:57] **You**: So the combination search API will stop being used as soon as we start quoting okay now I got it.
[12:33:06] **You**: And since this is not yet there we will still have accommodation service but we are not using it because we are not adding new okay got it.
[12:33:13] **You**: Okay.
[12:33:18] **You**: Anything else apart what is then those two points and I also got that this is maybe nice to have or can be done later but it would not be a blocker for the MVP.
[12:33:28] **You**: Yeah for MVP we can just map on one two fields minus and there are like more because this mapping is like not idea it's like.
[12:33:38] **You**: Room description to room description so it's kind of not always precise.
[12:33:44] **You**: To be fair.
[12:33:45] **You**: Okay so yeah that's what indicator there is a kind of how certain our mapping service that this is like the right method.
[12:33:58] **You**: That's something we booked a document can use the logic for a smart way besides other stuff then that we will so the only thing in the initial part is we would just if we get the mapping we can already start doing anything with that but the mapping is here and this we don't have that's that's kind of like a dependency.
[12:34:24] **You**: Yeah and still apart from that is there anything else because if not I would like to go a bit deeper on this one.
[12:34:30] **You**: Because this seems to be the main dependency as you already had at the beginning like we can basically not really build this new endpoint unless we start working on those platform.
[12:34:44] **You**: As well.
[12:34:46] **You**: But what else is what does it mean supply domain there's more things that need to be done not only this one here.
[12:34:55] **You**: Unless there is a decision that we work together on this.
[12:34:59] **You**: From my understanding from the team everything you would build or we will build would be just.
[12:35:06] **You**: Some not scalable.
[12:35:07] **You**: For.
[12:35:08] **You**: You know.
[12:35:11] **You**: I mean not really aligned with our domain design.
[12:35:15] **You**: And.
[12:35:16] **You**: Definitely we need to design it first.
[12:35:19] **You**: And then yeah but I mean like there is no easy temporary thing that would make sense how urgent is it basically so that's the thing Kristina like we really need to align with Robert I wanted to start in psychic two.
[12:35:37] **You**: Power priorities and direction is not aligned and it doesn't make sense for you to work on this alone yeah yeah this is clear we have now two planners that they work on the transportation team that does not belong in their domain which we want to avoid and we need to align with robot on the priorities of this no but that's clear that's what I meant in the beginning and I also got it during lunch and everything I know but still.
[12:36:00] **You**: If if it will be priority then at least I want to be prepared so I mean still a discussion worth having because I don't understand is this something that we now I understand we could potentially directly start working on it if it is a priority but then I don't know will it take maybe I don't know assuming it will take eight weeks.
[12:36:19] **You**: Don't know but then I mean I can I would not commit to smart booking MVP maybe we can already work on something in the meantime this logic if we align on the API before but I just need it for planning purposes kind of and this is like the black box where I don't have really much information in and I appreciate your document but still it was hard for me to understand so yeah that's kind of where I'm coming from to understand okay what does it really mean is it like one API and then if we decide on this API it's done or does it require like more complex logic some technical research before like really I don't have an idea maybe we can maybe you can give me an idea of how big this one is.
[12:37:01] **You**: Is it like for one person two months.
[12:37:05] **You**: Or.
[12:37:11] **You**: Yeah so Kristina first question how familiar are you with the with the work that team is doing with their domain definition and the supply and catalog domains.
[12:37:24] **You**: That came out of that domain definition.
[12:37:26] **You**: I know some very huge mirrors that's all but not like what is on it.
[12:37:33] **You**: I will say it's proportional is to right now.
[12:37:45] **You**: 20 ohms two domains the supply and catalog.
[12:37:49] **You**: And because we couldn't get someone to actually build this thing for us also the destination is domain.
[12:37:57] **You**: So please don't wait Karen is basically what is primarily for content and coding supply is what usually needs.
[12:38:08] **You**: The existing systems.
[12:38:12] **You**: I coupled with these two domains so you don't really have a peer separation of what supply and what is content for today catalog.
[12:38:21] **You**: The work is to split these we've been mostly doing this so far with the catalog domain and it's primarily using different services.
[12:38:32] **You**: Maybe I can I can send you a more focused link.
[12:38:40] **You**: And right now we've been focusing on the catalog domain and we've been dealing with someone being business use cases that we kind of need to still maintain like these ancestor trees and now Tour labor.
[12:38:56] **You**: So this is to highlight two things one there is the building of the building of the new domains which I think can nail it take weeks minimum and the other one is we.
[12:39:13] **You**: Are breaking stuff.
[12:39:15] **You**: Including some of these operational processes and this is where things have been super slow as well because getting a decision on should we maintain this or should we not.
[12:39:28] **You**: Usually takes.
[12:39:30] **You**: A very long time because it's very hard to figure out exactly who will teach things. So that's why eight weeks is very optimistic to build this new domain.
[12:39:45] **You**: Good.
[12:39:50] **You**: Not good.
[12:39:53] **You**: And.
[12:39:54] **You**: With all the work we do on now really.
[12:39:58] **You**: Building things right I would really advise against any temporary solution that we need to be reworked after.
[12:40:13] **You**: One question regarding the deprecation.
[12:40:19] **You**: We clarified now accommodation search.
[12:40:22] **You**: No other any other of.
[12:40:26] **You**: These currently used domain.
[12:40:30] **You**: Supply no sorry currently used domains by for example troop planner.
[12:40:38] **You**: Are considered being deprecated for example get accommodations get accommodations offers.
[12:40:45] **You**: Like will they be also deprecated in the sense of working on them so right now 1.0.
[12:40:54] **You**: Uses this condition service so the goal is what planner 2.0 to switch to catalog directly so that like this logic will be moved from like accommodation search to somewhere else maybe.
[12:41:12] **You**: We don't know yet okay so accommodation search will be just yeah yeah no no that's right so that's the kind of the goal to switch or like to build replan or in a way it could use catalog array and the catalog will be using also supply under.
[12:41:32] **You**: The boots.
[12:41:34] **You**: Which.
[12:41:34] **You**: Again.
[12:41:36] **You**: Okay.
[12:41:40] **You**: Okay what I would be interested in I'm sorry Sascha what was this can can we still high level just for me to understand can we still high level kind of map the steps so for example we are getting the trip from triple so we know there's like maybe supplier ID and I don't know maybe accommodation ID and then with this accommodation ID what would be the steps we would need to request because I still it's still fuzzy for me to understand what is exactly the information that we need like in this new kind of endpoint.
[12:42:12] **You**: And I feel it would be helpful for me.
[12:42:16] **You**: Where is it documented in your document?
[12:42:26] **You**: So basically.
[12:42:28] **You**: Just here so this would be the first kind of iteration if we want to include also the rays we'll need to get more parameters like the search parameters like if you scroll down so sorry just for me so this is coming from triplana.
[12:42:43] **You**: This is the condition you deal with basically the condition is needed that now lives an elephant but we'll need to migrate it to like this is the whole separate work stream will need to migrate from elephant to catalog so to Lambda 2.0.
[12:42:58] **You**: Can keep using the same UADs back from catalog site right so and this is the reference to this accommodation but this is also not yet in place so that's also a blocker then it's that this catalog migration is not done entrepreneur is not having this well yeah so I mean we could find a way how to resolve it.
[12:43:19] **You**: Will depend on the on the current state and or the compliance how exactly like at the point of.
[12:43:27] **You**: Delivery time of this and point where will the source of tools for accommodations either an elephant or in catalog so we'll okay so it would be acceptable that it still remains an elephant for time being no no we're going to migrate it quite soon I guess.
[12:43:46] **You**: Okay but actually as I mean just currently it's not yet there so with this information no no this information we know already okay so like this is the reference but we are not requesting elephant we are interested like the first attribute is we already have a booking platform we always get this exactly core okay without it you you don't know what to do yeah we need that information okay it needs to be always there otherwise like what should we book.
[12:44:18] **You**: Like then we would need to guess.
[12:44:21] **You**: Okay so no kind of dependency to this migration elephant catalog but.
[12:44:27] **You**: It would be nice you will make sure you don't care about if the idea will change so everything will be like handled okay then we have this accommodation ID and then what are we doing?
[12:44:42] **You**: Then there is the room the mciid which also we currently get.
[12:44:47] **You**: Okay so it's kind of like accommodation and then there's this this room was quoted let's say from okay and I think this will stay rooms yes but this is actually not very important like anyways yes you have it but like under the hood it's like just for information it's not very important yeah for the mapping logic itself what is important the other attributes like category like meal basis some some other additional parameters that we could get.
[12:45:21] **You**: And we could get is we booking platform will get it from triplan not really no so look like this is the limited amount of attributes that we pass in this initial version if we want to extend these parameters we'll need you to send also like some search parameters that we'll be using to search for the offers to get the rates and to pass these rates to this endpoint.
[12:45:48] **You**: To increase the accuracy.
[12:45:57] **You**: May I suggest a more graphical representation how this is supposed to look like a full circle.
[12:46:07] **You**: I mean yeah that was actually my idea with.
[12:46:13] **You**: Modified takeover with this one here but I don't I mean it's not yet there so I just wanted to take some.
[12:46:19] **You**: Notes just that I because I fear we cannot do this like visualization in the next 15 minutes we actually have one.
[12:46:28] **You**: Very high so if you're not going to see concrete fields.
[12:46:33] **You**: But this may be.
[12:46:36] **You**: Helpful.
[12:46:39] **You**: So the idea is that when the trip is ready they send the trip buyers on the trip to booking a platform today at trip data includes this book in data fields so essentially whatever inputs will be required in a later point will have to come with a trip ban and most likely we're going to use that as a bit of this booking data fields.
[12:47:06] **You**: Will then communicate to the accommodations of why this is a new domain mostly one of two ways so you either book the panel.
[12:47:18] **You**: Pretty much what you did today.
[12:47:20] **You**: You know more about this narrative the other one and what we're talking about today is this so you request competing rates from other suppliers so you have a rate and then you want to say a is there anything else that could look.
[12:47:36] **You**: And this point.
[12:47:38] **You**: This is different so one thing is just booking the what you have today or booking the whatever offer your buyer sent you.
[12:47:48] **You**: If you want to say hey give the other rates then you need to send a few more details like that will help the accommodations apply then find other rights from other suppliers or in whatever trade or form this is the logic that we need to discuss and where the valid so at this point in time you do you should expect to send inventory IDs or mapping IDs so this is what we're not entirely clear on an inventory ID will be the ID for a specific accommodation of a specific supplier.
[12:48:21] **You**: 19 is the most referred to when we discuss the chat ID.
[12:48:29] **You**: So when you send that to a different field that's where foundation supply would then take that information and whatever other information of the rate which is then offline in Kiryo's documents.
[12:48:43] **You**: And fetch other rates compare them and this is where we can see exactly what kind of response you need because as was already mentioned there is some uncertainty about how well those rates will be mapped across different suppliers.
[12:49:05] **You**: And today as far as I understand we actually don't compare EMC, we compare DMC to an OTA and then we're not yet proud of the MC and so forth.
[12:49:20] **You**: Details what may be around them.
[12:49:24] **You**: I think there was something else which I found interesting here which is.
[12:49:30] **You**: Yeah so this garment I use is actually sent an input which is the map in IE.
[12:49:36] **You**: For example and you also submit the selected rate which again would likely come from the book of data.
[12:49:46] **You**: Or the booking data fields.
[12:49:50] **You**: And ideally what you then get is okay what was the original rate what are the matching rate the rates that the system will be confident that it should be the same thing and others which is like we're not sure looks interesting which could then be submitted for you in evaluation.
[12:50:07] **You**: So this is in a high level how this should this should work.
[12:50:15] **You**: Did this.
[12:50:15] **You**: Help kind of visualize how things are expected to work in by the way if there was a question on where does catalog here the moment you get to booking platform you shouldn't really care about catalog unless you want to replace an accommodation with an entirely new accommodation.
[12:50:33] **You**: Yeah I think where I was coming from was more I in my very limited understanding of how it looked like I don't know we are getting an idea from trip planner then it's a combination of I don't know three things as you mentioned then we are sending it to spitty and then to pt is giving us hey thank you this is like comparable rates.
[12:50:52] **You**: But it seems to be more complex.
[12:50:55] **You**: Like because there's more request and this one needs to take them first and then this one is returned and with this one returned request the next thing.
[12:51:10] **You**: We can look into how to optimize but the gist of it is pretty much what you said from trip planner and then you use it to ask principle for new competing rate.
[12:51:29] **You**: And essentially everything in yellow accommodation supply is what is your document about?
[12:51:37] **You**: Yes.
[12:51:37] **You**: Okay?
[12:51:43] **You**: Which is what doesn't exist.
[12:51:47] **You**: And I also understood this whole.
[12:51:51] **You**: Supply how was it called new supply domain is more than just what we need.
[12:51:58] **You**: For smart booking.
[12:52:02] **You**: Well.
[12:52:05] **You**: Does this whole new domain would need to be ready and then this is maybe the first use case or I don't know.
[12:52:14] **You**: The first I've been quoting would be the first but this is a special type of coding I would say.
[12:52:23] **You**: So but then we're back to the priorities and how to seismize.
[12:52:28] **You**: This.
[12:52:33] **You**: There are a lot of different things that you need in place to do this fully.
[12:52:38] **You**: I would say.
[12:52:41] **You**: I actually have a.
[12:52:44] **You**: Not the first discussion around these topics.
[12:52:50] **You**: So I would say that.
[12:52:53] **You**: For for booking logic you actually depend on quite a few things.
[12:52:59] **You**: Primarily from basic voting she'll just say hey give me just breaks.
[12:53:06] **You**: To finding competing offers which then sets a special type of coding booking in cancellation because again you may want to revamp you want to put something which should use the same semantics as defined by getting supplier name and this is obviously going to require offer or room level mapping.
[12:53:27] **You**: So these are your.
[12:53:30] **You**: Direct dependencies.
[12:53:32] **You**: Indirectly.
[12:53:33] **You**: To have this then we need to do this inventory and supplier management.
[12:53:40] **You**: But because these are not direct dependencies we're trying to still have some wiggle room on how to plan the development of the supply.
[12:53:55] **You**: Can you share those two maybe I would just add it to my like mirror that it's in one place.
[12:54:06] **You**: The other one is the one you actually have open but I'll send you there right click to that block okay.
[12:54:13] **You**: So.
[12:54:14] **You**: I'll start sharing so you can resume.
[12:54:17] **You**: Okay so since we are like time is up.
[12:54:25] **You**: I mean what is good kind of the process is more or less clear also this MVP would work in terms of scope so that would be an easy not easy easy but at least would be a suitable first use case but technically we are not yet ready because what we need is not there.
[12:54:41] **You**: And now I will take it from here.
[12:54:43] **You**: To discuss it with other milestone owners?
[12:54:47] **You**: And since it's only 10 days.
[12:54:50] **You**: Until cycling at all let's see where we will end.
[12:54:58] **You**: This eight weeks I mean I was only saying eight weeks but I think it's just to kind of make sure it will be quite some effort.
[12:55:05] **You**: To build this new domain.
[12:55:13] **You**: And I also understand I mean that's just how I now see it because I thought initially maybe we can like we as flamingo can do some work but since it's this whole new domain I guess it wouldn't make sense if we are building it.
[12:55:27] **You**: Good yeah and I think we didn't really estimate these new domains within kind of.
[12:55:34] **You**: Look deep into into like high level yes.
[12:55:37] **You**: But.
[12:55:39] **You**: Like work items plan we don't have it yet because it's like wasn't priority.
[12:55:50] **You**: Yeah I mean also actually for me it's like pretty new I heard the first time now that this accommodation search API should be deprecated.
[12:55:58] **You**: So that I think it's also the missing piece for me.
[12:56:02] **You**: That I don't know.
[12:56:03] **You**: And I mean that's the biggest dependency if not then potentially we could have just said hey we added there maybe we could have done it but now it's a bit differentiation search gonna be like deprecated in favor of newer recommendation search.
[12:56:17] **You**: On.
[12:56:18] **You**: Catalog so it's.
[12:56:19] **You**: Like just a new sure.
[12:56:22] **You**: But it will not help us with moving forward okay then thanks for your time I will.
[12:56:33] **You**: Take it with me and let's see.
[12:56:41] **You**: If I can use the last few minutes just for one quick question I had somewhere that.
[12:56:47] **You**: To the left we're looking for.
[12:56:53] **You**: An optimizing pricing because this is what adds more in fact I was just thinking in terms of delivery if the replacement of verbal items is not a simpler process that actually uses to vast majority of the same steps.
[12:57:16] **You**: So it's not about so much about impacts just think in terms of gradual development in casual launch of the feature the requester of unavailable accommodations might not be a good first step because you're essentially building quite a big chunk of the same capabilities especially in terms of integration and the optimizing pricing logic sounds more complex than just replacing them available so just something to keep in mind it doesn't change much from the study perspective yeah okay that was my question if that will change anything because I don't know we can use.
[12:57:58] **You**: Hot let's look up I don't know no idea but if that were not.
[12:58:02] **You**: Change anything.
[12:58:04] **You**: Then.
[12:58:05] **You**: Okay but thanks.
[12:58:07] **You**: I read it doesn't change it it just makes an integration easier I think.
[12:58:15] **You**: So you can see how the finding the bidding rates works and then on top of that let me see how the price.
[12:58:26] **You**: Okay.
[12:58:27] **You**: Then.
[12:58:29] **You**: Thank you and talk to you later.
