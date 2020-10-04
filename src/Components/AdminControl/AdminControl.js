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
                <h3 align="center">Controlling by Admin!!</h3>
                <h6 align="center">To "Kick Out" your specific event registration please <strong>"double-click"</strong> on the <button className="btn btn-secondary "> Remove User Event</button> button</h6>
                <div className="row mt-4">
                    {
                        userEvents.map(userEvent => <div style={{ padding: '15px', boxShadow: "10px 10px 10px lightgray" }} className="col-lg-4 col-md-4 col-sm-6" userEvent={userEvent}>

                            <div className="m-4 card-body p-1">
                                <h6>Event: {userEvent.data.eName}</h6>
                                <small>Reg Date: {userEvent.data.date}</small>
                                <p>User Name: {userEvent.name}</p>
                                <p>User Email: <b> {userEvent.email}</b></p>
                                <small>User Id: {userEvent._id}</small>
                                <button onClick={() => handleDeleteEvent(userEvent._id)} className="btn btn-secondary mx-auto w-100 mt-1"> <img style={{width:"20px"}} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/trash-2%209.png" alt="" /> Remove User Event</button>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminControl;