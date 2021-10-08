const container = document.querySelector(".container");
const button = document.querySelector(".button");

function changeGridSize() {
  let gridSize = prompt("Enter a number to change the grid size!");

  while (gridSize < 0 || gridSize > 100 || !gridSize) {
    gridSize = prompt("Enter a number from 0 to 100!");
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  makeGrid(gridSize);
}

function makeGrid(number = 16) {
  const container = document.querySelector(".container");
  const squarePower = Math.pow(number, 2);

  container.style.setProperty("grid-template-rows", `repeat(${number}, 1fr)`);
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${number}, 1fr)`
  );

  for (let i = 0; i < squarePower; i++) {
    let createDiv = document.createElement("div");

    createDiv.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });

    container.appendChild(createDiv);
  }
}

// Load Page
makeGrid();

// Event Listeners
button.addEventListener("click", changeGridSize);
