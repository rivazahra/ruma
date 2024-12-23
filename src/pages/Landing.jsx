import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import {customFetch}  from '../utils'

const url = '/products?featured=true'
export const Loader = async () => {
const response = await customFetch(url)
console.log(response)
const products = response.data.data
return {products}
}
const Landing = () => {
return(
<>
    <Hero />
    <FeaturedProducts />
</>
)
}

export default Landing
