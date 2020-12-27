import React, { useEffect } from 'react'
import InputGroup from 'components/InputGroup'
import Radio from 'components/Radio'
import Select from 'components/Select'
import { Button, Card, Form, Grid, Input, useForm } from 'components'
import useStore from 'actions/useStore'
import {
  initialValue,
  initialTitle,
  initialNationality,
  initialGender,
  initialPhoneCode,
} from 'actions/initialValue'

const Forms = () => {
  const { insertData, store, deleteStore, updateData } = useStore()
  const form = useForm(initialValue)
  const updateStatus = store['update']

  const { values, handleValue, setValues } = form

  const onChangeValue = (e) => {
    if (e.target) {
      handleValue(e.target.name, e.target.value)
    }
  }

  const handleSubmit = (value) => {
    if (!updateStatus) insertData(value)
    else {
      updateData(value.index, value)
      deleteStore('update')
    }

    setValues(initialValue)
  }

  const onCancel = () => {
    if (updateStatus) {
      deleteStore('update')
      setValues(initialValue)
    }
  }

  useEffect(() => {
    if (updateStatus) setValues(updateStatus)
  }, [updateStatus])

  return (
    <div className="m-3 w-50">
      <Form form={form} onSubmit={handleSubmit}>
        <Card bgColor="white" className="grid-col-4">
          <Card.Body cols={5} rows={7}>
            <Select
              label="title"
              name="title"
              value={values.title}
              onChange={onChangeValue}
              option={initialTitle}
              optionKey={['value', 'text']}
              required
            />
            <Input
              col={2}
              label="First name: "
              name="name"
              value={values.name}
              onChange={onChangeValue}
              maxLength={50}
              required
            />
            <Input
              col={2}
              label="Last name: "
              name="last_name"
              value={values.last_name}
              onChange={onChangeValue}
              maxLength={50}
              required
            />
            <Input
              col={2}
              type="date"
              label="Birthday: "
              name="birthday"
              value={values.birthday}
              onChange={onChangeValue}
              required
            />
            <Select
              col={3}
              label="Nationality: "
              name="nationality"
              value={values.nationality}
              onChange={onChangeValue}
              option={initialNationality}
              optionKey={['value', 'text']}
              required
              config={{ required: 'hide' }}
            />
            <Grid col={5} cols={12} gap="1px">
              <InputGroup name="citizen_id" onChange={onChangeValue}>
                <Input
                  col={2}
                  type="text"
                  label="CitizenID: "
                  name="citizen_id:0"
                  value={values['citizen_id:0']}
                  isAllow={(value) => {
                    if (!/\D+/.exec(value)) return value
                  }}
                  pattern={'[0-9]{1}'}
                  onChange={onChangeValue}
                  maxLength={1}
                  className="text-center"
                />
                <Input
                  col={2}
                  label={<strong>-&nbsp;</strong>}
                  type="text"
                  name="citizen_id:1"
                  value={values['citizen_id:1']}
                  isAllow={(value) => {
                    if (!/\D+/.exec(value)) return value
                  }}
                  pattern={'[0-9]{4}'}
                  onChange={onChangeValue}
                  maxLength={4}
                  className="text-center"
                />
                <Input
                  col={2}
                  label={<strong>-&nbsp;</strong>}
                  type="text"
                  name="citizen_id:2"
                  value={values['citizen_id:2']}
                  isAllow={(value) => {
                    if (!/\D+/.exec(value)) return value
                  }}
                  pattern={'[0-9]{5}'}
                  onChange={onChangeValue}
                  maxLength={5}
                  className="text-center"
                />
                <Input
                  label={<strong>-&nbsp;</strong>}
                  type="text"
                  name="citizen_id:3"
                  value={values['citizen_id:3']}
                  isAllow={(value) => {
                    if (!/\D+/.exec(value)) return value
                  }}
                  pattern={'[0-9]{2}'}
                  onChange={onChangeValue}
                  maxLength={2}
                  className="text-center"
                />
                <Input
                  label={<strong>-&nbsp;</strong>}
                  type="text"
                  name="citizen_id:4"
                  value={values['citizen_id:4']}
                  isAllow={(value) => {
                    if (!/\D+/.exec(value)) return value
                  }}
                  pattern={'[0-9]{1}'}
                  onChange={onChangeValue}
                  maxLength={1}
                  className="text-center"
                />
              </InputGroup>
            </Grid>
            <Radio
              col={2}
              label="Gender: "
              name="gender"
              value={values.gender}
              onChange={onChangeValue}
              option={initialGender}
              optionKey={['value', 'text']}
              required
            />
            <Grid col={5} cols={7}>
              <Select
                col={2}
                label="Mobile Phone: "
                name="code_mobile_phone"
                value={values.code_mobile_phone}
                onChange={onChangeValue}
                option={initialPhoneCode}
                optionKey={['value', 'text']}
                required
              />
              <Input
                col={2}
                label={<strong>-&emsp;</strong>}
                type="tel"
                name="mobile_phone"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="xxx-xxx-xxxx"
                value={values.mobile_phone}
                isAllow={(value) => {
                  if (!/\D+/.exec(value)) return value
                }}
                onChange={onChangeValue}
                required
                config={{ required: 'hide' }}
                maxLength={10}
              />
            </Grid>

            <Input
              col={2}
              offsetRow={6}
              type="text"
              label="Passport No: "
              name="passport"
              value={values.passport}
              maxLength={7}
              pattern={'[a-zA-Z]{1}[0-9]{6}'}
              onChange={onChangeValue}
            />
            <Input
              col={2}
              offsetRow={7}
              // type="number"
              label="Expected Salary: "
              name="expected_salary"
              value={values.expected_salary}
              isAllow={(value) => {
                if (!/\D+/.exec(value)) return value
              }}
              maxLength={20}
              onChange={onChangeValue}
              comma={3}
              required
            />
            {updateStatus && (
              <Button
                type="button"
                color="black-outline"
                onClick={onCancel}
                style={{ gridArea: '-1 / -2 / -2 / -3' }}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" style={{ gridArea: '-1 / -1 / -2 / -2' }}>
              {updateStatus ? 'Update' : 'Submit'}
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </div>
  )
}

export default Forms
