//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Constants  -----------//

export const MODAL = createActionConstants('MODAL', ['SHOW', 'HIDE'])

//-----------  Actions  -----------//

export const modalActions = {
  showModal: (child, props, options) => ({ type: MODAL.SHOW, child, props, options }),
  hideModal: () => ({ type: MODAL.HIDE }),
}