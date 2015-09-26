'use strict';

/**
 * Home states
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .config([
      '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        // default rout
        $urlRouterProvider.otherwise('/');

        // main rout
        $stateProvider
          .state('layout', {
            abstract:true,
            url: '/',
            templateUrl: 'components/layout/views/layoutView.html',
            controller: 'LayoutCtrl'
          });
      }]);
})(angular);