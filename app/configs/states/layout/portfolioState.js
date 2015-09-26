'use strict';

/**
 * Portfolio states
 */
(function(ng){
  ng
    .module('websiteassemblylineApp')
    .config([
      '$stateProvider', function ($stateProvider) {

        // portfolio rout
        $stateProvider
          .state('layout.portfolio', {
            url: 'portfolio',
            templateUrl: 'components/layout/components/portfolio/views/portfolioView.html',
            controller: 'PortfolioCtrl'
          });
      }]);
})(angular);

