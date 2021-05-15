import './../App.css'
import { Link,  } from "react-router-dom";
import { useState } from 'react';

const Login = () => {



    let [name,setName]=useState('')
    let [num,setNum]=useState('5')
    let handleChange =(e: any)=>{
        e.preventDefault()
        // console.log('....')
        // history.push(`/quiz/${name}/${num}`);
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
                <Link to={`/quiz/${name}/${num}`}>
                <button type='submit' className='logBtn'>Start Quiz</button>
                </Link>
            </form>
        </div>
    )
}
// 
export default Login