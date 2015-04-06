app.controller('MainController', function ($scope, FlashCardsFactory) {

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.activeCat = undefined;
	$scope.loaded = false;

	function currentlyLoading() {
		$scope.loaded = true;
	}

	function doneLoading() {
		$scope.loaded = false;
	}

	FlashCardsFactory.getFlashCards(null, currentlyLoading, doneLoading).then( function (flashCards){
		$scope.flashCards = flashCards;
	});

	$scope.getCategoryCards = function (category){
		FlashCardsFactory.getFlashCards(category, currentlyLoading, doneLoading).then( function (flashCards){
			$scope.flashCards = flashCards;
			$scope.activeCat = category;
		});
	};

});