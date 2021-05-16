import './../App.css'
import { Link, useNavigate  } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

    let [name,setName]=useState('')
    let [num,setNum]=useState('5')
    let navigate = useNavigate();

    let handleChange =(e: any)=>{
        e.preventDefault()
        console.log('....')
        navigate(`/quiz/${name}/${num}`, { replace: true });
    }


    return (
        <div className="main-card">
            <h2>Quiz</h2>
            <form onSubmit={handleChange}>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} className='input' width='80%' required placeholder='Enter Name' /> <br />
                <h4>Please Select Number Of Questions</h4>
                <select onChange={(e)=>{setNum(e.target.value)}} >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select><br />
                <button type='submit' className='logBtn'>Start Quiz</button>
            </form>
        </div>
    )
}
// 
export default Login