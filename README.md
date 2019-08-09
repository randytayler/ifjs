# ifjs
A tiny Javascript framework for minimal choose-your-own-adventure type games.

The js13k game competition (http://js13k.com) got me interested in minimizing my choose-your-own-adventure "framework" and releasing it to the wild.

I'm not a Javascript programmer by trade, as you may discover. And don't even get me started on CSS. But this was built during a Ludum Dare game competition over the course of a weekend, along with the sample story, and also a bunch of artwork. I disabled images for this version, but if you reach out I can send you the code for background and foreground image display.

Your game needs to look like sample.js - which is /mostly/ a JSON file, but I took a shortcut and avoided loading a file via AJAX - which would take more memory and make testing on local a pain - so watch out.

The variables you need to declare in your game file are:

gametitle
gamedescription
game

The game variable will hold your giant JSON blob, structured with pages and links, and if you want to use them, conditions.

Each page needs

id
body
choices

And each choice needs

text
link (which references a page id)

Conditional content - if you want, a given page can set a condition to a value, which can be checked on other pages or links.
setConditions - [{var:"knife", value:"true"}]

Post conditions are text that is appended to the content of a page. Did the player pick up the knife? Let them see this extra text.
postConditions - an array with the condition's var name, then the text to display if it's set, and the text to display if it's not set.

Conditional content for links - similar to post conditions, but it checks a condition's value before showing the given link. Can they stab the orc? Well, we check to see if they picked up the knife.
conditions - [{var:"",value:""}]
