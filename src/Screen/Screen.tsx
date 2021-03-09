import React from "react";
import './Screen.css'

type ScreenType = {
    count: number
    maxCount: number
    error: boolean
}

const Screen = (props: ScreenType) => {

    return (
        <div className="screen">
            <span className={props.count !== props.maxCount ? "span" : "span-red"}>{props.error ? "error" : props.count}</span>
        </div>
    )
}

export default Screen