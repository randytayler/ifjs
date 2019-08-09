/*
Copyright 2019 Randy Tayler
Reuse as you like, but please credit me.
*/
var pages = game;
var choices = '';
var conditions = {};
var gameHistory = [];
function d(i){return document.getElementById(i)}
function init() {choices = d("choice_list");d("gametitle").innerHTML=document.title=gametitle;d("desc").innerHTML=gamedescription;}
function back() {
	gameHistory.pop();
	if (gameHistory.length > 0){
		var lastPage = gameHistory.pop();
		loadPage(lastPage);
	}
}
function loadPage(id) {
	gameHistory.push(id);
	var bodytext = d("bodytext");
	choices.innerHTML = '';
	var page = pages[id];

	bodytext.innerHTML = '';
	if (page.preConditions) {
		for (var i in page.preConditions) {
			if (conditions[page.preConditions[i][0]] == "true") {
				bodytext.innerHTML += page.preConditions[i][1];
			} else {
				bodytext.innerHTML += page.preConditions[i][2];
			}
		}
	}
	bodytext.innerHTML += page.body;
	document.body.scrollTop = 0;
	if (page.postConditions) {
		for (var i in page.postConditions) {
			if (conditions[page.postConditions[i][0]] == "true") {
				bodytext.innerHTML += page.postConditions[i][1];
			} else {
				bodytext.innerHTML += page.postConditions[i][2];
			}
		}
	}
	if (page.setConditions) {
		for (var i in page.setConditions){
			conditions[page.setConditions[i].var] = page.setConditions[i].value;
		}
	}
	for (var i in page.choices) {
		console.log(page);
		var choice = page.choices[i];
		var choiceText = choice.text;
		var choiceId = choice.link;
		if (choice.conditions) {
			var con = true;
			for (var j in choice.conditions){
				if (conditions[choice.conditions[j].var] != choice.conditions[j].value){
					con = false;
				}
			}
			if (con) {
				addChoice(choiceId, choiceText);
			}
		} else {
			addChoice(choiceId, choiceText);
		}
	}
}
function addChoice(choiceId, choiceText) {
	var choiceLink = document.createElement("LI");
	choiceLink.innerHTML = "<a onclick='loadPage(" + choiceId + ")'>" + choiceText + "</a></li>";
	choices.appendChild(choiceLink);
}
function restart() {
	conditions = {};
	loadPage(0);
}