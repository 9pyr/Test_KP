import React from 'react'
import Forms from 'pages/Forms'
import Table from './Table'

const App = () => {
  return (
    <div
      className="w-100 bg-gray d-flex flex-column align-items-center"
      style={{ height: '100vh' }}
    >
      <Forms />
      <Table />
    </div>
  )
}

export default App
