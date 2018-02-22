const ColumnChart = function () {
    const container = document.getElementById("column-chart");
    const chart = new Highcharts.Chart({
        chart: {
            type: "column",
            renderTo: container
        },
        title: {
            text: "Our Favourite Programming Languages"
        },
        series: [{
            name: "Cohort 7",
            data: [8, 12, 3, 1]
        },
    {
        name: "Cohort 18",
        data: [6, 10, 1, 1]
    }],
        xAxis: {
            categories: ['JavaScript', 'Java', 'Ruby', 'Algol']
        }
    });
}