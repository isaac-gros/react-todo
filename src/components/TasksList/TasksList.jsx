const TasksList = props => {
    return (
        <div className="list">
            <h1>My tasks</h1>
            <ul id="todo-list" role="list">

                {/* Map over tasks prop */}
                {(props.tasks && typeof(props.tasks) == 'object' ) ? props.tasks.map((task, key) => (

                    // Display a <li> element if the task is
                    // in the correct format
                    (task.content && task.id && task.isDone != null) ? (
                        <li key={task.id} role="listitem">
                            {task.isDone ? <s>{task.content}</s> : <span>{task.content}</span>}
                        </li>
                    ) : null
                )) : <></> }
            </ul>
        </div>
    )
}

export default TasksList