'use strict';

/**
 * @ngdoc overview
 * @name websiteassemblylineApp
 * @description
 * # websiteassemblylineApp
 *
 * Main module of the application.
 */
angular
  .module('websiteassemblylineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config([
    '$injector', '$locationProvider', '$stateProvider',
    function($injector, $locationProvider, $stateProvider) {

      // setting $auth provider configuration
      //ng.extend($authProvider, ENV.authProvider);

      // html 5 mode getting rid of #
      $locationProvider.html5Mode(true);

      /* adding an interceptor
      $httpProvider.interceptors.push(['$injector', function ($injector) {
        return $injector.get('AuthInterceptorService');
      }]);*/

      $stateProvider
        .state('/', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('/about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]
);
