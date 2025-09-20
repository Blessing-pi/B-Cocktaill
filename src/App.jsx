import Home from "./pages/home"
import 'typeface-poppins'
import {Routes, Route} from "react-router"
import SingleCocktail from "./pages/singleCocktail"
import About from "./pages/about"
import Training from "./pages/training"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
// import { useState } from "react"

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singleCocktail/:id' element={<SingleCocktail/>}/>
      <Route path= '/about' element={<About/>}/>
      <Route path= '/training' element={<Training/>}/>
    </Routes>
    <Footer/>
     </>
  )

}

export default App
