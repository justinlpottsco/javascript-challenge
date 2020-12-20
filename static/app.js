//appends a table to your web page
//adds new rows of data for each UFO sighting
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select('tbody')

// Loop through array of objects then each object
tableData.forEach((sighting) => {
    // Append Table Row `tr` to the Table Body `tbody`
    var row = tbody.append('tr');
    // Object.values & forEach to iterate through values
    Object.entries(sighting).forEach(([key,value]) => {
    // Append cell to row for each value
        var cell = row.append('td');
        cell.text(value);
    });
}


