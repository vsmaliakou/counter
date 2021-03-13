import React from "react"
import s from './Board.module.css'
import b from '../Button/Button.module.css'
import Screen from '../Screen/Screen'
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";

type BoardType = {
    minCount: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
    error: boolean
    isEditMode: boolean
}

const Board = (props: BoardType) => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)

    return (
        <div className={s.board}>
            <Screen count={count}
                    minCount={props.minCount}
                    maxCount={props.maxCount}
                    error={props.error}
                    isEditMode={props.isEditMode}
            />
            <div className={s.buttonContainer}>
                <Button className={b.buttonInc}
                        title="inc"
                        changeCount={props.incCount}
                        disabled={props.isEditMode || count === props.maxCount}
                />
                <Button className={b.buttonRes}
                        title="reset"
                        changeCount={props.resetCount}
                        disabled={props.isEditMode}
                />
            </div>
        </div>
    )
}

export default Board