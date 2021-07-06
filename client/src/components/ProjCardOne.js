import '../stylesheets/cardStyle.css';
import React from 'react';
import github from '../resources/images/github-50px.png';
import goto from '../resources/images/website-icon-50px.png';
import htmlIcon from '../resources/images/html-48.png';
import cssIcon from '../resources/images/css.webp';
import bootstrapIcon from '../resources/images/bootstrap-48px.png';
import pythonIcon from '../resources/images/python-48.png';
import djangoIcon from '../resources/images/django-50.png';

export default () => {

  return (
    <div className="card" style={{ width: '30rem' }} id="card-container">
      <video width="100%" height="100%" className="card-img-top" alt="project" controls muted>
        <source src="https://portfolio-web-proj-vids.s3.amazonaws.com/ecommerce-rec.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-body">
        <h4 className="card-title">E-commerce</h4>
        <p className="card-text">E-commerce website built with <i>Django</i> and hosted with <i>AWS</i>.</p>
        <h4>Technologies</h4>
        <span id="tech-text">HTML, CSS, Bootstrap, Python, Django & SQLite</span>
        <div id="proj-techs">
          <img src={ htmlIcon } alt=""/>
          <img src={ cssIcon } alt=""/>
          <img src={ bootstrapIcon } alt=""/>
          <img src={ pythonIcon } alt=""/>
          <img src={ djangoIcon } alt=""/>
        </div>
        <div id="icons" >
          <a href="https://github.com/Borelli28/ecommerce" target="_blank" rel="noopener noreferrer"><img src={github} alt="github link" width="50%" height="50%" /></a>
          <a href="https://my-django-ecommerce.com/" target="_blank" rel="noopener noreferrer"><img src={goto} alt="live project link" width="50%" height="50%" /></a>
        </div>
      </div>
    </div>
  )

}
