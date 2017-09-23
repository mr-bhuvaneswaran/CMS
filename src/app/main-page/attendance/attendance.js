"use strict";
function attendanceView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/attendance/attendance.html',
        scope :{
            attendance : '=',
        },
        controller:function($scope){
          $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                yDomain: [0, 100],
                xAxis: {
                    axisLabel: 'Months',
                    axisLabelDistance: -10,
                },
                yAxis: {
                    axisLabelDistance: -10,
                    axisLabel: 'Percentage',
                    tickFormat: function(d){
                      return d3.format('.0%')(d*0.01);
                    }
                }
            }
        };

        $scope.data = [
            {
                values: $scope.attendance
            }
        ]
}
    };
}
module.exports= attendanceView;