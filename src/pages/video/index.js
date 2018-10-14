import React from 'react';
import { connect } from 'react-redux';
import {
    VideoWrapper
} from './style';
import {
    actionTypes as headerActionTypes,
    actionCreators as headerActionCreators
} from "../../common/header/store";

class Video extends React.Component {
    render() {
        return (
            <VideoWrapper>Video</VideoWrapper>
        )
    }

    componentDidMount() {
        const {toggleTab} = this.props;
        toggleTab('video');
    }
}

const mapDispatch = (dispatch) => ({
    toggleTab(tabName) {
        dispatch(headerActionCreators[headerActionTypes.TOGGLE_TAB](tabName));
    }
});

export default connect(null, mapDispatch)(Video);