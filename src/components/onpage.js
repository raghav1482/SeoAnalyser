import React from 'react'
import "./style.css";
import Box1 from './box1';
import Checks from './checks';
export default function Onpage(props){
        var obj = props.detail.result[0].items[0];
    return(<>
        <h1 className='h1'>On Page Results</h1>
        <div className='datacon1'>

        <Box1 value={obj.onpage_score} heading="On-Page Score:"/>
        <Box1 value={obj.meta.internal_links_count} heading="Internal Links"/>
        <Box1 value={obj.meta.images_count} heading="Number of Images"/>
        <Box1 value={obj.meta.images_size} heading="Images Size"/>
        <Box1 value={obj.meta.scripts_count} heading="Scripts"/>
        <Box1 value={obj.meta.scripts_size} heading="Scripts Size"/>
        <Box1 value={obj.meta.content.plain_text_size} heading="Plain Text Size"/>
        <Box1 value={obj.meta.content.plain_text_rate} heading="Plain Text Rate"/>
        <Box1 value={obj.meta.content.plain_text_word_count} heading="Plain Text Word Count"/>
        <Box1 value={obj.meta.content.automated_readability_index} heading="Automated Readability Index"/>
        <Box1 value={obj.meta.content.coleman_liau_readability_index} heading="Coleman Liau Readability Index"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.dale_chall_readability_index} heading="Dale Chall Readability Index"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.flesch_kincaid_readability_index} heading="Flesch Kincaid Readability Index"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.smog_readability_index} heading="Smog Readability Index"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.description_to_content_consistency} heading="Description to Content Consistency"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.title_to_content_consistency} heading="Title to Content Consistency"/>
        <Box1 value={props.detail.result[0].items[0].meta.content.meta_keywords_to_content_consistency} heading="Meta Keywords to Content Consistency"/>
        <div style={{width:"100%" , display:"flex" , flexWrap:"wrap" , justifyContent:"center" , alignItems:"center"}}>
        <Checks details = {props.detail}/></div>
        </div>
        </>
    );
}