import React from 'react'
import { Form, Link, redirect, useActionData } from 'react-router-dom'
import FormInput from '../components/FormInput'
import SubmitBtn from '../components/SubmitBtn'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)

  try {
    const response = await customFetch.post('/auth/local/register', data)
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    const errorMsg = error?.response?.data?.error?.message || 'please double check your credentials'
    toast.error(errorMsg)
    return errorMsg
  }
}
const Register = () => {
  const actionData = useActionData() // Mengakses data dari action
  const errorMsg = actionData?.errorMsg

  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput name="username" label="username" type="name" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />

        <div className="text-error text-center">{actionData ? <p>{actionData}</p> : ''}</div>

        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link to="/login" className="ml-2 link link-hover link-primary capitalize">
            Login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
