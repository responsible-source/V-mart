import React from 'react'
import { PRODUCTS } from '../../Product'
import { Product } from './Product'

const Shop = () => {
  return (
    <div className='justify-center mx-auto pl-6 items-center mt-20'>
        {/* <div className='shop-title'>
            <h1 className='text-3xl font-bold text-center'>V-mart</h1>
        </div> */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {PRODUCTS.map((product) =>(
                <Product data={product} key={product.id} />
            ))}
        </div>
    </div>
  )
}

export default Shop