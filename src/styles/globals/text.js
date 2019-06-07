//-----------  Imports  -----------//

import { lighten }     from 'polished'

import vars            from 'styles/variables'
import { antiAliased } from 'styles/mixins'

//-----------  Exports  -----------//

export default `
  h1, h2, h3, h4, h5, h6 {
    font-weight : ${vars.fontWeightBold};
    margin      : 0.25em 0;
  }

  h1 {
    font-size: 2.75em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: ${vars.fontSizeLg};
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1.05em;
  }

  h6 {
    font-size: ${vars.fontSizeSm};
  }

  a {
    color           : inherit;
    cursor          : pointer;
    text-decoration : none;
    transition      : ${vars.transition};

    &:hover {
      opacity: 0.75;
    }

    &:disabled {
      pointer-events: none;
    }
  }

  p {
    ${ antiAliased() }

    color       : ${vars.grayDarker};
    line-height : 1.5;
    max-width   : ${vars.mediumWidth};

    a {
      border-bottom   : 1px solid ${lighten(0.2, vars.blueLight)};
      color           : ${vars.blue};
      text-decoration : none;
    }

    & + p {
      margin-top: 1.5em;
    }
  }

  small {
    color       : ${vars.grayDark};
    font-size   : 0.75em;
    line-height : 110%;

    a {
      border-bottom   : 1px solid ${lighten(0.2, vars.blueLight)};
      color           : ${vars.blue};
      text-decoration : none;
    }
  }

  em {
    font-weight : ${vars.fontWeightLight};
  }

  strong {
    color       : ${vars.black};
    font-weight : ${vars.fontWeightBold};
  }
`
