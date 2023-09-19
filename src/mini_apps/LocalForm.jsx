import React, { memo, useState } from 'react'

const LocalForm = ({allData, setAllData}) => {

    const [formEntry, setFormEntry] = useState({ name: "", artist: "", url: "" });
    

    const onInputChange = (e) => {
        if(e.target.name == "url"){
            const image = e.target.files[0];
            const reader = new FileReader();
    
            reader.onload = function (event) {
                console.log(event.target.result);
                setFormEntry({
                    ...formEntry,
                    [e.target.name]: event.target.result
                })
            }
            reader.readAsDataURL(image);            
        }
        else{
            setFormEntry({
                ...formEntry,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitFunc = (e) => {
        e.preventDefault();
        const allData = localStorage.getItem("allData");
        if(allData === null){
            console.log("Inside If");
            const tempArray = [formEntry];
            localStorage.setItem('allData', JSON.stringify(tempArray))

            setAllData([...tempArray])
        }
        else{
            console.log("Inside Else");
            const tempArray = JSON.parse(allData);
            tempArray.push(formEntry);
            localStorage.setItem("allData", JSON.stringify(tempArray))
            setAllData([...tempArray])
        }
    }

    console.log(formEntry)


    return (
        <>
            <form onSubmit={submitFunc} style={{ display: 'flex', flexDirection: 'column', width: "60%", margin: 'auto' }} >
                <input onChange={onInputChange} required style={{ padding: '10px', fontSize: '20px' }} type="text" name="name" id="" />
                <input onChange={onInputChange} required style={{ padding: '10px', fontSize: '20px' }} type="text" name="artist" id="" />

                <div>
                    <input onChange={onInputChange} required style={{ padding: '10px', fontSize: '20px' }} type="file" name="url" id="" />
                    <label htmlFor=""><img src="" alt="some image" style={{ width: "20px", height: "20px" }} /></label>
                </div>

                <input required style={{ padding: '10px', fontSize: '20px' }} type="submit" value="Submit Entry" />
            </form>
        </>
    )
}

export default memo(LocalForm)