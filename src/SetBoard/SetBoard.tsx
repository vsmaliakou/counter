import React from "react"
import s from'./SetBoard.module.css'
import b from '../Button/Button.module.css'
import SetScreen from '../SetScreen/SetScreen'
import Button from "../Button/Button";

type SetBoardType = {
    minCount: number
    maxCount: number
    setCounts: () => void
    onChangeMinCount: (newMinCount: number) => void
    onChangeMaxCount: (newMaxCount: number) => void
    error: boolean
    setError: (a:boolean) => void
    isEditMode: boolean
}

const SetBoard = (props: SetBoardType) => {

    return (
        <div className={s.setBoard}>
            <SetScreen onChangeMinCount={props.onChangeMinCount}
                       onChangeMaxCount={props.onChangeMaxCount}
                       error={props.error}
                       maxCount={props.maxCount}
                       minCount={props.minCount}
                       setError={props.setError}
            />
            <div className={s.setButtonContainer}>
                <Button className={b.buttonSet}
                        title="set"
                        changeCount={props.setCounts}
                        disabled={!props.isEditMode}/>
            </div>
        </div>
    )
}

export default SetBoard