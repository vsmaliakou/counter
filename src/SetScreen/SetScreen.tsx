import React, {ChangeEvent} from "react";
import './SetScreen.css'

type SetScreenType = {
    onChangeMin: (newStartCount: number) => void
    onChangeMax: (newMaxCount: number) => void
}

const SetScreen = (props: SetScreenType) => {

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
       let minCount = Number.parseInt(e.currentTarget.value)
        props.onChangeMin(minCount)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let maxCount = Number.parseInt(e.currentTarget.value)
        props.onChangeMax(maxCount)
    }

    return (
        <div className="setScreen">
            <div className="startText">
                start value:
                <input type="number" onChange={onChangeMin}/>
            </div>
            <div className="maxText">
                max value:
                <input type="number" onChange={onChangeMax}/>
            </div>
        </div>
    )
}

export default SetScreen