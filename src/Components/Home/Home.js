import React, { useEffect, useState } from 'react';
import HomeEvents from '../HomeEvents/HomeEvents';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [redirect, setRedirect] = useState();
    
    // Database
    useEffect(() =>{
        fetch("https://protected-ridge-51835.herokuapp.com/events")
        .then(res => res.json())
        .then(data => {
            setEvents(data)
            setRedirect(true)
        })
    }, [redirect]);

    

    return (
        <div className="row">
            {
                events.map(event => <HomeEvents  event = {event} key={event._id}>
                </HomeEvents> )
            }
        </div>
    );
};

export default Home;