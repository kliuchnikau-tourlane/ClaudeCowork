# Tourlane<>Grafana: Intro

**Date**: 2026-04-24
**Time**: 13:00 - 13:30

## Attendees

- alex.wojdynski@grafana.com
- aliaksei.kliuchnikau@tourlane.com
- tim.klaver@grafana.com

## Transcript

[11:04:32] **Other**: But also parts of eastern europe and the baltics. And today I also have Tim with me, Tim is part of the same team and he is my or he is our team lead there.
[11:04:44] **You**: Nice to meet you.
[11:04:45] **Other**: Good to meet you. Thank you for the time today.
[11:04:48] **You**: Yeah about myself.
[11:04:50] **You**: So I'm Aleksei I'm an engineer manager for a couple of platform teams here at Tourlane.
[11:05:00] **You**: We basically have two engineering managers in the company and I'm also working closely with staff engineer who oversees our Grafana setup because we have Grafana set up for team metrics and we actually have yet introduced or just are in process of introducing another small Grafana instance for Dora metrics with dev lake.
[11:05:28] **You**: So yeah we're quite interested in Grafana topics.
[11:05:34] **Other**: Interesting. And when you say you already have Grafana setups, you have fully open source right now.
[11:05:39] **Other**: Right?
[11:05:41] **You**: Yeah self health.
[11:05:45] **Other**: Cool. Yeah, just to give this call a short agenda.
[11:05:49] **Other**: So I mean basically you have three topics I wanted to discuss with you. So first of all gonna explore a little bit how we can support you with Grafana in terms of observability.
[11:06:01] **Other**: And then I give you an overview about what's possible with Grafana. And then we're gonna see if there's next steps if you have an active valuation and we can have some. Some follow up stops. Follow up steps.
[11:06:14] **Other**: How does it sound for you?
[11:06:15] **You**: Yeah let's go.
[11:06:17] **Other**: That's cool? So maybe you can just give us a little bit of an overview about your setup right now. I mean, you said you have a few Grafana setups, but maybe you can. Explore a little bit deeper. What are you using it for and how the observability is currently structured at Tour?
[11:06:34] **Other**: Ln.
[11:06:35] **You**: Yeah so for Dora matrix it's just kind of devil lake set up with Grafana to show a bunch of.
[11:06:46] **You**: Dashboards for us.
[11:06:48] **You**: On top of dev lake data source. We are just using whatever dev lay comes with by default so far but we're just introducing it so maybe we'll kind of.
[11:07:01] **You**: Be able to expand it and build on top of.
[11:07:06] **You**: This data source that we have like built for us because yeah default one.
[11:07:11] **You**: Is quite interesting but yeah we see that we may want more if possible.
[11:07:19] **You**: For observability right for observability Grafana we have high level metrics in there high level business operations monitoring dashboards.
[11:07:33] **You**: In Grafana.
[11:07:36] **You**: And we have some alerting for some for some parts.
[11:07:41] **You**: Of our systems but nothing like very centralized the only kind of well organized part of our Grafana setup is this high level business operations.
[11:07:52] **You**: Per team.
[11:07:54] **You**: We have separate dashboards, we have a bunch of alerts on top of this and others are kind of just very experimental things that teams and engineers are doing there. So it's like.
[11:08:07] **You**: Yeah.
[11:08:08] **You**: Not very solid and stable setup I would say so it really has potential for improvement.
[11:08:16] **Other**: So I'm gonna send correctly of like different stacks, different teams. Nothing is centralized, but you have like a single view on everything. So you have to.
[11:08:27] **Other**: Sound a little bit, like, very manual workflows, but you have to go to every kind of team and they gonna give you the information, but nothing is really centralized, right? Where you have the single thing.
[11:08:41] **You**: Like one team that is kind of more strong with Grafana interest they have like better set up for their parts so they have like dashboard for their high level and low level operations there that they.
[11:08:57] **You**: Get mainly from cloud from AWS.
[11:09:02] **You**: Cloud watch.
[11:09:04] **You**: And other teams.
[11:09:06] **You**: Yeah.
[11:09:08] **You**: The minimal setup for them is that every team has high level business operations dashboard.
[11:09:15] **You**: That's it.
[11:09:17] **Other**: So just from the business operations side, right.
[11:09:21] **Other**: So how are you doing then? Are you doing tracing at all?
[11:09:26] **You**: No we are not doing tracing with Grafana.
[11:09:30] **Other**: There's some other solution. Do you have anything else?
[11:09:33] **Other**: Please?
[11:09:34] **You**: I think.
[11:09:36] **You**: Scouts.
[11:09:37] **You**: Something that teams are using for.
[11:09:39] **You**: This.
[11:09:42] **Other**: Interesting. And it's there from your perspective, any kind of initiative currently going on that you want to centralize everything.
[11:09:54] **You**: No note at the moment.
[11:09:57] **You**: We're interested more in kind of observability but tracing is probably the next step.
[11:10:04] **You**: We're also thinking about Prometheus.
[11:10:07] **You**: But we don't have really people with experience with that to drive it.
[11:10:13] **You**: And it's like slow burner on our kind of.
[11:10:19] **You**: Pipeline.
[11:10:20] **You**: So nothing specially planned yet.
[11:10:25] **Other**: When you say Prometheus is, why do you think it's not a solution what is already in place? Why don't you have anything for it right now?
[11:10:40] **You**: Deep into this topic I just heard.
[11:10:43] **You**: That people are looking into this for a couple of months but haven't heard.
[11:10:51] **You**: Like since then.
[11:10:53] **You**: So yeah, I'm not sure what what might be.
[11:10:57] **You**: What what permissions might be solving actually and how it may be fitting so yeah.
[11:11:04] **You**: Not really.
[11:11:06] **You**: On my kind of plate at the moment.
[11:11:10] **Other**: Okay, and on your kind of plate, what is the topic, what's most interesting?
[11:11:15] **Other**: Or most interesting for you in the next six to 12 months?
[11:11:19] **You**: So for me it's more centralized alerting and incident management so incident management is like very per team different solutions different alert method someone in Grafana someone in cloud watch someone in kind of more esoteric custom solution and really incident management this is what I want a central incident management solution for the company and then other topics afterwards.
[11:11:53] **Other**: Okay, why do you want it? Is it, can you maybe tell us a little bit how it currently works?
[11:12:02] **You**: Currently incident management is like very.
[11:12:06] **You**: Team manual.
[11:12:08] **You**: I would say some teams have some automated alerts some teams don't some teams can say when they had incident some things don't post more times.
[11:12:26] **You**: Kind of trace back things some teams don't have enough information inside so there are like definitely some.
[11:12:35] **You**: Improvements and why I wanted centralized.
[11:12:39] **You**: Yeah for visibility because like incident management is quite important to have more central and more kind of company standardized than the other things because yeah I want teams to be able to kind of.
[11:12:59] **You**: Reassign things to each other collaborate on this and have like central place to to do this.
[11:13:07] **Other**: And do you think it's possible with Grafana open source also, or do you need Grafana cloud for this?
[11:13:14] **You**: I'm not sure about this I'm not sure if Grafana can solve this part right so Grafana has alert but I'm not sure what Grafana can offer for.
[11:13:27] **You**: Incident management itself alert is one but then incident like when it started who takes over who is assigned what was the thing that that happened so something like major duties.
[11:13:44] **You**: Or other tools this is what I think of but I'm not sure if Grafana has options to solve this.
[11:13:54] **Other**: Let me share just one slide with you.
[11:13:58] **Other**: Because I mean, the IRM part is.
[11:14:02] **Other**: I'm not sure if you see my screen right now because oh yeah.
[11:14:06] **Other**: Just a little bit slower, maybe Friday thing.
[11:14:10] **Other**: So.
[11:14:10] **Other**: We have the IAM part, but it's just a piece of the Grafana suite we are offering.
[11:14:17] **Other**: So where you are currently is, I mean, you started like you said with the business metrics. So the visualization part, but you can bring any kind of data sources to Grafana. So we have basically two options.
[11:14:31] **Other**: Where we can use the existing plugins and plug tools like pager duty info, but you can also use our backends from we have metrics from it, we have movie for metrics, low key for logs and tempo for traces. And on top of top of that, when the data is on our side, we have a very, very good alerting capability and all the incident management part is just on top of that.
[11:14:58] **Other**: So I think stand alone.
[11:15:02] **Other**: Makes more sense to evaluate with full observability picture here.
[11:15:07] **Other**: So from the data perspective, and then if this data is here, then on top of it, you can, of course, build on call management, you can have incident management. We have the alerting parts, SLOs management. So it's just one part of the suite we're offering here.
[11:15:28] **You**: Box with incident response management with all on call management is it.
[11:15:35] **You**: Some.
[11:15:36] **You**: Kind of building block in Grafana or some external plugins on top of it?
[11:15:42] **Other**: It's basic. I mean, it's part of Grafana and you can, if you commit for a Grafana, you can use everything what we offer.
[11:15:50] **Other**: So it's not something what you have to purchase externally. Usually it works like that you commit a specific amount and just use the whole product suite we're offering.
[11:16:00] **Other**: But the interesting part is really if you have all the capabilities here in one place.
[11:16:08] **Other**: Including the IAM part.
[11:16:13] **Other**: So you said you also have, or have you, have you also something, some tool what they're using to track your SLOs?
[11:16:34] **You**: I don't think we have this.
[11:16:37] **You**: Kind.
[11:16:37] **You**: Of.
[11:16:41] **You**: No no no.
[11:16:45] **Other**: Okay.
[11:16:45] **Other**: But would you say from your perspective, there is any kind of initiative you currently have at the Kiwik to look at observability as a full picture, not only the IAM part. So.
[11:17:01] **Other**: For example, we have some new iStaff what came out in the last few weeks, AI observability.
[11:17:09] **Other**: Where you can. Because I saw that you're also using a lot of AI to learn and you said that it's going more on the I space.
[11:17:20] **Other**: That evaluating the full observability picture could be interesting for you. So is there any kind of initiative you have currently running?
[11:17:31] **You**: We don't run anything.
[11:17:33] **You**: I don't think so at least not something I know.
[11:17:39] **Other**: But what you're going to generally say that it makes sense from your perspective, look at cloud at all or are you like currently not happy with open source, but currently.
[11:17:54] **You**: I don't know I'm not sure what.
[11:17:59] **You**: The difference here.
[11:18:01] **You**: Between cloud and self host.
[11:18:05] **Other**: Yeah, I mean, the big difference is that everything in cloud from our side is out of the box and you don't have to manage it for yourself. So you are gaining a lot of time in terms of just using your time internally better. For example.
[11:18:21] **Other**: Use it more for from a product perspective.
[11:18:25] **Other**: But yeah, we are taking over the burden for management for managing everything. Plus on top of that, you of course have support.
[11:18:35] **Other**: And a little, I mean, the product is also better in terms of what you can do with the data you bring in over to Grafana. So what I said, if the data is on our side, you can use it more to have different alerts on it. You have the insulin response management part. So everything is managed from our side and you don't have the hustle with it.
[11:18:59] **Other**: But is it currently hard for you to manage Grafana yourself? So do you have any rough idea how much time you're spending per week to manage the Grafana stack?
[11:19:11] **You**: I think it's high we have one person who managed that.
[11:19:18] **You**: And yeah maybe actually a good idea for you to talk to them.
[11:19:27] **Other**: Yes, sounds good. I mean, if you can connect us to other teams who are really managing Grafana right now.
[11:19:34] **Other**: And start a conversation there, we would be happy to do that.
[11:19:39] **You**: Okay yeah I can send you.
[11:19:43] **You**: The the name it's our stuff engineer.
[11:19:48] **You**: Observability is their main.
[11:19:51] **You**: Topic that they maintain.
[11:19:54] **Other**: In terms of your company DNA, I guess, or the way that you guys usually operate. Do you look into SaaS solutions or is it more is the culture more a build it yourself culture?
[11:20:11] **You**: It's very mixed we are not against SAS we have quite a lot of sass.
[11:20:17] **You**: And platforms that we build that we use.
[11:20:21] **You**: But for some things like when we feel like price is not right for example this dollar metrics.
[11:20:29] **You**: Solution why we went for dev lake it was.
[11:20:32] **You**: Yeah we didn't feel that sass was options were offering enough for.
[11:20:39] **You**: The money they they wanted and we just decided to try like self hosted open source thing for this.
[11:20:50] **You**: And yeah Grafana historically it was just a test project and then it grew into kind of permanent solution but I don't think it's.
[11:21:01] **You**: Like.
[11:21:02] **You**: If it's painful if it works migration we will be against it.
[11:21:08] **Other**: Yeah, I mean, the benefit is you guys know Grafana, you know how it works.
[11:21:14] **Other**: Cloud, we obviously take a lot of the admin work off you and we run the infrastructure, but at its core, it's still Grafana.
[11:21:21] **Other**: And then there's all the additional info capabilities that Alex showed you, the extra modules that we can do on top of it.
[11:21:30] **Other**: So migration really isn't very difficult from an horse as stack over to us.
[11:21:36] **Other**: And thank you AI assistant even building those additional dashboards is made very easy for you.
[11:21:44] **Other**: The question really is whether this is something that would even be interesting to you.
[11:21:48] **Other**: Because from what you're saying, it would make sense to look at observability as a whole for Tourlane.
[11:21:56] **Other**: Look at how we can consolidate the views for you get your centralized view help you with incident response, help you with root cause analysis.
[11:22:08] **Other**: But that would sort of involve moving the OSS stacks over to a paid solution.
[11:22:17] **You**: So yeah I think to really assess.
[11:22:23] **You**: The benefit and kind of to understand like how.
[11:22:28] **You**: What are the pain points actually at the moment?
[11:22:32] **You**: I will connect you to our.
[11:22:34] **You**: Engineer.
[11:22:37] **You**: Who is really interested in this and yeah you can.
[11:22:42] **You**: Clarify with him all the questions and he will be marginally in a better position to to guide.
[11:22:45] **Other**: Perfect.
[11:22:49] **Other**: That sounds good.
[11:22:52] **Other**: Yeah, sounds perfect. Are you guys using slack internally that we can set up a channel and connect there?
[11:23:05] **Other**: Perfect? I will drop you an invite there.
[11:23:09] **Other**: And then it would be very cool if you can connect us with him to bring him into the conversation. But I mean like Tim said, it makes sense to look at the full picture. And if you say he's already interested in then would be.
[11:23:23] **You**: Him he'll be able to kind of tell you more about like.
[11:23:27] **You**: Why we are self hosting.
[11:23:34] **You**: Yeah and what are the kind of current issues with stack with extensibility?
[11:23:41] **You**: Which supports how much time he has invest.
[11:23:44] **You**: Ed.
[11:23:45] **You**: Yeah and from there we can we can see if it's something interesting for us to move on.
[11:23:51] **You**: Or we are fine with self-hosted one.
[11:23:57] **Other**: Perfect. Sounds good.
[11:23:59] **Other**: Could we already put something in our calendar to have a conversation with him or should we do.
[11:24:07] **Other**: Like?
[11:24:08] **You**: Yeah, I think let's catch up on slack first and see what what his perspective and then then see.
[11:24:16] **You**: What what next?
[11:24:20] **Other**: Cool sounds good?
[11:24:24] **Other**: Anything else from your side would be.
[11:24:27] **Other**: Can tackle right now.
[11:24:31] **You**: We have a plan let's think on this.
[11:24:37] **You**: And go from there.
[11:24:40] **Other**: Perfect sounds good.
[11:24:42] **You**: Perfect.
[11:24:43] **Other**: Thank you very much Alex to meet Ian thank you for the time.
[11:24:44] **You**: Right thank you.
[11:24:47] **You**: Thank you no worries.
[11:24:49] **Other**: Thank you.
[11:24:50] **You**: Okay.
