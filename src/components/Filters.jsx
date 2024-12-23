import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import CheckBox from './CheckBox';

const Filters = ({label,name,size}) => {
const { meta, params } = useLoaderData();
const { search, company, category, shipping, order, price } = params;

return (
<>
    <Form
        className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>

        {/* Search */}

        <FormInput label='search product' name='search' size='input-sm' type='search' defaultValue={search} />
      {/* companies */}
        <FormSelect label='select company' name='company' list={meta.companies} size='select-sm' defaultValue={company}/>
      {/* categories */}
        <FormSelect label='select category' name='category' list={meta.companies} size='select-sm' defaultValue={category}/>
      {/* order */}
        <FormSelect label='Sort by ' name='order' list={['a-z', 'z-a','high', 'low']} size='select-sm' defaultValue={order}/>

        <FormRange  name='price'
        label='select price'
        size='range-sm' price={price}/>

        <CheckBox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping}/>

        <button type='submit' className='btn btn-primary btn-sm'>Search</button>
        <Link to='/products' className='btn btn-primary btn-sm'>Rest</Link>


    </Form>
</>
)
}

export default Filters
