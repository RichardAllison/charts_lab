document.addEventListener("DOMContentLoaded", function(){

    const container = document.getElementById("chart-display");
    const select = document.getElementById("charts-select");
    select.addEventListener("change", function () {
        console.log(this.value);
        container.innerText = "";
        if (this.value === "1") {
            pieChart(container);
        } 
        else if (this.value === "2") {
            languageChart(container);
        }
        else if (this.value === "3") {
            regionsChart();
        }
    })
});

const pieChart = function(container) {
    new PieChart(container);
}

const languageChart = function(container) {
    const text = "Our Favourite Programming Languages";
            const series = [{
                name: "Cohort 7",
                data: [8, 12, 3, 1]
            },
            {
               name: "Cohort 18",
                data: [6, 10, 1, 1]
            }];
            const categories = ["JavaScript", "Java", "Ruby", "Other"];
            new ColumnChart(text, series, categories, container);
}

const regionsChart = function() {
    const url = "https://restcountries.eu/rest/v2/all";
    makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const requestComplete = function(){
    if(this.status !== 200) return;
    const jsonString = this.responseText; //This is a string
    const countries = JSON.parse(jsonString); //This parses the string into a js object
    populateChart(countries);
}

const populateChart = function(countries){
    const container = document.getElementById("chart-display");

    const text = "Countries By Region";
    let data = {};
    countries.forEach(function(country){
        const region = country.region;
        if(!(region in data)){
            data[region] = 1;
        } else {
            data[region]++;
        }
    });

    data[ "None" ] = data[ "" ];
    delete data[ "" ];

    const values = Object.values(data);
    const categories = Object.keys(data);

    const series = [{
        name: "Region",
        data: values
    }];
    new ColumnChart(text, series, categories, container);

}
