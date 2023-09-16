import React from 'react'
import "./style.css";
export default function Social(props){
    var social = props.detail.result[0].items[0].meta.social_media_tags;
    return(<>
            <h1 className='h1'>Social Media</h1>
            <div className='datacon1' >
                <div className='social'>
                    <ul>
                        <li>og:type : {social["og:type"]}</li>
                        <li>og:url : {social["og:url"]}</li>
                        <li>og:title : {social["og:title"]}</li>
                        <li>og:image : {social["og:image"]}</li>
                        <li>og:image:width : {social["og:image:width"]}</li>
                        <li>og:image:height: {social["og:image:height"]}</li>
                        <li>og:description : {social["og:description"]}</li>
                    </ul>
                </div>
                <div style={{display:"flex" , flexDirection:"column" , width:"40%" , borderRadius:"20px" , overflow:"hidden"}}>
                    <img src={social["og:image"]} className='socialimg'></img>
                    <div className='imgdetails'><h4>{social["og:title"]}</h4><p>{social["og:description"]}</p></div>
                </div>
            </div>
        </>
    );
}