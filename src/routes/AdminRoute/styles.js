//-----------  Imports  -----------//

import styled          from 'styled-components'
import { Link }        from 'react-router-dom'

import vars            from 'styles/variables'
import { centerAlign } from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Dashboard Route  ----------- */

Styled.AdminRoute = styled.div``

Styled.GroupWrapper = styled.div`
  align-items    : flex-start;
  display        : flex;
  flex-direction : row;
  flex-wrap      : wrap;
  justify-content: flex-start;

  > * {
    border-radius : 0.33rem;
    cursor        : pointer;
    flex          : 0 0 14rem;
    height        : 14rem;
    margin        : 1rem;
    padding       : 1.25rem 1.5rem 0.75rem;
    position      : relative;
    transition    : all 0.15s ease-in-out;
  }
`

Styled.Group = styled.div`
  align-items      : stretch;
  background       : ${vars.white};
  box-shadow       : ${vars.shadow};
  display          : flex;
  flex-direction   : column;
  justify-content  : space-between;
  transform        : scale(1);
  transform-origin : center center;

  &:hover {
    box-shadow : ${vars.shadowDark};
    transform  : scale(1.025);
  }
`

Styled.Header = styled(Link)``

Styled.Actions = styled.div``

Styled.AddNew = styled.div`
  border: 5px dashed ${vars.grayLight};
  color : ${vars.grayDark};

  &:hover {
    border-color : ${vars.blueLight};
    color        : ${vars.blue};
  }
`

Styled.Center = styled.div`
  ${ centerAlign() }

  text-align : center;
  width      : 75%;

  i {
    font-size: 3rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
