"use strict";
require('angular-material');
var mainPageCtrl = require('./main-page-controller.js');
var dashBoardModule = angular.module('myApp.mainPage',['ngRoute','ngMaterial']);
dashBoardModule.controller('mainPageCtrl',mainPageCtrl);
