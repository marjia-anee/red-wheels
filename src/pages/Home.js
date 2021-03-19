import React from 'react';
import About from '../components/About/About';
import Cars from '../components/Cars/Cars';
import Footer from '../components/Shared/Footer/Footer';
import Banner from '../components/Shared/Header/Banner';
import Header from '../components/Shared/Header/Header';

const Home = () => {
      return (
            <div>
                  <Header/>
                  <Banner/>
                  <Cars/>
                  <About/>
                  <Footer/>


            </div>
      );
};

export default Home;