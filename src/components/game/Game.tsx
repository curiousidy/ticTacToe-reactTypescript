import React from 'react'
import { useState } from 'react';
import { calculateWinner } from '../../utils/calculateWinner';
import Board from '../board/Board';

const Game = () => {

    const [stateHistory, setStateHistory] = useState({
        history: [{ squares: Array(9).fill(null) }],
        xIsNext: true,
        stepNumber: 0
    });


    const handleClick = (data: number) => {
        const history = stateHistory.history.slice(0, stateHistory.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[data]) return;

        squares[data] = stateHistory.xIsNext ? 'X' : 'O';

        setStateHistory({
            history: history.concat([{ squares: squares }]),
            xIsNext: !stateHistory.xIsNext,
            stepNumber: history.length
        });
    }

    const jumpTo = (step: number) => {
        setStateHistory({
            ...stateHistory,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    const history = stateHistory.history;
    const current = history[stateHistory.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ? `Go to move ${move}` : 'Go to game start';
        return (<li><button></button></li>)
    })
    let status;

    winner ? status = `Winner ${winner}` : status = `Next player: ${stateHistory.xIsNext ? 'X' : 'O'}`;


    return (
        <div className='game'>
            <div className='game-board'>
                <Board
                    squares={current.squares}
                    onClick={(i: number) => handleClick(i)}
                />
            </div>
            <div className='game-info'>
                <div>{status}</div>
                <div>
                    {
                        history.map((step, move) => {
                            const desc = move ? `Go to move ${move}` : 'Go to move 0';
                            return (
                                <li key={move}>
                                    <button onClick={() => jumpTo(move)}>
                                        {desc}
                                    </button>
                                </li>)
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Game