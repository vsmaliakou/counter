import React from "react";

type ButttonIncType = {
    count: number
    incCount: () => void
}

const ButtonInc = (props: ButttonIncType) => {
    const buttonInc = () => {props.incCount()}
    return (
        <button className="buttonInc" onClick={buttonInc} disabled={props.count === 5}>INC</button>
    )
}

export default ButtonInc