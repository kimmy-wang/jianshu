import * as actionTypes from './actionTypes';

const actionCreators = {
    [actionTypes.CHANGE_FOCUS](flag) {
        return {
            type: actionTypes.CHANGE_FOCUS,
            focused: flag
        }
    }
};

export default actionCreators;