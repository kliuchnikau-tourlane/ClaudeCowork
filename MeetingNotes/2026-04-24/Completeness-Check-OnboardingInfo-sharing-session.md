# Completeness Check Onboarding/Info sharing session

**Date**: 2026-04-24
**Time**: 14:30 - 15:30

## Attendees

- minh.nguyen@tourlane.com
- Flamingo
- aliaksei.kliuchnikau@tourlane.com

## Transcript

[12:31:43] **Other**: Okay, yes.
[12:31:47] **Other**: And quick question from your experience if it has only two documents. Is it okay?
[12:31:53] **Other**: If the model will have only two docs? Is it fine? Of course. I mean, I think there's also very simple, let's say, in this case. Not sure how much examples the big model has. What I mean, I wouldn't miss case. You need just five and five. Yeah. And then based how different with. Looks like the model just have to decide. Okay.
[12:32:15] **Other**: It's invoice or it's whatever check quickly.
[12:32:21] **Other**: Or do you mean, Alexei, do you mean to model types doc types?
[12:32:26] **Other**: It has two dog types necessary of them are not used anymore.
[12:32:32] **Other**: Yeah, but and of those two talk tabs.
[12:32:36] **Other**: You have multiple PDFs examples. Yeah, of course. I think Marcus meant that.
[12:32:43] **Other**: Yeah, I understand.
[12:32:44] **Other**: Yeah. Sorry.
[12:32:46] **Other**: No more distractions.
[12:32:48] **Other**: Minutes back.
[12:32:49] **Other**: No. Oh, good. I think we are waiting for Christina.
[12:32:53] **Other**: Right? Maybe we definitely do not. She's busy in Quita. So we just record the session.
[12:33:00] **Other**: And.
[12:33:01] **Other**: She also accept the meeting. I thought she would join.
[12:33:14] **Other**: She's not joining. So okay, I will start.
[12:33:19] **Other**: One second.
[12:33:29] **Other**: Or maybe whoever created this meeting, can you start making notes with Gemini? So maybe it could be useful. I cannot do it, unfortunately.
[12:33:40] **Other**: Let me try.
[12:33:47] **Other**: Is it.
[12:33:48] **Other**: On? I think it's on.
[12:33:50] **Other**: Right?
[12:33:51] **Other**: I click on this ask Gemini.
[12:33:55] **Other**: There is like a button next to it on the left. Like take notes with Gemini.
[12:34:03] **Other**: I think I use terminal.
[12:34:07] **Other**: Okay. Seems like I cannot click on it.
[12:34:13] **Other**: AI not taking will be available next meeting. Not this one. Cool. Sorry, yeah, please.
[12:34:19] **Other**: All right. First of all, thank you everyone for joining this info session. Disclaimer is not a full picture of how Klami check is working, but rather than like a kind of brief overview. And I would try to sum up everything that is happening right now in a very high level and also try to keep us all in the same page. For more full information.
[12:34:50] **Other**: Feel free to visit the confluent page that was created by Marcus was very detailed. Thank you, Marcus.
[12:35:00] **Other**: All right, let's start. So let's circle back to one question. What is actually the completeness check? So the completeness check is actually answering one question that we receive all the required documents for the customer for a trip.
[12:35:18] **Other**: That means, for example, in a trip, we have a hotel, we have a car, we have a go city activity from ATI. That means we will need a hotel voucher, a rental voucher and also an activity voucher.
[12:35:33] **Other**: But in document dashboard, if we only detect a hotel voucher and a rental voucher, that means something is missing and this is a clear sign that we need a complete check to check whether we are having enough document.
[12:35:51] **Other**: Right. And now how does the current system work?
[12:35:57] **Other**: Because right now we already have a check in in place.
[12:36:01] **Other**: But it's not working.
[12:36:02] **Other**: As well as we expect it. It's creating a lot of noises and create a lot of false positive as well as false negative.
[12:36:12] **Other**: Which means it's not.
[12:36:13] **Other**: Super reliable.
[12:36:16] **Other**: So how does it work in internally?
[12:36:20] **Other**: Right now? It will wait 14 days before departure. And if the trip is supply confirmed in Salesforce.
[12:36:30] **Other**: Then.
[12:36:30] **Other**: We will generate a report.
[12:36:34] **Other**: During this report generation. We will, for each item in the trip.
[12:36:40] **Other**: We will check if.
[12:36:42] **Other**: There's any booking that is matching this item in the database by booking here. I mean the booking that we extracted from the document that we receive.
[12:36:59] **Other**: A booking that's matching an item on the trip is covered. If not, then it's missing. It's very simple, but that also means that it's missing a lot of cases. And if something is missing.
[12:37:14] **Other**: We create a case in Salesforce.
[12:37:17] **Other**: That's as simple as that.
[12:37:20] **Other**: And is missing a lot.
[12:37:23] **Other**: So here I use the word matches.
[12:37:28] **Other**: This item. So how does this matching logic work nowadays?
[12:37:34] **Other**: To keep it super simple whenever we import a trip to document dashboard?
[12:37:40] **Other**: That trip has name, UID, all kind of information. And we use that information to create kind of, kind of like a fingerprint for the item.
[12:37:50] **Other**: Called a hash.
[12:37:53] **Other**: And this hash is kind of like a fingerprint on each item.
[12:37:59] **Other**: To a trip.
[12:38:01] **Other**: So okay, now we have a trip with all item.
[12:38:05] **Other**: Fingerprint.
[12:38:09] **Other**: How do we actually generate this fingerprint depending on the item type? For example, rental, we can use directly the cuid or transport when use your ID, but for activity where there's no CUID, we have to make a combination of name, internal name, date, passenger. And as you can see here, it's not very stable because the name can be easily change or the extraction can be distorted a little bit. So this is not super reliable to, to use to use this way.
[12:38:45] **Other**: It's okay. Go back to the trip.
[12:38:50] **Other**: When we import the trip. We have all the item with fingerprint on it.
[12:38:55] **Other**: Right now. When a document arrived, we will have an AI logic to extract it into bookings, multiple bookings.
[12:39:07] **Other**: And then for this booking, this AI will also look into the trip that we already have. And then with fingerprint on it, and then we try to grab the matching fingerprint and we put it onto the booking.
[12:39:23] **Other**: So for the booking that we cannot find a matching item, there will be no fingerprint.
[12:39:31] **Other**: So in actuality, everything happened in one logic. So everything here that I show you is just an over simplified logic how it happens. But in actuality, we have a trip with fingerprint. And then when the dock arrived, everything happened simultaneously in on logic. And then we got it booking with fingerprint.
[12:39:52] **Other**: Return.
[12:39:54] **Other**: Right. So during.
[12:39:58] **Other**: This trip, no, not report generation, the one that happened 14 days prior to the trip departure. And when the trip is confirmed on Salesforce.
[12:40:11] **Other**: We look at the trip again.
[12:40:15] **Other**: We have a lot of items with fingerprint on it. And then we look into a database.
[12:40:19] **Other**: Where all that we have all the bookings.
[12:40:23] **Other**: With the fingerprint that was that we have.
[12:40:27] **Other**: That we do the matching logic beforehand. And then we see, okay, if this item, we found a booking with a matching fingerprint.
[12:40:36] **Other**: That means it is found.
[12:40:38] **Other**: If we do not find any booking with the matching fingerprint, that means the item is missing.
[12:40:46] **Other**: And therefore we will create a sales force case for it.
[12:40:51] **Other**: That's how the logic is working right now.
[12:40:55] **Other**: And the problem is it will produce false positive.
[12:41:00] **Other**: Yes.
[12:41:01] **Other**: Accep.
[12:41:02] **Other**: T.
[12:41:03] **You**: We have in this example, when you go back in just a.
[12:41:08] **You**: Step.
[12:41:09] **Other**: Yes.
[12:41:10] **You**: So item 1 and item 2, we found the match. So we know this document belongs to.
[12:41:17] **You**: This item.
[12:41:18] **You**: And for item 3, 4, we got like two documents.
[12:41:23] **You**: And we couldn't match them.
[12:41:25] **You**: Right to our trip.
[12:41:27] **Other**: For item three and four.
[12:41:28] **Other**: We do not have any document matching this item.
[12:41:32] **Other**: That's why it's miss.
[12:41:33] **Other**: Ing. But not yeah, but not because we don't have any document, but because we couldn't find a fingerprint.
[12:41:34] **You**: Okay.
[12:41:41] **Other**: On a booking.
[12:41:43] **You**: Yeah, yeah. So I guess like we have like two cases. When we have document.
[12:41:48] **You**: And its fingerprints don't match any of the items on our trip.
[12:41:54] **Other**: Yeah.
[12:41:54] **You**: Or we don't have document for this at all, right? In both cases we create a Salesforce case.
[12:41:57] **Other**: Yeah.
[12:42:01] **Other**: Yeah.
[12:42:02] **You**: And Salesforce case. We just say something is wrong.
[12:42:06] **Other**: Something is missing.
[12:42:07] **You**: Please fix. Okay.
[12:42:08] **Other**: Yes.
[12:42:09] **Other**: Yes.
[12:42:10] **Other**: We just simply looking for this fingerprint, this hash value in our database in, in all the booking and try to find the matching. But if we cannot find the matching, then is flat as missing.
[12:42:25] **Other**: But it could also be due to AI hallucination. I couldn't find a matching item. The name was slightly different or something.
[12:42:35] **Other**: Yeah.
[12:42:36] **Other**: So let's go to the problem. Why this is creating noises.
[12:42:44] **Other**: And problem. Firstly, false positive.
[12:42:49] **Other**: For example, we have an item in triplanner called the most often case. I can show you is an item called greet and meet. And they do not require a pdf. So that's. That means whenever we have a trip.
[12:43:08] **Other**: This item will always missing because it can never be found in any document.
[12:43:15] **Other**: Maybe let's go back to.
[12:43:17] **Other**: This part. Yes. There's no document that contains this item. Therefore, there's no booking that can be extracted. Therefore, no booking with fingerprint and therefore.
[12:43:28] **Other**: It is always missing.
[12:43:31] **Other**: Aleksei.
[12:43:32] **Other**: I'm sorry.
[12:43:34] **Other**: Is this statement general for all the troops or you mean some specific provider?
[12:43:39] **Other**: Because I analyzed a lot of pdfs. And I can tell for sure that meet and grip is present for Asian trails. It's present for amadeus. It's. I'm not sure if it's for go north, but this item specifically is fairly common to be included in the pdfs.
[12:44:01] **Other**: They charge us for us.
[12:44:02] **Other**: Yeah. Marcus, do you remember which provider is this grid and meet.
[12:44:11] **Other**: S something?
[12:44:12] **Other**: Again?
[12:44:13] **Other**: Yeah. So I just wanted to say that what I've noticed and that's what I wanted to bring up maybe on Monday when I'm finalizing the models.
[12:44:21] **Other**: That's like sometimes I've noticed that some dog types do not include other items. So they only focus on accommodation, activity, rental and item type other items is excluded or no, sorry, it's called, I think extra costs for us.
[12:44:39] **Other**: Right. Yeah. And that's why this item is not being extracted.
[12:44:43] **Other**: Very often.
[12:44:46] **Other**: Yeah. I mean, okay, let me first.
[12:44:50] **Other**: I just assume.
[12:44:53] **Other**: To help you answering a little bit, Aleksei's question probably greet and me disappear.
[12:44:59] **Other**: Right. There is probably something in trip planner.
[12:45:03] **Other**: That it's just not simply showing up in a PDF.
[12:45:07] **Other**: But I can imagine.
[12:45:15] **Other**: Was mentioned there as just one example. Let's say, but this means general oil falls positive cases. I mean false positive means we have a trip to another data for whatever item, let's say. And then on the documents where we expect that we have an expected booking for each of these items is just sometimes not valid, let's say, because not each item, what we have in general class site is in documents like extractable. And this can be, for example, here now, I think from the past, this was exactly like things. Yeah. This is what a german meant.
[12:46:09] **Other**: Yeah.
[12:46:10] **Other**: Thank you, Marcus.
[12:46:12] **Other**: Okay.
[12:46:14] **Other**: Can we move on or do you have any follow-up question Aleksei?
[12:46:19] **Other**: All right.
[12:46:20] **Other**: Let's move on.
[12:46:22] **Other**: All right. Are there possible causes for false positive? Can we transport item?
[12:46:31] **Other**: Six, if I remember correctly? I think this stat was provided by Marcus 67 of the transport item doesn't simply doesn't have any standalone document. So this also create quite some noises.
[12:46:49] **Other**: And for item with hashes.
[12:46:55] **Other**: Changes, the info changes in, in also not found in, in the booking.
[12:47:06] **Other**: Yes, Marcus.
[12:47:10] **Other**: One thing, more to this here because this is also an issue. We also upgraded some weeks ago to this new GPT 5.4 model. And this is much, let's say.
[12:47:22] **Other**: Stricter, let's say. Yeah. And the model has to compare the trip items to the values what it sees in the pdf. And this is stricter now. So let's bookings get expected, let's say, and sometimes, of course, because it's so strict and there's like name matching variation, let's say, or language is limited to different this booking, let's say is not extracted. So it's never.
[12:47:54] **Other**: Like Mitchell, of course, through the two planner item.
[12:48:01] **Other**: All right. But also the 70, the 67 missing doesn't mean.
[12:48:06] **Other**: No, no, no, I thought you're not joining.
[12:48:09] **Other**: No, I was joining, but just via mobile for the first minutes. And now I'm in my desk.
[12:48:16] **Other**: The 67%, I mean, it doesn't mean that there needs to be a dedicated document. It can also be that this kind of transfer train boats, they need to appear in the customer facing document. And then we would also call it as missing.
[12:48:30] **Other**: Yeah. So it's not only that we need a dedicated document, it's also okay if they are part of like an overall confirmation. But if this confirmation is customer facing, we need to have it.
[12:48:39] **Other**: Like we need to find the item, let's say.
[12:48:45] **Other**: Cool. And then for a second case where I mentioned the hash, the or the fingerprint change in the trip liner.
[12:48:55] **Other**: The reason for that is there are some item type, for example, activity, campground, extra cost. They are just very fragile because the fingerprint or the hash was compute based on the name or the date or the passenger's UAD. And for example, the name of the date can change, can be changed easily. And when they are changed, then the fingerprint also change.
[12:49:21] **Other**: And they are simply the problem of the problem of the hashes is not too stable.
[12:49:30] **Other**: Yes, Aleksei.
[12:49:32] **Other**: But these caches, they are inside documents dashboards, right? So if there is no CUID present in three planners and it's not a problem for us, right, since our hash will be the same.
[12:49:44] **Other**: But if CUID is present in triplan and it changes, then there it's problem.
[12:49:49] **Other**: Right? Yes, but I do believe that the COID is not change in chip planner.
[12:49:56] **Other**: The, the hash is in document dashboard. But then whenever they edit something inside a chip with fetches new. But if I understand correctly, so if you use a sha1 and if the information inside is completely the same, it should generate the same hash rate. Should not change.
[12:50:20] **Other**: But if they provide CUID for us, right?
[12:50:26] **Other**: Then whatever is changing, it's most 100% will change, right? Yes, that, that's why every item type with COID is very stable. The hash is very stable.
[12:50:35] **Other**: But then for item type like activities where there is no CUID, we have to compute. But to be honest, why is it a problem? And if we have a trip that has the same data and they updated it with the same data, then it's good. The booking trip item and booking are connected. So this link is not broken.
[12:51:00] **Other**: Yes. If they update it with the same data, then there should be no problem. But then there's a case where they change the date, for example, and that's the problem because we compute the hash based also on the date.
[12:51:18] **Other**: Or the name. Maybe they changed the name, for example. Or maybe because the name is slightly different because in trip planner everything may be in German, for example. But then in document, in the document, the naming might be written in English.
[12:51:37] **Other**: And some other languages, some other type of languages. That could be a problem as well.
[12:51:46] **Other**: Marcus.
[12:51:49] **Other**: Also not sure let's say how big is problem this way.
[12:51:56] **Other**: One thing is also maybe also like a smaller.
[12:52:01] **Other**: Part of the big area, let's say, but also sometimes we have to keep in mind that this trip generating sales force report is generated or started, let's say 14 days before departure. And usually then let's say bookings already extracted from the two commands. Also, I think this I think they do 21 days before departure already start analyzing these documents. Yeah. And to the quality checks and find, of course, when this hush finger and then just a state venue of this 24 21 days before departure. And then we have Mr. Mongh, of course, of extracted bookings then which we can match then to the items. And then of course after this, maybe something changes from the trip items. And then we rerun, for example, again for some reason, for some documents. Then, of course, there's a chance that the report does fly out. We have missing atmosphere, but then if you know running in some analysis, then there can be met, for example, not a big like problem here for now. I think we have other parts there to focus on more.
[12:53:39] **Other**: Yeah, just one question. Is this issue also because of the content IDs that change in triplana like the v2 issue that we had that it's like for like those four to two hours?
[12:53:52] **Other**: Another thing that was for the, I mean, each time, for example, log in to panels changing something documents dashboard information. Okay. There's something new. And then in this moment documents dashboard patches again. I will planner. And in the past we had this problem that, okay, we get the notification that there's something new. And then the fetch is payout in this moment. The fetch fails because of his for two reasons. It's never, it's not a topic. Okay.
[12:54:26] **Other**: Good.
[12:54:28] **Other**: All right.
[12:54:28] **Other**: Thank you.
[12:54:30] **Other**: Now let's go to the second problem false positive.
[12:54:34] **Other**: False negative.
[12:54:39] **Other**: Where, for example, we need an item called go vacation activity.
[12:54:46] **Other**: And then we need a voucher like go cd voucher. But then the booking with this hash was extracted from a generic voucher.
[12:54:57] **Other**: And therefore we flag it as covered, but then the actual go city entry pass is not missing.
[12:55:05] **Other**: And this is the hard case, actually, because we do not know how to, how to identify that we need this go city entry pass and the current logic is not covering that.
[12:55:19] **Other**: Okay, so the proposed solution is the advanced check.
[12:55:25] **Other**: Yes,
[12:55:27] **Other**: You go back to the example. Yes. To, to recap that this is the correctly.
[12:55:33] **Other**: So we have a virtual PDF, but then we also, there should have been a separate goal city pass PDF. Yes. Yes. That's the example. Okay. Yes.
[12:55:45] **Other**: So in this generic voucher, we have this item. We have this go city activity item and it was extracted and then it was marked with the hash and then, and then when we look at the trip, the item, there's a similar hash.
[12:56:02] **Other**: And then we mark it as covered, but then yeah, yeah, we should be looking at is a go city entry pass, which is not there. Yeah.
[12:56:13] **Other**: All right.
[12:56:15] **Other**: The proposed solution.
[12:56:17] **Other**: Advance check.
[12:56:19] **Other**: So we replace one question. Does any booking matches.
[12:56:25] **Other**: Do we have any booking that is matches?
[12:56:28] **Other**: This item with free questions?
[12:56:32] **Other**: The first one is who should send the document? For example, which supplier is sending the document?
[12:56:39] **Other**: Question to is what document are needed?
[12:56:42] **Other**: Voucher service list invoice? No, not invoice invoice will not be uploaded. But yeah.
[12:56:49] **Other**: And the third question is do those documents actually exist?
[12:56:55] **Other**: So to answer all three of the questions, we have multiple steps here. We have seven steps. So we get the supplier uid. We try to map it to a provider.
[12:57:08] **Other**: That's answering the first question.
[12:57:10] **Other**: And then we look at the settings in provider settings saying if the complaint is checked is enabled for this doc type and also this stock type is upload enabled.
[12:57:23] **Other**: Then we know what document might be needed.
[12:57:28] **Other**: And then to answer the last question. So everything is mostly the same with the logic that we're having right now.
[12:57:35] **Other**: We check the hash and then we try to find if the item is actually there.
[12:57:46] **Other**: And then of course with.
[12:57:49] **Other**: Quality checks and yeah, we can determine if the document is missing or not.
[12:57:57] **Other**: Yes, markers.
[12:58:00] **Other**: I mean one thing to make it work. Yeah, I think there's one part. I mean roughly snow last week. Yeah, let's say like the core logic before I had just like my head homes can work here. But the important thing is not mentioning here that for this historical like look up we have to look from the current crypto check. Also we have like two items and we have like maybe five activities. We have five accommodation and another example in this mode in this moment I want to check this one. I want to check for example now the trip item for tiny cars for example it's mentioning there. So and I have first to search, let's say activity will get before and this activity is stable. It has a stable UID and we have to look in past trip.
[12:58:57] **Other**: Items. How often we have this. Let's say we have this specific activity already maybe five times maybe 50 times let's say and the webinar trips. Okay maybe these are now 50 trips and in these 50 trips we have this connection with the hashes to the extracted bookings. I think it's been part 0.4 and 5. Although let's mention we have to check there in the past trips and then we now the past trips and where then starts.
[12:59:39] **Other**: I think important to know.
[12:59:43] **Other**: Alekseksei.
[12:59:47] **Other**: Yeah now I'm a little bit confused so let's have a situation so let's imagine that we have this American Tours International example which is a little bit more advanced than sunny cars. So specifically for ATI okay we have this from what I can see. So we have service list voucher go city voucher. I assume this is for New York Universal Studios Hollywood voucher. I assume this is for LA. Let's focus on this for my question is.
[13:00:23] **Other**: Like if my customers okay sorry our customer.
[13:00:27] **Other**: Go to New York.
[13:00:30] **Other**: And they don't have like a lay part at all.
[13:00:34] **Other**: They would probably receive so to be honest I'm not sure if they will receive service list or voucher. So let's say service list.
[13:00:43] **Other**: And they will receive go city voucher but from what I can see so the system will check that universal studios Hollywood voucher.
[13:00:53] **Other**: Should be present or not correct because from it says check provider settings.
[13:00:59] **Other**: And get provider upload enabled doc types so Universal Studios Hollywood voucher will be it's enabled for upload so it will be part of this new sophisticated check right.
[13:01:14] **Other**: And I'm curious like can you tell me how should I decide that for these trips Hollywood vouchers not needed but go city vouchers needed so that's where I'm a little bit confused.
[13:01:27] **Other**: Yes for for that particular case which is a complex case then this would not work out of the box. That's why as Marcus already mentioned we need an additional check which is the historical data check. So we look in the past for for example this for the trip with this Hollywood voucher for example there's a Hollywood route document.
[13:01:56] **Other**: So we now know that for this trip.
[13:02:00] **Other**: That voucher is needed and we should look for it.
[13:02:04] **Other**: Unfortunately I do not include that step in here since it was newly documented but I will definitely have it include in here changes other than meeting.
[13:02:19] **Other**: Marcus.
[13:02:21] **Other**: Yeah maybe quick up question and then hopefully it answer the question as an example now I have I have I have tripped and I'm in New York and I have an activity I want to be longer I don't need to wash off all this so this activity exists in the trip planner item as habitivity the name is empire stage building let's say a day three or something so we know because the type is activity and in the provider setting for I think the supplier is now ATI we have like this item types defined which also did some mixing area so for example now we have like five potential stock types because with possible items have activity inside for example Hollywood studios empire state bidding with if it's what we need and for example also not yeah something else but let me know yeah that's it for this for example now by state we have these three options because these three options are filtered by the activity filter and also upload an image for the customer to flex we check let's say when we have when we check is this activity existed already in past trips this what I meant between 0.45 yeah so we have to check for this particular activity because it's stable as it were activity like empire state activity is stable so we look into over past trips maybe we find just one we find 50 or 20 say what we have is trips and for each of these trips because hashing what Minh mentioned we know that we got some doctors bookings they extracted and then we know okay we have no 50 trips we for example have also 40 times an extracted booking with the same name let's say.
[13:04:50] **Other**: Bidding so this and this expected booking appears in the doc type empire state.
[13:04:59] **Other**: So we know that we expect for the current empire state item they expect that we also get an extracted booking for this empire state activity all of us and if at the moment we take the trip and we don't have.
[13:05:21] **Other**: This item then reflect this.
[13:05:25] **Other**: Maybe it's yeah hopefully it's clear oh yeah more questions but I will try to focus on two so question number one are we planning to address this historical look up in C2 or we are not focusing on historical lookup and C2.
[13:05:47] **Other**: Okay since we are not focusing on historical lookup C2 can you please again sorry explain to me then what problem are we solving because in my opinion so.
[13:05:58] **Other**: We were about to solve the problem with go city voucher be present on the trip?
[13:06:02] **Other**: And it seems it's like still not gonna be solved so what then what is.
[13:06:08] **Other**: Are we solving.
[13:06:11] **Other**: How we can say that this trip is like complete.
[13:06:15] **Other**: Yeah I think I think Minh think this is some of your next slides I think should do it now or you can do it now actually because I let me find this.
[13:06:32] **Other**: So here I try to generate this image using AI so what we are missing right now so before we just check the item with the booking now with the completeness check the advanced check we are adding the provided config into it we try to say if this doc type is needed or this what setting is needed for this provider specifically and also and what Marcus mentioned this historical evidence.
[13:07:08] **Other**: Does we try to look into the past as well to see if this item or for this type of item with this name how which document are usually expected in the past and then that is when we can define the final outcome whether we.
[13:07:32] **Other**: Which doc type is not wish of type which document is needed for for this trip and this part right here is actually open for discussion if we want to do this using historical event or we can use AI to kind of like determine if the dog type is sorry not type if the document is needed or not.
[13:08:02] **Other**: But yes, Marcus you can correct me if I'm wrong should I stay within a slide or should I kind of go back?
[13:08:14] **Other**: Sasha yeah yeah yeah coming back to the the example about the empire state building and so on so forth maybe maybe I miss some some part.
[13:08:29] **Other**: Of the explanation markers that you provided.
[13:08:32] **Other**: But we would still always take the.
[13:08:37] **Other**: Like the customer strip.
[13:08:40] **Other**: As a template.
[13:08:41] **Other**: So it's always because like I just thought about this not everyone is going to the empire state building Tourlane trip is probably a very unique experience and not everyone is based on this past trips like assumed that they would that they will go there.
[13:09:03] **Other**: Does distance to work what I see here the steps especially like.
[13:09:10] **Other**: Python like four and five.
[13:09:12] **Other**: Is this didn't that create also false positives in an example where someone explicitly doesn't want to do this activity?
[13:09:20] **Other**: Yes it will create false positive I think what what is shown here in the first step it will solve the case for sunny cars.
[13:09:32] **Other**: And probably first day where the duck type is easier for for ati is definitely the one of the most complex case and we do need.
[13:09:44] **Other**: Yes.
[13:09:48] **Other**: Alexei just did you know sorry like I moved my track button and started giving claps that was a mistake in sort.
[13:09:58] **Other**: Yeah no yes, this will still this the step that I'm showing right here will still create a false positive which is why we need a special handle for for a complex case like ATI, which is right now Marcuse is suggesting using the historical check.
[13:10:26] **Other**: And which is missing right here between step four and five.
[13:10:39] **Other**: Honestly.
[13:10:42] **Other**: Okay so historical data analysis as a solution will be discovered and researched in situ and we are planning if it's positive and you'll implement it in Q3.
[13:10:56] **Other**: Right.
[13:10:59] **Other**: I think it is a part of the call logic right now those are the question is do we want to have it already in C2? Because in the first iteration with Sonic we do not need.
[13:11:15] **Other**: We might not need this historical data check.
[13:11:18] **Other**: But I think it was a part of the draft that Marcus is implementing right now.
[13:11:28] **Other**: And then okay but historical data is a draft.
[13:11:32] **Other**: Okay but so I assume we are now trying to put the historical data analysis aside.
[13:11:39] **Other**: Right and like can you explain to me how it will work.
[13:11:46] **Other**: Just like this is algorithm can we take one example for example first voucher so assume you will we will solve it on very simple examples first the signing cards vouchers right can you take first your voucher as an example and just go through your algorithm maybe this could be more clear to me sorry for being annoying.
[13:12:08] **Other**: Oh good Marcus can you help me do that?
[13:12:13] **Other**: No problem yeah maybe I can share my screen because I also just created like images or some new product.
[13:12:22] **Other**: So hopefully everything is correct here so okay this screen we have to use this rollout provider based here and we have many examples which we can solve very easily that's for example first is very easy to solve and some of our.
[13:12:51] **Other**: Semicasts and for example here as a recap I think this is the ethic here what's here and this historical check yeah is just a finding I mean yeah the functions there of course I have this I already did last sprints analysis what data for example we have in the system and for some GMCs data is very good places this is not really like clear for example to give you now an example for I think it's.
[13:13:33] **Other**: Let me think which example is it okay first with a simple one for the sunny class one with a sunny kind of first you want the don't need this historical analysis.
[13:13:50] **Other**: Because we are on the we can just check okay if this firsty item is in the trip or if we have a handicar item in the trip.
[13:14:04] **Other**: Then we need always an extracted.
[13:14:09] **Other**: Booking for the dog type for this DMZ which is upload enabled because firstly has just one block type which is not enabled so we have to find.
[13:14:27] **Other**: Their match in this moment we check the trip and the same is not a sunny cars yeah which also could be writing yeah it's called provider based rules so it means we have a possibility then to specify approval by the specific rules and for example now for sunny cars this means that dog type it's called vulture and it's upload enabled.
[13:15:06] **Other**: And with this now we set to required that means each each we compare.
[13:15:14] **Other**: Have to have matched an extracted booking for this one yeah it's basically the same let's say logic which we have currently what we can define this now provider based and this rule can be applied let's say to each providers which we have a built system which has a small amount of upload enabled drug types there were item type filtering let's say reducing mong just to one I mean complicated say it's a function of course yeah but let's say we have.
[13:16:04] **Other**: How can I explain this.
[13:16:08] **Other**: Let's explain okay we have no sadika item on the tubeless side the type is rental yeah left side so on our side we have the dmz in the provider settings sunny cars and we have a dog type also called voidshaw but we have in the last weeks also configured there were possible.
[13:16:35] **Other**: Item types or the better render.
[13:16:37] **Other**: So on this whole then process that sail output is that we have just one possible drug type we have to we have to find.
[13:16:51] **Other**: And there we have to extract this item from and this we cannot compare to many many more.
[13:16:59] **Other**: Described them in maybe function is very difficult because that's really very.
[13:17:08] **Other**: Detailed let's say yeah but the first step we just need to provide our best rules with a written down somewhere and this already will cover many many ginsies that's the plan for the and for the next like this is political check this is after this then like just give us evidence what the historical data is saying.
[13:17:43] **Other**: Better.
[13:17:45] **Other**: Actually while I was trying to find an example I have a question too I realized that we have wrong settings for first t so first it says item types all but I assume for first t it should be extra cost so we can change that because I assume extra cost is mapped to other item type in tree planner right from what I remember.
[13:18:12] **Other**: There is no other item in documents dartboard document diagram decided to change the vocabulary and call it extra costs.
[13:18:20] **Other**: Okay so regarding first so I assume it's already working this way and like there is there will be new toggle required or not right but what would happen if we don't we don't have the first document.
[13:18:41] **Other**: Sorry if you don't have Tourlane same item in the trip but we received the first voucher does it cover this case as well?
[13:18:50] **Other**: Or no.
[13:18:51] **Other**: It will not flag if I understand correctly it will not flag because the it will always check for the item in the trip so if the trip doesn't contain an ism and but we receive an eim anyway then it will there will be no case right yeah.
[13:19:11] **Other**: Okay.
[13:19:12] **Other**: I mean of course now over the last it is of course we have no extracted data sphere and of course the moment then yeah when we generate this trip reporting to Salesforce we can also act like okay and also put this to put more information today like here.
[13:19:39] **Other**: Possible.
[13:19:41] **Other**: Candidate where we could have found maybe the expected booking but it's not analyzed because maybe first that the document is not classified and easily check if the trip has a job type which has has a very high catastrophic rate to the searched the doctor we need. So we can say it here's a very high chance that this booking what you search is inside this document but it's blocked because of the same we can do a person now for this no booking extracted problem because we know that KD received in this trip this book type but there is no expected booking there and this is very unusual let's say so we can also set the sales test for this because I mean mainly evidence show me this yeah but usually each document extracted booking usually there's a very thing where you know different but I think the main thing is in the moment now we do this check of course we can also improve the sales force case creation there so this will help then of course the agent to identify the problem much faster.
[13:21:15] **Other**: And what we want to share I mean I mentioned before that the first for example in sunny cars yeah and many more will be very easily covered by Ms. Hart Kodeck which I mentioned before we can define different drug types like acquired and for example now the next iteration then would be we need like another configuration because for hotel beds for example is also a little bit simpler with headbands has two kind of dog types.
[13:21:46] **Other**: One is vulture and the other one is virtual API. And with both uploaded to customer these two lock types and many many items we have in the system they are stable for this one as a solve this historical look up is very helpful in this case for the tablet one because items get booked very often the same ones. Yeah it's evidence but the evidence shows that for one item and this trip we extracted the booking from void shot and another one from the same item with booking was expected from the virtual one. So it's it's like there sometimes there's sometimes it's not stable. But this was something that was never rule. Yeah. We can just say for the provider hotel beds. It's okay when you find this extracted bookings in either of these two possible upload block types. And then with the tourist and this for example is also when playable to five or six more like us and the next rational we have maybe already maybe up to 70% on boarded to business check. And then after this starts studying the more complex ones. But yeah, this will also be more challenging than what things could to do with step by step.
[13:23:36] **Other**: This rollout.
[13:23:39] **Other**: Yes.
[13:23:39] **Other**: Hua.
[13:23:42] **Other**: I had a question regarding what you just showed Marcus. Maybe you can.
[13:23:48] **Other**: Share again your screen.
[13:23:53] **Other**: Because I did this with, let's say oh good no no like more like on the.
[13:24:04] **Other**: Version 3 provider rule thinks the wrong one. I think it's the wrong one. I had some had some more.
[13:24:14] **Other**: Examples here in one moment.
[13:24:17] **Other**: If you have one with I think it was sunny cars or whatever conversions here.
[13:24:26] **Other**: So I think.
[13:24:29] **Other**: Yeah yeah exactly so that one so the these provider rules current direction this.
[13:24:39] **Other**: Like I still like I still lack.
[13:24:45] **Other**: I still do not comprehend.
[13:24:47] **Other**: So.
[13:24:49] **Other**: This the Seneca's rental when it it's not there in a trip that this rule would not be applied right or not.
[13:24:59] **Other**: Or no will it be applied or not?
[13:25:02] **Other**: In the basis.
[13:25:04] **Other**: Always that we have to have of course these items and trip and all the main source we compare things to.
[13:25:11] **Other**: Or what do you mean okay but there are so many trips where we do not use sunny cars or where the customer says like I don't want to book with sunny cars will find like I would expect yeah I mean of course but as a car one when we trip item from sunny cast is normal trip and there's no need to check the computer's check for semicars as well structure from the trip items we have in the system each trip has items and each and one item has type for example a commendation rental.
[13:26:00] **Other**: Activity yeah and extra cost for example.
[13:26:03] **Other**: Yeah yeah and we know the name and we know the UID and the whole like like extraction the whole trip report generation everything is based on this source and nothing else can get checked and also now we have also where's the player your idea and oh yeah what would be needed to play a UID we have per item so we know per item which provider is very responsible and we know because the email got sent from with Me we can assign the provider we know the doctor we know when the possible upload documents and the filter also for this type of yeah because the triple items have these types and some weeks ago I think last I think assigned many many of these item types to our doctors are just layouts and we can filter also much better now let's say yeah and for example also they don't have to sign this at all this is just helpful information this option there is called possible items to find nothing else when there's no item defined then is possible that item rental activity is possible to get extracted from this.
[13:27:49] **Other**: But it's defined then just this type of items get extracted.
[13:27:58] **Other**: Okay just just to recap such a provider rule will only work if in the crip and also in the then extracted trip booking data whatever however we call it in document stash but it is there if it's not there then we would not care about this provider I understood it.
[13:28:22] **Other**: Next Christina.
[13:28:25] **Other**: Yeah sorry I have a question because I thought when we discussed this core logic that the historical kind of look up is included and maybe I missed something in the beginning because I was a bit distracted here but the historical lookup so you tried this out but it didn't work for example for sunny cars I mean I just was just reading through this now they are assigning can you like rephrase this in like your words and then only this provider role came kind of into play but now.
[13:28:59] **Other**: But as I understood we will still work on this historical yes only for some of us reason I mentioned we need first number a yes for the next we can say we do first the simple ones the simple ones are these like like Sandy cars are also simple ones I mean each provider we can handle but with this hot penur dual and this will already work for many many because many many.
[13:29:31] **Other**: Providers that we can break down with the help from these possible items to find we can reduce the block types we have to check and in these doc types we have to find the extracted booking beer so this will work as no historical look up in but we need this for other cases let's say we need this but this is future and for example now this one I mentioned is now hot because it's out with the so-called lookup that the documentation can occur in multiple book types but the post office has now that this logic with lookup is not needed we can just specify a rule that for example now for hotel beds we have to expect for this trip we check currently the Nuyen extracted booking in the vulture of the vulture API document this for example here is still not so lookup but really this we need for example also.
[13:31:00] **Other**: For our.
[13:31:01] **Other**: Cases for example this building example for example and this is always helpful for get evidence if you can specify rules for the proprietor very customized let's say of the future also because I let say much more things and the logic as well let's say I haven't already written here that we can look up historical data it's there but we don't need this yet let's say for the first initial rollout.
[13:31:44] **Other**: Okay but that means so it's not because I read this V1 V2 V3 as kind of incremental steps to cover other V1 MVP V2 is whatever and now we are working on v3 but it's more like like V1 is in place this is like one potential solution V3 will be in place soon it's secondary solution.
[13:32:07] **Other**: But we will never cover the e-ticket issue as Aleksei mentioned like if this activity is mentioned in confirmation I mean then the light check will not work because it will be found but the etiquette is still missing.
[13:32:23] **Other**: And also the v3 will not work so for this one for those cases in this case this will work with a historical lookup it will work won't work for example in case no sunny cars Sunny cars has no no stable CUID so each triple which we have very unique so we can't make like a historical checkup there because we have for each of these handicars item just.
[13:33:05] **Other**: Use one time yeah because it's not stable we don't have like evidence from other ones more stable ones for example this whole activities or whatever these are stable activities where is the Tolkien look up is working there I mean also do you have data for example there's an activity bush gardens I found this for example in maybe the name is I found this like in 50 trips.
[13:33:37] **Other**: With 50 trips we got extraction for this and the and the required doctype we need is voucher for bush vulture because in 50 times we could extract on this doctor the data and then we know we need this stuff this is when and this is already in place we were just not use it for the first suppliers or does this logic need to be built in cycle 2 as well?
[13:34:11] **Other**: This function is there the problem is we need this configuration because now we I mean I spent fennels uses for sunny cars for example it's the reason the main project say for the next weeks is we have to define this configurations provider based one okay that was actually my second question so if we say there are three three ways kind of how to.
[13:34:42] **Other**: Like three solutions how that we apply to kind of say if an item is completed or not then we would need to set up those rules and that was my question as well where we like that is not yet in place I mean then we would need to add per supplier maybe even.
[13:35:00] **Other**: Per item which kind of hey you can use the slide check to say if you are completed you can use you need to use historic lookup if you to assess if you are completed and here maybe those 50 suppliers they are just provider based rules which is kind of level on provider level.
[13:35:18] **Other**: I mean just to mention.
[13:35:24] **Other**: Goals I think to have these check for each DMZ what we have and we have many minimal examples they are this very version we work out work out in the just have to enable them for this ones and then after this we have already maybe maybe 50 to 60% already covered by this and then we need this historical to go from like like 60 to 70.
[13:36:03] **Other**: Or 80% because this tool insights then yeah we have to connect let's say to based on.
[13:36:16] **Other**: This game the rules.
[13:36:23] **Other**: Thinking like which kind of problems we will address first and like one of the main problems was indeed this kind of that we are missing the e tick it's like the additional e tickets.
[13:36:32] **Other**: That were maybe the same item is found I don't know in a confirmation or in an itinerary document then we are not flagging it as missing but for this we would need to have the historical look up in place because this is like the complex ones I guess.
[13:36:45] **Other**: So I think what I would need and I mean we will not solve it today but this was super helpful because also I wouldn't sure because you mentioned now with this example bush vulture this maybe is not could be also like handled by this one.
[13:37:05] **Other**: Because we have now on the left side we have bush guns voucher in the Klip planner data defined as type activity.
[13:37:21] **Other**: So when on the when we have a school next through the supplier UID they now okay this item is now in ATI and we filter each doctype by activity and then we have just one for example we have just one void shot.
[13:37:41] **Other**: We have multiple dog types which have these.
[13:37:48] **Other**: Item type activity inside.
[13:37:51] **Other**: And within the water of course that this push guns voucher x rate for booking have here in one of these if it's not there we know that it's missing.
[13:38:09] **Other**: Yeah in one of these these but one of these could be the confirmation as well and it's not enough if it's in the confirmation.
[13:38:24] **Other**: List you have this possibly therefore.
[13:38:29] **Other**: All types but within for example so you have to leave okay.
