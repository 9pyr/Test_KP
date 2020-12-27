import { CheckBox } from 'components'
import React from 'react'
import styles from 'styles/components/Table.module.scss'

const Table = ({
  disabledSelection,
  selection,
  rowSelection,
  dataSource,
  columns,
}) => {
  return (
    <React.Fragment>
      <table className={`${styles.table}`}>
        <thead className={`${styles.table_head}`}>
          <tr>
            {columns.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 && rowSelection && <th></th>}
                <th>{item.label}</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody className={`${styles.table_body}`}>
          {(dataSource || []).map((value, data_index) => {
            return (
              <tr key={data_index}>
                {columns.map((item, index) => (
                  <React.Fragment key={index}>
                    {index === 0 && rowSelection && (
                      <td>
                        <CheckBox.Item
                          col={2}
                          name={'list_table' + data_index}
                          value={data_index}
                          checked={selection.includes(data_index)}
                          onChange={(e) => {
                            rowSelection(value, data_index, e.target.checked)
                          }}
                          disabled={disabledSelection}
                        ></CheckBox.Item>
                      </td>
                    )}
                    <td>
                      {item.render
                        ? item.render(value, data_index)
                        : value[item.key] || ''}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      {!(dataSource || []).length && (
        <div
          className={`${styles.data_empty} text-center align-items-center`}
          style={{ minHeight: '50px' }}
        >
          No Data
        </div>
      )}
    </React.Fragment>
  )
}

export default Table
