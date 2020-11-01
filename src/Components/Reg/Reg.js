import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Reg = () => {
    const { eventLink } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState(
        {
            checkIn: new Date()
        }
    );
    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    // Sending to Database:
    const history = useHistory();
    const onSubmit = (data, eventLink) => {
        const userEventDetails = {...loggedInUser, data};
        // console.log(userEventDetails)
        fetch("https://lit-ocean-61516.herokuapp.com/addUserEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userEventDetails)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                result.redirect("/")
            }
        })
        history.push("/userEvents");
    };
    
    
    return (
        <form id="regForm"  className="container text-center col-md-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue={loggedInUser.name} type="text" name="name" ref={register({ required: true })} placeholder="Full Name" required />
                {errors.name && <span className="error">Event Name is required</span>}<br />

                <input className="form-control" type="text" name="userName" ref={register({ required: true })} placeholder="User Name" required />
                {errors.userName && <span className="error">Event Name is required</span>}<br />

                <input className="form-control" defaultValue={loggedInUser.email} type="text" name="email" ref={register({ required: true })} placeholder="Email" required />
                {errors.email && <span className="error">Event Name is required</span>}<br />

                <input className="form-control" defaultValue={selectedDate.checkIn} ref={register({ required: true })} onChange={handleCheckInDate} type="date" name="date" required />
                {errors.date && <span className="error">Event Name is required</span>}<br />

                <input className="form-control" type="text" name="desc" ref={register({ required: true })} placeholder="Description" required />
                {errors.desc && <span className="error">Event Name is required</span>}<br />

                <input className="form-control" defaultValue={eventLink} type="text" name="eName" ref={register({ required: true })} placeholder="Event Name" required />
                {errors.eName && <span className="error">Event Name is required</span>}<br />

                <button  type="submit" className="btn btn-secondary mx-auto w-100 mt-1">Submit</button>
            </form>
    );
};

export default Reg;