import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getDataList = (type, data) => ({
    type,
    data: fromJS(data)
});

const actionCreators = {
    [actionTypes.GET_HOT_TOPIC_DATA]() {
        return (dispatch) => {
            axios.get("/api/topic_list.json").then((res) => {
                const data = res.data;
                dispatch(getDataList(actionTypes.GET_HOT_TOPIC_DATA, data.data))
            }).catch((error) => {
                console.error(error);
            })
        }
    },
    [actionTypes.GET_ARTICLE_DATA]() {
        return (dispatch) => {
            axios.get("/api/article_list.json").then((res) => {
                const data = res.data;
                dispatch(getDataList(actionTypes.GET_ARTICLE_DATA, data.data))
            }).catch((error) => {
                console.error(error);
            })
        }
    },
    [actionTypes.GET_MORE_ARTICLE_DATA]() {
        return (dispatch) => {
            axios.get("/api/article_list.json").then((res) => {
                const data = res.data;
                dispatch(getDataList(actionTypes.GET_MORE_ARTICLE_DATA, data.data))
            }).catch((error) => {
                console.error(error);
            })
        }
    },
    [actionTypes.GET_RECOMMEND_DATA]() {
        return (dispatch) => {
            axios.get("/api/recommend_list.json").then((res) => {
                const data = res.data;
                dispatch(getDataList(actionTypes.GET_RECOMMEND_DATA, data.data))
            }).catch((error) => {
                console.error(error);
            })
        }
    },
    [actionTypes.CHANGE_BACK_TOP_STATUS](flag) {
        return {
            type: actionTypes.CHANGE_BACK_TOP_STATUS,
            showBackTop: flag
        }
    }
};

export default actionCreators;
