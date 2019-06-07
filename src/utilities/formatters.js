//-----------  Imports  -----------//

import moment   from 'moment'
import isArray  from 'lodash/isArray'
import isObject from 'lodash/isObject'

//-----------  Formatters  -----------//

export function formatNumber(value, seperator = ','){
  if (undefined === value) return null
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator)
}

export function formatPrice(value){
  if (undefined === value) return null
  return parseInt(value.replace(/[^\d]/g, ''))
}

export function formatPhone(value){
  if (undefined === value) return null
  const s2 = ('' + value).replace(/\D/g, '')
  const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/)
  return (!m) ? '' : `(${m[1]}) ${m[2]}-${m[3]}`
}

export function formatDate(value){
  if (undefined === value || !moment(value).isValid()) return null
  return moment(value).format('YYYY-MM-DD')
}

export function getType(value){
  if (isArray(value))       return 'array'
  else if (isObject(value)) return 'object'
  else                      return 'string'
}
