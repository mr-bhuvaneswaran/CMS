'use strict';

function mainPageCtrl($scope,$mdToast, $mdSidenav,$timeout,$mdPanel){

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
    'Acadamic Planner','Attendance',
    'Mark Detail','Fees Detail','Library Status',
    'Exam Results','Feedback','Events','Greetings','Circular']

    
    $scope.selected="Dashboard"
    $scope.toggle=function(){
        $scope.navshow=!$scope.navshow
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