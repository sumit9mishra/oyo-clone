import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer'

const Rooms = () => {
    return (
        <>
    <Hero>
        <Banner title ="Our Rooms">
            <Link to = '/' className="btn__primary">Check out our other Rooms
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
    
    </>
      
    )
}

export default Rooms
