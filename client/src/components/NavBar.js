import '../stylesheets/navStyle.css';
import React from 'react';
import { navigate } from "@reach/router";

export default () => {

  const redirectHome = () => {
    navigate("/home");
  }

  const redirectContact = () => {
    navigate("/contact");
  }

  const redirectResume = () => {
    navigate("/resume");
  }

  return (
    <nav className="active">
      <ul id="nav">
        <li>
          <button className="btn btn-dark" onClick={ redirectHome } id="home">Home</button>
        </li>
        <li>
          <button className="btn btn-dark" onClick={ redirectContact } id="contact-me">Contact Me</button>
        </li>
        <li>
          <button className="btn btn-dark" onClick={ redirectResume } id="resume">Resume</button>
        </li>
      </ul>
    </nav>
  )

}
