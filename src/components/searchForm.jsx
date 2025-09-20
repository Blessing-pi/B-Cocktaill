import React from 'react'
import '../styles/searchForm.css'

const SearchForm = ({searchTerm, setSearchTerm}) => {
  return (
<div className='search-form'>
                <form>
                    <div className="form-control">
                        <label htmlFor="search-input">Search for your favourite <span>cocktail</span> </label>
                        <input 
                           type="text" 
                           id='search-input' 
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           />
                    </div>
                </form>
            </div>
  )
}

export default SearchForm