import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import CardItem from './CardItem';
import Footer from './Footer';

function Homepage() {
    
    return (
        <>
         <Navbar />
         <CardItem/>
         <Footer/>
           
          
            
        </>
    )
}

export default Homepage