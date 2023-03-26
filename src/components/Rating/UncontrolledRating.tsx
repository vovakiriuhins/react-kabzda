import React, {Dispatch, SetStateAction, useState} from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    // value: number
    // setValue: Dispatch<SetStateAction<number>>
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating() {

    let [value, setValue] = useState(0 )



    return (
        <div>
            <Star selected={value > 0} setValue={ () => {setValue(1)} }/>
            <Star selected={value > 1} setValue={ () => {setValue(2)} }/>
            <Star selected={value > 2} setValue={ () => {setValue(3)} }/>
            <Star selected={value > 3} setValue={ () => {setValue(4)} }/>
            <Star selected={value > 4} setValue={ () => {setValue(5)} }/>
            <div><button onClick={()=>{setValue(0)}}>RESET</button></div>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: ()=>void
}

function Star(props: StarPropsType) {

    // return props.selected ? <span style={star}>star </span> : <span>star </span>

    return <span onClick={()=>{props.setValue()}}>
        { props.selected ? <b>star </b> : "star "  }</span>
}