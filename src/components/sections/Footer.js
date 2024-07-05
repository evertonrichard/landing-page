import '../styles/Footer.css';

const footerLinks = [
    {
        title: "Home",
        links: ["Home", "About", "My Travel Logs"]
    },
    {
        title: "Travels",
        links: ["Travels", "Promo Flights", "Travel Routes"]
    },
    {
        title: "Recommendations",
        links: ["Recommendations", "Guides", "Blogs"]
    },
    {
        title: "About Us",
        links: ["Mission Statement", "The Team", "Contact Us"]
    }
];

function Footer() {
    return (
        <footer>
            <div className="footer-sections">
                <div className="footer-section logo">
                    <h1>My log <br /> Travels</h1>
                </div>
                {footerLinks.map((section, index) => (
                    <div className="footer-section" key={index}>
                        {section.links.map((link, index) => (
                            <p key={index}>{link}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="footer-copyright">
                &copy; 2021-2022 My Log Travels. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
