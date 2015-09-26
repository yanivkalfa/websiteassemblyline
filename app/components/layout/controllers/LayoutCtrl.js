'use strict';

/**
 * @ngdoc function
 * @name websiteassemblylineApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the websiteassemblylineApp
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .controller('LayoutCtrl', function ($scope) {
      $scope.menus = [
        {id:'home',       link:'layout.home',       label: 'Home'},
        {id:'portfolio',  link:'layout.portfolio',  label: 'Portfolio'},
        {id:'about',      link:'layout.about',      label: 'About'}
      ];

      $scope.isActive = function(){
        return false;
      };
    });
})(angular);





