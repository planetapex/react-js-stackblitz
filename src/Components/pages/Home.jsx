import React from 'react';

const HomePage = () => {
  const getTime = () => {
    const date = new Date();
    return date.toDateString();
  };

     

  return (
    <>
    
    <h1> the HomePage </h1>
    <h1>Hello StackBlitz! {getTime()} </h1>
    </>
  )
};

export default HomePage;