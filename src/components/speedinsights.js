import React, { useState } from 'react'
import "./style.css";
export default function Speedins(props){
        const [obj , setobj]=useState( props.detail.result[0].items[0].page_timing);
    return(<>
        <h1 className='h1'>Speed Insights </h1>
        <div className='datacon1'>
            <div className='speed zoom'><h3>{obj.time_to_secure_connection}</h3><p>Time to Secure Connection</p></div>
            <div className='speed zoom'><h3>{obj.time_to_interactive}</h3><p>Time to Interactive</p></div>
            <div className='speed zoom'><h3>{obj.waiting_time}</h3><p>Waiting Time</p></div>
            <div className='speed zoom'><h3>{obj.download_time}</h3><p>Download Time</p></div>
            <div className='speed zoom'><h3>{obj.dom_complete}</h3><p>DOM Complete</p></div>
            <div className='speed zoom'><h3>{obj.largest_contentful_paint}</h3><p>Largest Contentful Paint</p></div>
        </div>
    
        </>
    );
}