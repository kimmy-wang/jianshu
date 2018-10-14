import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    ArticleWrapper,
    ArticleItem,
    ArticleInfo,
    ArticleTitle,
    ArticleContent,
    ArticleMeta,
    ArticleCoverImg,
    LoadMore
} from '../style';
import { actionTypes, actionCreators } from '../store'

class Article extends React.PureComponent {
    render() {
        const { articlePage, loadMore } = this.props;
        return (
            <ArticleWrapper>
                {this.getArticleList()}
                <LoadMore onClick={() => loadMore(articlePage)}>阅读更多</LoadMore>
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
                        <Link to='/detail'>
                            <ArticleTitle>
                                {item.get('title')}
                            </ArticleTitle>
                        </Link>
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
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getArticleListData() {
        dispatch(actionCreators[actionTypes.GET_ARTICLE_DATA]());
    },
    loadMore(page) {
        dispatch(actionCreators[actionTypes.GET_MORE_ARTICLE_DATA]());
    }
});

export default connect(mapState, mapDispatch)(Article);