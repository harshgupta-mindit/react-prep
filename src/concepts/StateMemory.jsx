import React, {  memo, useState } from 'react';

import { DATA } from "../data.js";

const StateMemory = () => {

    const [index, setindex] = useState(0);
    const [nextButtonDisable, setnextButtonDisable] = useState(false);
    const [prevButtonDisable, setprevButtonDisable] = useState(true);

    const array_data = DATA[index];

    const nextIndexFunc = () => {
        if(index > DATA.length-2){
            setnextButtonDisable(true)
        }
        else{
            setindex(prev => (prev + 1));
        }
        setprevButtonDisable(false);
    }

    const prevIndexFunc = () => {
        if(index <= 0){
            setprevButtonDisable(true);
        }
        else{
            setindex(prev => (prev - 1));
        }
        setnextButtonDisable(false);
    }

    console.log("State meory ")

    const fileUpload = (e) => {
        const image = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event){
            console.log(event.target.result);
        }
        reader.readAsDataURL(image);
        // console.log("imageURL: ",  reader);
    }

    return (
        <>
            {/* <div>StateMemory</div>

            <button disabled={prevButtonDisable} onClick={prevIndexFunc}>prev</button>
            <button disabled={nextButtonDisable} onClick={nextIndexFunc}>Next</button>
            <i>Page at {index + 1}</i>

            <p>Name : {array_data.name}</p>
            <p>Artist : {array_data.artist}</p>
            <p>Description : {array_data.description}</p>
            <p>ALT : {array_data.url}</p>
            <p>Image : {array_data.alt}</p>
            <img src={array_data.url} alt="" /> */}

            <label htmlFor="">A test to upload image in localstorage : <input onChange={fileUpload} type="file" name="" id="" placeholder='Upload File here' /></label>

        </>
    )
}

export default memo(StateMemory);