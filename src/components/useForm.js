import { useState } from 'react'

const useForm = (initial) => {
  const [values, setValues] = useState(initial || {})

  const handleValue = (key, value) => {
    setValues({ ...values, [key]: value })
  }

  const handleValues = (value) => {
    setValues(value)
  }

  return { handleValue, values, setValues: handleValues }
}

export default useForm
