//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  form {
    width: 100%;
  }

  fieldset {
    border     : 0;
    margin     : 0;
    padding    : 0;
    border-top : 1px dashed ${vars.grayLight};
  }

  legend {
    background     : ${vars.white};
    color          : ${vars.grayDarker};
    font-size      : ${vars.fontSizeSm};
    margin-left    : -1.25rem;
    margin-top     : -1px;
    padding-left   : 1rem;
    padding-right  : 1rem;
    text-transform : uppercase;
  }

  button,
  input[type='submit'],
  input[type='button'] {
    appearance : none;
    border     : none;
    outline    : none;
    padding    : 0;

    &:disabled {
      cursor: not-allowed;
    }
  }

  label {
    color        : ${vars.grayDarker};
    display      : block;
    font-size    : ${vars.fontSizeSm};
    margin       : 1.25em 0 1em;
    padding-left : 0.75rem;
    text-align   : left;

    small {
      color          : ${vars.grayDark};
      font-size      : ${vars.fontSizeSm};
      margin-left    : 0.33rem;
      text-transform : lowercase;
    }
  }

  label + input,
  label + textarea,
  label + .select-wrapper {
    margin-top: 0 !important;
  }
`
