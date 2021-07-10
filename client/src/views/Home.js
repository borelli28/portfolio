import '../stylesheets/homeStyle.css';
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import MobileNav from '../components/MobileNav';
import AboutMe from '../components/AboutMe';
import ProjCardOne from '../components/ProjCardOne';
import ProjCardTwo from '../components/ProjCardTwo';
import ProjCardThree from '../components/ProjCardThree';
import GitHubIcon from '@material-ui/icons/GitHub';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default props => {
  const { width, setWidth } = props;

  // when screen resizes it will set the width to the current screen width
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // mobile max width will be 1300
  if (width <= 1300) {
    return (
      <div id="mobile-div">
        <main id="mobile">
          <nav>
            <MobileNav />
          </nav>

          <div id="profile">
            <div id="name&title">
              <h2>Armando Borelli</h2>
              <h3>Software Developer(Full Stack)</h3>
            </div>

            <div id="langTech">
              <div id="lang">
                <h5>Languages</h5>
                <ul>
                  <li>HTML & CSS</li>
                  <li>JAVA</li>
                  <li>JAVASCRIPT</li>
                  <li>PYTHON</li>
                </ul>
              </div>

              <div id="tech">
                <h5>Technologies</h5>
                <div id="tech-uls">
                  <ul>
                    <li>AWS</li>
                    <li>BCRYPT</li>
                    <li>BOOTSTRAP</li>
                    <li>CSS</li>
                    <li>DJANGO</li>
                  </ul>
                  <ul>
                    <li>EXPRESS.JS</li>
                    <li>HTML</li>
                    <li>JAVA</li>
                    <li>MONGODB</li>
                    <li>MYSQL</li>
                  </ul>
                  <ul>
                    <li>NODE.JS</li>
                    <li>PYTHON</li>
                    <li>REACT.JS</li>
                    <li>SPRING</li>
                    <li>SQLITE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="projects-section">
            <h3>My Projects</h3>

            <div id="proj">
              <div id="proj-card">
                <ProjCardOne />
              </div>
              <div id="proj-card">
                <ProjCardTwo />
              </div>
              <div id="proj-card">
                <ProjCardThree />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div id="links">
            <div><a id="linkedIn" href="https://www.linkedin.com/in/armando-borelli/" target="_blank" rel="noopener noreferrer"><LinkedInIcon id="linkedInIcon" color="default" fontSize="large"/></a></div>
            <div><a id="github" href="https://github.com/Borelli28" target="_blank" rel="noopener noreferrer"><GitHubIcon id="gitHubIcon" fontSize="large" color="default"/></a></div>
            <div><a id="resume-download-icon" href="https://portfolio-web-proj-vids.s3.amazonaws.com/armando-borelli-resume-aws.pdf" download="Armando_Borelli-resume" target="_blank" rel="noopener noreferrer"><FileCopyIcon id="fileCopyIcon" fontSize="large" color="default"/></a></div>
          </div>
        </footer>
      </div>
    )
  // Desktop layout
  } else {
    return (
      <div id="desktop-div">
        <main id="desktop">
          <div id="profile">
            <div id="name&title">
              <p>My Name is, </p>
              <h2>Armando Borelli</h2>
              <h3>Software Developer(Full Stack)</h3>
            </div>

            <div id="lang&tech">
              <h5>Languages</h5>
              <div id="lang">
                <ul>
                  <li>HTML & CSS</li>
                  <li>JAVA</li>
                  <li>JAVASCRIPT</li>
                  <li>PYTHON</li>
                </ul>
              </div>

              <div id="tech">
                <h5>Technologies</h5>
                  <ul>
                    <li>AWS</li>
                    <li>BCRYPT</li>
                    <li>BOOTSTRAP</li>
                    <li>CSS</li>
                    <li>DJANGO</li>
                    <li>EXPRESS.JS</li>
                    <li>HTML</li>
                    <li>JAVA</li>
                    <li>MONGODB</li>
                    <li>MYSQL</li>
                    <li>NODE.JS</li>
                    <li>NPM</li>
                    <li>PYTHON</li>
                    <li>REACT.JS</li>
                    <li>SPRING</li>
                    <li>SPRING BOOT</li>
                    <li>SPRING SECURITY</li>
                    <li>SQLITE</li>
                  </ul>
              </div>
            </div>
          </div>

          <div id="projects-section">
            <NavBar />

            <h3>My Projects</h3>

            <div id="proj">
              <div id="proj-card">
                <ProjCardOne />
              </div>
              <div id="proj-card">
                <ProjCardTwo />
              </div>
              <div id="proj-card">
                <ProjCardThree />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div id="links">
            <div><a id="linkedIn" href="https://www.linkedin.com/in/armando-borelli/" target="_blank" rel="noopener noreferrer"><LinkedInIcon id="linkedInIcon" color="default" fontSize="large"/></a></div>
            <div><a id="github" href="https://github.com/Borelli28" target="_blank" rel="noopener noreferrer"><GitHubIcon id="gitHubIcon" fontSize="large" color="default"/></a></div>
            <div><a id="resume-download-icon" href="https://portfolio-web-proj-vids.s3.amazonaws.com/armando-borelli-resume-aws.pdf" download="Armando_Borelli-resume" target="_blank" rel="noopener noreferrer"><FileCopyIcon id="fileCopyIcon" fontSize="large" color="default"/></a></div>
          </div>
        </footer>
      </div>
    )
  }

}
