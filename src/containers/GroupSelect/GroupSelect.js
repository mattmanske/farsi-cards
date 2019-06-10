//-----------  Imports  -----------//

import { map, filter } from 'lodash'

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

//-----------  Component  -----------//

const GroupSelect = ({ groups, onCreate, ...props }) => {
  const onChange = (choices) => props.onChange(map(choices, 'value'))
  const value = filter(groups, (group) => props.value.includes(group.value))

  return (
    <Styled.GroupSelect
      onCreateOption={onCreate}
      onChange={onChange}
      options={groups}
      value={value}
      isSearchable
      isMulti
    />
  )
}

//-----------  Type Definitions  -----------//

GroupSelect.propTypes = {
  groups   : PropTypes.array.isRequired,
  onCreate : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default GroupSelect
