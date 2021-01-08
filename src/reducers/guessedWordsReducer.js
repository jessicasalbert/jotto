import { actionTypes } from '../actions/index'

/**
 * @function guessedWordsReducer
 * @param {array} state - array of guessed words
 * @param {object} action - action to be reduced
 * @returns {array} - new guessedWords state
 */
const guessedWordsReducer = (state=[], action) => {
    switch(action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default guessedWordsReducer