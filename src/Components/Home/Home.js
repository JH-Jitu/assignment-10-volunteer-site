import React, { useEffect, useState } from 'react';
import HomeEvents from '../HomeEvents/HomeEvents';

const Home = () => {
    const [events, setEvents] = useState([]);
    
    // Database
    useEffect(() =>{
        fetch("http://localhost:4200/events")
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []);

    

    return (
        <div className="row">
            {
                events.map(event => <HomeEvents  event = {event}>
                </HomeEvents> )
            }
        </div>
    );
};

export default Home;