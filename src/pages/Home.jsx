import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
    <Hero>
        <Banner title = "Luxurious rooms" subtitle="Delux rooms starting at Only Rs 4999 ">
            <Link to ="/rooms" className = "btn__primary">
                Our Rooms
            </Link>
        </Banner>
    </Hero>
        
        
        )
        
}

export default Home
