//-----------  Imports  -----------//

import Styled                from './styles'

import React                 from 'react'
import PropTypes             from 'prop-types'
import { Helmet }            from 'react-helmet'

import { appTitle, appDesc } from  'utilities/constants'

//-----------  Component  -----------//

const Page = ({ title, description, children, ...props }) => (
  <Styled.Page {...props}>
    <Helmet>
      <title>{appTitle} | {title || appDesc}</title>
      <meta name='description' content={description || appDesc} />
    </Helmet>

    {children}
  </Styled.Page>
)

//-----------  Type Definitions  -----------//

Page.propTypes = {
  title       : PropTypes.string,
  description : PropTypes.string,
  children    : PropTypes.node.isRequired,
}

//-----------  Export  -----------//

export default Page
