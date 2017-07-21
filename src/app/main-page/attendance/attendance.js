function attendanceView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/attendance/attendance.html',
        controller:function(){
        var attendance = document.getElementById("attendanceChart");

var attendanceChart = new Chart(attendance, {
          type: 'bar',
          data:{
          labels: ["June", "July", "August", "September"],
          datasets: [{
            data: [70, 80, 93.6, 79],
            backgroundColor: 'rgb(121,134,203)',
            borderWidth: 0
        }]
          },
        options: {
        showAllTooltips: true,
		    showAllTooltips: true,
		    tooltips: {
		      custom: function(tooltip) {
		        if (!tooltip) return;
		        tooltip.displayColors = false;
		      },
		      callbacks: {
		        label: function(tooltipItem, data) {
		          return tooltipItem.xLabel + " : " + tooltipItem.yLabel + "%";
		        },
		        title: function(tooltipItem, data) {
		          return;
		        }
          }
        },
        legend: {
            display: false
         },
        scales: {
            
            yAxes: [{
            ticks: {
            
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
								scaleLabel: {
                   display: true,
                   labelString: "Percentage"
                }
            }]
        }
    }
});
}
    };
}
module.exports= attendanceView;