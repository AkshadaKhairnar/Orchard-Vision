import React from 'react';
import './about.css';
import logo from './images/logo.png';
import img1 from './images/img1.jpg';
import DRONE1 from './images/DRONE1.jpg';
import img6 from './images/img1.jpg';
import {  Link } from 'react-router-dom'; // Import React Router components


const About = () => {
    return (
       <div>
            <header>
                <div className="navbar">
                    <img src={logo} alt="Heroimage" />
                    <nav>
                        <ul>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/Sign">FARMER</Link></li>
                            <li><Link to="/Consumer">CONSUMER</Link></li>
                            <li><Link to="/Vendors">VENDORS</Link></li>
                            <li><Link to="/DroneProvider">DRONE PROVIDER</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

          {/* About Page */}
            <main>
                <section className="hero">
                    <img src={img1} alt="Orchard Vision" />
                    <div className="discover-btn">
                        <a href="#discover">Discover More</a>
                    </div>
                </section>

                <section className="info-section">
                    <div className="row">
                        <div className="image">
                            <img src={DRONE1} alt="About Us" />
                        </div>
                        <div className="content">
                            <h2>ABOUT US</h2>
                            <p>
                                Orchard Vision is a cutting-edge precision farming company dedicated to transforming apple orchard management through advanced drone technology. Leveraging the power of aerial insights, Orchard Vision empowers apple growers to monitor their orchards with exceptional accuracy, enhancing productivity, fruit quality, and overall orchard health. By combining high-resolution imaging, real-time data analysis, and machine learning, Orchard Vision provides actionable insights on crop health, pest detection, water management, and harvest forecasting. Our goal is to optimize every phase of apple production while supporting sustainable farming practices, helping orchards maximize yield, reduce resource usage, and maintain the highest standards in fruit quality. Orchard Vision is committed to redefining apple farming with smarter, data-driven solutions that support growers and protect the environment.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content">
                            <h2>APPLE ORCHARDS</h2>
                            <p>
                                Apple orchards in India, primarily concentrated in the northern regions like Himachal Pradesh, Jammu & Kashmir, and Uttarakhand, play a crucial role in the country’s fruit industry. Driven by increasing domestic demand for fresh and processed apples, India's apple market is expanding at a steady rate, with apples becoming one of the most popular fruits nationwide. The government and private sectors are investing in infrastructure, cold storage, and transportation to ensure fresh apples reach broader markets, reducing reliance on imports. Moreover, modern farming techniques, improved irrigation, and pest control are enhancing apple yields and orchard profitability. As consumer preferences shift toward healthier food choices, the Indian apple market is expected to grow significantly, presenting new opportunities for innovations in apple farming, such as precision agriculture, to meet the rising demand while ensuring sustainable and efficient production practices.
                            </p>
                        </div>
                        <div className="image">
                            <img src={img6} alt="Apple Orchards" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
     
    );
};

export default About;












/*import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_1280.jpg",
    "https://publish.tribuneindia.com/wp-content/uploads/2024/07/2023_1$largeimg_997319604.JPG",
    "https://img.freepik.com/premium-photo/operating-drone-amidst-fresh-apple-orchard_872147-57255.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <section>
      <div style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden" }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={Slide ${index + 1}}
            style={{
              display: index === currentSlide ? "block" : "none",
              width: "100%",
              height: "500px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

const about = () => {
  return (
    <>
      {/* Navbar 
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">PYYONEERS !</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="events.html" className="nav-link">FARMERS</a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">CONSUMERS</a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">VENDORS</a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a href="login page.html" className="nav-link">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Showcase 
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <br></br>
              <br></br>
              <h1>
                WELCOME TO <span className="text-warning">WORLD OF ORCHARDS!</span>
              </h1>
              <p className="lead my-4">
                Orchard Vision is a cutting-edge precision farming company dedicated to
                transforming apple orchard management through advanced drone technology.
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                REGISTRATION AVAILABLE
              </button>
            </div>
            <img
              className="img-fluid w-40 d-none d-sm-block"
              src="https://media.istockphoto.com/id/1287249551/vector/apple-orchard-design-apple-hanging-on-a-branch-vector-design-apple-fruit-farm-illustration.jpg?s=612x612&w=0&k=20&c=Oims0aozpIuzy0Mwl2trD9PB_9TN06eabeFWw5LzjmU="
              alt="Be Eventful"
              style={{ width: "10%", height: "10%" }}
            />
          </div>
        </div>
      </section>

      {/* Slideshow 
      <Slideshow />

      {/* Cards Section 
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            {[
              {
                title: "Health Monitoring",
                text: "Utilize high-resolution drone images to detect early signs of disease and stress in apple trees.",
                link: "conference.html",
              },
              {
                title: "Community Collaboration",
                text: "Foster shared insights and collective learning through data-sharing platforms.",
                link: "exhibition.html",
              },
              {
                title: "B2C Market Access",
                text: "A business's planned effort to debut a new product and make it available for purchase.",
                link: "product launch.html",
              },
              {
                title: "Efficient Pest Management",
                text: "Deploy targeted pest control measures based on drone-captured data.",
                link: "product launch.html",
              },
              {
                title: "Real-Time Decision Making",
                text: "Enable immediate, data-driven decisions through live drone analytics.",
                link: "workshop.html",
              },
              {
                title: "Accurate Yield Prediction",
                text: "Employ AI-driven analysis to estimate crop output with precision.",
                link: "workshop.html",
              },
            ].map((card, index) => (
              <div className="col-md" key={index}>
                <div className="card bg-dark text-light h-100 d-flex flex-column">
                  <div className="card-body text-center">
                    <h3 className="card-title mb-4">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                  <div className="card-footer mt-auto bg-transparent border-0">
                    <a href={card.link} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}*/