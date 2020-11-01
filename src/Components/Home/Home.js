import React, { useEffect, useState } from 'react';
import HomeEvents from '../HomeEvents/HomeEvents';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [redirect, setRedirect] = useState();
    const [search, setSearch] = useState("");
    
    // Database
    useEffect(() =>{
        fetch("https://lit-ocean-61516.herokuapp.com/events?search="+search)
        .then(res => res.json())
        .then(data => {
            setEvents(data)
            setRedirect(true)
        })
    }, [redirect, search]);
    
    const handleSearch = event => {
        setSearch(event.target.value)
    }

    

    return (
        <div>
            <input type="text" className="searchEv mx-auto w-75 border border-darken p-2 m-1 rounded d-flex justify-content-center" placeholder="Search Events" onBlur={handleSearch} />
        <div className="row">
            {
                events.map(event => <HomeEvents  event = {event} key={event._id}>
                </HomeEvents> )
            }
        </div></div>
    );
};

export default Home;