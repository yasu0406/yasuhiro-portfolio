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
        position: absolute;
        bottom: 15rem;
        span {
            letter-spacing: unset;
        }
        @media screen and (max-width:468px) {
            margin: auto;
            right: 0;
            left: 0;
            bottom: 35rem;
            text-align: center;
            z-index:200;
        }
    }
`;

const textAnimation = `
    span {
        display: block;
        transform: translateY(100%);
        color: ${colors.colorWh};
    }
`;

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`;

export const MainInnerConatiner = styled.div`
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
    z-index:-1;
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
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: auto;
        @media screen and (max-width: 468px) {
            width: 60%;
            height: auto;
        }
    }
`;

export const SecondConatiner = styled.section`
    padding-top: calc(100vh);
    position: relative;
    > div {
        background-color: #367E7B;
        ul {
            display: flex;
            justify-content: space-between;
            @media screen and (max-width:1024px) {
                flex-direction: column;
            }
            ${textAnimation};
            li:first-child {
                width: 40rem;
            }
            li {
                overflow: hidden;
            }
            li, p {
                font-size: 2rem;
                color: white;
            }
            p {
                margin-top: -1rem;
                overflow: hidden;
                line-height: 2;
                span {
                    text-transform: unset;
                }
            }
            > li:last-child {
                max-width:72rem;
            }
            ul {
                display: block;
                margin-bottom: 5rem;
                li {
                    margin-top: 3rem;
                    line-height: 1.6;
                    &:first-child {
                        margin-top: 0;
                    }
                }
                ul {
                    margin-top: 5rem;
                    display: flex;
                    transform: translateY(100%);
                    li {
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

export const ProjectImgDiv = styled.div`
    position: relative;
    overflow: hidden;
    margin-bottom: 20rem;
    &:nth-child(even) {
        text-align: right;
        div {
            right:0;
            left:unset;
        }
    }
    &.last-project-img {
        text-align: center;
        div {
            margin:auto;
            right:0;
            left:0; 
        }
        img {
            box-shadow: unset;
        }
    }
    div {
        width:100%;
        height: 1000rem;
        max-width: 80rem;
        position: absolute;
        top:0;
        left:0;
        background-color: ${colors.mainRedColor};
    }
    img {
        max-width: 80rem;
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
                text-shadow:2px 0 0 ${colors.mainRedColor}, 2px 2px 0 ${colors.mainRedColor}, 0 2px 0 ${colors.mainRedColor}, -2px 2px 0 ${colors.mainRedColor}, -2px 0 0 ${colors.mainRedColor}, -2px -2px 0 ${colors.mainRedColor}, 0 -2px 0 ${colors.mainRedColor}, 2px -2px 0 ${colors.mainRedColor};
                @media screen and (max-width:468px) {
                    text-shadow:1px 0 0 ${colors.mainRedColor}, 1px 1px 0 ${colors.mainRedColor}, 0 1px 0 ${colors.mainRedColor}, -1px 1px 0 ${colors.mainRedColor}, -1px 0 0 ${colors.mainRedColor}, -1px -1px 0 ${colors.mainRedColor}, 0 -1px 0 ${colors.mainRedColor}, 1px -1px 0 ${colors.mainRedColor};
                }
                position: relative;
                z-index:1;
            }
            span {
                width: 40vw;
                margin: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                font-size: 50rem;
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
        .active-link {
            width: 100vw!important;
            span {
                padding-left: 30rem;
            }
            a {
                border-right: none!important;
            }
        }
    }
`;