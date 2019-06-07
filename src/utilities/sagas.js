//-----------  Imports  -----------//

import { appName } from 'utilities/constants'

//-----------  Action Helpers  -----------//

export function createActionConstants(base, additionalTypes = []){
  const asyncActions = ['REQUEST', 'SUCCESS', 'FAILURE']
  const typeArr      = [ ...asyncActions, ...additionalTypes ]
  const results      = {}

  typeArr.forEach(type => results[type] = createActionConstant(base, type))
  return results
}

export function createActionConstant(base, type){
  return `${appName}/${base}_${type}`
}
