import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import Home from "./pages/Home"
import Signup from './pages/Signup'
import Signin from "./pages/Signin"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from "./context/UserContext";
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './Config/firebaseConfig';
//inti firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
const [user, setUser] = useState(null)

  return (
    <Router>
    <ToastContainer />
    <UserContext.Provider value={{ user, setUser}}>
    <Header />
     <Routes>
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/signup" element={<Signup/>}/>
      <Route exact path= "/signin" element={<Signin/>}/>
      <Route path= "*" element={<PageNotFound/>}/>
    </Routes>
    <Footer />
    </UserContext.Provider>
    </Router>
  );
};

export default App;
