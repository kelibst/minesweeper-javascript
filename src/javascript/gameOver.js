const gameOver = (isGameOver, squares) => {
    console.log('game over')
    isGameOver = true

    squares.forEach(square  => {
        if (square.classList.contains('bomb')) {
            square.innerHTML = `&#9899;`
        }
    });
}

export default gameOver