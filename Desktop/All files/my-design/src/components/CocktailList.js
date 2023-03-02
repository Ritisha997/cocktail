import React, { useContext, useState } from 'react'
import {useGlobalContext} from '../context'
import Button from './Button'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import SingleCocktail from './SingleCocktail'


const CocktailList = () => {
  // const { cocktails, loading } = useGlobalContext()
  const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const [cocktail, setCocktail] = useState([]);
const [cocktails, setCocktails] = useState([]);
const [categories, setCategories] = useState('all');
// const [category, setCategory] = useState([]);
const [loading,setLoading] = useState(false);
const [searchTerm, setSearchTerm] = useState('')
// const [categories, setCategories] = useState(allCategories)
const FetchDrinks = async() =>{
 
    setLoading(true)
    try {
     
      const response = await fetch(`${url}`);
      const data = await response.json();
  
     const drink = data.drinks
     console.log(data)
     console.log(drink)
    console.log(drink[0].strDrink)
     
  
      const newCock = drink.map(item =>{
      
        
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strCategory
        } = item
  
        return {
          
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          category: strCategory
        }
      })
      setCocktail(newCock)
       setCocktails(newCock)
      //  setCategory(newCock)
       
        setLoading(false)

       
    } catch (error) {
      
    }

}
console.log(cocktail)
// const allCategories = ['all', ...new Set(cocktail.map((item) => item.category))];
// console.log(allCategories)

let newOne = [cocktail]
newOne = cocktail.filter(item =>{
  if(item){
   return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  } 

})
// console.log(categories)

  newOne = cocktail.filter(item =>{
    console.log(item.category)
    if(categories !== 'all'){

      return  item.category === categories
    }
  }) 

// console.log(filterItem)
// newOne = cocktail.filter(item => {
//   console.log(item)
// })
 

  // React.useEffect(() => {
  //   searchValue.current.focus()
  // }, [])
  console.log(newOne)
React.useEffect(()=>{
  FetchDrinks();
  
},[])

React.useEffect(()=>{
  setCocktails(newOne)
},[searchTerm,categories])

// setCategories(allCategories)
// React.useEffect(()=>{
//   setCategories(allCategories)
// },[])
if(loading){
  return <Loading/>
}
console.log(searchTerm)
const handleSubmit =(e)=>{
  e.preventDefault()
}



// const newOne = cocktail.filter(item =>{
//   if(item){
//    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   } 
//   // if(category){
//   //   return item.strCategory == categories
//   // }
// })



// setCocktail(newOne)
// console.log(newCock)
// console.log(categories)
console.log(cocktails)
  return (
    <section>
      <form className='hello' onSubmit={handleSubmit}>
        <input className='submit' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  />
      </form>
      <div>
     <button onClick={() => setCategories('all')}>all</button>
     <button onClick={() => setCategories('Coffee / Tea')}>Coffee / Tea</button>
     <button onClick={() => setCategories('Ordinary Drink')}>Ordinary Drink</button>
     <button onClick={() => setCategories('Shot')}>Shot</button>
      </div>
     {/* <Button categories={categories}/> */}
      <article className='cocktails'>
        {cocktails.map(item=>{
          return <div key={item.id}>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>{item.info}</p>
            <p>{item.glass}</p>
            <Link to='/SingleCocktail'> details</Link>
          </div>
        })}
      </article>
      <SingleCocktail/>
    </section>
  )
}

export default CocktailList
