import { createStore } from 'redux'

let initialValue = JSON.parse(localStorage.getItem('store') || '{}')
function setReducer(state = initialValue, action) {
  switch (action.type) {
    case 'CREATE':
      Object.assign(state, { [action.key]: action.value })
      return { ...state, [action.key]: action.value }
    case 'DELETE':
      if (state[action.key]) delete state[action.key]
      return { ...state }
    case 'CLEAR':
      return {}
    default:
      return state
  }
}

let store = createStore(setReducer)

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()))
})

export default store
