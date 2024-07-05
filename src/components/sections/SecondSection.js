import React from 'react';
import '../styles/Section2.css';
import image from '../../img/image.png';

const SecondSection = () => {
  return (
    <section className="section2">
      <div className="content">
        <div className="text-content">
          <div className="titulo">
            <h1>Choose anywhere <br /> you'd like to be</h1>
          </div>
          <div className="sub_titulo_card">
            <h2>Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="sub_titulo_card">
            <h2>Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div className="image-content">
          <img src={image} alt="Destination" />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
