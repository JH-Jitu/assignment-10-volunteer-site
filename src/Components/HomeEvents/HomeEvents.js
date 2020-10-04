import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeEvent.css"

const HomeEvents = (props) => {
    const { eventName, eventBanner, _id } = props.event;
    return (
            <div align="center" className="col-lg-3 col-md-4 col-sm-6 container my-4">
               <Link to = {"/reg/"+eventName} style={{ textDecoration: "none" }}> <div className="card btn btn-dark bg-light" style={{ border: "none", boxShadow: "10px 10px 10px lightgray"}}>
                <div className="card-image mt-4 mb-2 pl-2 pr-2"><img style={{ width: "100%", height: "260px", border: "1px solid black", borderRadius: "15px"}} src={eventBanner} alt="" /></div>
                <div className="card-body m-2 btn btn-light" style={{ borderRadius: "10px", border: "1px solid lightgray"}}><h6>{eventName}</h6></div>
                </div></Link>
            </div>
    );
};

export default HomeEvents;