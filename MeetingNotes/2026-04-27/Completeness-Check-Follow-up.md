# Completeness Check Follow-up

**Date**: 2026-04-27
**Time**: 10:00 - 10:45

## Attendees

- minh.nguyen@tourlane.com
- Flamingo
- aliaksei.kliuchnikau@tourlane.com

## Transcript

[08:01:22] **You**: Good morning.
[08:01:24] **Other**: Good morning.
[08:01:43] **Other**: How.
[08:01:43] **Other**: Are you?
[08:01:46] **Other**: Weekend.
[08:01:51] **You**: Quite good.
[08:01:54] **Other**: Boring.
[08:01:56] **Other**: Did you say boring?
[08:01:57] **Other**: No.
[08:01:59] **Other**: Okay.
[08:02:00] **Other**: Maybe I just understood it.
[08:02:04] **Other**: On Saturday I went to this Kiiki gluten alley. It was very pretty.
[08:02:10] **Other**: With all the.
[08:02:13] **Other**: Sakura flower is it the one.
[08:02:18] **Other**: Next to action house?
[08:02:24] **Other**: Is it?
[08:02:26] **Other**: No it was the one next to.
[08:02:31] **Other**: What is the end station of unai.
[08:02:38] **Other**: No the other way around okay then I don't know.
[08:02:43] **Other**: Okay the one that you told me on Tuesday.
[08:02:46] **Other**: That you wanted to visit but it wasn't yet.
[08:02:52] **Other**: Well never mind you wanted to visit but then it like it wasn't ready yet.
[08:03:00] **Other**: I don't think that's the one.
[08:03:04] **Other**: I don't remember what I told you actually what wasn't the taxi so we were maybe I also remember wrongly maybe.
[08:03:16] **Other**: All right okay yeah I mean I was asking for a second session and I was also sharing some questions before because I.
[08:03:23] **Other**: Still would like to understand high level.
[08:03:28] **Other**: Everything that you shared was super helpful and insightful but I was just a bit surprised about kind of the way that we changed the solution based on the data findings which are really great I think I just need to understand I would like to understand more kind of of the background to then also assess yeah what does it mean for the rollout because then we will have like different solutions maybe one is the fallback of the other I don't know.
[08:03:54] **Other**: And yeah I mean I shared some questions before that I had not sure if there may be added if there were added more.
[08:04:03] **Other**: Okay so if you like we can just go through it if there are no other questions.
[08:04:11] **Other**: Yeah.
[08:04:15] **Other**: I could at least have me yeah I think one but it was mid I can think answer most of them but I think we can do it step by step okay.
[08:04:25] **Other**: Yeah I mean I understood I mean also some points you already touched but as mentioned since it was just a bit of a surprise I think would be good understanding like also if there's any data insights that you had for example that this historical evidence is not working for some suppliers I mean I understood it for sunny cast I guess but I did not really understand why so maybe yeah if you can just recap this would help I mean this historical approach I mean I have a function to look into this but that is very heavy of course because in general we have 70 to 80 different as a players let's say and each of these suppliers have different items missed also a little bit different let's say structured and some of them it's working to make this historical look up for some of them have to customize for some of them is not working let's say I'm insightful very heavy let's say and it's very hard to find a general solution for this I mean also this also may be similar to compare to the confirmation the extraction which also do and there also we do based rollout yeah because it's very customize this and in this case now is more like just loosen out to make it more general this is very heavy let's say and it's reasonable very while ago we need to provide a base rollout for this I think I mentioned there's also some months ago and yeah then based off this historical findings I found out that in many cases we don't need this to already improve let's say the current triple porting we have those fingers very good because when we don't have those historical lookup directly in the moment to do this reporting when it's much faster it's also don't need let's say for this let's reason here made some again like images I mean all that didn't have much time now like 20 minutes yeah so I will just go through some things here and share my insights let's say yeah the new thing is now what we wrote out first is like provider based rules.
[08:07:09] **Other**: And after this comes historical evidence is for the more complex ones and after this we also can think about an solution that we can put all these things together to generate this recording reporting much better, let's say.
[08:07:30] **Other**: But yeah let's do it step by step. I have another image here. I mean I just read this some minutes ago again. Yeah, because I also have not had to publish otherwise again maybe two days to prepare this.
[08:07:49] **Other**: I mean to compare again what we have now and how the first solution will look like. I think this image maybe good.
[08:08:00] **Other**: Today.
[08:08:02] **Other**: Also Min explained here we have already this is completely check in the light version.
[08:08:11] **Other**: Let's say.
[08:08:13] **Other**: And what is happening there we check each trip item they have on the trip if you just check if this item could be extracted in any document which is assigned to a trip yeah that means we have sometimes matches of course here. Okay. With the item expected maybe in a service list and also maybe in about virtual and that it's fine but you also think with maybe from last time maybe can share another maybe image here from the practical example.
[08:08:56] **Other**: This one here yeah this is the void show document you mean not will avoid chaya it's more like service list let's say about the matter so much because this is just how we define this document here and here we have this bush guards this was one example now which we found out this a little bit crucial and that false positive positives are here I think on page.
[08:09:30] **Other**: Maybe it's in beginning somewhere.
[08:09:39] **Other**: That this traction requires an ticket yeah but here this document is of course analyzed yeah and here are the item which we have in crypto planner is matched here so this hunt light shake is not missing it yeah because here is green and also extracted means here I mean not sure if you know this yeah but here shown for the bush gardens here it shows a match yeah so the past and they never show up of course this is current problem of course because this is a false positive and I think also in this example maybe there was already when the void shore uploaded yeah but what was a new virtual let's say yeah and it's it was not precise let's say so this is here the current approach here hopefully this is clear and I mean it's in the source code I think it's a short denied known by each one yeah so and what I did now because now which also the did a while ago and couldn't done before.
[08:10:53] **Other**: That we can maybe go here again on this one.
[08:10:58] **Other**: We cannot say because we have now this one to one okay almost one to one connection from the.
[08:11:07] **Other**: Two item supplier that means here this is first deal that means here this is.
[08:11:13] **Other**: ATI yeah and here this is hotel beds yeah but this was not working before but now we can do this because we edit now here inside.
[08:11:27] **Other**: We found a good example maybe sunny curse.
[08:11:31] **Other**: Yeah the ne cast for example here now this is.
[08:11:35] **Other**: Our let's say honey cast.
[08:11:39] **Other**: Provider here and these are the dmz we get from so we have no connection between these two ones and our our let's say that means we can find out now here that really this can say that when we go to push grounds again here for example we know that they expect a document from this provider this we couldn't do before let's say that's new I mean he just.
[08:12:21] **Other**: Sends the name that say and this could be found a little extraction could be happen in each document let's say and was not fixed but now we can say okay now that in this case.
[08:12:36] **Other**: Okay we have here a virtual list and we have like okay maybe we can define a rule.
[08:12:45] **Other**: Like in the first layer.
[08:12:49] **Other**: Couldn't light check we know that for each each time that we have an item.
[08:12:56] **Other**: From.
[08:12:57] **Other**: The provider ATI we expect virtual document.
[08:13:05] **Other**: So this is like more featuring down let's say and for example maybe take another example now as more clear what I mean with this approved better rules.
[08:13:24] **Other**: The lecture should I say for example for the void for the ttm first C we have just one we have just one book type and this drug type usually has to be in each trip that.
[08:13:46] **Other**: S a mislisted.
[08:13:49] **Other**: Insight that means we can define now.
[08:13:53] **Other**: Here okay it's missing here you should find it you should find this extracted booking in a document which is from the provider thirsty and it's specified as void show and we know that each time item from first is where we need this document so you should say proof of knowledge we can do for sandy cars and we simply can look for many many more one spectrum.
[08:14:35] **Other**: Have already like a list of possible.
[08:14:42] **Other**: Rules.
[08:14:49] **Other**: Research here like this and for example here like a big.
[08:14:54] **Other**: List here of possible rules we can define or earn ready for many like like here.
[08:15:05] **Other**: S the first one yeah here's where I item type extra cross because I was looking like this and here's the rule.
[08:15:17] **Other**: Means okay for each trip the expect number vulture and then we can maybe this and this we do for many many more.
[08:15:26] **Other**: Okay now.
[08:15:29] **Other**: Yeah that was exactly my question if you know like how many suppliers for which item types would kind of fall under this first rule.
[08:15:39] **Other**: Of course I mean I mean I have to do this like step by step yeah because we are so much to do there and usually need us maybe like data sign.
[08:15:55] **Other**: Ificant because it's so much fear in our data try to handle this yeah and I think this is a very good solution now and I have already here like many examples and for example now this is just rossed area about the future will be I think also better already request that we can just configure this so not anymore.
[08:16:24] **Other**: My part or can figure out this here for the festival for example for the duct type voucher he will be somewhere like in your flak yeah there will be a flag.
[08:16:42] **Other**: Okay I define now because I have knowledge of the data from the system that I define okay if now first the item appears in the trip I marked this void shore document has required like configuration then and configuration can also be done by developers but you're able to think of course now the developer of course have to make this research in the data to propose that sabers configuration. This will be like an here each rule what we would have now like hot coded here will be.
[08:17:28] **Other**: Figurable on the first.
[08:17:31] **Other**: Layer I mean his workflow yeah okay then maybe first yeah yeah yeah especially regarding the first example that you brought up I already have a counter example for you so.
[08:17:46] **Other**: From my knowledge and I just looked it up for example.
[08:17:51] **Other**: If I understood it correctly.
[08:17:55] **Other**: We would now expect firstly to appear in every trip right in every crypt that we have and.
[08:18:03] **Other**: I mean like the source let's say we are compared to is always the collection.
[08:18:15] **Other**: Crypto say and we're going to be and this is the plan so if.
[08:18:26] **Other**: You find an extra item from first year then yes okay of course we expect this watch okay okay broad source is always no no then I can drop my thing because I've had the impression that when ticking required it would mean we would expect this now every time and I can tell you definitely for saudi arabia and cook island zimbabwe and Namibia we're not expecting festival trips and maybe in the future others maybe there will be an animal in the future but like all good then.
[08:19:07] **Other**: That's the reason I look the data let's say inside here and here we have many.
[08:19:18] **Other**: I would say for example it's like a first one okay it's an ever but if here it's a husky one from a type extra cost we know it was defined in the trip so we expected and this we can adapt to many more.
[08:19:34] **Other**: Aleksei.
[08:19:36] **Other**: Yeah have a quick question so let's this is all great but my question is now more like on the functional side so currently we have this sort of light completeness check on the trip level right and how this will replace it or will it supplement it or what is the current like scope because currently we have our old version right which as you said there is like bush gardens activities that is if it's present in any document then it sort of passed.
[08:20:09] **Other**: And case will not be created.
[08:20:12] **Other**: So my question is now will it be additional check or it's like completely separate flow or what's what is a plan right now. So we keep the voucher flow as it is at the new completeness check flow or what is the idea.
[08:20:31] **Other**: Okay maybe surface I mean you can also answer it just wasn't true yeah so I think because currently it's unable to player by supplier like even the current check so it's not all suppliers are included so from my perspective I think we can just kind of switch it on switch it off and the new check will use the same infrastructure that what that's what we discussed before so kind of if this item is marked as missing it will follow the same flow so this case will be created that's nothing that we need to touch like the logic itself is there already but kind of to decide if this case will be created this will change.
[08:21:07] **Other**: And then we can just for example disable the current suppliers in this old setup and then enable it for the new setup and then it.
[08:21:13] **Other**: Will hopefully work out it's a box. You know if you flag I mean we have a new flex is we can say okay neighbor novel check and this is just a checkbox and then for example now the new multi select component which we need which reflect these rules are then able to configure, let's say. So for example now okay as a source code let's say it's finished now and now for example the rules that we check is the same as before but now I want to activate the new new completely check for first year. So I go and firstly provide check the neighbor for business check enables define the rule for first year where is it again?
[08:22:10] **Other**: Somewhere here I define a rule okay for first D I expect the item extra cost.
[08:22:18] **Other**: That we need the voice.
[08:22:20] **Other**: Doctype that's it and within the.
[08:22:24] **Other**: Roof let's say all we're ready for first see this fitness area and we can do to do this for many more we can do this for sunny cars because if the trip planner.
[08:22:37] **Other**: Item has funny cars inside the other type is renter and through the school connection we have I can put her down maybe once again when you can answer Alksei Monday 12 first again with sunika example okay it's here.
[08:22:59] **Other**: And let me check one yeah I totally understand how it will work from the UI perspective but can you open for me the trip like any trip it will work with any trip just random trip this will do yeah can you go like to the trip view from this trip.
[08:23:15] **Other**: So for now as you can see my question is so first of all we do it in 14 days before the trip starts right the schedule analysis and second this will this UI will show us missing if there is no booking associated to the strip number as Min suggested with a hash and if at least one missing we send the case to the sales force so my question is with new check.
[08:23:44] **Other**: I assume we will do what we are doing now but on top of that we'll add a new function ingest right that you'll go and check.
[08:23:54] **Other**: This or you do it the same function so if you do it while we are creating the booking and report if this is so we are doing this for the report only.
[08:24:05] **Other**: But for reports I mean the report is 14 days before departure and we start extracting the bookings 21 days before departure then we already have some data there about 14 days before departure left side is already in place basically improve the filtering let's say so basically we will consider this as a booking only if it falls into alt rules plus new rules correct.
[08:24:40] **Other**: Again okay so where I'm like I want to understand how this.
[08:24:46] **Other**: Will be injected in the current system so we have before we have extra cost from first t right and we only check if there is a booking.
[08:24:57] **Other**: According to this trip item now we not this is not enough as you say right because first the item can be found for example I don't know let's pretend ATI voucher with first ECM right so if I found it at least there I will mark it as fast.
[08:25:17] **Other**: Now you're saying if there is voucher from first T with extra cost type right it will be.
[08:25:25] **Other**: Like add-on.
[08:25:27] **Other**: Another rule or the only rule so that's where I'm like missing can you like explain what is the vision on what you're going to change so only trip report function how it's working now.
[08:25:41] **Other**: Or.
[08:25:43] **Other**: You don't understand what I mean.
[08:25:46] **Other**: Not exactly I mean okay my view now and in this moment now this ingest functions firing like before yeah it's exactly the same but plus now we check for example now let's pretend it's thirsty we have this trip item from first day and we know the type is extra cost the noble suppliers firstly so we look in our rule config for the provider first if we have a doc type which is upload enabled because this is an important ones yeah the neighbors and if the filter down then this possible.
[08:26:33] **Other**: Item types possible item types.
[08:26:41] **Other**: Here.
[08:26:42] **Other**: With where my things are.
[08:26:49] **Other**: Flipping go here again first here.
[08:26:56] **Other**: So this one here super important yeah this one item types you know that the source is to point out types so we failed I mean here pretty simple let's say yeah here's my very simple you have just one but we filter down mentioned here more like five to six more but just one of them is matching our same type we have to check so we know okay there's one void shock one block type we expect to have in the pup itself this approach here is in the first layer not on item level it's on item type level to understand because if we can like down okay expect now that this document have to be paid the trip and.
[08:27:54] **Other**: This we didn't know before let's say and this we don't want more and I think the more human yeah the middle for the next step is historical data that say even more one level down on the.
[08:28:15] **Other**: Item based one yeah but this is now item type based.
[08:28:21] **Other**: Type the C for me like a recommendation rental activity let's say this we can do for many ones yeah because we filtered down each possible job and that's really it was a very important.
[08:28:39] **Other**: Good you find here and be like.
[08:28:42] **Other**: Strict here in this case because then there's not here now when here's nothing is selected then of course each one here can be possible and this very hard let's say to find a rule there but of course it's also possible because also from the research I did here many many like for example hotel beds yeah have like this watch almost each.
[08:29:12] **Other**: Let's say has this document or this document in the al just to.
[08:29:24] **Other**: Say and we're going to say the next level then we can define for the hotel beds for.
