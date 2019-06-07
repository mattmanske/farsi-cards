//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'
import ReactModal  from 'react-modal'

import { appRoot } from 'utilities/constants'

//-----------  Component  -----------//

class Modal extends React.Component {

  constructor(props){
    super(props)

    this.bodyEl = (typeof document !== 'undefined')
      ? document.getElementById(`${appRoot}-modal`)
      : null
  }

  //-----------  HTML Render  -----------//

  render(){
    const { label, children, ...props } = this.props

    const style = {
      overlay : Styled.ModalOverlay,
      content : Styled.ModalContent
    }

    return (
      <ReactModal
        style={style}
        closeTimeoutMS={300}
        appElement={this.bodyEl}
        contentLabel={label || 'Modal'}
        shouldCloseOnOverlayClick={true}
        { ...props }
      >
        <Styled.ModalBlock>
          <Styled.CloseIcon onClick={props.onRequestClose}>╳</Styled.CloseIcon>
          {children}
        </Styled.ModalBlock>
      </ReactModal>
    )
  }
}

//-----------  Type Definitions  -----------//

Modal.propTypes = {
  label          : PropTypes.string,
  isOpen         : PropTypes.bool.isRequired,
  children       : PropTypes.node.isRequired,
  onAfterOpen    : PropTypes.func,
  onRequestClose : PropTypes.func,
}

//-----------  Export  -----------//

export default Modal
