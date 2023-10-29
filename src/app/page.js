import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home1 from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import SlickCarousel from './components/SlickCarousel';


export default function Home() {
  return (
    <>
       <Navbar/> 
       <Home1/>
       <Services/>
       {/* <SlickCarousel/> */}
       <Contact/>
       <Footer/> 
      
      
   </>
  )
}
