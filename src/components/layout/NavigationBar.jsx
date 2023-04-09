import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/ Image';
import BrandLogo from '../images/logo_mark.png';

export const NavigationBar = () => {
  return (
    <div>
      <Navbar.Brand href="/" className="d-f1ex p-4 pb-0">
        <Image
          src={BrandLogo}
          height="30"
          className="aLign-top"
          alt="Company Logo"
        />
        <p className="p-3 pt-0 pb-0 text-dark info">Your Cart Page</p>
      </Navbar.Brand>
    </div>
  );
};
