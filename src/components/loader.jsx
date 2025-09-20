import React, { useState , useEffect} from 'react'
import {ScaleLoader} from "react-spinners"; 
import '../styles/loader.css'

const Loader = () => {
  const colors = ['#002800ff', '#FFA500'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() =>{
    const interval= setInterval(()=>{
      setColorIndex(prev=>(prev + 1)% colors.length)
    }, 1000);
    return()=>clearInterval(interval);
  },[])
  return (
    <div className='spinner-container'>
      <ScaleLoader 
      key={colorIndex}
      color={colors[colorIndex]}/>
    </div>
  )
}

export default Loader