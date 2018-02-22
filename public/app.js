document.addEventListener("DOMContentLoaded", function(){

    url = "https://restcountries.eu/rest/v2/all";

    makeRequest(url, requestComplete);

    new PieChart();
    const text = "Our Favourite Programming Languages";
    const series = [{
        name: "Cohort 7",
        data: [8, 12, 3, 1]
    },
    {
       name: "Cohort 18",
        data: [6, 10, 1, 1]
    }];
    const categories = ['JavaScript', 'Java', 'Ruby', 'Other'];
    const languagesContainer = document.getElementById("languages-column-chart");
    new ColumnChart(text, series, categories, languagesContainer);
});

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
    const regionsContainer = document.getElementById("regions-column-chart");

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

    const values = Object.values(data);
    const categories = Object.keys(data);

    const series = [{
        name: "Region",
        data: values
    }];
    new ColumnChart(text, series, categories, regionsContainer);

}
