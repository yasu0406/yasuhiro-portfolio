import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { TweenLite, Expo } from 'gsap';

import {Header, Logo, HeaderMenu, Hamburger, NavLink, SnsLink} from './header.style';

const HeaderComponent = () => {
    const hamburger = useRef(null);
    const menu = useRef(null);
    const logo = useRef(null);
    let navList = [];
    let bars = [];
    const [menuToggle, setMenuToggle] = useState(true);
    let history = useHistory();
    useEffect(() => {
        var aList = document.querySelectorAll('a');
        for(var i = 0; i < aList.length; i++) {
            aList[i].addEventListener('click', onCloseMenu);
        }
        return () => {
            window.removeEventListener('click', onClickMenu);
        }
    });
    const changePage = (e, destination) => {
        e.preventDefault();
        onCloseMenu();
        setTimeout(() => {
          history.push(destination);
        }, 950);
    };
    const onClickMenu = () => {
        setMenuToggle(!menuToggle);
        if(menuToggle === true) {
            TweenLite.to(menu.current, 1, {
                width: '100%',
                ease: Expo.easeInOut
            });
            TweenLite.to(bars[0], 0.5, {
                transform: 'rotate(48deg) translateY(7px) translateX(9px)',
                backgroundColor:'white'
            });
            TweenLite.to(bars[1], 0.5, {
                transform: 'rotate(-48deg)',
                backgroundColor:'white'
            });
            TweenLite.to(bars[2], 0.5, {
                opacity: 0
            });
            TweenLite.to(logo.current.querySelector('a'), 0.5, {
                color: 'white'
            });
            TweenLite.to(navList[0], 0.5, {
                delay: 1,
                transform: 'translateY(0)'
            });
            TweenLite.to(navList[1], 0.5, {
                delay: 1.3,
                transform: 'translateY(0)'
            });
            // TweenLite.to(navList[2], 0.5, {
            //     delay: 1.6,
            //     transform: 'translateY(0)'
            // });
        } else {
            onCloseMenu();
        }        
    }
    const onCloseMenu = () => {
        setMenuToggle(true);
        TweenLite.to(navList[0], 0.5, {
            transform: 'translateY(100%)'
        });
        TweenLite.to(navList[1], 0.5, {
            delay: 0.3,
            transform: 'translateY(100%)'
        });
        // TweenLite.to(navList[2], 0.5, {
        //     delay: 0.6,
        //     transform: 'translateY(100%)'
        // });
        TweenLite.to(menu.current, 0.5, {
            delay: 1,
            width: 0,
            ease: Expo.easeInOut
        });
        TweenLite.to(bars[0], 0.5, {
            delay: 1,
            transform: 'unset',
            backgroundColor:'#E33642'
        });
        TweenLite.to(bars[1], 0.5, {
            delay: 1,
            transform: 'unset',
            backgroundColor:'#E33642'
        });
        TweenLite.to(bars[2], 0.5, {
            delay: 1,
            opacity: 1
        });
        TweenLite.to(logo.current.querySelector('a'), 0.5, {
            delay: 1,
            color: '#E33642'
        });
    }
    return (
        <Header>
            <Logo ref={logo}><a onClick={e => changePage(e, `/`)}>yasuhiro<br />katayama</a></Logo>
            <div>
                <Hamburger className='hamburger' onClick={() => {onClickMenu()}} ref={hamburger}>
                    <span ref={(e) => { e !== null && bars.push(e) }}></span>
                    <span ref={(e) => { e !== null && bars.push(e) }}></span>
                    <span ref={(e) => { e !== null && bars.push(e) }}></span>
                </Hamburger>
                
                <HeaderMenu ref={menu}>
                    <menu>
                        <li><NavLink onClick={e => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}><span data-text="works">works</span></NavLink></li>
                        <li><NavLink onClick={e => changePage(e, `/profile`)} ref={(e) => { e !== null && navList.push(e) }}><span data-text="profile">profile</span></NavLink></li>
                        {/* <li><NavLink onClick={e => changePage(e, `/profile`)} ref={(e) => { e !== null && navList.push(e) }}><span data-text="contact">contact</span></NavLink></li> */}
                    </menu>
                </HeaderMenu>
            </div>
            <SnsLink>
                <li><a href='https://www.linkedin.com/in/yasuhiro-katayama-118423160/' target='_blank'>linkedin</a></li>
                <li><a href='https://github.com/yasu0406' target='_blank'>github</a></li>
                <li><a href='https://yasuhiro-k.com/images/resume.pdf' target='_blank'>resume</a></li>
            </SnsLink>
        </Header>
    )
}

export default HeaderComponent;