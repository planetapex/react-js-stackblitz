import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { BrandLogo } from '/main/src/logo.png';

const NavigationBar = () => {
  return (
    <div>
      <Navbar.Brand href="/" className="d-f1ex p-4 pb-0">
        <Image
          src={BrandLogo}
          // src="https://stackblitz.com/files/react-99avqn/github/planetapex/react-js-stackblitz/main/src/images.png"
          height="30"
          className="aLign-top"
          alt="Company Logo"
        />
        <p className="p-3 pt-0 pb-0 text-dark info">Your Cart Page</p>
      </Navbar.Brand>
    </div>
  );
};

export default NavigationBar;
