import React from 'react'
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import { Loader as landingLoader} from './pages/Landing';
import { singleLoader as singleLoader} from './pages/SingleProduct';
import { loader as orderLoader} from './pages/Orders';
import {loader as ProductLoader} from './pages/Products'
import { action as regisAction } from './pages/Register';
import { action as checkoutAction } from './components/CheckOutForm';
// import { loginAction } from './pages/Login';
import { store } from './store';
import { action } from './pages/Login';
import { checkoutLoader } from './pages/Checkout';

const router = createBrowserRouter([
  
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader:landingLoader,
        errorElement:<ErrorElement/>

      },
      {
        path:'products',
        loader:ProductLoader,
        element:<Products/>
      },
      {
        path:'products/:id',
        loader:singleLoader,
        element:<SingleProduct/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'checkout',
        loader:checkoutLoader(store),
        action:checkoutAction(store),
        element:<Checkout/>
      },
      {
        path:'orders',
        loader:orderLoader(store),
        element:<Orders/>
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
    action:action(store)
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
    action: regisAction
  },
 
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
