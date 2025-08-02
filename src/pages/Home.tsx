import { Link } from "react-router-dom"
import Slide1 from "../components/Slide1"
import Slide2 from "../components/Slide2"
import Slide3 from "../components/Slide3"
import Slide4 from "../components/Slide4"
import Slide5 from "../components/Slide5"
import Slide6 from "../components/Slide6"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <main className="text-white">
      {/* slide 1 */}
      <Slide1 />

      {/* border */}
      <div className="bg-black py-6">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-5 text-sm sm:text-base md:text-lg opacity-70 font-serif text-white">
          <Link to="/" className="hover:underline">LinkedIn</Link>
          <Link to="/" className="hover:underline">GitHub</Link>
          <Link to="/" className="hover:underline">Twitter</Link>
          <Link to="/" className="hover:underline">Instagram</Link>
        </div>
      </div>

      {/* slide 2 */}
      <Slide2 />
      {/* slide 3 */}
      <Slide3 />
      {/* slide 4 */}
      <Slide4 />
      {/* slide 5 */}
      <Slide5 />
      {/* slide 6 */}
      <Slide6 />
      <Footer />
    </main>
  )
}

export default Home
