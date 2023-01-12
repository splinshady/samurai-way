import React from 'react'

import logo from '../../assets/icons/incubator.png'
import { Button } from '../common/Button/Button'

import style from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<HeaderPropsType> = ({ isAuth, login, logout }) => {
  return (
    <header className={style.header + ' shadow_section'}>
      <img className={style.logo} src={logo} alt="logo" />
      <div className={style.logout_container}>
        {isAuth && (
          <div>
            <span className={style.user_login}>{login}</span>
            <Button onClick={logout}>Log out</Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
