//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Router Wrapper  ----------- */

Styled.RouterWrapper = styled.main`
  display        : flex;
  flex           : 1 1 auto;
  position       : relative;
  flex-direction : column;

  > * {
    flex     : 1 1 auto;
    position : relative;
    z-index  : 5;
  }

  section:first-child {
    padding-top: ${p => p.isDashboard ? 0 : '10rem'};
  }

  section:last-child {
    padding-bottom: 10rem;
  }

  &:before, &:after {
    bottom         : 0;
    content        : '';
    left           : 0;
    pointer-events : none;
    position       : absolute;
    right          : 0;
    top            : 0;
  }

  &::before {
    background-image : linear-gradient(${vars.white}, ${vars.grayLightest});
    z-index          : 0
  }

  &::after {
    background-image : linear-gradient(${vars.white}, ${vars.grayLightest});
    opacity          : ${p => p.isDashboard ? 1 : 0};
    transition       : ${vars.transition};
    z-index          : 1
  }
`

//-----------  Exports  ----------- */

export default Styled
