import React from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    HeaderContainer,
    Logo,
    Menu,
    MenuItem,
    SearchWrapper,
    MenuSearch,
    Addition,
    Button
} from "./style";
import { CSSTransition } from 'react-transition-group';
import { actionCreators, actionTypes } from './store'

class Header extends React.Component {

    render() {
        const { focused, handleFocus, handleBlur } = this.props;
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <Logo/>
                    <Menu>
                        <MenuItem className='active'><i className="iconfont">&#xe634;</i>新闻</MenuItem>
                        <MenuItem><i className="iconfont">&#xe618;</i>音乐</MenuItem>
                        <MenuItem><i className="iconfont">&#xe652;</i>照片</MenuItem>
                        <MenuItem><i className="iconfont">&#xe678;</i>视频</MenuItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <MenuSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
                        </SearchWrapper>
                    </Menu>
                    <Addition>
                        <Button className='btn write'><i className="iconfont">&#xe670;</i>写文章</Button>
                        <Button className='btn reg'>注册</Button>
                        <Button className='btn login'>登录</Button>
                        <Button className='mode'><i className="iconfont">&#xe636;</i></Button>
                    </Addition>
                </HeaderContainer>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    focused: state.getIn(['header', 'focused'])
});

const mapDispatch = (dispatch) => ({
    handleFocus() {
        dispatch(actionCreators[actionTypes.CHANGE_FOCUS](true));
    },
    handleBlur() {
        dispatch(actionCreators[actionTypes.CHANGE_FOCUS](false));
    }
});

export default connect(mapState, mapDispatch)(Header);