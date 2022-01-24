// Select color input
// Select size input
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");
const submitButton = document.getElementById('submitButton')
const sizePicker = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event)
{
  event.preventDefault();
  makeGrid(height, width);
  }
)

)
function makeGrid(height, width) {
  canvas.createElement("table")
  for(let i = 0; i <= height; i++) {
    let row = canvas.insertRow(i);
  }
  for(let j=0; j <= width; j++) {
    let column = canvas.insertCell(j);
  }
}
// still need to make the table interactive once we have a functional table
