//-----------  Imports  -----------//

import Styled    from './styles'
import vars      from 'styles/variables'

import React     from 'react'
import PropTypes from 'prop-types'

import Button    from 'components/Button'

//-----------  Definitions  -----------//

const colors = ['blue', 'blueLight', 'purple', 'red', 'black', 'grayDark', 'gray', 'grayLight']

//-----------  Component  -----------//

const Styleguide = (props) => {

  return (
    <Styled.Styleguide>
      <fieldset>
        <legend>Color Palette</legend>

        {colors.map(val => (
          <Styled.ColorPalette key={val}>
            <Styled.ColorDot style={{ backgroundColor: vars[val] }} />
            <h4>{vars[val]}</h4>
          </Styled.ColorPalette>
        ))}
      </fieldset>

      <fieldset>
        <legend>Typography</legend>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>This is an example of a paraghraph. This is what long pieces of copy will look like when presented on screen. It can also contain various other types of elements, such as <em>italicized words</em>, <strong>bolded words</strong> and <a href='#'>links</a>.</p>

        <small>(small text example)</small>
      </fieldset>

      <fieldset>
        <legend>Buttons</legend>

        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button active>Active</Button>
        <Button active disabled>Default</Button>
        <br /><br />
        <Button error>Error</Button>
        <Button error active>Error</Button>
        <Button loading>Loading</Button>
        <Button loading active>Loading</Button>
        <br /><br />
        <Button small>Small</Button>
        <Button disabled small>Disabled</Button>
        <Button active small>Active</Button>
        <Button active disabled small>Disabled</Button>
        <br /><br />
        <Button error small>Error</Button>
        <Button active error small>Error</Button>
        <Button loading small>Loading</Button>
        <Button loading active small>Loading</Button>
      </fieldset>

      <fieldset>
        <legend>Inputs</legend>

        <div>
          <label>Default</label>
          <input type='text' placeholder='Placeholder' />
        </div>

        <div>
          <label>Disabled</label>
          <input type='text' placeholder='Placeholder' disabled />
        </div>

        <div className='has-error'>
          <label>Error</label>
          <input type='text' placeholder='Placeholder' />
        </div>
      </fieldset>

      <fieldset>
        <legend>Checkboxes</legend>

        <div className='selector-wrapper'>
          <input type='checkbox' id='checkbox1' name='checkbox' />
          <label htmlFor='checkbox1'>Default Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='checkbox' id='checkbox2' name='checkbox' defaultChecked />
          <label htmlFor='checkbox2'>Selected Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='checkbox' id='checkbox3' name='checkbox' disabled />
          <label htmlFor='checkbox3'>Disabled Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='checkbox' id='checkbox4' name='checkbox' className='error' />
          <label htmlFor='checkbox4'>Error Label</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Radio Buttons</legend>

        <div className='selector-wrapper'>
          <input type='radio' id='radio1' name='radio' />
          <label htmlFor='radio1'>Default Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='radio' id='radio2' name='radio' defaultChecked />
          <label htmlFor='radio2'>Selected Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='radio' id='radio3' name='radio' disabled />
          <label htmlFor='radio3'>Disabled Label</label>
        </div>

        <div className='selector-wrapper'>
          <input type='radio' id='radio4' name='radio' className='error' />
          <label htmlFor='radio4'>Error Label</label>
        </div>
      </fieldset>
    </Styled.Styleguide>
  )
}

//-----------  Type Definitions  -----------//

Styleguide.propTypes = {}

//-----------  Export  -----------//

export default Styleguide
