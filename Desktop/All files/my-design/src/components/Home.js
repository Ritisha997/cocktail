import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/elip-1.png'
import logo2 from './img/elip-s1.png'
import { useEffect } from 'react'
import Navbar from './Navbar'

const Home = () => {
  const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const [feature, setFeature] = useState([])

  const FetchDrinks = async()=>{
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data)
    const drink = data.drinks
      console.log(drink)
      const newCo = drink.filter(item=>{
        return item.strCategory == 'Shot'
      })
      console.log(newCo)
      setFeature(newCo)
  }
  console.log(feature)
React.useEffect(()=>{
      FetchDrinks()
},[])

  return (
      <section className='center-btn'>
        <div className='bg-img'>
          <img className='logo1' src={logo2}/>
          <img className='logo2' src={logo}/>
        </div>
       <Navbar/>
        <div className='iterator'>
          {feature.map(item=>{
            return <div key={item.idDrink}>
            <img className='img-drink' src={item.strDrinkThumb}/>
            <p className='para'>{item.strDrink}</p>
            <p className='para'>{item.strGlass}</p>
            </div>
          })}
        </div>
       <Link className='btn' to='/CocktailList'>get cocktails</Link>
      </section>
  )
}

export default Home
