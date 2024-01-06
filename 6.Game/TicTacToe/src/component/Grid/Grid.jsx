import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../helpers/checkWinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Grid.css';





function Grid({ numberOfCards }) {
    const [turn, setTurn ] = useState(true); // false --> X, true => O
    const [board, setBoard ] = useState(Array(numberOfCards).fill("")); //["", "", "", "", "", ""]
    const [winner, setWinner ] = useState(null);

    function play(index) {
        console.log("move played", index);
        if(turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }
        const win = isWinner(board, turn? "O": "X");
        if(win) {
            setWinner(win);
            toast.success(`Congratulation ${win} win the game!!`)
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <> 
                    <h1 className="turn-highlight">Winner is {winner} </h1> 
                    <button className="reset" onClick={reset}>Reset game</button>
                    <ToastContainer position="top-center"/>
                </>
            )}
            <h1 className="turn-highlight">Current Turn: {(turn)? 'O': 'X'} </h1>
            <div className="grid">
                {board.map((value, idx) => {
                    <Card gameEnd = {winner ? true: false } onPlay={play} player={value} key={idx} index={idx} />
                })}
            </div>
        </div>
    )
}

export default Grid;
