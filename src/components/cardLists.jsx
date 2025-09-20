import Cards from "./cards";
import '../styles/cardLists.css'
const CardLists = ({cocktailList}) => {
  return (
    <div>
        <h3 className="card-list">Cocktails:</h3>
          <div className="card-lists">
            {cocktailList.map(cocktail=>{
              return <Cards key={cocktail.idDrink} cocktail={cocktail} />
            })}
          </div>
    </div>
  )
}

export default CardLists;