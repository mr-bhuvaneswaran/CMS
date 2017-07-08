"use strict";
require('angular-material');
var dashBoardCtrl = require('./dashboard-controller.js');
var dashBoardModule = angular.module('myApp.dashboard',['ngRoute','ngMaterial']);
dashBoardModule.controller('dashBoardCtrl',dashBoardCtrl);