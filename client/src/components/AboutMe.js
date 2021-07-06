import '../stylesheets/aboutStyle.css';
import React from 'react';
import githubIcon from '../resources/images/GitHub_Logo_White.png';
import linkedinIcon from '../resources/images/linkedin-48.png';
import resumeIcon from '../resources/images/download-resume-50.png';

export default () => {

  return (
    <div id="about-me">
      <div id="links">
        <a id="linkedIn" href="https://www.linkedin.com/in/armando-borelli/" target="_blank" rel="noopener noreferrer"><img src={ linkedinIcon } alt="linkedIn link"/></a>
        <a id="github" href="https://github.com/Borelli28" target="_blank" rel="noopener noreferrer"><img src={ githubIcon } alt="github link"/></a>
        <a id="resume-download-icon" href="https://portfolio-web-proj-vids.s3.amazonaws.com/armando-borelli-resume-aws.pdf" download="Armando_Borelli-resume" target="_blank" rel="noopener noreferrer"><img src={ resumeIcon } alt="resume link"/></a>
      </div>
    </div>
  )

}
