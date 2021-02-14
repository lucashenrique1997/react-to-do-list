import React, {Component} from 'react'
import TodoItems from "../TodoItems";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.log = this.log.bind(this);
  }

  addItem(e) {
    let state = this.state;
    if(e.target.value !== null) {
      let newItem = {
        text: this._taskInput.value,
        key: Date.now()
      }
      state.task = '';
      state.items.push(newItem);
      this.setState(state);
    }

    e.preventDefault();
  }

  log() {
    console.log(this.state.items.length);
  }

  deleteItem(key) {
    let state = this.state;
    state.items = state.items.filter((item) => item.key !== key);
    this.setState(state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Nova tarefa" name="task"
                 value={this.state.task}
                 onChange={(e) => this.setState({task: e.target.value})}
                 ref={(e) => this._taskInput = e}/>
          <button type="submit">Adicionar</button>
        </form>

        <TodoItems list={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList;
