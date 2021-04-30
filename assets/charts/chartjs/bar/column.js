
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#column-chart");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
         
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        legend: {
            position: 'top',
        },
        scales: {
            xAxes: [{
              
                gridLines: {
                    color: "#f3f3f3",
                    
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
               
                gridLines: {
                    color: "#f3f3f3",
                    
                },
                scaleLabel: {
                    display: true,
                }
            }]
        },
        title: {
            display: true,
            text: ''
        }
    };

    // Chart Data
    var chartData = {
		
        labels: ["Sun", "Mon", "Tue", "Weds", "Thus"],
        datasets: [{
            label: "Student's Performance",
            data: [50, 64, 55, 62, 50],
            backgroundColor: "#F4793C",
            hoverBackgroundColor: "rgba(244, 121, 60,.9)",
            borderColor: "transparent"
        }, {
            label: "Teacher's Performance",
            data: [75, 83, 92, 38, 84],
            backgroundColor: "#02a1cf",
            hoverBackgroundColor: "rgba(2, 161, 207,.9)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});