import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is app component"}/>
            <PageTitle friends={"My friends"}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={0}/>

            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <div>
            <h1>{props.titleValue}</h1>
            <h5>{props.friends}</h5>
        </div>

)
}


export default App;
