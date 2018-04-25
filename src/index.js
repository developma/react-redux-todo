import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {todoReducer} from './reducers/TodoReducer'
import AppComponent from './components/AppComponent'

const store = createStore(todoReducer)

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
)






