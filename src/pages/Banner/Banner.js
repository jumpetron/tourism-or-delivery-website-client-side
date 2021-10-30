import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
      <div className="banner-img">
        <div className="container banner">
          <div className="w-50">
            <h2 className="text-white text-start">
              Let's Enjoy The Wonders of Nature
            </h2>
            <p className="text-white text-start">
              Imagine trying to pollinate every apple blossom in an orchard:
              this is what nature does for us. Insects, birds, and even some
              mammals, pollinate the world’s plants, including much of human
              agriculture.
            </p>
            <Button className="btn btn-primary align-items-start d-flex">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;