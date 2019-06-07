//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  App Wrapper  ----------- */

Styled.AppWrapper = styled.div`
  align-content   : stretch;
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  min-height      : 100vh;
  overflow        : hidden;

  ${p => p.isDashboard && `
   overflow-x: scroll;

    > main {
      min-width: ${vars.stopWidth};
    }
  `}
`

//-----------  Exports  ----------- */

export default Styled
