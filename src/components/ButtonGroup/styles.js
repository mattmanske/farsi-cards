//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Button Group  ----------- */

Styled.ButtonGroup = styled.div`
  display: inline-block;

  > * {
    border-left-width  : 0;
    border-radius      : 0;
    border-right-width : 0;
    padding-left       : 1.25em;
    padding-right      : 1.25em;
    position           : relative;

    &:first-child {
      border-bottom-left-radius : ${vars.radius};
      border-left-width         : 1px;
      border-top-left-radius    : ${vars.radius};
      padding-left              : ${p => p.bare ? 0 : '1.85em'};
    }

    &:last-child {
      border-bottom-right-radius : ${vars.radius};
      border-right-width         : 1px;
      border-top-right-radius    : ${vars.radius};
      padding-right              : ${p => p.bare ? 0 : '1.85em'};
    }

    & + *:after {
      content     : '';
      height      : 60%;
      left        : 0;
      position    : absolute;
      top         : 20%;
      border-left : 1px solid ${vars.blueLight};
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
