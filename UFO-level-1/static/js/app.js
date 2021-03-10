// from data.js
var tableData = data;

let tbody = d3.select("tbody");

function buildTable(data){

    tbody.html("");
// var i = 0;
    data.forEach((dataRow) => {
   //     i++;
        let row = tbody.append("tr");
               
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
 //      console.log(i);  should get 111
        })
}

function handleButton(){
    // Keep browser from redrawing page
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if(date) {
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on('click', handleButton);
// tried a million different things to make a return work
// couldn't figure it out
// form.on("submit",handleClick);
// d3.selectAll("#datetime").on('submit', handleClick);

// var button = d3.select("#filter-btn");
// var form = d3.select("#input-field");

// Create event handlers for clicking the button or pressing the enter key
// var inputField = d3.select("#input-field");
// button.on("click", handleClick);
// inputField.on("change", handleClick) 


buildTable(tableData)