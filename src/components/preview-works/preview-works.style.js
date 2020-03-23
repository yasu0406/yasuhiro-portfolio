import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const Container = styled.section`
    width: calc(100% - 8rem);
    padding: 16rem 4rem 0;
    position: relative;
    z-index: 102;
    @media screen and (max-width:1024px) {
        height:100vh;
        padding: 0 4rem;
        display:flex;
        align-items: center;
    }
`;

export const WorksList = styled.ul`
    transform: translateY(10%);
    visibility: hidden;
    li {
        max-width: max-content;
        padding-right: 10rem;
        margin-bottom: 4rem;
        opacity:1;
        .title-box {
            position:relative;
            z-index:200;
        }
    }
`;

export const ViewMore = styled.p`
    width: 6.4rem;
    height: 6.4rem;
    background: #EA6871;
    border-radius: 60px;
    position: absolute;
    top: 0;
    right: -10rem;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    a {
        width:100%;
        padding:2rem 0;
        display:block;
        text-align:center;
        opacity:0;
        font-size: 2.4rem;
        color: ${colors.colorWh};
        transform: translateY(10%);
        text-shadow: none;
        position:relative;
    }
    @media screen and (min-width:1025px) {
        &:before {
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            background-color: #FFFFFF;
            display: block;
            border-radius: 1rem;
            position: absolute;
            top: 0;
            right: 2.5rem;
            bottom: 0;
            margin: auto;
        }
    }
    @media screen and (max-width:1024px) {
        transform: rotate(-45deg);
        &:before,
        &:after {
            margin:auto;
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
        }
        &:before{
            content: '';
            width: 1.5rem;
            height: 1.5rem;
            border-top: solid 3px ${colors.colorWh};
            border-right: solid 3px ${colors.colorWh};
            transform: rotate(45deg);
        }
        &:after{
            content: '';
            width: 1.7rem;
            height: 3px;
            border: 0px;
            background-color: ${colors.colorWh};
            top: 0;
        }
    }
`; 

export const TypeOfWork = styled.p`
    width: 12rem;
    padding: 1rem 0;
    text-align: center;
    background-color: ${colors.mainRedColor};
    color: ${colors.colorWh};
    font-size: 1.6rem;
    border-radius: 6rem;
`;

export const WorkImg = styled.div`
    width:0;
    position: fixed;
    top:0;
    right: -5rem;
    bottom: 0;
    margin:auto;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    img {
        width: 63.5rem;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    }
`;

