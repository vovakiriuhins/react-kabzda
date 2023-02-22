import React from "react";

type Accordion = {
    titleValue: string
}
function Accordion(props: Accordion) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
            <div>
                <h3>{props.title}</h3>
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