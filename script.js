(function () {
   "use strict";
   
   var app = angular.module('demo',[]);
   
   app.controller('app',[
      "$scope",
      function ($scope) {
         $scope.x = 0;
         $scope.y = 0;
         
         $scope.$watch("x*y", function (result) {
            console.log('new result',result);
            $scope.r = result;
         });
      }
      ]);
   
}());