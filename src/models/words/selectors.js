//-----------  Imports  -----------//

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const wordsSelector = state => state.words.data
export const loadedSelector = state => state.words.hasLoaded
export const loadingSelector = state => state.words.isLoading

//-----------  Selectors  -----------//

export const reverseWordsSelector = createSelector([wordsSelector], (words) => {
  return words.reverse();
})