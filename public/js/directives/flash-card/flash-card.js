app.directive("flashCard", function (ScoreFactory) {
	return {
		restrict:"E",
		templateUrl:"js/directives/flash-card/flash-card.html",
		scope: {
			card:"="
		},
		link: function (scope){
			scope.answerQuestion = function (obj){
				if (scope.answered) return; //if answered already, short circuit
				scope.answered = true;
				scope.answeredCorrectly = obj.correct;
				if (scope.answeredCorrectly){
					ScoreFactory.correct++;
				}
				else {
					ScoreFactory.incorrect++;
				}
			};
		}
	};
});