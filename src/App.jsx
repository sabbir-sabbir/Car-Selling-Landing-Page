import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { FilterSearch } from './components/Filter';
import { Trending } from './components/TrendingCard';
import { BestSelling } from './components/BestSelling';
import Review from './components/Reviews';
import FindVehicles from './components/Map';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <FilterSearch/>
     <Trending/>
     <BestSelling/>
     <Review/>
     <FindVehicles/>
     <Footer/>
    </>
  )
}

export default App
