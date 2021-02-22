const checkWin = (squares, matches, bombAmount) => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
            matches ++
            console.log('another mathces', matches)
        } 
        if (matches === bombAmount) {
            console.log('you won')
        }     
    }
}
export default checkWin