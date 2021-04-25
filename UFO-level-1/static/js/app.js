// from data.js get the data (Starter code given)
var tableData = data;
console.log(tabledata);

//Select the button
var button = d3.select("#filter-btn");

//Create the event handler
button.on"click",() => {
    //Prevent the page from refreshing
    d3.event.preventDefault();
    tbody.hmtl("");
    //Select the input element and get the raw HTML node
    var inputDate = inputfieldDate.property("value");
    //console logging for sanity
    console.log(inputDate)
    //filter data to run through every fiter data aray
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

}



// Select the body
var tbody=d3.select ("tbody");
console.log(data);

//Use d3 to update each cells's text with alien report values
data.forEach(function(ufoSighting){
    console.log(ufosighting);
    var row=tbody.append("tr");
    Object.defineProperties(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
//Append a cell to the row for each value in the ufo sighting object
        var cell = row.append("td");
        cell.text(value);
    });
});







