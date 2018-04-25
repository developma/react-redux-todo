const initialState = {
  todo: {
    todoList: []
  }
}

export const todoReducer = (state = initialState, action) => {
  console.log('todoReducer')
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.payload.todo
      const todoList = state.todo.todoList.slice()
      todoList.push(todo)
      
      return (
        Object.assign({}, state, {todo: {
          todoList: todoList
        }})
      )
    default:
    console.log('default')
    console.log(state)
      return state
  }
}
