import React from "react";

function Accordion (props: any) {
    return (
        <div className={'accordion'}>
            <AccordionTitle titleForAccordion={props.titleForAccordion}/>
            <AccordionBody />
        </div>
    );
}

function AccordionTitle (props: any) {
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