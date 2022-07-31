import React from 'react';
import style from './DialogsPeople.module.css';
import PersonDialog from "./person-dialog/PersonDialog";
import {dialogsType} from "../../../state/state";

type DialogsPeoplePropsType = {
    state: Array<dialogsType>
}

const DialogsPeople = (props: DialogsPeoplePropsType) => {
    return (
        <div className={style.dialogs_container + ' shadow_section'}>
            {props.state.map(person => <PersonDialog key={person.id} id={person.id} name={person.name}/>)}
        </div>
    );
};

export default DialogsPeople;