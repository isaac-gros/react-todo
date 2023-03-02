import { useState } from "react"

const TasksList = props => {

    const tasksView = []
    if (props.tasks) {
        for (const key in props.tasks) {
            let task = props.tasks[key]
            let taskAppearance = task.isDone ? <span>task.content</span> : <s>task.content</s>
            tasksView.push(
                <li key={key}>{taskAppearance}</li>
            )
        }
    }

    return (
        <div className="list">
            <h1>My tasks</h1>
            <ul>
                {tasksView}
            </ul>
        </div>
    )
}

export default TasksList