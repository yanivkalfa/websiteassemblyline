'use strict';

/**
 * Home states
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .config([
      '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        // Default rout
        $urlRouterProvider.otherwise('/');

        // Main rout
        $stateProvider
          .state('layout', {
            abstract:true,
            url: '/',
            templateUrl: 'components/layout/views/layoutView.html',
            controller: 'LayoutCtrl'
          });
      }]);
})(angular);
