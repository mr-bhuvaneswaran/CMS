"use strict";
function eventsView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/events/events.html',
        scope : {
            events : '='
        },
        controller:function($scope){
        }
    };
}
module.exports= eventsView;