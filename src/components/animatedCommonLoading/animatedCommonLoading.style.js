import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const MtAnimation = styled.div`
    width: 100%;
    max-width:60rem;
    max-height:60rem;
    border-radius:100%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color: ${colors.mainRedColor};
    z-index:100;
    overflow:hidden;
    transform: scale(0);
    h1 {
        height:10px;
        font-size:1rem;
        text-align:center;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        color: ${colors.colorWh};
        opacity:1;
    }
`;

export const FuhiImg = styled.img`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    opacity:0;
`;