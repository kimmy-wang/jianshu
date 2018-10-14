import React from 'react';
import { connect } from 'react-redux';
import {
    ArticleWrapper,
    ArticleItem,
    ArticleInfo,
    ArticleTitle,
    ArticleContent,
    ArticleMeta,
    ArticleCoverImg
} from '../style';
import { actionTypes, actionCreators } from '../store'

class Article extends React.Component {
    render() {
        return (
            <ArticleWrapper>
                {this.getArticleList()}
            </ArticleWrapper>
        )
    }

    componentDidMount() {
        const { getArticleListData } = this.props;
        getArticleListData();
    }

    getArticleList() {
        const { articleList } = this.props;
        return articleList.map((item) => {
            return (
                <ArticleItem key={item.get('id')} className={item.get('imgUrl') ? 'has-img' : ''}>
                    <ArticleInfo>
                        <ArticleTitle>
                            {item.get('title')}
                        </ArticleTitle>
                        <ArticleContent className='content'>
                            {item.get('content')}
                        </ArticleContent>
                        <ArticleMeta>
                            <a className="nickname" target="_blank" href="/u/dc8f0c15d139">{item.get('nickname')}</a>
                            <a target="_blank" href="/p/a0a592dbd33d#comments">
                                <i className="iconfont">&#xe684;</i> {item.get('comments')}
                            </a>
                            <span><i className="iconfont">&#xe64e;</i> {item.get('likes')}</span>
                        </ArticleMeta>
                    </ArticleInfo>
                    {
                        item.get('imgUrl') ? (
                            <ArticleCoverImg>
                                <img alt='' src={item.get('imgUrl')}/>
                            </ArticleCoverImg>
                        ) : null
                    }
                </ArticleItem>
            )
        })
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
});

const mapDispatch = (dispatch) => ({
    getArticleListData() {
        dispatch(actionCreators[actionTypes.GET_ARTICLE_DATA]());
    }
});

export default connect(mapState, mapDispatch)(Article);