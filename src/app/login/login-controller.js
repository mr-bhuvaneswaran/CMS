'use strict';

function loginCtrl($scope, $mdToast, $location){
    $scope.remember_login = false;
    $scope.username="";
    $scope.password="";

    $scope.sign_in = function(){
        if ($scope.username=="15" && $scope.password=="15"){
            $mdToast.show(
                $mdToast.simple()
                .textContent('Please Wait!')
                .position("bottom")
                .hideDelay(3000)
            );
            $location.path('/mainpage');
        }
        else{
            $mdToast.show(
                $mdToast.simple()
                .textContent('Invalid Credentials!')
                .position("bottom")
                .hideDelay(3000)
            );
         };

        }
    } 

module.exports = loginCtrl;