
window.app.controller("PreparationController", function($scope, $rootScope, DinnerModel) {

	$scope.currentDishId = 1;

	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();

	//
	// Event Listener	
	//
	var showDishEventListener = $rootScope.$on('renderDishController', 
		function(event, dishId) { 
			$scope.showDish( dishId );
		}
	);

	//

	$scope.showDish = function (dishId) {
		$scope.currentDishId = dishId;

		$scope.updateDisplay();

		$("#DishControllerView").modal();
	};

	$scope.confirmDish = function() {
		DinnerModel.addDishToMenu( $scope.currentDishId );

		$rootScope.$emit('dishModelChanged');
		
		$("#DishControllerView").modal("hide");
	};

	$scope.updateDisplay = function () {
		$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
		
		$scope.currentDish = DinnerModel.getDish( $scope.currentDishId );
		$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( $scope.currentDishId );
	};

});