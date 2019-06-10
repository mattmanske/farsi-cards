//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  App Header  ----------- */

Styled.AppFooter = styled.footer`
  background : ${vars.white};
  bottom     : 0;
  left       : 0;
  position   : sticky;
  right      : 0;
  z-index    : 10;

  > div.bounds {
    display         : flex;
    flex-direction  : row;
    justify-content : space-between;

    @media (max-width: 500px){

      small {
        display    : block;
        margin     : 0.5rem auto 1rem;
        text-align : center;
      }
    }
  }
`

Styled.Navigation = styled.nav`
  display         : flex;
  flex-direction  : row;
  flex-wrap       : wrap;
  justify-content : flex-start;

  > a {
    color          : ${vars.grayDarker};
    font-size      : ${vars.fontSizeSm};
    font-weight    : ${vars.fontWeightLight};
    text-transform : uppercase;

    &:hover {
      color: ${vars.blueDark};
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 500px){
    justify-content: center;
  }
`

//-----------  Exports  ----------- */

export default Styled
