import { actionTypes } from '../actions'

/**
 * @function secretWordReducer
 * @param {string} state = state
 * @param {object} action 
 * @returns {string} - new state
 */

export default (state=null, action) => {
    switch (action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload
        default: 
            return state;
    }
    
}