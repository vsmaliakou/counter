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
    error: boolean
    isEditMode: boolean
}

const Board = (props: BoardType) => {
    return (
        <div className="board">
            <Screen count={props.count}
                    maxCount={props.maxCount}
                    error={props.error}
            />
            <Button className="buttonInc"
                    title="inc"
                    changeCount={props.incCount}
                    disabled={props.isEditMode || props.count === props.maxCount}/>
            <Button className="buttonRes"
                    title="reset"
                    changeCount={props.resetCount}
                    disabled={props.isEditMode}/>
        </div>
    )
}

export default Board