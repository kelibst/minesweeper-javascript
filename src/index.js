import { createBoard } from './javascript/createBoard';
import './sass/index.scss'


document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid');
    let width = 10
    let bombAmount = 20
    let squares = []
    let isGameOver = false;
    let flags = 0;
    let matches = 0;
    createBoard(width, grid, squares, bombAmount, isGameOver, flags, matches)
})