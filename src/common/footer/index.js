import React from 'react';
import {
    FooterWrapper,
    FooterContainer,
    FooterLeft
} from './style';

class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <FooterContainer>
                    <FooterLeft>
                        <div className="icp">
                            ©2012-2018 某某科技有限公司  某某公司  沪ICP备#######
                            <a target="_blank" rel="noopener noreferrer"
                               href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
                            >
                                <img src="https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png"
                                     alt="Smrz"
                                />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
                            >
                                沪公网安备#############号
                            </a>
                        </div>
                    </FooterLeft>
                </FooterContainer>
            </FooterWrapper>
        )
    }
}

export default Footer;