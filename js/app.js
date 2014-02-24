window.app = angular.module("dinnerPlannerPro", []);

// add layout stuff here 
$(document).on("ready", function() {
  "use strict";

  $("#controls li:first-child").addClass("active");

  $("#controls li").on("click", function () {
    $("#controls li").removeClass("active");
    $(this).addClass("active");
  });
});