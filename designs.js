// Select color input
// Select size input
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for(i = 0; i <= height; i++) {
    let row = canvas.insertRow(i);
  }
  for(j=0; j < =width; j++) {
    let column = canvas.insertCell(j);
  }
}
