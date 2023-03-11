import Task from "../Task/Task"

const TasksList = props => {
    return (
        <div className="list">
            <b>My tasks</b>
            <ul id="todo-list" role="list">

                {/* Map over tasks prop */}
                {(props.tasks && typeof(props.tasks) == 'object' ) ? props.tasks.map(task => (

                    // Display a <Task> element if the task is
                    // in the correct format
                    (task.content && task.id && task.isDone != null) ? (
                        <Task key={task.id} isDone={task.isDone} content={task.content} />
                    ) : null
                )) : <></> }
            </ul>
        </div>
    )
}

export default TasksList