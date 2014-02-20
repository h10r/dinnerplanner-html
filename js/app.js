$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var dishView = new DishView($("#dishView"),model);
   	var dishViewController = new DishController(dishView,model);
});