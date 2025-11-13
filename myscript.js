const container = document.querySelector("#container");

/*function makeGrid(nums) {
  for (var i = 0; i < nums; i++) {
    const cells = document.createElement("div");
    cells.classList.add("grid-item");
    container.appendChild(cells);
  }
}

makeGrid(16);*/

function makeGrid(nums) {
  for (var i = 0; i < nums; i++) {
    let gridCells = document.createElement("div");
    gridCells.className = "grid-cells";
    gridCells.innerHTML = i;
    for (var j = 0; j < nums; j++) {
      let gridRows = document.createElement("div");
      gridRows.className = "grid-rows";
      gridRows.innerHTML = j;
      gridCells.appendChild(gridRows);
    }
    container.appendChild(gridCells);
  }
}

//makeGrid(4);