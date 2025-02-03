// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes} from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import { useState } from 'react'
import CartPage from './components/CartPage'

function App() {
  const[carItems,setCartItems]=useState([])

  const addToCart = (item) => {
    const existingItem = carItems.find((carItem) => carItem.id === item.id)

    if (existingItem) {
      setCartItems(
        carItems.map((carItem) => carItem.id === item.id ? {...carItem,quantity:carItem.quantity + 1} : carItem) 
      )
    }else {
      setCartItems([...carItems,{...item,quantity:1}])
    }
  }
 
  return (
    <>
      <Router>
        <Navbar carItem={carItems}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<CartPage carItems={carItems} setCartItems={setCartItems}/>}></Route>
          <Route path='/menu' element={<Menu addToCart={addToCart}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
