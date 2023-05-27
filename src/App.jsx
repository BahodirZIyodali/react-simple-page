import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel';
import SaveOn from './components/SaveOn/SaveOn';
import BestSelling from './components/BestSelling/BestSelling.jsx';
import Ideas from './components/Ideas/Ideas';
import Search from './components/Search/Search';
import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import SignUp from './components/SignUp/SignUp';
export default function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Carousel/>
      <SaveOn/>
      <BestSelling/>
      <Ideas/>
      <Search/>
      <SignUp/>
      <Footer/>
    </div>
  )
}
