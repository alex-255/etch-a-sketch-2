const container = document.querySelector('.container');

const setSquaresPerRowButton = document.getElementById('setSquaresPerRowButton');
setSquaresPerRowButton.addEventListener('click', () => {
    const numberOfSquaresPerRow = parseInt(prompt('Enter the number of squares per row (1-100):', '16'));
    if (numberOfSquaresPerRow >= 1 && numberOfSquaresPerRow <= 100) {
        container.innerHTML = ''; // Clear existing squares
        createSquares(numberOfSquaresPerRow);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});


function createSquares(numberOfSquaresPerRow) {
    const numberOfSquares = numberOfSquaresPerRow * numberOfSquaresPerRow;
    const gapLength = (numberOfSquaresPerRow - 1) * 2;
    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = `${(container.clientWidth - gapLength) / numberOfSquaresPerRow}px`;
        square.style.height = `${(container.clientHeight - gapLength) / numberOfSquaresPerRow}px`;
        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = 'yellow';
        });
    }
}