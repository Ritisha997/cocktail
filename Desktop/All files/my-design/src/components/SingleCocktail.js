import React from 'react'
import { useParams } from 'react-router-dom';
import { setTheCocktail } from '../reducer';
import { reducer } from '../reducer';
import useDispatch from 'react-redux'

const SingleCocktail = () => {
  // const fills = cocktail.filter(item =>)
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const {id} = useParams();
  console.log(useParams())
  const dispatch = useDispatch()
  const FetchSingle = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  }
  dispatch(setTheCocktail(data))
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


