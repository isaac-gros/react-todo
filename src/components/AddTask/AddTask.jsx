import { useState } from "react"

const AddTask = props => {

    const [taskMessage, setTaskMessage] = useState('')
    const [taskObject, setTaskObject] = useState({})

    return (
        <form role="form">
            <label htmlFor="task">Add task : </label>
            <input role="textbox" id="task" type="text" value={taskMessage} onChange={(e) => setTaskMessage(e.target.value)}/>
            <button role="button" type="button" onClick={() => {
                let updatedTasks = props.handler(taskMessage)
                if (updatedTasks && taskMessage !== '') setTaskObject(updatedTasks[updatedTasks.length - 1])
            }}>Add</button>
            {props.debug && taskMessage !== '' ? 
                <pre role="application">{JSON.stringify(taskObject)}</pre>
            : <></>}
        </form>
    )
}

export default AddTask