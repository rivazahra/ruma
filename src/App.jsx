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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
    staleTime: 100 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader:landingLoader(queryClient),
        errorElement:<ErrorElement/>

      },
      {
        path:'products',
        loader:ProductLoader(queryClient),
        element:<Products/>
      },
      {
        path:'products/:id',
        loader:singleLoader(queryClient),
        errorElement: <ErrorElement />,
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
        action:checkoutAction(store, queryClient),
        element:<Checkout/>
      },
      {
        path:'orders',
        loader:orderLoader(store, queryClient),
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
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
   <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  )
}

export default App
