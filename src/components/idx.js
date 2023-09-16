import React ,{useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import "./style.css";
export default function Main(){
    const [name, setName] = useState("");
    const[nm , setnm] = useState("");
    const[formvisible , setformvisible] = useState(true);
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        setnm(name);
        setformvisible(false);
        navigate("/seodata" , {state:{site:name}});
      }
    return(<>

        <div className='search'>
        <h1 className='glow'>Site Analyser</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="sitename" className='h1' >Enter Site Address </label>
        <input type="text" id="sitename" name="sitename"  placeholder='Enter as : abc.com' onChange={(e) => setName(e.target.value)}/>
        <button type='submit' className='button-27'>Submit</button>
        </form>
        </div>
    </>);
}