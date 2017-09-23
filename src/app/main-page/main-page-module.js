"use strict";
require('angular-material');
var academicPlannerView = require('./academic-planner/academic-planner.js'); 
var attendanceView = require('./attendance/attendance.js');
var circularView = require('./circular/circular.js');
var dashboardView = require('./dashboard/dashboard.js');
var eventsView = require('./events/events.js');
var examResultsView = require('./exam-results/exam-results.js');
var feedbackView = require('./feedback/feedback.js');
var feesDetailsView = require('./fees-details/fees-details.js');
var libraryStatusView = require('./library-status/library-status.js');
var markDetailView = require('./mark-details/mark-details.js');
var profileView = require('./profile/profile.js');

var mainPageCtrl = require('./main-page-controller.js');
var mainPageModule = angular.module('myApp.mainPage',['ngRoute','ngMaterial','nvd3']);
mainPageModule.controller('mainPageCtrl',mainPageCtrl);
mainPageModule.directive('academicPlannerView',academicPlannerView);
mainPageModule.directive('attendanceView',attendanceView);
mainPageModule.directive('circularView',circularView);
mainPageModule.directive('dashboardView',dashboardView);
mainPageModule.directive('eventsView',eventsView);
mainPageModule.directive('examResultsView',examResultsView);
mainPageModule.directive('feedbackView',feedbackView);
mainPageModule.directive('feesDetailsView',feesDetailsView);
mainPageModule.directive('libraryStatusView',libraryStatusView);
mainPageModule.directive('markDetailView',markDetailView);
mainPageModule.directive('profileView',profileView);

