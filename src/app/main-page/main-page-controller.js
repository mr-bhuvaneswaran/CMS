'use strict';

function mainPageCtrl($scope,$mdToast, $mdSidenav,$timeout,$mdPanel){

    $scope.username="BHUVANESWARAN B"
    $scope.show=true
    $scope.links=['Dashboard','Profile',
    'Acadamic Planner','Attendance',
    'Mark Detail','Fees Detail','Library Status',
    'Exam Results','Feedback','Events','Greetings','Circular']

    
    $scope.selected="Dashboard"
    $scope.changeView=function(view){
      $scope.selected=view
    }

    $scope.toggle=function(){
        $scope.show=!$scope.show
    }
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