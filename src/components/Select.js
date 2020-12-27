import React from 'react'
import styles from 'styles/components/Input.module.scss'
import TemplateInput from './TemplateInput'

const Select = ({
  label,
  name,
  type,
  offsetCol,
  offsetRow,
  col,
  row,
  value,
  className,
  required,
  option,
  optionKey,
  ...Props
}) => {
  return (
    <TemplateInput
      col={col}
      row={row}
      offsetCol={offsetCol}
      offsetRow={offsetRow}
      label={label}
      required={required}
      name={name}
    >
      <select
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        className={`${styles.input} w-100 ${className}`.trim()}
        {...Props}
      >
        {option.map((val, index) => (
          <option
            key={index}
            value={val[optionKey[0]]}
            disabled={val[optionKey[0]] === ''}
          >
            {val[optionKey[1]]}
          </option>
        ))}
      </select>
    </TemplateInput>
  )
}

Select.defaultProps = {
  className: '',
  type: 'text',
  option: [],
}

export default React.memo(Select)
