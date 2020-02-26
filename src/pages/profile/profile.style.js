import styled from 'styled-components';
import { colors } from '../../styles/variable';

const spanStyle = `
    span {
        letter-spacing: unset;
        color:${colors.colorWh};
        transform: translateY(100%);
        display: block;
    };
`;

export const FirstContainer = styled.div`
    height: 70vh;
    overflow: hidden;
    position: relative;
    padding: 16rem 4rem 0;
    div {
        width: max-content;
        h1 {
            overflow: hidden;
        }
        p {
            font-size: 2.0rem;
            line-height: 1.4;
            text-align: right;
            letter-spacing: unset;
            overflow: hidden;
            span {
                color:${colors.mainRedColor};
            }
        }
        ${spanStyle};
    }
`;

export const ProfileImg = styled.div`
    width: 0;
    height: 40rem;
    overflow: hidden;
    position: absolute;
    right: 0;
    img {
        width: 60rem;
        position: absolute;
        right: 0;
    }
`;

export const SecondContainer = styled.div`
    position: relative;
    margin-top: 50rem;
    padding: 0 4rem 16rem;
    div {
        width: 60rem;
        h1 {
            overflow: hidden;
        }
        p {
            font-size: 2.0rem;
            line-height: 1.4;
            text-align: right;
            letter-spacing: unset;
            overflow: hidden;
            span {
                color:${colors.mainRedColor};
            }
        }
        ul {
            li {
                overflow:hidden;
                margin-top: 3rem;
                span {
                    font-size: 2.8rem;
                    line-height: 1.2;
                    font-weight: 100;
                    text-transform: none;
                    color: ${colors.mainRedColor};
                }
            }
        }
        ${spanStyle};
    }
`;