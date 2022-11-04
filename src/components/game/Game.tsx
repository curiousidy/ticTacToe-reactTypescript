import React from 'react'
import { useState } from 'react';
import Board from '../board/Board';

const Game = () => {

    const [stateHistory, setStateHistory] = useState({
        history: [{ squares: Array(9).fill(null) }],
        xIsNext: true
    })

    return (
        <div className='game'>
            <div className='game-board'>
                <Board />
            </div>
            <div className='game-info'>
                {/* <div>{status}</div> */}
                {/* <div>{TODO}</div> */}
            </div>

        </div>
    )
}

export default Game