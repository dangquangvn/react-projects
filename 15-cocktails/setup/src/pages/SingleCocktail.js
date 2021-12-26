import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  // const { drinks } = useGlobalContext();
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  // const {
  //   strAlcoholic,
  //   strDrink,
  //   strGlass,
  //   strDrinkThumb,
  //   idDrink,
  //   strCategory,
  //   strInstructions,
  // } = (drinks && drinks.find((item) => item.idDrink === id)) || {};
  // const cocktail = (drinks && drinks.find((item) => item.idDrink === id)) || {};
  // console.log(
  //   "🚀TCL: ~ file: SingleCocktail.js ~ line 19 ~ getCurrentCocktail ~ cocktail",
  //   cocktail,
  //   typeof cocktail
  // );
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;

    return (
      <div className='section cocktail-section'>
        <Link to={`/`} className='btn btn-primary '>
          Back Home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name: </span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category: </span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info: </span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass: </span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>instructions: </span>
              {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients: </span>
              {/* {cocktail &&
              Object.entries(cocktail).map((item, index) => {
                const key = item[0].substring(0, 13).toLowerCase();
                const value = item[1];
                if (key === "stringredient" && value !== null) {
                  return <span key={index}>{value}</span>;
                }
              })} */}
              {cocktail &&
                ingredients &&
                ingredients.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCocktail;
