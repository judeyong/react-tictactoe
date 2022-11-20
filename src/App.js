import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  const [history, setHistory] = useState(
    [
      { playingLog: Array(9).fill(null) }
    ]);
  const [playerFlag, setPlayerFlag] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    const newLog = history.slice(0, stepNumber + 1);
    const current = newLog[newLog.length - 1];
    
    //slice 함수 원본 수정x 복사함
    const squares = {...current.playingLog};
    //const squares = current.playingLog.slice();

    console.log('squares array', squares);

    if( calculateWinner(squares) || squares[i] ) {
      return;
    }
    //true면 X false 면 O
    squares[i] = playerFlag ? 'X' : 'O' ;
    
    setHistory(newLog.concat([{playingLog:squares}]));
    setStepNumber(newLog.length);
    setPlayerFlag(!playerFlag);
    
    
  }

const jumpTo = (step) => { 
    setStepNumber(step);
    setPlayerFlag((step%2)===0);
  }
  const newLog = history;
  const current = newLog[stepNumber];
  const winner = calculateWinner(current.playingLog);
  
  const moves = newLog.map((element, idx) => {
    const desc = idx ? 
    'Go to move' + idx :
    'Go to game start';
    return(
      <li key={idx}>
        <button onClick={() => jumpTo(idx)}>{desc}</button>
      </li>
    );
  });
  let status;
  if(winner) {
    status = 'Winner : ' + winner;
  } else {
    status = '  Playing: ' + (playerFlag ? 'X' : 'O');
  }
  return (  
    <div className='game'>
      <div className='game-board'>
        <Board
          cell={current.playingLog}
          onClick={(i) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

const calculateWinner = (boxValue) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if(boxValue[a] && boxValue[a] === boxValue[b] && boxValue[a] === boxValue[c]) {
      return boxValue[a];
    }
  }
  return null;
}


export default App;
