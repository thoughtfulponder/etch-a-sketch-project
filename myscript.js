const container = document.querySelector("#container");

const btn = document.querySelector(".btn");


let gridValue = 16;

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

btn.addEventListener("click", () => {
  /*for (let i = 0; i < gridCells.length; i++) {
    container.removeChild(gridCells[i]);
  }*/
  container.innerHTML = "";
  
  num = prompt("enter a number");
  if (num > 100 || num === null || num === "") {
    alert("please enter a between 1 to 100");
    makeGrid(16)
    }
    else {
      makeGrid(num)
    }
  
});


let grid = makeGrid(gridValue);
console.log(grid);

const gridCells = document.querySelectorAll(".grid-cells");












