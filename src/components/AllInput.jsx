import React, { memo, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import SubmitButton from "../assets/submit_img.png";

const AllInput = () => {

    const [formData, setFormData] = useState({});

    const onFormChangeHandle = (e) => {
        // const formDataKey = e.target.name;
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    console.log("FormDATA:" ,formData)


    return (
        <>
            <Container>
                <Row>
                    <h1>All Form Input Submission in Local Storage</h1>
                </Row>
                <form style={{ display: 'flex', flexDirection: "column" }} action="">

                    <label htmlFor="name">
                        Name:
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="name" type="text" placeholder='Name Text' name="name" />
                    </label>
                    <label htmlFor="form-email">
                        Email :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-email" type="email" placeholder='Email' name="email" />
                    </label>

                    <label htmlFor="" style={{ display: 'flex', flexDirection: 'column' }}>
                        Select your role :
                        <label htmlFor="position-react">
                            <input onChange={(e)=> (onFormChangeHandle(e))} id="position-react" placeholder='React Engineer' value="React Engineer" type="checkbox" name="role" />
                            React Engineer
                        </label>
                        <label htmlFor="position-software">
                            <input onChange={(e)=> (onFormChangeHandle(e))} id="position-software" placeholder='Software Engineer' value="Software Engineer" type="checkbox" name="role" />
                            Software Engineer
                        </label>
                    </label>

                    <label htmlFor="color-picker">
                        Pick Your Desired Color:
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="color-picker" type="color" value="#fff909" name="color" />
                    </label>


                    <label htmlFor="form-date">
                        Select Date :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-date" type="date" name="date" />
                    </label>

                    <label htmlFor="form-date-time">
                        Select Date with Time :
                        <input onChange={(e)=> (onFormChangeHandle(e))} ID="form-date-time" type="datetime-local" name="date-time"/>

                    </label>

                    <label htmlFor="form-upload">
                        File Upload :
                        <input onChange={(e)=> (onFormChangeHandle(e))} ID="form-upload" type="file" name="upload" />
                    </label>

                    <label htmlFor="form-month">
                        Month and Year :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-month" type="month" name="month" />
                    </label>

                    <label htmlFor="form-number">
                        Number :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-number" type="number" name='number' />
                    </label>

                    <label htmlFor="form-password">
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-password" type="password" name="password"/>
                    </label>

                    <label htmlFor="form-radio">
                        <label htmlFor="radio-1">
                            Option 1
                            <input onChange={(e)=> (onFormChangeHandle(e))} id="radio-1" name="radio" type="radio" value="radio-option-1"/>
                        </label>
                        <label htmlFor="radio-2">
                            Option 2
                            <input onChange={(e)=> (onFormChangeHandle(e))} id="radio-2" name="radio" type="radio" value="radio-option-2" />
                        </label>
                        <label htmlFor="radio-3">
                            Option 3
                            <input onChange={(e)=> (onFormChangeHandle(e))} name="radio" id="radio-3" type="radio" value="radio-option-3" />
                        </label>
                        <label htmlFor="radio-4">
                            Option 4
                            <input onChange={(e)=> (onFormChangeHandle(e))} name="radio" id="radio-4" type="radio" value="radio-option-4" />
                        </label>
                    </label>

                    <label htmlFor="form-range">
                        Range between 0 to 100 :
                        <input onChange={(e)=> (onFormChangeHandle(e))} style={{ width: "1000px" }} type="range" step="10" min="0" max="100" name="range" />
                    </label>
                    <label htmlFor="form-tel">
                        Tel Input :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-tel" type="tel" name="tel"/>
                    </label>

                    <label htmlFor="form-time">
                        Time :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-time" type="time" name="time" />
                    </label>

                    <label htmlFor="form-url">
                        URL Input :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-url" type="url" name="url"/>
                    </label>

                    <label htmlFor="form-week">
                        Week Input :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-week" type="week" name="week"/>
                    </label>

                    <label htmlFor="form-reset">
                        Reset Form :
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-reset" type="reset" />
                    </label>

                    <label htmlFor="form-hidden">
                        Hidden : 
                        <input onChange={(e)=> (onFormChangeHandle(e))} id="form-hidden" type="button" />
                    </label>

                    <select onChange={(e)=> (onFormChangeHandle(e))} name="dropdown-option" id="">
                        <option selected disabled>Select Options</option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                        <option value="option-4">Option 4</option>
                    </select>
                    {/* <input onChange={(e)=> (onFormChangeHandle(e))} type="search" /> */}
                    {/* <input onChange={(e)=> (onFormChangeHandle(e))} type="hidden" /> */}
                    <input type="image" src={SubmitButton} style={{width:'100px'}} />
                    <input type="submit" />
                </form>
            </Container>
        </>
    )
}

export default memo(AllInput)