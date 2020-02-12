import React from 'react';
import {Link} from 'react-router-dom';
import {Header, Logo, HeadrNav} from './header.style';

const HeaderComponent = () => {
    return (
        <Header>
            <Logo><Link to='/'>yasuhiro<br />katayama</Link></Logo>
            <HeadrNav>
                <ul>
                    <li><Link to='/profile'>profile</Link></li>
                    <li><Link>contact</Link></li>
                </ul>
            </HeadrNav>
        </Header>
    )
}

export default HeaderComponent;