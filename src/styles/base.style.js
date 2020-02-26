import styled from 'styled-components';
import { colors } from './variable';

export const Title = styled.h1`
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

export const Text = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    line-height: 2.6rem;
    font-weight: lighter;
    color: ${colors.mainRedColor};
    text-transform: none;;
`;