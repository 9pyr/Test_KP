import React, { useEffect, useState } from 'react'
import styles from 'styles/components/Input.module.scss'
import TemplateInput from './TemplateInput'

const Input = ({
  label,
  name,
  type,
  offsetCol,
  offsetRow,
  col,
  row,
  value: initialValue,
  className,
  required,
  isAllow,
  config,
  comma,
  onChange,
  ...Props
}) => {
  const [value, setValue] = useState(initialValue || '')

  useEffect(() => {
    _isAllow(initialValue)
  }, [initialValue])

  const _isAllow = (val) => {
    if (isAllow) {
      const temp = isAllow(val)
      val = temp === undefined ? value : temp
    }

    if (comma) {
      let num = val instanceof String ? val : String(val)
      let newValue = ''
      num = [...num].reverse().join('')
      for (const item in num) {
        if ((item + 1) % comma === 0 && item !== 0 && item != num.length - 1)
          newValue += num.charAt(item) + ','
        else newValue += num.charAt(item)
      }
      val = [...newValue].reverse().join('')
    }
    setValue(val)
  }
  const _onChange = (e) => {
    if (comma) {
      e.target.value = e.target.value.replace(/,/g, '')
    }

    onChange(e)
  }

  return (
    <TemplateInput
      col={col}
      row={row}
      offsetCol={offsetCol}
      offsetRow={offsetRow}
      label={label}
      required={required}
      name={name}
      config={config}
    >
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className={`${styles.input} w-100 ${
          type === 'number' ? 'text-right' : ''
        } ${className}`.trim()}
        value={value || ''}
        onChange={_onChange}
        {...Props}
      />
    </TemplateInput>
  )
}

Input.defaultProps = {
  className: '',
  type: 'text',
}

export default React.memo(Input)
