//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import { centerAlign } from 'styles/mixins'
import Elements        from 'components/PageElements'

//-----------  Definitions  ----------- */

const Styled = {}

const fillCSS = `
  bottom   : 0;
  left     : 0;
  position : absolute;
  right    : 0;
  top      : 0;
`

//-----------  Review Route  ----------- */

Styled.ReviewRoute = styled(Elements.Page)`
  background-color: ${vars.blueDarker};

  > svg {
      ${ centerAlign() }
  }
`

Styled.CardWrapper = styled.div`
  ${ fillCSS }

  margin: 5rem 1rem 2rem;
`

Styled.Results = styled.div`
    ${ centerAlign() }

    color          : ${vars.white};
    text-align     : center;
    text-transform : uppercase;

    a {
        margin-top: 1rem;
    }
`

//-----------  Exports  ----------- */

export default Styled
