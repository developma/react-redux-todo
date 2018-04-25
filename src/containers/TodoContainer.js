import {connect} from 'react-redux'
import * as actions from '../actions/TodoAction'
import TodoComponent from '../components/TodoComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  console.log(state.todo)
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps')
  return {
    addTodo: todo => dispatch(actions.addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)