'use strict';

/**
 * @ngdoc overview
 * @name websiteassemblylineApp
 * @description
 * # websiteassemblylineApp
 *
 * Main module of the application.
 */
(function(ng){
  ng
    .module('websiteassemblylineApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ui.router'
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
      }])
    .run([
      '$rootScope', '$state',
      function () {
        /*
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        });*/
      }]);
})(angular);
