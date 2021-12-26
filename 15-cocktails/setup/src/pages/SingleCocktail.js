import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { drinks } = useGlobalContext();
  const { id } = useParams();
  console.log(
    "🚀TCL: ~ file: SingleCocktail.js ~ line 8 ~ SingleCocktail ~ id",
    id
  );
  const {
    strAlcoholic,
    strDrink,
    strGlass,
    strDrinkThumb,
    idDrink,
    strCategory,
    strInstructions,
  } = (drinks && drinks.find((item) => item.idDrink === id)) || {};
  const cocktail = (drinks && drinks.find((item) => item.idDrink === id)) || {};
  console.log(
    "🚀TCL: ~ file: SingleCocktail.js ~ line 19 ~ getCurrentCocktail ~ cocktail",
    cocktail,
    typeof cocktail
  );
  return (
    <div className='section cocktail-section'>
      <Link to={`/`} className='btn btn-primary '>
        Back Home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {strDrink}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {strCategory}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {strGlass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {cocktail &&
              Object.entries(cocktail).map((item, index) => {
                const key = item[0].substring(0, 13).toLowerCase();
                const value = item[1];
                if (key === "stringredient" && value !== null) {
                  return <span key={index}>{value}</span>;
                }
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
