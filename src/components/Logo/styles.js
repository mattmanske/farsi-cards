//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Logo  ----------- */

Styled.Logo = styled.div`
    color          : ${p => p.inverted ? vars.grayLighter : vars.black};
    display        : inline-block;
    font-size      : 1.67em;
    font-size      : 1.5rem;
    font-weight    : 400;
    letter-spacing : 0em;
    margin         : 0;
    text-shadow    : ${p => p.invertd && vars.shadowText};
    text-transform : uppercase;
    vertical-align : middle;

    @media (max-width: 450px){
        font-size: 1.25rem;
    }

    @media (max-width: 350px){
        font-size: 1.15rem;
    }
`

//-----------  Exports  ----------- */

export default Styled
