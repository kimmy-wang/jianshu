import React from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    MoreTopic
} from '../style';
import { actionTypes, actionCreators } from '../store'

class Topic extends React.Component {
    render() {
        return (
            <TopicWrapper>
                {this.getTopicList()}
                <MoreTopic>
                    更多热门专题
                    <i className='iconfont'>&#xe666;</i>
                </MoreTopic>
            </TopicWrapper>
        )
    }

    componentDidMount() {
        const { getTopicListData } = this.props;
        getTopicListData();
    }

    getTopicList() {
        const { topicList } = this.props;
        return topicList.map((item) => {
            return (
                <TopicItem key={item.get('id')}>
                    <img
                        alt='' src={item.get('imgUrl')}/>
                    <span>
                        {item.get('title')}
                    </span>
                </TopicItem>
            )
        })
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

const mapDispatch = (dispatch) => ({
    getTopicListData() {
        dispatch(actionCreators[actionTypes.GET_HOT_TOPIC_DATA]());
    }
});

export default connect(mapState, mapDispatch)(Topic);