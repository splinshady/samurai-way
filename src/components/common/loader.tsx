import React from 'react';
import loader from '../../assets/icons/icons8.gif';
import style from './CommonComponents.module.css';

export const Loader = () => {
    return (
        <div >
            <img className={style.loader} src={loader} alt="loader"/>
        </div>
    );
};