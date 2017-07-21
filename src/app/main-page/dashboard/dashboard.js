function dashboardView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/dashboard/dashboard.html',
        controller:function(){
var attendance = document.getElementById("attendanceChart");
var gpa = document.getElementById("gpaChart");

var myChart = new Chart(attendance, {
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
                   stepSize: 25,
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
var gpaChart = new Chart(gpa, {
          type: 'bar',
          data:{
          labels: ["1", "2", "3", "4"],
          datasets: [{
            data: [9.4, 8.8, 8.7, 8.6],
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
		          return tooltipItem.yLabel;
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
                   max: 10,
                   stepSize: 2,                   
                   callback: function(value){return value}
                },  
				   scaleLabel: {
                   display: true,
                   labelString: "GPA"
                }
            }]
        }
    }
});

            

        }
    };
}
module.exports= dashboardView;