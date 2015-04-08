var app = angular.module("FlashCards", ["ui.router"]);

app.config(function ($stateProvider){


	$stateProvider.state("StatsPanel", {
		url:"/stats",
		templateUrl: "templates/stats.html",
		controller: "StatsController"
	});

	$stateProvider.state("NewCardPanel", {
		url:"/addcard",
		templateUrl: "templates/addcard.html",
		controller: "NewCardController"
	});

	$stateProvider.state("FlashCardPanel", {
		url:"",
		templateUrl: "templates/flashcards.html",
		controller: "MainController"
	});

	$stateProvider.state("FlashCardPanel.home", {
		url:"/",
		templateUrl: "templates/categoryCards.html",
		controller: "CategoryController"
	});

	$stateProvider.state("FlashCardPanel.category", {
		url:"/category/:category",
		templateUrl: "templates/categoryCards.html",
		controller: "CategoryController"
	});

});