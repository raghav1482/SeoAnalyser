import React from 'react'
import "./style.css";
export default function Htags(props){
    return(<>
        <h1 className='h1'>H TAGS</h1>
        <div className='datacon1'>
            <p style={{width:"100%"}}>We found following H tags</p>
            <div className='htags zoom'>
                <h3>H1 tags : </h3>
                <ul>
                {(props.detail.result[0].items[0].meta.htags.h1)?props.detail.result[0].items[0].meta.htags.h1.map((data)=>{return <li>{data}</li>}):"NONE"}
                </ul>
            </div>
            <div className='htags zoom'>
                <h3>H2 tags : </h3>
                <ul>
                {(props.detail.result[0].items[0].meta.htags.h2)?props.detail.result[0].items[0].meta.htags.h2.map((data)=>{return <li>{data}</li>}):"NONE"}</ul>
            </div>
            <div className='htags zoom'>
                <h3>H3 tags : </h3>
                <ul>
                {(props.detail.result[0].items[0].meta.htags.h3)?props.detail.result[0].items[0].meta.htags.h3.map((data)=>{return <li>{data}</li>}):"NONE"}</ul>
            </div>
            <div className='htags zoom'>
                <h3>H4 tags : </h3>
                <ul>
                {(props.detail.result[0].items[0].meta.htags.h4)?props.detail.result[0].items[0].meta.htags.h4.map((data)=>{return <li>{data}</li>}):"NONE"}</ul>
            </div>
            <div className='htags zoom'>
                <h3>H5 tags : </h3>
                <ul>
                {(props.detail.result[0].items[0].meta.htags.h5)?props.detail.result[0].items[0].meta.htags.h5.map((data)=>{return <li>{data}</li>}):"NONE"}</ul>
            </div>
        </div>
        </>
    );
}