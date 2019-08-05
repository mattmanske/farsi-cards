//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import Elements        from 'components/PageElements'
import { centerAlign } from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Index Route  ----------- */

Styled.IndexRoute = styled.div``

Styled.HeroSection = styled(Elements.Section)`
  background-color    : ${vars.blueDarker};
  background-position : center 18%;
  min-height          : 100vh;

  > div.bounds {
      ${ centerAlign() }

      text-align: center;

    h2 {
      color          : ${vars.white};
      font-size      : 1.675rem;
      font-weight    : ${vars.fontWeightLighter};
      letter-spacing : 0.05rem;
      line-height    : 100%;
      line-height    : 133%;
      margin         : 0 auto 1.5rem;
      max-width      : 28rem;
      text-shadow    : 1px 3px 9px rgba(0,0,0,0.67);
      text-transform : uppercase;

      & + h2 {
        font-size   : 2.5rem;
        font-weight : ${vars.fontWeight};
        text-shadow : 1px 5px 10px rgba(0,0,0,0.2);
      }
    }
  }

  @media (max-width: 500px){
    background-position: center top;

    > div.bounds {
      padding    : 5rem 0.5rem 5rem;
      text-align : center;

      h2 {
        font-size: 1.75rem !important;
      }
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
