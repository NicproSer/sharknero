import React from 'react'
import { Navbar } from '../components/Navbar'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ScrollButton } from '../components/ScrollButton'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default Home;