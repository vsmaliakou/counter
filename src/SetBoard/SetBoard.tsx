import React from "react"
import './SetBoard.css'
import SetScreen from '../SetScreen/SetScreen'
import Button from "../Button/Button";

type SetBoardType = {
    setCounts: () => void
    onChangeCount: (newCount: number) => void
    onChangeMaxCount: (newMaxCount: number) => void
    error1: boolean
    error2: boolean
    setError1: (a:boolean) => void
    setError2: (a:boolean) => void
}

const SetBoard = (props: SetBoardType) => {

    return (
        <div className="setBoard">
            <SetScreen onChangeCount={props.onChangeCount}
                       onChangeMaxCount={props.onChangeMaxCount}
                       error1={props.error1}
                       error2={props.error2}
                       setError1={props.setError1}
                       setError2={props.setError2}/>
            <Button className="buttonSet"
                    title="set"
                    changeCount={props.setCounts}
                    disabled={false}/>
        </div>
    )
}

export default SetBoard