const ColumnChart = function (text, series, categories, container) {
    const chart = new Highcharts.Chart({
        chart: {
            type: "column",
            renderTo: container
        },
        title: {
            text: text
        },
        series: series,
        xAxis: {
            categories: categories
        }
    });
}