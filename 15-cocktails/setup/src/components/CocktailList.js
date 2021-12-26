import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, drinks } = useGlobalContext();
  const [list, setList] = useState([]);
  // const drinksList = cocktailList && cocktailList.drinks;
  // const { drinks } = cocktailList || {};

  useEffect(() => {
    setList(drinks);
  }, [drinks]);

  console.log(
    "🚀TCL: ~ file: CocktailList.js ~ line 11 ~ CocktailList ~ drinks",
    list
  );
  // if (drinks && drinks[0]) {
  //   console.log(
  //     "🚀TCL: ~ file: CocktailList.js ~ line 8 ~ CocktailList ~ CocktailList",
  //     drinks[0]
  //   );
  // }
  // const loading = true;
  if (loading) {
    return <Loading />;
  }
  if (drinks.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {list &&
          list.map((drink) => <Cocktail key={drink.idDrink} {...drink} />)}
      </div>
    </section>
  );
};

export default CocktailList;
