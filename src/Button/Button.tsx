import React from "react";
import './Button.css'

type ButttonType = {
    className: string
    title: string
    changeCount: () => void
    disabled:boolean
}

const Button = (props: ButttonType) => {
    const button = () => {props.changeCount()}
    return (
        <button className={props.className}
                onClick={button}
                disabled={props.disabled}
        >{props.title}</button>
    )
}

export default Button