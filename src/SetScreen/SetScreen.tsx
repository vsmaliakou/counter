import React from "react";
import s from './SetScreen.module.css'
import SetInput from "./SetInput/SetInput";

type SetScreenType = {
    minCount: number
    maxCount: number
    onChangeMinCount: (newMinCount: number) => void
    onChangeMaxCount: (newMaxCount: number) => void
    error: boolean
    setError: (a:boolean) => void
}

const SetScreen = (props: SetScreenType) => {

    return (
        <div className={s.setScreen}>
            <SetInput className={s.startText}
                      title="start value:"
                      error={props.error}
                      value={props.minCount}
                      onChange={props.onChangeMinCount}
                      setError={props.setError}/>
            <SetInput className={s.maxText}
                      title="max value:"
                      error={props.error}
                      value={props.maxCount}
                      onChange={props.onChangeMaxCount}
                      setError={props.setError}
            />
        </div>
    )
}

export default SetScreen
