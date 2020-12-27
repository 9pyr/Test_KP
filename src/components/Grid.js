import React from 'react'
import _ from 'lodash'
import styles from 'styles/components/Grid.module.scss'

const Grid = ({
  children,
  gap,
  offsetCol,
  offsetRow,
  cols,
  col,
  width,
  height,
  rows,
  row,
  align,
  className,
  style,
  ...Props
}) => {
  return (
    <div
      className={`${styles.grid}${cols ? ` gird-cols-${cols}` : ''}${
        col ? ` gird-col-${col}` : ''
      }${rows ? ` gird-rows-${rows}` : ''}${row ? ` gird-row-${row}` : ''}${
        align ? ` grid-align-${align}` : ''
      } ${className}`.trim()}
      style={{
        gridTemplateColumns: width
          ? `repeat(${cols ? cols : 'auto-fit'}, ${
              !_.isArray(width) ? `minmax(0.5rem, ${width})` : width?.toString().replace(',', ' ')
            })`
          : undefined,
        gridTemplateRows: height
          ? `repeat(${rows ? rows : 'auto-fit'}, ${
              !_.isArray(height)
                ? `minmax(0.5rem, ${height})`
                : height?.toString().replace(',', ' ')
            })`
          : undefined,
        gridColumn: offsetCol ? `${offsetCol ? offsetCol : 'auto'} / span ${col || 1}` : undefined,
        gridRow: offsetRow ? `${offsetRow ? offsetRow : 'auto'} / span ${col || 1}` : undefined,
        gap: gap ? ` ${gap}` : undefined,
        ...style,
      }}
      {...Props}
    >
      {children}
    </div>
  )
}

Grid.defaultProps = {
  className: '',
  gap: '1rem',
}

export default React.memo(Grid)
