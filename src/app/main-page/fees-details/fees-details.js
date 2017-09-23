"use strict";
function feesDetailsView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/fees-details/fees-details.html',
        scope : {
            fees : '='
        },
        controller:function($scope){
            
        }
    };
}
module.exports= feesDetailsView;