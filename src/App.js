import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import StateMemory from './concepts/StateMemory';
import UseReducer from './concepts/UseReducer';
import CarouselCards from './mini_apps/CarouselCards';

import React, { createContext, useEffect, useState } from "react";

// Problem Components
import Dropdown_problem from "./test_problem/Dropdown_problem";

import { useGetTodo } from './hooks/custom_hooks/useGetTodo';
import AllInput from './components/AllInput';

import {Routes, Route} from "react-router-dom";

export const ThemeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const buildArray = [
    <Navbar />,
    <CarouselCards />,
    <StateMemory />,
    <UseReducer />,
    <Form />,
    <Dropdown_problem />
  ]

  const darkTheme = {
    backgroundColor: darkMode ? "#6034dc" : "#9376E0",
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div style={darkTheme} className='app-main'>
          <button className='darkMode-btn' style={{backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white"}} onClick={() => setDarkMode(prev => !prev)}>Change to {darkMode ? <>Light Mode &#9728;</> : <>Dark Mode &#9770;</>}</button>
          {/* <UseMemo/>   */}
        </div>       
      </ThemeContext.Provider>


      <Routes>
        <Route path='/all-input' element={<AllInput/>}/>
      </Routes>

    </>
  );
}

export default App;
