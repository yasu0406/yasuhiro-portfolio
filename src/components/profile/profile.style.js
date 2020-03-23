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
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 6rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: max-content;
        h1 {
            overflow: hidden;
            text-align: center;
        }
        p {
            font-size: 2.0rem;
            line-height: 1.4;
            text-align: center;
            letter-spacing: unset;
            overflow: hidden;
            span {
                color:${colors.colorWh};
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
    padding: 110rem 0 0;
    @media screen and (max-width:768px) {
        margin-top: 60rem;
    }
    section {
        position: relative;
        background-color: #243563;
        z-index:100;
        padding: 16rem 4rem;
        @media screen and (max-width:468px) {
            padding: 16rem 4rem 80rem;
        }
    }
`;

export const AboutContent = styled.div`
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
                font-family: Helvetica,Arial,sans-serif;
                font-weight: lighter;
                font-size: 1.8rem;
                line-height: 1.6;
                font-weight: 100;
                text-transform: none;
                color: ${colors.colorWh};
            }
        }
    }
    ${spanStyle};
`;