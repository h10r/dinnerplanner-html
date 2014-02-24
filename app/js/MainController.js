
window.app.controller("MainController", function($scope, $rootScope, DinnerModel) {

	$scope.typeOnDisplay = "starter";
	$scope.dishesOnDisplay = DinnerModel.getAllDishes( $scope.typeOnDisplay );
	
	$scope.dishTypes = DinnerModel.getDishTypes();
	$scope.dishesSelected = DinnerModel.getFullMenu();
	
	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	$scope.totalPrice = DinnerModel.getTotalMenuPrice();

	//
	// Event Listener	
	//
	var selectDishEventListener = $rootScope.$on('dishModelChanged', 
		function(event) { 
			$scope.updateDisplay();
		}
	);

	//

	$scope.changeDishesOnDisplayTo = function (type) {
		$scope.typeOnDisplay = type;

		$scope.dishesOnDisplay = DinnerModel.getAllDishes(type);
	};

	$scope.setNumberOfGuests = function ( n ) {
		var number = parseInt( n );

		if ( number > 0 ) {
			DinnerModel.setNumberOfGuests( number );

			$scope.updateDisplay();
		}
	};

	$scope.removeDish = function (newDish) {
		DinnerModel.removeDishFromMenu( newDish.id );

		$scope.updateDisplay();
	};

	$scope.updateDisplay = function () {
		$scope.dishesSelected = DinnerModel.getFullMenu();
		$scope.totalPrice = DinnerModel.getTotalMenuPrice();
		$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	};	

	$scope.getDishPrice = function (dish) {
		return DinnerModel.getPriceOfDish( dish.id );
	};

	$scope.showDish = function (dish) {
		$rootScope.$emit('renderDishController', dish.id);
	};


});