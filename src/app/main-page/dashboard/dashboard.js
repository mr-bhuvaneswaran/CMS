"use strict";
function dashboardView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/dashboard/dashboard.html',
        scope :{
            attendance : '=',
            results : '='
        },
        controller:function($scope){
$scope.gpaOptions = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                width: 1000,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                yDomain: [0, 10],
                
                xAxis: {
                    axisLabel: 'Semester',
                    axisLabelDistance: -10,
                },
                yAxis: {
                    ticks: 10,
                    axisLabelDistance: -10,
                    axisLabel: 'GPA',
                    tickFormat: function(d){
                      return d3.format('.2f')(d);
                    }
                }
            }
        };

        $scope.gpaData = [
            {
                values: $scope.results            }
        ];     
     }
    };
}
module.exports= dashboardView;