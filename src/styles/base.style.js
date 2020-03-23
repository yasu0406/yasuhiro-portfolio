import styled from 'styled-components';
import { colors } from './variable';

export const Title = styled.h1`
    position: relative;
    font-size: 12rem;
    letter-spacing: 0;
    color: ${colors.colorWh};
    span {
        letter-spacing: unset;
        color:${colors.colorWh};
        text-shadow:2px 0 0 ${colors.mainRedColor}, 2px 2px 0 ${colors.mainRedColor}, 0 2px 0 ${colors.mainRedColor}, -2px 2px 0 ${colors.mainRedColor}, -2px 0 0 ${colors.mainRedColor}, -2px -2px 0 ${colors.mainRedColor}, 0 -2px 0 ${colors.mainRedColor}, 2px -2px 0 ${colors.mainRedColor};
        @media screen and (max-width:468px) {
            text-shadow:1px 0 0 ${colors.mainRedColor}, 1px 1px 0 ${colors.mainRedColor}, 0 1px 0 ${colors.mainRedColor}, -1px 1px 0 ${colors.mainRedColor}, -1px 0 0 ${colors.mainRedColor}, -1px -1px 0 ${colors.mainRedColor}, 0 -1px 0 ${colors.mainRedColor}, 1px -1px 0 ${colors.mainRedColor};
        }
    }

`; 

export const Text = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    line-height: 2.6rem;
    font-weight: lighter;
    color: ${colors.mainRedColor};
    text-transform: none;;
`;

export const ScrollDown = styled.a`
    width: 46px;
    height: 46px;
    margin: auto;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5rem;
    border: 1px solid ${colors.mainRedColor};
    border-radius: 100%;
    box-sizing: border-box;
    opacity: 0;
    span:after {
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-left: 1px solid ${colors.mainRedColor};
        border-bottom: 1px solid ${colors.mainRedColor};
        transform: rotate(-45deg);
        box-sizing: border-box;
    }
    span:before {
        content: '';
        width: 44px;
        height: 44px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 100%;
        opacity: 0;
        animation: sdb 3s infinite;
        box-sizing: border-box;
        box-shadow: 1px 1px 1px 1px #e336428c;
    }
  @keyframes sdb {
        0% {
        opacity: 0;
        }
        30% {
        opacity: 1;
        }
        60% {
        box-shadow: 0 0 0 50px #e336428c;
        opacity: 0;
        }
        100% {
        opacity: 0;
        }
    }
`;