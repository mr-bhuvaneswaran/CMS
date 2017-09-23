"use strict";
function examResultsView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/exam-results/exam-results.html',
        scope : {
            semesters : '=',
        },
        controller:function($scope){
        }
    };
}
module.exports= examResultsView;