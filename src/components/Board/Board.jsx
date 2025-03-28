import Square from "../Sqaure/square";
import "../Board/Board.css";
import { useEffect, useState } from "react";
import chalk from "../../assets/chalk.mp3";

import Modal from "../Modal/Modal";

export default function Board() {
  const [dataValue, setDataValue] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const winningComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const [won, setWon] = useState(false);
  const[open,setOpen]=useState(false);
  const audio=new Audio(chalk);
// Get screen size for confetti

  useEffect(()=>{
    
  })
  //Each sqaure click
  const handleClick = (position) => {
    if (dataValue[position]) return;
    audio.play();
    //updating values
    const arrayTobeUpdated = [...dataValue];
    arrayTobeUpdated[position] = next ? "X" : "O";
    setDataValue(arrayTobeUpdated);
    setNext((prevValue) => !prevValue);

    //winning conditions check
    let winningCombination = winningComb.filter(
      ([a, b, c]) => a === position || b === position || c === position
    );
    let won = winningCombination.filter(
      ([a, b, c]) =>
        arrayTobeUpdated[a] === arrayTobeUpdated[b] &&
        arrayTobeUpdated[b] === arrayTobeUpdated[c] &&
        arrayTobeUpdated[a] === arrayTobeUpdated[c]
    );
    if (won.length > 0) {
      setWon(true);
      setOpen(true);
    }
  };
//Reset
  const handleReset=()=>{
    setDataValue(Array(9).fill(null));
    setNext(true);
    setWon(false);
    setOpen(false);
  }
  return (
    <div className="container">
      <div className="header">
        <h1><span className="heading">Tic-Tac-Toe</span></h1>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="board">
        <div className="row">
          <Square
            value={dataValue[0]}
            handleClick={() => handleClick(0)}
            won={won}
          />
          <Square
            value={dataValue[1]}
            handleClick={() => handleClick(1)}
            won={won}
          />
          <Square
            value={dataValue[2]}
            handleClick={() => handleClick(2)}
            won={won}
          />
        </div>
        <div className="row">
          <Square
            value={dataValue[3]}
            handleClick={() => handleClick(3)}
            won={won}
          />
          <Square
            value={dataValue[4]}
            handleClick={() => handleClick(4)}
            won={won}
          />
          <Square
            value={dataValue[5]}
            handleClick={() => handleClick(5)}
            won={won}
          />
        </div>
        <div className="row">
          <Square
            value={dataValue[6]}
            handleClick={() => handleClick(6)}
            won={won}
          />
          <Square
            value={dataValue[7]}
            handleClick={() => handleClick(7)}
            won={won}
          />
          <Square
            value={dataValue[8]}
            handleClick={() => handleClick(8)}
            won={won}
          />
        </div>
      </div>
      {open&& <Modal open={open} handleReset={handleReset} winner={next ? "O" : "X"}/>}
    </div>
  );
}
