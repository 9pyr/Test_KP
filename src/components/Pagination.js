import React, { useEffect, useState } from 'react'
import styles from 'styles/components/Pagination.module.scss'

const Pagination = ({ record = 1, page, onChange }) => {
  const [pages, setPages] = useState([])
  const createPage = () => {
    const $page_item = new Array()
    const $start_page = Math.ceil(page / 3)
    const $per_page = 5
    const $length_page = Math.ceil(record / $per_page)
    for (
      let i = $start_page;
      i <= $per_page + ($start_page - 1) && i <= $length_page;
      i++
    ) {
      $page_item.push(i)
    }
    setPages($page_item)
  }
  const onClick = (item) => () => {
    onChange(item)
  }
  const onNext = () => {
    onChange(page + 1)
  }
  const onPrevious = () => {
    onChange(page - 1)
  }

  useEffect(() => {
    createPage()
  }, [record, page])
  return (
    <div className={`${styles.paginate}`}>
      <button
        onClick={onPrevious}
        className={`${styles.paginate_item} ${
          page === 1 ? styles.disabled : ''
        }`}
      >
        PREV
      </button>
      {pages.map((item, key) => (
        <button
          key={key}
          onClick={onClick(item)}
          className={`${styles.paginate_item} ${
            page === item ? styles.active : ''
          }`}
        >
          {item}
        </button>
      ))}
      <button onClick={onNext} className={`${styles.paginate_item}`}>
        NEXT
      </button>
    </div>
  )
}

export default Pagination
