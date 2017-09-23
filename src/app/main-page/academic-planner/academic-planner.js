"use strict";
function academicPlannerView(){
    return {
        restrict:'E',
        scope : {
            planner : '='
        },
        templateUrl:'app/main-page/academic-planner/academic-planner.html',
        controller:function($scope){
        }
    };
}
module.exports= academicPlannerView;