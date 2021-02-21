const addFlag = (square, isGameOver, flags,  bombAmount) => {
     if (isGameOver) return
     if (!square.classList.contains('checked') && !flags < bombAmount) {
         if (!square.classList.contains('flag')) {
             square.classList.add('flag')
             square.innerHTML = '&#9971'
             flags ++
         } else {
             square.classList.remove('flag')
             square.innerHTML = '';
             flags --
         }
     }
}

export default addFlag