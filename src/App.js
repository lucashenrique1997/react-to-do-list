import React, {Component} from 'react'
import './style.css'
import './components/TodoList'
import TodoList from "./components/TodoList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <TodoList></TodoList>


      </div>
    )
  }
}

export default App;
