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
    'ngSanitize'
  ])
  .config([
    '$injector', '$locationProvider',
    function($injector, $locationProvider) {

      // setting $auth provider configuration
      //ng.extend($authProvider, ENV.authProvider);

      // html 5 mode getting rid of #
      $locationProvider.html5Mode(true);

      /* adding an interceptor
      $httpProvider.interceptors.push(['$injector', function ($injector) {
        return $injector.get('AuthInterceptorService');
      }]);*/

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]
);
