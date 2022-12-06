import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/icons/incubator.png';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {

  return (
    <header className={style.header + ' shadow_section'}>
      <img className={style.logo} src={logo} alt="logo"/>
      <div className={style.logout_container}>
        {
          isAuth
            ?
            <div>
              <span className={style.user_login}>{login}</span>
              <span className={style.logout} onClick={logout}>Log out</span>
            </div>
            :
            <span>Log in</span>
        }
      </div>
    </header>
  );
};

export default Header;