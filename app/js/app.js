
window.app = angular.module('dinnerPlannerPro', [
  'ngRoute',
  'dinnerPlannerPro.MainController',
  'dinnerPlannerPro.DishController',
  'dinnerPlannerPro.OverviewController',
  'dinnerPlannerPro.PreparationController'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'dinnerPlannerPro.MainController'});
  $routeProvider.when('/overview', {templateUrl: 'partials/main.html', controller: 'dinnerPlannerPro.MainController'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);


// add layout stuff here 
$(document).on("ready", function() {
  "use strict";

  $("#controls li:first-child").addClass("active");

  $("#controls li").on("click", function () {
    $("#controls li").removeClass("active");
    $(this).addClass("active");
  });
});