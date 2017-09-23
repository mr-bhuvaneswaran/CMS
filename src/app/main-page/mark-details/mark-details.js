"use strict";
function markDetailView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/mark-details/mark-details.html',
        scope : {
          semesters : '='  
        },
        controller:function($scope){
        }
    };
}
module.exports= markDetailView;