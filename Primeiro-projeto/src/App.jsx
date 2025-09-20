import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {


const [tasks, setTasks] = useState({
    id: 1, title: "Estudar programação para se tornar um desenvolvedor full stack", isCompleted: false,
  },{
    id: 2, title: "Ler livros sobre desenvolvimento web e mobile", isCompleted: false,
  },{
    id: 3, title: "Praticar exercícios de lógica de programação diariamente", isCompleted: false,
});



  return(
    <div className="app">
      <h1 className="title">Gerenciador de Tarrefas</h1>
      <AddTask />
      <Tasks tasks={tasks} />

    </div>
  )
}
export default App;