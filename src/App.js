import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'
import { ShopcontextProvider } from './Context/Shop-context'

const App = () => {
  return (
    <>
    <ShopcontextProvider>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
    </ShopcontextProvider>
    </ >
  )
}

export default App