import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Admin from '../Admin/Admin';

const AdminAddEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmitEvent = (data) => {
        const newEventStart = data
        fetch("http://localhost:4200/addEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEventStart)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert("Your Event has been added successfully!")
                }
            })
    }

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
                    <input name="eventName" ref={register({ required: true })} />
                    {errors.eventName && <span className="error">Event Name is required</span>}
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Event Banner</span>
                    </div>
                    <input name="eventBanner" ref={register({ required: true })} />
                    {errors.eventBanner && <span className="error">Banner link is required</span>}
                </div>
                <button className="btn btn-dark" type="submit">Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AdminAddEvent;