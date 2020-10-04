import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const UserEvents = () => {
    const [userEvents, setUserEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Database
    const [redirect, setRedirect] = useState();
    // useEffect(() => {
    //     fetch("http://localhost:4200/userEvents")
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserEvents(data)
    //             // setRedirect(false); => have to cancel it
    //         })
    // }, [redirect]);

    // Individual data for every user
    useEffect(() => {
        fetch(`http://localhost:4200/userEvents?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUserEvents(data)
                    setRedirect(true)
                }
            })
    }, [redirect]);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/userEvents" } };

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
        <div>
            <h3 align="center">Welcome to volunteer network!</h3>
            <h6 align="center">To cancel your specific event registration please <strong>"double-click"</strong> on the <button className="btn btn-secondary "> Decline Event</button> button</h6>
            <div className="row mt-4">
                {
                    userEvents.map(userEvent => <div style={{padding: '15px'}} className="col-md-6" userEvent={userEvent} key={userEvent._id}>
                        <div className="row bg-white m-2 p-4">
                            <div className="col-md-4 ">
                                <img style={{ width: "100%", height: "100px" }} src="https://vladpromo.com.ua/wp-content/uploads/2019/09/event.jpg" alt="" />
                            </div>
                            <div className="col-md-8">
                                <h5>Event Name: {userEvent.data.eName}</h5>
                                <h6>Date: {userEvent.data.date}</h6>
                                <button onClick={() => handleDeleteEvent(userEvent._id)} className="btn btn-secondary mx-auto w-100 mt-1">Decline Event</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserEvents;