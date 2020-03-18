import styled from 'styled-components';
import { colors } from '../../styles/variable';

const textMain = `
    h1, p {
        overflow: hidden;
        span {
            display: block;
            transform: translateY(100%);
        }
    }
    h1 {
        height: 11rem;
        margin: auto;
        position: fixed;
        top: 0;
        right: -10rem;
        bottom: 0;
        transform: rotate(-90deg);
        span {
            color:${colors.colorWh};
            letter-spacing: unset;
        }
        @media screen and (max-width: 768px) {
            margin-top: 5rem;
            position: unset;
            transform: unset;
            text-align: center;
        } 
    }
    p {
        span {
            text-transform: none;
        }
    }
`;

const textAnimation = `
    span, p {
        display: block;
        transform: translateY(100%);
        color: ${colors.colorWh};
    }s
`;

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`;

export const MainInnerConatiner = styled.div`
    position: relative;
    padding: 16rem 4rem 0;
`;

export const InnerConatiner = styled.div`
    position: relative;
    padding: 10rem 4rem;
`;

export const FirstConatiner = styled.section`
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index:1;
    ${textMain};
    p {
        max-width: 700px;
        margin:2rem 0 0 2.5rem;
        font-size: 2rem;
        text-transform: capitalize;
        color: ${colors.mainRedColor};
        text-transform: none;
    }
`;

export const MainRight = styled.div`
    width: 35%;
    height: 0;
    background-color: #367E7B;
    position: absolute;
    top: 0;
    right: 0;
`;

export const WorkDescription = styled.div`
    position: fixed;
    left: 0;
    bottom: 2rem;
`

export const WorkImg = styled.div`
    width: 100%;
    height: 0;
    text-align: center;
    margin: auto;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 101;
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
    }
    img {
        width: auto;
        height: 50rem;
        @media screen and (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }
`;

export const SecondConatiner = styled.section`
    padding-top: calc(100vh);
    position: relative;
    > div {
        background-color: #367E7B;
        div {
            overflow: hidden;
            img {
                transform: translateY(100%);
            }
        }
        ul {
            display: flex;
            justify-content: space-between;
            @media screen and (max-width:768px) {
                flex-direction: column;
            }
            ${textAnimation};
            > li {
                overflow: hidden;
            }
            li, p {
                font-size: 2rem;
                color: white;
            }
            p {
                line-height: 2;
            }
            > li:last-child {
                max-width:72rem;
            }
            ul {
                display: block;
                margin-bottom: 5rem;
                li {
                    margin-top: 5rem;
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
    > div:first-child + div {
        background-color: white;
    }
`;

export const FooterNav = styled.nav`
    width:100%;
    background-color: #243563;
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
            width: 50vw;
            position: relative;
            overflow: hidden;
            a {
                height: 44rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15rem;
                letter-spacing: 0;
                color: ${colors.colorWh};
                text-shadow: -2px -2px 0 ${colors.mainRedColor}, 2px -2px 0 ${colors.mainRedColor}, -2px 2px 0 ${colors.mainRedColor}, 2px 2px 0 ${colors.mainRedColor};
                position: relative;
                z-index:1;
            }
            span {
                width: 40vw;
                margin: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                font-size: 60rem;
                opacity:0;
                animation-name: marquee;
                animation-duration: 20s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                color: ${colors.colorWh};
            }
            @keyframes marquee {
                from    { transform: translate(0%); } 
                100%,to { transform: translate(-50%); }
            }
        }
        li:first-child {
            a {
                border-right: 1px solid ${colors.mainRedColor};
            }
        }
    }
`;

export const WorkButton = styled.a`
    width: 20rem;
    height: 10rem;
    position: fixed;
    right: 8rem;
    bottom: 15rem;
    margin: auto;
    display: block;
    opacity:0;
`;