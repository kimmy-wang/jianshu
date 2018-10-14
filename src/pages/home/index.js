import React from 'react';
import { Carousel } from 'antd';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Carousel autoplay={true}>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4501/572782ecf027e81f518edce85f98036e88beb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <img alt='' src='https://upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    </Carousel>
                    <Topic/>
                    <Article/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <DownloadApp/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;