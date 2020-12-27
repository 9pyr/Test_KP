import { useState } from 'react'
import store from './store'

const useStore = () => {
  const [state, setState] = useState(store.getState())
  const setStore = (key, value) => {
    store.dispatch({
      type: 'CREATE',
      key,
      value,
    })
  }
  const deleteStore = (key) => {
    store.dispatch({
      type: 'DELETE',
      key,
    })
  }
  const insertData = (value) => {
    store.dispatch({
      type: 'CREATE',
      key: 'data',
      value: [...state['data'], value],
    })
  }
  const updateData = (index, value) => {
    const temp = state.data
    temp[index] = value
    setState([...temp])
    store.dispatch({
      type: 'CREATE',
      key: 'data',
      value: [...temp],
    })
  }
  const deleteData = (index) => {
    let arr = state['data']
    arr.splice(index, 1)

    store.dispatch({
      type: 'CREATE',
      key: 'data',
      value: arr,
    })
  }
  const clearStore = () => {
    store.dispatch({ type: 'CLEAR' })
  }

  store.subscribe(() => {
    setState(store.getState())
  })

  return {
    setStore,
    insertData,
    updateData,
    deleteData,
    deleteStore,
    clearStore,
    store: state,
  }
}

export default useStore
