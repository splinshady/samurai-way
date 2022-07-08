import React from "react";

type AccordionPropsType = {
    titleForAccordion: string,
    collapsed: boolean
}

function Accordion (props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div className={'accordion'}>
                <AccordionTitle titleForAccordion={props.titleForAccordion}/>
            </div>
        );
    } else {
        return (
            <div className={'accordion'}>
                <AccordionTitle titleForAccordion={props.titleForAccordion}/>
                <AccordionBody />
            </div>
        );
    }
}

type AccordionTitlePropsType = {
    titleForAccordion: string
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3>{props.titleForAccordion}</h3>
    );
}

function AccordionBody () {
    return (
        <ul>
            <li>menu</li>
            <li>about</li>
            <li>contacts</li>
        </ul>
    );
}

export default Accordion;