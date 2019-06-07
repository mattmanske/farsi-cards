//-----------  Imports  -----------//

import has               from 'lodash/has'

import { createElement } from 'react'

//-----------  Styled Component Helpers  -----------//

export const resolveTagFromProps = (styleModifiers) => (({ tag, children, ...props }) => {
  styleModifiers.map(propName => has(props, propName) && delete props[propName])
  return createElement(tag, props, children)
})