import React from 'react'
import TemplateInput from './TemplateInput'

const Radio = ({
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
  onChange,
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
      {option.map((val, index) => (
        <div key={index} className="d-flex flex-nowrap align-items-center mx-1">
          <input
            type="radio"
            id={val[optionKey[1]]}
            name={name}
            value={val[optionKey[0]]}
            onChange={onChange}
            required={required}
            checked={value === val[optionKey[0]]}
            {...Props}
          />
          <label htmlFor={val[optionKey[1]]} className="m-0">
            {val[optionKey[1]]}
          </label>
        </div>
      ))}
    </TemplateInput>
  )
}

Radio.defaultProps = {
  className: '',
  type: 'text',
  option: [],
}

export default React.memo(Radio)
