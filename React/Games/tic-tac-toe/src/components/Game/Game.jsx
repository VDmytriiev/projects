import React, { useState } from 'react';
import { Board } from '../Board/Board';
import './Game.css';
import '../../helper';
import { calculateWinner } from '../../helper';

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    //Определяем был ли клик по ячейке или игра окончена:
    if (winner || boardCopy[index]) return;
    //Определяем чей хо Х || O
    boardCopy[index] = xIsNext ? 'X' : 'O';
    //Обновляем стэйт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }
  const startNewGame = () => {
    return (
      <button className='start_btn' onClick={() => { setBoard(Array(9).fill(null)) }}>start new game</button>
    )
  }
  return (
    <div className='wrapper'>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className='game_info'>
        {winner ? 'WINNER IS - ' + winner : 'walks now  - ' + (xIsNext ? ' X ' : ' O ')}
      </p>
    </div>
  );
}