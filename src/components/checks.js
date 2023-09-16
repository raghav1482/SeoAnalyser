import React from 'react'
import "./style.css";
export default function Checks(props){
    return(<>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.duplicate_title_tag?'#2a962a':'#c42e29'}`}}></span>Duplicate Title</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.https_to_http_links?'#2a962a':'#c42e29'}`}}></span>HTTPS to HTTP Links</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.is_4xx_code?'#2a962a':'#c42e29'}`}}></span>Is 4xx Code</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.canonical?'#2a962a':'#c42e29'}`}}></span>Canonical</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.has_html_doctype?'#2a962a':'#c42e29'}`}}></span>Has HTML Doctype</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.no_image_alt?'#2a962a':'#c42e29'}`}}></span>No Image Alt</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].cache_control.cachable?'#2a962a':'#c42e29'}`}}></span>Cache control</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.no_h1_tag?'#2a962a':'#c42e29'}`}}></span>No H1 Tag</h3>
            </div>
            <div className='checks zoom' >
                <h3><span className='tick'style={{backgroundColor:`${props.details.result[0].items[0].checks.is_broken?'#2a962a':'#c42e29'}`}}></span>Is Broken</h3>
            </div>
        </>
    );
}