// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
window.app.controller("OverviewController", function($scope, $rootScope, DinnerModel) {

	//
	// Event Listener	
	//
	var showOverviewEventListener = $rootScope.$on('renderOverviewController', 
		function(event) { 
			$scope.showView();
		}
	);

	//

	$scope.showView = function () {
		console.log("this works");

		$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
		$scope.fullMenu = DinnerModel.getFullMenu();
		$scope.totalPrice = DinnerModel.getTotalMenuPrice();

		$("#OverviewControllerView").modal();
	};

	$scope.getDishPrice = function (dish) {
		return DinnerModel.getPriceOfDish( dish.id );
	};
});