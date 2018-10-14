import React from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTitle,
    WriterInfoSwitch,
    WriterContent,
    WriterItem
} from '../style';

class Writer extends React.PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterInfoSwitch>
                        <i className="iconfont refresh-icon">&#xe790;</i>
                        换一批
                    </WriterInfoSwitch>
                </WriterTitle>
                <WriterContent>
                    <WriterItem>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="avatar">
                            <img alt='' src="//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                        <a className="follow" state="0">
                            <i className="iconfont ic-follow">&#xe61f;</i>关注
                        </a>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="name">
                            北美之北
                        </a>
                        <p>
                            写了359.3k字 · 1.4k喜欢
                        </p>
                    </WriterItem>
                    <WriterItem>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="avatar">
                            <img alt='' src="//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                        <a className="follow" state="0">
                            <i className="iconfont ic-follow">&#xe61f;</i>关注
                        </a>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="name">
                            北美之北
                        </a>
                        <p>
                            写了359.3k字 · 1.4k喜欢
                        </p>
                    </WriterItem>
                    <WriterItem>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="avatar">
                            <img alt='' src="//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                        <a className="follow" state="0">
                            <i className="iconfont ic-follow">&#xe61f;</i>关注
                        </a>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="name">
                            北美之北
                        </a>
                        <p>
                            写了359.3k字 · 1.4k喜欢
                        </p>
                    </WriterItem>
                    <WriterItem>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="avatar">
                            <img alt='' src="//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                        <a className="follow" state="0">
                            <i className="iconfont ic-follow">&#xe61f;</i>关注
                        </a>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="name">
                            北美之北
                        </a>
                        <p>
                            写了359.3k字 · 1.4k喜欢
                        </p>
                    </WriterItem>
                    <WriterItem>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="avatar">
                            <img alt='' src="//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                        <a className="follow" state="0">
                            <i className="iconfont ic-follow">&#xe61f;</i>关注
                        </a>
                        <a href="/u/c4165d16d0ad?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                           className="name">
                            北美之北
                        </a>
                        <p>
                            写了359.3k字 · 1.4k喜欢
                        </p>
                    </WriterItem>
                </WriterContent>
                <a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank"
                   className="find-more">
                    查看全部<i className="iconfont ic-link">&#xe666;</i>
                </a>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Writer);