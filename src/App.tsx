import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState(true)

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
            <OnOff/>
            -
            <UncontrolledOnOff on={on} onClick={setOn}/>
            {/*<OnOff/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>

            <Accordion titleValue={"Users"} collapsed={collapsed} onClick={setCollapsed}/>
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
