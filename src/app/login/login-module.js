"use strict";

require('angular-material');
var loginCtrl = require('./login-controller.js');
var loginModule = angular.module('myApp.login',['ngRoute','ngMaterial']);
loginModule.controller('loginCtrl',loginCtrl);