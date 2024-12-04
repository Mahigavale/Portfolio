import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from "./images/IMG_2414-1.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const containerStyle = {
    fontFamily: "'Montserrat', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const heroStyle = {
    backgroundColor: '#162633',
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 20px',
    position: 'relative',
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const quoteStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    animation: 'lighting 2s ease-in-out infinite',
    textShadow: '0 0 10px rgba(255, 105, 180, 0.6)',
    marginTop: '10px',
  };

  const headerContentStyle = {
    textAlign: 'center',
    flex: 1,
    padding: '20px',
    minWidth: '300px',
    marginLeft:'-200px'
  };

  const clockStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    animation: 'fadeIn 1s ease-out',
  };

  const headerContactStyle = {
    position: 'absolute',
    top: '50px',
    right: '20px',
    textAlign: 'right',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    textDecoration: 'none',
    display: 'inline-block',
    marginRight: '10px', // Add margin for spacing between buttons
  };

  const visitGitHubBtnStyle = {
    ...buttonStyle,
    marginTop: '20px', // Ensures space below both buttons
  };

  const sectionContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    padding: '20px',
    margin: '10px',
    minWidth: '300px',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#0366d6',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0',
    marginLeft: '0',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  const listDotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#28a745',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const locationStyle = {
    fontSize: '14px',
    marginTop: '-3px',
    color: '#666',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes lighting {
            0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.6); }
            50% { text-shadow: 0 0 20px rgba(255, 255, 255, 1); }
            100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.6); }
          }
        `}
      </style>

      <header style={heroStyle}>
        <div style={imageContainerStyle}>
          <img src={image} alt="G. Mahesh" style={imageStyle} />
          <div style={quoteStyle}>"APIs are forever!"</div>
        </div>
        <div style={headerContentStyle}>
          <h1>Hi, I'm G. Mahesh</h1>
          <p>Java Full-Stack Developer | React - Spring Boot Enthusiast</p>
          {/* <div>
            <Link to="/get-in-touch" style={buttonStyle}>
              Get in Touch
            </Link>
            <a
              href="https://github.com/Mahigavale"
              target="_blank"
              rel="noopener noreferrer"
              style={visitGitHubBtnStyle}
            >
              Visit GitHub
            </a>
            <a href="https://www.linkedin.com/in/contactmaheshgavale"
            target='_blank'
            rel='noopener noreferrer'
            style={buttonStyle}
            >Linkedin</a>
            <a href="https://x.com/Mahigavale"
            target='_blank'
            rel='noopener noreferrer'
            style={buttonStyle}
            >Twitter</a>
          </div> */}
          <div>
  <Link to="/get-in-touch" style={buttonStyle}>
    Get in Touch
  </Link>

  <a
    href="https://github.com/Mahigavale"
    target="_blank"
    rel="noopener noreferrer"
    style={visitGitHubBtnStyle}
  >
    <FaGithub style={{ marginRight: "8px" }} />
    Visit GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/contactmaheshgavale"
    target="_blank"
    rel="noopener noreferrer"
    style={buttonStyle}
  >
    <FaLinkedin style={{ marginRight: "8px", color: "#0a66c2" }} />
    LinkedIn
  </a>

  <a
    href="https://x.com/Mahigavale"
    target="_blank"
    rel="noopener noreferrer"
    style={buttonStyle}
  >
    <FaTwitter style={{ marginRight: "8px", color: "#1DA1F2" }} />
    Twitter
  </a>
</div>
        </div>
        <div style={clockStyle}>{currentTime}</div>
        <div style={headerContactStyle}>
          <p>📞 +917774834341</p>
          <p>📧 maheshgavale07@gmail.com</p>
        </div>
      </header>

      <div style={sectionContainerStyle}>
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Skills</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Java (Spring Boot, Hibernate, JPA)
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              React
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Microservices Architecture
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              REST API Development
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              MySQL, H2 Database
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Postman & Swagger
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>Experience</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Java Full Stack Developer / Trainer at Aspire Technology Solutions (Aug 2023 - Present)
              <span style={locationStyle}>📍 Pune (Onsite)</span>
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Java Trainer at Intutech Institute (March 2023 - July 2023)
              <span style={locationStyle}>📍 Pune (Onsite)</span>
            </li>
            <li style={listItemStyle}>
              <span style={listDotStyle}></span>
              Software Engineer at LtiMindtree Ltd. (June 2022 - Feb 2023)
              <span style={locationStyle}>📍 Pune (WFH)</span>
            </li>
          </ul>
        </div>
      </div>

      <footer style={{ backgroundColor: '#162633', color: 'white', textAlign: 'center', padding: '20px 0', marginTop: 'auto' }}>
        <p>© G. Mahesh 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
