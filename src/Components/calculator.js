import React from 'react'
import { useState } from 'react'

const Calculator = ()=> {
    const [value, setValue]= useState();
    const [value2, setValue2]= useState();
    const [result, result1]= useState();

    const inpu1=(event)=>{
        setValue(event.target.value)
    }

    const inpu2=(event)=>{
        setValue2(event.target.value)
    }

    const plus=()=>{
        result1(value + value2)
    }
    const minus=()=>{
        result1(value - value2)
    }
    const Multi=()=>{
        result1(value * value2)
    }
    const Division=()=>{
        result1(value / value2)
    }

    
  return (
    <div>
        <input type="number" className='input01' onChange={inpu1}/>
        <button className='button' onClick={plus}>+</button>
        <button className='button' onClick={minus}>-</button>
        <button className='button' onClick={Multi}>*</button>
        <button className='button' onClick={Division}>/</button>
        <input type='text' className='input01'onChange={inpu2} />
        <br/>
        <span>{result}</span>
    </div>
  )
}

export default Calculator
