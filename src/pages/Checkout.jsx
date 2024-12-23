import React from 'react'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../components'
import CheckOutForm from '../components/CheckOutForm'
import CartTotal from '../components/CartTotal'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const checkoutLoader = (store)=>()=>{
  
  const user =store.getState().userState.user;
  console.log(user);
  

  if(!user){
    console.log('ts');
    
    // toast.warn('Your must be logged in to checkout')
    return redirect('/login')
  }
  return null
}


const Checkout = () => {
  const cartTotal = useSelector((state)=>state.cartState.cartTotal)
  if(cartTotal == 0){
    return (
      <SectionTitle text='Your cart is empty'/>
    )
  }

  return (
    <>
   <SectionTitle text='place your order'/>
   <div className="grid md:grid-cols-2 gap-8  mt-8 items-start">
    <CheckOutForm/>
    <CartTotal/>
    {/* <h1 className='text-4xl'>Checkout</h1> */}
   </div>
    </>
  )
}

export default Checkout
