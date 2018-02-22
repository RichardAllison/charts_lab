const PieChart = function(){

    const container = document.getElementById("pie-chart");
    const chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: "Pokemon types I've caught"
        },
        series: [
            {
                name: "Type",
                data: [
                    {
                        name: "Fire",
                        y: 52,
                        color: "#ffac33" 
                    },
                    {
                        name: "Water",
                        y: 25,
                        color: "#73b7ff",
                        sliced: true
                    },
                    {
                        name: "Grass",
                        y: 1,
                        color: "#00ba2f"
                    },
                    {
                        name: "Electric",
                        y: 22,
                        color: "#f4eb42"
                    }
                ]
            }
        ]
    });

}