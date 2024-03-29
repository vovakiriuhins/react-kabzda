import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>

            {!collapsed ? <AccordionBody/> : ""}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
            <div>
                <h3 onClick={()=>{ props.onClick() }}>{props.title}</h3>
            </div>
    )
}

function AccordionBody() {
    return (
            <ul>
                <li>12</li>
                <li>23</li>
                <li>34</li>
            </ul>
    )
}

export default UncontrolledAccordion;