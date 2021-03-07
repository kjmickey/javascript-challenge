// from data.js
var tableData = data;

// YOUR CODE HERE!

// build a table
// stolen from https://www.valentinog.com/blog/html-table/
function generateTable(table, data2) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  let table = document.querySelector("table");
  let data2 = Object.keys(tableData[0]);
  generateTable(table, tableData);

console.log(tableData);
console.log(tableData[0][0]);
console.log(table);



// Declare button and form (hit return = click button)
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key

button.on("click", runEnter);
form.on("submit",runEnter);

// create function to run both events

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
   var inputElement = d3.select("#datetime");

} 