//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import { centerAlign } from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

const Card = styled.div`
  backface-visibility : hidden;
  background          : ${vars.white};
  border-radius       : 0.5rem;
  box-shadow          : 0.2rem 0.2rem 1rem rgba(0,0,0,0.12);
  height              : 100%;
  position            : absolute;
  top                 : 0;
  width               : 100%;
`

//-----------  Review Card  ----------- */

Styled.ReviewCard = styled.div`
  height      : 90%;
  max-height  : 42rem;
  max-width   : 24rem;
  perspective : 150rem;
  position    : relative;
  width       : 90%;
`

Styled.CardWrapper = styled.div`
  height          : 100%;
  perspective     : 150rem;
  position        : relative;
  transform       : ${p => p.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transform-style : preserve-3d;
  transition      : transform 0.33s;
  width           : 100%;
`

Styled.FrontSide = styled(Card)`
  transform : rotateY(0deg);
  z-index   : 2;
`

Styled.BackSide = styled(Card)`
  transform : rotateY(180deg);
  z-index   : 1;
`

Styled.WordWrapper = styled.div`
  ${ centerAlign() }

  font-size      : 2.5rem;
  letter-spacing : 0;
  text-align     : center;

  small {
    font-size: 0.55em;
  }
`

Styled.Farsi = styled.span`
  font-size: 1.25em;
`

//-----------  Exports  ----------- */

export default Styled
