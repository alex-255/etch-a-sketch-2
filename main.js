const container = document.querySelector(".container");

const setSquaresPerRowButton = document.getElementById(
  "setSquaresPerRowButton",
);
setSquaresPerRowButton.addEventListener("click", () => {
  const numberOfSquaresPerRow = parseInt(
    prompt("Enter the number of squares per row (1-100):", "16"),
  );
  if (numberOfSquaresPerRow >= 1 && numberOfSquaresPerRow <= 100) {
    container.innerHTML = ""; // Clear existing squares
    createSquares(numberOfSquaresPerRow);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

function createSquares(numberOfSquaresPerRow) {
  const numberOfSquares = numberOfSquaresPerRow * numberOfSquaresPerRow;
  const gapLength = (numberOfSquaresPerRow - 1) * 2;
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.style.width = `${(container.clientWidth - gapLength) / numberOfSquaresPerRow}px`;
    square.style.height = `${(container.clientHeight - gapLength) / numberOfSquaresPerRow}px`;
    let alpha = 0.1;
    square.addEventListener("mouseleave", () => {
      // Add 0.1 of alpha channel each time until 1 fully opacity.
      if (alpha < 1) {
        alpha += 0.1;
      } else {
        alpha = 1;
      }

      const rgba = `rgba(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${alpha})`;
      square.style.backgroundColor = rgba;
    });
  }
}
