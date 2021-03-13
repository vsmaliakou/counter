import React from "react";
import s from './SetScreen.module.css'
import SetInput from "./SetInput/SetInput";

type SetScreenType = {
    minCount: number
    maxCount: number
    changeMinCount: (newMinCount: number) => void
    changeMaxCount: (newMaxCount: number) => void
    error: boolean
}

const SetScreen = (props: SetScreenType) => {
    return (
        <div className={s.setScreen}>
            <SetInput className={s.startText}
                      title="start value:"
                      value={props.minCount}
                      onChange={props.changeMinCount}
                      error={props.error}
            />
            <SetInput className={s.maxText}
                      title="max value:"
                      value={props.maxCount}
                      onChange={props.changeMaxCount}
                      error={props.error}
            />
        </div>
    )
}

export default SetScreen