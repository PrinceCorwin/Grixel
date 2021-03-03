// declare global variables
let gridContainer = document.getElementById("grid-container");
let gridSize = 25;

addDivs(gridSize);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// slider output
slider.oninput = function () {
  output.innerHTML = this.value;
  gridSize = this.value;
  addDivs(gridSize);
};

// add divs and set class
function addDivs(gridSize) {
  //   let gridWidth = 1 / gridSize + "%";
  //   let gridHeight = 1 / gridSize + "%";
  gridContainer.innerHTML = "";

  setGridSize(gridSize);
  console.log("gridsize = " + gridSize);
  for (let i = 1; i <= gridSize * gridSize; i++) {
    let node = document.createElement("DIV");
    // node.style.backgroundColor = "white";
    node.id = i;
    node.classList.add("gridItem");
    node.onmouseover = function () {
      color(node);
    };
    gridContainer.appendChild(node);
    // console.log(gridContainer);
  }
}
// set grid size
function setGridSize(gridSize) {
  let gridRatio = (1 / gridSize) * 100 + "%";
  //   let gridColumn = "grid-template-column:";
  //   let gridRowHeight = "grid-auto-rows: " + gridRatio;
  let gridArray = [];
  for (let i = 0; i < gridSize; i++) {
    // gridColumn = gridColumn + " " + gridRatio;
    gridArray.push(gridRatio);
  }
  console.log(gridArray);
  let gridStyleStr = gridArray.join(" ");
  console.log(gridStyleStr);
  gridContainer.style.gridTemplateColumns = gridStyleStr;
  gridContainer.style.gridAutoRows = gridRatio;
  console.log(gridContainer);
  return;
}
function color(node) {
  node.style.backgroundColor = "red";
}
