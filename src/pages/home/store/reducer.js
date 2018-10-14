import { fromJS } from 'immutable';
import {
    GET_HOT_TOPIC_DATA,
    GET_ARTICLE_DATA,
    GET_MORE_ARTICLE_DATA,
    GET_RECOMMEND_DATA,
    CHANGE_BACK_TOP_STATUS
} from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showBackTop: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_HOT_TOPIC_DATA:
            return state.set('topicList', action.data);
        case GET_ARTICLE_DATA:
            return state.set('articleList', action.data);
        case GET_MORE_ARTICLE_DATA:
            return state.set('articleList', state.get('articleList').concat(action.data));
        case GET_RECOMMEND_DATA:
            return state.set('recommendList', action.data);
        case CHANGE_BACK_TOP_STATUS:
            return state.set('showBackTop', action.showBackTop);
        default:
            return state;
    }
}