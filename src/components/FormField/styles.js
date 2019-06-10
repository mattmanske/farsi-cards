//-----------  Imports  -----------//

import styled            from 'styled-components'

import vars              from 'styles/variables'
import { verticalAlign } from 'styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Form Field  ----------- */

Styled.FormField = styled.div`
  margin     : 0.5rem 0;
  position   : relative;
  transition : ${vars.transition};

  ${p => p.horizontal && `
    align-items     : flex-start;
    display         : flex;
    flex-direction  : row;
    justify-content : flex-start;

    & + div {
      margin-top: 1rem;
    }

    > label {
      flex           : 0 0 10rem;
      font-weight    : ${vars.fontWeightLight};
      letter-spacing : 0;
      margin         : 1rem 1rem 0 0;
      text-align     : right;
    }

    > div {
      flex       : 1 1 auto;
      text-align : left;

      input {
        max-width: 25rem;
      }
    }
  `}
`

Styled.FieldLabel = styled.label`
  color: ${p => p.isInvalid ? vars.red : vars.grayDarker};

  sup {
    color: ${vars.red};
  }

  small {
    font-style: italic;
  }
`

Styled.FieldWrapper = styled.div`
  position: relative;

  ${p => p.isInvalid && `
    label {
      color: ${vars.red};
    }

    input {
      border-color : ${vars.red};
      color        : ${vars.red};
    }
  `}

  input, textarea {
    color         : ${vars.grayDarker};
    font-size     : 0.9em;
    font-weight   : ${vars.fontWeightLight};
    line-height   : 150%;
  }
`

Styled.FieldError = styled.div`
  background     : ${p => p.isInvalid ? vars.red : 'transparent'};
  border-radius  : ${vars.radius};
  box-shadow     : ${vars.shadowLight};
  color          : ${vars.white};
  display        : table;
  font-size      : 0.8rem;
  left           : 0.75em;
  line-height    : 1.33;
  max-width      : 15em;
  opacity        : ${p => p.isInvalid && p.isActive ? 1 : 0};
  padding        : 0.55em 0.75em 0.55em 0.75em;
  pointer-events : none;
  position       : absolute;
  top            : ${p => p.isInvalid && p.isActive ? 'calc(100% + 0.2em)' : 'calc(100% - 0.2em)'};
  transition     : opacity ${vars.transition}, left ${vars.transition};
  z-index        : 10;

  &::after {
    border-bottom  : 0.4em solid ${p => p.isInvalid ? vars.red : 'transparent'};
    border-left    : 0.5em solid transparent;
    border-right   : 0.5em solid transparent;
    content        : '';
    height         : 0;
    left           : 0.75em;
    pointer-events : none;
    position       : absolute;
    right          : 100%;
    top            : -0.4em;
    width          : 0;
  }
`

Styled.WarningField = styled.div`
  background     : ${p => p.isActive ? vars.gray : 'transparent'};
  border-radius  : ${vars.radius};
  box-shadow     : ${vars.shadowLight};
  color          : ${vars.white};
  display        : table;
  font-size      : 0.8rem;
  left           : 0.75em;
  line-height    : 1.33;
  max-width      : 15em;
  opacity        : ${p => p.isActive ? 1 : 0};
  padding        : 0.55em 0.75em 0.55em 0.75em;
  pointer-events : none;
  position       : absolute;
  top            : ${p => p.isActive ? 'calc(100% + 0.2em)' : 'calc(100% - 0.2em)'};
  transition     : opacity ${vars.transition}, left ${vars.transition};
  z-index        : 10;

  &::after {
    border-bottom  : 0.4em solid ${p => p.isActive ? vars.gray : 'transparent'};
    border-left    : 0.5em solid transparent;
    border-right   : 0.5em solid transparent;
    content        : '';
    height         : 0;
    left           : 0.75em;
    pointer-events : none;
    position       : absolute;
    right          : 100%;
    top            : -0.4em;
    width          : 0;
  }
`

Styled.Append = styled.small`
  ${ verticalAlign() }

  right      : 1.5rem;
  margin-top : 1px;
`

//-----------  Exports  ----------- */

export default Styled
