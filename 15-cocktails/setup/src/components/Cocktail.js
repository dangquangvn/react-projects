import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  strAlcoholic,
  strDrink,
  strGlass,
  strDrinkThumb,
  idDrink,
}) => {
  return (
    <article className='cocktail'>
      <div className='cocktail-img'>
        <img src={strDrinkThumb} alt={strGlass} />
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`/cocktail/${idDrink}`}
          className='btn btn-primary btn-details'
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
