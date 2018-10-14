import React from 'react';
import { connect } from 'react-redux';
import {
    SongWrapper
} from './style';
import {
    actionTypes as headerActionTypes,
    actionCreators as headerActionCreators
} from "../../common/header/store";

class Song extends React.Component {
    render() {
        return (
            <SongWrapper>Song</SongWrapper>
        )
    }

    componentDidMount() {
        const {toggleTab} = this.props;
        toggleTab('song');
    }
}

const mapDispatch = (dispatch) => ({
    toggleTab(tabName) {
        dispatch(headerActionCreators[headerActionTypes.TOGGLE_TAB](tabName));
    }
});

export default connect(null, mapDispatch)(Song);