import { Tab, Tabs } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/"><img style={{ width: "150px" }} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/Group%201329.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link style={{ textDecoration: "none" }} to="/home" ><Tab className="bg-light text-dark m-1 border border-info" label="Home" /> </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to="/home" ><Tab className="bg-light text-dark m-1 border border-info" label="Page" /> </Link>
              </li>

            </ul>
            <ul className="navbar-nav ml-auto text-center">
              <Link to="/adminControl" className="nav-item m-1 my-sm-2 my-md-0"><button className="btn btn-danger">Admin</button></Link>
              <Link to="/reg" className="my-sm-0 my-md-0 m-1"><button className="btn btn-primary">Registration</button></Link>
              <Link to="/userEvents" className="my-sm-0 my-md-0 m-1"><button className="btn btn-dark">My Events</button></Link>
              {
                loggedInUser.email ? <button className="btn btn-warning text-dark ml-1" onClick={() => setLoggedInUser({})}>Sign Out, {loggedInUser.name}</button> :
                  <Link to="/login"><button className="btn btn-warning text-dark ml-1">Sign In</button></Link>
              }
            </ul>
          </div></div>
      </nav>
    </div>
  );
};

export default Header;