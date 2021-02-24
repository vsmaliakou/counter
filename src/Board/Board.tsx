import React from "react"
import './Board.css'
import Screen from '../Screen/Screen'
import Button from "../Button/Button";

type BoardType = {
    count: number
    incCount: () => void
    resetCount: () => void
}

const Board = (props: BoardType) => {
    return (
        <div className="board">
            <Screen count={props.count}/>
            <Button className="buttonInc" title="inc" count={props.count} changeCount={props.incCount} disabled={props.count === 5}/>
            <Button className="buttonRes" title="reset" count={props.count} changeCount={props.resetCount} disabled={props.count < 5}/>
        </div>
    )
}

export default Board