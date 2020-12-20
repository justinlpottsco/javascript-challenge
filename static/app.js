//appends a table to your web page
//adds new rows of data for each UFO sighting
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select('tbody')

// Loop through array of objects then each object
tableData.forEach((sighting) => {
    // Append Table Row `tr` to the Table Body `tbody`
    let row = tbody.append(sighting);
}


