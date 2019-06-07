//-----------  Imports  -----------//

import Styled    from './styles'
import Bounds    from './Bounds'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Section = ({ width, bgImg, children, ...props }) => (
  <Styled.Section bgImg={bgImg} {...props}>
    {children && (
      <Bounds width={width || 'max'}>
        {children}
      </Bounds>
    )}
  </Styled.Section>
)

//-----------  Type Definitions  -----------//

Section.propTypes = {
  color    : PropTypes.string,
  bgImg    : PropTypes.any,
  children : PropTypes.node,
  width    : PropTypes.oneOfType([
    PropTypes.oneOf(['max', 'large', 'block', 'medium', 'small']),
    PropTypes.number
  ])
}

//-----------  Export  -----------//

export default Section
