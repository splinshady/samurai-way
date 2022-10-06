import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/icons/incubator.png';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={style.header + ' shadow_section'}>
            <img className={style.logo} src={logo} alt="logo"/>
            <div>
                {
                    isAuth ? <span>{login}</span> : <span>Log in</span>
                }
            </div>
        </header>
    );
};

export default Header;