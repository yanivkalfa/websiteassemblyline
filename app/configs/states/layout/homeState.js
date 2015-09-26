'use strict';

/**
 * Home states
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .config([
      '$stateProvider', function ($stateProvider) {

        // home rout
        $stateProvider
          .state('layout.home', {
            url: '',
            templateUrl: 'components/layout/components/home/views/homeView.html',
            controller: 'HomeCtrl'
          });
      }]);
})(angular);