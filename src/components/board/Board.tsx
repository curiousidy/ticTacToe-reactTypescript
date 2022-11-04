import { useState } from 'react';
import { calculateWinner } from '../../utils/calculateWinner';
import Square from '../square/Square'
import './board.css';


const Board = () => {

    const INITIAL_STATE = {
        squares: Array(9).fill(null),
        xIsNext: true
    }
    const [stateSquares, setStateSquares] = useState(INITIAL_STATE);

    const handleClick = (data: number) => {
        const squares = stateSquares.squares.slice();

        if (calculateWinner(squares) || squares[data]) return;

        squares[data] = stateSquares.xIsNext ? 'X' : 'O';
        console.log(squares[data]);

        setStateSquares({
            squares: squares,
            xIsNext: !stateSquares.xIsNext
        });
    }

    const winner = calculateWinner(stateSquares.squares);
    let status;

    winner ? status = `Winner ${winner}` : status = `Next player: ${stateSquares.xIsNext ? 'X' : 'O'}`;

    return (

        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {
                    stateSquares.squares.map((cell, index) =>
                        <Square
                            key={index}
                            value={cell}
                            onClick={() => handleClick(index)}
                        />)
                }
            </div>
            <button className='reset-button' onClick={() => setStateSquares(INITIAL_STATE)}>Reset Game</button>
        </div>
    )
}

export default Board