import React, {ChangeEvent} from "react";

type InputType = {
    value: number
    className: string
    title: string
    error: boolean
    onChange: (count: number) => void
    setError: (a:boolean) => void
}

const SetInput = (props: InputType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let count = Number(e.currentTarget.value)
        if(count >= 0) {
            props.onChange(count)
            props.setError(false)
        } else {
            props.setError(true)
        }
    }

    return (
        <div className={props.className}>
            {props.title}
            <input className={props.error ? "error" : "input"} type="number" value={props.value} onChange={onChange}/>
        </div>
    )
}

export default SetInput