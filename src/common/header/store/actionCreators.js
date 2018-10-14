import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getHotList = (data) => ({
    type: actionTypes.GET_HOT_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

const actionCreators = {
    [actionTypes.CHANGE_FOCUS](flag) {
        return {
            type: actionTypes.CHANGE_FOCUS,
            focused: flag
        }
    },
    [actionTypes.GET_HOT_LIST]() {
        return (dispatch) => {
            axios.get("/api/hot_list.json").then((res) => {
                const data = res.data;
                dispatch(getHotList(data.data))
            }).catch((error) => {
                console.error(error);
            })
        }
    },
    [actionTypes.CHANGE_MOUSE_STATUS](flag) {
        return {
            type: actionTypes.CHANGE_MOUSE_STATUS,
            mouseEnter: flag
        }
    },
    [actionTypes.TOGGLE_PAGE](page) {
        return {
            type: actionTypes.TOGGLE_PAGE,
            page
        }
    }
};

export default actionCreators;