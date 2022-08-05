import React from 'react';
import style from './PersonDialog.module.css';
import {NavLink} from "react-router-dom";

type PersonDialogType = {
    id: string,
    name: string
}

const PersonDialog = (props: PersonDialogType) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active} className={style.person_dialog}>
            <img className={style.avatar} src='https://cdn-icons-png.flaticon.com/512/145/145847.png' alt=""/>
            <span className={style.name}>{props.name}</span>
        </NavLink>
    );
};

export default PersonDialog;