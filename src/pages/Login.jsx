import React from 'react'
import { Form, Link, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom'
import FormInput from '../components/FormInput'
import SubmitBtn from '../components/SubmitBtn'
import { customFetch } from '../utils'
import { loginUser } from '../Features/user/userSlice'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/auth/local', data);

      store.dispatch(loginUser(response.data));
      return redirect('/');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      return errorMessage;
    }
  };
const Login = () => {
  const actionData = useActionData()
const navigation = useNavigation()
return (
<section className='h-screen grid place-items-center'> 

    <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>

        <h4 className='text-center text-3xl font-bold'>Login</h4> 
        <FormInput
        type='email'
        defaultValue='test@test.com'
        name='identifier' label='email' />
        <FormInput
        type='password'
        defaultValue='secret'
        name='password' label='password' />
    <div className="text-error text-center">{actionData ? <p>{actionData}</p> : ''}</div>
        <div className="mt-4">
            <SubmitBtn text='login'/>
        </div>
        <button type='button' className='btn btn-secondary btn-block'>guest user</button>
        <p className='text-center'>Not a member yet?

        <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>
        register
        </Link>
        </p>
    </Form>
</section>
)
}

export default Login
