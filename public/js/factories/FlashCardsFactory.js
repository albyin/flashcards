app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category, beforeHttp, afterHttp) {

        	var queryParams = {};

        	if (category) {
        		queryParams.category = category;
        	}
            beforeHttp();
        	return $http.get("/cards", {params: queryParams})
        				.then( function (response){
                            afterHttp();
			        		return response.data;
			        	});
        },
        addNewFlashCard: function (card){
            return $http.post("/cards", card).success(function (card){
            
            });
        }
    };
});