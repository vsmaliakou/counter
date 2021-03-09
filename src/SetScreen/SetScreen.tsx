import React from "react";
import './SetScreen.css'
import SetInput from "./SetInput";

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
        <div className="setScreen">
            <SetInput className="startText"
                      title="start value:"
                      error={props.error}
                      value={props.minCount}
                      onChange={props.onChangeMinCount}
                      setError={props.setError}/>
            <SetInput className="maxText"
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
