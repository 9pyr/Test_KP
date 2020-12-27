import useStore from 'actions/useStore'
import { Button, Card, CheckBox, Pagination } from 'components'
import Table from 'components/Table'
import React, { useMemo, useState } from 'react'

const TablePage = () => {
  const { store, setStore, deleteData } = useStore()
  const [page, setPage] = useState(1)
  const [select, setSelect] = useState([])
  const data = store['data']
  const isUpdate = !!store['update']

  const column = [
    {
      label: 'NAME',
      key: 'name',
      render: (data) => (
        <>
          {data.name}&ensp;{data.last_name}
        </>
      ),
    },
    {
      label: 'GENDER',
      key: 'gender',
    },
    {
      label: 'MOBILE PHONE',
      key: 'mobile_phone',
      render: (data) => (
        <>
          {data.code_mobile_phone}&nbsp;
          {data.mobile_phone}
        </>
      ),
    },
    {
      label: 'NATIONALITY',
      key: 'nationality',
    },
    {
      label: '',
      key: '',
      render: (data, index) => (
        <>
          <button
            className="btn-link"
            onClick={() => {
              data.index = index
              setStore('update', data)
            }}
            disabled={isUpdate}
          >
            EDIT
          </button>
          &nbsp;/&nbsp;
          <button
            className="btn-link"
            onClick={() => deleteData(index)}
            disabled={isUpdate}
          >
            DELETE
          </button>
        </>
      ),
    },
  ]

  const handleStore = useMemo(() => {
    const newStore = new Array()
    let holdStore = data
    for (let i = (page - 1) * 5; i < holdStore.length && i < page * 5; i++) {
      newStore.push(holdStore[i])
    }
    return newStore
  }, [page, JSON.stringify(data)])

  // :indeterminate
  return (
    <div className="m-3 w-50">
      <Card bgColor="white" className="grid-col-4">
        <div className="d-flex flex-nowrap mb-2">
          <div className="d-flex flex-nowrap w-50">
            <CheckBox.Item
              col={2}
              name="select_all"
              onChange={({ target }) => {
                if (target.checked) {
                  const arr = []
                  handleStore.map((val, index) => {
                    arr.push(index)
                  })
                  setSelect([...arr])
                } else {
                  setSelect([])
                }
              }}
              disabled={isUpdate}
            >
              Select All
            </CheckBox.Item>
            <div className="align-self-center">
              <Button
                onClick={() => {
                  for (const item of select) {
                    deleteData(item)
                  }
                  setSelect([])
                }}
                disabled={isUpdate}
                color="danger"
                className="ml-2"
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-end w-50">
            <Pagination
              record={data.length}
              page={page}
              onChange={(ev) => setPage(ev)}
            />
          </div>
        </div>
        <Card.Body>
          <Table
            disabledSelection={isUpdate}
            selection={select}
            rowSelection={(item, index, checked) => {
              if (checked) {
                setSelect([...select, index])
              } else {
                setSelect((state) => {
                  const temp = [...state]
                  const posit = temp.indexOf(index)
                  if (posit >= 0) {
                    temp.splice(posit, 1)
                  }
                  return temp
                })
              }
            }}
            columns={column}
            dataSource={handleStore}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default TablePage
