//-----------  Imports  -----------//

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const wordsSelector = state => state.words.data

//-----------  Selectors  -----------//

export const reverseWordsSelector = createSelector([wordsSelector], (words) => {
  return words.reverse();
})