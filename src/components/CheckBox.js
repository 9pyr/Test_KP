import React from 'react'
import TemplateInput from './TemplateInput'

const CheckBox = ({
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
            type="checkbox"
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

const CheckBoxItem = ({
  name,
  value,
  checked,
  onChange,
  required,
  children,
  ...Props
}) => {
  return (
    <div className="d-flex flex-nowrap align-items-center mx-1">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        checked={checked}
        {...Props}
      />
      <label htmlFor={name} className="m-0">
        {children}
      </label>
    </div>
  )
}

CheckBox.Item = CheckBoxItem

CheckBox.defaultProps = {
  className: '',
  type: 'text',
  option: [],
}

export default CheckBox
