import React from "react";
import s from './Screen.module.css'

type ScreenType = {
    count: number
    maxCount: number
    error: boolean
}

const Screen = (props: ScreenType) => {

    return (
        <div className={s.screen}>
            <span className={props.count !== props.maxCount ? s.span : s.spanRed}>{props.error ? "error" : props.count}</span>
        </div>
    )
}

export default Screen