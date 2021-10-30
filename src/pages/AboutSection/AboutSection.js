import React from 'react';
import { Button } from 'react-bootstrap';
import Aboutsection from '../../images/About-section.png'
import './AboutSection.css'

const AboutSection = () => {
    return (
      <div>
        <div className="container about-section">
          <div>
            <img className="img-fluid mb-5" src={Aboutsection} alt="doctor" />
          </div>
          <div className="w-50 about-box">
            <h6>DISCOVER STORY</h6>
            <h2>Our Story</h2>
            <p>
              Touriso was founded in 2008 by Alex Malcolm, who wanted to show
              people the side of a country that not everyone gets to see. While
              working in Brazil, he was lucky enough to travel the country with
              local friends who took him to places and shared things he would
              never have experienced on his own. He felt there was a space to
              create these unique travel experiences with a personal, human
              touch for others – and flew back to the UK to start his own
              company.
            </p>
            <Button className="custom-btn">Learn More</Button>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;