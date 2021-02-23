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

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shufArr[i]);
    grid.appendChild(square);
    squares.push(square);

    square.addEventListener("click", (e) =>
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
