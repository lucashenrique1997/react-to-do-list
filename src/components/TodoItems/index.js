import React, {Component} from 'react'

class TodoItems extends Component {

  constructor(props) {
    super(props);
    this.state ={};
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    this.props.deleteItem(key);
  }


  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item) => {
            return (
              <li onClick={() => this.deleteItem(item.key)} key={item.key}>
                {item.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoItems;
