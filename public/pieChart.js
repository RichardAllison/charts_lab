const PieChart = function(text, series, container){

    
    const chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: text
        },
        series: series
    });

}