//from data.js get the data (Starter code given)
var tableData = data;
console.log(tabledata);

//create the variables
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime","city", "state","country","shape","durationMinutes","comments"]

