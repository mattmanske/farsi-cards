//-----------  Imports  -----------//

import styled              from 'styled-components'

import vars                from 'styles/variables'
import { centerAlign,
         horizontalAlign } from 'styles/mixins'

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
  ${ centerAlign() }

  height         : calc(150vw - 4rem);
  margin-top     : ${p => `${Math.min(0, (p.order * 17))}px`};
  max-width      : 24rem;
  max-height     : 36rem;
  perspective    : 150rem;
  visibility     : ${p => (-4 > p.order) ? 'hidden' : 'visible'};
  pointer-events : ${p => !p.order ? 'default' : 'none'};
  transform      : ${p => `translate(-50%,-50%) scale(${Math.min(1, 1 + (p.order / 18))})`} !important;
  transition     : ${p => (p.order <= 0) ? 'all 0.33s ease-out' : 'none'};
  width          : calc(100vw - 4rem);

  > * {
    bottom   : 0;
    left     : 0;
    position : absolute;
    right    : 0;
    top      : 0;

    > * {
        bottom      : 0;
        left        : 0;
        perspective : 100rem;
        position    : absolute;
        right       : 0;
        top         : 0;

        > span {
            bottom      : 0;
            left        : 0;
            perspective : 100rem;
            position    : absolute;
            right       : 0;
            top         : 0;
        }
    }
  }
`

Styled.CardWrapper = styled.div`
  height          : 100%;
  perspective     : 150rem;
  position        : relative;
  transform       : ${p => p.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transform-style : preserve-3d;
  transition      : transform 0.33s;
  width           : 100%;
  cursor          : pointer;
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
  letter-spacing : 0 !important;
  text-align     : center;
  width          : calc(100% - 2rem);

  > * {
    letter-spacing: 0 !important;
  }

  small {
    ${ horizontalAlign() }

    font-size : 0.5em;
    top       : 125%;
  }

  @media (max-width: 450px){
    font-size: 2.25rem;
  }
`

Styled.Farsi = styled.span`
  font-size: 1.25em;
`

Styled.Status = styled.div`
  ${ centerAlign() }

  pointer-events : none;
  text-align     : center;
  z-index        : 10;

    .progress-icon {
        height     : 50vw;
        max-height : 16rem;
        max-width  : 16rem;
        width      : 50vw;
    }
`

Styled.Overlay = styled.div`
    background-color : ${vars.blueDarker};
    border-radius    : 0.5rem;
    bottom           : -1px;
    left             : -1px;
    opacity          : ${p => Math.max(0, -(p.order / 4) - 0.2)};
    pointer-events   : none;
    position         : absolute;
    right            : -1px;
    top              : -1px;
`

//-----------  Exports  ----------- */

export default Styled
