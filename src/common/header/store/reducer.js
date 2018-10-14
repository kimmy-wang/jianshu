import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    currentTab: '',
    focused: false,
    mouseEnter: false,
    hotSearchList: [],
    currentPage: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FOCUS:
            return state.set('focused', action.focused);
        case actionTypes.GET_HOT_LIST:
            return state.merge({
                hotSearchList: action.data,
                totalPage: action.totalPage
            });
        case actionTypes.CHANGE_MOUSE_STATUS:
            return state.set('mouseEnter', action.mouseEnter);
        case actionTypes.TOGGLE_PAGE:
            return state.set('currentPage', action.page);
        case actionTypes.TOGGLE_TAB:
            return state.set('currentTab', action.currentTab);
        default:
            return state;
    }
}