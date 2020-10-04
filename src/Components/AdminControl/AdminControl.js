import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Admin from '../Admin/Admin';

const AdminControl = () => {
    const [userEvents, setUserEvents] = useState([]);

    const [redirect, setRedirect] = useState();
    useEffect(() => {
        fetch("http://localhost:4200/userEventsAll")
            .then(res => res.json())
            .then(data => {
                setUserEvents(data)
                setRedirect(true);
            })
    }, [redirect]);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/adminControl" } };

    function handleDeleteEvent(id) {
        console.log("clicked")
        fetch(`http://localhost:4200/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setRedirect(result);
                history.replace(from);
            })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Admin></Admin>
            </div>
            <div className="col-md-9">
            <h3 align="center">Welcome to volunteer network!</h3>
            <h6 align="center">To cancel your specific event registration please double-click on the <button className="btn btn-secondary "> Decline Event</button> button</h6>
            <div className="row mt-4">
                {
                    userEvents.map(userEvent => <div style={{padding: '15px'}} className="col-md-6" userEvent={userEvent}> {console.log(userEvent)}
                        
                            
                            <div>
                                <h5>Event Name: {userEvent.data.eName}</h5>
                                <h6>Date: {userEvent.data.date}</h6>
                                <p>User Name: {userEvent.name}</p>
                                <p>User Email: {userEvent.email}</p>
                                <button onClick={() => handleDeleteEvent(userEvent._id)} className="btn btn-secondary mx-auto w-100 mt-1">Decline Event</button>
                            </div>
                       
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default AdminControl;