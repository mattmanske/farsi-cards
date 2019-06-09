//-----------  Imports  -----------//

import styled          from 'styled-components'

import { antiAliased } from 'styles/mixins'

//-----------  Material Icon  ----------- */

const Elem = styled.i`
  ${ antiAliased() }

  direction             : ltr;
  display               : inline-block;
  font-family           : 'Material Icons';
  font-feature-settings : 'liga';
  font-size             : 1.5em; /* Preferred icon size */
  font-style            : normal;
  font-weight           : normal;
  letter-spacing        : normal;
  line-height           : 1;
  text-rendering        : optimizeLegibility;
  text-transform        : none;
  user-select           : none;
  white-space           : nowrap;
  word-wrap             : normal;
`

//-----------  Exports  ----------- */

export default { Elem }
