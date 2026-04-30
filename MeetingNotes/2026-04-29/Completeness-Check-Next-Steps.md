# Completeness Check: Next Steps

**Date**: 2026-04-29
**Time**: 13:00 - 13:50

## Attendees

- kristina.lamza@tourlane.com
- sascha.burku@tourlane.com
- minh.nguyen@tourlane.com
- oleksii.mazurik@tourlane.com
- markus.klemann-ext@tourlane.com
- aliaksei.kliuchnikau@tourlane.com

## Transcript

[11:00:59] **You**: Good.
[11:01:00] **You**: Morning.
[11:01:01] **You**: Good.
[11:01:01] **You**: Morning.
[11:01:03] **You**: Good day.
[11:01:08] **Other**: Yeah, good.
[11:01:08] **Other**: Day.
[11:01:11] **Other**: Since I hadn't time for my lunch, I would just eat something, but I.
[11:01:16] **Other**: Will.
[11:01:17] **Other**: You don't need to see me eating.
[11:01:18] **You**: Yeah.
[11:01:19] **Other**: As you did the last time, I think you know already.
[11:01:20] **You**: Yeah, yeah.
[11:01:22] **You**: I I already moved my lunch to.
[11:01:24] **You**: Like, 2 30.
[11:01:29] **You**: Maybe I'll eat later.
[11:01:33] **You**: Hello, everyone.
[11:02:50] **Other**: Comment in a second. I talked to her before.
[11:03:38] **Other**: Let me start.
[11:03:40] **Other**: So.
[11:03:42] **Other**: Initially this meeting was planned to discuss the next step. But since I was discussing with you all this morning already, and also we had some discussions in the stand up, I think it would be good going one step back.
[11:03:54] **Other**: And kind of aligning on the status quo. So what is now kind of what is already there, what is happening, where maybe challenges that we see.
[11:04:03] **Other**: I can maybe briefly summarize and then you can also step in.
[11:04:08] **Other**: So what I heard overall is that for sure this whole kind of product and the whole feature that we are developing is quite complex.
[11:04:18] **Other**: So I feel also the overall solution is not yet, I mean, high level solution, I guess, is clear, but like to really, for example, review. It's hard if, like the underlying logic is not 100% clear. So I think for me, it's fine because I do not need to review and understand everything. But I think for you might be a bit challenging if kind of the overall kind of solution is not fully understood. Also, I know from the sessions that we had on Friday and also on Monday that also the solution proposal itself changed, which is fair enough.
[11:04:52] **Other**: Because, I mean, it just happens that we are covering things on the way.
[11:04:56] **Other**: And I think main reason was because it was quite, like, technically quite heavy, I guess. So now with the provider based rules, it's a bit more lighter and we are still able to cover.
[11:05:09] **Other**: At least most of the suppliers. It's the question mark with this like more lighter solution. So this is why also the solution was even changing in the last week. So I feel that's also kind of one challenge that we now see.
[11:05:22] **Other**: I also heard here and there that it's kind of maybe because of this missing knowledge or understanding whatever that the confidence is not super high that we can kind of achieve the goal with that overall solution. I think that's also fair point because there are some uncertainties that we are still not 100% sure because we still need to like test it for certain suppliers.
[11:05:45] **Other**: That's the second point. And I think the third point that I think I noticed especially now is that we also have some capacity constraints in terms of how we can share the knowledge, how like which like who can review the PRs because it's quite a lot. So kind of how we split the work.
[11:06:04] **Other**: And yeah, I was thinking about it from a product perspective as well.
[11:06:08] **Other**: So actually currently this completeness check has the highest priority. So just to make this clear again, because we finished the automated confirmation flow. I know not over our finished, but finished for now, we will resume when we know when triple planner will be ready to kind of further enhance this whole confirmation experience. But for now it's paused. Also smart booking did not yet start, at least not with delivery.
[11:06:30] **Other**: Like research and solution design is ready, but it's not yet started. So currently it's really the goal to kind of finish and work on this completeness check.
[11:06:39] **Other**: And for that, I would also propose that we free up as many capacity as we have in terms, like as long as it's aligned. So that's something that I would like to discuss with you today to kind of see who can support when and what would potentially next steps that will help to work on it.
[11:06:55] **Other**: I already have some proposals in mind for sure. But yeah, maybe.
[11:07:01] **Other**: I don't know if you can just share maybe two words from your perspective, like just how you feel at the moment. Where do you stand? Like where do you see challenges? And maybe we can use this session not to discuss, like, what are the next steps and how can we achieve it and what does, like, when are we going to be ready? Because I feel that's too, too fast. So I would really like to propose going one step back.
[11:07:22] **Other**: Pausing for now. It's fine that we take more time also for my perspective telling it to you. It's fine. I can communicate everything. I can also say we will not be done by end of cycle two. I like no problem at all. I will find ways to kind of explain it.
[11:07:36] **Other**: I just need to have this kind of input and at least a bit of understanding. What does it mean, like, for example, confidence wise? And also on the solution itself, how.
[11:07:49] **Other**: Confident are you that we can deliver this? And also with, like having in mind that potentially Markus is then supporting a different team in two weeks. I mean, we still have two weeks. We can also say, hey, we do full focus now for two weeks on this completeness check. Also fine. It's just one idea. So actually, I wanted to discuss those like different proposals with you.
[11:08:09] **Other**: After hearing if there are other challenges except the ones that I summarized in the beginning, which is like capacity kind of confidence on the solution design and maybe also ways of working like with these like a lot of PRs, for example, that I heard.
[11:08:28] **Other**: And we can solve it together, I'm pretty sure. Let's just discuss about it.
[11:08:34] **Other**: Markus.
[11:08:35] **Other**: Yeah, we can do it a problem. Yes, I mean, maybe start a bit with FITEC. I mean for me, of course a million generally of course this whole paycheck was part of a circle one that say, but I mean also I think I started a little bit late with this when we, that's the reason you feel like much pressure now because there was also this big task about the responses immigration and also the noble kings expected issue there. Then also the model upgrades and also the vector store things and all of these things also caused many errors and also had to look in these things because this was also very crucial. And maybe also because I am also in contact or I'm doing the sports house. So I see actually support requests from the customer when I see sometimes we are like, yeah, here my virtual is not here. Yeah, the week I think or damn what I did. Why is the system not swearing so much? So the reason I feel sometimes question of course much to handle this and already some goes now regarding now this topic that say, I mean, I always had this idea that say to do this historical lookup for a while.
[11:09:48] **Other**: And of course I did this JavaScript is written at say, but of course my space was like written scripted say. And of course reviewed and was also this point not ready too much or something because it's more like.
[11:10:07] **Other**: For example just to get some insights out of a database. And then I think it was also last week. So very recent. Of course we are in the moment then when I started actually writing the code there.
[11:10:24] **Other**: I found out much better solution. This product catalog rules. And this of course just seems like a much better. Did it say and this is. Much less code to review much faster to develop much faster to review and we can handle already many, many like types there. I think for example this topic is not yet of course this topic. It's like we define rules in the provider settings for specific doctyphalic. Can you find this?
[11:11:14] **Other**: But now yeah. And then let's move like structural things and then maybe we find another session. Okay. For now the first gold thing for the next days and I think also very insured we can do it to develop this feature that wrote out the first version. This is a product catalog configuration. This is basically a config which has been said there's no heavy code here and then some other perfect people. Yeah like Kristina or also of course with from AI or scripts we can already make this configuration for many suppliers. The first part layer and we can ship this and this we can already apply for maybe toxe. Then after this is for example now the heavy courtyard which also Minh tried to review and yes of course I mean there's a very heavy and for this is a very fundation and understanding from the system is very important whether it's all the reason I tried to say to split this.
[11:12:24] **Other**: But yeah because it's also very hard to review this now real meaning of this. Yeah. So it's also hard let's say optimal. Yeah but it's been like the historical thing. Yeah. And but this happens after the layer one. So this is not hard now. And for me which is first on the first layer.
[11:12:46] **Other**: And I'm quite confident after this comes the historical look up.
[11:12:52] **Other**: With very support of course maybe also from Sascha then to review this because these are heavy quotes. But this is just for some specific, let's say DMZ important. But also for example for this analytic script because this logic I use there also to find out what is actually in the system. Yeah. So it's also quite important and where we need some support of course because this is hard.
[11:13:23] **Other**: And yeah and then for example also the next layer we have is because sometimes with historical lookup is not too good.
[11:13:35] **Other**: That's the reason we need then like a decision tree for example here UAI you have to decide now what we do. If we know that was case about also we like this historical layer and I think I'm quite confident that you can ship ready layer one and I think step by step. Yeah. I try to make not like smaller pull requests for the first layer.
[11:13:55] **Other**: And. Yeah for second part I think we need some more support.
[11:14:00] **Other**: Yeah but yeah sorry for much talking.
[11:14:03] **You**: And for the second layer, you. You mentioned you already have quite a bunch of PRs.
[11:14:10] **You**: And this is what.
[11:14:12] **Other**: About a cancer.
[11:14:16] **Other**: Doesn't get in too much let's say to review it one time or to look at this. Yeah. So I close this again. I mean the source code is not lost let's say but they would wait for review until now the first layers they are because they have to be there has to be thing because this is like the base knowledge we need to then.
[11:14:43] **Other**: Open when let's say the pull request for the second layer. But as mentioned these functions I already ran. That's the reason I know what we have in the system and based on this they also post made this not historical solution.
[11:15:03] **You**: Okay. But at least, like, with these layers, we focus on things a bit more in order without looking into, like, far future.
[11:15:12] **You**: And first kind of close one and then. Okay. Yeah.
[11:15:17] **You**: So, I mean.
[11:15:18] **You**: I'm out of the line.
[11:15:20] **You**: You're next.
[11:15:24] **Other**: For me my main concern is.
[11:15:27] **Other**: How to say it let me.
[11:15:30] **Other**: Structure my.
[11:15:31] **Other**: Thoughts.
[11:15:32] **Other**: So we have this solution. We have this layer one.
[11:15:36] **Other**: It solves something.
[11:15:38] **Other**: We try to merge it and then we discover on the way we will discover on the way.
[11:15:43] **Other**: The next step. If the layer two how how how much percent it will solve and then we propose another layer. It's kind of like a black box. We don't know for sure how much it will solve.
[11:15:58] **Other**: And how much more investigation we need to do to be able.
[11:16:02] **Other**: To cover 100%. That's my main concern. I do not question the solution for now. I believe they are working and they could work.
[11:16:15] **Other**: I just do not know whether first layer would be enough, the second layer would be enough. The third layer or even the circular or we.
[11:16:25] **Other**: Need another extend research.
[11:16:30] **Other**: To increase a couple of check rate.
[11:16:37] **Other**: Because I feel like this is this is missing for me.
[11:16:44] **Other**: Yes Markus.
[11:16:45] **Other**: Okay, I mean feedback. I mean I hope now the first layers Klijei is also I don't mention this anymore. The second layer was really hard let's say is historical look up and the quality checks are working like this. Yeah. That we check each item for a trip and look back in the history if we can find this in our clips, let's say and what are the results from there. And then of course I have this function here that I can just fill in let's say push guards. It's a script but the script could function but this function for example can also be called by this trip generating let's say and then we get results for this.
[11:17:38] **Other**: Item we want to check for example it's now bush guns activity the results are showing we found this in the trips and always we expect this item to appear in the ATi provider and in the doctor virtual there's no misaligning it's it's four out of four coins counts.
[11:18:03] **Other**: There.
[11:18:04] **Other**: So this is very drool and then because we have a chance to configure them doctors we configure this let's say for the provider ATI for the doc type virtual that we want to use this historical lookups and there's of course we have to grow of course not to grow but that's reason many many parts can be handled already in layer one and layer two is of course the provider based rollout and we have to look in the data there to find the best configuration also works with functions are fixed, let's say big function, let's say it's.
[11:18:50] **Other**: Doing the same thing for one item if you look on the history and get the results.
[11:18:56] **Other**: And yeah the tricky part is how we can connect this and how we make it configurable.
[11:19:04] **Other**: I feel like sorry to interrupt you Markus I think this part was more like for a specific case for ATI what I meant was for example in the first row app we will solve.
[11:19:19] **Other**: 50% of the case and if.
[11:19:23] **Other**: For v2 roll out with a historical checkup will we.
[11:19:28] **Other**: Solve the other 50% that's my question or it would just solve some cases and the rest we will need to.
[11:19:38] **Other**: Understand more research to be able to solve them because for now I do believe the ITI case we can solve it with historical checkup Sunny cars definitely semi cars firstly we can definitely solve with the first rollout.
[11:19:56] **Other**: But then for other cases this is still a black box to me I do not know do we need to implement more heavy code to be able to be able to solve the rest or.
[11:20:10] **Other**: Is it enough that's that's my concern Ali.
[11:20:15] **Other**: Have something.
[11:20:18] **Other**: Yeah to me so unfortunately since I was not I was involved in the initiative as a just as an observer not as a like implementator so to me I still have a problem after three meetings I still not fully understand what we are building so what's the actual proposal is so maybe we can like finalize it and simplify it because we keep talking about layers different historical data look up but from what I got that we are going to have like voucher for sending cars and if there is an item from sunny cars and there is a voucher then like it's complete but I still kind of like don't understand how it's different from what we have now and regarding layer two.
[11:21:06] **Other**: Which I understand you're referring to in your document it's historical data lookup right that's what you mean by layer two.
[11:21:15] **Other**: So I keep hearing that like you're going to process the data and get some outcome but I don't understand so what is the outcome so what is exactly will change in our system so will we have a new setting we have what is going to happen so we'll be look for keywords in the name of the document in the document itself so that's my point so I'm like still quite confused after reading documents and being present on the meetings like what exactly we are building.
[11:21:45] **Other**: That's like my problem I want to understand more I mean I read through stocks and lots of meetings but still have some questions.
[11:21:56] **Other**: Yeah, I think maybe that's that's all valid question let's not answer them now let's just kind of collect them and then we can maybe align on okay what are potential solutions to solve those questions because otherwise I fear we don't have time for everything. So I think what is now kind of understood is that initially to go with.
[11:22:16] **Other**: Only historical data then there was some findings on the way during implementation and working on it already. So now there's another solution which is kind of the first layer which is more on the provider level because this is easier to handle and I think also technically not that complex as like running all the historical insights I think data wise.
[11:22:36] **Other**: So high level low level we still need to understand I kind of got this.
[11:22:42] **Other**: But yeah it's maybe not to explain it now.
[11:22:45] **Other**: Markus.
[11:22:47] **Other**: Yeah, I think it's a very good thing.
[11:22:54] **Other**: They are for philanthrop moral venue and they've never meeting but I think also with questions do you have I think there's also good that you write this maybe don't for example I'm very sure I have an answer for office which also proposed because I have this answer other people also will have this answer will just let put this inside a conference I mean also because of the thing we also have to talk about not that say business check has also been general say documents dashboard I already made like question.
[11:23:33] **Other**: Confluence like in general about Kleman's dashboard.
[11:23:37] **Other**: And I can do the same for example also now just question and answer page only for Klein sake and I think many things are then Krista some diagrams or with meh made some UML diagrams to make something clear there and yeah this will take also then be seen like.
[11:24:06] **Other**: You all have to just say for the upcoming then pull request when we are layer two so this is my proposal.
[11:24:12] **Other**: But yeah I think it's good to let's click like these questions and conference.
[11:24:20] **Other**: And then I can answer there.
[11:24:28] **Other**: You mentioned there is now.
[11:24:31] **Other**: The version one way of doing it quick fix.
[11:24:37] **Other**: What will happen when you bring this life.
[11:24:42] **Other**: Okay the first thing is now we will have a new field that is just available for people who can adjust the settings and while games example we have the first te provider there's just one dog type it's called voucher and we have here also this possible item tithe which I said yesterday to a specific one for example there will be a new flag there like a new field and there we can say okay okay now always to expect.
[11:25:27] **Other**: Item types.
[11:25:29] **Other**: By define always to expect.
[11:25:32] **Other**: Item types let's mention all this is type extra costs I define it there.
[11:25:39] **Other**: That means in the moment we do this job reporting we have now we have now.
[11:25:49] **Other**: The items from the trip planner if you have the ism in now the supplier you ready with this connection we go to exactly to this configuration when we know okay we have just one virtual to document which will be customer facing because it's upload enabled.
[11:26:12] **Other**: There then I check this like always requires doctrines.
[11:26:18] **Other**: And then I compare just what we have in tripledd item okay here's an item is the type extra cost though and because I checked now the configuration of firstly we defined for void show that always have to be there extra cost so it's a match.
[11:26:40] **Other**: For a moment then 14 days before departure I will check this item there and because it says it has to be there a check from the from a trip the documents which have the same type voucher so we have just one voucher so this watcher will be checked the extracted bookings will be checked and there have to be a peer the first year.
[11:27:12] **Other**: Expected booking.
[11:27:15] **Other**: Okay so we have a whole connection say and with this for example if we can do both first a bit simple we can do this setting for sunny cars because we know if this actually peer think about item type is rent here let's say and in our settings we have study cars we have jock type vulture and we have specified this as rental and we also define there or best to expect we have again the same match.
[11:27:48] **Other**: Just to make it a bit shorter like so this is an it's a toggle and the toggle can be enabled disabled so basically this is something that that can go live now okay let's say what specified this because I want to be one level more.
[11:28:08] **Other**: Down office yeah they will offer type which you mean is required flag for a dog type this work of course this will work as now what we can do now between some days okay sorry like what you said now is this something that can be enabled disabled by the Ui or yes okay.
[11:28:36] **Other**: So that so that means this is something that that could go live now and causing no issue if nothing is is right okay one point much of this there are now two walls already there one request this morning is just for this component and the next follow up ticket where we were like the wrap into the sales force into this trip reporting where I actually then clicked this flag yeah so one pull request is just ui request is just listen to this video there but nothing will happen until then the completeness check is enabled and there's something set then yeah yeah this is freaking so so that means just that we continue with that is first review that bring that life I think it's 5 29 if I if I spotted it down to UI yeah yeah and then there will be another one where after this UI change and database change or whatever is because you're also adding something to the schema.
[11:29:56] **Other**: What I see here and then afterwards there is another PR and then kind of like the first version is can be yes correct.
[11:30:04] **Other**: Yes specified like okay so.
[11:30:07] **Other**: I.
[11:30:09] **Other**: Don't have any opinion about that like saying like I say that's wonderful so.
[11:30:17] **Other**: I'm not sure why we have a couple of meetings now to that we need to discuss a lot of these things because I do not see same as Oleksi I was not really too much involved. I did a few PR reviews.
[11:30:31] **Other**: I also did probably one PR with your this this this yeah supplier ID association with with SEM but besides that I didn't have any you know.
[11:30:46] **Other**: Hard like I didn't had money very hard mental plug on that so I'm not sure like what's the main problem now because I see there's a solution coming up and we will bring this live and then the rest is up to.
[11:31:03] **Other**: How good or better the solution works right and if the solution is is not working that that well then of course we we we we have to reiterate what is the what is the main topic now I see people heading not so please.
[11:31:20] **Other**: Maybe I can answer this yeah yeah please do that yes so the problem is not with the first version that the first version is very simple it's an easy to understand as you see the problem is it will solve for sunny cars it will solve for first tea right but then we need the second version to solve maybe ATI and whole to bed for example and then I do not know if we're going to need version three version four or version 20 to solve every case it's because if we need.
[11:31:54] **Other**: That much complete version then is super complex to solve one problem and I would heavily heavily push back for for the feature itself but if it's just the version one that is working 90% the case I would super happy.
[11:32:13] **Other**: That is not the case if I understand correctly.
[11:32:18] **Other**: So overall we have like 80 active suppliers and if it would work for 30 would already roughly be I don't know 45%
[11:32:26] **Other**: Then stew we have the second solution with the historical data not sure if you have a bipoc number Markus but I assume we will definitely cover more with this and there is this small I think one thing on is this is it an e-ticket yes or no.
[11:32:42] **Other**: I think there was also a ticket for this and I think with this we will at least cover I don't know 80% it's just for my feeding so I'm quite confident that those three solutions let's say we cover it and even if not that's also fine we can also discuss it if we find out along the way hey initially our expectation was we will cover 100% but now we found out a B C it's too heavy it's too expensive whatever I don't know Markus has pulled out like as mentioned I can communicate everything but then it's also fine we will definitely have more than we had before so even with covering 50% it's much more than we have before and therefore also my proposal for example was hey maybe we just start with those 10 suppliers that are currently onboarded on the current check because that will definitely also bring value already and I would assume those 10 are part of it if then one is missing we can also discuss it.
[11:33:34] **Other**: But like solution wise I would be confident that.
[11:33:39] **Other**: This approach will cover.
[11:33:41] **Other**: Most of the suppliers maybe not 100%
[11:33:46] **Other**: And second point to what Sascha mentioned well actually yeah second point and then I have another one so I think it's good that you mentioned this kind of sounds easy so at least I think it's good that we found a way also when you confirm to kind of bring life the first version still I think.
[11:34:03] **Other**: The question mark is for the rest of the solution and this is also what I heard from Oleksi's feedback and for this I would still propose not only having Markus and Minh on board but rather open it to the full team because whenever there will be questions and there will be questions in the future maybe Sasan reaching out. Oh, there is a case but why? Because abc just to spread this knowledge more and as, as mentioned initially I'm happy to kind of pause everything else so kind of free up capacity for this making it the priority.
[11:34:31] **Other**: Depending on your other task that you have. We can discuss it later.
[11:34:36] **Other**: And third point that I wanted to say is I would really be in favor of having face to face conversation, even for those FAQs. Maybe everyone can think about questions writing it down today to prepare, but not can then still answer in conference to have it written down, but I still feel you need to discuss about it.
[11:34:55] **Other**: Because as mentioned like if you are not that deep into the topic, I feel it's hard to just kind of read through it and then find the answer. And like also when discussing it, maybe there are other topics maybe there are some feedback from someone else. So it's not this like silent reading.
[11:35:11] **Other**: So therefore also my proposal was that we maybe find another like longer slot to really align on the solution.
[11:35:19] **Other**: And maybe not align maybe as Markus mentioned it is already there, but just sharing the knowledge, having the understanding and kind of the sign off. Yes, we are confident this will work.
[11:35:29] **Other**: ABC is working on it and then we do maybe next week we only do the plan for cycle two. That's also fine.
[11:35:35] **Other**: Like we do not need to finish it by end of the week.
[11:35:39] **You**: True, true. Yeah. And also, like, if we are kind of changing and making sure this. This is a priority, right? It's kind of changes our Dynamics. Previously, it was like, okay, Markus mean very into it and Sascha and Oleksi kind of tried to be informed, which is hard with some. So many details.
[11:35:59] **You**: If now we say, okay.
[11:36:01] **You**: Everything else is kind of done.
[11:36:03] **You**: This is the only thing on our plate we need to get it done.
[11:36:06] **You**: As a team and find solution and make sense of all of these things.
[11:36:11] **You**: Yeah, this is a different story. And we can.
[11:36:14] **You**: Work this way.
[11:36:15] **You**: Yeah.
[11:36:16] **You**: Sorry, Mark.
[11:36:17] **You**: Us.
[11:36:21] **Other**: Yes, I mean, let's say because a very important thing here because he said that first genti kasi, the kick before. That's true. But now we can do much more.
[11:36:36] **Other**: Because before the check works like this trip in the moment, K before departure is analyzed.
[11:36:46] **Other**: And expect to find each trip item.
[11:36:53] **Other**: Workings regardless which dog type or which item type is it.
[11:37:00] **Other**: So that's very big difference now because now we have this new flag.
[11:37:10] **Other**: Typically say or expect, for example, for firstly they expect this extracted booking in a document which is classified as vulture. They expect where the extraction there. And this means we can filter even more. If we cannot say okay maybe found the booking what we're booking was not in this doc type which we expect to be there for example we have and we have an voucher from first see but it's not classified.
[11:37:51] **Other**: It's a testified but someone mainly.
[11:37:57] **Other**: Started business.
[11:38:06] **Other**: For the first year item. But the log type is still no specified. And this for example we can flag. We can tell the Salesforce. Okay. Here in the moment now of preporting we have a number of drug types we will expect because we flag them.
[11:38:28] **Other**: And something happens some.
[11:38:32] **Other**: Items are not there. We can say for example okay bookings are not there where you expect this.
[11:38:41] **Other**: What we had for example here three or four unknown classified documents. And so these ones that basically creation rate for example was.
[11:38:54] **Other**: 79% to become the virtual document.
[11:38:58] **Other**: Open of course with threshold level then was not reached.
[11:39:04] **Other**: Let's say in this case.
[11:39:09] **Other**: Also review part now let's say even mono. Yeah, but let's say it's just the first layer so heavy VR as this mentioned was very simple.
[11:39:24] **Other**: But important thing is now we can configure things into actually doctype or for for specific item types and not for example let's say I call it layer 1.5. Yeah, I'd say okay layer one is Kristi and Sunny cars easy but they are 1.5 is hotel beds.
[11:39:49] **Other**: Okay.
[11:39:51] **Other**: Because I did some historical look up yeah I saw that almost each trip there are a hotel bed item is mentioned as an extracted booking from a book type void show or virtual.
[11:40:13] **Other**: One of these let's say sometimes for example and say like a little bit more advanced yeah so in the next next.
[11:40:26] **Other**: Pull request or like a version then we have to define forward provider hotel beds okay if you appear in a trip when do you require to receive an extra booking in a dog type vulture or in a drug type virtual API and then after the test is solved and I think think also had maybe three or four examples yeah so this is when the next level yeah so so maybe then in the next next like a quest yeah we have another layer we are now in 1.5 yeah sorry has even more like this yeah but this is when there's limited yeah limited because yeah what we do know for the big DMZ like ATi because the layer 1.0 and 1.5 is not working so we need now one more level down and we are of course the historical look up will be in place.
[11:41:29] **Other**: And this of course we can only ship.
[11:41:33] **Other**: A provider but I'm very sure of course that each provider have a different like.
[11:41:42] **Other**: Hedge funds let's say petals and this patterns yeah we can check of course look up from a function we look back in the history okay whatever has a solution for the layer.
[11:42:02] **Other**: For example then for ATI but then you have now this is maybe something the same like ATI but maybe or not yeah and for example if also if historical data is not perfect then we need like decision tree with an I which is feed it with this historical data counts the sites I mean just now for 40 degree days before departure here you have the numbers.
[11:42:36] **Other**: For example this item you check now you found 500 times in this document you find it one time in this document okay decide now if what you expect now to find this in the 500 document yeah of course you expect this in this one drug type where was just one time maybe not yeah and then based on this we can make a conditional case generation you name it okay yeah Markus let's not go into solution today please I know you want to answer to Oleksi's question but actually I mean at least you lost me in between maybe just as an easy answer Oleksi so yes it can be that maybe for some suppliers this new completeness check is not improving much because it is already covered in the current completeness check missing items check sorry but we know that there are a lot of like what we also mentioned during the product monthly false positive false negatives and those will definitely be solved. So if there is no document then the idea is also that we just inform the customer hey there's nothing required you do not need to reach out to us just relax so that at some point also later but for this we need the great groundwork we can just say hey do not raise a ticket now if for example the customer is adding a question via support button that we directly can deflect and say, oh, I can hear you want to know where is your document. But actually for this trip you do not know you do not need any documents. So just as an example. So I think it's more the kind of basement work that we are doing to kind of be able to reliably assess is there a document that is required yes or no. Maybe for sunny cars maybe for first year it did already work well because we know it's just like one document and if it's missing it's missing. But for most of the other suppliers and documents it's not that reliable. So for example for all those e-tickets, that's a huge issue. We do not know that. Also for all the false positive.
[11:44:28] **Other**: No false negative.
[11:44:30] **Other**: Cases that are created but that are not requiring a document. We do not know this now.
[11:44:35] **Other**: So I think it's more like the overall solution. And then I think just roll out from the rollout perspective it does make sense starting now with the easy swan and then Sanica. And first is included. But still the groundwork will improve the other suppliers as well.
[11:44:50] **Other**: Maybe that's easier to.
[11:44:53] **Other**: Understand. So yeah can be that it's no improvement for some suppliers because it was already working well and they do not have e tickets. And maybe they are always sending their documents.
[11:45:04] **Other**: Which I think first the doing.
[11:45:12] **Other**: So basically like a north part of accommodation is not required.
[11:45:15] **Other**: Yeah, for example. So for go north, what is currently happening, they list everything in one file. So in the service list also the activities. But there are certain activities that require this e ticket. Currently it's just slipping through. Yeah, it's not covered. Let's not go into this. But basically for accommodation since the voucher is not required, we won't show that something's missing.
[11:45:38] **Other**: Right.
[11:45:38] **Other**: For example, yeah. If we have this item type and it's configured like this, then we can just say we exclude it.
[11:45:44] **Other**: So there were no information. Then this information we could also use then for deflagulator. We can say, oh, you want to have your document for this hotel. Actually there will not be a document. You will receive your documents when, I don't know, being in front of the hotel or, I don't know, when arriving at the airport or something.
[11:46:01] **Other**: And there still needs a lot more discovery and everything like how it's solved in each destination, but potentially we can use this information then also for later.
[11:46:10] **Other**: For other processes and even make it visible to get the customer.
[11:46:19] **Other**: Yeah, you mentioned the false positives and false negatives. I mean, I see it on the on the confluence page here.
[11:46:26] **Other**: That Markus wrote just to get the severity like right.
[11:46:34] **Other**: If a false positive happens, which is like item show is missing even though they do not actually need a customer facing document. This is like a low severity, right? If I if I understood it correctly. So it's like, I mean it would create a Salesforce case.
[11:46:51] **Other**: It's annoying to our internal workers.
[11:46:54] **Other**: Right? So it's not a big issue. It's just like stealing a little bit of the time checking.
[11:47:01] **Other**: Yes and no, because I just did an analysis some days ago.
[11:47:07] **Other**: And I analyzed some of the cases that I created in Salesforce and some of the documents because they can also select kind of a solution. And like a lot of the times they are selecting AI hallucination or AI issue or something. So I just run some analysis, which means they are kind of going over it. So there are also some cases that were escalated to me now were reflected correctly as missing. But actually no one checked because they were kind of in this flow of it's anyhow not working reliable. So I will not check it. So it's a bit. Yes, it says low severity, but it can happen that then, for example, customers in front of the wrong hotel because it wasn't confirmed. So there were quite some cases that reached me during the last week.
[11:47:48] **Other**: And I assume it is because they are marking most of the cases that we create.
[11:47:53] **Other**: As AI issue is there. And they have to mark this.
[11:47:58] **Other**: So they have to market when they close it. I think they are selecting like a solution or something.
[11:48:05] **Other**: Also I can see it in the time to resolution for this case category. It's quite fast. So they are opening it, they are reading it, they are checking. And then after three minutes they are closing.
[11:48:14] **Other**: Because what I wanted to be after is maybe.
[11:48:20] **Other**: Like we have the simple solution and tell 1.5 solution and so on. If we see like that these cases.
[11:48:27] **Other**: Like, let's say you are still there, which probably sounds not too severe, but to other cases are the more problematic ones.
[11:48:37] **Other**: A document is expected and it's not there.
[11:48:40] **Other**: And this is probably the thing that we should focus here.
[11:48:44] **Other**: If I, if I see it correctly, the business really our customer has like needs an information which is not there.
[11:48:54] **Other**: And the information is a PDF in that case.
[11:48:57] **Other**: Yeah, that's definitely true. I mean overall we can say it like this. Okay. So that we basically whatever comes next, whatever solution comes next. This is the number we need to definitely need to get down in order to get the NVS score up. Right. That's the.
[11:49:16] **You**: And this information, we don't have it kind of written down anywhere. Right? Like, what are the things we have to achieve with this initiative? What are the things we try to achieve?
[11:49:27] **You**: But if it doesn't work, we're fine. Not continue or wish things like until we achieve this. We are trying solution.
[11:49:36] **You**: 77, 78.
[11:49:38] **You**: So do we have, like, a clear understanding of these kind of business goals that we're reaching with this initiative? And when can we stop and when can we say that, okay, this is complete.
[11:49:51] **Other**: I mean with the initial idea that we had. The goal was to kind of address all suppliers. But now if we see that the scope will increase and also the time that we like effort wise. Then as mentioned, I would also be fine with just reducing to our main suppliers top 10 top 20 suppliers to cover, I don't know, 80%
[11:50:10] **Other**: That would also be fine. And then for the remaining ones I still need to align then with the operation teams that they kind of covered with their workflows that they proactively check. I don't know.
[11:50:21] **Other**: Indian trips or something that maybe only 10 a year.
[11:50:30] **Other**: And like overall, I mean for sure there are some numbers so we want to reduce the time and invest on cases because we assume if we have the docs ready and if we kind of make transparent that there's no doc required, not part of this in it, but will come later that we can reduce, like the cases tremendously because currently the share is roughly 30% of all cases are related to documents. So it's like really a huge number. We also see it in the NPS. So there are some correlation between I have some analysis. I can also maybe share it in the session if you are interested later. So there is some correlation in terms of if a customer is a distractor, which will most likely not book. And what was his kind of feedback in the NPSB where there is a dedicated section to documents, for example. And usually the share is really high from people that were complaining about. I did not have him voucher. I was standing in front of the hotel. I couldn't do my activity. Also this whole refund thing because like usually we are just kind of refunding if they cannot access the activity.
[11:51:29] **Other**: This is still like I don't have any numbers, but I'm pretty sure we are.
[11:51:34] **Other**: Kind of burning a lot of money with because something wasn't there and we are just saying, okay, sorry for the experience, but here's your money back.
[11:51:43] **Other**: Or because they usually then they need to buy a new ticket because usually customers are standing right in front of the entry and they want to do it. So if the ticket is not there, they're just buying it on their own and then kind of reimbursing it later.
[11:51:55] **You**: You know, such cases, like, we really, really want to drive them to zero because kind of.
[11:52:02] **You**: Our business model.
[11:52:06] **Other**: I mean to zero. I don't know.
[11:52:08] **Other**: What would be amazing.
[11:52:11] **Other**: Yeah, that's maybe the vision.
[11:52:19] **Other**: Yeah.
[11:52:20] **Other**: No more questions to the completeness check initiative. I have organizational questions.
[11:52:25] **Other**: So you mentioned that now we are changing the priority of the team.
[11:52:30] **Other**: So what can you specify? I mean Alexi can also specify what it means.
[11:52:37] **Other**: I mean, I wouldn't say changing, but I fear now the need of having more people on this topic. So potentially I could say, hey, you can work on the fall back that is not working or Minh could do the sunny cars.
[11:52:50] **Other**: Thingy. But now I feel really, let's pause everything else, but just kind of, I mean, we have plenty of things to do. We can do everything. Everything is important, but it's not priority at the moment. So now I would really say that's free up capacity.
[11:53:04] **Other**: If you would ask me. I would even like to have Sascha on board it, but not sure because it's intra week. Maybe we can swap a day. I don't know. I would be open for that because my proposal was since we only have six minutes is to really block time tomorrow, at least for you as engineering group to, like, go through everything in details and, like, not asking questions in the conference, but like just asking it in this session to kind of come up with what is the status quo, what do we have already, what needs to be reviewed, does this solution make sense? Is everyone convinced and confident that it will work? And then also maybe giving a proposal about the next steps. So really take some time to, I think what Markus started.
[11:53:47] **Other**: Diving into solutions. But I think this needs to be like, we just need to go one step back.
[11:53:52] **Other**: That's what I feel. Taking some velocity, like lower velocity maybe, and rather thinking about and brainstorming again, kind of sharing the knowledge, everything that Markus has in mind.
[11:54:05] **Other**: Asking questions, challenging it, whatever. And then hopefully, I mean, we can also align on the goals or you can align on the goals as you like.
[11:54:14] **Other**: But I think the goal should be that then by maybe end of tomorrow, at least everyone knows what's currently there, what are potentially next steps, even if not yet there, even if maybe not yet 100% confident how many suppliers we will cover and how do we want to structure the work. And then next week, maybe we can do a planning session to see.
[11:54:35] **Other**: Okay, I don't know what can we do in the next two weeks.
[11:54:39] **You**: Yeah, I think, like, we can cover this topic also.
[11:54:42] **You**: Together.
[11:54:44] **You**: Tomorrow that we.
[11:54:47] **You**: Talk as a team and make sure we make a plan of the remaining steps that we all understand.
[11:54:55] **You**: And kind of.
[11:54:56] **You**: Can figure out how can we achieve that.
[11:54:59] **You**: Right? We don't have kind of exact answer right now apart from Markus is working on that and I'm gonna be living into weeks. And Minh is more important than everyone else.
[11:55:11] **You**: So to fill all the gaps, we need to.
[11:55:15] **You**: Yeah.
[11:55:16] **You**: To the same romance.
[11:55:19] **You**: Bounce ideas.
[11:55:20] **You**: And decide how we approach it. So we have flexibility, we have priority.
[11:55:25] **You**: Now we need to figure out how.
[11:55:31] **Other**: I have proposal. So the version one right now is pretty much in review and is pretty simple. So let's just let me and Markus finish this one. We will mention. And then next week when Sascha is back from info guild.
[11:55:48] **Other**: Then we all can sit together. I mean engineers can sit together and discuss about version 1.5 within two and one other possible next step.
[11:55:59] **Other**: Oh, how does this sound?
[11:56:01] **Other**: But why not doing it tomorrow?
[11:56:03] **Other**: Because there's no Sascha.
[11:56:05] **Other**: There will be Sascha if we say that we swap one day. I mean, that's just something that we need to discuss. Also, Oleksi mentioned, I feel the earlier the better because I heard quite some urgency the last days. So I would like to have it rather earlier than sooner. And then, because it will also impact the next sprint, I guess.
[11:56:25] **Other**: So when there's at least, I don't know, assuming you would take the morning hours to align and then we have planning at, I don't know, one, no, two. Then maybe we can already have a brief catch up. Hey, what's your feeling? Is it good? Everyone does. Everyone has more understanding.
[11:56:41] **You**: To challenge. I guess Sascha may be.
[11:56:44] **You**: In the works and people may depend on him because Sascha works not alone on infra guild. And it's kind of other people kind of bear with him and depend on it. So it's kind of maybe. Yeah, yeah, not that easy for Sascha and for me also kind of. I have only time tomorrow at around planning and absolutely no time in the morning.
[11:56:55] **Other**: On Sascha. Yes.
[11:57:07] **You**: And.
[11:57:08] **You**: Yeah, maybe we can actually do something on Monday because Monday is already quite free for me. And, yeah, maybe one day won't make a big change. So it's also.
[11:57:20] **Other**: You want to join from the beginning Aleksei? Because I feel it would also be good if just the four align for now. Kind of, okay, what is like the deep solution? And then next week we can discuss the next steps, like how can we break it down, who can take what.
[11:57:35] **You**: To join to understand more to help kind of.
[11:57:40] **You**: Gather the necessary data that we are missing.
[11:57:44] **You**: But, yeah, if you guys feel like you can align without me tomorrow, also an option. But, yeah, I'm open to doing all of this all together on Monday.
[11:57:54] **You**: Shouldn't be much of a difference.
[11:57:56] **You**: Let's see.
[11:57:58] **Other**: Proposal is different? So how about we split.
[11:58:03] **Other**: Three hours, which could be quite.
[11:58:06] **Other**: A big chunk of time. I mean, I think like from my past experience, three hour workshop usually are very exhausting, and I'm not sure about the outcomes, but instead maybe we do something like engineers alignment. So we find, I don't know understanding alignment.
[11:58:27] **Other**: And have a like clear document on like what are we building within the next two months?
[11:58:33] **Other**: Some outcome. And then we do for two hours, for example, we do one hour alignment with product and engineering manager on Monday.
[11:58:46] **Other**: So two plus one.
[11:58:48] **You**: Then you can do it without me and Kristina tomorrow.
[11:58:48] **Other**: Yeah, sure.
[11:58:52] **Other**: Yes.
[11:58:53] **You**: Right. Okay.
[11:58:54] **You**: I'm happy.
[11:58:55] **Other**: But I have a question. So is it confirmed? So Markus should sort of.
[11:59:01] **Other**: Markus started the initiatives and was driving it.
[11:59:04] **Other**: But we will lose him in two weeks. Correct.
[11:59:08] **Other**: So we need the next goal is to transfer the ownership within the next two weeks. Is this right?
[11:59:15] **You**: Yeah. This is confirmed.
[11:59:16] **Other**: That's the assumption that we have. And if now there's like strong, I don't know, opinion because why XYZ whatever will not work or will be risky or, I don't know.
[11:59:18] **You**: Yeah.
[11:59:26] **Other**: Then I mean that's also something that we need to discuss. But I guess you will only know after, like having more insights about what was missing and what is the status quo.
[11:59:36] **You**: That's for now. Let's work from these assumptions, Markus.
[11:59:40] **You**: Only here for two weeks and we need to use them for.
[11:59:44] **You**: Full of boarding and onboarding.
[11:59:46] **You**: Everyone who needs to be onboard.
[11:59:47] **You**: Ed.
[11:59:51] **Other**: So the question is now back to Sascha if you have time tomorrow for two hours in the morning.
[12:00:01] **Other**: Was there any choice? I mean, I think the checkup move.
[12:00:09] **Other**: Like there are other two weeks again that we've done. I don't know.
[12:00:20] **Other**: So be it's a problem because I have now this context which so I just briefly checked about the components by technology during the meeting. I got some better image.
[12:00:30] **Other**: Now what we are facing the problem. But I do believe then in two weeks again I will have lost the focus on that topic again. So that's kind of like the issue that I would facing. That's why I would push more for bring life as much as possible while Markus is here.
[12:00:50] **You**: That's also like. Yeah, that's what we're trying to do. But again, the assumption that we won't finish while Markus is here. So we need to make sure that we.
[12:00:51] **Other**: And yeah.
[12:01:00] **Other**: I mean bring life as much as possible, but together with Markus and even probably not.
[12:01:08] **Other**: Maybe we don't need to do so much confluence.
[12:01:11] **Other**: Solution discussion more like source code checking. And if we can do this in four people like four people. Markus is showing us what he's doing. We look over it.
[12:01:21] **Other**: He has to explain us also in this PR that he closed. I saw today I got a lot of close message which was kind of like the solution to right of one point. Yes. It was two or two. Like I would say why not focus on that? You know that because I don't think so. Even if I have a strong opinion the next two weeks that I will that I will tell like no, we have to do this in a completely different phase because anyway I would anyway think how document dashboard works now. It should anyway be changed in a completely different phase. But I think realistically we will not do this because it's unrealistic to do to change a lot of things in documents dashboard.
[12:02:04] **Other**: That's kind of like you know I don't want to be disturbed here. I want to say we committed to something that we should bring life. That's the end and we want to solve something. If I like it or not it shouldn't matter.
[12:02:18] **Other**: In that phase.
[12:02:19] **Other**: Yeah, but I think it's not about if you like it but rather challenge maybe if you see hey this can be simplified or can we yeah, but that's why it's in a different way or that's why I said we do a pairing session with Markus or a grouping session.
[12:02:33] **Other**: We go over the PRS.
[12:02:35] **Other**: He shows us what what he did there.
[12:02:38] **Other**: He explains us this and that happens. And then probably also shows us that demonstrates us this and then I get a better image rather than reading us through conference pictures which I tried now. No, let's not read through it. You need to discuss it's not working.
[12:02:55] **You**: Ll discuss what you need to. Sorry, guys, I need to run.
[12:02:56] **Other**: What kind of fix?
[12:02:59] **You**: We have a meeting later today to do this kind of cycle to roadmap planning. We can discuss all the other topics apart from this completeness check then.
[12:03:13] **You**: And, yeah, couple of the check will fill in on Monday.
[12:03:16] **You**: All right. Thank you. See you later.
[12:03:25] **You**: Hello.
[12:03:29] **Other**: Ations.
[12:03:31] **You**: Likewise.
[12:03:36] **You**: We're missing cloudy and.
[12:03:37] **You**: Right.
[12:03:51] **Other**: Might be reading Tour I think you'll find it very engaging.
[12:04:02] **Other**: Yeah so before you join me I was just asking is thoughts on that.
[12:04:09] **Other**: Story that early in his shared about the company whose entire infrastructure was deleted by cursor.
[12:04:21] **You**: I didn't see this one yet, I guess.
[12:04:26] **Other**: Tech.
[12:04:27] **Other**: It's so cool.
[12:04:31] **Other**: It's a combination of them. So it's not like, ah cursor just woke up and decided I'm just going to go and delete something.
[12:04:39] **Other**: But it is.
[12:04:42] **Other**: Super interesting like a lot of things.
[12:04:46] **Other**: Put together. I think my.
[12:04:49] **Other**: The there's a lot on also on railway rails.
[12:05:00] **Other**: That apparently has the tokens that even if you pick some scopes it will have others.
[12:05:09] **Other**: And all the stacks are actually all this sorry all the backups are actually kept in the same volume as the application.
[12:05:18] **You**: Oh, yeah. I have project on Railway. I just.
[12:05:22] **You**: Do backups manually to close layer.
[12:05:30] **Other**: They didn't so the oldest backup was like three months old.
[12:05:36] **Other**: So they were trying to recover three months of bookings.
[12:05:41] **Other**: Over log messages and paypal and stripe up payments and emails and whatnot. So it's just crazy.
[12:05:54] **You**: Let's not do that.
[12:05:55] **Other**: Hello.
[12:05:55] **Other**: Klaus hello I had no connection and also no phone battery so I had to wait for my phone battery to charge.
[12:06:06] **Other**: Yeah, I'm familiar with the struggle. I think my heart skipped a beat earlier today when the internet just crashed.
[12:06:14] **You**: What's going on today?
[12:06:16] **You**: My internet.
[12:06:17] **You**: For.
[12:06:18] **You**: Half of the.
[12:06:20] **Other**: It's just Berlin's internet because sometimes I'm like maybe it's my provider and then I'm at the office and it.
[12:06:27] **Other**: Also stops working while and I'm sure we have I mean anyway like the speed we have at the office it's a lot better than what I have at home.
[12:06:38] **Other**: Maintenance work.
[12:06:40] **Other**: That actually disconnected the whole thing.
[12:06:42] **Other**: But now it's back.
[12:06:46] **Other**: I like so just a quick update because I haven't updated the documents up update is not not much from the.
[12:06:59] **Other**: Design side of things just let me quickly revise.
[12:07:07] **Other**: So.
[12:07:07] **You**: Yeah, I think last.
[12:07:09] **You**: Plan was to design the destination part.
[12:07:13] **You**: Right?
[12:07:16] **Other**: The content enrichment. We already have a so it's not documented but it is decided so I just haven't written.
[12:07:29] **Other**: The specification.
[12:07:33] **Other**: Beyond that.
[12:07:38] **Other**: Work from my side I've been either is API outsourcing or the rapid.
[12:07:46] **Other**: Which should be finalized today.
[12:07:55] **Other**: Yeah I think other than that it's been just alignments and see what what how the how changes in trip planner might affect this project.
[12:08:09] **You**: Yeah.
[12:08:10] **You**: I.
[12:08:11] **You**: Have Kril earlier.
[12:08:14] **You**: And are you aware of the other things that front-end teams work on?
[12:08:20] **You**: Like route Builder?
[12:08:22] **You**: Project that they're kind of planning for the cycle?
[12:08:26] **You**: If it also needs kind of be in sync with what we do?
[12:08:33] **Other**: Yeah, so we discussed this morning.
[12:08:38] **Other**: It's hard to say.
[12:08:40] **Other**: Because I.
[12:08:44] **Other**: Haven't gotten that clear reading on.
[12:08:50] **Other**: What they will do when and how.
[12:08:54] **Other**: I think the last session was really oh we have these options okay.
[12:09:00] **Other**: So.
[12:09:01] **Other**: If they just need static data.
[12:09:06] **Other**: Sorry.
[12:09:08] **Other**: There are two aspects to this so wrap builder first I just thought it was just the actual route.
[12:09:14] **Other**: As in goes from point a to B to C to D and so for.
[12:09:19] **Other**: That's not necessarily the case sometimes it feels like route builder is a whole.
[12:09:26] **Other**: Including combinations activities and so forth.
[12:09:29] **You**: This is what it's like from their discussion.
[12:09:32] **You**: I also don't understand this project yet.
[12:09:37] **Other**: Discussion today about this?
[12:09:41] **Other**: No this is from past discussions today it was just Kr and I were thinking how would this look like from our perspective?
[12:09:52] **Other**: And it it depends on a lot of stuff.
[12:09:54] **Other**: So there are two aspects here it might be easier if we look at them in isolation one of them is the whole transport so how to go from point a to B?
[12:10:07] **Other**: So based on the call they decide what is going to be point a B C and D and then they want to see how to go from point a to B.
[12:10:16] **Other**: So this is where that service to pull data from the spreadsheet comes in.
[12:10:27] **Other**: What's the challenge there?
[12:10:30] **Other**: That it may land on this team.
[12:10:36] **Other**: Yeah the transport pricing rate.
[12:10:45] **Other**: Assume that the route builder is what you had before three planner when you generate like what is today trip generator?
[12:10:56] **Other**: Yes to point that that is opposed to be the process yes they would take the call transcripts.
[12:11:08] **Other**: And from there.
[12:11:12] **Other**: Set out the points like abc.
[12:11:17] **Other**: Then define transports between the those points.
[12:11:22] **Other**: And find accommodation recommendations and then they would have a trip that would be passed on to trip planner 1.
[12:11:31] **Other**: 0.
[12:11:33] **You**: In accommodation, recommendation.
[12:11:35] **You**: We are covering this with our.
[12:11:38] **You**: Meta warehousing, so they will get kind of things from us.
[12:11:43] **You**: Not all.
[12:11:45] **You**: What?
[12:11:46] **Other**: We don't know it depends on.
[12:11:50] **Other**: So if they have the recommendation based exclusively on static data then yes what we are planning to send to them via events will be enough.
[12:12:04] **Other**: What they didn't seem to be certain was whether rate and availability should be part of the equation to recommend an accommodation or not.
[12:12:16] **Other**: If they say yes it should then accommodation recommendation needs to pull rights which we don't have yet in in catalog because we don't have the supply domain.
[12:12:29] **Other**: If they say no we just do static information and we let the planner in this case dp1 worry about rates then it should be final.
[12:12:42] **Other**: If they still say yeah no the recommendation itself won't concern itself with rates but I want to build a response that includes the rights and availability then it will still be part of that to say hey catch me the recommendations let's look up rates and availability and just put the two together and send to trip planner.
[12:13:15] **Other**: If that's the case then we will have some choices ahead of us Krista and I already outlined three scenarios and it's just a matter of aligning with the trip planner team the train-offs.
[12:13:34] **You**: Do we have contact points on their technical team who can design this?
[12:13:40] **Other**: We don't know who what the team is.
[12:13:43] **You**: Yeah, this, this also might with all these Marchy parts.
[12:13:47] **Other**: Yeah so it it would be.
[12:13:48] **You**: I.
[12:13:49] **You**: Thought she's, like, out every second day.
[12:13:51] **You**: So she's out thick again.
[12:13:54] **You**: Yeah. We need something.
[12:13:56] **You**: Contact with people who are doing something.
[12:13:59] **Other**: Right now you can I guess you can still poke Gregor.
[12:14:06] **Other**: Although.
[12:14:07] **Other**: We know that this is not a long term solution.
[12:14:12] **Other**: Meaning that.
[12:14:16] **Other**: Who would be the next point of contact especially from a technical point of view.
[12:14:22] **Other**: This is what we don't know because it's not clear how the team structure is going to look like to continue development PP1.
[12:14:31] **Other**: TP2 and migrate things away from TP1.
[12:14:37] **You**: Yeah. From what I understand, they are kind of.
[12:14:41] **You**: Drawing more chain albatross.
[12:14:43] **You**: And splitting this kind of joint team in half and one half works on veto deprecation, another half is.
[12:14:50] **You**: Like route Builder.
[12:14:53] **You**: But who is where and who is kind of actually, we can talk to about which topic notes decided.
[12:14:58] **You**: Yet.
[12:14:59] **Other**: But when we had the tp2 architecture meeting was it last week?
[12:15:06] **Other**: On Thursday morning.
[12:15:09] **Other**: Oh wait let me check Monday yes I think was last Thursday yes last Thursday morning in the decision paper 4 that was never shared with us.
[12:15:23] **Other**: Robert already had a plan right so I could see who's going to be working with on what so I remember that.
[12:15:31] **Other**: Also the number like the number of engineers who's doing what.
[12:15:36] **Other**: Including names so I think there was a plan okay then I would have to take a look at that we don't have it so I think the best is to ask I've been trying to ask things from rober that hasn't been going well this week.
[12:15:53] **Other**: No or for the last few weeks actually yeah.
[12:15:57] **Other**: I don't know I mean I hear sometimes that they may just find some outsource options similar to what we have with Lambda and.
[12:16:11] **Other**: Hiring.
[12:16:14] **Other**: Things to work on and others not to which is where migrating or moving TPS to the scene would come in so that they could find give more space to that team.
[12:16:27] **Other**: Outsourcing is so fast.
[12:16:34] **Other**: It's fast to get head come.
[12:16:38] **Other**: That that is fast.
[12:16:42] **Other**: But when are they going to decide this because we are now in the middle of cycle planning and then we also don't know what to do.
[12:16:48] **Other**: Like I still don't understand if the data we have worked so hard now in the past four months to add to catalog will be used.
[12:16:58] **Other**: In 100%
[12:17:04] **Other**: Not alive I have no idea no right it's also like should we invest more into adding additional capabilities and data there if nobody's going to use them in the next two months.
[12:17:17] **Other**: Okay so wait one thing seems fairly certain is that work will continue on the acclimation recommendation?
[12:17:30] **Other**: For the time being because it's also an external and apparently a very expensive one is the one.
[12:17:37] **You**: In June.
[12:17:38] **You**: Already.
[12:17:39] **Other**: Yeah so someone will keep working on a combination recommendation which will leverage the new data that we have for adding just accommodations through those events.
[12:17:54] **Other**: Now is that result then in TP1 in the near future I decide on that.
[12:18:07] **Other**: But for example if you expect to see the filters in TP1 that is very unlikely.
[12:18:23] **Other**: Then are we aligned so what I would like now for the cycle two and I saw that it already worked quite good in cycle one for certain things is to really have.
[12:18:35] **Other**: An align definition on not only like having some high level milestone for example catalog management but to really define together what we want to achieve next cycle so there is no room for interpretation I didn't have time to go through your rollout document Krill I saw that you shared it with me.
[12:18:57] **You**: Please?
[12:19:00] **Other**: I think you shared it with everyone in our slack.
[12:19:02] **You**: Yep.
[12:19:05] **Other**: So we only have two more days left for the planning and we need to break this down more into milestones.
[12:19:18] **Other**: Let's have a look together so we already have it quite well done here for the vet due deplication.
[12:19:30] **You**: Still, we, we are to finalize it. We have a session with Kirill later today.
[12:19:35] **You**: In tomorrow.
[12:19:36] **You**: Yeah.
[12:19:38] **You**: But, yeah, wet application is kind of.
[12:19:41] **You**: Probably more clear thing with kind of more or less Define things.
[12:19:48] **You**: And this is priority for us. This is priority for triplanner. We're going to be working all together.
[12:19:56] **You**: On.
[12:19:57] **You**: This and.
[12:19:58] **You**: Yeah, the other things we need to.
[12:20:02] **You**: Verify a bit more than what we have right now.
[12:20:07] **Other**: I'm a wee bit curious why do we have to remove the veto IDs.
[12:20:15] **Other**: From the accommodation endpoints response.
[12:20:19] **Other**: I mean.
[12:20:21] **Other**: It should be entirely on pure planner.
[12:20:29] **Other**: I would be very surprised if they say we will crash a few send us those ideas.
[12:20:35] **Other**: Are you purposely going to write code that says if this is there.
[12:20:40] **Other**: Just.
[12:20:40] **You**: We can say.
[12:20:43] **You**: Yeah.
[12:20:44] **You**: Trip planner stops reading these fields. That's kind of.
[12:20:48] **Other**: Yeah that's on ship runner side.
[12:20:51] **Other**: Yeah, sorry I went off on a bit of a run I just find this this topic this task very confusing make sure dedicated endpoint for find destination by name.
[12:21:04] **Other**: Work and replace it.
[12:21:06] **Other**: All right isn't that develop search endpoint for manual for Sicarius?
[12:21:13] **You**: These kind of four detailed explanation for this step.
[12:21:20] **Other**: Okay.
[12:21:21] **You**: So, yeah, it's not final.
[12:21:23] **You**: I'm trying to gather, like, what exactly we mean by this.
[12:21:26] **You**: What's in scope? What's not in scope?
[12:21:29] **You**: So v also has better overview of what to focus on.
[12:21:34] **Other**: So you already saw from my my comment on the slack channel that enrich existing destinations.
[12:21:46] **Other**: That that's I mean that's half halfway to just developing the entire thing the second the last one enable manual curations including the geotapes that is also.
[12:22:02] **Other**: Taking it further than.
[12:22:04] **You**: Yeah. So this we can.
[12:22:07] **Other**: One note about the second one it's not like really the big deal to be honest it's just a script and like I don't know what's the status right now but we don't already made some progress on this one.
[12:22:22] **Other**: So.
[12:22:24] **Other**: It's what do you mean it's just a script because what to properly use a geodata from expedia you need to compare to the geodata that you have today so what he does is like comparing by name.
[12:22:41] **Other**: Or like and when not possible to make specifically by name he does some some comparison like he he takes either of central any accommodation from this geochemist and also checks.
[12:23:01] **Other**: If not from geospatial but like to in accommodation that is linked to this area he gets this geo coordinate and sees if it falls into the geoshik Chrome Expedia if that's the case then like it's a match.
[12:23:19] **Other**: Right and the proper migration would include not doing this for the ones that don't have your data but all of the others so that we can also match the content.
[12:23:32] **Other**: No but we don't want to so we have already content from beta we have everything from beta.
[12:23:39] **Other**: Right now we don't have the geo shapes for these 500s which we want to match with expedia and to say right these are the areas and we want to get the geo shapes yes we have the content and for some we have geocaches for some we don't and for others in in Expedia we have the content and for others so this is no the question was if we put in this work now.
[12:24:10] **Other**: Or later because if we're putting in the work now then we can already scratch the rabbit and say never mind this we're going to move ahead with a full blown solution.
[12:24:24] **Other**: We just want to ask what's the what the status because like he put some effort already into this analysis.
[12:24:33] **Other**: But let's under commit and over deliver so if we think there is not much work and we already start I think it's more.
[12:24:48] **Other**: Since in case I would move for let me rephrase I would move forward with the rapid and in case we can deliver this we will and if not not right so still move forward with rapid but not fully committed to this or maybe not have it here but if it's really just a script we can work on it once this is done but not really commit to add it to the cycle it's still a very small cycle it's only two months Plank is on infrastructure three weeks a lot of public holidays as well in May like three I think even in June some so maybe let's try to do it but not commit to it.
[12:25:33] **You**: Purpose of why we have, like, v as an owner of this topic. Right. So we, we can specify what.
[12:25:41] **You**: Is super required. Right. And then he may actually find ways to do more and handle things differently from what we see. And.
[12:25:50] **You**: Yeah, he's, he's the owner. He will see if, oh, actually, this is not an issue. I can fix it. And then it, it's a better solution.
[12:25:59] **Other**: That's that's fine the question is do you order because if it's it's if it's it's find a cue under promise and over deliver but if you focus on the over delivering first and on the promised later then it's the other way around so and right now we're doing this the other way around we're focusing on the overprom on the over delivering and but we're not doing what we promised.
[12:26:19] **You**: Yeah.
[12:26:30] **Other**: Sorry.
[12:26:32] **Other**: So I think I had the lag in my connection I didn't want to interrupt you.
[12:26:37] **You**: So, yeah, I think we're just.
[12:26:41] **You**: In planning, right? So we, we will cut this.
[12:26:43] **Other**: Apparently we're in execution.
[12:26:46] **Other**: Yeah I think this is question that's a point because it's it's kind of already work in progress that's what I'm trying that's what I understood there is already something doing this.
[12:26:58] **Other**: And again I'm fine with you over delivering but it's still we're doing these things the other way around so yeah that's actually why have we started it with this and because also like in the calls we had before on this I thought it was already agreed that the first priority is to keep the data that we already have and just replace it in trip planner so why are we starting with the other one now.
[12:27:32] **You**: Key.
[12:27:33] **You**: No.
[12:27:35] **Other**: What do you mean by that like starting with.
[12:27:38] **Other**: The so what exactly are we now discussing because like we have already something that like the one step which is missing is like just enrich the like errors that are currently missing the geo shape so geo shapes this is it right in the future what we can do next out of scope for cycle coming cycle we download all of the virtual errors and we do the same for this newly downloaded we match them with expedia.
[12:28:12] **Other**: Right but this is for the future we already have something we will work with this with this collection that we already had and we will expose this exactly these areas from from the endpoints actually we already have working endpoints that clients can connect to.
[12:28:32] **Other**: Okay so we have a free text search endpoint for destinations it supports search by name I just have to to see to check if it's like.
[12:28:50] **Other**: Complete match or like partial match or it's fuzzy not definitely not as search so we could we could already iterate on that.
[12:29:00] **Other**: This is what we promised and this is.
[12:29:08] **Other**: One sorry this one right yeah.
[12:29:12] **Other**: And we are so this it was the one that we already were working on right.
[12:29:19] **Other**: So.
[12:29:23] **Other**: Those first three are are the problems are the promise everything else that we can over deliver awesome it just brings us closer to our ultimate goal.
[12:29:36] **Other**: And we already have like what do you mean this is to me still here to open import all destinations from web two what do we mean here like import what like the destinations we know you want to launch the destinations we have today in elephant I would say everything get our hands on because I would say if nothing else do the same way we do today.
[12:30:05] **Other**: We use.
[12:30:07] **Other**: The pipeline of trip planner how to automate this I don't know that was that would be the point of that task which would give us more time to be without this better control over destinations and we're also kind of soothe the concern about not launching it in the destinations okay.
[12:30:33] **Other**: These are now clear this one I would clarify a bit more I think all destinations maybe yeah try to clarify it a bit more yeah we can we can negotiate with.
[12:30:53] **Other**: Like a subset like beyond the things that they want to launch okay what's like yeah.
[12:31:05] **Other**: Good I think these three are clear to me now.
[12:31:11] **Other**: This also yes but this develop search endpoint for manual touristic areas in elephant this is the one that you were mentioning here.
[12:31:20] **You**: I think this is our kind of all these three are kind of expanding this one. What's exactly?
[12:31:27] **Other**: Okay.
[12:31:28] **You**: Right. And then we probably can add more detail for.
[12:31:32] **You**: Like, the first one, develop certain point for manual accommodations.
[12:31:37] **You**: A little bit more details there. What's in scope?
[12:31:44] **Other**: Do you already have an idea of how much because basically we have the capacity for this quarter I think here we can try to estimate it's not that difficult I mean outsourcing let's see we can be a bit more pessimistic and then based on the capacity that is remaining we can also add some test for catalog because now it's super open so we can.
[12:32:13] **You**: Yeah. For now, this is what we want to.
[12:32:16] **You**: Think of with Kristen. We didn't think of, like, estimates yet.
[12:32:23] **You**: And, yeah, priority weather deprecation and expedient integration.
[12:32:27] **You**: And API sourcing and catalog.
[12:32:30] **You**: Let's see if what, what fits and if it fits at all, then we refine it more.
[12:32:39] **You**: And make it more clear what is, what is catalog management? What does this single source of truth mean?
[12:32:45] **You**: Because.
[12:32:47] **You**: They're a little bit also ambiguous here.
[12:32:50] **Other**: Yeah so the list that I have in the diagram right now would be to fork or rebuild item curator which is where we would then have those management capabilities and the UI that's TX or cardia could use.
[12:33:12] **Other**: There it is flagging accommodations that's Tourlane preferred.
[12:33:16] **Other**: There is manually blocking and blocking accommodations enable disabled destinations which is something quite as I would like to have to launch expedia.
[12:33:29] **Other**: Some of these things exist in SCM which would allow us to start taking things out or making them unnecessary in SEM which also supports migration to the new system and from here on utilis what kind of capabilities you would need.
[12:33:53] **Other**: I think probably that's more than enough to begin with I would expect this to be a bigger topic.
[12:34:03] **Other**: In cycle three.
[12:34:05] **Other**: But yeah since I still don't know right if the XPDR content will be used and to what extent entry planner.
[12:34:19] **Other**: I think it's fine if we also right.
[12:34:22] **Other**: But I will work on so there is a lot of work that needs to be done actually on defining everything I think the maybe the development of the interface while I understand there is a lot of complexity behind I think it's more about yeah getting it understanding the problems you need to solve and the functionality that we need and having this clear with the catalog management and then yeah maybe it's easier to implement.
[12:34:56] **Other**: Sure but in any case for in the interest of making this.
[12:35:04] **Other**: Making catalog management more specific I guess you can cherry pick from those those functionalities.
[12:35:16] **Other**: Which ones you would like to focus on.
[12:35:21] **Other**: Because loss of logging Expedium the use of catalog content.
[12:35:27] **Other**: I don't think this necessarily changes the priorities that we have here, but it might impact the timeline.
[12:35:37] **Other**: Because.
[12:35:41] **Other**: You said oh I would like to launch expedia content gradually.
[12:35:45] **Other**: Yes so launch your destination here destination there whatever.
[12:35:51] **Other**: Steps you define this graduate so this means that whatever destinations you launch all of the others would keep using whatever content we have in elephant correct?
[12:36:04] **Other**: But.
[12:36:06] **Other**: This is where we hit a bit of a problem.
[12:36:11] **Other**: Because.
[12:36:12] **Other**: From trip planner side it might not be that straightforward to gradually deprecate that to.
[12:36:24] **Other**: Which essentially means that.
[12:36:27] **Other**: If they do big bang that the manual items would start bringing in.
[12:36:38] **Other**: Catalog content whether you like it or not.
[12:36:41] **Other**: But nano items is fine.
[12:36:44] **Other**: Okay.
[12:36:49] **Other**: Worst case you have accommodations in destinations and but then this might be the biggest challenge where it's not yet using XP account so it's having virtual content and then they replace that with the manual item because they need to change the prices or whatnot and then they will have a completely different content because it would start using Expedia content.
[12:37:13] **Other**: Yeah so with the gradual rollout I was actually trying to solve like this was also.
[12:37:22] **Other**: Risk mitigation for another problem that I had which is not actually being able to see expedia to content in staging so Kirill was able to remove some validation that was actually stopping us from seeing exterior content in staging. So you already have a few destinations for which I shared so my concerns were that.
[12:37:44] **Other**: We don't give tx and cells the chance to look at the content before we do this big bank switch. So this was actually the risk that I was trying to mitigate with this gradual rollout.
[12:37:58] **Other**: Yeah it might be slower but but I can also do is we do this but before we just ask them to review in staging. So we under the content for all the destinations in staging send the list to the.
[12:38:15] **Other**: Get the green light from them but this might be a bit slower and also if one destination gets blocked and they said this we cannot switch. I'm not happy with the content then we need to find a solution and this might slow down the launch for the others. But so far the feedback has been positive we still need to figure out the descriptions but I also checked and yeah I mean overall it looks even better. There are some small problems. Yeah, so I'm feeling a bit more optimistic now seeing a lot more content in staging from expedia and also that yeah there were no big.
[12:38:51] **Other**: Complaints from tx so far that I shared with them already so they were just yeah.
[12:39:06] **Other**: So I'm looking now still at only four or five destinations so if we say okay maybe this gradual thing it's too complex then I can look into getting the feedback and preparing a full switch if you are saying that it's gradual so it's also up to you to give me feedback. So when we proposed the gradual rollout, I didn't know it would add so much complexity. I thought there's something we can easily do.
[12:39:36] **Other**: I would also expect that even tripliner would prefer to do a gradual rollout this change, but they say it might be technically very complex.
[12:39:48] **Other**: So I would say it's the gradual rollout would be a good idea, even better idea for trip planner than for expedia.
[12:39:59] **Other**: So but essentially this what means is they also do a gradual rollout so we're fine, we're aligned.
[12:40:10] **Other**: And they would do the gradual rollout according to your plan.
[12:40:14] **Other**: As in which destination is the launch.
[12:40:16] **Other**: Option B they don't we want to do a gradual rollout they don't or they can't and so we launch expedia first gradually and then they move to deprecate.
[12:40:30] **Other**: That too afterwards.
[12:40:34] **Other**: Or if you say turns out it's a low risk so let's go nuts big bang then we do everything big bang expedient and vetted application so these are the scenarios I don't want that at the same time I don't want that.
[12:40:56] **Other**: Just wanted to add that actually we want now to gradually roll out the XPD content right so but still have that in place so we'll see the new like at least for production we'll see only the content from expedient for the accommodation that have better connections right so this is the first step.
[12:41:20] **Other**: Right so we.
[12:41:23] **Other**: Enable not all the destinations and suppliers but we go spiral by supplier.
[12:41:28] **Other**: Once this is done now we say okay we're fine with this content and now we can already move like work on better duplication.
[12:41:42] **Other**: Wait this is assuming that they don't happen at the same time.
[12:41:47] **Other**: Well at the same time this is not a good idea yeah, but you are assuming here that you are getting this PDF content and then you do the verification but maybe way wrong that you can already do the vet to deprecation in Expedia comes after but but that does not make any sense to duplicate that because like if you don't have content yet what would you throw in from the search engine.
[12:42:10] **You**: It depends on it, right? Because we get, we replace that to content with expedient.
[12:42:16] **Other**: If we don't.
[12:42:18] **Other**: Have expedient content yet so it's completely pointless to disable data.
[12:42:32] **Other**: So we have to wait for Expedia content to to be there on production?
[12:42:38] **Other**: So all the accommodations in catalog are already are migrated already curated the rules are there so so the solution point?
[12:42:51] **Other**: Returns the correct data that we expect to to be returned.
[12:42:58] **Other**: Based on like all the taking all the other rules into account including this this rule where we don't expose all the Expedia content for example but we only show the late expedia plus the MC or expedia plus something so this rule has to be also there.
[12:43:18] **Other**: Maybe it's not relevant for veto for virtual specific searching point but.
[12:43:29] **Other**: We can we can discuss it Expedia content has to be there.
[12:43:36] **Other**: My understanding is that part of the some parts of the veto deprecation we do regardless of the expedia so there is the part in which we just connect replanner to the destination data that we already have so instead of calling that to they are calling elephant or catalog this part has no dependency on expedia and this is the part that needs to go first.
[12:43:59] **Other**: But the question if they can do it like technically on their end.
[12:44:04] **Other**: Like switch destination separately.
[12:44:08] **Other**: And then maybe later switch accumulations.
[12:44:12] **Other**: Yeah Greg already mentioned that.
[12:44:17] **Other**: They would likely do everything at once because there's.
[12:44:23] **Other**: The sink with the vetu it's not separate.
[12:44:30] **Other**: So some things are some things are not there like the trip is sync is pulling data for both destinations or areas and for accommodation content.
[12:44:41] **Other**: So from the trip planner side it would be preferable to do everything you're right not all things will go to.
[12:44:52] **Other**: Through either elephant or catalog like the stops transport stops is they can use google maps or something else.
[12:45:03] **Other**: But the thing is very very tangled so it's likely to.
[12:45:09] **Other**: Go away everything together.
[12:45:16] **Other**: This means that let's say if expedia takes three months to give us production actions there is nothing we can deliver in cycle two which is also a huge risk.
[12:45:26] **You**: Yeah, we need to highlight.
[12:45:30] **Other**: So I really I mean you are.
[12:45:36] **Other**: The specialist of this little topic so I'm still struggling after months to fully understand it or just not even fully like to fully start to have an idea of why yeah anyway.
[12:45:54] **Other**: I would still like to have some steps of the vet duplications that we can.
[12:46:00] **Other**: Deliver.
[12:46:02] **Other**: In cycle two that are not.
[12:46:05] **Other**: That don't have a full dependency on expedia.
[12:46:11] **Other**: The destinations certainly would be one of them if you're blocked I'm pretty sure they they would just throw transfer service at you.
[12:46:23] **Other**: Oh well since you're blocked and you can't do those things guess what you just found some time to do this of course you can also say wait a minute I'm going to take the opportunity to work instead on supply domain.
[12:46:37] **Other**: Because it's also required for smart booking logic and to fully have catalog using rates as well.
[12:46:50] **Other**: But we are blocked.
[12:46:52] **Other**: Now I mean we don't know when we get production access and the majority of the things we have here are assuming that we will get production access.
[12:47:02] **Other**: But we can work on them right so yeah yes.
[12:47:07] **Other**: Are we going to take the risk to work on them while knowing that we are wasting for production access.
[12:47:13] **Other**: And maybe quite confident that it will come but I'm just saying that we have we are creating even more dependency on expedia and we already had like some discussions around how.
[12:47:29] **Other**: It was really difficult for our team to deliver impact right because we're building all these big things that have a lot of dependencies in between so if you look at cycle one we basically had no.
[12:47:41] **Other**: Immediate business impact and cycle two I'm afraid that it will be the same in case the experience doesn't come because we're just adding more functionality there, but in terms of delivering immediate business impact we don't have much because API outsourcing.
[12:47:58] **Other**: Hopefully but other than that everything is expedia.
[12:48:04] **Other**: That that was the decision that was made months ago when it was decided to do expedia first and hang everything on it so the fact that now everything hangs on it cannot be a surprise.
[12:48:20] **Other**: I would yeah so this was also the point I was trying to make that it would be really great if we can have some part of the vet to the applications and some first steps that are not fully hanging on if.
[12:48:31] **Other**: That's not in our control unfortunately all the destinations is but beyond that because then on trip planner things are so tangled between what is destination content and where is accommodation content because everything is just pulling data from Burtu.
[12:48:51] **Other**: There that's where you can deliver but then you can deliver something but it might not be used because again there's a problem with this type coupling on trip planner.
[12:49:17] **You**: Our dependency on XPD is like through our catalog, not directly, right? In theory, this catalog can be built with expedient behind it or paddle best behind it or whatever behind it.
[12:49:30] **You**: Right. But I think we are committing to Expedia. And if you actually never, never comes, we'll need to review everything.
[12:49:41] **You**: And it's kind of okay.
[12:49:43] **You**: Catalog actually gets things from puzzle baths or whatever.
[12:49:47] **Other**: But one of the requirements we did have from the beginning is to make catalog and build everything in a way that.
[12:49:54] **Other**: Is oh yeah.
[12:49:58] **You**: Yeah, but this isn't.
[12:49:59] **Other**: But.
[12:50:01] **Other**: There was a decision on going with experience content source.
[12:50:08] **Other**: But I'm not aware.
[12:50:11] **Other**: Like I don't know.
[12:50:13] **Other**: If we also want to make the decision to go with Expedia for all this area and destinations as well like to create also the dependency there.
[12:50:27] **Other**: Is safer because for expedia it's not so much all the data for destinations it's really just a geographical information.
[12:50:37] **Other**: It's really just a geo shapes.
[12:50:39] **Other**: But this we can already fetch from them.
[12:50:42] **Other**: Yes.
[12:50:44] **Other**: I mean again as soon as you have production access or you will be using testing credentials on production.
[12:50:53] **You**: Yeah.
[12:50:55] **You**: Staging date is same as production. So for state static data, we can.
[12:51:01] **Other**: But still let me jump in this but still the legal requirements like when I'm sure if you can use decent production already before sending the contract.
[12:51:14] **Other**: So but like that's a good idea definitely we could technically connect even today and then what everything we want.
[12:51:21] **Other**: I mean there is no requirement to not get the data already right even if you are in testing because you maybe want to test I'm pretty sure that is going to be a cloud there about that I mean of course not to use it in production but if we need it but of course I don't know about I don't know how important this joy guys for them to be translated like nice.
[12:51:47] **Other**: Anyway we also have a lot of work to do ahead of that.
[12:51:54] **Other**: It feels like it's it's more of a slowness than a risk of the nail going through yeah that's true but I'm just like having all this work and huge backlog of things that are depending on that and adding more and more to it it's not something that I'm feeling very confident with at the moment.
[12:52:18] **Other**: But.
[12:52:19] **Other**: Fair point.
[12:52:23] **Other**: From a strategic point of view you will feel more confident in having a difference provider of geographical data this is something that can also be explored.
[12:52:35] **Other**: But I.
[12:52:38] **Other**: Exactly that's the point right I didn't like I wasn't we did not make the decision together we did it for a content right so for content we're sitting together like hey these are the options there were a lot of discussions that I have with leadership with Karen and we all decided to go with expedia but for this I don't feel very confident and there was no.
[12:53:01] **Other**: Discussion in which from the product side and I'm also not sure from the leadership that we have agreed that also for destination we built this dependency on expedia.
[12:53:15] **Other**: Again this is much more contained risk in terms of dependency like because it is.
[12:53:27] **Other**: It will be mostly just the geo shapes if we if we don't feel comfortable confident or we think it's not a great idea we can go and search for something else because it's just one of the properties in the destination.
[12:53:49] **Other**: Low risk.
[12:53:53] **Other**: What would but let me turn this around what would make you more comfortable with this decision?
[12:54:02] **Other**: I want to make sure that it's an informed decision that is documented.
[12:54:07] **Other**: And that we are all aware of the risks.
[12:54:12] **Other**: And also that of the of the possible implications like I'm not saying that it's been another right one but I think we jumped the step of actually taking this decision and I don't want this decision to also like be fully pushed like I would like to spend more time thinking about this decision because my understanding was at the beginning that there are parts of the bed to deprecations when I also discuss with robert and villain joining the project it was always presented to me that the first step is to preserve the data that we already have from vetu and connected to tree planner.
[12:54:47] **Other**: And this but I agreed to adding so much more dependency on expedia for the veto duplication for the mochi team.
[12:54:59] **Other**: Well that that goes back to the discussion we were having about the under promising over delivering and starting with the overdraw and I saw some documents from the Mochitim as well in which they are already planning using some parts from the Expedia geography API and all these things.
[12:55:15] **Other**: That were not really aligned with us before.
[12:55:21] **Other**: And then that's on me so when we saw that experience you would have some geographical data and on the routes builder side that's actually what they care about they don't really care about the content.
[12:55:39] **Other**: So we have some information we don't have all information and that does not mean to give us more we do have expedia does have some geographical information and then we walk through the API its capabilities data that it shares.
[12:55:56] **Other**: And from their side we said this is exactly what we need.
[12:56:01] **Other**: So.
[12:56:04] **Other**: Again it doesn't mean that we cannot find another one, but which is why I can always consider to be low risk.
[12:56:14] **Other**: However again in the interest of getting that confidence what format would allow you to feel safer about this week? Do you want to.
[12:56:26] **Other**: Call this out explicitly in the rapid document saying okay in the future we can have this option yeah where we would use expedia as the so what I want to avoid is creating a bit of a domino effect now that in case expedia takes four months in case of two I am blocking veto deprecation three planner 2.0 route builder catalog and all the other things so basically two teams with more than half of their resources blocked and I want this to be.
[12:57:02] **Other**: A risk that it's not my call to make if we want to make it right and I don't want to and I want to make it clear to mochi team and three planner as well that you can build on this and but it's not yet there so there is always a risk.
[12:57:20] **Other**: That it might come in four months.
[12:57:24] **Other**: Or I mean I think it will everything will be good but we should have some risk mitigation in case also maybe it's blocked.
[12:57:33] **Other**: Again and then what we do we waste half a year of work from our team and three three months of work from the Munchie team as well.
[12:57:46] **Other**: We can call that out explicitly so that everyone is aware I again I don't think it's going to be destinations that's going to move the needle there.
[12:57:59] **Other**: But I understand your argument that this is there's been sort of an implicit decision and that it should be called out explicitly it's fair.
[12:58:14] **Other**: Okay I will I think I will start to document with this actually and just share it.
[12:58:22] **Other**: Okay so you prefer to start a new document or piggyback on the rapid or destinations.
[12:58:33] **Other**: I didn't this week I didn't have time to look at the wrap before destination so maybe yeah maybe it's a good place to add just to make it.
[12:58:43] **Other**: I will check but yeah maybe it can also be that I don't know I just give heads up in our leadership channel now ahead of planning that.
[12:58:54] **Other**: This is dependency that the teams are building on.
[12:59:01] **Other**: Yes there is a lot of pressure right to have the business impact for our initiatives and we are all under pressure and I don't want.
[12:59:15] **Other**: To like for the mochi team they also have already like so many things to do and such limited resources that yeah it would be really a shame if they are building on things that are not that we don't get access to in the next two months, three months.
[12:59:30] **You**: Think, like, if Expedia doesn't.
[12:59:35] **You**: Enable our production in a month, we already going to be quite.
[12:59:42] **You**: Blocked with some initiatives.
[12:59:44] **You**: Right. So, like, we can wait for a month without kind of any issues to our kind of.
[12:59:49] **You**: Work.
[12:59:50] **You**: But probably in a month, it's already going to be, like, problematic.
[12:59:53] **You**: And the risk is that.
[12:59:55] **You**: They may take longer.
[12:59:59] **You**: And risk is quite high.
[13:00:04] **Other**: Okay yeah that's the slowness will continue to be slow.
[13:00:13] **Other**: That's something else.
[13:00:14] **Other**: And the call if we are.
[13:00:17] **Other**: Taking this risk or not I mean it's not me and it's not on red so it should be something that.
[13:00:24] **Other**: Okay but now I think we're conflating things a bit.
[13:00:29] **Other**: So.
[13:00:31] **Other**: I would split it in this way.
[13:00:34] **Other**: The steps for execution.
[13:00:37] **Other**: And the steps for execution are we for expedia we focus on accommodations so we don't bring expedia and geography data to the mix.
[13:00:48] **Other**: So we keep we keep that goal of having a very.
[13:00:55] **Other**: Low cost low effort solution to replace vetu as a source of destination content.
[13:01:04] **Other**: And that's it.
[13:01:06] **Other**: This is hanging on the rapid being approved in that rapid we can say alternatively rebuild the full fledged solution that solution right now would include expedient geography API as the best source of geography data that we are aware of and that we already have access to and we are already paying but it has a risk of increasing the dependency to expedia with all the things that we're doing.
[13:01:40] **Other**: Even if the rapid is approved we know that in the future we would still want to build that and experience would I assume it's still the best option we have.
[13:01:52] **Other**: Then it's more of a strategic point of view where we say oh we're hanging everything on expedia because it's content it's our largest OTA doing also many things.
[13:02:08] **Other**: This is a separate risk I would say a more long term.
[13:02:14] **Other**: So for execution of the plan I agree with you and we can mitigate it by not tackling this on.
[13:02:23] **Other**: Assuming that again Karan approves.
[13:02:27] **Other**: But I think these are it is there's execution and then there's just strategic investment or a reliance on expedia.
[13:02:38] **Other**: Which by the way you move forward with activities yes what's going to be our main activity OTA.
[13:02:49] **Other**: Not extridia.
[13:02:52] **Other**: I don't know what you asked.
[13:02:56] **Other**: Sorry Karan already asked.
[13:02:59] **Other**: I don't understand already asked about their activities API no there's no activity API no they are working on it but they are yes or no.
[13:03:11] **Other**: When they launch it.
[13:03:15] **Other**: But we already have get your guide in the pipeline like we have a contract Karen just signed this year we get your guide we just don't have really yes we have a contract with git regarding what about all that thing oh we can't use get for guide.
[13:03:32] **Other**: They did some good.
[13:03:34] **Other**: Price or something okay understood no.
[13:03:39] **Other**: All the matter.
[13:03:41] **Other**: But anyway is a distinction clear.
[13:03:46] **Other**: So that we can also address it the right way.
[13:04:05] **Other**: Did that sorry.
[13:04:07] **Other**: No no I just asked if the distinction is clear in how we address them yes.
[13:04:15] **Other**: Okay cool.
[13:04:20] **Other**: I cannot wait for Karen to be back on Monday I'll be like Karen.
[13:04:28] **Other**: Make all the decisions.
[13:04:35] **You**: I just sent Karen on one mission.
[13:04:39] **You**: To the Expedia office and get the contract signed.
[13:04:42] **You**: Just.
[13:04:43] **You**: Can.
[13:04:44] **Other**: Complaining about this today there is this woman that is like the director also the one that.
[13:04:49] **Other**: S like called Karen and she's posting like three times a day on LinkedIn and like no one is even liking her post and then she says that she needs like three months and I since this happened because I was a fan I thought she's cool.
[13:05:03] **Other**: So when I was going only teenage was posting something I was liking it but now I start liking it.
[13:05:09] **You**: T get my legs back.
[13:05:12] **Other**: And surely has two lights so it's already like minus 30% my revenge yeah let's see when he's back if he has any updates.
[13:05:27] **You**: All right.
[13:05:28] **Other**: There's an episode of black mirror about this.
[13:05:35] **Other**: Okay okay so next steps are clear we keep we finished the rapid we keep business as usual.
[13:05:50] **Other**: Because right now it'll be in definition there's not too much we can do so let's just do that business as usual we keep the course.
[13:05:56] **Other**: Until someone says yeah no.
[13:05:59] **You**: Yeah. And we explicitly mentioned the risk with experience.
[13:06:04] **You**: That's no.
[13:06:04] **Other**: Yes.
[13:06:06] **You**: Surprise that it takes long and it hurts.
[13:06:20] **You**: Right.
[13:06:22] **Other**: Like I had absolutely no one from the mochi team reaching out for anything so route builder recommendation recommendation like nothing so I really don't know if they need anything from us or what they are planning to do. I don't know if they reach out to you Aleksei.
[13:06:41] **Other**: But.
[13:06:42] **You**: Just a little bit yesterday. And now see, it's sick again.
[13:06:46] **You**: So I think they will, they're not even planning their cycle yet. They will be doing it, like, next two weeks.
[13:06:55] **You**: So they may be reaching to us, like, a little later after everything is planned.
[13:07:00] **You**: So it's going to be chaotic.
[13:07:03] **Other**: Isn't the plan then to have a plan on Monday?
[13:07:06] **You**: The plan is, but apparently focus and mochis and albatross.
[13:07:13] **You**: They're kind of struggling with plan at the moment.
[13:07:16] **You**: And they're ready yet.
[13:07:17] **Other**: And.
[13:07:19] **Other**: But then if they need.
[13:07:21] **Other**: Support from us.
[13:07:25] **Other**: Later then we are putting work on the roadmap to then have it on Monday put 10 changes again.
[13:07:32] **You**: Wet the precaution is our support that they need.
[13:07:36] **You**: Definitely a big, a big one.
[13:07:39] **You**: And anything else, it's this route Builder that.
[13:07:43] **You**: Is kind of a risky thing that may require something from, from us. And it's not clear to us, not clear to them.
[13:07:51] **You**: So we'll see. We'll need to be clear that wet duplication is happening, but for route builder, if they require something outside of what we already provides and what, what is discussed in scope for this accommodation recommendation event that we are doing if they need anything else, it might be not for cycle two and they will need to work around.
[13:08:21] **Other**: Okay.
[13:08:24] **Other**: That we are ready very much.
[13:08:25] **You**: Yeah.
[13:08:27] **You**: Over time, 40 minutes.
[13:08:29] **You**: Okay.
[13:08:30] **Other**: Okay.
[13:08:30] **You**: For life, I'm, I'm very hungry now.
[13:08:36] **You**: Yeah. All right.
[13:08:38] **Other**: Thank you.
