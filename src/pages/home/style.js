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

/*推荐样式组件 start*/