import React from "react";
import Screen from './Screen'
import ButtonInc from "./ButttonInc";
import ButtonReset from "./ButttonReset";

type BoardType = {
    count: number
    incCount: () => void
    resetCount: () => void
}

const Board = (props: BoardType) => {
    return (
        <div className="board">
            <Screen count={props.count}/>
            <ButtonInc count={props.count}
                       incCount={props.incCount}/>
            <ButtonReset count={props.count}
                         resetCount={props.resetCount}/>
            <button className="buttonSet">SET</button>
        </div>
    )
}

export default Board