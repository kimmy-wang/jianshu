import React from 'react';
import {
    DownloadAppWrapper
} from '../style';

class DownloadApp extends React.Component {
    render() {
        return (
            <DownloadAppWrapper>
                <a id="index-aside-download-qrbox" className="col-xs-8 download" data-toggle="popover"
                   data-placement="top" data-html="true" data-trigger="hover"
                   data-content="<img src=&quot;//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png&quot; alt=&quot;Download index side qrcode&quot; />"
                   href="/apps?utm_medium=desktop&amp;utm_source=index-aside-click" data-original-title="" title="">
                    <img className="qrcode"
                         src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
                         alt="Download index side qrcode"/>
                        <div className="info">
                            <div className="title">下载简书手机App<i className="iconfont ic-link">&#xe666;</i></div>
                            <div className="description">随时随地发现和创作内容</div>
                        </div>
                </a>
            </DownloadAppWrapper>
        )
    }
}

export default DownloadApp;