const container = document.querySelector("#container");

const btn = document.querySelector(".btn");

/*function makeGrid(nums) {
  for (var i = 0; i < nums; i++) {
    const cells = document.createElement("div");
    cells.classList.add("grid-item");
    container.appendChild(cells);
  }
}

makeGrid(16);*/


function makeGrid(nums = 16) {

  let value = nums * nums;
  for (let i = 0; i < value; i++) {
    let gridCells = document.createElement("div");
    gridCells.className = "grid-cells";
    // gridCells.innerHTML = i;
    container.appendChild(gridCells);
    gridCells.style.setProperty("flex-basis", `calc(100% / ${nums})`);
  }
  return nums
}
console.log(makeGrid());

const gridCells = document.querySelector(".grid-cells");

btn.addEventListener("click", () => {
  num = prompt("enter a number");
  makeGrid(num);
});






