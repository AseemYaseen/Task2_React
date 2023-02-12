import React from 'react'
import { useState } from 'react'

const StateExam = () => {
    const [count, setCount]= useState(0); // count = The now value , setCount i use it to change the value , use state = start Value
    const [text, setText]= useState('text'); 
    // console.log(count);

    const increase=()=>{
        setCount(count +1)
    }
    const decrease=()=>{
        setCount(count -1)
    }

    const textChange=(event)=>{
        setText(event.target.value)
    }
    
  return (
    <div>
        <button className='button' onClick={increase}>+</button>
        <button className='button' onClick={decrease}>-</button>
        <label><p>Count is </p>{count}</label><br/>


        <input type="text" value={text} onChange={textChange}/>
        <label><p>Your Text is </p>{text}</label>
    </div>
  )
}

export default StateExam