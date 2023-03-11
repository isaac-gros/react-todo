import { useState } from "react";
import AddTask from "./components/Buttons/AddTask";
import TasksList from "./components/TasksList/TasksList";
import { correctFixtures } from "./fixtures/todos";

const App = () => {

  const [tasks, setTasks] = useState(correctFixtures)
  const newTaskHandler = (taskContent) => {
    let lastTask = tasks[tasks.length - 1]
    if (taskContent) {
      setTasks([...tasks, {
        id: lastTask.id + 1,
        content: taskContent,
        isDone: false
      }])
      return tasks
    }
  }

  return (
    <div className="app">
      <h1>TODO App</h1>
      <TasksList tasks={tasks}/>
      <AddTask handler={newTaskHandler}/>
    </div>
  );
}

export default App;
