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
  const classes = useStyles();
  const date = new Date().toDateString();

  return (
    <div>
      <List className={classes.root}>
        <Link style={{ textDecoration: "none" }} to="/adminControl">
          <ListItem className="btn btn-light border border-primary">
            <ListItemAvatar>
              <Avatar src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/users-alt%201.png" />
            </ListItemAvatar>
            <ListItemText primary="Control Panel" secondary={date} />
          </ListItem>
        </Link>
        <br/>
        <Link style={{ textDecoration: "none" }} to="/adminAddEvent">
          <ListItem className="btn btn-light border border-primary">
            <ListItemAvatar>
              <Avatar src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/plus%201.png" />
            </ListItemAvatar>
            <ListItemText primary="Add an Event" secondary={date} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Admin;