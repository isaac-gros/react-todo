import { useState } from "react"

const Task = props => {
    const [isDone, setIsDone] = useState(props.isDone)

    return (
        <li role="listitem">
            {isDone ? 
                <s>{props.content}</s>
            : <span>{props.content}</span>}
            <button role="button" onClick={() => setIsDone(!isDone)}>
                {isDone ? 'Reopen' : 'Done !'}
            </button>
        </li>
    )
}

export default Task