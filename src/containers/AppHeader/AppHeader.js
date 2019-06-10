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

const isIndexPath = (props) => ('/' === get(props, 'location.pathname'))

//-----------  Component  -----------//

class AppHeader extends React.Component {

  state = {
    isIndex  : isIndexPath(this.props),
    showMenu : false,
  }

  static getDerivedStateFromProps(props){
    return { isIndex: isIndexPath(props) }
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
    const { isIndex, showMenu } = this.state

    return (
      <Styled.AppHeader>
        <Bounds width='max'>
          <Styled.Logo>
            <Link to='/'>
              <Logo inverted={isIndex} />
            </Link>
          </Styled.Logo>

          <Styled.Navigation inverted={isIndex}>
            {this.renderLinks()}
          </Styled.Navigation>

          <Styled.MobileMenu onClick={this.toggleMenu}>
            <Styled.MobileNavigation visible={showMenu}>
              {this.renderLinks(true)}
            </Styled.MobileNavigation>
            <Styled.MenuSwitch inverted={(isIndex && !showMenu)}>
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
