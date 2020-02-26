import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variable';

const textMain = `
    h1, p {
        overflow: hidden;
        span {
            display: block;
            transform: translateY(100%);
            text-transform: none;
        }
    }
    h1 {
        span {
            color:${colors.colorWh};
            letter-spacing: unset;
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

export const VisitButton = styled(Link)`
    width: 0;
    height: 4rem;
    margin: 4rem 0 0 2rem;
    background: #E33642;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    overflow:hidden;
    span {
        transform: translateY(300%);
        color: ${colors.colorWh};
    }
`;

export const WorkImg = styled.div`
    width: 0;
    height: 55rem;
    position: fixed;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index:101;
    img {
        width: 80rem;
        position: absolute;
        right: 0;
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
        position: relative;
        li {
            &:first-child:before {
                content: '';
                width: 1px;
                height: 100%;
                background-color: red;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
            }
            a {
                width: 50vw;
                height: 44rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15rem;
                letter-spacing: 0;
                color: ${colors.colorWh};
                text-shadow: -2px -2px 0 ${colors.mainRedColor}, 2px -2px 0 ${colors.mainRedColor}, -2px 2px 0 ${colors.mainRedColor}, 2px 2px 0 ${colors.mainRedColor};
            }
        }
    }
`;