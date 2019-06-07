//-----------  Imports  -----------//

import { lighten } from 'polished'

import vars        from 'styles/variables'

//-----------  Exports  -----------//

export default `
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    color          : ${vars.grayDarker};
    cursor         : pointer;
    display        : inline-block;
    font-size      : 1rem;
    line-height    : 155%;
    margin-top     : 0.25em;
    padding-bottom : 0.15em;
    padding-left   : 2.25rem;
    position       : relative;
    text-align     : left;
    transition     : ${vars.transition};
    user-select    : none;

    &::before {
      background-color : ${vars.white};
      border           : 1px solid ${vars.grayLight};
      color            : ${vars.white};
      content          : '';
      height           : 1.25em;
      left             : 0;
      position         : absolute;
      transition       : ${vars.transition};
      width            : 1.25em;
    }

    &:first-of-type {
      margin-top: 0;
    }
  }

  input[type='checkbox'] + label:before {
    border-radius : ${vars.radiusSm};
    color         : ${vars.white};
    content       : '✓';
    font-weight   : bold;
    line-height   : 110%;
    padding-left  : 0.2em;
    width         : 1.33em;
  }

  input[type='checkbox'] + label:hover,
  input[type='checkbox']:focus + label {

    &::before {
      border-color : ${vars.grayLight};
      color        : ${vars.grayLight};
    }
  }

  input[type='radio'] + label:hover,
  input[type='radio']:focus + label {

    &::before {
      background-color : ${vars.grayLight};
      border-color     : ${vars.grayLight};
      box-shadow       : inset 0 0 0 0.25em ${vars.white};
    }
  }

  input[type='radio']:checked + label {

    &::before {
      background-color : ${vars.blue};
      border-color     : ${vars.blue};
      box-shadow       : inset 0 0 0 0.25em ${vars.white};
    }
  }

  input[type='checkbox']:checked + label {

    &::before {
      background-color : ${vars.white};
      border-color     : ${vars.blue};
      color            : ${vars.blue};
    }
  }

  input[type='radio'].error + label,
  input[type='checkbox'].error + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.white};
      border-color     : ${vars.red};
    }
  }

  input[type='radio']:checked.error + label {
    &::before {
      box-shadow: inset 0 0 0 0.25em ${vars.white};
    }
  }

  input[type='checkbox'].error + label {
    &::after {
      color: ${vars.red};
    }
  }

  input[type='radio']:disabled + label,
  input[type='checkbox']:disabled + label {
    color  : ${vars.grayDark};
    cursor : not-allowed;

    &::before {
      background-color : ${vars.grayLighter};
      border-color     : ${vars.gray};
    }
  }

  input[type='radio']:disabled + label {
    &::before {
      box-shadow: inset 0 0 0 0.45em ${vars.grayLighter};
    }
  }

  input[type='checkbox']:disabled + label {
    &::before {
      color: ${vars.grayLighter};
    }
  }

  input[type='radio'].error + label:hover,
  input[type='radio'].error:focus + label {
    color: ${vars.red};

    &::before {
      background-color : ${lighten(0.25, vars.red)};
      box-shadow       : inset 0 0 0 0.25em ${vars.white};
    }
  }

  input[type='checkbox'].error + label:hover,
  input[type='checkbox'].error:focus + label {
    color: ${vars.red};

    &::before {
      border-color : ${vars.red};
      color        : ${lighten(0.25, vars.red)};
    }
  }

  input[type='radio'].error:checked + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.red};
      box-shadow       : inset 0 0 0 0.25em ${vars.white};
    }
  }

  input[type='checkbox'].error:checked + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.white};
      border-color     : ${vars.red};
      color            : ${vars.red};
    }
  }

  input[type='radio'] + label {
    &::before {
      border-radius : 10em;
      box-shadow    : inset 0 0 0 0.45em ${vars.white};
      top           : 1px;
    }
  }

  input[type='checkbox'] + label {
    &::before {
      top: 2px;
    }

    &::after {
      color          : ${vars.white};
      content        : "";
      font-size      : 0.67rem;
      left           : 1px;
      position       : absolute;
      text-transform : none;
      top            : 0;
    }
  }
`
