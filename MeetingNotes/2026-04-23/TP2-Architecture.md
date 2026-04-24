# TP2-Architecture

**Date**: 2026-04-23
**Time**: 09:00 - 10:50
**Location**: PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]

## Attendees

- Silvia de la Torre
- Emil Azadian
- Thorsten Dietzsch
- Christine Berg
- Anna Semmelroth
- Ron Schmidt
- Edward Jones
- robert.wolf@tourlane.com
- Amanda Mcmicken
- Veronica Garcia
- aliaksei.kliuchnikau@tourlane.com
- claudia.tita@tourlane.com
- gregor.schmidt@tourlane.com
- pedro.alves@tourlane.com
- PR-20 HQ-2-Spain (10) [Camera, Google Meet, Mic, TV, Tablet]

## Transcript

[07:01:41] **Other**: Is affected.
[07:01:46] **Other**: Okay, I think we all have read decision document one from the comments. I have the feeling that was the least controversial.
[07:01:58] **Other**: I just want to go to the open comments and also basically explain the questions in general. Like the target architecture, I have separated the target architecture through the migration because as we have mixes in the past, it was a more challenging discussion as it should have been because there's less discussion about the target picture.
[07:02:21] **Other**: There are some open questions.
[07:02:23] **Other**: But I think we can align on the target architecture.
[07:02:29] **Other**: And this is what the first document is about.
[07:02:35] **Other**: What for me is really important to understand is that we basically reduce the two planar backend three.
[07:02:46] **Other**: Functionalities.
[07:02:49] **Other**: That we say the truth planner backend is responsible to store a trip, the inventory of a trip.
[07:02:56] **Other**: We say it took Pedro backend is responsible to have a root based modification of this trip.
[07:03:06] **Other**: It's the two planner backend is responsible to only store and mutate a trip.
[07:03:12] **Other**: Ensuring validity and consistency. It does not ensure if the customer likes the trip or not.
[07:03:19] **Other**: It just ensures that the trip is well consistent.
[07:03:24] **Other**: The last responsible for the two planner backend is actually orchestrational of basically external services and recommenders.
[07:03:33] **Other**: That means this was actually the one that was not obvious for me, but just to explain this, if we add an accommodation.
[07:03:43] **Other**: The trip planner backup is allowed then to call recommenders to basically create the incoming and outgoing transport lag and the two planner backend is allowed to call the pricing service to recalculate the pricing of a trip. That means any change can trigger multiple other reactions to other systems to get the information to make it valid and consistent again. And this is also part of the plan of responsibility. Everything else is in the target architecture, not part of the twin planner backend anymore.
[07:04:24] **Other**: I think we have all that this document.
[07:04:27] **Other**: If there are no questions, then I would go to the open comments.
[07:04:31] **Other**: And then in the end defining those looking into the open questions, because there are some elements that are still open.
[07:04:41] **Other**: To discuss. Basically, the one question is from Gregor from Pedro. It's about AI enablement. And he is right. I have wrote this one point, but this has actually two sides. So one thing is we want to enable Agentic AI and not encoding, but on behalf of the agent to do certain things. That means at the moment there is no way for energetic AI to really modify a trip. Except basically modifying the JSON and storing the whole truth as itself. This is something we want to enable by providing really dedicated modification options for this adjective AI. That means this is one layer that we need to enable.
[07:05:25] **Other**: That we can automate the work from the sales agent by assistant or identically on this side. There's a second side to this, which I just added as an or second site.
[07:05:37] **Other**: We also want to enable our developers to use a jet decoding in the planner packet. And this is the second goal for this. And this is at the moment where not really possible because we have a legacy code base with undocumented decisions with undocumented context and with some domain boundary split that it's also not clear even for humans. That means any AI coding has limitations.
[07:06:06] **Other**: And this is the second part that needs to be answered. I will update this to split this accordingly.
[07:06:12] **Other**: Pedro is your question answer.
[07:06:17] **Other**: Just quickly holds that knowledge. So what holds the knowledge that's currently undocumented here?
[07:06:24] **Other**: Is that Gregor? The code.
[07:06:27] **Other**: So it's in the code, but it's just not documented.
[07:06:31] **Other**: And implicit domain knowledge in the code.
[07:06:35] **Other**: Like there are cases.
[07:06:39] **Other**: And click on it. I think the biggest challenge in this regard is the fact that we have the split between the front end and the back end. And a lot of the functionality is actually implemented in the front end.
[07:06:51] **Other**: So if.
[07:06:56] **Other**: Looking at the back end code only, it will not understand how certain things work together.
[07:07:00] **Other**: And then on top we have the effect that agents are using what we've built and ways we didn't intend to. So even if you just look at the code, you will not necessarily.
[07:07:12] **Other**: Predict like be able to predict.
[07:07:14] **Other**: What the actual use cases are. So it's not just that it's split between two repositories. It's also in the agent brain, so to say.
[07:07:24] **Other**: And that makes this like an extra level of challenging for anything that tries to just look at the code and understand what's going on.
[07:07:32] **Other**: Yeah, actually like the true color is too flexible.
[07:07:36] **Other**: That sometimes when we make a change someone will complain because they work around doesn't work anymore.
[07:07:42] **Other**: And that's when we notice that there are unknown newspapers. And this is also like humans cannot catch up and then AI also has the same problems in this regard.
[07:07:56] **Other**: The next one, Christine questions and it's aligned also. Yeah, I think this was a longer thread.
[07:08:02] **Other**: In general, like if the booking status is part of this domain, I have this as an open question because I want to understand.
[07:08:12] **Other**: If the two planner two only covers the quoting phase or the quoting and booking phase. There are arguments in both directions, but this is what I want to have as an own decision.
[07:08:23] **Other**: Because it has consequences for different teams.
[07:08:26] **Other**: And it's just to be clear, it's not only about the booking statuses, it's also about the inventory that is actually booked to pie sets actually booked a DMC that's actually booked. There are also consequences on vouchers, documents and so on.
[07:08:39] **Other**: That at the moment are not cleanly separated between these two domains.
[07:08:44] **Other**: Like sometimes booking documents are uploaded on the Tour planner. Sometimes if they automate scanned on the document dashboard, they are handed in the document dashboard. And this is why the decision is important and needs to be documented and looked into both sides because it has positive constants, to be honest.
[07:09:02] **Other**: Just one more thing. The reason why Christine is tempted to build their own trip visualization.
[07:09:09] **Other**: Is also a consequence of this.
[07:09:11] **Other**: Because we have information that in the booking phase.
[07:09:15] **Other**: That we want to show to the customer and the truth planner is not has no fields to store this because they're completely irrelevant in the planning phase.
[07:09:23] **Other**: And now we even start thinking of recreating the trick with.
[07:09:27] **Other**: But what I'm saying is what I'm trying to say is this really needs to be discussed and decided once and for to make this conclusion because it has also implications then on this target architect.
[07:09:38] **Other**: Ure.
[07:09:41] **Other**: Maybe I'm misremembering, but from our discussions with the flamingo team, I thought we were already kind of 85% of the way there on the on this decision that we wanted there to be like a clear separation and that after a certain point, the state, the actual booking status would be owned by booking platform.
[07:10:03] **You**: Yeah, I have the same feeling. We had, like, main topic that was, like, unclear. It's like this post booking changes.
[07:10:06] **Other**: Perfect. And it will.
[07:10:13] **You**: To the trip. This was, like, the main thing that we needed to settle how it's gonna work.
[07:10:19] **You**: Everything else was quite clear.
[07:10:22] **Other**: Then easy document, but I want to have this decision documented with also like the consequences of this decision that this is clear.
[07:10:30] **Other**: Not sure we were just talking about the same thing.
[07:10:34] **Other**: Like Aleksei just said booking status while this document here, this question explicitly talks about the whole itinerary.
[07:10:46] **Other**: Like in the end, sorry, just maybe I need to rephrase the question. It's about the inventory.
[07:10:52] **Other**: It's about the booking status. It's about the booking information.
[07:10:56] **Other**: And it's about to document attached to this. We have an op and clean separation between all of this.
[07:11:04] **Other**: If the I think it's also like one is the items and one is then the trip. So maybe the item status, the booking status of all the different items can still come from booking form. But still we have the object which consumes the status from a different service. Yeah, but you have also changes, right? Like in the booking process, you're changing an accommodation. Where is this change reflected? Should it be copied back? Okay. Except there's a huge like there is a dependency on this decision which is quite large. And this is why I want to have this documented as a decision.
[07:11:36] **Other**: That we all are alight on the consequences. Like it's not so much about the decision, it's about the consequences of the decision.
[07:11:44] **Other**: And I would close your comment because this is an open question. Email, it's also your question. I'm closing it.
[07:11:52] **Other**: With a clear to do. So who is going to document that?
[07:11:56] **Other**: Who is taking it?
[07:11:58] **Other**: From here?
[07:12:00] **Other**: To.
[07:12:01] **Other**: Having a clarity?
[07:12:07] **Other**: Why are looking people at me?
[07:12:09] **Other**: You are leading the meeting somehow. Yeah, it's actually a point that I wanted to add on the slide, the decision for pass forward. Yeah. So my natural candidates would be Aleksei and Pedro since right now. So for documenting the discussion happened with Gregor together.
[07:12:29] **Other**: So this is you're all in the TV. So I'm looking at you.
[07:12:37] **Other**: Of putting it down and then leading the discussion with Gregor together to detangle that.
[07:12:44] **Other**: Right? And documenting it.
[07:12:55] **Other**: I would say I couldn't switch on because I have a very strong opinion about it. Yes. I mean you are the one that is giving away. The others are taking. So basically.
[07:13:12] **Other**: Since you said there is clarity on that side, Aleksei please lead to include the people you need to get to the decision.
[07:13:39] **Other**: The question about the pricing service according our domain definition. It's in own domain, but we don't have a team on this domain. This is why it's basically is handled by the planner team.
[07:13:50] **Other**: But it's definitely on domains that according to our service definition, it needs to be an own service.
[07:13:57] **Other**: So it cannot be in the truth backend.
[07:14:01] **Other**: Answer.
[07:14:03] **Other**: But when we move to the tripline 2.0, who's going to build it?
[07:14:09] **Other**: This is what we need to figure out. But what all I'm saying is according to our service definition is not part of the truth backend. At the moment the domain is much less a two planar domain.
[07:14:20] **Other**: So the easier answer would be you still own it, but it's not architectural technically in the same.
[07:14:27] **Other**: Backend.
[07:14:29] **Other**: But you still own the domain until we either find a new home or you just keep it.
[07:14:37] **Other**: Yeah.
[07:14:45] **Other**: And I guess this is the same response that I know.
[07:14:49] **Other**: This offer lifecycle. I'm not even so sure of what I can say. It's first it's not part of the planning domain. It's an own domain again.
[07:14:56] **Other**: And the question is who owns this offer life cycle? I have two options. And for me, this is then also an open point.
[07:15:06] **Other**: We can assign an owner again. Like getting a list of all wrongly assigned domains and subdomains in the two planner.
[07:15:14] **Other**: To understand which one we will discard or do duplicate and which one we need to hand over and which one needs to be built within the two planner domain.
[07:15:38] **Other**: I guess.
[07:15:42] **Other**: Pedro can also give some input here and you may need to sync with more people.
[07:15:47] **Other**: Yeah. And this is really the two like one of my other questions in some other document about making also like an inventory of what is on the front end.
[07:15:58] **Other**: Because I also don't know which the logic that is there. Do we really need that or we just isn't this part of this task?
[07:16:10] **Other**: I would consider this as part of this task because we first need to understand what domains are wrong and the rest is basically then we are rebuilding the trip API anyways.
[07:16:20] **Other**: And this is where we may need to look into the front and to understand how it's currently working, the business logic.
[07:16:25] **Other**: But I think this, I would guess it's part of the two major block streams that we are focusing on, want to focus on.
[07:16:41] **Other**: I think the manual question manual items in the quoting process.
[07:16:46] **Other**: I also have added as an open question.
[07:16:51] **Other**: It's also something that I want to have a decision document or not.
[07:16:56] **Other**: I heard yesterday or readiness like message that it was already decided.
[07:17:00] **Other**: There's also decision document about it and we discussed this in the triplan to alignment round. Can I ask you to.
[07:17:09] **Other**: Back Pedro has created a decision lock.
[07:17:13] **Other**: For catalog.
[07:17:16] **Other**: Migration. We create the same decision log. We need to create the same decision log for planner two.
[07:17:22] **Other**: And then I would ask you to link this.
[07:17:34] **Other**: Pedro.
[07:17:36] **Other**: Yes.
[07:17:38] **Other**: So on the decision to drop manual items, I went through the document.
[07:17:48] **Other**: And it seemed to be more focused about the other items.
[07:17:54] **Other**: And then makes seems like it then includes all kinds of manual editions including manual accommodations.
[07:18:04] **Other**: But given that that affects offline suppliers and on request accommodations.
[07:18:10] **Other**: I didn't see any specific mention to what would be the plan for those types of bookings and those types of suppliers.
[07:18:20] **Other**: Not on the domain. So what we are considering is that we would need to have like a conversation with Schmidt.
[07:18:27] **Other**: To because it overlaps with that time quarter or with other systems. So we would need to.
[07:18:35] **Other**: Like more clarity on that and decide how do we want to handle the things and that why we didn't forward with it.
[07:18:42] **Other**: Pedro is your question like how agents will actually handle those in reality if they're not covered in T P2.
[07:18:50] **Other**: Well I guess so.
[07:18:54] **Other**: What I understood from Gregor is that manual items including manual accommodations are heavily used to make these modifications to the trip.
[07:19:04] **Other**: Which is highly necessary for offline suppliers and non request accommodations because we rarely get the right data when we pull it from the APIs. So we need to then go and make these modifications.
[07:19:19] **Other**: Taking out some of these features.
[07:19:23] **Other**: Prevents us from operating with these types of suppliers and bookings.
[07:19:28] **Other**: So we, whether it's agent, whether it's a human agent or machine agent.
[07:19:36] **Other**: What how do we handle these? Are we expecting that the supply team will create new capabilities to allow TP2 to assess these online suppliers just like it would be any other or do we want to just ignore or drop offline suppliers entirely.
[07:19:58] **Other**: Okay I think we'll need to take that one offline to discuss in a bit more detail. I think we've done quite a bit of thinking in that direction already.
[07:20:05] **Other**: But yeah it probably warrants a revisiting.
[07:20:10] **Other**: Just saying at the moment the veto duplication is planned with the support for offline items. The transport recommendation is planned with some manual transport legs. So that means in both initiatives we still have support for manual items.
[07:20:26] **Other**: That's true, but both initiatives for surface and trip planner one.
[07:20:32] **Other**: And.
[07:20:33] **Other**: They that doesn't necessarily mean that we will keep that water planet who their overall goal for triple planet who is to be as automated as possible.
[07:20:43] **Other**: And to bring down quoting times and onboarding times and so on.
[07:20:47] **Other**: And with manual items in the mix this would be hard.
[07:20:50] **Other**: So yeah, but we had an overall goal for planner two should be and would be.
[07:20:55] **Other**: To not support manual items at all costs.
[07:20:59] **Other**: At least during the quoting phase.
[07:21:01] **Other**: Good. But right now we spent additional time and effort to solve this and to plan one to delay the business decision if we want to support this entrepreneur too. If we would make already the business decision that we would not support manual accommodations, we would not spend time to now make manual accommodations work into planner one.
[07:21:21] **Other**: I think it makes sense to take this one offline. I think the document deciding document actually holds a lot of.
[07:21:28] **Other**: Analysis also on the business impact. If you don't have the other items anymore.
[07:21:31] **Other**: I don't know if it specifically also looks at manual automodation. So that would have to be double checked or I can double check that. But the decision document, the decision proposal from back then specifically had numbers on the business impact of this decision as well.
[07:21:46] **Other**: But I can revisit. Yeah, exactly. For other items.
[07:21:52] **Other**: For the whole.
[07:21:55] **Other**: Yeah. So what is the details behind that? Exactly what it included manual accommodations as well if it just was other items. I think this one I have to double check to report is quite old. I don't remember.
[07:22:09] **Other**: That's relevant in the sense of, I mean like two years ago we had an explicit initiative to take out manual items and we really shrunk it significantly.
[07:22:25] **Other**: We didn't maybe finish up completely because there were other restrictions and so on. But this has been also Robert's mission. It's three years at least since I know him. So I think there is still something we should squeeze out, but that's the question.
[07:22:46] **Other**: If we are ever going to arrive on zero, it's questionable, but we should bring it down every time we can.
[07:22:54] **Other**: I mean, I can look at the decision document once more and see if it actually includes numbers on manual accommodations and manual passport specifically. I have assigned a task to you to prepare or link a decision document.
[07:23:08] **Other**: The link to the decision document is already there.
[07:23:11] **Other**: But yeah, I can take a second look.
[07:23:19] **Other**: I think this good key is the same question.
[07:23:23] **Other**: There's a decision document. So I need to look into this. And then we are done with the first document for three minutes over time.
[07:23:30] **Other**: We have to hurry.
[07:23:30] **Other**: Up.
[07:23:32] **Other**: And also there is a decision also already for trip planner too. It's, I don't know if you keep it up.
[07:23:38] **Other**: Regularly, but there is one already. I can send you the link to that as well.
[07:23:43] **Other**: Okay, but we need to link all of these decisions.
[07:23:46] **Other**: Yeah, it's a decision log.
[07:23:50] **Other**: If you send it to me, I will link the three documents now.
[07:23:55] **Other**: The next decision is storing the domain boundaries for the trip planner.
[07:23:59] **Other**: I think this is something where you have the target architecture read.
[07:24:06] **Other**: Then this is a consequence of this.
[07:24:08] **Other**: That.
[07:24:11] **Other**: From the target architecture and from the decision of the domain setup, we have now the decision now made a decision in the C1 roadmap to violate this domain split.
[07:24:23] **Other**: And this decision document is looking into this violation and the consequences of this violation.
[07:24:34] **Other**: It's maybe a good point.
[07:24:39] **Other**: So basically what.
[07:24:42] **Other**: We look into the different areas and I have not looked into Ives and Machi. I have more looked into the different work streams.
[07:24:49] **Other**: On the front end, we do have one, yeah, I would say one domain. You want to build a strip planner to set up. We have two major tasks. We have basically split this font and the two segments according the customer journey we built about builder first and then the GP2. So it means front end has a clear focus and a clear sequence.
[07:25:11] **Other**: Is there a difference between TP2 UI and TP to dot zero UI nodes?
[07:25:17] **Other**: AI.
[07:25:20] **Other**: Or migrating? But where are the two bullet points? I don't understand.
[07:25:25] **Other**: Cloud builder.
[07:25:32] **Other**: This is weird. Yes, because the Growth Builder UI.
[07:25:37] **Other**: Has changes.
[07:25:40] **Other**: In the like basically the route builder itself, but also has modifications in the UI of the trip planner one.
[07:25:47] **Other**: Like for all these accommodation recommendation thing.
[07:25:49] **Other**: Is there's UI in the trip planner one. So that's like what I didn't want to miss out here because we're not just building the new UI. We're also modifying the old UI.
[07:26:00] **Other**: That was my question yesterday.
[07:26:05] **Other**: But that's like what I wrote also in the decision for or whatever documented we're building in the recommenders that are being updated or built are also being integrated in TP1.
[07:26:22] **Other**: Is that the part about the occasional decisions.
[07:26:27] **Other**: That features we built in route builder or the new UI in the backend? It's also like needs changes in diploma one. Isn't that what you described somewhere later? Like that's the case by case.
[07:26:40] **Other**: Decision. No, because most of those are just backend changes. They are the ones that I mean are front end changes. Those are like we are asking the agents explicitly to pick one of the options or to tell us why they're not picking it. And Azilia can be front end or back.
[07:26:54] **Other**: End in triple planner one. I understand.
[07:27:02] **Other**: I don't see a comment below and need a comment for myself.
[07:27:08] **Other**: Okay. Besides this fact of now implementing all the features into planner one, I think the main task for the frontal is to build up route builder UI and to build up to planner UI 2.0.
[07:27:19] **Other**: The task for the AI app is basically very, very clear. Build the recommenders documentation insights. These are accommodation recommender activity when recommended. And later we also want to build a I agents that act on behalf of the sales agents and can execute more and more abstract changes on the back end side. We do have actually three main work streams at the moment.
[07:27:48] **Other**: Which is the two planner 2 API.
[07:27:51] **Other**: Which is according to the architecture required to mutate a trip.
[07:27:56] **Other**: We have to do main cleanup. We need to basically remove all the.
[07:28:02] **Other**: One assignment domains and subdomains on the back end.
[07:28:05] **Other**: And we now have also a weight service.
[07:28:08] **Other**: Transport pricing in the backend workstreams. Each of these are a major works groups.
[07:28:18] **Other**: Isn't the scope of the trip now to API also like creating a trip?
[07:28:24] **Other**: Because you're only saying modification API.
[07:28:30] **Other**: Thank you.
[07:28:34] **Other**: So in the end it's basically to mutate.
[07:28:42] **Other**: It's in the end it's to modify items will based. That's the second point. And the AI endpoint is basically the orchestration layer.
[07:28:55] **Other**: Yeah.
[07:28:58] **Other**: The main cleanup and pricing service.
[07:29:02] **Other**: Which actually means that.
[07:29:07] **Other**: Recurrently with our capacity.
[07:29:12] **Other**: Had to focus on maintenance because we have built the MSV for margin leakage. We have built the Expedia certification which I've not even part of these three major work streams. And we have spent the remaining 30 to 40% of the whole team back in capacity on the weight service.
[07:29:31] **Other**: It means this is the reason why we actually have no capacity to work on this and.
[07:29:37] **Other**: This.
[07:29:38] **Other**: Can we be consistent with the wording. So sometimes you say rate servers and then actually trip. The problem is exactly what I fall into the trap. The problem is it's a weight, but the team calls the transport pricing. We just need to be consistent. Yeah, and it's weight definitely made. This is why I said here.
[07:29:56] **Other**: Wait.
[07:29:58] **Other**: But I mentioned the initiative as it is right now.
[07:30:02] **Other**: That means we need to rename this initiative.
[07:30:05] **Other**: Because it's actually item level weight.
[07:30:08] **Other**: Does everybody understand what the difference is?
[07:30:18] **Other**: So rates we are calling everything the basically coming from the supply side. So what is the and that's where the confusion starts? What is the price that the supplier is offering us?
[07:30:33] **Other**: For that specific item? But that's from a trip planner perspective from Tourlane perspective that is a rate. The price is that what we are exposing to our customer. So what is the trip price itself? Since we are interchanging between those two words always. Sometimes it's not clear what you are talking about. Are you talking about the rates that we are getting from the supplier or are we talking about the price that we are giving to the customer. That's why the rate is the wording to understand what so to say the supply domain is offering.
[07:31:19] **Other**: And yeah.
[07:31:20] **Other**: That's at least for us to simplify what are we talking about.
[07:31:26] **Other**: It's not as consistent in the company itself. So stakeholders might talk about prices still where they mean rates.
[07:31:37] **Other**: But this can, yeah, for us help at least to clarify also there are some stakeholders starting to talk about rates, which is understood. And in the end, what we want to have is the transport price because that is what goes into the trip.
[07:31:54] **Other**: The way it goes into the trip planner and then you calculate a sales price.
[07:31:59] **Other**: Because the pricing domain is still within or it's a specific domain.
[07:32:09] **Other**: But team owns it. So at the item level, it should be as clean as possible. So as close as the rates are and then the combination of everything is done on a different domain.
[07:32:21] **Other**: And that's where the pricing rules are applied. And so what does that mean for how you want to split the domain? So what then only build the rate service?
[07:32:31] **Other**: And then who builds.
[07:32:34] **Other**: The pricing size? This is exactly Silvia's question. I said the answer is the same. And this is missing in the documents because that leaves the gap when you say you move out.
[07:32:46] **Other**: Yeah. So the pricing service is in the document or the domain split that we have shared is basically the pricing service and own domain, really an own domain. At the moment we don't have a team supporting the same domain. This is why the pricing domain falls in the team that also happens to trip planning domain. But today already I think the consequence for me is that it doesn't make sense to prioritize the rate service when we don't have someone who's building the pricing. So pricing service exists currently in the trip back end to a certain degree. That means we always had a way to sum up the weights, do some magic and come up with a sales price.
[07:33:28] **Other**: But this is an unnecessarily, this is a mix of responsibilities and domains and whoever is now changing the way how we calculate the sales price needs to be deeply into the trip planner to understand how the sales price is calculated. And this is why this wrong domain assignment is causing real problems.
[07:33:49] **Other**: I'm saying when we cannot ensure that we build this feature end to end.
[07:33:55] **Other**: From supply to triple planner in between the pricing thing, however, we want to build it in the future and who we just need to make sure that we plan it end to end, right? That's all what I'm saying. Like nothing is like they already exist and they are manually added. So because they're manually added, they already consider in the pricing system. Since we are not building yet the new trip planners, then this can be prioritized because they owe the pricing system still works. But when we build a new trip planner, the pricing system will not work.
[07:34:27] **Other**: Because it's angled. Good. Then if we are talking about names, I would also like to highlight transport, which is not as unified as people think maybe because it combines different things.
[07:34:42] **Other**: Combines.
[07:34:43] **Other**: A transfer.
[07:34:45] **Other**: A transfer can be even different transfer vehicles.
[07:34:48] **Other**: It contains in county flight. It contains grains and contains ferries. It then contains ventricles. And this is where also it's now a confusion what kind of transport is actually covered by this. And this is the second where the naming is actually misleading at the moment.
[07:35:07] **Other**: Okay.
[07:35:10] **Other**: Just to proceed, this is why we have, where I have called it weight service.
[07:35:15] **Other**: Actually transport weight transfer weight service.
[07:35:22] **Other**: If it's a transfer rate service, does that then include self drive?
[07:35:27] **Other**: Discover self drive.
[07:35:29] **Other**: That's the thing that because they also thought in leadership that we were not going to include self drive. But then our scope increased with these PDFs that they also have for self drive.
[07:35:40] **Other**: Extra documents that are not covered by semicolons. Basically.
[07:35:44] **Other**: The initiatives that we have in the roadmap and that we try to solve is transfer weight service.
[07:35:50] **Other**: Yeah, but that doesn't, that name then doesn't cover the longevity of what we're trying to achieve.
[07:35:59] **Other**: It's what we're building right now, but long term it should cover all right. So yeah, you should cover self drive, which is manually, manually done as well. It will. It should cover things right now. What is the scope right now? The first one is only transfer.
[07:36:12] **Other**: S.
[07:36:13] **Other**: For the first version.
[07:36:14] **Other**: Okay. But for the next iterations.
[07:36:18] **Other**: Yeah, transport is a is a big word.
[07:36:21] **Other**: So right now.
[07:36:24] **Other**: Is.
[07:36:25] **Other**: Transfers.
[07:36:27] **Other**: The first.
[07:36:31] **Other**: Sub item type that we are looking at. Is this a common.
[07:36:36] **Other**: Understanding of the team?
[07:36:39] **Other**: Or the next one is self drug. Okay. Okay. Yeah, but so we have a list of transports. But the first one that we are solving for now is the transfer. Yeah. Okay.
[07:36:53] **Other**: This is how we can, then this is why the work stream that the team has on its plate at the moment is a weight service work stream.
[07:37:01] **Other**: In cycle one, we have actually focused on transfer weight service.
[07:37:06] **Other**: Which on the roadmap.
[07:37:09] **Other**: Is named transport pricing actually. But this is what we are focusing on the C1 and are the trains included in transfer.
[07:37:19] **Other**: S. I don't know.
[07:37:20] **Other**: Yes. So trains, fairies, private trans.
[07:37:28] **Other**: Lates.
[07:37:31] **Other**: Too from the service.
[07:37:35] **Other**: But if it's anyways, let's take this offline. For me, it's important that we can continue that we understand that currently we have three major work streams.
[07:37:43] **Other**: But the flight part is a good one. So this is also currently transport, but it's separate like this one actually doesn't have an API. I have two different types of flight. We have domestic flights. That means how do you come to the destination? And then in some destinations we have in country flights. That means on maldives you may land on the main island and then you have water airplane to go to your resort.
[07:38:05] **Other**: This is why traditionally, and this is where I'm also getting on traditionally the in-counter flights were considered as transfer.
[07:38:14] **Other**: By travel product.
[07:38:16] **Other**: Well what I'm saying is that also now we have this new pilot tool which is for domestic flight, never for in county flight.
[07:38:23] **Other**: Never.
[07:38:26] **Other**: Mindset.
[07:38:30] **Other**: For getting to the destination.
[07:38:33] **Other**: So you have no solution for it counter flights between domestic and in countries I'm using the one with domestic encounters. So we have a solution for international flights to get to the destination. This is what we are growing, but we have no solutions for domestic flights. Domestic flights are normally considered as transfer and are maybe part even of the spreadsheet.
[07:38:53] **Other**: But at the moment we need to separate flights. And also that depends on the destination. Some are some are not. So that's why scoping in this.
[07:39:03] **Other**: Is super important.
[07:39:06] **Other**: Making it very crystal clear what the scope of transfer means.
[07:39:13] **Other**: Is essential because yeah, everything has a complexity and it needs clarity also what we are expecting.
[07:39:22] **Other**: And what then definitely the impact is. I think my question is when we talk about work streams do we expect backend support for the international flight tool that where we are now launched a pilot.
[07:39:36] **Other**: Truly not because the python is completely built without engineering by ad. So currently not if we want to put this in production maybe but in the end.
[07:39:49] **Other**: Transport like domestic flights are not considered as transport in this company. But we do have a bunch of weight services as it works without.
[07:40:02] **Other**: Maybe open tasks find rolling.
[07:40:06] **Other**: But then the methic flights are bovnet or in computer email part of the DMC because we are booking them through the DMC maybe there are exceptions.
[07:40:16] **Other**: In certain destinations.
[07:40:18] **Other**: It was very different depending on the destination how I experienced it as a customer. But yeah.
[07:40:29] **Other**: I like this discussion because this is what we value able to bring us on the same page.
[07:40:34] **Other**: But I'm trying really to keep the time. So we all agree common understanding three major work streams. All of them are complex and all of them are taking actually complexity type.
[07:40:48] **Other**: The team at the moment spanned it in C1 most of the time here.
[07:40:55] **Other**: Like all backend engineer including Gregor most of the time was spent here in maintenance.
[07:41:02] **Other**: Only partly for spent in.
[07:41:05] **Other**: This.
[07:41:09] **Other**: What we have done.
[07:41:12] **Other**: And this is basically the point where I'm saying okay this is three major work streams are too much in this team.
[07:41:20] **Other**: It's also not because workload.
[07:41:23] **Other**: It's actually the domain knowledge that's missing in the whole team. The fact that we are discussing two weeks before release what is in all in transfers.
[07:41:33] **Other**: This is also the answer to your question on scaling to roll it out to all this destination. You need to know all of these details. The fact that this is basically wrongly assigned now to the trip planner team.
[07:41:46] **Other**: Is causing problems.
[07:41:48] **Other**: Because we all miss context of the weight supply area of the item level supply area. This is basically now compensating by compensated partly by getting knowledge asking Pedro asking other people asking Gregor like we are compensating this by asking around getting this much this knowledge. But we still don't fetch everything that leads to duplicated solutions. That means estimated weights is now built into the.
[07:42:22] **Other**: Weight service.
[07:42:26] **Other**: In a different way as a supply team has built the estimated rates. The data tracking and the data logging is also built completely different as a supply team has built estimated rates.
[07:42:38] **Other**: It's a spreadsheet that covers the next year.
[07:42:41] **Other**: And you run into the exactly same problem as we have for estimated weights. If you now book for two years in advance, the system does not return and the spreadsheet does not return any answers. That means we have built an estimated waves.
[07:42:52] **Other**: I don't blame the team because it's a really deep supply knowledge what you need to have to do this correctly.
[07:42:58] **Other**: Or at least consistent. Let me phrase this this way and your duplication solution.
[07:43:05] **Other**: App.
[07:43:06] **Other**: But is that actually true because this data has never lived with supply.
[07:43:13] **Other**: Yes.
[07:43:15] **Other**: We have no idea basically nobody knows except the exempting what which data the estimated rate but you have built a system where they can add sorry these like essentially what you're saying is we have a duplicated solution that covers this transfer generator, this transfer generator data.
[07:43:38] **Other**: Estimated.
[07:43:39] **Other**: Rates never lived with supply right that's only ever lived with tx until this day. No, but the estimated rates are in the supply area.
[07:43:50] **Other**: And supply proxy service already provides the functionality to estimate rates even for manual items including transport. But this should go to the pricing domain as well.
[07:44:02] **Other**: No pricing rates different understanding.
[07:44:10] **Other**: One could go to the present domain is like when you don't have the price for one year two years we define rules.
[07:44:16] **Other**: To estimate that like which do exist currently in the technical systems of the speedy teams. They do belong to this technical systems because we are talking two ways. You even have built a new eye.
[07:44:29] **Other**: To modify this estimated rates per destinations per time range. That means you have already built a logic advances. You have built an API that is exposing the fact that it's an estimated weight which is used by the data team to build a dashboard and use all my queries. That means with the decision to be a wee bill to duplicate this you have by duplicated the functionality for the agent, but you have not duplicated the actual functionality for our internal users and for our data.
[07:44:58] **Other**: Sorry.
[07:45:01] **Other**: About that service for this for this rate service.
[07:45:05] **Other**: Like how does that link to then estimated rates? I mean the only estimations we're doing is if the trans like if the if the trip takes place more than one year in advance this is estimated rates how we defined it.
[07:45:19] **Other**: But we stick a 5%. I mean the way that the TX works is we stick a 5% buffer on its maybe I'm a bit confused like is the issue that we haven't estimated rate way of doing things. And then these things are entirely separate from that. But we haven't duplicated that logic or no you did exactly like because we already have the same functionality in supply proxy service that is able to estimate transport prices if we don't have the prices for the given year yet or for the year we need it.
[07:45:47] **Other**: And in this system we already have ways to define buffers per year per DMC per destination.
[07:45:55] **Other**: And this is already used and configured.
[07:45:58] **Other**: And that the fact that she now added the same functionality with a fixed 5% buffer instead of the properly configured one that is already available in our systems.
[07:46:11] **Other**: Is exactly the duplication that Robert is talking about.
[07:46:13] **Other**: Yep, okay, that makes sense.
[07:46:15] **Other**: And you have duplicated and then you have the missing login.
[07:46:20] **Other**: Yeah. So basically you have duplicated the functionality and have missed half of it. And again, I don't blame you. The consequence of a violation of the domain split because you're missing domain knowledge.
[07:46:31] **Other**: On a product and on the engineering side.
[07:46:37] **Other**: But I think the actual root cause problem is that you have supply data that's not sitting in supply.
[07:46:44] **Other**: Yeah, you have violated the domain. This is why we have supply data that does not sit in supply. And this is why you don't have the knowledge how to handle supplies that does not sit in supply.
[07:46:55] **Other**: But I think like, I mean all this is it's fine. But I think like the underlying issue is that we don't have a conversation in the organization about which elements are prioritized on supply and which are the needs because that's why if we want to cover flies, if we want to cover these rates.
[07:47:12] **Other**: Like they are like the last items we prioritize in the impact is not fully understood. So basically as we are missing and this is.
[07:47:21] **Other**: Actually my second point. Thanks for the for the transition.
[07:47:27] **Other**: We are solving a problem when it appears.
[07:47:30] **Other**: So basically we now have automated a workflow for the sales agent.
[07:47:36] **Other**: By automating the lookup in a spreadsheet.
[07:47:38] **Other**: But what is the root cause for the spreadsheet that we don't have time to implement a proper API on the supply side?
[07:47:45] **Other**: That means we are solving the problem on the one place.
[07:47:50] **Other**: We are not solving the root cause.
[07:47:52] **Other**: And this is why it's actually not a scalable, sustainable solution because the scalable sustainable solution is actually solving this on the root cause side and getting us a connection to these item types.
[07:48:08] **Other**: Okay, now no one getting too loud and this is why I don't get any connections to transfer. Yes, partly. This is why we need to supply knowledge. Like for example and that's why it needs to be transparent that the problem is there so we can tackle the root cause which we are constantly doing with the supply team on looking what alternatives and so on. And I mean now we have signed with 11 infotech. There is an opportunity to maybe connect faster.
[07:48:43] **Other**: An API that would solve.
[07:48:48] **Other**: 20 30% of this problem. And then we tackle the next one and then the next one and so on. But with without that transparency it's completely absorbed.
[07:48:57] **Other**: And then we are questioning why is it so complex?
[07:49:03] **Other**: Right? And this is also why we chose one vendor that could also support transport and price in the future because we also talked to some vendors that were for the longest. So this was one of the arguments to go through.
[07:49:17] **Other**: If we handed the last point inconsistency in the data assets, this is very well hidden.
[07:49:24] **Other**: But this is important because this is the data that we want to build our logic on.
[07:49:31] **Other**: That we generate our insights and where we want to build our agent model. This is where you said this is where the value is generated.
[07:49:39] **Other**: And this is why messing up the data now is something as considered bad.
[07:49:44] **Other**: And again, you can't do better because you don't have to domain knowledge. You can only get domain knowledge by really getting deep into this problem.
[07:49:54] **Other**: The next consequence of this missing domain knowledge is the bottleneck appears to be in the wrong team.
[07:50:02] **Other**: The bottleneck is that we don't have resources to build the API connections. This is why we have a spreadsheet solution and this is why another team now tries to automate the spreadsheet solution.
[07:50:14] **Other**: You get my point right.
[07:50:18] **Other**: But while there are enough DMCs that will offer us an API for transfer, it will still probably be around half of them. So I don't think we can find it's okay for you after cautious discussion to say I built this manual spreadsheet lookup for 50 destinations and we can't book through. We still have a lot of problems with this, but it's okay or considered as okay if you the weight.
[07:50:43] **Other**: Service for some of these items is something that's based on manual import or on spreadsheet and so on and so on.
[07:50:49] **Other**: But you will area has some knowledge to make this call and the decision and your area and team has the knowledge to build it right.
[07:50:59] **Other**: And there is a bottleneck in this kind of integrations.
[07:51:04] **Other**: Which is actually on this integration side.
[07:51:08] **Other**: That's true.
[07:51:11] **Other**: That means we had a long discussion like it started with a long discussion on basically if we want to resolve this domain violation.
[07:51:22] **Other**: So how do we handle this domain validation?
[07:51:26] **Other**: I admit that.
[07:51:30] **Other**: I have structured this one need because in the end it's a decision do we want to resolve this at all? I think that.
[07:51:38] **Other**: S this one.
[07:51:40] **Other**: So we are aiming to resolve this domain knowledge.
[07:51:45] **Other**: Okay. Then the second question is are you getting this? Theoretically yes, but we want to reduce as much as the dependencies to be able to deliver. Because if we start with blockers and that's why I think like product was making this decision.
[07:52:00] **Other**: And then we are going to run into blockers.
[07:52:03] **Other**: Basically. I do understand it was an impact decision. I do understand this. What I would argue is I have prepared a decision for where we would come back circle back exactly to this point how we resolve this.
[07:52:17] **Other**: Important for this document is that we have a decision that no one, that the domain is important and that we want to keep this domain.
[07:52:25] **Other**: The decision document 4 is more how we come best to restore vested domain things. So if there's no objective, I would say this is concluded.
[07:52:34] **Other**: And how we solve this best for me would be then decision for document.
[07:52:40] **Other**: So this could also include much continuing to work on this until Schmidt is ready to take it on.
[07:52:47] **Other**: This will come with a high cost for much.
[07:52:51] **Other**: Yes, it could be not if we want to leave something else out. But would it be an option then to just start with self drive destination? I think this discussion will come. Yeah, I think the cost side is the one that I would like to look at.
[07:53:12] **Other**: To spoiler is the least option I would like to keep.
[07:53:17] **Other**: Because it comes with high costs.
[07:53:19] **Other**: Very high costs. But it's an option if we decide this is still the best way to go.
[07:53:27] **Other**: Then we log in at least decision two is we don't violate this anymore for other domains and we need to figure out how we resolve this.
[07:53:37] **Other**: Anymore. I don't know. So it's like in general that's the future architecture that we agree on.
[07:53:41] **Other**: Right.
[07:53:43] **Other**: On the things but we already have agreed last year.
[07:53:48] **Other**: We don't violate it.
[07:53:51] **Other**: In that sense.
[07:53:53] **Other**: We need to be very conscious.
[07:53:57] **Other**: On how we then if somebody else takes it over.
[07:54:02] **Other**: How we agree on performing on it still has a high cost.
[07:54:08] **Other**: Just for the lack of you preparing at the moment decision document for the domain validation in this PT team.
[07:54:14] **Other**: For the flamingo team for the role mapping.
[07:54:16] **Other**: But what we have here is a finite system design. So we know how we want to build it. We are encapsulating this domain violation in one file.
[07:54:25] **Other**: And the contract is already how the final contract will be like. So here we enable delivery. This one file is small.
[07:54:33] **Other**: But it's built in a way that we can then.
[07:54:35] **Other**: Trans change it. That means if we are violating the domain it comes with a lot of preparation as well.
[07:54:41] **Other**: To allow off ramp and to have an exclusive plan how to offer them and we have fully understood the cost.
[07:54:48] **Other**: I think we should have a retro to try to understand how it came to this domain violation in the first place and how to prevent it next time.
[07:54:57] **Other**: But there is a valid decision that the domain split is there.
[07:55:02] **Other**: And I think we had a lot of domains split and definition discussions last year, but maybe also we didn't have it together as a good work.
[07:55:14] **Other**: For.
[07:55:14] **Other**: This. The consequences are clear.
[07:55:18] **Other**: It's astonishing to me that the team has been working on this transfer pricing service now for two months and now all these things come up. It's pretty astonishing in my opinion.
[07:55:28] **Other**: I think we should look at what happened and how we can prevent it next time.
[07:55:32] **Other**: And who is responsible for.
[07:55:35] **Other**: Having a high level overview of the domain and saying no.
[07:55:41] **Other**: When the team crosses. It was.
[07:55:43] **Other**: My.
[07:55:48] **Other**: Team members.
[07:55:49] **Other**: Also.
[07:55:50] **Other**: So at least it should have been raised to you.
[07:55:53] **Other**: And in consequence also then to me.
[07:55:56] **Other**: To say stop to it. But it wasn't raised clearly.
[07:56:01] **Other**: So it was so that's why digging now in we find this and say.
[07:56:07] **Other**: What is now.
[07:56:10] **Other**: The consequence out of it.
[07:56:12] **Other**: Right to correct it. And also to explain a little bit. I knew people raised the domain violation in the beginning.
[07:56:19] **Other**: It's not discussed now. Let's have a record on it.
[07:56:22] **Other**: Yeah.
[07:56:23] **Other**: Okay. The last decision is the decision about migration.
[07:56:29] **Other**: Because we have aligned on the target architecture.
[07:56:34] **Other**: The domain split violation of collecting the domain violation comes actually now on top of the migration.
[07:56:42] **Other**: Because one migration goal is actually to restore the domains.
[07:56:46] **Other**: That means we have made the migration harder at this moment.
[07:56:50] **Other**: Because this rate surface is built and then also needs to be migrated again.
[07:56:58] **Other**: I think there is no doubt it's about three building front end.
[07:57:03] **Other**: Strategy.
[07:57:05] **Other**: One tech stack, the whole interactions will be one makes completely sense. Also the migration strategy to build it as part of the customer journey makes also sense for me.
[07:57:21] **Other**: The domain cleanup is something that needs to happen. Otherwise we will not reach our goals.
[07:57:27] **Other**: Because the problem of what you have or will have intraplanner two is if we don't have to move this dependency, you need to implement this dependency even up to the TP2 front end.
[07:57:39] **Other**: If we don't move the move document handling meet and greet out of this you need to have a document manager in the two planner two UI.
[07:57:48] **Other**: And this is why the missing.
[07:57:52] **Other**: Or the one domain match is now really hurting.
[07:57:56] **Other**: The TP2 development. Same with V2. The transport recommendation got more complicated because we have a V2 dependency.
[07:58:04] **Other**: And this will keep on until slow down the.
[07:58:07] **Other**: Team.
[07:58:10] **Other**: And not only because they have to build it, it needs to be understanded, it needs to be maintained. It needs to like there's a lot of complexity.
[07:58:17] **Other**: And this domain cleanup is an open task to create a list. Basically we have a scientist.
[07:58:23] **Other**: So it's parallel just like but there is a category. There are dependencies or domain violations that we just remove.
[07:58:33] **Other**: A2 is such an example. There is an example of violations that needs to be rebuilt by other teams.
[07:58:40] **Other**: Or like where we need.
[07:58:43] **Other**: A collaboration with another team.
[07:58:45] **Other**: This could be document handling.
[07:58:47] **Other**: Which could live inside the domain.
[07:58:52] **Other**: Knowledge database whatever there is meet and greet which is an item, a supply item with an own weight.
[07:59:00] **Other**: There is a mix and match handling that's in the smart booking and so on and so on. So there are a lot of responsibilities.
[07:59:06] **Other**: That comes with this.
[07:59:12] **Other**: On the same time, so this is one fact on the same time we really need to build up this AI.
[07:59:16] **Other**: This is an enabler for all adjunctic AI agentic AI not encoding sense but replacing the sales agent.
[07:59:23] **Other**: It's also like the foundation for the visualization and for visualization. I used to run it for the triplet 2 UI, which is visualize the fit but allows modification only with the set API set back and providing.
[07:59:43] **Other**: Some API migraines constraints that we want to keep doing the migration as much as possible. One thing is.
[08:00:00] **Other**: Sorry let's start with here.
[08:00:02] **Other**: If I market you can't read it.
[08:00:05] **Other**: As long as we have not fully covered the customer journey with 2 planner 2, we need to fall back to trip planner 1.
[08:00:11] **Other**: And also if we have a trip planner 2 UI that can cover the customer journey, there are maybe destinations or cases where you need to fall back at least for a certain period of time.
[08:00:22] **Other**: This is why we need to ensure the fallback option. That means we need to ensure that the data are compatible or can make compatible.
[08:00:34] **Other**: With this data compatibility comes also the dependency to external systems.
[08:00:38] **Other**: That means we have an internal API. This is where we're mostly talking when we're talking about the Toplana 2 API.
[08:00:45] **Other**: Which has a lot of details of the trip because the editor needs all the details. But we also have an external API that has less or different detail level.
[08:00:56] **Other**: And we are trying to keep this external API as stable as long as we can because this is removing the dependency to also migrate to this at the same time. It also removes the dependency to touch the booking platform app and data integration.
[08:01:10] **Other**: As long as we can keep this external contract stable, other teams are not affected by this migration. And the moment we can't keep the external API stable.
[08:01:20] **Other**: The most likely also can't keep the 2.1 stable anymore, but it also means that in this moment we are touching different systems. This is why this needs to be very, very cautiously decision that we can't, that we break this API compatibility.
[08:01:36] **Other**: Want to.
[08:01:48] **Other**: Keep the spin that we can add features to kind of one, but this really needs to be a very cautious case by case decision.
[08:01:56] **Other**: Where the effort or so the effort to maintain it and the effort for the migration.
[08:01:59] **Other**: Then is taking into account regarding the business value. It also needs to be considered the opportunity cost because in the end it takes time from people that could build onto planetary.
[08:02:11] **Other**: But this at the moment it's a constraint.
[08:02:15] **Other**: Like we want to have this option.
[08:02:17] **Other**: Which to be honest came also from the first two.
[08:02:22] **Other**: There was a long discussion also if we start building the planner 2 as a greenfield project.
[08:02:29] **Other**: This is what we have discarded.
[08:02:33] **Other**: Because this would be the end to end, in fact, would be very much delayed.
[08:02:38] **Other**: Till we have the full planner and the full like at least a base to planner to cover certain destinations.
[08:02:44] **Other**: We have very late customer feedback. The data migration keeps a risk because we need to then make sure once we are switching how we handle those data sources because they are not compatible connections to external systems will be a problem.
[08:02:58] **Other**: That means every downscreen system needs to learn how to handle two systems.
[08:03:03] **Other**: So there is a huge dependencies.
[08:03:07] **Other**: Behind this.
[08:03:10] **Other**: Also last constraint in the end secured business is running on TP1.
[08:03:16] **Other**: That means we still need to block a certain capacity to keep TP1 functional.
[08:03:27] **Other**: We may also need to touch to planner one in terms of the strength of the migration. So domain knowledge.
[08:03:33] **Other**: If you're removing the v2, we may need to touch to planner one. This are the in my opinion the changes that are aligned with our strategy.
[08:03:43] **Other**: Besides this we need to keep it working.
[08:03:45] **Other**: Running.
[08:03:47] **Other**: And I'm looking obviously Emil. I don't know why.
[08:03:51] **Other**: And how that is looking practice. Let's say, I don't know, we take the transportation.
[08:04:00] **Other**: To our whatever we are building a transportation search API.
[08:04:06] **Other**: Does it mean that then we would build it for three planner two or do we always need to like go through this? Because in this case we would not break three planner one, right? Because the manual thing is there.
[08:04:16] **Other**: But how would this look in practice?
[08:04:18] **Other**: Then you said it like there's a decision to only build it into a planner two. Then you don't have a problem because it does not exist into planner one.
[08:04:28] **Other**: And the fact is that you still have to store this in the same offer is the interesting part which I come to.
[08:04:35] **Other**: But on the UI level you have no interaction because in this case the eye is not using it.
[08:04:39] **Other**: On the backend side you do have an interaction.
[08:04:45] **Other**: Because now you want to have to store route information.
[08:04:51] **Other**: Which can or cannot violate this option to fall back to the 2.0.
[08:04:55] **Other**: 1.
[08:04:56] **Other**: Because now you have information that Planner 1 does not support.
[08:05:01] **Other**: But I made it there in some elements that the UI is not using it. The UI will use it because the input information is coming from the UI but we can make a cautious decision for example that transport rates.
[08:05:15] **Other**: In this case may be transport vehicles even.
[08:05:20] **Other**: And not made accessible to the 2 planner 1 UI.
[08:05:23] **Other**: But even if you make this decision you still need to touch the back end because it needs to store the new information that comes from the transport rate API. Yeah, no, but my object that one too because until we don't have the triple planner 2.
[08:05:37] **Other**: We will not deliver value so it wouldn't even make sense to build it at all because we are not going to use it. Can I can I delay this question exactly and you have an answer to this for me. Decision 4 document.
[08:05:48] **Other**: Which we hopefully still reach today. And I know we are getting out of energy because it's a long decision documents.
[08:05:54] **Other**: Keep it in mind or write it down please.
[08:06:08] **Other**: The decisions is as we said my train of thought. The decision is front end as planned as discussed domain clean app.
[08:06:19] **Other**: We have decided to do this kind of migration where we basically look into each of the domain validation in isolation. Decide if you want to move it, if we want to move it and so on and then tackle them one by one. In the end that the tool planar one back end.
[08:06:34] **Other**: When it have lost all these one domains becomes the close to the target architectural because then only has this few elements that are defined in decision document.
[08:06:46] **Other**: One.
[08:06:47] **Other**: So we are reducing step by step the current back end by removing this functionality. So in the end we have the shell or the defined logic lead that's decided in decision one.
[08:07:08] **Other**: I think the AI recommenders and AI agents can be built in parallel.
[08:07:17] **Other**: AI agents can only.
[08:07:19] **Other**: Use the planner 2 API directly. So they are calling.
[08:07:26] **Other**: Allowed interactions.
[08:07:28] **Other**: If they do exist. That means the trip backup needs to provide an API.
[08:07:33] **Other**: And then the agent can manipulate this AI in the same way as a planner 2 front end would do.
[08:07:40] **Other**: The commanders are more passive.
[08:07:42] **Other**: Gregor calls on destination insights. They are either called by the front end because they are pulling information. For example what are recommendations for this stay?
[08:07:52] **Other**: Or the backend is calling the recommenders to basically create the consistency and valid trip.
[08:07:59] **Other**: There is an element of open questions that I want to understand how we can guide these regulations specifically if one recommender needs input for another recommender.
[08:08:08] **Other**: Or AI agents are using recommenders.
[08:08:11] **Other**: Gregor has an idea but I also want to have a specific decision document here.
[08:08:18] **Other**: So I don't want to jump too much but this is basically the fact about this AI interactions.
[08:08:31] **Other**: Now we come to the interesting.
[08:08:33] **Other**: Part.
[08:08:34] **Other**: Because this is one how we.
[08:08:39] **Other**: Basically.
[08:08:42] **Other**: If we can paralyze or like how do we paralyze these two remaining workforce. As I said in the beginning we do have three work streams in the team.
[08:08:50] **Other**: TP2 API migration restoring of the domain.
[08:08:55] **Other**: And weight service.
[08:08:56] **Other**: With the decision to move the weight service out, we do have two major work streams left.
[08:09:04] **Other**: And now the question is how these two work streams are basically.
[08:09:10] **Other**: One in parallel.
[08:09:11] **Other**: And initially I thought like we do have this option actually.
[08:09:19] **Other**: We could build the strip planner API outside of the two planner backend.
[08:09:25] **Other**: As a separate service.
[08:09:27] **Other**: The responsibility of the service is basically interact with the planner one back end in a way that it uses a two player one back end as a storage.
[08:09:35] **Other**: And provides the API information to the outside.
[08:09:39] **Other**: In the new structure in the new way as we want. I don't see this layer having a storage because it basically fetches the offer.
[08:09:48] **Other**: Like if you want to get one single accommodation it fetches the root offer from the trip planner back end fix the one accommodation that you request and expose it.
[08:09:57] **Other**: The problem with this is we probably need to change.
[08:10:03] **Other**: That benefit. It's a great achieving independence.
[08:10:07] **Other**: For onboarding you only need to understand the offer structure because the API interaction is store and fetch like.
[08:10:18] **Other**: Translating it didn't explain it.
[08:10:22] **Other**: And fetching the full offer.
[08:10:25] **Other**: The problem with this interaction you need less context to do this and you can do this onboarding easier. You have a greater independency.
[08:10:34] **Other**: And you are closer to this font and decision. The problem with this is exactly the examples that F I have mentioned. If you want to pick one accommodations, most likely you would introduce a kind of ID for this, which then actually needs to means you have to change the backend and you have to need to change the storage layer.
[08:10:51] **Other**: And this is why the downside of this option is that you do have a dependency. So you can't see this so independent as it is.
[08:11:01] **Other**: That means whenever you have.
[08:11:04] **Other**: Changes in Twilner 2 that are not existing into planner one, you may need to adjust it up to the storage layer. And then you have to remove it for two planar one.
[08:11:15] **Other**: And the other way around.
[08:11:16] **Other**: There is functionality into planner one that you don't want to have into planner two that needs to be removed.
[08:11:24] **Other**: There is a very technical thing.
[08:11:26] **Other**: Which I don't want to discuss further, but there is also a duplication effort. At the moment working with the trip.
[08:11:35] **Other**: There is lodging in the trip planar one backend that can be reused.
[08:11:41] **Other**: So that allows us working with the trip and the trip is a complex thing. And this logic needs to be duplicated.
[08:11:48] **Other**: And then adjusted in two places if you have changes to this logic.
[08:11:54] **Other**: The benefits are still there.
[08:12:04] **Other**: So this is option one.
[08:12:08] **Other**: The number I understand is part of the question.
[08:12:14] **Other**: This is built TP2 API.
[08:12:20] **Other**: For the transparent proxy because for me it has no storage and persistency.
[08:12:23] **Other**: Layer. And so the persistency layer is the twip planner one back side of the GP1 backet.
[08:12:28] **Other**: Okay.
[08:12:29] **Other**: So completely independent. Is it time for comments questions already or do you want to finish option two? No, you can ask option.
[08:12:39] **Other**: I always thought that the issue is also that the current backend is so complex and no one really has the whole context etc.
[08:12:51] **Other**: Is that not the option where we could like speeding up the whole getting rid of the domain violation and making progress for the triplet 2.0 in a way that we have maybe then an external team which doesn't need this deep knowledge and can really.
[08:13:10] **Other**: Like pull out all the domain violations out of that build as an extra like this as this extra services and in parallel. I don't know we deprecate V2.
[08:13:24] **Other**: And yeah that's just what I had in mind. So maybe yes that means additional cost for some time, but maybe speeds up really to come to a point where we have this clean architecture.
[08:13:36] **Other**: And Pedro.
[08:13:38] **Other**: Are you answering to this or do you have a completely different.
[08:13:44] **Other**: Then let me answer to this. So basically can you rephrase the question because I'm not so sure if I understand the question. Okay.
[08:13:51] **Other**: Is the question if we can outsource to the.
[08:13:55] **Other**: Like the new architecture.
[08:13:58] **Other**: Not to compute whole architecture but removing the domain violations that we currently have in the planner.
[08:14:07] **Other**: Current systems front and back end whatever I understand it's a mix. So really building these on a in a clean architecture.
[08:14:15] **Other**: And then when it's done handing it over to the teams.
[08:14:19] **Other**: Or who would own it.
[08:14:25] **Other**: Okay, so one and also maybe outsourced then this building these red APIs. I don't know. Yeah. So all these things where we don't need this deep domain knowledge.
[08:14:38] **Other**: Do you want to answer this or is it a question answer?
[08:14:40] **Other**: Ed? No, no, that's that's her question. So like I understand now your question. I have my answer but you can answer.
[08:14:48] **Other**: I think the problem here is that the interactions are not so decoupled.
[08:14:53] **Other**: So if you have a team that is changing the data structure, that's changing the functionality.
[08:15:00] **Other**: On the one side we may break this internal contact with the other team that is that is outsourced. So there is the collaboration required to basically keep the two in sync. So we're creating a dependency which comes also with a cost. And the question for me is.
[08:15:18] **Other**: How often does a TP2 feature needs adjustments on TP1 side? Because if the TP2 API now provides something that not exists in the two planner backend, then suddenly the two planar backend team that's busy with the strength and migration needs to change not only the data storage but also the whole validation and object layers in between.
[08:15:37] **Other**: So whenever this happens you have two teams working on the same thing.
[08:15:44] **Other**: This is the question how often does it happen?
[08:15:47] **Other**: And then the second question is how valuable is the existing logic and features in the tool. Just one example. At the moment we are talking about the consistency and validation layer.
[08:15:57] **Other**: But also the pricing layers and met it. The new team cannot use the pricing service as long as it's not externalized.
[08:16:05] **Other**: Web pricing is not exposed to the new team.
[08:16:08] **Other**: That means if building this in the same backend we could use the prices service in isolation.
[08:16:15] **Other**: Having this not exposed yet is blocking this. And this is basically the question is how valuable is it and can we time it in a way that in the moment a new team or the outsourced team needs the pricing service? It's there.
[08:16:29] **Other**: But I have the feeling we have not like really thought that through because you say there are a lot of ifs and whens and what do we want to build. So as long as we don't have that are we really able to make a decision then or have a preference for one or the other.
[08:16:44] **Other**: Next document in general one more thing in general.
[08:16:48] **Other**: Like at the moment we cannot make any progress because the teams are not even working on this here we are trying not to optimize this workstreams without even having this people working on this.
[08:17:03] **Other**: So the weight service is the one that's now blocking everything.
[08:17:07] **Other**: We don't even and this is the question that I have is if we get rid of this weight service we have two people just building this API. Having the knowledge about the concept of the product of the data structure having the knowledge of the backer to do this. If this is not more efficient to have two people that have actually the insights and the domain knowledge to build it instead of no one currently and then outsourcing this. This is why I'm saying the weight service outsourcing for me is a no brainer because this is a very light with our company structure. It's very much isolated. It's not too planar domain.
[08:17:45] **Other**: This is a much tougher decision.
[08:17:50] **Other**: Will argue that this is the core of the business. We cannot outsource the core of the business logic. I don't mean outsourcing with giving away our, I don't know that we own this part. It's just like holding that and making it ready and then we still own it. So like we do with lambgus or in the supply team at the moment. We want to work with it.
[08:18:15] **Other**: Pedro.
[08:18:18] **Other**: Yeah.
[08:18:20] **Other**: I guess one typical proxy thing. So just from you understand what that would actually mean.
[08:18:30] **Other**: So I have a comment there.
[08:18:32] **Other**: So what is TP2 API proxy exactly? So does it get request from.
[08:18:39] **Other**: The front and.
[08:18:45] **Other**: Sure?
[08:18:47] **Other**: Yeah so basically put requests from the front end.
[08:18:51] **Other**: Or the agentic AI with some very specific API that we have designed to match the planet you need. This would then receive by the TP2 API layer.
[08:19:04] **Other**: Which then would fetch the offer from the TP1 backend.
[08:19:12] **Other**: Okay, so it was more than a proxy.
[08:19:18] **Other**: It detects logic.
[08:19:19] **Other**: Yeah, so it's TP2 is using TP1 as a storage layer.
[08:19:24] **Other**: Builds on top its own logic. I guess the question then is when it stores and I think we there are some other points regarding that.
[08:19:37] **Other**: When it tries to use TP2 as a storage layer if it does.
[08:19:44] **Other**: So while going through TP1's own logic.
[08:19:51] **Other**: Yeah.
[08:19:54] **Other**: So it yeah it will go through also TP1 logic.
[08:19:59] **Other**: Yeah because we do have functionality that's that's executed when storing it.
[08:20:05] **Other**: Validate the offer for planner one. So you need to make sure that this one is still generating a valid offer for to planner one.
[08:20:14] **Other**: Right because we need to add at some point go back and forth between the two versions.
[08:20:21] **Other**: Okay thanks.
[08:20:22] **Other**: And this is also the point this one.
[08:20:25] **Other**: Needs to create a valid offer for TP1.
[08:20:31] **Other**: So maybe to the question of Christine here on can we kind of set two teams on the same problem also not let's keep that out. But can we put two teams running in parallel to it?
[08:20:50] **Other**: They have a similar entry point and they have the same out and the part in the middle is where it gets funny.
[08:21:01] **Other**: Where certain things we would say it's also valuable that we have it there.
[08:21:07] **Other**: So this is exactly the part where we need to understand with the strong layer pattern which elements do we keep which are part of the planning domain really and which are not those get out the others we keep. And I think here of course we need to understand.
[08:21:31] **Other**: What are the areas that are so to say the black holes nobody wants to touch.
[08:21:37] **Other**: But in in that regard.
[08:21:41] **Other**: This complexity we either way we would need to rebuild it.
[08:21:48] **Other**: And we would need to build up that knowledge that domain knowledge again which I feel the cost of.
[08:21:58] **Other**: Trying to get that clean is usually higher than reusing what you have and optimizing if the package is small enough. That's why we are packaging now to understand and you have now a smaller more overseeable package.
[08:22:21] **Other**: To be able then to decide what you keep or not.
[08:22:26] **Other**: So that's why.
[08:22:28] **Other**: This strangling and packaging is super important so that you don't have like this whole complexity in front of you and trying to get mastering of that move in my mind it's more about okay so there's someone an expert I don't know if that's Pedro Robert who says okay so from all the complexity that I have in the current backend I want to start with extracting this part because it's violating the domain and it will war and or it should sit in extra service and when the decision is made I don't know we define high level what we want to do and then it's simply built by by a second team. I mean in any case it needs to be a decision by the way for the next steps is made lead to deprecation.
[08:23:10] **Other**: Which you see it's a huge coordination and also a huge problem already to subtract it from from the trip planner. The next one I would actually vote for the pricing service because there's also a business value that's in my store like there are progress on these things.
[08:23:24] **Other**: But you see already on the veto migration how complex it is.
[08:23:29] **Other**: And this is because we have mixed up domains so badly.
[08:23:34] **Other**: And to be honest there is no doubt in my thing we need to support two work streams.
[08:23:43] **Other**: Either by separating the code base or having this on the same code piece but they need to be supported to work. This works streams are basically done by two different teams or the same team. But in the end two work streams need to be run in parallel.
[08:24:00] **Other**: Which.
[08:24:01] **Other**: Are triangle migration like moving all the domains that don't belong to and the second part is the trip planner two API.
[08:24:08] **Other**: Nice. Okay because I raised my hand specifically for this first point.
[08:24:13] **Other**: I do understand and by the north star vision for the target architecture.
[08:24:18] **Other**: The decision one basically and also decision two is sensible to me.
[08:24:22] **Other**: My question is how urgent is it to do this strangler migration? If we say we build into the triple n1 backend where a lot of functionality already exists then my question is what really is the value of tackling this now versus you already have lost a couple of weeks for veto because you have to need to build the transport recommendation but like there are some cases where I'm not quite sure for example pricing does pricing need to move out of the trip planner back and now yes if you do a quoting as a test the question is now so now now not but it's something that we need to tackle to reach tp2 because it would be on the.
[08:25:03] **Other**: Lower side of the list.
[08:25:06] **Other**: I think there are maybe three or four things that come before that.
[08:25:11] **Other**: But it's that's why it's on the target picture.
[08:25:15] **Other**: But is it is it cycle two no there are other things is it cycle three maybe maybe even it's cycle four.
[08:25:25] **Other**: It depends.
[08:25:26] **Other**: So it's on the lower part of the priority for sure.
[08:25:32] **Other**: But knowing it now makes it understandable on if you want to tackle something that would.
[08:25:41] **Other**: Exactly go into that we know okay we have this dependency now either we don't tackle that use case.
[08:25:51] **Other**: Or we do the migration of the price yeah so so basically the way I'm understanding you is you say this should happen on a per neat basis if we see okay we are now tackling this topic.
[08:26:04] **Other**: And then do we do it in a way that we've always been doing it or do we do it in a way that's aligned with the target architecture then we would want to go the path of the target architecture and that I would buy I think I would be a bit cautious and we have to see that then on a case by case basis.
[08:26:18] **Other**: I guess to build things just because they're nicely aligned with some kind of target picture without it really providing value to the company.
[08:26:27] **Other**: This is all I'm saying like I do agree that this is like a great architectural framework. We just have to be a bit careful of in like how we prioritize things.
[08:26:37] **Other**: In migrating things versus maybe building new things that actually provide value to the company provides value because then you don't you are faster on developing something like when you reduce the complexity of the whole backend system of the trip planner.
[08:26:51] **Other**: You can actually build things faster.
[08:26:56] **Other**: The reason why.
[08:26:59] **Other**: We have this complexity is to maintain the reason why Gregor, are you like wagons a lot so much is because you like Gregor, we all like Gregor, but also like that she has all the steps that he has all this insights from six years or seven years. And and this is hard to replicate.
[08:27:18] **Other**: And this is a consequences of the decision. So I would argue yes you are slower. The second element is some of the dependencies really affecting the new features and this is also for me then the hint for prioritization. So if we don't remove document handling before you have your I ready or like before you want to have a new eye that covers the whole quoting process.
[08:27:37] **Other**: That you need to build document pending into planner two AI.
[08:27:41] **Other**: And that's a hard no.
[08:27:43] **Other**: Yeah to make it to make it really want to because that's that's the part where we also want to learn from the past or in that moment that decision was the right decision to do. But today it's not anymore.
[08:28:03] **Other**: And that's where.
[08:28:07] **Other**: When we identify that it's also easier to do a planning also to understand what's what it means for delivery.
[08:28:17] **Other**: And what we need to take into account. And we if we already know we are going in that direction we can decide to take it on now. So at the point where we want to deliver the use case we are even able to do it within a cycle.
[08:28:35] **Other**: So yes of course I'm with you.
[08:28:40] **Other**: Over engineering is not is never a good answer to it. That would be also something if we are bored, which I believe we are not that usually happens that we do the golden handles.
[08:28:59] **Other**: Here it is.
[08:29:01] **Other**: Starting to be a necessity to be able to empower also the team to do certain things which we are not able right now.
[08:29:12] **Other**: And yeah.
[08:29:14] **Other**: And also having opportunities to identify where the issues really lie.
[08:29:20] **Other**: Like.
[08:29:22] **Other**: Supply would need to be able to provide faster certain things. How do we solve that?
[08:29:29] **Other**: Pricing service?
[08:29:31] **Other**: Yeah, it may get even more interesting in the next year.
[08:29:37] **Other**: For sure it's getting more interesting next year.
[08:29:41] **Other**: Preparing for that.
[08:29:43] **Other**: Would enable to 2027.
[08:29:47] **Other**: So things like that. I would actually like to use the last half hour for the decision for comment four just to lock it in having this in the same backend is less risky.
[08:29:59] **Other**: And also less overall work. This is why I tend to offer option two. We still need to find a way to enable to work streams.
[08:30:09] **Other**: That means two workbench needs to be able to run in parallel.
[08:30:13] **Other**: If this is with option two now in the same code base or not, if it's in the same code base, we need to separate these two tracks.
[08:30:21] **Other**: In a way that they can execute it in parallel. But we need to be able to execute these two tracks parallel.
[08:30:26] **Other**: Here I have basically my second open question which we now have added to option one because in the end we need a roadmap for planner two on the on the business impact side like when we think we can deprecate this. But also the architectural side, that means we need to list these services that we need to move out and prioritize these services.
[08:30:47] **Other**: So in the end it's some holistic roadmap for.
[08:30:50] **Other**: Both streams.
[08:30:54] **Other**: I don't have time to say I want to quickly go to decision. There are two hands. Yeah, sorry.
[08:31:04] **Other**: Just have one question that's related to this second point. So I see that TP2 is called out explicitly, but how do you think about route builder.
[08:31:13] **Other**: Is that for me is an element for TP2 because it's an entry point.
[08:31:18] **Other**: For any future to planning. Okay, so what that would mean then is that.
[08:31:25] **Other**: So I mean what's implicit because the team already split a little bit the from a product perspective. We talk about route builder and TP2 of it anymore.
[08:31:40] **Other**: It's more specifically scoped. But yeah, so but what Robert.
[08:31:49] **Other**: Is meaning here is it would support route builder and TP2 at that time. So this backend part is.
[08:32:02] **Other**: Supporting both of the front end products.
[08:32:05] **Other**: If we may call it like that.
[08:32:08] **Other**: Yeah. And then is it just TP2 API or is it a TP2 backend? For example all the orchestration work that needs to be done. So it's of the API work stream. So basically that is the refinement on that part that I would really like to have another discussion on how is this back end element architected? Because I think here we need to go a little bit more deeper on AI specifics.
[08:32:44] **Other**: Find a recommendation that I have yet goes into that direction. But I don't want to bloat.
[08:32:50] **Other**: This part completely.
[08:32:53] **Other**: For.
[08:32:54] **Other**: Okay, me there.
[08:32:58] **Other**: I guess the question that Emil and I will have is.
[08:33:01] **Other**: How much is then blocked.
[08:33:03] **Other**: By the decisions.
[08:33:07] **Other**: To essentially like do this properly.
[08:33:09] **Other**: And split out the different services and focus on establishing the TP2 API if the route builder and all of the AI services are then.
[08:33:17] **Other**: If if the TP2 API is the foundation for those other two things.
[08:33:21] **Other**: I think that's decision for document.
[08:33:24] **Other**: Okay.
[08:33:26] **Other**: So blocked you mean by how parallel those two streams can go and do we have the capacity to work on it?
[08:33:38] **Other**: No I already said what I wanted to say but how I understood you is that working on this TP2 whatever big thing you mean can and will focus as a first step on enabling route builder.
[08:33:54] **Other**: Yeah because we have made the decision that we roll out. How I understood that let me rephrase just how I understood is that we have split the GP2 into two elements according to customer journey and we focus in the beginning of this entry point of the route builder.
[08:34:09] **Other**: Where we are already spending most of the conversion time because it's upper part earlier in the conversion funnel. This is why we are starting here. But for me the output and naturally it needs then into the planner too. This is why mentally I said it's the same product. We just have spoked it in a way or like.
[08:34:26] **Other**: Iterating in a way where it makes sense actually.
[08:34:29] **Other**: If it's too product.
[08:34:34] **Other**: Questions?
[08:34:35] **Other**: It's one product. It's just the scoping that we don't say we now have to build the complete TP2 API architecture.
[08:34:44] **Other**: Or the overall vision that we have with triple 2.0 but we start with a part that will enable the first scope that we want to the endpoint as part of the triplanner 2 API because it's a set of APIs that we need to build and of course it's prioritized according to product development. But of course we also need we don't need we can't do endpoint here and end point T and end point T and end point here.
[08:35:09] **Other**: At some point we actually need to come up with a consistent set of APIs because this will also then decouple the team. If you build a recommender on you have accommodation endpoints to update, delete whatever. And so they compart an AI agent that modifies accommodation is completely free to do this.
[08:35:23] **Other**: Then.
[08:35:25] **Other**: So if we build in the same meta we built up the APIs in the same metai hub and the front end becomes independent.
[08:35:34] **Other**: Because ideally the built a subset of an API that then enables all the different use cases in these teams.
[08:35:41] **Other**: Does it make sense?
[08:35:45] **Other**: Just saying if I have an update accommodation endpoint.
[08:35:48] **Other**: Where you can basically replace an accommodation or change and check in and checkout date. Then on the front end side you could build already accommodation recommender. You click on another accommodation you cause this endpoint. You add an accommodation you maybe cause the same endpoint. You're changing the number of nights you're calling the same endpoint.
[08:36:05] **Other**: Yeah, but it would still happen through the back end right calling these services. So there's still the orchestration having to call these services. So it's not independent. You always have this backend work for every single one like two points. You have this back at work once because you're providing one update endpoint that then can be used for different use cases.
[08:36:27] **Other**: Yes, but for every service you're building someone has to call that service right and that would be the tribute recommender AI agents not because AI agents are active.
[08:36:36] **Other**: Depends on the use case. It can still be called by the orchestration layer.
[08:36:39] **Other**: This is what I would really like a decision document. I think Edgar made a great point about like use cases for this but we can maybe take this offline.
[08:36:49] **Other**: But in the sense yes you are dependent on this API.
[08:36:54] **Other**: The answer is yes but this is this is how distributed systems work.
[08:36:59] **Other**: What I'm saying is I think it's overly optimistic to say then these teams can run in total independence and build new services. This is not what I said. This is not what I said. What I said is in the moment you come up with a more robust and a more complete set of APIs. In this moment you also have more independency. I never said complete. I said more. This goes in hand in hand. Could still be that for certain changes you need adjustments or you need a new set of APIs. But generally if you have a border option to manipulate a trip.
[08:37:27] **Other**: You have a higher chance that you recommend on AI agent is independent. Not completely. This is what I not said. Yeah you are more loosely coupled. That is the true.
[08:37:38] **Other**: Couple you are not deep integrated.
[08:37:41] **Other**: And that's the difference.
[08:37:43] **Other**: Yeah I think I still want to erase the concern that Ed and Christine both mentioned which is like does this mean if we now.
[08:37:51] **Other**: Agree on this and we haven't gotten to this document but what does this mean in practice for our building now and our delivery timeline let me let me go. This is exactly go to the decision for document. So first of all we need to basically make more robust parts to the future. We need to understand what brought us.
[08:38:11] **Other**: Here.
[08:38:12] **Other**: Like what borders here are the decision 1 to 3.
[08:38:16] **Other**: But also like we had too few FTEs per work streams or too many workshops in parallel.
[08:38:22] **Other**: Every major work stream roughly is estimated with two FTs.
[08:38:26] **Other**: We basically had one FTT per work stream or some for some blocks and we had only one FTEs.
[08:38:33] **Other**: It's not only a consequence as a focuses may be slower but it becomes more fragile. If one person leaves you not have foreseeable loss of workforce in the stream. But actually you need to use the remaining time to do the handover because you have only one person knowing the stream.
[08:38:49] **Other**: And this is what we already see with Gregor for another one and a half months we need now to take additional substantial time from him to do this onboarding of his work streams. And this is the consequences of having too many people per work stream.
[08:39:08] **Other**: It's a speed per work speed, but also like the fragility if someone leaves or something happens, someone is location whatever.
[08:39:15] **Other**: So this bought us here.
[08:39:17] **Other**: The one domain split as already discussed what is here.
[08:39:22] **Other**: I think the team split did not really help because mentally at least in the first part of the circle cycle, we didn't really consider to put more people on the same problem and it only happened with starting with the pricing service. And now this is about builder. We have no capacity lift to put more people on it even if it would be an easy straightforward way to do this.
[08:39:44] **Other**: I think also the impact focus on authoritarization had led to problems because we have discarded simpler options or simpler iterations in the terms of impact.
[08:39:58] **Other**: Just saying the transport builder would have worked with Alter service.
[08:40:02] **Other**: It would have generated less impact, but we would have generated impact through the route builder into the transport recommendation. See you again. The transport builder, you mean the router would have worked without a transport pricing service which is actually transfer weight.
[08:40:22] **Other**: Service.
[08:40:24] **Other**: Hacker transport pricing service.
[08:40:26] **Other**: Anyone said it's prerequisite.
[08:40:29] **Other**: Yeah Robert, the route builder was always designed to operate independently from the transfer rate service.
[08:40:37] **Other**: That's why I'm saying.
[08:40:38] **Other**: The transfer service could have been released without the road builder. So the route builder could have built on top only the transport recommendation without the transfer. It's always been like that.
[08:40:51] **Other**: We are now working on three things in parallel.
[08:40:53] **Other**: And that was just based on the value it would bring the header. Yeah, but the question is if you if you work on three streams in parallel or if you put so parallelizing versus.
[08:41:10] **Other**: Putting more people on one and finishing earlier. Right. So how many.
[08:41:18] **Other**: Tasks do you start versus doing a sequence of it?
[08:41:24] **Other**: That's one of the questions. And yeah, the power you can put into different tasks.
[08:41:34] **Other**: So maximum parallelization is not always the answer.
[08:41:38] **Other**: Sometimes yes sometimes no.
[08:41:40] **Other**: So that's rather the question here.
[08:41:45] **Other**: It's also like the transport pricing service. Is it the endpoint discussion that we had last point? We said it needs to be in the create endpoint. It needs to be an extra button in the trip planner and it needs to be in the in the transport recommender. So basically we need to stack these two recommenders. In the end every single of the situation would have bring a value.
[08:42:06] **Other**: Not the total value, but we are making the problem bigger and bigger because we aiming for maximizing the impact. We are not considering risk manimation.
[08:42:16] **Other**: Minimization.
[08:42:19] **Other**: Risk.
[08:42:20] **Other**: But it was never planned that they depend on each other. We always plan to launch them independently and then have yet implying that they go into TP1.
[08:42:33] **Other**: Yeah.
[08:42:35] **Other**: And then the question is if this is.
[08:42:39] **Other**: What completely makes sense or not.
[08:42:43] **Other**: With the complexity that we have.
[08:42:46] **Other**: That's another question. So because it's written in a way that they all depend on each other.
[08:42:52] **Other**: And they're not. No, we have maybe plant them to release slightly denate on each other, but we are working on them. And this is what Veronica said. We could have built on the route builder and the transfer, sorry, on the transport recommendation.
[08:43:09] **Other**: And then on the transfer pricing service.
[08:43:11] **Other**: Which transfer weight service.
[08:43:15] **Other**: And we have now three works from Empire which preventing us from even estimating the route builder where actually the biggest impact comes from the route builder from my understanding.
[08:43:30] **Other**: Going forwards. I mean, so this is where it gets tricky, right? Because from the product side, if you ask us when we would like things to be delivered, it would always be like as many things as once. But how do we avoid this situation going forward? So who ultimately is the one that decides how many things should be paralyzed, parallelized.
[08:43:52] **Other**: That's engineering manager task.
[08:43:58] **Other**: About saying we cannot open those many parallel tests. Yeah, but ultimately that's exactly, did you share the TP2 guidelines?
[08:44:10] **Other**: Not yet because it didn't have time to find window.
[08:44:15] **Other**: But that's exactly what we're, I mean, it's always a hard conversation.
[08:44:22] **Other**: It's always, so to say, to clarify, to understand what is the impact, what is the feasibility, what is the speed, what is and so on. So it's always an exchange. So that's why.
[08:44:37] **Other**: Product engineering needs to work together.
[08:44:40] **Other**: To.
[08:44:42] **Other**: Balance that out.
[08:44:44] **Other**: But it's basically our job.
[08:44:48] **Other**: To do that.
[08:44:50] **Other**: And with each having a different perspective to the question.
[08:44:57] **Other**: And then finding the right balance. And here I'm on understanding how many streams and how fast and yeah.
[08:45:09] **Other**: What having more of the understanding how this is going to build is definitely engineering manager. So engineering call while of course I expect from product to understand what is the impact, what could, what makes more sense from a business perspective. And then you puzzle it out.
[08:45:33] **Other**: Yeah, I think what will help us really combining the outcome roadmap that we define from product perspective mainly like the different things that we want to ship and the impact that we expect with really a good delivery roadmap.
[08:45:47] **Other**: So that because this will happen now every month, right that we will be asked. Okay, so what's do you commit to? Like what value will you ship and when? Right. So this will come now every month. So we really need to be very strong here specifically for that topic because it's the number one thing.
[08:46:06] **Other**: On company level because we expect so much impact from it. But I think we should have like just one vision offline because also like having a roadmap implies time to create. And then it's time that we're not deliberate.
[08:46:20] **Other**: So there's a cost of having this accuracy.
[08:46:25] **Other**: Yeah, that's why that's the topic of splitting the problems also right to have this understanding. I think now is a different packages. We had some packaging on the on the product side. We were still missing this clarity on the on the engineering. But that's exactly where this dialog needs to be.
[08:46:51] **Other**: Either you can solve it within the team or it needs to race, right? So it also needs to be happen in the voter planning.
[08:46:59] **Other**: Because if you commit in the ropem already to an impact where we didn't have time to create this packet and have this discussion, then the roadmap, it's impossible to fulfill. Are we still on track on this discussion? I feel like we are side tracking a bit. I think yes, we can take this offline as Silver suggested, but also like just to remind as a team split did not help because some of the parallelization came into the team split.
[08:47:22] **Other**: Which in the end is not helping then also to paralyze the work.
[08:47:28] **Other**: In general, like weights for about urgent next step, free up Gregor's time. I think it's already now. So basically we have redistributed Gregor's responsibilities on the infrastructure guild. It means we have two more weeks from Gregor.
[08:47:41] **Other**: I would urgently recommend to move the transport service out of central planner domain.
[08:47:48] **Other**: I actually propose to even pass.
[08:47:51] **Other**: The transport pricing service.
[08:47:53] **Other**: This is a tough discussion that we can also have offline.
[08:47:56] **Other**: The reason for this is it would immediately free up to 23 FTEs that could work on route builder and on the way to duplication. These are the ones that combine the value for milestone 1 and 4.
[08:48:10] **Other**: Beta duplication. We are basically.
[08:48:20] **Other**: Share this document already. No, sorry. First of all, sorry I'm mixing up the titles in this thing. I really believe we need to restore the domain boundaries earlier than later. The reason for this is if we keep this in the 2 planar team to support this stream, we would need to add.
[08:48:39] **Other**: At least two more people to basically support this initiative.
[08:48:45] **Other**: And the same team and we are staffing now a team to handle something that should not be handled on the team. So I would rather recommend to solve the supply problem on the supply side and not on the two planar domain.
[08:48:57] **Other**: If we get rid of the transport pricing service in the two planet domain, we do have much more capacity lifted left in the two planet domain to actually handle the real API interaction that matter.
[08:49:12] **Other**: So it basically frees up to time. It restores the domain boundaries with the knowledge and the domain knowledge that we need to have. And it also unlocks outsourcing option on the supply side where we already have partners and options.
[08:49:25] **Other**: Or even the knowledge to research this.
[08:49:30] **Other**: The decision, if it's after the release of the two pilot decisions or even before we can discuss the second urgent thing is we really need to create focus.
[08:49:40] **Other**: My recommendation is focusing the entire mochi pure squagger on the initial mining time of the video deprecation and route buildup.
[08:49:50] **Other**: These are the multiple reasons. I think this is the most important thing to do because it combines the agent efficiency gains.
[08:50:00] **Other**: From transport recommendation and drought builder. This enadling spatial milestone fork. So basically the cost on your side is to not deliver the value for transfer rate calculation.
[08:50:12] **Other**: Which I'm not even sure how much we can scale it up, but this would be the cost on your side, not deliver this value. But we would deliver the value for route builder v1 with zero and v1.
[08:50:24] **Other**: We would also deliver the value for milestone four. The veto duplication.
[08:50:31] **Other**: I see we do the inventory. But wait, we also do to has a double dependency. I think this is very important because I think we should say highest priority is everything around trip planner vision. And that also includes V2.
[08:50:49] **Other**: Yes. But if banner now has the highest company poverty, I would like to know because from my understanding, it's always a trade off decision.
[08:50:58] **Other**: Yeah, we can do that. But I think the clear guidance would help. And right now the clear guidance is there is no prioritize on that. Where are the most questions coming from or coming to, I would say it's triplan.
[08:51:17] **Other**: A.
[08:51:21] **Other**: That means we're deferring the impact from we have the higher risk on web application in case because Gregor is leaving.
[08:51:30] **Other**: And I still think like which is one of my comments here that I don't think that we will be able to deliver both things in the next cycle. It's okay because this is what I not said. Like I would like to focus us on these two topics.
[08:51:42] **Other**: For the reason of combining or distributing somehow the impact from my understanding is impact from transport recommendation route builder is already 60 70% of what we promised and trans await recommendation service.
[08:51:56] **Other**: Is at the moment with two destinations only limited value because it's only two destinations and only transfer and the scale up is more complex.
[08:52:04] **Other**: It would also make use best use of Gregor's time because the biggest problem for the team at the moment is the unknown area of the veto deprecation.
[08:52:12] **Other**: And the same for the trip planner two routing API is in Gregor's head. That means if we are not combining delivering business like we have created a conference page now. But still combining this business value with a handover is actually the most efficient way.
[08:52:30] **Other**: At rate this end.
[08:52:34] **Other**: So implicit here and I think it makes sense to make explicit is that root builder will still be then built into the existing trip planner one back end.
[08:52:43] **Other**: Yeah. Which this aligned with decision tree option.
[08:52:48] **Other**: And sorry, there's one other thing, right, which is that there is another option on the table, which is that.
[08:52:54] **Other**: Within the albatross team.
[08:52:57] **Other**: They can focus on building in the backend for root builder.
[08:53:02] **Other**: So a mix of Ruben and Yuri.
[08:53:06] **Other**: No because you don't know the two planner one back.
[08:53:09] **Other**: End. Like to be honest, in the moment we are pausing to the transport price service, we do have enough capacity to walk full steam on the on the well API.
[08:53:20] **Other**: But why would you dismiss that option? I mean, so this is something that we actually discussed within the team that Yuri and Rubin could give that a shot with Gregor in a more consulting role.
[08:53:33] **Other**: That's a path that we considered.
[08:53:35] **Other**: So that's option B that we're going to discuss on the previous Thursday meeting, but there's like what we're opting here is more option C, which is like having people working on their strengths and their skills. So back in people working on the back end, but the science and that design for me, the problem with this option is that you don't have any hand over to the backend engineers that actually need to maintain this at some point. This is why I'm saying going forward, I would put Gregor and maybe Lukash on the route builder API.
[08:54:03] **Other**: They have full focus, no interaction. They're building up the swap builder API for V1 and later for region.
[08:54:12] **Other**: And the remaining team Linus Taha.
[08:54:16] **Other**: Is now focusing on beta deprecation. Maybe lukash could join.
[08:54:23] **Other**: And urine. So then it does not change anything because you still have no capacity to build the TPS.
[08:54:29] **Other**: No, but you have more people maybe speeding up the back end for the small enough to build the like Gregor. Correct me if I'm wrong, but Goba is leaving. So we even beneficial not keep on building this. He is interested to move to the data data science area to work more on the recommended AI agent. That means any burning time that we split with Zui. It's a nice help and it's really an honorable offer from what I like it.
[08:54:53] **Other**: But in the end, if we make a decision on transport pricing, we do have enough capacity on the people that keep on working on the product that need to maintain it, that have the knowledge. They just need the time to work on to focus on what I did. Like rest type.
[08:55:07] **Other**: Player.
[08:55:08] **Other**: My current understanding is that we need capacity from the team to also work on the veto deprecation. So if we take transport pricing and the deprecation that's already I said pausing at not adding this to the speed. The recommendation is of not releasing it.
[08:55:22] **Other**: Shake it in the long term, but not in cycle two.
[08:55:25] **Other**: The TPS thing.
[08:55:27] **Other**: Yeah.
[08:55:30] **Other**: This one clarifying question regarding Christine's question about lukash moving to Albert trust.
[08:55:37] **Other**: Was that.
[08:55:39] **Other**: To manifest that he would be working on route builder or was that assuming that would.
[08:55:45] **Other**: Allow us somehow to work on transport pricing service? No, it was just to speed things up.
[08:55:50] **Other**: And to also have a backup in case someone is out sick. And the backup series one, the speed up, the best beat up that we can do is pausing back up for the time that we are now working on it because Gregor can be out sick. Lukash can be out sick.
[08:56:06] **Other**: Okay. You mean if people are out sick for too long.
[08:56:10] **Other**: Even if just one is outside or on vacation.
[08:56:14] **Other**: Or.
[08:56:16] **Other**: I am looking at it, I don't know whether that's in line.
[08:56:20] **Other**: So there's more or less.
[08:56:23] **Other**: Suggestion then I guess.
[08:56:25] **Other**: For me it makes sense.
[08:56:28] **Other**: To join.
[08:56:31] **Other**: Other trust and what she in that way that.
[08:56:36] **Other**: Only together like the people working on the trip planner and the people working on the recommenders.
[08:56:42] **Other**: They should work together and not in separate teams and in parallel somehow.
[08:56:47] **Other**: And so which is kind of the same thing that you suggested of moving lookers to the Albatross part it's the same direction so to say.
[08:56:57] **Other**: As moving the drip planner people to the.
[08:57:00] **Other**: AI people with.
[08:57:03] **Other**: That naming makes any sense.
[08:57:09] **Other**: And so I think basically the same team going forward.
[08:57:15] **Other**: Just like front end people and backend people being in the same team.
[08:57:18] **Other**: This is like data people and backend people being in the same team.
[08:57:25] **Other**: I would agree for more shared context. And because I also seconded Christine said.
[08:57:32] **Other**: Looker being a bottleneck of potential bottleneck because what we see with Gregor is that he's being tied to things.
[08:57:38] **Other**: To all things but coding.
[08:57:40] **Other**: And with better deprecation I could foresee that happening again. And so effectively I think it will be max 0.2 FTEs from Gregor being spent on RouteBuilder. And then we have only Luke Cash. And then having at least a shared context. So you want the ideas wooden, Lukash and Gregor on the route builder.
[08:57:59] **Other**: I think that, I mean let's see, I think the idea of joining the team so that at least have shared context of what's happening and can in theory jump in if Lukash is out, I think that would make sense. And then also have Tara and Linda's review the pull request for example.
[08:58:17] **Other**: Okay. That means for me this was the now target setup. I don't think so much about two teams. I think we have on the front end side for the route builder and the TP2. We have two front end people.
[08:58:29] **Other**: On the IHAP. We have two FTE, Schum and Ui. UE is going to replace on the back end side. We do actually need four FTEs to enable two separate work streams.
[08:58:43] **Other**: Which for me we can discuss the split, more on the veto degree equation more on the left triangle migration. Lukash Gregor, which will be replaced on the route builder on the two planner API.
[08:58:54] **Other**: If we want to, we can be temporary here.
[08:58:58] **Other**: But I don't.
[08:59:04] **Other**: Want to offer a slightly different version Gregor is not in anything other than knowledge sharing and documentation.
[08:59:14] **Other**: So that.
[08:59:16] **Other**: The breadth of this knowledge can move on and the team can start to learn to move without that safety net.
[08:59:26] **Other**: While we actually have the safety net.
[08:59:28] **Other**: Yeah, I think for the output, I would actually agree with the recommendations. The question is for the vetu if it not makes sense to basically actually remove it before tokamatik it or working on reviewing the parallel work of discovery and removing it.
[08:59:44] **Other**: So rod builder sounds like a new project. So less risk there. That definitely is where we need to see the team growing fast because that's where we have all the skeletons and all the nasty traps.
[09:00:00] **Other**: So this is where I think the team needs to grow faster.
[09:00:05] **Other**: To untangle and identify things in the existing code base.
[09:00:13] **Other**: Especially those that haven't seen so much practice or so much change in the last years.
[09:00:19] **Other**: We need to have follow up really the strong recommendation is to pass the TPS.
[09:00:27] **Other**: Move it to the supply domain and focus all resources on route builder and beta duplication.
[09:00:34] **Other**: Do you want to pause it now or after the first review? Actually no. The reason for this is I don't believe that the two destinations with transfers will give a lot of different value.
[09:00:43] **Other**: And rolling it out will take the remaining capacity from the team. What word it is? If we want to outsource this, if we want to hire this, then the transport pricing service is a very clear bound service, its own domain. It makes sense that you start with this.
[09:00:58] **Other**: I think we can, let's ponder a bit on this. We didn't read the document beforehand and we also need to discuss within the product team.
[09:01:05] **Other**: I guess. I guess what's open for the follow up is what this means for hiring. I mean, I guess this is a short term team setup kind of scenario and it kind of makes sense because there's no other better option. But in terms of hiring, I think we need to align and we should do that before you have the pitch next week.
[09:01:21] **Other**: Just saying the biggest need, where do you expect hiring.
[09:01:27] **Other**: From besides Gregor that it's going to be replaced in jury that has already a replacement?
[09:01:35] **Other**: To be discussed?
[09:01:36] **Other**: And Mohammed could be an additional supply team to handle the rate service. So I think that the supply team is outside of this list. No, but it will all contribute to success of this topic, right? What I'm saying here in the paragraph, you're thinking on kind of more around also. Yeah, fine. The supply team is in this first paragraph. So we need to outsource the PBS and we need to enable the supply topic.
[09:02:05] **Other**: Then you have less. I mean, just thinking about, for example, the whole topic of destination configuration. This is something that clearly, in my opinion, should live with supply. This is why I'm saying we need to enable a really complete new supply works to it. Yes. And that would mean, okay, you're saying you have to think about this first before being able to like now two things. This is for the team for the two planner team directly that builds a planner domain.
[09:02:33] **Other**: Then it depends on other teams. Please, please finish my sentence. This is a setup for the triplane team. The supply domain will not sit, really not sit in the two planar domain, but we need to build up a new supply work stream.
[09:02:47] **Other**: This additional FTEs on the supply side. But you will not mix these two things. That means what I can do. No one is saying that. Well, this is what I keep saying. This is a setup for the two planet team. And he is saying we need a second work stream with at least two, three FTEs on the supply side.
[09:03:04] **Other**: Okay. So what you're saying is at least two hires here.
[09:03:08] **Other**: And then it's already set.
[09:03:11] **Other**: Gregor will be replaced.
[09:03:13] **Other**: And this will be a back end.
[09:03:14] **Other**: And Muhammad.
[09:03:19] **Other**: No, because with front ends and I'm not talking about skills here, I'm just saying it's two front that you should be able to have enough progress.
[09:03:27] **Other**: The bottleneck at the moment is a back end team.
[09:03:31] **Other**: I'm not saying that we will not look into the skills in the next step. But there's two front end peeps. You are fast enough.
[09:03:38] **Other**: With two data science. You are passive.
[09:03:42] **Other**: Yeah, I think we need to have a separate discussion about this. So basically what you need is an additional front end.
[09:03:49] **Other**: Oh, it's not what I'm saying. But I also really need to leave because I have what is missing on numbers that you would like to look at.
[09:03:58] **Other**: I think we need to have a concrete hiring plan. This is a short term team setup. And what would be missing.
[09:04:06] **Other**: Several things. One is the roles you have mentioned here and the other one is definitely the skill thing that you just mentioned that we also have. This is another topic. I agree with this is a completely other topic. I'm just saying look at the numbers. Just as the FDEs.
[09:04:20] **Other**: If you just look into the FDEs, what would be missing?
[09:04:23] **Other**: What is preventing you with a number of FTEs with the number of senior engineers that are behind this number of FDEs? If the number of FTEs, I don't really have a problem. Okay, perfect. This is in another discussion.
[09:04:34] **Other**: But the numbers of FTEs is fine.
[09:04:39] **Other**: This is the thing that it's only mentioned in the text. I can make it explicit. Supply.
[09:04:47] **Other**: Needs is a different work stream.
[09:04:51] **Other**: And I would also question if we need more product power.
[09:04:54] **Other**: Because when we now start to work on additional supply products, domains, different blocks to them, which can contain actually own team because the supply topic is large.
[09:05:06] **Other**: Do you hear what we are saying that we don't have the full picture yet on there? It's not aligned yet.
[09:05:12] **Other**: Sorry, but the point for me is this is the target picture in FTEs with the different areas.
[09:05:18] **Other**: This is step one.
[09:05:20] **Other**: Here, the target picture we can discuss is, but it's getting, I don't hear anything that against the target picture regarding FTEs.
[09:05:30] **Other**: Was it true planar domain? Yes, but for the long term success of the whole experience that we want to build for our agents.
[09:05:38] **Other**: What I'm looking, where do you see the biggest need in FTEs?
[09:05:42] **Other**: This is my question. My last question for the meeting. Where do you see the biggest need for the FTEs?
[09:05:48] **Other**: For the number of FTEs.
[09:05:57] **Other**: My question, like where do you're saying it's not like what I'm wondering is where is an FTE number now missing?
[09:06:03] **Other**: I'm saying we need a different supply work stream. I could assume that for the complete TP2 vision, we would need another front end engineer.
[09:06:13] **Other**: So basically you would push for another front end FTE. And I would say three supply engineers. And I would say PM.
[09:06:24] **Other**: But I also need a bit of time.
[09:06:28] **Other**: On that. Right. I think we need to have a bit more discussion and also how that would translate into. But this means in the end it's about this one front end engineer.
[09:06:39] **Other**: Which you write on your mind that you would need. And this is what I also said.
[09:06:46] **Other**: But then we are fine from the target.
[09:06:49] **Other**: FTEs.
[09:06:53] **Other**: Okay. And this is if you would prioritize this is clear priority. This is the second priority.
[09:07:01] **Other**: Okay.
[09:07:02] **Other**: But then we were not so far apart. This was always clear.
[09:07:06] **Other**: After this document. And this is the only FTE that I think. But then do we have a follow?
[09:07:13] **Other**: Ing? We need to align, I think today, what we do as a next step then. Yeah, I think the most urgent thing is TPS. Like how do we like first of all decision and how do we enable this in the long term?
[09:07:23] **Other**: Should I tell that team to stop working?
[09:07:24] **Other**: With?
[09:07:25] **Other**: This is why we need to decision. Maybe that's what we need. That's a line between the three of us.
[09:07:31] **Other**: Maybe.
[09:07:33] **Other**: Lady with Silvia because there is an engineering need.
[09:07:38] **Other**: Yeah, let's see. I mean, we heard the engineering need.
[09:07:42] **Other**: Maybe it makes sense. Yeah, maybe you're right. All right. See you all. Bye bye.
