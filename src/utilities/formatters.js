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

//-----------  Helpers  -----------//

export function toSlug(text){
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(p, c =>
        b.charAt(a.indexOf(c)))     // Replace special chars
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}

export function imageSearchURL(text){
  const search = toSlug(text).replace(/\-+/g, '+')
  return `https://www.google.com/search?q=${search}&tbs=itp:clipart,isz:i,ic:trans&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjGycG-_9riAhUXvZ4KHe65AssQpwUIIg&biw=1440&bih=798&dpr=2`
}
