import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const Container = styled.section`
    width:100%;
    max-width: 74.5rem;
    padding: 16rem 4rem 0;
    position: relative;
    z-index: 100;
`;

export const WorksList = styled.ul`
    transform: translateY(10%);
    visibility: hidden;
    li {
        margin-bottom: 4rem;
        opacity:1;
    }
`;

export const TitleBox = styled.div`
    width: max-content;
`;

export const WorksTitle = styled.h1`
    position: relative;
    font-size: 12rem;
    letter-spacing: 0;
    color: ${colors.colorWh};
    text-shadow:
    -2px -2px 0 ${colors.mainRedColor},  
     2px -2px 0 ${colors.mainRedColor},
     -2px 2px 0 ${colors.mainRedColor},
      2px 2px 0 ${colors.mainRedColor};
`; 

export const ViewMore = styled.p`
    width: 6.4rem;
    height: 6.4rem;
    background: #EA6871;
    border-radius: 60px;
    position: absolute;
    top: 0;
    right: -9rem;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        opacity:0;
        visibility: hidden;
        font-size: 2.4rem;
        color: ${colors.colorWh};
        transform: translateY(10%);
        text-shadow: none;
    }
    &:before {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background-color: #FFFFFF;
        display: block;
        border-radius: 1rem;
        position: absolute;
        top: 0;
        right: 2.7rem;
        bottom: 0;
        margin: auto;
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
    height:44rem;
    position: fixed;
    top:0;
    right: 0;
    bottom: -22rem;
    margin:auto;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    z-index:101;
`;

