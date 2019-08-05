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

Styled.ProgressWrapper = styled.div`
    background    : rgba(255, 255, 255, 0.33);
    border-radius : 0.25rem;
    bottom        : 1rem;
    height        : 0.25rem;
    left          : 1rem;
    overflow      : hidden;
    position      : absolute;
    right         : 1rem;
`

Styled.ProgressBar = styled.div`
    background    : rgba(255, 255, 255, 0.67);
    border-radius : 0.25rem;
    height        : 0.25rem;
    left          : 0;
    position      : absolute;
    transform     : width 1s ease-in;
    width         : ${p => p.width || 0}%;
`

//-----------  Exports  ----------- */

export default Styled
