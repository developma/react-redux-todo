import React from 'react'

export default class TodoComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  render() {
    console.log('render')
    console.log(this.props)
    console.log(this.props.todo.todoList.length)
    const list = this.props.todo.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })
    console.log(list)
    return (
      <div>
        <input type="text" onChange={e => this.setState({ todo: e.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>Add</button>
        <br />
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
