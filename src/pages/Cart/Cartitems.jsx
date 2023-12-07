import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Shop-context';



const Cartitems = (props) => {
  const {cartItems, addtoCart, removefromCart, updateCartItemNumber} = useContext(ShopContext);
  const { id, productName, productPrice, productImage } = props.data;
  return (
    <div className='container flex gap-2 mt-10 border-4 rounded-lg mx-auto'>
      <div className='my-5'>
              <img className='w-100 h-40 pt-3 mx-auto' src={productImage} alt="cart" />
      </div>

      <div className='my-5 space-y-3 pt-4'>
              <p className=' text-3xl font-bold justify-start'>{productName}</p>
              <p className='text-2xl justify-start'>${productPrice}</p>
              <button onClick={() => removefromCart(id)} className='text-3xl pr-2'>-</button>
              <input onChange={(e)=> updateCartItemNumber(Number(e.target.value), id)} className='border-4 w-12 text-center' value={cartItems[id]} />
              <button onClick={() => addtoCart(id)} className='text-3xl '>+</button>
      </div>
      
    </div>
  )
}

export default Cartitems