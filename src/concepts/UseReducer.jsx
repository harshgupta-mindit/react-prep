import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialValue = 1;

    const reducer = (state, action) => {
        switch (action) {
            case "ADD1":
                return state + 1;
            default:
                return state + 100;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <button onClick={()=> dispatch("ADD1")}>Add 1</button>
            <ul>
                <li>{state}</li>
            </ul>

            {/* <form action="">
                <input type="text" onChange={()=> dispatch("name_update")} name="" id="" />
                <input type="text" onChange={()=> dispatch("age_update")} name="" id="" />
            </form> */}
        </>
    )
}

export default UseReducer