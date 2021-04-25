// from data.js get the data (Starter code given)
var tableData = data;
console.log(tabledata);

// Select the body
var $tbody=d3.select ("tbody");
console.log(data);

//Use d3 to update each cells's text with alien report values
data.forEach(function(ufoSighting);{
    console.log(ufosighting);
    var row=$tbody.append("tr");
    Object.defineProperties(ufoSighting.forEach(function([key,value]){
        console.log(key,value);
        //Append a cell to the row for each value in the ufo sighting object
        var cell = row.append("td");
        cell.text(value);

    }
}







