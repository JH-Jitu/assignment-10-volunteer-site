import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  return (
    <div className="text-center m-4" style={{ boxShadow: "10px 10px 20px lightgray", padding: "30px", color: "gray", backgroundColor: "rgb(240, 236, 241)" }}>
      <h3 >Please sign in with your google account to continue!</h3> <br />
      <button className="btn btn-light mx-auto w-50 m-4 p-2" onClick={handleGoogleSignIn}><img style={{ width: "30px" }} src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Icon/google.png" alt="" /> Google Sign in</button>
    </div>
  );
};

export default Login;