app.controller('CategoryController', function($scope, $stateParams, FlashCardsFactory) {
	$scope.loaded = false;

	function currentlyLoading() {
		$scope.loaded = true;
	}

	function doneLoading() {
		$scope.loaded = false;
	}

	$scope.activeCat.category = $stateParams.category;
	
	FlashCardsFactory.getFlashCards($stateParams.category, currentlyLoading, doneLoading).then( function (flashCards){
		$scope.flashCards = flashCards;
	});
});