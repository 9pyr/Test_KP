import React from 'react'

const Form = ({ children, form, onSubmit }) => {
  const { values } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }
  return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
