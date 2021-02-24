import React from "react";

type ButttonResetType = {
    count: number
    resetCount: () => void
}

const ButtonReset = (props: ButttonResetType) => {
    const buttonReset = () => {props.resetCount()}
    return (
        <button className="buttonRes" onClick={buttonReset} disabled={props.count < 5}>RESET</button>
    )
}

export default ButtonReset