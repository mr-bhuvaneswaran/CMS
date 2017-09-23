"use strict";
function circularView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/circular/circular.html',
        scope : {
            circulars : '='
        },
        controller:function($scope){

        }
    };
}
module.exports= circularView;