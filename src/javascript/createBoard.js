import addFlag from "./addFlag";
import clickSquare from "./clickedSquare";
import validate from "./validation";

const createBoard = (
  width,
  grid,
  squares,
  bombAmount,
  isGameOver,
  flags,
  matches
) => {
  const bombsArr = Array(bombAmount).fill("bomb");
  const emptyArr = Array(width * width - bombAmount).fill("valid");
  const gameArr = [...emptyArr, ...bombsArr];
  const shufArr = gameArr.sort(() => Math.random() - 0.5);
  let flagAdd = document.querySelector('.flag-add');

  flagAdd.addEventListener('click', () => {
    flagAdd.classList.contains('active') ? flagAdd.classList.remove('active') : flagAdd.classList.add('active');
  })

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shufArr[i]);
    grid.appendChild(square);
    squares.push(square);

    square.addEventListener("click", (e) =>
      flagAdd.classList.contains('active') ?  
      addFlag(square, isGameOver, flags, bombAmount, matches, squares) :
      clickSquare(square, squares, width, isGameOver)
    );

    square.oncontextmenu = (e) => {
      e.preventDefault();
      addFlag(square, isGameOver, flags, bombAmount, matches, squares);
    };
  }

  validate(width, squares);
};

export { createBoard };
