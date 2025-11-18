const container = document.querySelector("#container");

/*function makeGrid(nums) {
  for (var i = 0; i < nums; i++) {
    const cells = document.createElement("div");
    cells.classList.add("grid-item");
    container.appendChild(cells);
  }
}

makeGrid(16);*/

function makeGrid(nums = 16) {
  /*nums = prompt("enter a number");*/
  let value = nums * nums;
  for (let i = 0; i < value; i++) {
    let gridCells = document.createElement("div");
    gridCells.className = "grid-cells";
    // gridCells.innerHTML = i;
    container.appendChild(gridCells);
    gridCells.style.setProperty("flex-basis", `calc(100% / ${nums})`);
  }
}
const btn = document.querySelector(".btn");
  makeGrid();