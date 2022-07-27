import React from 'react';
import style from './DialogsPeople.module.css';
import PersonDialog from "./person-dialog/PersonDialog";

const DialogsPeople = () => {
    return (
        <div className={style.dialogs_container + ' shadow_section'}>
            <PersonDialog id={1} name={"Dima"}/>
            <PersonDialog id={2} name={"Kostia"}/>
            <PersonDialog id={3} name={"Sergey"}/>
            <PersonDialog id={4} name={"Egor"}/>
        </div>
    );
};

export default DialogsPeople;