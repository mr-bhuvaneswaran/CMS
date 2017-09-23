"use strict";
function profileView(){
    return {
        restrict : 'E',
        scope : {
            profile : '='
        },
        templateUrl : 'app/main-page/profile/profile.html',
        controller:function($scope){
            $scope.student = {

            };
        }
    };
}
module.exports = profileView;