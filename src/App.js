import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Card } from './components/Card';
import NavigationBar from './components/layout/NavigationBar';

export default function App() {
  const getTime = () => {
    const date = new Date();
    return date.toDateString();
  };

  return (
    <div>
      <NavigationBar />
      <h1>Hello StackBlitz! {getTime()} </h1>
      <Card />
    </div>
  );
}
