const container = document.querySelector("#container");

const btn = document.querySelector(".btn");



let gridValue = 16;

function makeGrid(nums) {

  let value = nums * nums;
  for (let i = 0; i < value; i++) {
    let gridCells = document.createElement("div");
    gridCells.classList.add("grid-cells");
    container.appendChild(gridCells);
    gridCells.style.setProperty("flex-basis", `calc(100% / ${nums})`);
  }
  return value
}

let grid = makeGrid(gridValue);
console.log(grid);





btn.addEventListener("click", () => {
  for (let i = gridCells.length - 1; i >= 0; i--) {
    gridCells[i].remove();
  }

  setTimeout(() => {
    num = prompt("enter a number");
    if (num > 100 || num === null || num === "") {
      alert("please enter a between 1 to 100");
      gridValue = 16;
      makeGrid(gridValue);
    }
    else {
      gridValue = num;
      makeGrid(gridValue);
    }

  }, 100);

});


let gridCells = document.getElementsByClassName("grid-cells");


container.addEventListener("click", (e) => {
  if (e.target.classList.contains("grid-cells")) {
    e.target.classList.add("pressed");
  }
});