import React, { useContext } from 'react'
import { PRODUCTS } from '../../Product';
import { ShopContext } from '../../Context/Shop-context';
import Cartitems from './Cartitems';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate(); 

  return (
    <div className='grid pl-5 pr-5 mx-auto text-center'>
      <h1 className='text-center mt-5 text-3xl font-bold'>Cart Items</h1>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
           return < Cartitems data={product} />;
          }
          else{
            return console.log("empty cart");
          }
        })}
      </div>
      {totalAmount > 0 ? <>
      <div className=' inset-x-0 bottom-0 my-10'>
        <p className='pb-4 text-3xl font-bold mt-2'>Total-Amount:${totalAmount}</p>
        <button onClick={() => navigate('/')} className='bg-darkBlack text-white p-5 rounded-lg'>Continue Shopping</button>
      </div>
      </> : <h1 className='mt-20 text-5xl font-bold'>Your Cart Is Empty</h1> }
    </div>
  )
}

export default Cart