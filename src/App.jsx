import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import CartPage from './components/CartPage'
5
function App() {
  const[cartItems,setCartItems]=useState([])

  const addToCart = (item) => {
    const existingItem = carItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCartItems(
        carItems.map((cartItem) => cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity + 1} 
        : cartItem) 
      )
    }else {
      setCartItems([...carItems,{...item,quantity:1}])
    }
  }
 
  return (
    <>
      <Router>
        <Navbar cartItem={cartItems}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
          <Route path='/menu' element={<Menu addToCart={addToCart}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
