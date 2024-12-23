import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CartTotal = () => {
    const {cartTotal, shipping, tax, orderTotal}= useSelector(
        (state)=>state.cartState
    )
  return (
    <div className='card bg-base-200'>
      <div className="card-body">
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>subtotal</span>
            <span className='font-medium '>{formatPrice(cartTotal)}</span>
        </p>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>Shipping</span>
            <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>Tax</span>
            <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* total */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span className='font-bold'>Order total</span>
            <span className='font-bold'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotal
