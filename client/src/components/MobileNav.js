import '../stylesheets/mobileNavStyle.css';
import React from 'react';
import { navigate } from "@reach/router";

export default () => {

  const redirectHome = () => {
    navigate("/home");
  }

  const redirectContact = () => {
    navigate("/contact");
  }

  return (
    <div id="mobile-nav">
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent" >
        <div className="bg-dark p-2" id="buttons">
          <button className="btn btn-dark" onClick={ redirectHome } id="home">Home</button>
          <button className="btn btn-dark" onClick={ redirectContact } id="contact-me">Contact Me</button>
        </div>
      </div>
    </div>
  )

}
