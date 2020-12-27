import { useMemo, useEffect } from 'react'

const InputGroup = ({ children, name, onChange }) => {
  const _onChange = () => {
    const target = { name: '', value: '' }
    target.name = name

    children.map((val) => {
      if (val.props.value) target.value = target.value.concat(val.props.value)
    })
    onChange({ target })
  }

  const check = useMemo(() => children.map((val) => val.props.value), [
    children,
  ])
  useEffect(() => {
    _onChange()
  }, [JSON.stringify(check)])

  return children
}

export default InputGroup
