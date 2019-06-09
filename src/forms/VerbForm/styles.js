//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Verb Form  ----------- */

Styled.VerbForm = styled.form``

Styled.Conjugations = styled.div`
  margin: 1.5rem 0;

  > * {

    > * {
      margin: 0 0 -1px;

      label {
        display: none;
      }
    }

    &:not(:first-child) input {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &:not(:last-child) input {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
