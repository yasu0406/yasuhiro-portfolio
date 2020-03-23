import styled from 'styled-components';

const commonStyle = `
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0; 
    pointer-events: none;
    @media screen and (max-width: 1024px) {
        & {
            display: none!important;
        }        
    }
`;

export const Cursor = styled.div`
    ${commonStyle}
    width: 8px;
    height: 8px;
    background-color: #000;
    z-index: 1001;
`;

export const Follower = styled.div`
    ${commonStyle}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #D2003E;
    opacity: 0.8;
    z-index: 1000;
    transition: transform ease .1s;
    text-align: center;
    span {
        display: inline-block;
        font-size: 14px;
        transform: scale(0);
    }
    &.is-active {
        transform: scale(2);
      }
`;