import React from "react"
import s from './SetBoard.module.css'
import b from '../Button/Button.module.css'
import SetScreen from '../SetScreen/SetScreen'
import Button from "../Button/Button";

type SetBoardType = {
    minCount: number
    maxCount: number
    isEditMode: boolean
    changeMinCount: (newMinCount: number) => void
    changeMaxCount: (newMaxCount: number) => void
    setCounts: () => void
    error: boolean
}

const SetBoard = (props: SetBoardType) => {
    return (
        <div className={s.setBoard}>
            <SetScreen minCount={props.minCount}
                       maxCount={props.maxCount}
                       changeMinCount={props.changeMinCount}
                       changeMaxCount={props.changeMaxCount}
                       error={props.error}
            />
            <div className={s.setButtonContainer}>
                <Button className={b.buttonSet}
                        title="set"
                        changeCount={props.setCounts}
                        disabled={!props.isEditMode || props.error}
                />
            </div>
        </div>
    )
}
export default SetBoard