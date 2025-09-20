import '../styles/card.css'
import {Link} from 'react-router'
const Cards = ({cocktail}) => {
  const {  strDrink, strDrinkThumb, strCategory,strGlass, idDrink } = cocktail;
  return (

     <article className="card">
          <img src={strDrinkThumb} alt={strDrink} />
         <h3>{strDrink}</h3>
         <p>
            <span className="label">Category :</span>
            {strCategory}</p>
         <p>
          <span className="label">Serving Glass :</span>
            {strGlass}</p>
          <Link to={`/singleCocktail/${idDrink}`} > 
               <button className="details-btn">More details </button>
          </Link>
     </article>
  )
}

export default Cards;