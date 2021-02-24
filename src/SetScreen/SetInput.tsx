import React, {ChangeEvent} from "react";

type InputType = {
    className: string
    title: string
    error: boolean
    onChange: (count: number) => void
    setError: (a:boolean) => void
}

const SetInput = (props: InputType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let minCount = Number(e.currentTarget.value)
        if(minCount >= 0) {
            props.onChange(minCount)
            props.setError(false)
        } else {
            props.setError(true)
        }
    }

    return (
        <div className={props.className}>
            {props.title}
            <input className={props.error ? "error" : "input"} type="number" onChange={onChange}/>
        </div>
    )
}

export default SetInput