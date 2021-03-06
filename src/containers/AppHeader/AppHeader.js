//-----------  Imports  -----------//

import get               from 'lodash/get'

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import Logo              from 'components/Logo'
import Button            from 'components/Button'
import Bounds            from 'components/PageElements/Bounds'
import ButtonGroup       from 'components/ButtonGroup'

import MobileIcon        from 'assets/images/mobile.svg'

//-----------  Definitions  -----------//

const inversePaths = ['/', '/review']
const isInversePath = (props) => (inversePaths.includes(get(props, 'location.pathname')))

//-----------  Component  -----------//

class AppHeader extends React.Component {

  state = {
    isInverse : isInversePath(this.props),
    showMenu  : false,
  }

  static getDerivedStateFromProps(props){
    return { isInverse: isInversePath(props) }
  }

  //-----------  Helpers  -----------//

  renderLinks = (mobile = false) => {
    let links = [
      <NavLink key='admin' to='/admin'>Admin</NavLink>,
    ]

    return links
  }

  //-----------  Event Handlers  -----------//

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { isInverse, showMenu } = this.state

    return (
      <Styled.AppHeader>
        <Bounds width='max'>
          <Link to='/'>
            <Logo inverted={isInverse} />
          </Link>

          <Styled.Navigation inverted={isInverse}>
            {this.renderLinks()}
          </Styled.Navigation>

          <Styled.MobileMenu onClick={this.toggleMenu}>
            <Styled.MobileNavigation visible={showMenu}>
              {this.renderLinks(true)}
            </Styled.MobileNavigation>
            <Styled.MenuSwitch inverted={(isInverse && !showMenu)}>
              <MobileIcon />
            </Styled.MenuSwitch>
          </Styled.MobileMenu>
        </Bounds>
      </Styled.AppHeader>
    )
  }
}

//-----------  Type Definitions  -----------//

AppHeader.propTypes = {}

//-----------  Export  -----------//

export default AppHeader
