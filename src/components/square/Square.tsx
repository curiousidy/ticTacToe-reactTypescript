import './square.css';

interface PropsSquare {
    value: string
    onClick: () => void
}

const square = ({ value, onClick }: PropsSquare) => {


    return (

        <button className='square' onClick={() => onClick()}>
            {value}
        </button>

    )
}

export default square