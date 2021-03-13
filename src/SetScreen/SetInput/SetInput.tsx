import React, {ChangeEvent} from "react";
import s from './SetInput.module.css'

type InputType = {
    className: string
    title: string
    value: number
    onChange: (count: number) => void
    error: boolean
}

const SetInput = (props: InputType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let count = Number(e.currentTarget.value)
        if (count >= 0) {
            props.onChange(count)
        } else {
            props.onChange(count)
        }
    }

    return (
        <div className={props.className}>
            {props.title}
            <input className={props.error ? s.error : s.input} type="number" value={props.value} onChange={onChange}/>
        </div>
    )
}

export default SetInput