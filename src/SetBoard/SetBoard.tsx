import React from "react"
import './SetBoard.css'
import SetScreen from '../SetScreen/SetScreen'
import Button from "../Button/Button";

type SetBoardType = {
    onChangeMin: (newStartCount: number) => void
    onChangeMax: (newMaxCount: number) => void
    setCounts: () => void
}

const SetBoard = (props: SetBoardType) => {
    return (
        <div className="setBoard">
            <SetScreen onChangeMin={props.onChangeMin}
                       onChangeMax={props.onChangeMax}/>
            <Button className="buttonSet"
                    title="set"
                    changeCount={props.setCounts}
                    disabled={false}/>
        </div>
    )
}

export default SetBoard