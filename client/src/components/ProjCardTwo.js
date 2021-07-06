import '../stylesheets/cardStyle.css';
import React from 'react';
import github from '../resources/images/github-50px.png';
import goto from '../resources/images/website-icon-50px.png';
import htmlIcon from '../resources/images/html-48.png';
import cssIcon from '../resources/images/css.webp';
import bootstrapIcon from '../resources/images/bootstrap-48px.png';
import mongodbIcon from '../resources/images/mongodb-48.png';
import expressIcon from '../resources/images/expressjs.png';
import reactIcon from '../resources/images/react-icon.png';
import nodeIcon from '../resources/images/node-48.png';

export default () => {

  return (
    <div className="card" style={{ width: '30rem' }} id="card-container">
      <video width="100%" height="100%" className="card-img-top" alt="project" controls muted>
        <source src="https://portfolio-web-proj-vids.s3.amazonaws.com/fav_player-recording.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-body">
        <h4 className="card-title">MLB Favorite Players</h4>
        <p className="card-text">A website where a user can pick their favorite MLB players and track their statistics throughout the season. Built using the <i>MERN</i> stack and hosted with <i>AWS</i>.</p>
        <h4>Technologies</h4>
        <span id="tech-text">HTML, CSS, Bootstrap, MongoDB, Express.js, React.js & Node.js</span>
        <div id="proj-techs">
          <img src={ htmlIcon } alt=""/>
          <img src={ cssIcon } alt=""/>
          <img src={ bootstrapIcon } alt=""/>
          <img src={ mongodbIcon } alt=""/>
          <img src={ expressIcon } alt=""/>
          <img src={ reactIcon } alt=""/>
          <img src={ nodeIcon } alt=""/>
        </div>
        <div id="icons" >
          <a href="https://github.com/Borelli28/favorite_player" target="_blank" rel="noopener noreferrer"><img src={github} alt="github link" width="50%" height="50%" /></a>
          <a href="https://mymlbplayers.com/" target="_blank" rel="noopener noreferrer"><img src={goto} alt="live project link" width="50%" height="50%" /></a>
        </div>
      </div>
    </div>
  )

}
