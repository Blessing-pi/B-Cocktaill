import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../styles/singleCocktail.css'
import {Link} from 'react-router'
const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();

      if (Array.isArray(data.drinks)) {
        setCocktail(data.drinks[0]);
      } else {
        setCocktail(null);
      }
    } catch (err) {
      console.log("Error fetching cocktail:", err);
      setCocktail(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!cocktail) return <div>No cocktail found</div>;

  return (
    <div className="single-cocktail">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="250" />
      <p>
        <strong>Category: </strong>
        {cocktail.strCategory}
      </p>
      <p>
        <strong>Glass: </strong>
        {cocktail.strGlass}
      </p>
      <p className='instructions'>
        <strong>Instructions: </strong>
        {cocktail.strInstructions}
      </p>
      <Link to="/" className="btn">
             ⬅ Back Home
      </Link>
      
    </div>

  );
};

export default SingleCocktail;
