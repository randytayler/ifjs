var gametitle="TINY DUNGEON";
var gamedescription="Originally created for the 2018 Ludum Dare competition; altered for js13k users.";
var game = [{id:0,
body:`It's not easy being an orc, at least for you. Sure, the raw meat is tasty, and the grunt contests are fun to watch, but there's something vaguely dissatisfying about life in this dungeon.<br><br>It's probably the fact that you, unlike every other orc in this place, have a modicum of intelligence.<br><br>See? Even the word 'modicum' shows you're not like the others.<br><br>The other thing that sets you apart is that you seem to be the only one who knows you're all going to die.<br><br>You squeeze through the cave past roughly a billion other orcs, heading for the chief's chamber.`,
choices:[{text:`Continue...`,link:1}]
},
{id:1,
body:`You have to tell him. Chief Gorgel must have noticed by now - this dungeon is too small for the tribe. Prosperity is going to destroy you all; there's simply too many of you for what little air this dungeon can provide.<br><br>Back in the good ol' days, random adventurers would plow through here, decimating the population in search of treasure. But then the local tavern burned to the ground (well, the whole village, really), and the rumors about riches in them thar hills dried up. So did the adventurers.<br><br>Sure, the village was eventually resettled, and there's even a new tavern there now, but nobody's left who knows about this place. So no humans, elves, and dwarves have come knocking in a long time.<br><br>Too long.`,
choices:[{text:`Continue...`,link:2}]
},
{id:2,
body:`Frankly, you're glad - killing adventurers is a chore. Most orcs would kill to... kill... but you just like eating meat and grunting a lot. Simple pleasures, higher intelligence notwithstanding.<br><br>You're going to tell the chief. What you need - what this whole tribe needs - is some dwarven miners.<br><br>Dwarves could tunnel out new caverns and living spaces in no time, and they could be rewarded handsomely. With, say, gold. They love the stuff. There's a bunch in the chief's chamber, and he's not doing anything with it.<br><br>This is a great plan. But getting in to see the chief is hard. There are about fifty orcs in front of you, all waiting to complain about how crowded it is down here, but maybe the guards could be talked into letting you cut in line. Or, maybe you could go through the tributary that serves as a sewer, and make it up to the chief's chambers that way.`,
choices: [{text:`Bribe the guards`, link:3}, {text:`Trick the guards`, link:4}, {text:`Sneak in through the sewers`, link:5}]
},
{id:3,
body:`You walk to the head of the line and stop in front of the guards. "Hey, Rutgub. Hey, Boogle."<br><br>The guards don't acknowledge you.<br><br>"You guys hungry?"<br><br>Rutgub glances at you, and sniffs. "Why?"<br><br>"Well, I was wondering..." You look around, making sure none of the other orcs are listening. "Could you guys get me to the front of the line? I'll give you this bag of beetles."<br><br>Rutgub looks excited. He turns to Boogle, whose interest is also now piqued. "Glow beetles, or red beetles?" Boogle asks.<br><br>"Glow," you answer, holding up the bag and shaking it.<br><br>"I hate glow beetles," Boogle says. "The glow-juice stains my teeth and then I look weird."<br><br>You study Boogle for a moment. He's got an eye-patch, which is pretty common among low-intelligence sword-wielders, but he also has a nostril-patch. You hear it's because he thinks one of his nostrils is unsightly. In short, he already looks weird. But you say nothing.<br><br>"What if I give the glow beetles to Rutgub, and tomorrow I bring you some red beetles?"<br><br>Boogle thinks hard for a moment. Rutgub finally elbows him.<br><br>"Fine," he says, "but it better be a big bag."<br><br>They lead you into Chief Gorgel's chamber.`,
choices:[{text:`Continue...`,link:6}],
setConditions:[{var:`guardFight`,value:`false`}]
},
{id:4,
body:`You approach the guards, Rutgub and Boogle, bypassing the line. "Hey Rutgub. They put you with Boogle, huh?"<br><br>Boogle looks at you, then at Rutgub. "What does that mean?"<br><br>Rutgub is confused. "Yeah, what do you mean?"<br><br>"Just, you know, after what you said about working with Boogle."<br><br>"What did you say about me?!" Boogle demands.<br><br>"Nothing!"<br><br>"C'mon, Rutgub. You said that Boogle's nostril made you uncomfortable." Boogle gasps, and covers his nose. "What was the word you used? Nauseating?"<br><br>Rutgub looks back and forth between you and Boogle, stunned. Boogle's one eye fills with rage. "You want an ugly nose? I'll <i>give</i> you one!"<br><br>Boogle lands a solid punch in the shocked face of Rutgub, who staggers back. For a moment you wonder if Rutgub will retaliate on you, but no - he swings hard at Boogle, connecting with his jaw.<br><br>In moments, the two are brawling on the floor, and the line of orcs lose their formation and quickly circle the fighters. Orcish grunts fill the air, and you quietly slip past into Chief Gorgel's chamber.`,
choices:[{text:`Continue...`,link:6}],
setConditions:[{var:`guardFight`,value:`true`}]
},
{id:5,
body:`Orcs may not be smart, but they know enough to keep their drinking water upstream from their sewage water.<br><br>Unfortunately, you are downstream.<br><br>You wade into a small tributary, surrounded by the stone of the caves. You move upstream in the filth - which is quiet plentiful, given the overly-dense population of orcs in these caverns - and make your way in the direction of the chief's chamber. Soon you are on your hands and knees, squeezing through tiny passages that wreak of orcish waste, soaking yourself and staining your best loincloth. (By "best," we're saying it was the "least-stained." Look, hygiene isn't your strong suit.)<br><br>You come out in the garderobe of the chief's bedchamber - really just another cave, but with a straw bed and a decent-sized chest in the corner containing the wealth of the tribe. A passageway leads to the the audience chamber where Chief Gorgel is probably lazily listening to the same complaints from a thousand different orcs. Quietly, you make your way to edge of the passage, until you're in earshot.`,
choices:[{text:`Continue...`,link:7}]
},
{id:6,
body:`The most recent petitioner is just leaving. "Chief Gorgel?" you say politely. (Even orcs have decorum when addressing people who can order them beheaded.)<br><br>"Yes... Findle, is it?"<br><br>"Yes, I'm Findle," you answer, lying. Findle is your cousin, but there's never a good time to make a chief feel dumb. "I have a solution to our crowding problem."<br><br>The chief looks at you, surprised. "Let's hear it."<br><br>"We need dwarves. They could tunnel new space for us, including air holes to the surface."<br><br>The chief blinks, but says nothing.<br><br>"I suggest we send a contingent, asking for the dwarves' help, in exchange for tribe's gold."<br><br>"<i>My</i> gold," the chief corrects.<br><br>"Ah... yes."<br><br>The chief thinks for a moment. Then another. Then <i>another</i>. You give him time, because the cogs in his head turn notoriously slowly. Finally he speaks.<br><br>"GUARDS!" he shouts.`,
choices:[{text:`Continue...`,link:8}]
},
{id:7,
body:`"Enough is enough!" you hear the chief shout. "We need less orcs and more... less orcs!"<br><br>"Sir?" His first-in-command, Blithgup, says cautiously.<br><br>"It's time for some action. We need adventurers to attack! Like we had in my father's time!"<br><br>"Won't they... kill many of us?"<br><br>"Yes! We need less orcs! Less complaints! More air and food and space for the rest of us!"<br><br>"What do you propose, sir?"<br><br>"I need to send a spy. To their tavern. To tell tales of the wealth this dungeon holds."<br><br>You wince. It's a spectacularly bad idea. Plus, it will never work. If an orc steps foot in a human tavern--<br><br>"I'll fetch the Amulet of Transmogrification. You, Blithgup, will disguise yourself as a human, and infiltrate their place of stinky drinks!"<br><br>Okay, maybe it <i>will</i> work.<br><br>You hear hurried footsteps coming from the audience chamber.`,
setConditions:[{var:`knowsPlan`,value:`true`}],
choices:[{text:`Hide!`, link:9}, {text:`Race for the chest!`, link:10}]
},
{id:8,
preConditions:[[`guardFight`,`Rutgub and Boogle come stumbling in, bloody from head to toe. The chief doesn't seem to care.`,`Rutgub and Boogle come running in, Boogle's teeth glowing in the dim light.`]],
body:`<br><br>"I have a plan. Findle here is going to go to the dwarven stronghold--" your stomach drops "--and request aid from the beard-shorties. Find him a worthy steed."<br><br>This is not what you had planned. You wanted <i>soldiers</i> to go. A party of diplomats, or whatever the orcs could muster. Not a solo quest.`,
choices:[{text:`"I'll do it, your chieftanship!"`, link:11}, {text:`"Oh, I can't, chief. I have... knee cankers."`, link:12}]
},
{id:9,
body:`You frantically search the room for a hiding place, and spot your only hope: the chief's bed. It's a giant pile of straw with a blanket on top. You jump in, quickly covering yourself in itchy, itchy, straw.<br><br>A moment later, the chief waddles in, heading for the large chest in the opposite corner. It opens with a squeak, and from inside he draws a glowing amulet. He pauses.<br><br>And sniffs the air.<br><br>"Blithgup?" he says loudly. Blithgup runs in. "Do you smell that?"<br><br>Blithgup sniffs, regrets it, and says, "I have a nose, sir."<br><br>They both turn, look at your hiding place, and think. The chief says, "Go stab my bed a few times."<br><br>You jump out, straw sticking to you, and look at the garderobe.`,
choices:[{text:`Run for it!`, link:13}],
setConditions:[{var:`hasAmulet`,value:`false`}]
},
{id:10,
body:`You run for the chest in the corner, pop it open, and spot a glowing amulet amid the pile of gold. You swipe it just as the chief enters. His eyes go wide.<br><br>"BLITHGUP!"<br><br>Blithgup charges in, short sword drawn, and spots you. He doesn't need another command - he just charges.<br><br>You don't need a command, either - you put on the amulet, and run for the garderobe.`,
choices:[{text:`Back to the sewer!`, link:13}],
setConditions:[{var:`hasAmulet`,value:`true`}]
},
{id:11,
body:`"Excellent," the chief replies.<br><br>A few hours later, you're on the back of a dire wolf nearly twice your size, bounding through the forests towards Orebits, the nearest dwarven city. It's a bumpy ride, and your face itches from the false beard they've put on you. You're also wearing metal armor, a helmet hiding your pointed ears, and you feel ridiculous. You look very unlike a dwarf.<br><br>You're likely going to die. Who thought of this plan?<br><br><i>...Oh.</i><br><br>While long treks through the wilderness often make for exciting tales, yours is uneventful, and we shan't bore you with it. Suffice it to say, you arrive at Orebits two nights later with chapped thighs and a severe case of armor rash.<br><br>Orebits, while technically a 'city,' is entirely underground. These dwarves think like you do - living beneath the glare of a giant fireball in the sky is nothing short of madness.<br><br>You dismount the wolf before you get any closer, slapping it to send it away. It growls at you, then trots off in the other direction.`,
choices: [{text:`Continue...`, link:28}]
},
{id:12,
setConditions:[{var:`knowsPlan`,value:`false`}],
body:`"Knee cankers?" the chief asks. He looks at your bare knees, dubious. Blast your immodest loincloth.<br><br>"They're... under the skin. Very painful. I can barely w--"<br><br>"Enough! I hate cowards! Guards, kill this pusillanimous* fool!"<br><br>As Rutgub and Boogle march towards you, you hear the chief mutter, "We'll go with another plan to save the tribe."<br><br>*Actually, the chief used profanity. There's no way he would know the word 'pusillanimous.'`,
choices: [{text:`Run for it!`, link:27}]
},
{id:13,
body:`You dive through the gaping hole that the chief uses for a toilet, take a deep breath, and splash down into the sewer. Delightful. You can vaguely hear the chief shouting back above you, but your pursuers are probably going to take some convincing before they follow you.<br><br>You follow the current, squeezing through small gaps in the rock to follow the tributary to where it returns to the surface. Thankfully, they get larger the farther along you go... and also more rapid. This small stream is joined by others, until you actually think the sewage might be diluted enough that you can take a breath.<br><br>You do so.<br><br>You were wrong. It's still wretchedly stinky.<br><br>After another minute or two, however, you finally reach the exit of the little river into the overworld, and see starlight above you. <i>Now</i> you can take a breath.`,
choices:[{text:`Continue...`,link:14,conditions:[{var:`hasAmulet`,value:`true`}]}, {text:`Continue...`,link:15,conditions:[{var:`hasAmulet`,value:`false`}]}]
},
{id:14,
body:`You bathe a bit in the water, which is marginally less sewage-y here, and pull yourself on shore. That's when you first notice that you're wearing more than a loincloth now. You're wearing pants.<br><br>And a shirt!<br><br>Dear Grogg in Heaven, you're wearing BOOTS!<br><br>You feel your face, and look into the water to confirm - yes, you're a human now.<br><br>Well. Well well well.<br><br>Well.<br><br>This might just be handy when you talk to the dwarves.`,
choices:[{text:`Continue...`,link:16}]
},
{id:15,
body:`You bathe in the water for a bit, cleaning off the last of... well, you'd rather not think about it too much... and pull yourself on shore.<br><br>You're not far from the mouth of the cave where you live, so you head east, scraping yourself in underbrush (ah, <i>now</i> you understand what pants are for) until you reach the opening that leads to your tribe's home.<br><br>You wait.`,
"postConditions":[[`knowsPlan`,`It takes some time, but finally, you see a human come trudging out of the cave. It's no surprise to see the glowing amulet on his chest. Blithgup.`,`To your surprise, you see a <i>human</i> exiting the cave, with a glowing amulet on his chest.`]],
choices:[{text:`Talk to him`,link:17,conditions:[{var:`knowsPlan`,value:`true`}]},{text:`Attack him`,link:18,conditions:[{var:`knowsPlan`,value:`true`}]},{text:`Follow him`,link:19,conditions:[{var:`knowsPlan`,value:`true`}]},{text:`Talk to him`,link:30,conditions:[{var:`knowsPlan`,value:`false`}]},{text:`Follow him`,link:29,conditions:[{var:`knowsPlan`,value:`false`}]}]
},
{id:16,
body:`You trek northward towards Orebits, the dwarven city. Nothing happens. It's very boring.<br><br>Well, okay, you do meet a dryad along the way, fall in love, and after a whirlwind romance she discovers you're not, in fact, human, and breaks up with you. Heartbroken, you take to songwriting, putting your feelings in words, and yelling them in something resembling a melody. A forest giant approaches and asks you to please stop, you're scaring the wildlife, at which point you defiantly sing <i>even louder</i> (bad choice), and he picks you up, squeezing you in one fist until the amulet you were wearing shatters. The spell dissipates, and you are returned to orc form, at which point the giant drops you, and yells, "I squeezed a human into an orc!" He runs off to tell his friends, and you make a beeline out of there. Later, you come across a bard, who buys the lyrics to your melancholy song in exchange for a poorly-fitting suit of armor, and an itchy false beard.<br><br>But that's all that happens.<br><br>You reach Orebits, put on the armor and beard, and stroll up to the front gate.`,
choices:[{text:`Continue...`, link:28}]
},
{id:17,
body:`"Blithgup!" you call out. "You have to listen!"<br><br>He looks around, then sniffs the air. "Ah. The sewer mouse." You assume he means sewer <i>rat</i>, but now's not the time to correct him.<br><br>You come out into the moonlight. "Blithgup, there's a better way! We can enlist the dwarves for help! They could enlarge our tunnels, and--"<br><br>Blithgup draws his sword. "This is the chief's orders. We need fewer orcs. Starting with <i>you.</i>"`,
choices:[{text:`Defend yourself!`, link:18}]
},
{id:18,
body:`You pick up a rock, and hurl it at Blithgup's head. Maybe, with luck, you can knock him--<br><br>SMUNCH. The sound is sickening, and you rush over to see you've cracked his skull.<br><br>Dang, son. Watch that arm of yours.<br><br>You briefly try to revive him, but it's clear you've killed the chief's first-in-command.<br><br>O.O<br><br>You feel a bit queasy. You hold down your gorge long enough to take the amulet from Blithgup's neck, at which point his form changes, and, with the illusion gone, he is once again an orc.<br><br>A dead, dead, orc.<br><br>Somewhere nearby, you hear voices. Hurriedly, you put on the amulet. In a flush of magic, you suddenly become a human.`,
choices:[{text:`Continue...`, link:20}]
},
{id:19,
body:`You follow Blithgup through the woods for some time, thanking Grogg that the orc is deaf in the ear facing you, until you reach the outskirts of Tavershire. The smell of roasting pig wafts through the air, and you know it must be coming from the tavern - the aptly-named Dirty Rumor. Blithgup marches straight into the town, and you quietly follow.<br><br>Most of the village is asleep, thankfully, so no one spies your loinclothed orcish figure darting from shadow to shadow. Upon reaching the tavern, Blithgup disappears inside. The pork-scented smoke that escapes an open window beckons you to follow him.`,
choices:[{text:`Go in the tavern`, link:33},{text:`Listen at the window.`,link:34}]
},
{id:20,
body:`"It's this way!" calls a voice in the dark. In a moment, three halfmen come through the brush into the moonlight. They make almost no sound - partially because they're only half the size of normal humans, but partially because halfmen are notoriously sneaky.<br><br>"Whoa!" one of them says, looking at the scene. He stares at the dead form of Blithgup at your feet, and then back at you. "'Ere, boys, this fellow just killed an orc <i>with his bare hands!</i>"<br><br>You look down at your empty, human hands. It does look a <i>little</i> impressive, you suppose, but your guilt isn't letting you revel in the moment.<br><br>"What's yer name, champion?" another halfman says, smiling. You try to think of a human-sounding name.`,
choices:[{text:`"Bob."`, link:21},{text:`"Alan."`, link:21},{text:`"Dan."`, link:21}]
},
{id:21,
body:`"That's a ridiculous name," says the third halfman. "'Ere, we'll call you Steelfist. That's a proper name for someone who can take down an orc single-handed."<br><br> "Double-handed."<br><br>"What?"<br><br> "He's got two hands."<br><br>"Ah, yes, so he does. My mistake. It's dark."<br><br>They surround you, and guide you away from the body of Blithgup, into the woods."We'll buy you a drink if you'll tell us the tale!" the first halfman says, and soon you're on a road to Tavershire.`,
choices:[{text:`Continue...`, link:22}]
},
{id:22,
body:`Tavershire is the growing village that was built on the ashes of the prophetically-name Old Tavershire. They could have gone with 'New Tavershire,' but somebody had pointed out that if the village burned down <i>again</i>, there would be nothing left to name it. At least this way the <i>next</i> Tavershire could be 'new'. It was a form of fire insurance.<br><br>Central to Tavershire is the tavern, The Dirty Rumor, where people stop to swap tales, eat hearty stew, and lose consciousness, preferably before vomiting. The halfmen practically drag you inside, and before you know it, you're downing foul human ale and making up grandiose stories.`,
choices:[{text:`Continue...`, link: 23}]
},
{id:23,
body:`Your vision gradually gets blurrier, but you're able to see your reflection in the dirty window. Yep, you're still a human. Messy brown hair, square jaw, no lower incisors jutting up past your lip. You slowly blink.<br><br>You never even see which of the halfmen swipes your amulet. You shouldn't have blinked.<br><br>In an instant, you're an orc again, and the patrons of the bar are gasping.<br><br>They might be drunk, but they know what to do with an orc. Sloppy knots bind your hands behind your back, and you're dragged out of the tavern by several beefy old men. You see, as you're dragged away, one of the halfmen looking down at the amulet in astonishment. Then you see a fist, and everything goes black.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:24,
body:`"Hi-ho yourself," the dwarf replies, not looking up. "If you're going in, tell them Limgo's shift is long-since over, and he's getting angry."<br><br>You saunter nonchalantly past the dwarf, push the stone door open on its massive hinges, and enter Orebits.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:25,
body:`The dwarf looks up, suspicious, and squints in the dim light. "No offense, but you really a dwarf?" he asks.<br><br><br><br><br>`,
choices:[{text:`"How <i>dare</i> you, sir!"`, link:31}, {text:`"No, I'm actually an orc in disguise."`, link:32}]
},
{id:26,
body:`The dwarf snorts, but doesn't look up. "Gold? Haven't seen any gold since I left Golddale. Nope. Nothing but silver here in Orebits."<br><br>(Dwarves aren't the most creative at naming their cities.)<br><br>"If you're going in, tell them Limgo's shift is long-since over, and he's getting angry."<br><br>You saunter nonchalantly past the dwarf, push the stone door open on its massive hinges, and enter Orebits.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:27,
preConditions:[[`guardFight`,`Rutgub and Boogle, still sore from their brawl, are slow to give chase. Both orcs groan as they move to get you.`,`Boogle drops the bag of beetles on the ground, where they scatter. Unfortunately for the guards, those slick carapaces cause both Rutgub and Boogle to slip as they start coming after you, and both tumble to the ground.`]],
body:`<br><br>With your head start, you dart into the chief's chambers, looking for a place to go. The only exit is the one you came through.<br><br>Or, there's the toilet.<br><br>The opening above the sewer is wide enough you can fit through. You're not excited by this, but you don't see another option.`,
choices:[{text:`Continue...`, link:13}],
setConditions:[{var:`hasAmulet`,value:`false`}]
},
{id:28,
body:`A single dwarven guard sits on a rock outside the entrance. You're not sure what to say...<br><br><br><br><br><br><br><br><br><br>`,
choices: [{text:`"Hi-ho!"`, link:24},{text:`"How do you do, fellow dwarf?"`, link:25},{text:`"Er, how's your gold?"`, link:26}]
},
{id:29,
body:`You follow the human through the woods for some time, until you reach the outskirts of Tavershire. The smell of roasting pig wafts through the air, and you know it must be coming from the tavern - the aptly-named Dirty Rumor. The man marches straight into the town, and you quietly follow.<br><br>Most of the village is asleep, thankfully, so no one spies your loinclothed orcish figure darting from shadow to shadow. Upon reaching the tavern, the human disappears inside. The pork-scented smoke that escapes an open window beckons you to follow him.`,
choices:[{text:`Go in the tavern`, link:33},{text:`Listen at the window.`,link:34}]
},
{id:30,
body:`"Excuse me," you say to the human. "What are you doing in--"<br><br>"YOU," the human says, and draws his sword. He pulls off the amulet for a moment, and in an instant his appearance changes in the moonlight -- it's Blithgup, the chief's first-in-command. He smiles, then puts the amulet back on, and becomes a human again.<br><br>"You shouldn't have run from your duty," he says, marching towards you. Then he pauses. "Heh. Duty. Doo-tee."<br><br>Ah, a sewage joke. You'll probably never live that down, if only because you probably won't live another five minutes. Blithgup charges.`,
choices: [{text:`Defend yourself!`, link:18}]
},
{id:31,
body:`"All right, all right, sorry. Didn't mean to offend you." He looks back down at his axe, which he drags across a sharpening stone. "If you're going in, tell them Limgo's shift is long-since over, and he's getting angry."<br><br>You saunter nonchalantly past the dwarf, pull the stone door open on its massive hinges, and enter Orebits.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:32,
body:`"Heh. Very funny." He looks back down at his axe, which he drags across a sharpening stone. "If you're going in, tell them Limgo's shift is long-since over, and he's getting angry."<br><br>You saunter nonchalantly past the dwarf, pull the stone door open on its massive hinges, and enter Orebits.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:33,
body:`You've made a terrible mistake, you realize, as every head turns to face you. In a flash, several burly men have leapt to their feet, found a rope (where did <i>that</i> come from?) and tied you up. The biggest regret you have, as they tote you off to the village gaol, is that you didn't get a chance to try the pork.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:34,
body:`You listen by the window, quietly drooling at the smell emanating from inside, and can barely make out the voices seatest closest to you. One of them is bragging about an amulet.<br><br>"There's an orc lair not far from here," the voice says. "This was just a trinket compared to the rest of the treasure there. I could only haul out so much, you see." There are mutters of disbelief. "Well, if you doubt me, go yourselves, but better go armed. There were still lots of orcs left when I was done."<br><br>You hear the scooching of stools, then low voices. "Do you believe him?"<br><br>"Well... Look, it may be a trap--"<br><br>"It <i>is</i> a trap."<br><br>"--but Gorndelf the Dwarf could just use the Invincible Cane of Blazing Massacres. Doesn't even need to be nearby - once we find the entrance, he could cast the spell at a spot on the map. Wouldn't even need to leave Orebits. Wipe out anything inside the cave."<br><br>"So you're saying we fireball the place from Orebits."<br><br>"It's the only way to be sure."<br><br>You shudder. If the weapon they're talking about really exists, then everyone back home is doomed to die in a horrific fashion. You have to stop them.<br><br>"HEY!"<br><br>You turn around, just in time to see a huge fist smack you in the face. Everything goes dark.<br><br>The last thing you remember, before they drag you off to the gaol, is smelling delicious pork that you'll never taste.<br><br><h2>End of Chapter 1</h2>`,
choices: [{text:`CREDITS`, link:35}]
},
{id:35,
body:`Written and programmed by Randy Tayler<br><br>`
}
];