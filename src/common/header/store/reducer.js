import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FOCUS:
            return state.set('focused', action.focused);
        default:
            return state;
    }
}