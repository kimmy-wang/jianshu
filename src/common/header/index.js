import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import {actionCreators, actionTypes} from './store'
import {
    HeaderWrapper,
    HeaderContainer,
    Logo,
    Menu,
    MenuItem,
    SearchWrapper,
    MenuSearch,
    SearchInfo,
    HotSearchInfoTitle,
    HotSearchInfoSwitch,
    HotSearchInfoList,
    HotSearchInfoItem,
    Addition,
    Button
} from "./style";

class Header extends React.PureComponent {
    render() {
        const {focused, list, currentTab, handleFocus, handleBlur, toggleTab} = this.props;
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <Menu>
                        <Link to='/' onClick={() => toggleTab('')}>
                            <MenuItem className={!currentTab ? 'active' : ''}><i className="iconfont">&#xe634;</i>新闻</MenuItem>
                        </Link>
                        <Link to='/song' onClick={() => toggleTab('song')}>
                            <MenuItem className={currentTab === 'song' ? 'active' : ''}><i className="iconfont">&#xe618;</i>音乐</MenuItem>
                        </Link>
                        <Link to='/photo' onClick={() => toggleTab('photo')}>
                            <MenuItem className={currentTab === 'photo' ? 'active' : ''}><i className="iconfont">&#xe652;</i>照片</MenuItem>
                        </Link>
                        <Link to='/video' onClick={() => toggleTab('video')}>
                            <MenuItem className={currentTab === 'video' ? 'active' : ''}><i className="iconfont">&#xe678;</i>视频</MenuItem>
                        </Link>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <MenuSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => handleFocus(list)}
                                    onBlur={handleBlur}
                                />
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont search-icon' : 'iconfont search-icon'}>&#xe62b;</i>
                            {this.getHotList()}
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

    getHotList() {
        const {
            focused,
            mouseEnter,
            list,
            currentPage,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            togglePage
        } = this.props;
        const newList = list.toJS();
        const pageList = [];

        for (let i = (currentPage - 1) * 10; i < (currentPage === totalPage ? newList.length : currentPage * 10); i++) {
            pageList.push(
                <HotSearchInfoItem key={newList[i]}>{newList[i]}</HotSearchInfoItem>
            );
        }

        if (focused || mouseEnter) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <HotSearchInfoTitle>
                        热门搜索
                        <HotSearchInfoSwitch
                            onClick={() => togglePage(currentPage, totalPage, this.refreshIcon)}
                        >
                            <i ref={(icon) => {
                                this.refreshIcon = icon
                            }} className="iconfont refresh-icon">&#xe790;</i>
                            换一批
                        </HotSearchInfoSwitch>
                    </HotSearchInfoTitle>
                    <HotSearchInfoList>
                        {pageList}
                    </HotSearchInfoList>
                </SearchInfo>
            )
        }
        return null;
    }
}

const mapState = (state) => ({
    currentTab: state.getIn(['header', 'currentTab']),
    focused: state.getIn(['header', 'focused']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    list: state.getIn(['header', 'hotSearchList']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage'])
});

const mapDispatch = (dispatch) => ({
    handleFocus(list) {
        (!list.length) && dispatch(actionCreators[actionTypes.GET_HOT_LIST]());
        dispatch(actionCreators[actionTypes.CHANGE_FOCUS](true));
    },
    handleBlur() {
        dispatch(actionCreators[actionTypes.CHANGE_FOCUS](false));
    },
    handleMouseEnter() {
        dispatch(actionCreators[actionTypes.CHANGE_MOUSE_STATUS](true));
    },
    handleMouseLeave() {
        dispatch(actionCreators[actionTypes.CHANGE_MOUSE_STATUS](false));
    },
    togglePage(currentPage, totalPage, refreshIcon) {
        let originAngle = refreshIcon.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        refreshIcon.style.transform = `rotate(${(originAngle + 360)}deg)`;
        (currentPage === totalPage) && dispatch(actionCreators[actionTypes.TOGGLE_PAGE](1));
        (currentPage !== totalPage) && dispatch(actionCreators[actionTypes.TOGGLE_PAGE](currentPage + 1));
    },
    toggleTab(tabName) {
        dispatch(actionCreators[actionTypes.TOGGLE_TAB](tabName));
    }
});

export default connect(mapState, mapDispatch)(Header);