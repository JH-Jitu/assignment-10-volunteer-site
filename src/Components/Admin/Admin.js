import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// Material UI elements
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();

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
        <div>
            <List className={classes.root}>
            <Link style={{textDecoration: "none"}} to="/adminControl">
      <ListItem className="btn btn-light">
        <ListItemAvatar>
        <Avatar src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/users-alt%201.png" />
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="Jan 9, 2014" />
      </ListItem>
      </Link>

      <Link style={{textDecoration: "none"}} to="/adminAddEvent">
      <ListItem className="btn btn-light">
        <ListItemAvatar>
        <Avatar src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/cloud-upload-outline%201.png" />
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      </Link>
    </List>
        </div>
    );
};

export default Admin;