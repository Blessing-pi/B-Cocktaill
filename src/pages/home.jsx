import CardLists from '../components/cardLists'
import Navbar from '../components/navbar'
import SearchForm from '../components/searchForm'
import Loader from '../components/loader'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [cocktailList, setCocktailList] = useState([])

  const searchItem = searchTerm ? searchTerm : 'a'
  const fetchCocktails = async () => {
    setLoading(true)
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`)
    const data = await response.json()
    setCocktailList(data.drinks)
    setLoading(false)
  }

  useEffect(() => {
    fetchCocktails()
  }, [searchTerm])

    return (
   <>
     <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     {
      loading ?
       <Loader/> :
      <CardLists cocktailList={cocktailList} />
     }
      
   </>

   

  )
}

export default Home