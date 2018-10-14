import React from 'react';
import { connect } from 'react-redux';
import {
    PhotoWrapper
} from './style';
import {
    actionTypes as headerActionTypes,
    actionCreators as headerActionCreators
} from "../../common/header/store";

class Photo extends React.Component {
    render() {
        return (
            <PhotoWrapper>Photo</PhotoWrapper>
        )
    }

    componentDidMount() {
        const {toggleTab} = this.props;
        toggleTab('photo');
    }
}

const mapDispatch = (dispatch) => ({
    toggleTab(tabName) {
        dispatch(headerActionCreators[headerActionTypes.TOGGLE_TAB](tabName));
    }
});

export default connect(null, mapDispatch)(Photo);