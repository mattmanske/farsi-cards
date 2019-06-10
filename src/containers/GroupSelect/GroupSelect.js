//-----------  Imports  -----------//

import { map, filter } from 'lodash'

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

//-----------  Component  -----------//

class GroupSelect extends React.Component {

  //-----------  Helpers  -----------//

  onChange = (choices) => {
    return this.props.onChange(map(choices, 'value'))
  }

  //-----------  HTML Render  -----------//

  render() {
    const { value, groups, className, ...props } = this.props

    const values = filter(groups, (group) => value.includes(group.value))

    return (
      <Styled.GroupSelect
        onChange={this.onChange}
        className={className}
        options={groups}
        value={values}
        isSearchable
        isMulti
      />
    )
  }
}

//-----------  Type Definitions  -----------//

GroupSelect.propTypes = {
  groups: PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default GroupSelect
