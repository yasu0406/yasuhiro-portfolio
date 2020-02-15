import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainUl = styled.ul`
    width: max-content;
    height: 57rem;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z0index: 1;
    li {
        overflow: hidden;
        &:first-child,
        &:last-child {
            font-size: 4rem;
        }
        &:nth-child(2) {
            a {
                position: relative;
                z-index: 2;
                font-size: 12.4rem;
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
                    line-height:.86;
                }
                &:nth-child(3) {
                    line-height: .91;
                }
                &:nth-child(4) {
                    line-height: 1.15;
                }
                &:nth-child(5) {
                    margin-top: -3.3rem;
                }
                &:last-child {
                    margin-top: -3.2rem;
                }
        }
        @media screen and (max-width:768px) {
            &:first-child,
            &:last-child {
                font-size: 2rem;
            }
            &:nth-child(2) {
                a {
                    font-size: 6.2rem;
                }
            }
            &:nth-child(3) {
                font-size: 3.2rem;
            }
            &:nth-child(4) {
                font-size: 2.6rem;
                span {
                    margin-top: -1rem;
                    font-size: 8.2rem;
                }
            }
        }
    }
    @media screen and (min-height:801px) {
        bottom: -10rem;
    }
    @media screen and (max-width:768px) {
        bottom:0;
    }
`;

export const WorkButton = styled(Link)`
    position: fixed;
    left: 0;
    right: 0;
    top: -9rem;
    margin: auto;
    width: 200px;
    z-index: 1;
    display: block;
    img {
        height: 15rem;
    }
`;