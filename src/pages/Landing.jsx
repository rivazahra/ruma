import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import { customFetch } from '../utils'

const url = '/products?featured=true'
const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
  };
export const Loader = (queryClient)=>async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  console.log(response)
  const products = response.data.data
  return { products }
}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
