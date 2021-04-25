// from data.js get the data (Starter code given)
var tableData = data;
console.log(tabledata);

//Grab references to the input element
var button = d3.select("#filter-btn");

var tbody=d3.select("#tbody");  
console.log(data);
    //filter data to run through every fiter data aray filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
data.forEach(observation =>{
    //output the message to the web console (removed to object.entries)
    //add the rows to the table
    var row=tbody.append("tr");
    //use 'Object.entries' to console.log each report
    Object.entries(observation).forEach(([key,value], index) => {
        console.log(key,value, index);
    //append 1 cell per weather report
        var cell = row.append("td");
        cell.text(value);
        
    });
});

//Create the event handler
button.on("click",function(event){
    //Prevent the page from refreshing
    d3.event.preventDefault();
    //remove anything from the HTML list
    tbody.html("");
    //Select the input element and get the HTML node
var inputElement=d3.select("#datetime");
    //Get the value property of the input element
var inputValue = inputElement.property("value");
    //Console logging for sanity
    console.log(inputValue);
    console.log(tableData);
    //now filter , loop through every event by date time
var filterdata=tableData.filter(tableData => tableData.datetime === inputValue);
    //Console logging for sanity
    console.log(filteredData);
    //create the array with the rows for each event
filteredData.forEach(function(dateData){
    var row= tbody.append("tr");
    //use 'Object.entries' to console.log each report
    Object.entries(observation).forEach(function([key,value]){
    console.log(key,value);
    //append 1 cell per weather report
    var cell = row.append("td");
    cell.text(value);
        
    });
});
