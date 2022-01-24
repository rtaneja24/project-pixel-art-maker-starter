// Select color input
// Select size input
const canvas = document.getElementById("pixelCanvas");
const submitButton = document.getElementById('submitButton')

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function(event)
{
  event.preventDefault();
  canvas.innerHTML = "";
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
  //console.log('wemadadafdfasdfada')
  //console.log(height)
  //console.log(width)

  }
)

function makeGrid(height, width) {
  const table = document.createElement("TABLE");
  const color = document.getElementById("colorPicker").value;
  for(let i = 0; i < height; i++) {
    let row = document.createElement('tr');
    canvas.appendChild(row);
    for(let j=0; j < width; j++) {
      let cell = document.createElement('td');
    row.appendChild(cell);
    cell.addEventListener('click', function (event){event.target.style.backgroundColor = color})
    }
  }
}
// still need to make the table interactive once we have a functional table
