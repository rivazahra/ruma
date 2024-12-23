import React from 'react'
import SectionTitle from '../components/SectionTitle'
import CartItemList from '../components/CartItemList'
import CartTotal from '../components/CartTotal'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const user = useSelector((state)=>state.userState.user)
  return (
    <>
   <SectionTitle text='shopping cart'/>
   <div className="mt-8 grid gap-8 lg:grid-cols-12">
    <div className="lg:col-span-8">
      <CartItemList/>
    </div> 
    <div className="lg:col-span-4 lg:pl-4">
      <CartTotal/>
      {user ? (
        <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
          Proceed to checkout
        </Link>
      ) :(
        <Link to='/login' className='btn btn-primary btn-block mt-8'>Please login</Link>
      )
    }
    </div>
   </div>
    </>
  )
}

export default Cart
