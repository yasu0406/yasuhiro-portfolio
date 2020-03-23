import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainUl = styled.ul`
    width: max-content;
    text-align: center;
    li {
        overflow: hidden;
        &:first-child,
        &:last-child {
            font-size: 4rem;
        }
        &:nth-child(2) {
            position: relative;
            span {
                position: relative;
            }
            span:before {
                content: '';
                width: 88%;
                height: 4px;
                margin: auto;
                background-color: ${colors.mainRedColor};
                display: block;
                position: absolute;
                right: 5rem;
                bottom: 4px;
                transition: 1s;
            }
            &:hover span:before {
                width: 0;
            }
            a {
                position: relative;
                z-index: 2;
                font-size: 12.4rem;
            }
            .profileImgLink {
                width:0;
                max-width:40rem;
                height: 40rem;
                position: fixed;
                overflow: hidden;
                z-index: 100;
                img {
                    width:40rem;
                }
                @media screen and (max-width:1024px) {
                    display:none;
                }
            }
        }
        &:nth-child(3) {
            font-size: 6.4rem;
        }
        &:nth-child(4) {
            font-size: 5.2rem;
        }
        &:nth-child(5) {
            font-size: 16.4rem;
        }
        span {
            display: block;
            transform: translateY(-115%);
        }
        @media screen and (min-width:1088px) {
            line-height:1.22;
                &:nth-child(2) {
                    line-height:.96;
                }
                &:nth-child(3) {
                    line-height: 1.01;
                }
                &:nth-child(4) {
                    line-height: 1.25;
                }
                &:nth-child(5) {
                    margin-top: -3.3rem;
                }
                &:last-child {
                    margin-top: -2rem;
                }
        }
    }
`;

export const WorkButton = styled.a`
    width: 20rem;
    position: fixed;
    left: 0;
    right: 0;
    top: -9rem;
    margin: auto;
    display: block;
    img {
        height: 15rem;
    }
    @media screen and (max-width:1088px) {
        top:unset;
        bottom:5rem;
    }
`;