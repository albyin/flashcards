app.controller('MainController', function ($scope, $state, FlashCardsFactory) {

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.activeCat = {};

	// $state.go('.category({ category: "" })');

	// FlashCardsFactory.getFlashCards(null).then( function (flashCards){
	// 	$scope.flashCards = flashCards;
	// });

});