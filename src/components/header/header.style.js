import styled from 'styled-components';
import { colors } from '../../styles/variable';

export const Header = styled.header`
    width: calc(100% - 8rem);
    padding: 4rem 4rem 2.5rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index:103;
    @media screen and (max-width: 1024px) {
        padding: 2rem 4rem 2.5rem 4rem;
    }
    @media screen and (max-width: 468px) {
        padding: 6rem 4rem 2.5rem 4rem;
    }
`;

export const Logo = styled.h1`
    z-index: 10;
    a {        
        font-size: 3.2rem;
    }
`;

export const HeaderMenu = styled.nav`
    position:fixed;
    top: 0;
    right: 0;
    width:0;
    height:100vh;
    background-color:#243563;
    overflow-y:scroll;
    padding-bottom:30px;
    display: flex;
    align-items: center;
    menu {
        margin:60px auto;
        position:relative;
        text-align:center;
        li {
            margin-top: 2rem;
            overflow: hidden;
            &:first-child {
                margin-top: 2rem;
            }
        }
        a {
            transform: translateY(100%);
            display: block;
        }
        span {
            position: relative;
            color: #243563;
          }
          
        span:before {
            width: 0;
            color: ${colors.colorWh};
            overflow: hidden;
            position: absolute;
            content: attr(data-text);
            transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
          }
          
         span:hover:before {
            width: 100%;
          }
    }
`;

export const Hamburger = styled.div`
    position: fixed;
    padding:10px;
    top:2rem;
    right:2rem;
    width:6.5rem;
    height:5.0rem;
    z-index:10;
    transition:0.3s;
    animation:moveme 0.3s 2 alternate backwards;
    &:hover {
        width:8rem;
    }
    span {
        width:100%;
        height:3px;
        background-color:${colors.mainRedColor};
        display:block;
        margin:10px auto;
    }
    @keyframes moveme {
        from {width: 65px;}
        to {width: 75px;}
    }
`;

export const NavLink = styled.a`
    position: relative;
    font-size: 12rem;
    letter-spacing: 0;
    color: ${colors.mainRedColor};
    text-shadow:2px 0 0 ${colors.mainRedColor}, 2px 2px 0 ${colors.mainRedColor}, 0 2px 0 ${colors.mainRedColor}, -2px 2px 0 ${colors.mainRedColor}, -2px 0 0 ${colors.mainRedColor}, -2px -2px 0 ${colors.mainRedColor}, 0 -2px 0 ${colors.mainRedColor}, 2px -2px 0 ${colors.mainRedColor};
    @media screen and (max-width:468px) {
        text-shadow:1px 0 0 ${colors.mainRedColor}, 1px 1px 0 ${colors.mainRedColor}, 0 1px 0 ${colors.mainRedColor}, -1px 1px 0 ${colors.mainRedColor}, -1px 0 0 ${colors.mainRedColor}, -1px -1px 0 ${colors.mainRedColor}, 0 -1px 0 ${colors.mainRedColor}, 1px -1px 0 ${colors.mainRedColor};
    }
`;

export const SnsLink = styled.ul`
    position: fixed;
    right: 4rem;
    bottom: 4rem;
    display: flex;
    li {
        margin-left: 2rem;
        font-size: 1rem;
        &:first-child {
            margin-left: none;
        }
    }
`;