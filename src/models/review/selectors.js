//-----------  Imports  -----------//

import { createSelector } from 'reselect'
import { get } from 'lodash'

//-----------  Inputs  -----------//

export const wordsSelector = state => state.review.words
export const indexSelector = state => state.review.index

//-----------  Selectors  -----------//

export const nextWordSelector = createSelector([wordsSelector, indexSelector], (words, index) => {
    return get(words, index + 1);
});

export const currentWordSelector = createSelector([wordsSelector, indexSelector], (words, index) => {
    return get(words, index);
});
