import React from 'react';
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import Destinations from '../Destinations/Destinations';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';


export default function Home () {
    return (
        <div style={{marginTop:"16%"}}>
            <MainPage/> 

            <Destinations/>

             <Reviews />
             
             <About/>

             <Contact/>
             
             <Footer/>
        </div>
    );
};

