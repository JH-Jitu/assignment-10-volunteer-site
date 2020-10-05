import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Admin from '../Admin/Admin';

const AdminAddEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const onSubmitEvent = (data) => {
        const newEventStart = data
        fetch("https://protected-ridge-51835.herokuapp.com/addEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEventStart)
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    result.redirect("/")
                }
            })
            history.push("/");
    };

    return (
        <div className="row">
            <div className="col-md-3">
                <Admin></Admin>
            </div>
            <div className="col-md-9">
            <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Event Name</span>
                    </div>
                    <input className="w-100 mx-auto" name="eventName" placeholder="Write a event name that you want to add" ref={register({ required: true })} />
                    {errors.eventName && <span className="error">Event Name is required</span>}
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Event Banner</span>
                    </div>
                    <input className="w-100 mx-auto" name="eventBanner" placeholder="Put a image Link or url for showing photo" ref={register({ required: true })} />
                    {errors.eventBanner && <span className="error">Banner link is required</span>}
                </div>
                <button className="btn btn-dark" type="submit"> <img style={{width:"30px"}} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/cloud-upload-outline%201.png" alt=""/> Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AdminAddEvent;