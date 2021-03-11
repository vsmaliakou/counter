import React from "react";
import s from './Screen.module.css'

type ScreenType = {
    count: number
    maxCount: number
    error: boolean
    isEditMode: boolean
}

const Screen = (props: ScreenType) => {
    return (
        <div className={s.screen}>
            {/*<span className={props.count !== props.maxCount && !props.error ? s.span : s.spanRed}>{props.error ? "Error" : props.count}</span>*/}
            <span className={props.count !== props.maxCount && !props.error
                ? (!props.isEditMode ? s.span : s.setText)
                : (props.error ? s.redText : s.spanRed)}
            >
            {props.error
                ? (s.redText ? "Incorrect value!" : "error")
                : (!props.isEditMode ? props.count : "enter values and press 'set'")}
            </span>
        </div>
    )
}

export default Screen