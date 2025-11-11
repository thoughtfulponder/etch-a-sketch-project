const container = document.querySelector("#container");

function makeDivs(nums) {
  for (var i = 0; i < nums; i++) {
    let row = document.createElement("div");
    row.classList.add("item");
    container.appendChild(row);
  }
}

makeDivs(4);

/*function makeRows(nums) {
  for (let i = 0; i < nums; i++) {
    let gridRows = document.createElement("div");
    gridRows.classList.add("grid-rows");
    container.appendChild(gridRows);
  }
}*/

/*function makeGrids(nums) {
  for (var i = 0; i < nums; i++) {
    let gridCells = document.createElement("div");
    gridCells.classList.add("grid-cells");
    for (var j = 0; j < nums; j++) {
      let gridRows = document.createElement("div");
      gridRows.classList.add("grid-rows");
      gridCells.appendChild(gridRows);
    }
    container.appendChild(gridCells)
  }
}

makeGrids(16);*/