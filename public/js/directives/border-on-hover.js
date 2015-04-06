app.directive("borderOnHover", function () {

	return function (scope, element, attrs){
		element.on("mouseenter", function() {
			element.css("border", "10px solid black");
		});
		element.on("mouseleave", function () {
			element.css("border", "");
		});
	};
});