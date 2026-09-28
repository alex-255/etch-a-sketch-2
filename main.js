const container = document.querySelector('.container');

const numberOfSquares = 16*16;

for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}