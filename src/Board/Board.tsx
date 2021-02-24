import React from "react"
import './Board.css'
import Screen from '../Screen/Screen'
import Button from "../Button/Button";
import SetScreen from "../SetScreen/SetScreen";

type BoardType = {
    count: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
    error1: boolean
    error2: boolean
}

const Board = (props: BoardType) => {
    return (
        <div className="board">
            <Screen count={props.count}
                    maxCount={props.maxCount}
                    error1={props.error1}
                    error2={props.error2}/>
            <Button className="buttonInc"
                    title="inc"
                    changeCount={props.incCount}
                    disabled={props.count === props.maxCount}/>
            <Button className="buttonRes"
                    title="reset"
                    changeCount={props.resetCount}
                    disabled={false}/>
        </div>
    )
}

export default Board