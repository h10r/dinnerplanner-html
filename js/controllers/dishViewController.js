// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
window.app.controller("DishController", function($scope, DinnerModel) {

	$scope.typeOnDisplay = "starter";
	$scope.dishesOnDisplay = DinnerModel.getAllDishes( $scope.typeOnDisplay );
	
	$scope.dishTypes = DinnerModel.getDishTypes();
	$scope.dishesSelected = DinnerModel.getFullMenu();

	$scope.changeDishesOnDisplayTo = function (type) {
		$scope.typeOnDisplay = type;
		
		$scope.dishesOnDisplay = DinnerModel.getAllDishes(type);
	};

	// Function to set the selected shape 
	$scope.selectDish = function (newDish) {
		DinnerModel.addDishToMenu( newDish.id );

		$scope.dishesSelected = DinnerModel.getFullMenu();
	};

	$scope.removeDish = function (newDish) {
		DinnerModel.removeDishFromMenu( newDish.id );

		$scope.dishesSelected = DinnerModel.getFullMenu();
	};

	$scope.getDishPrice = function (dish) {
		return DinnerModel.getPriceOfDish( dish.id );
	};

});