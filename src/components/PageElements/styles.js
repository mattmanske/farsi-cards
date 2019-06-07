//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from 'styles/variables'
import { fullBgImg }   from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

function maxWidth({ width }){
  if (!width) return '100%'

  return (typeof width === 'string')
    ? vars[`${width}Width`]
    : `${width}rem`
}

//-----------  Page Elements  ----------- */

Styled.Page = styled.div``

Styled.Section = styled.section`
  background-color : ${p => p.color || 'transparent'};
  padding          : 5rem 0;
  position         : relative;

  ${p => p.bgImg && `
    ${ fullBgImg() }

    background-image: url(${p.bgImg});
  `}
`

Styled.Bounds = styled.div`
  margin-left  : auto;
  margin-right : auto;
  max-width    : ${p => maxWidth(p)};
  padding      : 2rem;
  width        : 100%;
`

Styled.Header = styled.header`
  align-items     : center;
  border-bottom   : 1px solid ${vars.grayLightest};
  display         : flex;
  flex-direction  : row;
  height          : 6rem;
  justify-content : space-between;
  padding         : 0 1rem;

  > div:first-child {
    flex: 1 1 auto;

    h3 {
      color       : ${vars.black};
      line-height : 90%;
    }

    h6 {
      color          : ${vars.grayDark};
      font-size      : 0.67em;
      font-weight    : ${vars.fontWeightLight};
      text-transform : uppercase;
    }
  }

  > div:last-child {
    flex: 0 0 auto;

    .btn {
      font-size : 0.67em;
      padding   : 0.4rem 1rem;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
