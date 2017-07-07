'use strict';

// require('angular');
// require('angular-aria');
// require('angular-ui-router');
// require('angular-material');
// require('angular-animate');
// require('angular-resource');
// var moment = require('moment');
require('./login/login-module.js');
// require('angular-data-grid');
// require('angular-sanitize');
// require('sweetalert');
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  // 'ngMaterial',
  'ngRoute',
  'myApp.login',
]);


// myApp.constant("moment",moment);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    templateUrl: 'app/login/login.html',
    controller: 'loginCtrl'
  })
  
  .otherwise({
    redirectTo: '/'
  });
}]);
