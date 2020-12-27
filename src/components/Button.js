import React, { useMemo } from 'react'

import PropTypes from 'prop-types'
import styles from 'styles/components/Button.module.scss'

const Button = (props) => {
  const {
    color,
    children,
    className,
    style,
    width,
    height,
    round,
    ...Props
  } = props

  const classNames = useMemo(
    () =>
      `${styles.btn} ${styles[`btn-bg-${color}`]}${
        round ? ` ${styles.round}` : ''
      } ${className}`.trim(),
    [color, className, round]
  )

  return (
    <button
      className={classNames}
      style={{
        width: width ? width / 10 + 'rem' : '',
        height: height ? height / 10 + 'rem' : '',
        ...style,
      }}
      {...Props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  round: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  className: '',
}

export default React.memo(Button)
