
import Square from '../square/Square'
import './board.css';

interface PropsBoard {
    squares: string[],
    onClick: (index: number) => void
}
const Board = ({ squares, onClick }: PropsBoard) => {
    console.log(squares);

    return (

        <div>
            <div className='board-row'>
                {
                    squares.map((cell, index) =>
                        <Square
                            key={index}
                            value={cell}
                            onClick={() => onClick(index)}
                        />)
                }
            </div>

        </div>
    )
}

export default Board