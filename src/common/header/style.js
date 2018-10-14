import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContainer = styled.div`
    position: relative;
    min-width: 768px;
    max-width: 1440px;
    height: 100%;
    line-height: 56px;
    margin: 0 auto;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    float: left;
    width: 100px;
    height: 100%;
    line-height: 56px;
    cursor: pointer;
    background: url(${logoPic});
    background-size: contain;
`;

export const Menu = styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
`;

export const MenuItem = styled.div`
    float: left;
    height: 56px;
    line-height: 26px;
    margin: 0 20px;
    padding: 15px;
    color: #333;
    font-size: 17px;
    cursor: pointer;
    box-sizing: border-box;
    &.active {
        color: #ea6f5a;
    }
    .iconfont {
        margin-right: 5px;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .search-icon {
        position: absolute;
        top: 14px;
        right: 5px;
        width: 30px;
        height: 30px!important;
        line-height: 30px!important;
        padding: 0!important;
        color: #969696;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const MenuSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 40px 0 20px;
    border: 1px solid #eee;
    outline: none;
    font-size: 14px;
    background: #eee;
    border-radius: 19px;
    box-sizing: border-box;
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0 , 0, .2);
`;

export const HotSearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
    line-height: 20px;
`;

export const HotSearchInfoSwitch = styled.span`
    display: block;
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor: pointer;
    .refresh-icon {
        display: inline-block;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;

export const HotSearchInfoList = styled.div`
    overflow: hidden;
`;

export const HotSearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 2px 6px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
`;

export const Button = styled.div`
    float: right;
    box-sizing: border-box;
    &.btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .iconfont {
            margin-right: 5px;
        }
    }
    &.write {
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 8px 15px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
    &.reg {
        width: 80px;
        height: 38px;
        line-height: 24px;
        margin: 9px 5px 0 15px;
        border: 1px solid rgba(236,97,73,.7);
        border-radius: 20px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
    }
    &.login {
        margin: 11px 6px 0 10px;
        color: #969696;
        font-size: 15px;
    }
    &.mode {
        line-height: 20px;
        padding: 16px 10px 16px 15px;
        font-size: 24px;
        color: #969696;
    }
`;