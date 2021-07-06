import '../stylesheets/resumeStyle.css';
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import MobileNav from '../components/MobileNav';

export default props => {

  const { width, setWidth } = props;

  // when screen resizes it will set the width to the current screen width
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width <= 1200) {
    return (
      <div id="resume-main-mobile">
        <nav>
          <MobileNav />
        </nav>
        <div id="resume-img" className="ratio ratio-16x9">
          <iframe src="https://docs.google.com/viewer?url=https://portfolio-web-proj-vids.s3.amazonaws.com/armando-borelli-resume-aws.pdf&embedded=true" title="My Resume">Resume</iframe>
        </div>
      </div>
    )
  } else {
    return (
      <div id="resume-main">
        <nav>
          <NavBar />
        </nav>
        <div id="resume-img" className="ratio ratio-16x9">
          <iframe src="https://docs.google.com/viewer?url=https://portfolio-web-proj-vids.s3.amazonaws.com/armando-borelli-resume-aws.pdf&embedded=true" title="My Resume">Resume</iframe>
        </div>
      </div>
    )
  }

}
