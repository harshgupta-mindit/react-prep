import React, { useReducer } from 'react';
import "./Form.css";
import Table from './Table';

const Form = () => {

    const initialState = {
        firstname: "",
        lastname: "",
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "firstname_change": {
                return {
                    ...state,
                    firstname: action.name
                }
            }
            case "lastname_change": {
                return {
                    ...state,
                    lastname: action.name
                }
            }
            case "message_change": {
                return {
                    ...state,
                    message: action.message
                }
            }
            default:
                return {
                    ...state
                }
        }
    }

    const firstnameChangeHandler = (e) => {
        dispatch({
            type: "firstname_change",
            name: e.target.value
        })
    }
    const lastnameChangeHandler = (e) => {
        dispatch({
            type: "lastname_change",
            name: e.target.value
        })
    }
    const messageChangeHandler = (e) => {
        dispatch({
            type:"message_change",
            message: e.target.value
        })
    }  

    const formSubmitFunc = (e) => {
        if(localStorage.getItem("formData") === null){
            localStorage.setItem("formData", JSON.stringify([{...state}]));
        }
        else{
            const temp = JSON.parse(localStorage.getItem("formData"));
            temp.push(state);
            localStorage.setItem("formData", JSON.stringify(temp))
        }
        e.preventDefault();
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("jkgfdgdgd");

    return (
        <>
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h2>useReducer Form</h2>
                    <p></p>
                </div>
                <div className="row">
                    <div className="column">
                        <form onSubmit={formSubmitFunc}>
                            <label for="fname">First Name</label>
                            <input onChange={(e) => firstnameChangeHandler(e)} type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label for="lname">Last Name</label>
                            <input onChange={(e) => lastnameChangeHandler(e)} type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label for="subject">Subject</label>
                            <textarea onChange={(e) => messageChangeHandler(e)} id="subject" name="subject" placeholder="Write something.." style={{ height: "170px" }}></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        
        
    
          <Table data={JSON.parse(localStorage.getItem("formData"))} />
        

        </>
    )
}

export default Form