import { useSelector } from 'react-redux'
import { SectionTitle } from '../components'
import CheckOutForm from '../components/CheckOutForm'
import CartTotal from '../components/CartTotal'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const checkoutLoader = (store)=>()=>{
  
  const user =store.getState().userState.user;
  if(!user){
    toast.warning('Your must be logged in to checkout')
    return redirect('/login')
  }
  return null
}


const Checkout = () => {
  const cartTotal = useSelector((state)=>state.cartState.cartTotal)
  if(cartTotal == 0){
    return (
      <>
      <SectionTitle text='Your cart is empty'/>
      </>
    )
  }

  return (
    <>
   <SectionTitle text='place your order'/>
   <div className="grid md:grid-cols-2 gap-8  mt-8 items-start">
    <CheckOutForm/>
    <CartTotal/>
   </div>
    </>
  )
}

export default Checkout
