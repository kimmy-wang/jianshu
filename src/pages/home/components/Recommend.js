import React from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';
import { actionTypes, actionCreators } from '../store'

class Recommend extends React.Component {
    render() {
        return (
            <RecommendWrapper>
                {this.getRecommendList()}
            </RecommendWrapper>
        )
    }

    componentDidMount() {
        const { getRecommendListData } = this.props;
        getRecommendListData();
    }

    getRecommendList() {
        const {recommendList} = this.props;
        return recommendList.map((item) => {
            return (
                <RecommendItem key={item.get('id')}>
                    <a target='_blank' rel="noopener noreferrer" href={item.get('href')}>
                        <img alt='' src={item.get('imgUrl')}/>
                    </a>
                </RecommendItem>
            )
        })
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
});

const mapDispatch = (dispatch) => ({
    getRecommendListData() {
        dispatch(actionCreators[actionTypes.GET_RECOMMEND_DATA]());
    }
});

export default connect(mapState, mapDispatch)(Recommend);