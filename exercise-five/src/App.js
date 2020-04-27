import React, {useEffect,useState} from 'react';
//the star means import everything
import firebase from "firebase/app"
import "firebase/auth"
import './App.css';
import UserProfile from "./pages/user_profile";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";
import Header from "./components/header.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  //using useState to do login stuff
  const[loggedIn, setLoggedIn] = useState();
  const[loading, setLoading] = useState(true);
  const[userInfo,setUserInfo] = useState();

  //firebase config. should remain at the top of the app
  const firebaseConfig = {
  apiKey: "AIzaSyC2mtodoNuH00fck6g51FvFeD5zlODVZ6U",
  authDomain: "exercise-five-acb33.firebaseapp.com",
  databaseURL: "https://exercise-five-acb33.firebaseio.com",
  projectId: "exercise-five-acb33",
  storageBucket: "exercise-five-acb33.appspot.com",
  messagingSenderId: "586554720016",
  appId: "1:586554720016:web:36521484ba631d1070ef95"
};
  //want firebase to load after people can see the page so we stick in use effect
  useEffect(() => {
    //if firebase (which is an array) does not have length, initialize firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    //using session storage to keep the auth, rather than cookies since it is easier to work with
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(e){
        console.log("AUTH ERROR", e);
      });

    //making sure firebase config is there before we initialize the firebase app
  },[firebaseConfig]);

//check to see if the user is logged in 
//user loads page, check status
//set state accordingly 
useEffect(() => {
  //onAuthStateChanged recieves a callabck function as an arguement
  firebase.auth().onAuthStateChanged(function(user){
    //getting value of auth user, can be called anything tho
    //Logged In
    if(user){
      setLoggedIn(true);
      setUserInfo(user);
    }else{
      setLoggedIn(false);
    }
    //not loading anymore because we know whether user is logged in or not
    setLoading(false);
  })
},[])

  //Login
  function LoginFunc(e){
    e.preventDefault();
    console.log("login start");
    console.log("e", e);
    
    console.log("e current target", e.CurrentTarget);

    let email = e.CurrentTarget.loginEmail.value;
    console.log("email",email);
    let password = e.CurrentTarget.loginPassword.value;
    console.log("password",password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(function(response){
        console.log("Login Response", response);
        setLoggedIn(true);
      })
      .catch(function(e){
        console.log("Login Error", e);
      });
    console.log("end of function");
  }

  function CreateFunc(e){
    //e represents the payload of a form
    //this prevents the form from sending a default form
    e.preventDefault();
    console.log("form payload", e);
    let email = e.CurrentTarget.createEmail.value;
    console.log("email",email);
    let password = e.CurrentTarget.createPassword.value;
    console.log("password",password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      //if createUserEmail etc is successful .then happens
      .then(function(response){
        console.log("Valid Account Created", response);
        setLoggedIn(true);
      })
     //if createUserEmail etc fails .catch happens
      .catch(function(e){
        console.log("Create Account Error", e);
        console.log("e",e.CurrentTarget);
      });
      console.log("end of function")
  }

  function LogoutFunc(){
      firebase
        .auth()
        .signOut()
        .then(function(){
          setLoggedIn(false);
        })
        
        .catch(function (error){
          console.log("logout error", error);
        });

  }


  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login"/> : <UserProfile userInfo={userInfo}/>}
        </Route>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunc={LoginFunc}/>
            ) : (
              <Redirect to="/"/>
            )}
        </Route>
        <Route exact path="/create-account">
           {!loggedIn ? (
           <CreateAccount CreateFunc={CreateFunc}/>
            ) : (
              <Redirect to="/"/>
            )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
