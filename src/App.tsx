import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/./UncontrolledOnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOfff} from "./components/OnOff/OnOfff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is app component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating value={5}/>*/}
            <UncontrolledOnOff onchange={setSwitchOn}/> {setSwitchOn.toString()}
            -
            <OnOfff on={switchOn} onChange={(switchOn)=>setSwitchOn(switchOn)}/>
            {/*<UncontrolledOnOff/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>

            <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
            <UncontrolledRating/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
