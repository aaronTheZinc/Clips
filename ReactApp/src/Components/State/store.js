import { createStore } from 'redux'
import axios from 'axios'
const store = createStore(todos, ['Use Redux'])

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

const getClips = async() => {
        const clips = axios.get('localhost:5000/api/clips')
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))