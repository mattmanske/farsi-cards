//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import { centerAlign } from 'styles/mixins'
import Elements        from 'components/PageElements'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Review Route  ----------- */

Styled.ReviewRoute = styled(Elements.Page)`
  background-color: ${vars.blueDarker};
`

Styled.CardWrapper = styled.div`
  bottom   : 0;
  left     : 0;
  position : absolute;
  right    : 0;
  top      : 0;

  > * {
    ${ centerAlign() }

    display        : flex;
    flex-direction : row-reverse;
    position       : absolute !important;

    & + * {
      margin-top: -0.5rem;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
