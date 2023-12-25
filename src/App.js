import AddTask from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./App.css"

function App() {
  return (
    <main className="mainContainer">
      <h5>Task Manager App</h5>
      <section className="task_form">
        <AddTask />
      </section>
      <section className="task_section added">
        <TaskList category="Added" />
      </section>
      <section className="task_section started">
        <TaskList category="Started" />
      </section>
      <section className="task_section completed">
        <TaskList category="Completed" />
      </section>
    </main>
  )
}

export default App;