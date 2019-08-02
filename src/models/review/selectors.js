//-----------  Imports  -----------//

import { createSelector }       from 'reselect'
import { get }                  from 'lodash'

import { reverseWordsSelector } from 'models/words/selectors'

//-----------  Inputs  -----------//

// export const wordsSelector = state => state.review.words
export const indexSelector = state => state.review.index
export const resultsSelector = state => state.review.results

//-----------  Selectors  -----------//

export const wordsSelector = createSelector([reverseWordsSelector, indexSelector], (words, index) => {
  return [...words, ...words, ...words];
});

export const resultsSortedSelector = createSelector([wordsSelector, resultsSelector], (words, results) => {
    const sorted = [...results].reverse()
    sorted.length = words.length;
    return sorted
})