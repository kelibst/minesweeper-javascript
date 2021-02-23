const gameOver = (isGameOver, squares) => {
  isGameOver = true;
  let status = document.querySelector(".status");
  status.classList.add("danger");
  status.innerHTML = "Aright that happens! You lost. Restarting Game!";
  setTimeout(() => {
    location.reload();
  }, 5000);
  squares.forEach((square) => {
    if (square.classList.contains("bomb")) {
      square.innerHTML = `&#9899;`;
    }
  });
};

export default gameOver;
