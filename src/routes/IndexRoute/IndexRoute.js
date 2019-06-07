//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'
import { Link }    from 'react-router-dom'

import vars        from 'styles/variables'

import Elements    from 'components/PageElements'
import { appDesc } from 'utilities/constants'

//-----------  Component  -----------//

class IndexRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Elements.Page>
        <Styled.HeroSection>
          <h2>{appDesc}</h2>
        </Styled.HeroSection>
      </Elements.Page>
    )
  }
}

//-----------  Type Definitions  -----------//

IndexRoute.propTypes = {

}

//-----------  Export  -----------//

export default IndexRoute
