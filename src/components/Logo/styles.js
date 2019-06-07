//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Logo  ----------- */

Styled.Logo = styled.div`
  font-size: 1rem;

  h1 {
    color          : ${p => p.inverted ? vars.grayLighter : vars.black};
    display        : inline-block;
    font-size      : 1.67em;
    font-weight    : 400;
    letter-spacing : 0em;
    margin         : 0;
    text-shadow    : ${p => p.invertd && vars.shadowText};
    text-transform : uppercase;
    vertical-align : middle;
  }
`

//-----------  Exports  ----------- */

export default Styled
