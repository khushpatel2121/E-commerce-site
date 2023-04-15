import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/categories'
import Navbar from '../Components/Navbar'
import NewsLatter from '../Components/NewsLatter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Footer from '../Components/footer';
import {Link} from "react-router-dom"

const Home = () => {
  return (
   
    <div>
    <Link>

    </Link>
           <Announcement/>
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <NewsLatter/>
           <Footer/>
    </div>
  )
}

export default Home
