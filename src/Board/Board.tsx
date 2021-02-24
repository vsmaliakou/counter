import React from "react"
import './Board.css'
import Screen from '../Screen/Screen'
import Button from "../Button/Button";

type BoardType = {
    count: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
}

const Board = (props: BoardType) => {
    return (
        <div className="board">
            <Screen count={props.count}
                    maxCount={props.maxCount}/>
            <Button className="buttonInc"
                    title="inc"
                    changeCount={props.incCount}
                    disabled={props.count === props.maxCount}/>
            <Button className="buttonRes"
                    title="reset"
                    changeCount={props.resetCount}
                    disabled={props.count < props.maxCount}/>
        </div>
    )
}

export default Board