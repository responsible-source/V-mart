import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[80px] w-100% bg-darkBlack flex'>
        <nav className='container flex items-center mx-auto justify-between space-x-6 md:space-x-6 md:justify-between'>
                <h3 className='text-white text-3xl font-bold pl-6'>V-mart</h3>

            <ul className='text-white flex space-x-6 justify-between pr-6'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <ShoppingCart size={25} />
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar