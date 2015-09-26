'use strict';

/**
 * About states
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .config([
      '$stateProvider', function ($stateProvider) {

        // about rout
        $stateProvider
          .state('layout.about', {
            url: 'about',
            templateUrl: 'components/layout/components/about/views/aboutView.html',
            controller: 'AboutCtrl'
          });
      }]);
})(angular);

