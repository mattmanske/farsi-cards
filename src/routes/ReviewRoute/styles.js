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
`

Styled.CardWrapper = styled.div`
  ${ fillCSS }

  margin: 5rem 1rem 2rem;

  > *:not(.card) {
    ${ fillCSS }

    perspective: 150rem;

    > * {
      ${ fillCSS }
    }
  }

  .card {
    ${ centerAlign() }

    &.background {
      transform : translate(-50%, -54%) scale(0.95);
      opacity   : 0.85;
    }
  }

  .progress-icon {
    height     : 50vw;
    max-height : 16rem;
    max-width  : 16rem;
    width      : 50vw;
  }
`

//-----------  Exports  ----------- */

export default Styled
