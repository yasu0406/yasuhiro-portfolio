import styled from 'styled-components';

export const Header = styled.header`
    padding: 4rem 4rem 2.5rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
        padding: 2rem 2rem 1.25rem 2rem;
    }
`;

export const Logo = styled.h1`
    a {        
        font-size: 3.2rem;
        @media screen and (max-width:768px) {
            & {
                font-size: 1.7rem;
            }
        }
    }
`;

export const HeadrNav = styled.nav`
    ul {
        display: flex;
        li:first-child {
            margin-right:4.5rem;
        }
    }
`;