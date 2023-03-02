import React from 'react'
import { useParams } from 'react-router-dom';
import { setTheCocktail } from '../reducer';
import { reducer } from '../reducer';


const SingleCocktail = () => {
  // const fills = cocktail.filter(item =>)
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const {id} = useParams();
  console.log(useParams())
  
  const FetchSingle = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  }
  React.useEffect(()=>{
    FetchSingle();
  },[])



  return (
    <div>
      {id}
    </div>
  )
}

export default SingleCocktail


