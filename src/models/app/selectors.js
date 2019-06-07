//-----------  Imports  -----------//

import get                from 'lodash/get'

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const isInitializingSelector   = (state) => get(state, 'firebase.isInitializing')
export const isDashboardRouteSelector = (_, props) => get(props, 'location.pathname', '').includes('/dashboard')

//-----------  Selectors  -----------//

export const isDashboardSelector = createSelector([isDashboardRouteSelector], (isDashboardRoute) => {
  return (isDashboardRoute)
})