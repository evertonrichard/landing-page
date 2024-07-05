import React from 'react';
import '../styles/Section1.css';
import paisagemImg from '../../img/paisagemImg.png'; 
import Navigation from '../Nav/Navigation';


const Section1 = () => {
  return (
    <section className="section1">
      <Navigation/>
      <div className="content">
        <div className="text-content">
          <h1>Travel to <br /> your dream <br /> destination</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed e justo eget magna lobortis, ut convallis felis mollis, consectetur adipiscing elit. Sed euismod justo.</p>
          <button className="reserve-button">Reserve Ticket</button>
        </div>
        <div className="image-content">
          <img src={paisagemImg} alt="Paisagem de destino dos sonhos" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
