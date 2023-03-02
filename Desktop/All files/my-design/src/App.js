import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import CocktailList from './components/CocktailList';
// import pages
import Home from './components/Home'

// import components
import Navbar from './components/Navbar';
import SingleCocktail from './components/SingleCocktail';
function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <Router>
     {/* <Navbar setOpen={setOpen} open={open}/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CocktailList' element={<CocktailList />} />
        <Route path='/SingleCocktail' element={<SingleCocktail />} />
        <Route path='/about' element={<About open={open}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
