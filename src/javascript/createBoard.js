const createBoard = (width, grid, squares, bombAmount) => { 
    const bombsArr = Array(bombAmount).fill('bomb');
    const emptyArr = Array(width*width - bombAmount).fill('valid')
    debugger
    const gameArr = [...emptyArr, ...bombsArr]
    const shufArr = gameArr.sort(() => Math.random() - 0.5)

   
    for(let i = 0; i < width * width; i++ ){
        const square = document.createElement('div');
        square.setAttribute('id', i)
        square.classList.add(shufArr[i])
        grid.appendChild(square)
        squares.push(square)
    }
}

export { createBoard }