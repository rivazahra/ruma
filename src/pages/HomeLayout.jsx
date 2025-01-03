import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const nav = useNavigation()
  const loading = nav.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <main>
          <section className="align-element py-20">
            <Outlet />
          </section>
        </main>
      )}
      <Footer />
    </>
  )
}

export default HomeLayout
