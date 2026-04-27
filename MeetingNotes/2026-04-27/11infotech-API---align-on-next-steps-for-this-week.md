# 11infotech API - align on next steps for this week

**Date**: 2026-04-27
**Time**: 14:30 - 15:15

## Attendees

- nishant.tomer@tourlane.com
- talha.mahmood@tourlane.com
- aliaksei.kliuchnikau@tourlane.com
- pedro.alves@tourlane.com
- claudia.tita@tourlane.com

## Transcript

[12:30:28] **You**: Hello.
[12:30:30] **Other**: Hello.
[12:30:45] **You**: All right.
[12:30:46] **You**: I can hear you.
[12:30:50] **You**: All right, hello, guys.
[12:30:55] **Other**: Claudia.
[12:30:56] **You**: Claudia can also join us.
[12:30:58] **You**: Yeah.
[12:31:01] **You**: So.
[12:31:05] **You**: We think on certain Friday.
[12:31:09] **You**: Together with Nishant, Claudia's Pedro.
[12:31:13] **You**: Right. And since you're back and you've been more involved into this topic, right? We wanted to.
[12:31:20] **You**: Catch up and think today. Nishant feels like it's actually better for us to think already.
[12:31:27] **You**: No, no need to delay the discussion. Right. It will help us to align and actually plan the next couple of days better.
[12:31:36] **You**: So Nishant, maybe you can update us on what you guys looked at already.
[12:31:43] **You**: And where we at at the moment.
[12:31:50] **Other**: Just like one minute summary.
[12:31:54] **Other**: API is.
[12:31:56] **Other**: Below average. I mean, it's not a secret anymore.
[12:32:01] **Other**: And one thing which I didn't know earlier, just got to know.
[12:32:06] **Other**: Today.
[12:32:08] **Other**: Is the communication part.
[12:32:12] **Other**: So, I mean, I showed me some screenshots of the communication, this, that, and it looks very discouraging.
[12:32:21] **Other**: So, I mean, the language itself.
[12:32:25] **Other**: Is very difficult to understand.
[12:32:29] **Other**: And then.
[12:32:31] **Other**: When you understand the gist of what they are trying to say, like the attitude and as Tala said, like the technical competency and leads there, it's very discouraging. So from my perspective.
[12:32:46] **Other**: Yeah, I mean.
[12:32:48] **Other**: When we are talking about like good standards and everything, I don't think they are the right partner to begin with, first of all.
[12:32:55] **Other**: Second of all, that's a, that's a like a very.
[12:33:02] **Other**: Out of the left field.
[12:33:03] **Other**: But like keeping to the main thing.
[12:33:07] **Other**: Yeah.
[12:33:07] **Other**: I mean, the current API, yeah, it's working. We can make it work, blah, blah, blah. And if we try to push for a new spec.
[12:33:17] **Other**: I don't have confidence that they will make or do a good job of it.
[12:33:24] **Other**: Because.
[12:33:25] **Other**: I mean, from their communication, it feels like they will start, what do you call.
[12:33:29] **Other**: Like walling us somehow, like deflecting and trying to like minimize scope or something, something like that.
[12:33:37] **Other**: So I don't think they will do a good job, like a good faith job of new spec also. And we'll have to check and be involved.
[12:33:47] **Other**: On a very low level, I feel.
[12:33:49] **Other**: If we want to make a good job out of it. So that's, that's my understanding. And then, I mean, if we do want to.
[12:33:58] **Other**: Try them out, then that's a separate discussion, I guess.
[12:34:05] **You**: And in the current communication, is it just hard to understand.
[12:34:13] **You**: Or it's really that they are not following up on things we want.
[12:34:19] **You**: They're not doing what we ask.
[12:34:22] **You**: Like.
[12:34:23] **Other**: So both.
[12:34:25] **Other**: So, I mean, the language itself is very difficult. So it takes a lot of effort to understand what they're saying.
[12:34:32] **Other**: They are like grammatical mistakes every few words.
[12:34:37] **Other**: And phrasing is all wrong and stuff like this.
[12:34:40] **Other**: And even if you do understand it.
[12:34:43] **Other**: I mean, they have already like outright rejected or sets. Things are not possible. So for example.
[12:34:50] **Other**: They're saying that forget looking endpoint.
[12:34:54] **Other**: They can, can. It's not yet there, but they can.
[12:34:59] **Other**: Provide us with raw responses from their supplier systems.
[12:35:03] **Other**: And if their supplier don't have any responses or something, then it's up to us to deal with it. So they are basically proposing that they will act as a proxy instead of a gateway or whatever.
[12:35:16] **Other**: Which is they are not good.
[12:35:20] **Other**: And then there is one more thing about authentication and stuff where they are saying it's not possible with the current setup.
[12:35:26] **Other**: And things like this.
[12:35:28] **Other**: So, and I mean, I would like to add to this a little bit. So from what I have seen is generally we ask them something and initially they just say like it's not possible. And then we would have to, you know, follow up with them. Okay, why is not possible like today, this example that Nishant gave initially, I asked them like why is there no endpoint to fetch the booking? And he said it's not possible. And they gave some very ambiguous reason.
[12:35:59] **Other**: And then following up on that, then they said like, okay, we can forward you the raw response from the supplier API. And then I told them like this is the entire point that we are trying to mitigate because this is the entire point of the Tourlane gateway that you give us like a standard request and response structure and we just do that and we do not have to deal with the supplier complex API complexities. And then eventually he was like, yeah.
[12:36:29] **Other**: We can, some suppliers will give us some data. Other will not give us these certain fields and then we can just pass on that to you whatever we have.
[12:36:41] **Other**: So.
[12:36:43] **Other**: I mean it's always like you have to like push back to get them to do something or some changes. And even at the end they do not do it like quite thoroughly. So for example if we take for example error handling.
[12:37:02] **Other**: Topic. So their API practically has no error handling. So if I do not send any field or maybe just send like empty fields instead of returning proper error responses, their API crashes and returns like 500 errors.
[12:37:17] **Other**: So I mean it's like yeah full of problems in that aspect as well.
[12:37:26] **You**: These crash, if we say that why do you crash? They say it's like by design, we just don't, don't handle any of it. We are just, just a proxy. Or they say, oh, thanks for finding a bug.
[12:37:41] **Other**: I don't know this is because they deployed it on Friday and today the first day we are trying out there actual API before this they were just they had given us access to another system which had similar apis, but not the ones that we needed exactly. So and today so they have so what I have seen is like they have just taken into consideration the very like utmost happy path they can think of because in their docs they have given like a sample request body and if I just paste it as it is then it works if I make a little bit of changes in any of the fields then most of the time it crashes.
[12:38:26] **You**: Okay.
[12:38:28] **You**: Okay. But this is like for a new API endpoint that they develop.
[12:38:33] **You**: Right.
[12:38:33] **Other**: No that one that one actually is I think the best out of all of the endpoints because we told them how to develop it and we gave them respect for it as well and that have actually error handling as well. These are the endpoints that they already have had then their existing system and they are just deploying those for us and making certain modifications.
[12:38:58] **You**: So this sounds like actually requesting them to do something and telling them how it should look like how it should work.
[12:39:06] **You**: Works better than just relying on what they have.
[12:39:10] **You**: Go get it right.
[12:39:14] **Other**: Yeah.
[12:39:15] **You**: Okay.
[12:39:17] **You**: So, yeah.
[12:39:19] **You**: Then.
[12:39:21] **You**: Words are our options now.
[12:39:24] **You**: So apart from.
[12:39:27] **You**: Kind of.
[12:39:29] **You**: Pausing and looking at all of their API endpoints.
[12:39:34] **You**: And giving them precise specs that we want.
[12:39:39] **You**: To work and how they should behave and what kind of test cases should be that they pass and Etc.
[12:39:51] **You**: Are there any other options for us?
[12:39:59] **Other**: I don't think we have to pause and look at everything.
[12:40:07] **Other**: So we already have a good idea of what we what we want, what we need. We've been working on it for a few years by now.
[12:40:16] **Other**: Last year we took the chance to redesign to see how we could improve on it.
[12:40:20] **Other**: So we already have the good notion of what we need and what we want.
[12:40:29] **Other**: From what I.
[12:40:31] **Other**: From what I heard right now some things were kind of expected like communication gaps we identified this, we raised this.
[12:40:43] **Other**: The idea was that it might hurt a little bit at first but eventually we'll then get into the state where it will just be business as usual and communication won't be as frequent or necessary.
[12:40:58] **Other**: So we could just go with the flow.
[12:41:03] **Other**: The thing that I actually am a bit more concerned is reluctance to for modifications when from the start this was okay we want a custom solution.
[12:41:19] **Other**: So getting into a contract to build a custom solution which would obviously leverage their existing product.
[12:41:27] **Other**: That we know that they had that product and that's one of the reasons why we wanted to move forward with them because by far the ones that demonstrated sound knowledge about the industry.
[12:41:45] **Other**: As well but this one is broader because it's not strictly hotels.
[12:41:51] **Other**: Not saying that, oh no, it's not possible. No, we can do that. Oh no, here's the raw response. This is a complete breach of what we were aiming for and what we discussed.
[12:42:04] **Other**: Yeah.
[12:42:05] **Other**: But for the.
[12:42:10] **Other**: Specific one for the get booking status.
[12:42:14] **Other**: I think what they mean, what I understand from their message is that they are saying that they will.
[12:42:23] **Other**: Give us the booking status, but if it's failed, they don't map the errors and they give us the row response.
[12:42:33] **Other**: That was my understanding.
[12:42:36] **Other**: So basically the day forward the error from the suppliers. So in case, I don't know, the booking is failing because you are trying to put too many packs in a room or I don't know some random example. You would get also this row response.
[12:42:50] **Other**: To send to the supplier if you need. So that was my understanding. I don't understand why this would be the case because there should be the ones that are also monitoring the field bookings. But that was my understanding here.
[12:43:02] **Other**: That for the get booking status they are committed to giving us the booking status.
[12:43:10] **Other**: But if the book in status is failed then they will forward the role response.
[12:43:15] **Other**: Of the supplier system as well.
[12:43:21] **Other**: But yeah, it's not relevant.
[12:43:23] **Other**: Now.
[12:43:25] **Other**: So first of all just one thought.
[12:43:27] **Other**: So.
[12:43:29] **Other**: The wording booking status is, I mean is interesting.
[12:43:33] **Other**: Because booking status is binary like not binary but it's just a string status, right? Failed success, whatever they can easily do it. That's not what we want. We want a bit more. We want a grouping object or something. So that's and also like.
[12:43:52] **Other**: If we failing a booking and they're giving us raw response, they might be indicating that about the create booking endpoint.
[12:43:58] **Other**: That if we are trying to create a booking and then it fails and then they will give us the raw response for cat booking specifically.
[12:44:07] **Other**: They actually mentioned like I saw the communication.
[12:44:11] **Other**: They mentioned that.
[12:44:13] **Other**: They will if they can do it, they don't have it yet, but they can do it. And the way they will do it is they will just pass through the response from the supplier to us as it is.
[12:44:22] **Other**: And it's up to us to deal with that.
[12:44:25] **Other**: I mean yeah that's not going to.
[12:44:28] **Other**: Work.
[12:44:31] **Other**: Actually it's interesting like their whole product is about api gateway to these guys. And I think spread team itself like this adapter interface.
[12:44:42] **Other**: We expose like a much better interface as such.
[12:44:45] **Other**: Like it's our internal thing.
[12:44:47] **Other**: But we have a very consistent working gateway to suppliers.
[12:44:53] **Other**: And if some someone is like publicizing a product like that and they are saying we'll just give you raw get booking blah blah blah. We don't have all these things. I mean that's very.
[12:45:04] **Other**: I mean what is this thing? This is not even a product. What are they even offering?
[12:45:15] **Other**: Which I think is a fair point. So I see a few options ahead of us. One.
[12:45:25] **Other**: We are very transparent to say this is not been signed up for.
[12:45:31] **Other**: And this is where I and we if we go down this path then better. We should definitely review exactly what we signed up for just in case something was lost between the goal and what was actually presented as a contract.
[12:45:48] **Other**: The other way around whatever who presented the contract for what.
[12:45:54] **Other**: And then we can work together to have better looking where design API.
[12:46:08] **Other**: There's also a good chance that some of these are a bit communication issues.
[12:46:15] **Other**: I mean.
[12:46:18] **Other**: It's just how it goes. If you cannot communicate well with someone you're always going to have a harder time to align on whatever and you will always default to what is safest.
[12:46:34] **Other**: Which is why I also think that a more transparent and clearly defined goal and more robust communication strategies will help us for both sides.
[12:46:53] **Other**: Clearly there's also obviously another option that we made a terrible mistake.
[12:47:01] **Other**: And I mean we obviously went through all the steps that we felt were necessary to make sure we weren't going into such a situation. But could be the case at which point better to pull the plug now.
[12:47:23] **You**: Yeah. And before we pause the plug, we need to really have.
[12:47:28] **You**: A solid foundation for that and we need to make sure that we actually follow up.
[12:47:33] **You**: And do the necessary steps and make the proper checks and then have like really.
[12:47:39] **You**: Kind of well founded decision.
[12:47:43] **You**: Right. I wouldn't say this is what we are just doing.
[12:47:47] **You**: Right. That's the first two things.
[12:47:50] **You**: That's communication is not very structured if, if it's kind of not super structured. They're getting lost in it.
[12:47:57] **You**: We need to.
[12:47:58] **You**: Find a way to or make it like very transparent and clear for what we want from them.
[12:48:06] **You**: And how they reply to everything so we can check the communication if it's kind of fixable.
[12:48:13] **You**: And second part, yeah, the technical part. Right. So in this communication, we need.
[12:48:19] **You**: To express our concerns.
[12:48:24] **You**: And clearly.
[12:48:26] **You**: Make a list of things that we want and.
[12:48:30] **You**: That need to be changed. Right. And then get their answers to all of them before we kind of make a plan.
[12:48:39] **You**: And I think like this is like what Nishant and data you can prepare this list.
[12:48:45] **You**: Kind of quite comprehensive probably.
[12:48:47] **You**: Right.
[12:48:48] **You**: As much as we have.
[12:48:51] **You**: And yeah, we think we will think on how to deliver these methods and how to organize this kind of that things are.
[12:49:00] **You**: Not lost in translation as much as possible.
[12:49:06] **You**: Make it.
[12:49:08] **You**: A1 English language readable.
[12:49:11] **You**: Or something like that. I don't know.
[12:49:17] **Other**: We also need to really think about what is the cost of not like.
[12:49:24] **Other**: Not moving forward with this.
[12:49:27] **Other**: Project and not.
[12:49:30] **Other**: Continuing.
[12:49:35] **Other**: The plans we had for APL sourcing.
[12:49:38] **Other**: From all the partners we talked with, they were still like by far.
[12:49:43] **Other**: The lowest cost.
[12:49:45] **Other**: And this of course comes with the trade off of.
[12:49:49] **Other**: More difficult communication.
[12:49:51] **Other**: A lot of back and forth.
[12:49:54] **Other**: But they are committed.
[12:49:56] **Other**: Or very involved into making this work and this also.
[12:50:02] **Other**: Yeah.
[12:50:04] **Other**: I mean why sorry why are we going with the lowest cost thing? I mean.
[12:50:09] **Other**: It's their lowest cost and it's actually showing very often. Yeah, for sure but they are the lowest cost while also having an idea of.
[12:50:19] **Other**: How the MCs are working right what this they already had a good infrastructure in place right so they have some mapping service that they are using. They have some for error handling reporting. So they already had a good infrastructure. The second vendor that we talked with, it was basically just buying an engineering time and having to onboard them through everything.
[12:50:46] **Other**: And also.
[12:50:49] **Other**: I don't know I think double the cost.
[12:50:51] **Other**: Of this one. So with this one it's not only that was the cheapest but it's also as Pedro mentioned before as well.
[12:50:57] **Other**: Is the one that had the most industry knowledge.
[12:51:02] **Other**: I would definitely focus on not just the cost. They were in fact the only ones that were really ticking all the boxes of what they were looking for. They cover accommodations, they cover activities.
[12:51:16] **Other**: They cover transport. They have the industry knowledge. They were already behind some of the other APIs that we use.
[12:51:27] **Other**: And they were willing to do customizations.
[12:51:30] **Other**: So obviously the cost.
[12:51:33] **Other**: Also helps.
[12:51:35] **Other**: But it was not, oh this one because it's the cheapest. It was oh this actually checks all the boxes.
[12:51:43] **Other**: But yeah, it's also a fair point. Well you get what you pay for.
[12:51:49] **Other**: And this is why I think instead of hoping to eventually get a more premium service with a budget cost and it might be more helpful to get ahead of the curve and try to.
[12:52:08] **Other**: Direct this where we wanted to be.
[12:52:16] **You**: I think like looks like this is.
[12:52:20] **You**: Solid sequence.
[12:52:21] **You**: That we can do. Right. I don't feel like we should just accept and go with the flow because, yeah, it already bites us.
[12:52:31] **You**: If for us it's important at this stage to really validate that they provide exactly what we want and we can trust them at least like some Integrations with us.
[12:52:44] **You**: Without that, yeah, we shouldn't continue.
[12:52:47] **You**: So let's not.
[12:52:49] **You**: Invent invest like really into just speeding up onboarding.
[12:52:54] **You**: So yeah, now we need to get this straight.
[12:52:59] **You**: Okay.
[12:53:00] **You**: So.
[12:53:01] **Other**: There are two things here that I would like to discuss. So I see two paths forward. Now.
[12:53:12] **Other**: Like stop everything and we sit down at 11 infotech and we send them exactly what we need and what they need to implement for us.
[12:53:20] **Other**: The disadvantage of this is that.
[12:53:24] **Other**: It might still maybe not work.
[12:53:32] **Other**: After they invest significant time into developing it for us.
[12:53:47] **Other**: Sorry Claudia this is the I've heard this argument of it but I'm still struggling. I don't see this as if we asked them to do this they will spend more time.
[12:54:03] **Other**: It's either them or us.
[12:54:05] **Other**: Someone will do have to do that work if they do it.
[12:54:10] **Other**: Then we have a more stable product moving forward.
[12:54:14] **Other**: If we do it.
[12:54:16] **Other**: Then this communication issues will pop up a lot more.
[12:54:20] **Other**: Because this is the thing.
[12:54:22] **Other**: So we have the paper contract which I'm also pretty sure it was a digital one but in this we and the API we will form a different contract on how technically our systems communicate.
[12:54:37] **Other**: And by saying okay this is the API that we would like to work with. We are saying.
[12:54:43] **Other**: You need to make sure that you send us the information this way.
[12:54:50] **Other**: And we need to make sure that we send you information that way and any any shenanigans that have to happen in between will be then clearly within each other's realm. Otherwise I would imagine that they can figure out their API a lot faster than we can.
[12:55:09] **Other**: Because every time we hit a wall we have to go and ask them.
[12:55:13] **Other**: There's a five hour gap in their communication issues and whenever they hit a bottleneck and say, oh wait a minute oh how do I make this into that?
[12:55:24] **Other**: They are working together so no communication issues and they can clear get where things are coming from.
[12:55:32] **Other**: There is this one more phrasing I want to put like for the whole situation.
[12:55:37] **Other**: So from the communication like what what I have heard.
[12:55:41] **Other**: It seems like that they are not actually they don't actually want to give us a good.
[12:55:49] **Other**: Engineer well engineered gateway. They just want to do enough for us to shut up and basically pass their gateway.
[12:55:57] **Other**: So they're like okay you have this problem. Okay. Okay. I see I see let me fix this.
[12:56:02] **Other**: So they are not actually curious like oh we are pointing out these basic structural problems and they are not asking.
[12:56:10] **Other**: That's good point. Can you help us or some? I mean I don't know they see more like okay we just need to just close this deal somehow and move on.
[12:56:19] **Other**: I agree with Nishant also to add to this.
[12:56:21] **Other**: Yeah from what I have seen yeah they have the business domain knowledge because they clearly are working in the same domain. But I think what they lack is the technical acumen because as Nishant said also another concern that I have Pedro is that if we give them the new APIs back and we tell them okay these are the new contracts.
[12:56:47] **Other**: We need this structure all that we would still have to do a lot of hand holding.
[12:56:53] **Other**: For them.
[12:56:54] **Other**: To implement this new thing.
[12:56:56] **Other**: For us because they would be like a lot of time and it will take a lot of effort on our end. It's not like simply we would give them the spec and they would implement it for us because this is I am saying this based on our conversation with them in the past like two three weeks. So for even because even for minor things they keep coming us to us and they think like this is not possible or this is like this this is like that so there's like too many excuses very trivial stuff.
[12:57:31] **You**: Yeah, that's why I think like we are solving both things, right? So like the technical requirements and communication.
[12:57:39] **You**: So we need to kind of.
[12:57:42] **You**: Try to make it more strict and visible for, for all of us. This kind of trace of communication.
[12:57:51] **You**: What we request, but they reply so we can actually properly escalate it kind of technical abilities not there if communication is on wrong level like our expectation from communication if they can fix it. It's also kind of.
[12:58:11] **You**: A point to kind of.
[12:58:14] **You**: Make decision further if we continue or not.
[12:58:17] **You**: But I think like we need to try.
[12:58:20] **You**: To gather what we want and try to express it clearly and follow up on their answers.
[12:58:27] **You**: With our decision. So yeah, we're already kind of signed this contract. We cannot just.
[12:58:33] **You**: Say.
[12:58:34] **You**: No.
[12:58:35] **You**: We need to invest more time into it.
[12:58:40] **You**: And.
[12:58:41] **You**: Yeah.
[12:58:42] **Other**: Pretty sure that should be.
[12:58:42] **You**: Let's follow the process.
[12:58:45] **Other**: Pretty sure there might be some exit clauses.
[12:58:48] **Other**: But.
[12:58:50] **Other**: I want I want to bring up a couple of things that Nishant and Talha mentioned.
[12:58:59] **Other**: So I don't think it will be very productive to so many final play from from their side.
[12:59:06] **Other**: It's clear they are used to writing software in a given way and that is not the most.
[12:59:13] **Other**: Amazing one.
[12:59:15] **Other**: But it's also good to kind of look at our own adapter API and say oh ours is much better.
[12:59:24] **Other**: But not really the best API out there.
[12:59:29] **Other**: And if we identify that they have that lack of technical knowledge.
[12:59:38] **Other**: But they have been willing to make some changes.
[12:59:43] **Other**: Then yeah let's let's help them get better. And so the so that we can get all the nice things we were expecting.
[12:59:52] **Other**: And we can help them also get better and have a better product. So win-win for both.
[12:59:59] **Other**: And finally I think you're right. I think if we see that this is because of lack of technical knowledge then even if we give them a very straightforward API to implement they might still have questions and require help, hence the hand holding.
[13:00:19] **Other**: But isn't that what you're already doing right now?
[13:00:25] **Other**: So we're not are we avoiding to do the exact same thing that we are already doing?
[13:00:35] **Other**: I think this this can be salvageable if we see that there's goodwill.
[13:00:52] **Other**: Alexei just one question. A moment ago you're saying that we want to collect.
[13:01:01] **Other**: Issues we have and you want to discuss with them first.
[13:01:06] **Other**: Before presenting a solution that I get it right.
[13:01:12] **You**: So we, as I mentioned, right, we have technical and communication.
[13:01:17] **You**: Things. I, I would like to actually go with communication.
[13:01:21] **You**: When we decide how we communicate it and how we make it straightforward and give them the full.
[13:01:28] **You**: Kind of.
[13:01:30] **You**: Spec full list of things that we want to solve them. Right.
[13:01:33] **You**: So we need to decide how much it's going to be. Is it kind of just tiny bits? Or we just give them the entirety of we cannot accept this API. Please write this one here as a spec. I'm not sure what it's going to be.
[13:01:49] **You**: And I think this is the kind of gray area for me. What exactly.
[13:01:55] **You**: Do we want to communicate to which group? Because they have an API. We can request modifications to this API.
[13:02:03] **You**: And provide a list. Or we can say, okay, your API doesn't work for us.
[13:02:08] **You**: Too many things are wrong. Here is the, the things we want. Right. And one of these two options we need to communicate to them next.
[13:02:17] **You**: I don't think we need to do anything else in, in the meantime.
[13:02:28] **You**: And which of these two?
[13:02:30] **You**: Yeah. Nishant and Talha. I expect you guys to can make a better judgment on.
[13:02:37] **You**: Which path is kind of meaningful.
[13:02:40] **You**: Having kind of our interests in mind.
[13:02:51] **Other**: Claudia you're presenting something a little.
[13:02:56] **Other**: Yeah, so I was having a look at the initial proposal and part of this was that they will provide us the specification. So it was never the other one way around that we will provide so we need to see what this means and how open they are to this. I was also checking so just for the gateway implementation for 30 days we are expected to pay 22,000 so we are paying a lot of money for this gateway module.
[13:03:19] **Other**: Actually.
[13:03:27] **Other**: 2000 I would say we are not getting that much value in return.
[13:03:35] **Other**: Even if we are paying like 22,000 is too much.
[13:03:47] **Other**: So my understanding that we would still like to.
[13:03:52] **Other**: See if.
[13:03:55] **Other**: What they say about our areas of improvement.
[13:04:03] **Other**: Not to not to interrupt it but I don't want to like sound like I am what is important for me is to get this work right.
[13:04:11] **Other**: And we can talk with them.
[13:04:13] **Other**: And Karen has a very good and close relationship with their CEO. We can negotiate, we can go back and as I said before they were really committed to making this work.
[13:04:25] **Other**: And they were quite proactive. So every time they committed to delivering something they did.
[13:04:30] **Other**: Commit all the deadlines, they delivered everything on time. They did make all the changes.
[13:04:37] **Other**: So from my side going back to them and say hey this is the poor documentation of what we need. Please implement it for us. There is a chance there is an additional cost.
[13:04:54] **Other**: You have to tell me what is the best option now.
[13:04:57] **Other**: And which one you would like to take.
[13:05:00] **Other**: And then I will find the way to communicate it with it with Karen and of course with you as well.
[13:05:11] **Other**: We can be since we are the ones paying for it and we are still at the beginning right. So this is exactly what this phase is about as well. So if things are not working we can go back and say no.
[13:05:24] **Other**: But I also saw in your page Nishant that you wrote that I have some specific preference for one of the options is actually not the case.
[13:05:33] **Other**: So you are the ones that should be decided how the API should look like and work.
[13:05:40] **Other**: And I will do my part of aligning with 11 infotech and getting it done. But from my side there is no strong preference for any of the options. I don't.
[13:05:51] **Other**: Care about the speed. You know we can enable agent reels next week, but if nothing is working then what's the point? Right. So let's do the things right should be your call now to decide if you want to do the full API or you want to test this one.
[13:06:09] **Other**: I mean this one is.
[13:06:11] **Other**: Not good.
[13:06:13] **Other**: Yeah. Also I think with the current API we would have like once we go live we would keep running into issues daily on a daily basis and then we would have to go back and forth quite a lot with them. This is not working or this is a problem. And then we again have the same communication issues. So if we want to like if you are as Claudia said if we are commit if they are committed and we are committed to work with them in the longer end, then maybe it makes sense to have like a stronger base.
[13:06:43] **Other**: From the get go and then maybe we should try giving them the complete spec and then see what they say on that.
[13:06:55] **Other**: Yeah. Also, I mean.
[13:06:58] **Other**: Like these things about get booking error handling all these things they came after the document was written and my initial impression was that okay in good faith we could make it work and blah blah blah.
[13:07:08] **Other**: But I mean the more I saw like actual text and things.
[13:07:14] **Other**: I don't think this is a very.
[13:07:19] **Other**: Useful idea anymore and in I mean just just like from a technical perspective right so we have this API from security. So if we are going to transfer it we should have at least as good as an API. Right. That is first thing.
[13:07:32] **Other**: And ideally at a lower cost if not the same. So if you are just going to increase the cost for semi pain not going to work.
[13:07:39] **Other**: So technically we should have a better API. Maybe at the same cost and even if the cost is a bit higher of the API is better then it's fine.
[13:07:49] **Other**: But in this case the current ABI is much worse. That is first thing.
[13:07:53] **Other**: Second thing is.
[13:07:55] **Other**: They are I mean they are entertaining us because of our relationship right currents.
[13:08:01] **Other**: And contract and money and whatever.
[13:08:04] **Other**: But they are not willing to I don't think they like in their heart they are willing to do like actual structural changes we want them to do that. I mean we're also in more calls with them and yeah it's not the clearest but I would not assume that you're not willing to make changes for us. Okay.
[13:08:27] **You**: Yeah. I also agree that we, we may kind of have a feeling, but we need to kind of try and see it, like with strong confidence.
[13:08:37] **You**: That this is not happening. This is like definitely a sign of bad faith.
[13:08:43] **Other**: But.
[13:08:44] **Other**: In all the meetings that we have had with them, so we actually also do not we have not spoken with any of the developers.
[13:08:51] **Other**: So it's either I think the CEO like he knows about the industry, he knows about like what data and what API and all that, but he's not like technical right on the implementation layer. Right. And we haven't even talked to a single developer who can or I also get the same impression that the people replying in the shared channel with us are also not technical because when sometimes they say okay we will get back to our team and ask them why is the technical why aren't the technical people not talking with us directly. Maybe that would help make things easier right and reduce this intermediately layer that we have.
[13:09:34] **You**: Okay. This is like one point that we include into this. Right. So we, we're not, not happy with the API endpoint. And here is the spec.
[13:09:44] **You**: That we want. And we are not happy with how communication happens. Right now we feel like our direct contacts are not the technical people. We need to talk to and we need more direct connection and kind of.
[13:09:59] **You**: More close communication with Engineers.
[13:10:03] **You**: So at the end, this second point that we include into request.
[13:10:11] **Other**: Was also part of the recommendation that we wanted to.
[13:10:18] **Other**: Have that kind of point of contact.
[13:10:28] **Other**: Yeah I mean I mean stupid kind of.
[13:10:34] **Other**: Communicator so I mean in my mind I mean.
[13:10:38] **Other**: Like it's sort of a smell test.
[13:10:41] **Other**: I know we want to be nice and not rude or whatever.
[13:10:46] **Other**: But I don't think we're going to get any value out of here.
[13:10:51] **Other**: That's very honest feedback.
[13:10:58] **Other**: Yeah because I mean it's it's because I mean we deal with systems like we deal with our suppliers every day right and they whoever the developers are they are going to deal with the same suppliers.
[13:11:10] **Other**: And we understand the limitations of our current supplier systems.
[13:11:16] **Other**: I mean what we are going to ask and whatever I mean they they don't have even like basic engineering practices in place.
[13:11:25] **Other**: Error handling this that and I don't think the culture wise like it's just this smell that culturally also they don't care about these things they're like okay it works it works and just make it work somehow.
[13:11:37] **Other**: And be with it.
[13:11:39] **Other**: So.
[13:11:39] **Other**: Yeah, I mean if we again I'm coming to the question right so.
[13:11:46] **Other**: We do want at least as good as an API as we have and ideally at a lower cost or we want to better API maybe at a higher bus if we want these things and we don't want other stuff I mean.
[13:12:01] **Other**: This is not I mean we can we can spend like one more round.
[13:12:06] **Other**: But I think we are setting us we are setting ourselves up for like just a bit more confusing here yeah Nishant but I think that you might also just miss a bit of context right so actually part of the self sourcing project is also that they take over the maintenance work for the API and they do the support as well for for the ones that are connected including for bookings.
[13:12:37] **Other**: And actually also one of the points where we decided to go for revenue for tech is that they had quite.
[13:12:44] **Other**: Good reporting and monitoring tools from what we've seen.
[13:12:51] **Other**: So I would yeah I'm not sure.
[13:12:56] **Other**: Enough I'm not I mean this is not external communication I'm just looking at the whole scene from outside and yeah.
[13:13:05] **Other**: I mean fair I wish that we get somewhere good.
[13:13:14] **You**: Yeah. So let's try. Maybe they're just giving us freshman to, to train on us.
[13:13:20] **You**: And we can communicate and get.
[13:13:23] **You**: People who.
[13:13:25] **You**: Will solve these issues for us.
[13:13:28] **You**: If we escalated.
[13:13:30] **You**: Maybe not. So we need to try.
[13:13:36] **Other**: Yeah.
[13:13:38] **Other**: So we agree that the next step should be that we provide the AI specs to 11 infotech and we ask them to implement them for us.
[13:13:47] **Other**: I mean we also have to tell them why we don't want to continue with their current system right okay.
[13:13:52] **You**: Yep.
[13:13:53] **You**: So you guys can write why we don't want to continue and kind of adjust this back, make sure it's kind of aligning.
[13:14:03] **You**: Modern days of what we want to request.
[13:14:05] **You**: And then we.
[13:14:07] **You**: Once.
[13:14:08] **You**: We give this kind of summary, we can communicate it.
[13:14:13] **You**: Yeah.
[13:14:14] **You**: And we, Claudia Pedro, we can also look at what if this doesn't work? What are our.
[13:14:22] **You**: Options to bail out?
[13:14:24] **Other**: Yeah.
[13:14:25] **You**: Into the country?
[13:14:27] **Other**: That's not going to be great.
[13:14:29] **You**: Yeah.
[13:14:30] **You**: Yeah.
[13:14:33] **Other**: Are you going to send them this news pack and tell them this news.
[13:14:38] **Other**: Do you want to break them these new.
[13:14:44] **Other**: Karen is on vacation when I needed him the most so he can already see like thousands of questions coming from this right.
[13:14:53] **You**: I can do that. I can kind of.
[13:14:55] **Other**: Now so what I would consider is just.
[13:14:57] **You**: Be with the medium.
[13:14:59] **Other**: Maybe short chicken which like the main sorry go ahead yeah so what I have in mind I will see maybe I have a short check with Karen because she's always available even if she's on vacation but yeah so I'm thinking about maybe just having a very short chat with Charlie and giving him heads up and also that they don't invest more on their end because I see also they are reaching out a lot of suppliers and also to kind of get a feeling of.
[13:15:32] **Other**: How open they are.
[13:15:35] **Other**: To.
[13:15:36] **You**: Okay.
[13:15:37] **You**: Yep.
[13:15:38] **Other**: Also to see if they are directly saying no.
[13:15:47] **Other**: I would also not wait until Monday so that would be like Karen is of next Monday so we would lose one week so I think we can try to really have a chat with Charlie.
[13:16:02] **Other**: Thank you Pedro you were also more involved or should we wait until it's back?
[13:16:10] **Other**: No you can just go ahead with it go we go ahead with it I agree the more we wait especially if they just went nuts and are reaching out to every supplier that they work with.
[13:16:30] **Other**: Let's just go ahead I can be part of the conversation to to help explain exactly what we want from the technical perspective.
[13:16:44] **Other**: Where do we see some some some shortcomings.
[13:16:50] **Other**: I'm not sure if I would trust myself to crafters the the feedback in a way that doesn't do doesn't harm the relationship but I'll try my best don't worry I'm sure that.
[13:17:05] **You**: We'll do it together. No worries.
[13:17:09] **Other**: Okay I will try sorry this is my what I think is important that we are aligned so if we know exactly what we're asking them then this this should be a non.
[13:17:26] **Other**: I think the primary challenge would be to convey to them why all these api standards are important to us like why error handling why all these things.
[13:17:37] **You**: Wait for, I would not kind of just.
[13:17:38] **Other**: Because.
[13:17:41] **You**: Start explaining from the get-go if they get back with this question, then it's kind of a different story.
[13:17:48] **You**: Like, I want to want to see such a question, like, firsthand.
[13:17:54] **Other**: Just from like experience they are not going to ask exactly this they are going to say but why don't you try it this way?
[13:18:01] **Other**: Because it it will work and it's like easy for us and easy for everyone and whatever whatever.
[13:18:07] **Other**: And we'll say no no we don't want to do it this way because this is this problem or that problem and don't worry about it we'll fix it this way we'll fix it that way this is how it will wait that's why.
[13:18:17] **You**: And that's why we are kind of fast inspecting what we want consistent API, but and not kind of random thing that can return anything.
[13:18:28] **Other**: I think I may have a good example for for what you're saying so if you look at their API it is it is not a rest API the way it's modeled it's more like an RPC API.
[13:18:44] **Other**: And I so generally speaking the best practices to have a rest API over http if you want to do RPC there are other frameworks for it.
[13:18:56] **Other**: However in the spirit of a tit for tat.
[13:19:02] **Other**: I wouldn't I wouldn't be opposed to continue with a RPC like design as long as it's consistent.
[13:19:09] **You**: Yeah. Yeah. This is more.
[13:19:11] **You**: Important. Definitely than medium.
[13:19:17] **You**: Good.
[13:19:18] **You**: All right, guys.
[13:19:20] **Other**: Okay I compile some notes on my review of my PI Nishant I haven't looked up to your document but it feels like you maybe have shifted it a bit your your your opinion on the matter so if you want to change anything now you're very well mentioned Tom.
[13:19:36] **Other**: I will take a look at it and I can share with you some additional notes that I have and then we can take it from there.
[13:19:46] **You**: Nishant, when you're done, can you please share with me directly because I have like 30 unreads threads today.
[13:19:54] **You**: And I wouldn't find your message otherwise.
[13:19:58] **Other**: Yeah it's in the 11 thingy channel.
[13:20:01] **You**: Thank you.
[13:20:03] **Other**: So I will share.
[13:20:04] **You**: Just ping me with the link when you monitor.
[13:20:10] **You**: Claudia.
[13:20:11] **Other**: Okay.
[13:20:15] **Other**: Then I will try to schedule some time with Charlie already.
[13:20:20] **You**: See you.
[13:20:22] **Other**: I'm not sure if we can still do it for tomorrow or Wednesday let's see.
[13:20:30] **Other**: Ready by tomorrow or maybe also I would I think could also be good.
[13:20:35] **Other**: To have checking with him and share this but only with him and not with his team.
[13:20:43] **Other**: Yes so just very small circle and then maybe when we go through everything he can tell us if he wants to add more people so because I found the call also a bit messy when he's adding a lot of people so I'd prefer to like hey Charlie let's have a short call to share some feedback with you without him adding like 20 people that are don't even know who they are.
[13:21:11] **Other**: So please please turn on the TV please yeah so maybe I will tell him that we want to have a check in with him we can still prepare some of the points but not spend one hour and go into too many details just give him our feedback.
[13:21:31] **Other**: Assistant so and then he can.
[13:21:34] **Other**: How to move forward and we can also get a bit of feeling on how he is to make the changes we request.
[13:21:46] **Other**: Nice glasses.
[13:21:55] **Other**: Okay.
[13:21:57] **Other**: Good then let's do that then Pedro please prepare your notes Nishant update your document if needed I reach out to Charlie I will also let you know when we can spend some time good thank you.
