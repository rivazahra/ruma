import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

const HomeLayout = () => {
  const nav = useNavigation()
  const loading = nav.state === 'loading'
  return (
    <>
        <Header/>
        <Navbar/>
      {loading ? (
        <Loading/>) : (
        

      <section className='align-element py-20'>
      <Outlet />
      </section>
      )}
    </>
  )
}

export default HomeLayout
