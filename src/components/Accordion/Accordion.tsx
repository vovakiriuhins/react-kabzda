import React from "react";

function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: any) {
    return (
            <div>
                <h3>{props.titleValue}</h3>
            </div>
    )
}

function AccordionBody() {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}

export default Accordion;