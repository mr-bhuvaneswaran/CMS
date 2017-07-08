'use strict';

var moment = require('moment');
require('./login/login-module.js');
require('./dashboard/dashboard-module.js');

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard',
  'myApp.login',
]);


myApp.constant("moment",moment);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    templateUrl: 'app/login/login.html',
    controller: 'loginCtrl'
  })
  .when('/dashboard',{
    templateUrl:'/app/dashboard/dashboard.html',
    controller:'dashBoardCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
