import React, { useEffect, useState } from 'react';
import { question } from './../types/demoTypes'
import './../App.css'
import xdata from './../dummy.json'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


let cdata = xdata.sort(() => Math.random() - 0.5)


const Card = () => {
    let [step, setStep] = useState(0)
    let [userAns, setUserAns] = useState('')
    let [score, setScore] = useState(0)
    let [data, setData] = useState<Array<question>>(cdata)
    const { name, num } = useParams()

    useEffect(() => {
        if (+num === 5) {
            setData(data.slice(10))
        } else if (+num === 10) {
            setData(data.slice(5))
        } else {
            setData(data.slice(0))
        }
    }, [])

    const handleChange = (e: any) => {
        e.preventDefault()
        if (userAns === data[step].correctAns) {
            setScore(++score)
            console.log(score)
        } else {
            console.log("wrong");
        }
        setStep(++step)
        setUserAns('');
    }


    if (step == data.length) {
        return (
            <div style={{ textAlign: 'center' }} className='main-question-card'>
                <h2>{name} Your Score is {score}</h2>
                <Link to="/">
                    <button className='logBtn' style={{ width: '80%' }}>Try Again</button>
                </Link>
            </div>
        )
    }


    return (
        <div className='main-question-card'>
            <h4>Question No: {step + 1}</h4>
            <h3>{data[step].question}</h3>
            <form onSubmit={handleChange}>

                {data[step].options.map((obj: string) => {
                    return (

                        <label className="radio">
                            <br />
                            <input
                                checked={obj == userAns}
                                type="radio"
                                name="opt"
                                required
                                value={obj}
                                onChange={(e) => { setUserAns(e.target.value) }}
                            />
                            {obj}
                        </label>
                    )
                })}
                <br />
                <button className='logBtn' type='submit' style={{ width: '80%' }}>Next</button>
            </form>
        </div>
    )
}

export default Card;