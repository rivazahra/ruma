import { customFetch, formatPrice } from '../utils'
import { clearCart } from '../Features/cart/cartSlice'
import { Form, redirect, useActionData } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { toast } from 'react-toastify'

export const action =
  (store,queryClient) =>
  async ({ request }) => {
    console.log(store)

    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    }

    try {
      const response = await customFetch.post('/orders',{ data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart())
      toast.success('order placed successfully');
      return redirect('/orders')
    } catch (error) {
      console.log(error)
      const errorMsg = error?.response?.data?.error?.message ||
       'there was an error placing your order'
      toast.error(errorMsg);
      if (error?.response?.status === 401 || 403) return redirect('/login')
      return null
    }
  }

const CheckOutForm = () => {
  const actionData = useActionData()
  return (
    <Form
      method="post"
      className="flex flex-col gap-y-4"
    >
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="text-error text-center">{actionData ? <p>{actionData}</p> : ''}</div>
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  )
}

export default CheckOutForm
