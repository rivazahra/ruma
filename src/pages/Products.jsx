import { Filters, PaginationContainer} from '../components'
import ProductContainer from '../components/ProductContainer';
import { customFetch } from '../utils';

const url = '/products';
export const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const params = Object.fromEntries(searchParams); // Pastikan formatnya sesuai
  console.log(params); // Untuk debug, pastikan 'params' bekerja seperti yang diharapkan

  // const search = params.get('search')
  const response = await customFetch(url,{
    params
  });

  const products = response.data.data;
  const meta = response.data.meta;

  
  return { products, params,meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;