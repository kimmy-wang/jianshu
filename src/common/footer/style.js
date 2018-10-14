import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width: 100%;
`;

export const FooterContainer = styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
    padding-top: 20px;
`;

export const FooterLeft = styled.div`
    margin-left: 15px;
    margin-bottom: 20px;
    width: 625px;
    .icp {
        font-size: 12px;
        color: #c8c8c8
        a {
            color: #c8c8c8;
            &:hover {
                color: #333;
            }
        }
    }
`;