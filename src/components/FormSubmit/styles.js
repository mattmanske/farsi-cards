//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Form Field  ----------- */

Styled.FormSubmit = styled.span`
  ${p => p.horizontal && `
    display : inline-block;
    margin  : 0.5rem 0 0 11rem;
  `}
`

//-----------  Exports  ----------- */

export default Styled
