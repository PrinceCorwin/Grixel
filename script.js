// declare global variables
let gridContainer = document.getElementById("grid-container");
let gridSize = 50;
let colorScheme = "pastel";
let penUp = true;
console.log(penUp);
document
  .getElementById("grid-container")
  .addEventListener("click", function () {
    togglePen();
  });
console.log(penUp);

addDivs(gridSize);

var slider = document.getElementById("sliderRange");
var output = document.getElementById("gridSize");
output.innerHTML = slider.value + " x " + slider.value;

// slider output
slider.oninput = function () {
  output.innerHTML = this.value + " x " + this.value;
  gridSize = this.value;
  addDivs(gridSize);
};

// add divs and set class
function addDivs(gridSize) {
  gridContainer.innerHTML = "";

  setGridSize(gridSize);
  //   console.log("gridsize = " + gridSize);
  for (let i = 1; i <= gridSize * gridSize; i++) {
    let node = document.createElement("DIV");
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
  let gridArray = [];
  for (let i = 0; i < gridSize; i++) {
    gridArray.push(gridRatio);
  }
  //   console.log(gridArray);
  let gridStyleStr = gridArray.join(" ");
  //   console.log(gridStyleStr);
  gridContainer.style.gridTemplateColumns = gridStyleStr;
  gridContainer.style.gridAutoRows = gridRatio;
  //   console.log(gridContainer);
  return;
}
// set background color
function color(node) {
  console.log(penUp);
  if (penUp === false) {
    if (colorScheme === "pastel") {
      let rnd = Math.floor(Math.random() * 5);
      switch (rnd) {
        case 0:
          rnd = "#EFA4F1";
          break;
        case 1:
          rnd = "#ffefa1";
          break;
        case 2:
          rnd = "#94ebcd";
          break;
        case 3:
          rnd = "#78c4d4";
          break;
        case 4:
          rnd = "#9a8194";
          break;
        default:
          rnd = "blue";
          break;
      }
      // console.log(rnd);
      node.style.backgroundColor = rnd;
    } else if (colorScheme === "white") {
      node.style.backgroundColor = "white";
    } else {
      node.style.backgroundColor = document.getElementById("favcolor").value;
    }
  }
}
function setScheme(scheme) {
  switch (scheme) {
    case "pastel":
      colorScheme = "pastel";
      break;
    case "erase":
      colorScheme = "white";
      break;
    //   custom incomplete
    case "custom":
      colorScheme = "custom";
      console.log(colorScheme);
      break;

    default:
      break;
  }
}
function togglePen() {
  penUp = !penUp;
}
