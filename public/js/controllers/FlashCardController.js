app.controller('FlashCardController', function ($scope, ScoreFactory) {
	$scope.answerQuestion = function (obj){
		if ($scope.answered) return; //if answered already, short circuit
		$scope.answered = true;
		$scope.answeredCorrectly = obj.correct;
		if ($scope.answeredCorrectly){
			ScoreFactory.correct++;
		}
		else {
			ScoreFactory.incorrect++;
		}
	};
});