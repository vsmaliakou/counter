import React from "react";
import s from './Screen.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../store";

type ScreenType = {
    count: number
    minCount: number
    maxCount: number
    error: boolean
    isEditMode: boolean
}

const Screen = (props: ScreenType) => {

    const isDataEntering = useSelector<AppStateType, boolean>(state => state.counter.isDataEntering)

    return (
        <div className={s.screen}>
            {/*<span className={props.count < props.maxCount*/}
            {/*    ? !props.isDataEntering*/}
            {/*        ? s.span : s.setText*/}
            {/*    : props.error*/}
            {/*        ? s.redText*/}
            {/*        : s.spanRed*/}
            {/*}>*/}
            {/*    {error*/}
            {/*        ? "Incorrect value!"*/}
            {/*        : isDataEntering*/}
            {/*            ? "enter values and press 'set'"*/}
            {/*            : props.count*/}
            {/*    }*/}
            {/*</span>*/}
            <span className={props.count !== props.maxCount && !props.error
                ? !props.isEditMode
                    ? s.span
                    : s.setText
                : props.error
                    ? s.redText
                    : s.spanRed
            }>
            {props.error
                ? s.redText
                    ? "Incorrect value!"
                    : "error"
                : !isDataEntering
                    ? props.count
                    : "enter values and press 'set'"
            }</span>
        </div>
    )
}

export default Screen