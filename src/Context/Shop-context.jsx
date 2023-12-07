import React, { createContext, useState } from 'react';
import {PRODUCTS} from '../Product';

export const ShopContext = createContext({})

export const jsonApi = ()=>{
    let cart = {};
    for(var i =1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}



export const ShopcontextProvider = (props) => {
    const[cartItems, Setcartitems] = useState(jsonApi());
    
    const addtoCart = (ItemId) => {
    Setcartitems((prev) => ({ ...prev,[ItemId]: prev[ItemId] + 1}))
    };

    const removefromCart = (ItemId) => {
        Setcartitems((prev) => ({ ...prev,[ItemId]: prev[ItemId] - 1}))
    };

    const updateCartItemNumber = (newNum, ItemId) =>{
        Setcartitems((prev) => ({...prev,[ItemId] : newNum}))
    }

    const getTotalCartAmount = () =>{ 
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.productPrice
        }
      }
      return totalAmount;
    }

    const contextValue = {cartItems, addtoCart, removefromCart,updateCartItemNumber,getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
};
