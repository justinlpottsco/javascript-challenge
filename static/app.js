//appends a table to your web page
//adds new rows of data for each UFO sighting
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select('tbody');

function tablebuilder(data){
    tbody.html("");
    // Loop through array of objects then each object
    data.forEach((sighting) => {
        // Append Table Row `tr` to the Table Body `tbody`
        var row = tbody.append('tr');
        // Object.values & forEach to iterate through values
        Object.values(sighting).forEach((value) => {
        // Append cell to row for each value
            var cell = row.append('td');
            cell.text(value);
        });
    });
}
tablebuilder(tableData);

function buttonClick(){
    var date = d3.select("#datetime").property("value");
    var originaldata = tableData
    if (date) {
        var filterdata = originaldata.filter(row => row.datetime === date)
    }
    tablebuilder(filterdata);
}

d3.select("#filter-btn").on("click",buttonClick);
