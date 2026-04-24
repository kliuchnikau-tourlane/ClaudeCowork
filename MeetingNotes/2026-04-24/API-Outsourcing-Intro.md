# API Outsourcing Intro

**Date**: 2026-04-24
**Time**: 15:45 - 16:30

## Attendees

- nishant.tomer@tourlane.com
- pedro.alves@tourlane.com
- aliaksei.kliuchnikau@tourlane.com

## Notes

This is the doc that was sent out to all vendors: 

[https://docs.google.com/document/d/1KJW1z04Y4mCQ1owwAcVQlX2AkvdeHXR7We1of9M6Cb4/edit?tab=t.0#heading=h.qfpl1rdpavud](https://docs.google.com/document/d/1KJW1z04Y4mCQ1owwAcVQlX2AkvdeHXR7We1of9M6Cb4/edit?tab=t.0#heading=h.qfpl1rdpavud)

API docs: 

[https://api.11infotech.com/partner/tourlane-gateway-:-api-services#content_3](https://api.11infotech.com/partner/tourlane-gateway-:-api-services#content_3)

## Transcript

[13:45:59] **You**: Hello.
[13:46:01] **Other**: Hello.
[13:46:05] **You**: Last meeting of the day.
[13:46:06] **You**: What about you?
[13:46:09] **Other**: Meeting, yes work now, still have a couple of things I wanted to figure out.
[13:46:16] **You**: Oh.
[13:46:16] **You**: Yeah.
[13:46:21] **You**: Fun times.
[13:46:25] **Other**: Yeah, I am trying to remember how to write a recursive query.
[13:46:33] **You**: What?
[13:46:34] **Other**: I haven't done that in a while.
[13:46:37] **You**: I.
[13:46:40] **Other**: Just for the laws.
[13:46:42] **You**: Okay okay.
[13:46:44] **Other**: No.
[13:46:44] **You**: Always fun.
[13:46:45] **Other**: Yeah, yeah, yeah.
[13:46:46] **Other**: Well, I'm trying to match a bit things.
[13:46:56] **Other**: With the ancestor tree.
[13:47:00] **You**: They're working with.
[13:47:04] **You**: Traversing the tree.
[13:47:08] **Other**: Yeah, but at the same time trying to.
[13:47:13] **Other**: Then filter it by some other stuff. So I can get the answers to trees apparently from the cache.
[13:47:21] **Other**: Which I guess is another way to go, but I also want to use additional data points with this.
[13:47:29] **You**: Okay.
[13:47:31] **Other**: Yeah, Alan Nishant by now is thinking, can I get into the wrong meeting? Isn't this about API? So are these people talking about gardening or whatever?
[13:47:46] **Other**: I don't know. These discussions for some reason. I'm here to find.
[13:48:04] **Other**: A Friday afternoon meeting, so let's not prolong this more than we have to.
[13:48:10] **Other**: So in a gist.
[13:48:16] **Other**: I am most likely missing details since over this project.
[13:48:22] **Other**: But I can give you the context, which is kind of the focus for today's session.
[13:48:29] **Other**: And where we're going to start with the goals that we set out for this project.
[13:48:37] **Other**: And they are mostly in this document.
[13:48:40] **Other**: Let me already go ahead and share this with you.
[13:48:51] **Other**: So.
[13:48:52] **Other**: This is the document that we sent out to every vendor that we talked to.
[13:48:59] **Other**: This is where we define what we were expecting from them.
[13:49:03] **Other**: And what we would bring into the table.
[13:49:09] **Other**: Feel free to go through the document. But for today, the biggest point is really this one.
[13:49:17] **Other**: Every integration with a supply, is this readable?
[13:49:21] **You**: Good enough.
[13:49:22] **Other**: Okay. Every integration with a supplier API or adapter will expose a common API while internally handled the specifics of the supplier API.
[13:49:33] **Other**: Two additional points. One of them considered negotiable. Tourlane will provide the API specification for each adapter that each of the data should expose for internal use.
[13:49:44] **Other**: A common API defined by Tourlane. The key goal is that Tourlane will use the same API for all suppliers and that the API offers a standard data model as well as standard error responses.
[13:49:56] **Other**: So if you take this at face value without reading in between the lines, you and argue doesn't. We only have to integrate in one point with 11 input tags. So this is not cover it for us.
[13:50:11] **Other**: Kind of. But well.
[13:50:15] **You**: Yeah this negotiable.
[13:50:17] **Other**: Why is this negotiable?
[13:50:20] **Other**: This negotiable for two reasons? A no need to be picky if you already have a good enough API and good enough.
[13:50:29] **Other**: Carries a lot of weight here. The other one is to kind of also allow us not to be too strict if in the case of, for example, actually levonipotech, they would already have something that would really serve our purposes and they would be and would not be willing to have a separate custom API for us.
[13:50:48] **Other**: Now they have a product that we can use. It is a single API.
[13:50:55] **Other**: But it's not great.
[13:50:59] **Other**: So the concrete points that have caused concern are a lack of.
[13:51:06] **Other**: An endpoint.
[13:51:08] **Other**: That gives us hotel data.
[13:51:11] **Other**: They have an endpoint now because we asked them and they even implemented whatever Toha provided, which is pretty much what we have in our adapters today.
[13:51:22] **Other**: But they then put it on some other component. So it has a different host name as different authentication mechanism.
[13:51:33] **Other**: There are additional, there's some additional points regarding the data model of the API that there's fields that they just say, yeah, just use this for this thing as well. So you're kind of reusing the fields.
[13:51:47] **Other**: From an API design perspective as well. There are a couple of points. So this is the documentation. If you don't have it, I think, quality already shared this or it's in the pure ticket.
[13:52:03] **Other**: But yeah, you can find the structure.
[13:52:09] **Other**: So this content API is what they recently created for us.
[13:52:14] **Other**: Which again is still using the same structures that we provided.
[13:52:19] **Other**: Let's just get accommodations or apparently put hotels.
[13:52:27] **Other**: And then we go on to their own so-called booking API, which has a search, recheck, booking and cancel booking endpoints.
[13:52:39] **Other**: And there are a couple of things which are a little weird, to be honest.
[13:52:47] **Other**: And not really.
[13:52:48] **Other**: Following typical.
[13:52:55] **Other**: API design best practices and guidelines.
[13:53:00] **Other**: I have a couple of notes here. So as you can see, it is mostly just everything is a post. There's no such thing as a guest as a get.
[13:53:18] **Other**: Inconsistent on the use of properties.
[13:53:25] **Other**: And.
[13:53:27] **Other**: So here I think so far these are camel case.
[13:53:32] **Other**: Maybe had some which were also snake case.
[13:53:37] **Other**: Or no case at all.
[13:53:46] **Other**: Back.
[13:53:52] **Other**: That was sorry.
[13:53:56] **Other**: That was nut case. That was a nut case.
[13:54:08] **Other**: I am. Okay. Actually, I think the snake case may have been us.
[13:54:18] **Other**: Yeah. The naming and also the casing is. Yeah. Okay. Nake case was we brought it.
[13:54:28] **Other**: Which I mean, I would, I would still expect them to say, well, it's okay. We'll convert this to our semantics. It should make it a consistent, but whatever.
[13:54:43] **Other**: What else?
[13:54:46] **Other**: I think there are a couple of typos. I'm not sure if they are typos in the documentation or in the actual API. This I don't know.
[13:55:00] **Other**: And I mean just generally there are a couple of things here and there.
[13:55:05] **Other**: For me, I think I would definitely.
[13:55:10] **Other**: Prefer to get ahead of this.
[13:55:14] **Other**: And just tell them, hey, okay, so this is how this could look like.
[13:55:19] **Other**: Because if they're willing to.
[13:55:21] **Other**: Make some modifications and if they're willing and if we already identified some shortcomings.
[13:55:28] **Other**: I don't think it's going to be better to just wing it.
[13:55:35] **Other**: I will just move on. We'll continue and then we'll bump into the next one. And then we ask them to fix it. And then we move on, then we bump into the next one and it'll last them to fix it. And then they might say, oh no, not this time.
[13:55:47] **Other**: And then we're like, ah, that's unfortunate.
[13:55:53] **Other**: And again, if this is their product and it's not like even a separate installation or separate deployment for us, then there's a good chance that they will not deviate from this structure.
[13:56:08] **Other**: Because this may break their other customers.
[13:56:14] **Other**: So this is.
[13:56:17] **Other**: State of things.
[13:56:22] **Other**: And I think that was it.
[13:56:24] **Other**: So.
[13:56:24] **You**: Pedro can you share this link to the page you're looking at because I can't find this Tourlane Gateway API.
[13:56:33] **Other**: Okay, let me.
[13:56:37] **Other**: Depends on the credentials that you're using.
[13:56:42] **Other**: Let me.
[13:57:00] **You**: This I can see.
[13:57:04] **Other**: Need to sign up with TL gateway as a username.
[13:57:11] **Other**: April.
[13:57:12] **You**: Jason ca I know.
[13:57:15] **Other**: No, no, that's, that will be, that will give you the one without the new endpoints.
[13:57:24] **You**: Okay yeah because this is.
[13:57:30] **You**: The credentials that lodges shared can you share the other things.
[13:57:35] **Other**: Yeah, sure. Let me try to.
[13:57:41] **Other**: Also quick head wrap around situation.
[13:57:47] **Other**: So right now we have started implementing against this spec.
[13:57:55] **Other**: And we have.
[13:57:57] **Other**: Also for some reason related to either spec or something else. We have also stopped for some reason.
[13:58:05] **Other**: Now, what's the current status?
[13:58:07] **Other**: Like, are we still.
[13:58:09] **Other**: Are we still going to implement things or are we going to talk to them about something?
[13:58:17] **Other**: So the figure.
[13:58:24] **Other**: I'll share the thing later. So as far as I know, we are still in Tola, still working against this API specification.
[13:58:36] **Other**: And so here what kind of fail was the proper context? So Toha was not aware that they were expected to, we would review their API. And if it wasn't great, then we would provide an API.
[13:58:53] **Other**: Specification. So this was, this sent over didn't happen. So, and I just went along and okay, this is just like any other supplier. I'm just going to write an adapter that talks to the cpi.
[13:59:09] **Other**: And then just going through those motions. So this is, this is what's been going on so far. So we already have some.
[13:59:17] **Other**: We already have some.
[13:59:21] **Other**: Some work done. And I'm not sure where that's the whole discussion regarding the other field is.
[13:59:33] **Other**: So again.
[13:59:36] **Other**: Revenue for tech said, yeah, no, just use that other thing. Reuse a property pushback. So you know this is not great. And this is going to lead to confusion.
[13:59:48] **Other**: So this part I'm not sure where it is right now. They have been communicating over teams, I guess.
[13:59:58] **Other**: I'm not part of that conversation.
[14:00:03] **Other**: Yeah. Okay.
[14:00:06] **Other**: And.
[14:00:07] **Other**: So level infotech right now.
[14:00:11] **Other**: Is waiting for us to test this spec.
[14:00:15] **Other**: For like integrate this and like give us give them feedback.
[14:00:18] **Other**: Right? If, if this is good or bad or whatever.
[14:00:21] **Other**: Well, again from their perspective, it's a done product that we just need to integrate with.
[14:00:26] **Other**: It. What's been happening is that we have requested a few changes by now.
[14:00:32] **Other**: And they have been mostly accommodating.
[14:00:35] **Other**: So.
[14:00:40] **Other**: Why isn't this working?
[14:00:43] **Other**: So I think yeah, no, this is the booking API.
[14:00:46] **Other**: Uh, no this get accommodations. We requested it.
[14:00:51] **Other**: New bases.
[14:00:54] **Other**: We asked for them to, I think we asked them, we asked for them to send their own mapping. They did. But then I think Robert said, no, I'll actually send both and they also do that.
[14:01:08] **Other**: So again, they are been willing to make these modifications.
[14:01:16] **Other**: I just think it's better to just.
[14:01:19] **Other**: Have a deeper review, look at what are the less ideal things and then just say, okay, this is how we would prefer to do it.
[14:01:33] **Other**: And other than yeah, do a little bit more. Oh, this is not great. Do a little bit more. This is not great. Do a little bit more on this. Not great.
[14:01:44] **Other**: If part of that thorough review is to actually just test the API. Sure. Have at it.
[14:01:52] **Other**: But I guess we could do something different.
[14:01:56] **You**: Okay then what's our next step our next is maybe we do thorough review of what they provided.
[14:02:06] **You**: Our concerns and complaints about it.
[14:02:10] **You**: And decide if we just give them a kind of comprehensive list of things to correct in the existing API.
[14:02:18] **You**: Or we say okay we appeal to this clause in the contract that we actually want.
[14:02:25] **You**: Approach it a little bit different here is our API.
[14:02:30] **You**: Kind of spec that we need.
[14:02:33] **You**: So I think we have like these two options right now.
[14:02:36] **You**: Right.
[14:02:37] **Other**: So, so far quite a recommended not to pull out the contract right away. Again, forthcoming with these changes and the fairly fast return.
[14:02:50] **Other**: So yeah, I think this is just streamlining the whole thing.
[14:02:57] **You**: Yeah so in our main issue right now is that we do this very fractured tiny changes they're fixing it but it kind of can drag forever.
[14:03:10] **You**: And.
[14:03:10] **Other**: Hopefully not. But I can imagine some additional back and forth.
[14:03:16] **Other**: I think it's definitely going to be more expensive if we do this later.
[14:03:21] **Other**: Than up because then it's for, it's annoying for them and it's annoying for us.
[14:03:26] **Other**: What I also fully expect is that they actually won't just create an entire new service for us.
[14:03:33] **Other**: They'll just put this thin layer on top of their existing API.
[14:03:38] **Other**: But there it's up to them.
[14:03:41] **Other**: To figure it out. If it breaks, it's on them.
[14:03:44] **Other**: If because in this state, if it's if it breaks, it's like, oh, you're the one using our API incorrectly.
[14:03:53] **Other**: So this is this principle of distrust and lack of clarity and transparency on where responsibilities and why.
[14:04:05] **You**: Okay can we then.
[14:04:09] **You**: Maybe I'm sure Monday Tuesday.
[14:04:14] **You**: Gather things that we're not happy with about the current API and maybe kind of figure out the difference between what they provided and what we want.
[14:04:26] **You**: So we can negotiate with them better.
[14:04:31] **Other**: We can, but I'm guessing Nishant would like a bit more time to go over the API.
[14:04:40] **Other**: Yeah, I will.
[14:04:42] **Other**: Try to create like sort or brief feedback document about why.
[14:04:48] **Other**: We don't want to continue with this or whatever.
[14:04:54] **Other**: Yeah, I mean, there are.
[14:04:58] **Other**: Like of course the syntax problems regarding casing and all these things.
[14:05:03] **Other**: And then.
[14:05:05] **Other**: As Pedro is saying.
[14:05:08] **Other**: Like overridden fields.
[14:05:12] **Other**: Carrying multiple meanings and stuff.
[14:05:14] **Other**: Which is.
[14:05:16] **You**: Yeah this is a significant issue.
[14:05:21] **You**: Like.
[14:05:21] **Other**: I mean.
[14:05:22] **Other**: So the problem is not even that we cannot figure out the meaning. The problem is even if we do, even if we map out all the meanings and we start using them correctly.
[14:05:32] **Other**: Since this is an existing piece of software they have.
[14:05:37] **Other**: Any change they make to this piece of software in future for whatever reason.
[14:05:43] **Other**: There are very high chance that they're going to fuck something up because of exactly this scene.
[14:05:48] **Other**: And there are multiple meanings. So at any given point of time, you can map out everything. But when you try to change things.
[14:05:57] **Other**: I mean it's inevitable. They will screw up something.
[14:06:04] **Other**: So.
[14:06:06] **Other**: That's the primary problem with overridden things that it's very difficult, very difficult to maintain them properly.
[14:06:14] **Other**: Even if you take a lot of. In any case, yeah, I will try to.
[14:06:22] **Other**: Review the API and like I will also take a look at what alla is doing.
[14:06:28] **Other**: And discussions and yeah, I will maybe try to prepare a short document.
[14:06:35] **Other**: Ary. And so I pulled up the conversation that Tol has shared. It's in that revenue for tech implementation slack channel so you can look it up there.
[14:06:47] **Other**: But Tol pointed out that I noticed that there's no supplier ID field in the search and other endpoints. I think this should be required for you to correctly route the request to the correct supplier API. They say, yeah, put the supplier ID by using the parameter rate.
[14:07:04] **Other**: On the search request.
[14:07:17] **Other**: That makes sense. I mean.
[14:07:25] **Other**: Could be worse. They could say, well, send the supplier ID via pigeon.
[14:07:31] **Other**: ID, a called rate in I language. Like what is there? What is the scene here?
[14:07:40] **You**: Overall this says that they are kind of a bit careless with how they approach apis they're kind of just.
[14:07:50] **You**: Ready to hack.
[14:07:52] **You**: And if we are to integrate with them seriously we need to establish really strict policies and strict kind of standards that they cannot just.
[14:08:04] **Other**: I can already, I can already imagine them screwing up like some their other customers.
[14:08:12] **Other**: In trying to change things.
[14:08:15] **You**: Yeah.
[14:08:16] **Other**: Yeah, I'm pretty sure.
[14:08:18] **Other**: Because it makes no sense. Rate is being used supplier ID and then whatever code paths they are going to change, it's going to affect their other customers for sure.
[14:08:30] **Other**: Okay, that's shouldn't be our concern. Yeah, but in future we will be the customer and someone else will.
[14:08:43] **Other**: So I find these signals a bit troubling like you. So this is why I think.
[14:08:52] **Other**: Just.
[14:08:54] **Other**: Winging it and saying it'll be fine.
[14:08:57] **Other**: I mean, it will be on us. If later it's not final, it's on us.
[14:09:02] **Other**: Because we knew what we were getting into.
[14:09:06] **You**: Not in in the commitment that yeah we committed to them and no matter what we are integrating with how they what whatever they provide us right now we are in a test period when we actually.
[14:09:18] **You**: Carefully check how much can we rely on them.
[14:09:22] **You**: And before we trust them before they demonstrate that their stable platform that can provide what we need.
[14:09:31] **You**: We won't migrate many things to them.
[14:09:34] **You**: So this is also kind of don't expect that we are just okay blindly migrating we are carefully evaluating at the moment our drop to say all goods we trust we are sure that this works or no things are not working as we expect it or something like that.
[14:09:56] **Other**: So I think we also may be raising the fair aspect, which might be within the operations realm.
[14:10:04] **Other**: We'll have to cross that bridge when we get there.
[14:10:07] **Other**: At this point in time.
[14:10:11] **Other**: We shouldn't really care how they do it as long as they do it.
[14:10:17] **Other**: Unfortunately.
[14:10:21] **Other**: By accepting the current API.
[14:10:24] **Other**: It is accepting that contract as well.
[14:10:28] **Other**: And this is what I would say.
[14:10:29] **Other**: No. We shouldn't accept that contract. We should define a new contract.
[14:10:34] **Other**: It is very possible that it's just that the product is aligned with a slightly different business model.
[14:10:42] **Other**: Which is not exactly what we are getting into right now.
[14:10:46] **Other**: Maybe they're more used to what customer, one supplier maybe, or just selling suppliers to other people and not necessarily all of them through their product or they do this in like a piecemeal. I don't know.
[14:11:04] **Other**: But if we see that it doesn't really fit then and they are willing to make modifications, might as well say, this will look so much better. If they then want to reuse it for their own product, have.
[14:11:18] **Other**: Added.
[14:11:23] **Other**: So yeah.
[14:11:24] **Other**: Like from the operator on the operational side, when something breaks, we'll see how they tick.
[14:11:32] **You**: Okay.
[14:11:33] **You**: Good.
[14:11:34] **You**: All right folks I actually put some blocker for us on Monday but I think it's like too early for us to have it on Monday I will just drop it for now.
[14:11:44] **You**: We can catch up asynchronously for now.
[14:11:48] **You**: We will sync with stalha and then we decide if we need to catch up all together and discuss our finding that Nishant and Talia will provide then from that point we decide who writes to them request.
[14:12:02] **You**: What so I'll be also assisting here.
[14:12:08] **Other**: Sounds good. Just I want to make to ask call outs first.
[14:12:13] **Other**: If we go and say that and well we should be honest there as well.
[14:12:23] **Other**: If we go to tough providing and suggesting the API design that we worked on last year.
[14:12:33] **Other**: Then.
[14:12:36] **Other**: This might problem the wrong way.
[14:12:38] **Other**: Because the endpoints that we requested recently.
[14:12:42] **Other**: Is also has a different format.
[14:12:46] **Other**: So they'll say, wait, didn't you just say, tell ask us to do this endpoint and now you're asking us to do this endpoint, but differently.
[14:12:56] **Other**: Fair point.
[14:12:59] **Other**: S.
[14:13:02] **Other**: So just to say we already requested something, they did it and then we're going to say, hey, this actually could be better this way.
[14:13:12] **Other**: We can find a way to.
[14:13:16] **Other**: Best message better.
[14:13:18] **You**: This part that we actually requested.
[14:13:21] **You**: Can you share please with Nishant so he knows like the trail of our discussion with them.
[14:13:30] **Other**: The endpoints to get hotel.
[14:13:33] **You**: Yeah so what was it like requesting email or.
[14:13:40] **Other**: This was between them and Toh.
[14:13:43] **You**: Okay yeah then you should maybe.
[14:13:46] **You**: On Monday catch up with tal to know exactly like what was the discussion so we built up like from there not from length.
[14:13:56] **Other**: And this is where, that's what I meant with there was no real handover for Tor. So you just saw, okay, well, I guess this is going to be like an adapter. Let me just you propose the same thing we have in the adapters. So it's the same endpoint that we have in the existing adapter API.
[14:14:14] **You**: Okay.
[14:14:15] **Other**: So that this what we what Nishant and I worked on last year was redesign.
[14:14:22] **Other**: Where we would improve a bit on the on the existing adapter API.
[14:14:29] **You**: I'm pretty sure we can kind of convert them into something more okay we have another iteration that works better than what we initially proposed.
[14:14:39] **Other**: Last point I wanted to raise not strictly related to API, but they're a tile has also been complaining about some communication gaps.
[14:14:51] **Other**: So I don't know talk to Claudia see what's your plan. Should you give a good suggestion?
[14:14:56] **Other**: To maybe just use a spreadsheet to communicate with them on all the topics that are open.
[14:15:03] **You**: To have visibility into what they answered what they didn't right this was like the issue.
[14:15:08] **You**: Right.
[14:15:08] **Other**: Yeah, because if you ask for things, they'll come back to and forget about the other two and you need to continuously quote them to answer.
[14:15:20] **You**: Yeah.
[14:15:21] **You**: We can organize that.
[14:15:24] **You**: Good.
[14:15:26] **Other**: Yep, well this was the last point. So from Monday I can try to document the points that I was bringing up because right now there's only just loose notes.
[14:15:37] **Other**: So it's a bit more structure.
[14:15:38] **Other**: D.
[14:15:40] **You**: Then please share with us your complaints your concerns about EPA we have things written by in the chat.
[14:15:49] **You**: And we'll catch with telhau on the communication and maybe he has more concerns and you shouldn't.
[14:15:56] **You**: Yeah we work from there.
[14:15:58] **You**: Next week.
[14:16:00] **Other**: Yeah, sounds good.
[14:16:03] **You**: Good all right.
[14:16:05] **You**: Then if we don't have anything else we can finish earlier.
[14:16:10] **Other**: All right. All right. Have a nice weekend.
[14:16:14] **Other**: Bye bye.
