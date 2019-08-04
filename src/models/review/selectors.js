//-----------  Imports  -----------//

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const reviewSelector = state => state.review

export const wordsSelector   = createSelector([reviewSelector], (review) => review.words)
export const indexSelector   = createSelector([reviewSelector], (review) => review.index)
export const resultsSelector = createSelector([reviewSelector], (review) => review.results)

//-----------  Selectors  -----------//

export const resultsSortedSelector = createSelector([wordsSelector, resultsSelector], (words, results) => {
    const sorted = [...results]
    sorted.length = words.length
    return sorted
})