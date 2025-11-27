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

/*let gridCells = Array.from(container.childNodes);*/

let gridCells = document.querySelectorAll(".grid-cells");

btn.addEventListener("click", () => {
  for (let i = 0; i < gridCells.length; i++) {
   /*container.removeChild(gridCells[i]);*/
   gridCells[i].remove();
 }
  /*container.innerHTML = "";*/
  setTimeout( () => {
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
  /*gridCells = Array.from(container.childNodes);*/
  gridCells = document.querySelectorAll(".grid-cells");
  }, 10);
  
});

gridCells = document.querySelectorAll(".grid-cells");




/*let gridCells = document.querySelectorAll(".grid-cells");*/

/*let gridCells = Array.from(container.childNodes);*/


gridCells.forEach(cell => {
  cell.addEventListener("click", () => {
    cell.classList.add("pressed")
  });
});

/*for (let i = 0; i < gridCells.length; i++) {
  gridCells[i].addEventListener("click", () => {
    gridCells[i].classList.add("pressed");
  });
}*/