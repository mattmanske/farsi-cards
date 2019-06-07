//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Styleguide  ----------- */

Styled.Styleguide = styled.div`
  max-width: ${vars.blockWidth};

  div:not('.selector-wrapper') {
    margin-top: 2rem;
  }

  fieldset {
    margin-bottom: 2rem;
  }

  legend {
    margin-bottom: 1rem;
  }

  span + span {
    margin-left: 1rem;
  }

  .has-error {
    label {
      color: ${vars.red};
    }

    input {
      border-color : ${vars.red};
      color        : ${vars.red};
    }
  }
`

Styled.ColorPalette = styled.div`
  display    : inline-block;
  margin     : 1.75rem;
  text-align : center;
  width      : 15%;

  h4 {
    font-weight    : ${vars.fontWeightLight};
    text-transform : uppercase;
  }
`

Styled.ColorDot = styled.div`
  border-radius : 100%;
  height        : 5rem;
  margin        : 0 auto 1rem;
  width         : 5rem;
`

//-----------  Exports  ----------- */

export default Styled
