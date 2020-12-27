import React, { useMemo } from 'react'

import styles from 'styles/components/Card.module.scss'

const Card = (props) => {
  const { children, bgColor, className, ...Props } = props
  return (
    <div
      className={`${styles.card}${
        bgColor.charAt(0) === '#' ? '' : ` bg-${bgColor}`
      } ${className}`}
      style={{ background: `${bgColor.charAt(0) === '#' ? bgColor : ''}` }}
      {...Props}
    >
      {children}
    </div>
  )
}

const Header = (props) => {
  const { extra, children, ...Props } = props
  return (
    <div className={`${styles.head}`} {...Props}>
      <strong>{children}</strong>
      <div>{extra}</div>
    </div>
  )
}
const Body = (props) => {
  const { children, cols, col, rows, row, className, ...Props } = props

  const classNames = useMemo(
    () =>
      `${styles.body}${cols ? ` gird-cols-${cols}` : ''}${col ? ` gird-col-${col}` : ''}${
        rows ? ` gird-rows-${rows}` : ''
      }${row ? ` gird-row-${row}` : ''} ${className}`.trim(),
    [cols, col, rows, row, className]
  )

  return (
    <div className={classNames} {...Props}>
      {children}
    </div>
  )
}

Card.Header = Header
Card.Body = Body

Card.defaultProps = {
  bgColor: 'gray',
}
Body.defaultProps = {
  className: '',
}

export default Card
