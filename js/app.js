window.app = angular.module('dinnerPlannerPro', [
  'ngRoute',
  'MainController',
  'DishController',
  'OverviewController',
  'PreparationController'
]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
      }).
      when('/overview', {
        templateUrl: 'partials/overview.html',
        controller: 'OverviewController'
      }).
      when('/preparation', {
        templateUrl: 'partials/preparation.html',
        controller: 'PreparationController'
      }).
      otherwise({
        redirectTo: '/main'
      });
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