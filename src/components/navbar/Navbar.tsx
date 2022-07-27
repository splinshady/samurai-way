import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar + ' shadow_section'}>
            <NavLink className={style.link} activeClassName={style.active} to='/profile'>Profile</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/dialogs'>Dialogs</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/news'>News</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/music'>Music</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/settings'>Settings</NavLink>
        </nav>
    );
};

export default Navbar;