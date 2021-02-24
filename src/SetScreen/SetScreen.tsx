import React from "react";
import './SetScreen.css'
import SetInput from "./SetInput";

type SetScreenType = {
    onChangeCount: (newCount: number) => void
    onChangeMaxCount: (newMaxCount: number) => void
    error1: boolean
    error2: boolean
    setError1: (a:boolean) => void
    setError2: (a:boolean) => void
}

const SetScreen = (props: SetScreenType) => {

    return (
        <div className="setScreen">
            <SetInput className="startText"
                      title="start value:"
                      error={props.error1}
                      onChange={props.onChangeCount}
                      setError={props.setError1}/>
            <SetInput className="maxText"
                      title="max value:"
                      error={props.error2}
                      onChange={props.onChangeMaxCount}
                      setError={props.setError2}/>
        </div>
    )
}

export default SetScreen
