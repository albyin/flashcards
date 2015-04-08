app.controller("NewCardController", function ($scope, $http, FlashCardsFactory) {

	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};
	
	$scope.createCard = function (card){

		FlashCardsFactory.addNewFlashCard(card).then(function (newCard){
			$scope.newCardForm.question.$touched = false;
            $scope.newCardForm.category.$touched = false;
            //return to untouched state to clear error flags
            $scope.newCard = { //reset the form to blank
                question: null,
                category: null,
                answers: [
                    { text: null, correct: false },
                    { text: null, correct: false },
                    { text: null, correct: false }
                ]
            };
		});

		
	};
});
