import React from 'react';
import Box1 from './box1';
import Onpage from './onpage';
import Htags from './htags';
import Speedins from './speedinsights';
import Social from './socialmedia';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PrintIcon from '@mui/icons-material/Print';
import {IconButton} from "@mui/material";
import "./style.css";
export default function Details(props){
    const navigate = useNavigate();
    function myfun(){
        navigate("/");
    }
    function printpage(){
        window.print();
    }
    return(<>
        <h1 className='h1 glow' style={{fontSize:"40px"}}>Details about : <span style={{color:"cyan"}}>{props.name}</span></h1>
        <div className='buttoncnt'>
        <IconButton onClick={myfun}  className='back'><ArrowBackIosNewIcon/></IconButton>
        <IconButton onClick={printpage}  className='back'><PrintIcon/></IconButton>
        </div>

        <Onpage detail = {props.detail}/>
        <Htags detail = {props.detail}/>
        <Speedins detail = {props.detail}/>
        <Social detail={props.detail}/>
        <div style={{width: "100%",backgroundColor: "rgb(255, 255, 255)",padding:"20px 0",textAlign: "center" , marginTop:"30px"}}>Made with <img src="https://media.tenor.com/LX-hgeFkKVMAAAAi/heart-red.gif" style={{width:"22px"}}/>by Raghvendra Tiwari</div>
    </>);
}