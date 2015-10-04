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
    .controller('LayoutCtrl', ['$scope', '$state', 'UtilsService', 'ActiveTabsService', function ($scope, $state, UtilsService, ActiveTabsService) {
      $scope.menus = [
        {id:'home',       name:'layout.home',       label: 'Home', isActive : true},
        {id:'portfolio',  name:'layout.portfolio',  label: 'Portfolio', isActive : false},
        {id:'about',      name:'layout.about',      label: 'About', isActive : false}
      ];

      if(!ActiveTabsService.getMenu()){
        ActiveTabsService.addMenu($scope.menus, 'layout' );
        ActiveTabsService.checkMenus();
      }


    }]);
})(angular);
