
// Line area chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#area-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
		
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'days'
                }
            }],
            yAxes: [{
				
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
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
        labels: ["sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"],
		data: [20, 25, 30, 40, 50, 55, 60],
        datasets: [ {
            label: "School performance",
            // data: [20, 40, 37, 25, 39, 42, 45],
			data: [20, 25, 27, 23, 34, 39, 43],
            backgroundColor: "rgba(244, 121, 60,.6)",
            borderColor: "transparent",
            pointBorderColor: "#F4793C",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
        }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        // Chart Data
        data : chartData
    };

    // Create the chart
    var areaChart = new Chart(ctx, config);

});