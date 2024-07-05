const Navigation = () => {
    return (
      <nav className="navigation" aria-label="Main Navigation">
        <ul>
          <li className="navigation-item bold-home"><a href="#Home">Home</a></li>
          <li className="navigation-item"><a href="#Guides">Guides</a></li>
          <li className="navigation-item"><a href="#Flights">Flights</a></li>
          <li className="navigation-item"><a href="#About">About</a></li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </nav>
    );
  }

  export default Navigation
