// from data.js get the data (Starter code given)
var tableData = data;
console.log(tabledata);

//Select the button
var button = d3.select("#filter-btn");

//Create the event handler
button.on("click",function(event){
    //Prevent the page from refreshing
    d3.event.preventDefault();
    tbody.hmtl("");
    //Select the input element and get the raw HTML node
   
    
    //filter data to run through every fiter data aray filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
data.forEach(observation =>{
    //output the message to the web console (removed to object.entries)
    //add the rows to the table
    var row=tbody.append("tr");
    //use 'Object.entries' to console.log each report
    Object.entries(observation).forEach([key,value]) => {
        console.log(key,value)
    //append 1 cell per weather report
        var cell = row.append("td")
        cell.text(value)
     })
});
    var row=tbody.append("tr");
    Object.entiries(dateData).forEach(function([key,value]){
    console.log(key,value);


        //Append a cell to the row for each value in the ufo sighting object
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
        });
    })
});



// Select the body
var tbody=d3.select ("tbody");
console.log(data);

//Use d3 to update each cells's text with alien report values
data.forEach(function(ufoSighting){
    console.log(ufosighting);
    
});







