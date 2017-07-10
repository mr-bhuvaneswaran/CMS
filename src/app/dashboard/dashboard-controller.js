'use strict';

function dashBoardCtrl($scope,$mdToast, $mdSidenav,$timeout,$mdPanel){

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


    $scope.menuTemplate = '' +
        '<div class="menu-panel" style="background: rgba(224, 224, 224, 0.7);color:black;" md-whiteframe="4">' +
        '  <div class="menu-content">' +
        '    <div class="menu-item" ng-repeat="item in settings.items">' +
        '      <button class="md-button">' +
        '        <span>{{item}}</span>' +
        '      </button>' +
        '    </div>' + 
        '    <md-divider></md-divider>' +
        '    <div class="menu-item">' +
        '      <button class="md-button" ng-click="closeMenu()">' +
        '        <span>Close</span>' +
        '      </button>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    

    $scope.settings = {
      name: 'settings',
      items: [
        'Home',
        'About',
        'Contact'
      ]
    };

    $scope.showToolbarMenu = function($event) {
      var template = $scope.menuTemplate;

      var position = $mdPanel.newPanelPosition()
          .relativeTo("#profile")
          .addPanelPosition(
            $mdPanel.xPosition.ALIGN_END,
            $mdPanel.yPosition.BELOW
          );

      var config = {
        id: 'toolbar_' + 'settings',
        attachTo: angular.element(document.body),
        controller: dashBoardCtrl,
        controllerAs: 'dashBoardCtrl',
        template: template,
        position: position,
        panelClass: 'menu-panel-container',
        locals: {
          items: $scope.settings.items
        },
        openFrom: $event,
        focusOnOpen: false,
        zIndex: 100,
        propagateContainerEvents: true,
      };

      $mdPanel.open(config);
    };

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

    $scope.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    }

}
module.exports = dashBoardCtrl;