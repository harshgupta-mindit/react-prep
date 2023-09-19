import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    
    // Counter 1 Func----------------------------------------
    const count1AddFunc = () => {
        setcount1(prevState => prevState + 1);
    }
    const count1SubFunc = () => {
        setcount1(prevState => prevState - 1);
    }
    // Counter 1 Func----------------------------------------


    // Counter 2 Func----------------------------------------
    const count2AddFunc = () => {
        setcount2(prevState => prevState + 1);
    }
    const count2SubFunc = () => {
        setcount2(prevState => prevState - 1);
    }
    // Counter 2 Func----------------------------------------



    const isEven = useMemo(() => {
        // Expensive Calculation
        for(let i=0; i<1000000000; i++){}

        console.log("---")
        return count1%2===0;
    },[count1])
  
    return (
    <>
        <button onClick={count1AddFunc}>Counter 1 Addition</button>
        <p>Count : {count1}</p> | Num is {isEven ? "Even": "Odd"}<p></p>
        <button onClick={count1SubFunc}>Counter 1 Subtraction</button>

        <hr />

        <button onClick={count2AddFunc}>Counter 2 Addition</button>
        <p>Count : {count2}</p>
        <button onClick={count2SubFunc}>Counter 2 Subtraction</button>
    </>
  )
}

export default UseMemo