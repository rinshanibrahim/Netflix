import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./NavBar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function NavBar() {
  const [email, setEmail] = useState('');

  return (
    <div className="parent">
      <div className="wrapperibanner">
        <div className="navbar">
          <div className="logo-section">
            <img src="images/Logonetflix.png" alt="logo" />
          </div>
    <div className="dropdown">
      <DropdownButton id="dropdown-basic-button" title="English">
      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
      <Dropdown.Item href="#/action-2">हिन्दी</Dropdown.Item>
    </DropdownButton>
           <Link to={"https://www.netflix.com/in/login"}> <button style={{ backgroundColor: "red", border: " 1px solid white" }}>
              Sign In
            </button></Link>
          </div>
        </div>
      <div className="parent-banner">
        <div className="banner">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h5>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
        </div>
        <div className="banner_input">
          <input
            type="email" 
            onChange={(event)=>{
              setEmail(event.target.value);
            }}
            value={email}
            placeholder="Email address"
            className="input"
          ></input>
          <Link  className="link" to={'http://localhost:3000/InnerPage'}>Get Started</Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
