import React from "react"
import s from './Board.module.css'
import b from '../Button/Button.module.css'
import Screen from '../Screen/Screen'
import Button from "../Button/Button";

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
        <div className={s.board}>
            <Screen count={props.count}
                    maxCount={props.maxCount}
                    error={props.error}
                    isEditMode={props.isEditMode}
            />
            <div className={s.buttonContainer}>
                <Button className={b.buttonInc}
                        title="inc"
                        changeCount={props.incCount}
                        disabled={props.isEditMode || props.count === props.maxCount}/>
                <Button className={b.buttonRes}
                        title="reset"
                        changeCount={props.resetCount}
                        disabled={props.isEditMode}/>
            </div>
        </div>
    )
}

export default Board