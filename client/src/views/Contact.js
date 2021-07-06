import '../stylesheets/contactStyle.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MobileNav from '../components/MobileNav';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_vZvkdYr2AWBaqQcWOSQ8j");


export default props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successAlert, setSuccessAlert] = useState([]);
  const [failAlert, setFailAlert] = useState([]);

  const { width, setWidth } = props;

  // when screen resizes it will set the width to the current screen width
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    // reset alerts
    setSuccessAlert([]);
    setFailAlert([]);

    if (name.length > 0 && message.length > 0) {
      // email service(gmail, etc.), template id, form data, user id
      emailjs.sendForm('default_service', 'template_17j419x', event.target, 'user_vZvkdYr2AWBaqQcWOSQ8j')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         setSuccessAlert(["Message Sent!"]);
      }, function(error) {
         console.log('FAILED...', error);
         setFailAlert(["Message failed to send!"]);
      });
      resetForm();
    } else {
      setFailAlert(["Please include a name and a message"]);
      console.log("Message not send because you need to include a name and a message")
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

    // mobile max width will be 1300
    if (width <= 1300) {
      return (
        <div id="contact">
          <nav>
            <MobileNav />
          </nav>
          <div id="submission-alerts">
            {
              (successAlert
                ? successAlert.map((alert, idx) => {
                  return (
                    // need to wrap alerts in a div else when trying to submit a new message after closing the alert will throw:
                    // Failed to execute 'removeChild' on 'Node'. Error
                    <div id="succes-alert-container">
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <label key={idx}>{ alert }</label>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </div>
                  )
                })
              :
                ""
              )
            }
            {
              (failAlert
                ? failAlert.map((alert, idx) => {
                  return (
                    <div id="failed-alert-container">
                      <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <label>{ alert }</label>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </div>
                  )
                })
              :
                ""
              )
            }
          </div>

          <form onSubmit={sendEmail} id="contact-form" className="contact-form" method="POST">
            <div className="form-group" id="name">
              <label htmlFor="name"><span id="required-mark">* </span>Name</label>
              <input type="text" className="form-control" name="name" value={name} onChange={onNameChange} required/>
            </div>
            <div className="form-group" id="email">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={onEmailChange}/>
            </div>
            <div className="form-group" id="message">
              <label htmlFor="message"><span id="required-mark">*</span> Message</label>
              <textarea className="form-control" rows="5" name="message" value={message} onChange={onMessageChange} required/>
            </div>
            <button type="submit" className="btn btn-primary" id="send-btn">Send Message</button>
          </form>
        </div>
      )

    } else {
      return (
        <div id="contact">
          <nav>
            <NavBar />
          </nav>
          <div id="submission-alerts">
            {
              (successAlert
                ? successAlert.map((alert, idx) => {
                  return (
                    // need to wrap alerts in a div else when trying to submit a new message after closing the alert will throw:
                    // Failed to execute 'removeChild' on 'Node'. Error
                    <div id="succes-alert-container">
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <label key={idx}>{ alert }</label>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </div>
                  )
                })
              :
                ""
              )
            }
            {
              (failAlert
                ? failAlert.map((alert, idx) => {
                  return (
                    <div id="failed-alert-container">
                      <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <label>{ alert }</label>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </div>
                  )
                })
              :
                ""
              )
            }
          </div>

          <form onSubmit={sendEmail} id="contact-form" className="contact-form" method="POST">
            <div className="form-group" id="name">
              <label htmlFor="name"><span id="required-mark">* </span>Name</label>
              <input type="text" className="form-control" name="name" value={name} onChange={onNameChange} required/>
            </div>
            <div className="form-group" id="email">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={onEmailChange}/>
            </div>
            <div className="form-group" id="message">
              <label htmlFor="message"><span id="required-mark">* </span>Message</label>
              <textarea className="form-control" rows="5" name="message" value={message} onChange={onMessageChange} required/>
            </div>
            <button type="submit" className="btn btn-primary" id="send-btn">Send Message</button>
          </form>
        </div>
      )
    }
}
