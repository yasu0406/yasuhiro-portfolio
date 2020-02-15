import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const LoadingOverlay = styled.div`
    width:100%;
    position:absolute;
    top:0;
    background-color: ${colors.mainRedColor};
    z-index:9999;
`;