const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let createDiv = document.createElement("div");

  createDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });

  container.appendChild(createDiv);
}
