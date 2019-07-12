//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Group Form  ----------- */

Styled.GroupForm = styled.form``

Styled.FormFooter = styled.footer`
  background : ${vars.grayLightest};
  border-top : 1px solid ${vars.grayLighter};
  margin     : 2em -2.25em -2.25em;
  padding    : 1.25em 2.25em;
  text-align : right;
`

//-----------  Exports  ----------- */

export default Styled
