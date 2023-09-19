import React, { useContext, useState } from 'react'
import "./CarouselCards.css";
import { ThemeContext } from '../App';
// import { DATA } from "../data";

import LocalForm from './LocalForm';

const CarouselCards = () => {

  const { darkMode } = useContext(ThemeContext);

  // Track the index
  const [index, setIndex] = useState(0);
  
  // Check state to disable Prev and Next Button in Carousel
  const [prevBtnDisable, setPrevBtnDisable] = useState(false);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  
  // Carousel Data
  const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("allData")));
  
  // Get Specfic data by index
  const CarouselData = allData[index];


  console.log(allData)
  console.log("DARK MODE RESULT : ", darkMode);

  // Prev Button Clicked Function
  const prevImgFunc = () => {
    if (index <= 0) {
      setPrevBtnDisable(true);
    }
    else {
      setNextBtnDisable(false);
      setIndex(prev => prev - 1);
    }
  }

  // Next Button Clicked Functions
  const nextImgFunc = () => {
    if (index > allData.length - 2) {
      setNextBtnDisable(true);
    }
    else {
      setPrevBtnDisable(false);
      setIndex(prev => prev + 1);

    }
  }

  const darkThemeStyle = {
    backgroundColor: "black",
    color: "white"
  }


  return (
    <>
      <div style={darkMode ? darkThemeStyle : {}} className='caro-main'>
        <button onClick={prevImgFunc} disabled={prevBtnDisable} className="caro-left-arrow">{'<'}</button>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '90%' }}>
          <img className='caro-img' src={CarouselData.url} alt="" />
          <p style={{ color: "white", fontSize: '25px' }}>{CarouselData.name} <i style={{ fontSize: '10px' }}>by {CarouselData.artist}</i></p>
        </div>
        <button disabled={nextBtnDisable} onClick={nextImgFunc} className="caro-right-arrow">{'>'}</button>

      </div>
      <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
        {
          allData.length!==0 && allData.map((pin, key) => {
            return <>
              {
                pin.name == allData[index].name ? <div style={{ width: '15px', height: '15px', backgroundColor: '#b668ff', margin: '3px', cursor: 'pointer', borderRadius:"20px" }}></div>
                  :
                  <div onClick={() => (setIndex(key), console.log(`You clicked on mapped data with : ${pin.artist}`))} style={{ width: '5px', height: '5px', backgroundColor: '#000', margin: '3px', cursor: 'pointer' }}></div>

              }
            </>
          })
        }
      </div>


        <h3>Add data in Carousel</h3>
        <LocalForm allData={allData} setAllData={setAllData}/>

    </>
  )
}

export default CarouselCards;