import { fromJS } from 'immutable';
import { GET_HOT_TOPIC_DATA, GET_ARTICLE_DATA, GET_RECOMMEND_DATA } from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_HOT_TOPIC_DATA:
            return state.set('topicList', action.data);
        case GET_ARTICLE_DATA:
            return state.set('articleList', action.data);
        case GET_RECOMMEND_DATA:
            return state.set('recommendList', action.data);
        default:
            return state;
    }
}