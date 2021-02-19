import { createBoard } from './javascript/createBoard';
import './sass/index.scss'


document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid');
    let width = 10
    let bombAmount = 20
    let squares = []
    createBoard(width, grid, squares, bombAmount)
})