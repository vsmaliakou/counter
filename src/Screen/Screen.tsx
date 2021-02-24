import React from "react";
import './Screen.css'

type ScreenType = {
    count: number
}

const Screen = (props: ScreenType) => {
    return (
        <div className="screen">
            <span className={props.count !== 5 ? "span" : "span-red"}>{props.count}</span>
        </div>
    )
}

export default Screen