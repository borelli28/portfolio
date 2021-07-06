import '../stylesheets/cardStyle.css';
import React from 'react';
import github from '../resources/images/github-50px.png';
import goto from '../resources/images/website-icon-50px.png';
import htmlIcon from '../resources/images/html-48.png';
import cssIcon from '../resources/images/css.webp';
import bootstrapIcon from '../resources/images/bootstrap-48px.png';
import javaIcon from '../resources/images/java-48.png';
import springIcon from '../resources/images/spring-trans.png';
import mysqlIcon from '../resources/images/mysql-logo.png';

export default () => {

  return (
    <div className="card" style={{ width: '30rem' }} id="card-container">
      <video width="100%" height="100%" className="card-img-top" alt="project" controls muted>
        <source src="https://portfolio-web-proj-vids.s3.amazonaws.com/budgetApp-rec.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-body">
        <h4 className="card-title">Personal Finances</h4>
        <p className="card-text">A website for budgeting built using Java <i>Spring</i> framework and hosted with <i>AWS</i>.</p>
        <h4>Technologies</h4>
        <span id="tech-text">HTML, CSS, Bootstrap, Java, Spring & MySQL</span>
        <div id="proj-techs">
          <img src={ htmlIcon } alt=""/>
          <img src={ cssIcon } alt=""/>
          <img src={ bootstrapIcon } alt=""/>
          <img src={ javaIcon } alt=""/>
          <img src={ springIcon } alt=""/>
          <img src={ mysqlIcon } alt=""/>
        </div>
        <div id="icons" >
          <a href="https://github.com/Borelli28/Spring-Budget-App" target="_blank" rel="noopener noreferrer"><img src={github} alt="github link" width="50%" height="50%" /></a>
          <a href="https://mypersonalfinancesapp.page/" target="_blank" rel="noopener noreferrer"><img src={goto} alt="live project link" width="50%" height="50%" /></a>
        </div>
      </div>
    </div>
  )

}
