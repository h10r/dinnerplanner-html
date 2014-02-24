// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
window.app.controller("DishController", function($scope, $rootScope, DinnerModel) {

	$scope.currentDish = DinnerModel.getDish( 1 );
	$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( 1 );

	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();

	// show dish
	var showDishEventListener = $rootScope.$on('renderDishController', 
		function(event, dishId) { 
			$scope.showDish( dishId );
		}
	);

	$scope.showDish = function (dishId) {
		$scope.currentDish = DinnerModel.getDish( dishId );
		$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( dishId );

		$("#DishControllerView").modal();
	};

	$scope.confirmDish = function() {
		console.log( "dish confirmed" );
	};

});