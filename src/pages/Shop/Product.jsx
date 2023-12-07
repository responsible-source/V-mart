import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Shop-context';


export const Product = (props) => {
    const { id, productName, productPrice, productImage } = props.data;
    const { addtoCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

  return (
    <div className='container pb-10 pr-8'>
        <div className='product-wrapper rounded-md p-1 border-4'>
            <img className='w-100% h-80' src={productImage} alt="img" />
            <div className='description grid pb-2 text-center'>
                    <p className='pt-3 pb-5'>{productName}</p>

                    <p className='pb-3'>${productPrice}</p>
                
                    <button className='bg-darkBlack text-white rounded-md p-3 mx-auto hover:bg-slate-400 hover:text-darkBlack' onClick={() => addtoCart(id)} >Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            </div>
        </div>
    </div>
  )
}

