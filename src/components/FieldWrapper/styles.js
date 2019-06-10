//-----------  Imports  -----------//

import styled         from 'styled-components'

import vars           from 'styles/variables'
import { errorClass } from 'utilities/constants'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Field Wrapper  ----------- */

Styled.FieldWrapper = styled.div`
  align-items     : flex-end;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;

  > * {
    width: 100%;
  }

  > *:not(:first-child):not(:last-child) input {
    border-radius      : 0;
    border-right-width : 0px;
  }

  > *:not(:last-child) input.${errorClass} {
    border-right-width: 1px;
  }

  > *:first-child input {
    border-bottom-right-radius : 0;
    border-right-width         : 0px;
    border-top-right-radius    : 0;
  }

  > *:last-child input {
    border-bottom-left-radius : 0;
    border-top-left-radius    : 0;
    font-size                 : 1.67rem;
    height                    : 43.5px;
    padding                   : 0.3em 0.67em;
  }
`

//-----------  Exports  ----------- */

export default Styled
