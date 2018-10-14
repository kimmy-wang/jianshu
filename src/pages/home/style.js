import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 56px auto 0 auto;
    background: #fff;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    width: 625px;
    .ant-carousel .slick-slide {
        text-align: center;
        width: 100%;
        height: 270px;
        line-height: 160px;
        overflow: hidden;
        border-radius: 6px;
        img {
            display: block;
            width: 100%;
            height: 270px;
            border-radius: 6px;
        }
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
    padding-top: 30px;
`;

export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    line-height: 20px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    span {
        display: block;
        width: 50px;
        height: 50px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        .iconfont {
            padding-top: 16px;
            font-size: 20px;
            display: block;
        }
    }
`;

/*热门专题样式组件 start*/
export const TopicWrapper = styled.div`
    margin-top: 35px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    img {
        width: 32px;
        height: 32px;
    }
    span {
        display: inline-block;
        padding: 0 11px 0 6px;
        font-size: 14px;
    }
`;

export const MoreTopic = styled.div`
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
    cursor: pointer;
    box-sizing: border-box;
    i {
        font-size: 14px!important;
        margin-left: 2px;
    }
`;
/*热门专题样式组件 end*/

/*文章样式组件 start*/
export const ArticleWrapper = styled.div`
    
`;

export const ArticleItem = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    &.has-img {
        min-height: 140px;
        .content {
            padding-right: 140px;
        }
    }
`;

export const ArticleInfo = styled.div`
    
`;

export const ArticleTitle = styled.a`
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #2f2f2f;
    &:hover {
        color: #2f2f2f;
    }
    &:visited {
        color: #969696;
    }
`;

export const ArticleContent = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`;

export const ArticleMeta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    a {
        margin-right: 10px;
        color: #b4b4b4;
    }
    span {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .iconfont {
        font-size: 12px!important;
    }
`;

export const ArticleCoverImg = styled.a`
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    cursor: pointer;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`;

export const LoadMore = styled.div`
    display: block;
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    cursor: pointer;
`;
/*文章样式组件 end*/

/*推荐样式组件 start*/
export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`;

export const RecommendItem = styled.div`
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
    }
`;
/*推荐样式组件 end*/

/*下载App样式组件 start*/
export const DownloadAppWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .qrcode {
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        .title {
            font-size: 15px;
            color: #333;
            .ic-link {
                margin-left: 2px;
                font-size: 15px;
            }
        }
        .description {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`;

/*下载App样式组件 end*/

/*推荐作者样式组件 start*/
export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: left;
    .find-more {
        display: block;
        padding: 7px 7px 7px 12px;
        width: 100%;
        text-align: center;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    }
`;

export const WriterTitle = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    color: #969696;
    line-height: 20px;
`;

export const WriterInfoSwitch = styled.div`
    display: block;
    float: right;
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

export const WriterContent = styled.div`
    margin: 0 0 20px;
    text-align: left;
    box-sizing: border-box;
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    .avatar {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        .ic-follow {
            position: inherit;
            width: inherit;
            height: inherit;
            font-size: 13px;
        }
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        margin: 0 0 10px;
    }
`;
/*推荐作者样式组件 end*/