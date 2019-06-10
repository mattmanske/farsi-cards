//-----------  Imports  -----------//

import styled    from 'styled-components'
import Creatable from 'react-select/creatable'

import vars      from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Group Select  ----------- */

Styled.GroupSelect = styled(Creatable)`

  > div:first-of-type {
    border        : 1px solid ${vars.grayLight};
    border-radius : ${vars.radius};
    height        : 3.15rem !important;

    * {
      transition: none !important;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
