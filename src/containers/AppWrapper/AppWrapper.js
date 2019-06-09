//-----------  Imports  -----------//

import Styled        from './styles'

import React         from 'react'
import PropTypes     from 'prop-types'

import AppHeader     from 'containers/AppHeader'
import LoadingBar    from 'containers/LoadingBar'

import AppFooter     from 'components/AppFooter'
import RouterWrapper from 'components/RouterWrapper'
import ModalWrapper  from 'containers/ModalWrapper'

import AppRoutes     from 'routes/index'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { isDashboard } = this.props

    return (
      <Styled.AppWrapper isDashboard={isDashboard}>
        <AppHeader />

        <RouterWrapper>
          <AppRoutes />
        </RouterWrapper>

        <AppFooter />

        <LoadingBar />

        <ModalWrapper />
      </Styled.AppWrapper>
    )
  }
}

//-----------  Type Definitions  -----------//

AppWrapper.propTypes = {
  isDashboard: PropTypes.bool,
}

//-----------  Export  -----------//

export default AppWrapper
