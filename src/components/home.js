import React, { useEffect, useState } from 'react';
import api from "./api.json";
import Details from './details';
import "./style.css";
import { useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home(props){
  const [result , setresult]=useState();
  const location = useLocation(); 
  useEffect(()=>{
  fetch('https://api.dataforseo.com/v3/on_page/instant_pages', {
  method: 'POST',
  body: JSON.stringify([{
    "url": 'https://' + location.state.site + '/',
    "enable_javascript": true,
    "custom_js": "meta = {}; meta.url = document.URL; meta;"
  }]),
  headers: {
    'Authorization': 'Basic '+btoa('raghvendra1482002@gmail.com:dc0cd9b4d5ef00de'),
    'Content-type': 'application/json; charset=UTF-8'
  }
  })
  .then(function(response){ 
  return response.json()}).then(data => setresult(data.tasks))
  .catch(error => console.error('Error:', error)); 
  },[]);
  console.log(result);
    if(result){
      return(
        <>
        <div className='main-cont'>
        <Details detail={result[0]} name= {location.state.site}/>
        </div>
        </>
    );
    }
    else{
      return(<><div style={{height:"100vh" , display:"flex" , justifyContent:"center" , alignItems:"center"}}><CircularProgress /></div></>);
    }

}
