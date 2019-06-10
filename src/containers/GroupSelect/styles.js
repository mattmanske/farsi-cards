//-----------  Imports  -----------//

import styled         from 'styled-components'
import Creatable      from 'react-select'

import vars           from 'styles/variables'
import { errorClass } from 'utilities/constants'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Group Select  ----------- */

Styled.GroupSelect = styled(Creatable)`

  > div:first-of-type {
    border        : 1px solid ${vars.grayLight};
    border-radius : ${vars.radius};
    box-shadow    : none;
    height        : 3.15rem !important;

    * {
      transition: none !important;
    }
  }

  &.${errorClass} > div:first-of-type {
    border-color: ${vars.red};
  }
`

//-----------  Exports  ----------- */

export default Styled
