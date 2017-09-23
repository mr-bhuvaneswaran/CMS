'use strict';

function mainPageCtrl($scope, $mdToast, $mdSidenav, $timeout, $mdPanel, $http){
    
    $scope.attendance = []
    $scope.results = []
    $http.get("http://127.0.0.1:8000/api/student/1").success(function(response)
      { 
          $scope.student = response;
          angular.forEach(response.academic, function(value){
              $scope.results.push({value : value.exam_results.gpa, label : "Sem-" + value.semester})
              angular.forEach(value.attendance, function(month){
                  $scope.attendance.push({value : month.percentage, label : month.working_month.month.substr(0,3) + '-' +  month.working_month.year%100})
              });
          });
          $scope.events = response.management.event
          $scope.profile = response
      });

    $scope.showDirective=[true,false,false,false,false,false,false,false,false,false,false,false]
    $scope.currentSelected = 0
    $scope.changeView=function(view,clicked){
      $scope.selected=view
      $scope.showDirective[$scope.currentSelected]=false
      $scope.showDirective[clicked]=true
      $scope.currentSelected = clicked
    } 
    $scope.username="BHUVANESWARAN B"
    $scope.navshow=true
    $scope.links=['Dashboard','Profile',
    'Academic Planner','Attendance',
    'Mark Detail','Fees Detail','Library Status',
    'Exam Results','Feedback','Events','Circular']

    $scope.close = function () {
      $mdSidenav('left').close()
    }
    $scope.selected="Dashboard"
    
    $scope.toggleLeft = buildDelayedToggler('left');
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    } 
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
      }, 200);
    }
    
}
module.exports = mainPageCtrl;