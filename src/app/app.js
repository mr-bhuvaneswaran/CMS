'use strict';

var moment = require('moment');
require('./login/login-module.js');
require('./main-page/main-page-module.js');

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.mainPage',
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
  .when('/mainpage',{
    templateUrl:'/app/main-page/main-page.html',
    controller:'mainPageCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
