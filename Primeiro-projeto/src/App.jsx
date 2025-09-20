import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return(
    <div className="app">
      <h1 className="title">Gerenciador de Tarrefas</h1>
      <Tasks />
      <AddTask />
    </div>
  )
}
export default App;