import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer  bg-base-200 text-base-content p-10  bottom-0 ">
    <aside>
   <img src={logo} alt="" width={90} />
      <p>
        Ruma Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="">Branding</a>
      <a className="">Design</a>
      <a className="">Marketing</a>
      <a className="">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover" href='/about'>About us</a>
      <a className="">Contact</a>
      <a className="">Jobs</a>
      <a className="">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="">Terms of use</a>
      <a className="">Privacy policy</a>
      <a className="">Cookie policy</a>
    </nav>
  </footer>
  )
}

export default Footer
