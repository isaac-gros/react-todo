import TasksList from "./components/TasksList/TasksList";
import { correctFixtures } from "./fixtures/todos";

const App = () => {
  return (
    <div className="app">
      <h1>TODO App</h1>
      <TasksList tasks={correctFixtures}/>
    </div>
  );
}

export default App;
