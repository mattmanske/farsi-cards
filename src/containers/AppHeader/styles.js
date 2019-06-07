//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import { centerAlign } from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  App Header  ----------- */

Styled.AppHeader = styled.header`
  left     : 0;
  position : absolute;
  right    : 0;
  top      : 0;
  z-index  : 10;

  > div.bounds {
    align-items     : center;
    display         : flex;
    flex-direction  : row;
    justify-content : space-between;
    padding-bottom  : 2rem;
    padding-top     : 2rem;
  }
`

Styled.Logo = styled.div`
  position   : relative;
  margin-top : -5px;

  h1 {
    margin-top: -1px;

    @media (max-width: 450px){
      font-size  : 1.25rem;
      margin-top : 5px;
    }

    @media (max-width: 350px){
      font-size  : 1.1rem;
      margin-top : 5px;
    }
  }

`

Styled.Navigation = styled.nav`
  display: block;

  > a {
    color          : ${vars.grayDarker};
    font-size      : ${vars.fontSizeSm};
    font-weight    : ${vars.fontWeightLight};
    margin-right   : 2rem;
    padding-bottom : 0.33rem;
    text-shadow    : ${p => p.inverted && vars.shadowText};
    text-transform : uppercase;

    &:hover {
      color: ${vars.blueDark};
    }

    &.active {
      border-bottom : 1px solid ${vars.blueLight};
      color         : ${vars.blue};
    }

    ${p => p.inverted && `
      color: ${vars.grayLighter};

      &:hover {
        color: ${vars.grayLight};
      }
    `}
  }

  @media (max-width: 875px){
    display: none;
  }
`

Styled.MobileMenu = styled.nav`
  display  : none;
  position : relative;

  @media (max-width: 875px){
    display: block;
  }
`

Styled.MenuSwitch = styled.a`
  margin-top : 3px;
  position   : relative;
  z-index    : 10;

  svg {
    height : auto;
    width  : 1.75rem;

    path {
      fill: ${p => p.inverted ? vars.white : vars.black};
    }
  }

  @media (max-width: 1040px){
    display: block;
  }
`

Styled.MobileNavigation = styled.nav`
  background    : ${vars.white};
  border-radius : ${vars.radiusLg};
  box-shadow    : ${vars.shadow};
  opacity       : ${p => p.visible ? 1 : 0};
  pointer-events: ${p => p.visible ? 'normal' : 'none'};
  padding       : 2rem 1.5rem 1.5rem;
  position      : absolute;
  right         : -1rem;
  top           : -0.5rem;
  transition    : ${vars.transition};

  > a {
    display        : block;
    letter-spacing : 0;
    text-align     : center;
    text-transform : uppercase;
    white-space    : nowrap;

    & + a {
      margin-top: 1rem;
    }
  }

  > *:last-child {
    margin-top  : 1rem;
    white-space : nowrap;
  }
`

Styled.Badge = styled.div`
  opacity    : ${p => !p.count ? 0 : 1};
  position   : absolute;
  right      : 2px;
  top        : 2px;
  transition : ${vars.transition};

  &:before {
    ${ centerAlign() }

    background-color : ${vars.red};
    border-radius    : 16px;
    content          : '';
    height           : 16px;
    width            : 16px;
  }

  &:after {
    ${ centerAlign() }

    color       : ${vars.white};
    content     : '${p => p.count}';
    font-size   : 0.6rem;
    font-weight : ${vars.fontWeightBold};
  }
`

//-----------  Exports  ----------- */

export default Styled
