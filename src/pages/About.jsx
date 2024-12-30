import about5 from '../assets/about5.jpg'
import about4 from '../assets/about4.jpg'
const About = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-8 mx-20  ">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="font-bold text-5xl justify-center text-center">Design Your Perfect Home with Ruma.</h1>
          <p className="text-center text-lg"> At Ruma, we believe that the right furniture can transform any space into a place of comfort, style, and inspiration. </p>
        </div>
        <img src={about4} alt="" className="rounded-box max-w-90  object-cover " />
        <img src={about5} alt="" className="rounded-box w-90 object-cover" />
        <div className="flex flex-col justify-center gap-3">
          <h1 className="font-bold text-5xl justify-center text-center">Where Every Piece Tells a Story.</h1>
          <p className="text-center text-lg"> Let us help you create a space that feels truly yours.</p>
        </div>
      </div>
    </>
  )
}
export default About
