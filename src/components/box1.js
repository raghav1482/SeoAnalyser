import React from 'react'
export default function Box1(props){
    return(<>
        <div className='box1 zoom'>
        <p>{props.heading} : {props.value}</p>
        </div>
    </>);
}