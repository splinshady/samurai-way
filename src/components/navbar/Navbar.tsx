import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType} from "../../state/redux-store";
import CircularProgress from '@mui/material/CircularProgress';

const Navbar = () => {
  const isFetching = useSelector<StateType, boolean>(state => state.usersPage.isFetching)
  return (
    <div className={style.navbar_container}>
      <nav className={style.navbar + ' shadow_section'}>
        <NavLink className={style.link} activeClassName={style.active} to='/profile'>Profile</NavLink>
        <NavLink className={style.link} activeClassName={style.active} to='/dialogs'>Dialogs</NavLink>
        <NavLink className={style.link} activeClassName={style.active} to='/users'>Users</NavLink>
      </nav>
      {isFetching && <CircularProgress/>}
    </div>
  );
};

export default Navbar;