import React from 'react'

const TemplateInput = ({
  children,
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
  config,
  ...Props
}) => {
  return (
    <div
      className={`px-1 m-1 d-flex flex-nowrap w-100 ${
        col ? ` gird-col-${col}` : ''
      }${row ? ` gird-row-${row}` : ''}`}
      style={{
        gridColumn: offsetCol
          ? `${offsetCol ? offsetCol : 'auto'} / span ${col || 1}`
          : undefined,
        gridRow: offsetRow
          ? `${offsetRow ? offsetRow : 'auto'} / span ${row || 1}`
          : undefined,
      }}
      {...Props}
    >
      <span
        className="mr-1 d-flex flex-nowrap"
        style={{ whiteSpace: 'nowrap' }}
      >
        {label}
        {config.required === 'show' && (
          <span className="txt-danger ml-1">{required ? '*' : ''}</span>
        )}
      </span>
      {children}
      <label htmlFor={name}>{required}</label>
    </div>
  )
}

TemplateInput.defaultProps = {
  className: '',
  type: 'text',
  config: { required: 'show' },
}

export default React.memo(TemplateInput)
