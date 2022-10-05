import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/icons/incubator.png';

const Header = () => {
    return (
        <header className={style.header + ' shadow_section'}>
            <img className={style.logo} src={logo} alt="logo"/>
            login
        </header>
    );
};

export default Header;