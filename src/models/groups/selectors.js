//-----------  Imports  -----------//

import { get, find }      from 'lodash'

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const groupsSelector  = state => state.groups.data
export const routeIdSelector = (_, props) => get(props, 'match.params.id')

//-----------  Selectors  -----------//

export const groupSelector = createSelector([groupsSelector, routeIdSelector], (groups, id) => {
  return find(groups, { id }) || {}
})