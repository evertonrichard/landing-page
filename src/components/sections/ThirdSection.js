import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Section3.css';

const ThirdSection = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const cards = [
    {
      name: 'Ricardo Silva',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    },
    {
      name: 'Jane Smith',
      message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
      name: 'Michael Brown',
      message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Emily Johnson',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      name: 'Allison Wilson',
      message: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    {
      name: 'Charlorte Can',
      message: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
  ];

  const nextCards = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const prevCards = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex - 3 + cards.length) % cards.length);
  };

  /*
  FUTURO: Usar os métodos HTTP (GET) para fazer requisições via API criada através do json-server e mostrar as informações do usuario no front.
  
  import axios from 'axios';

  useEffect(() => {
    const fetchCardsFromAPI = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchCardsFromAPI();
  }, []);
*/

  return (
    <section className="section3">
      <h1>Here's what they<br/>have to say...</h1>
      <div className="carousel">
        {cards.slice(currentStartIndex, currentStartIndex + 3).map((card, index) => (
          <div className="card" key={index}>
            <FaUserCircle size={110} className="user-icon" />
            <h2>{card.name}</h2>
            <p>{card.message}</p>
          </div>
        ))}
        <button className="control-btn prev" onClick={prevCards}>&#8592;</button>
        <button className="control-btn next" onClick={nextCards}>&#8594;</button>
      </div>
    </section>
  );
}

export default ThirdSection;
