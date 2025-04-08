import React,  { useState } from 'react';
import BookingForm from './BookingForm';
import './DroneProvider.css';

const droneData = [
  {
    id: 1,
    name: 'Basic Model A',
    type: 'Quadcopter',
    
    description: 'A versatile quadcopter suitable for aerial photography.',
    subscription: 'Monthly subscription: Rs.1500/month',
    specifications: 'Flight Time: 30 mins | Range: 1000m | Camera: 1080p',
  },
  {
    id: 2,
    name: 'Intermediate Model B',
    type: 'Hexacopter',
   
    description: 'High stability hexacopter for more Feature based use.',
    subscription: 'Monthly subscription: Rs.2000/month',
    specifications: 'Flight Time: 40 mins | Range: 1500m | Camera: 4k',
  },
  {
    id: 3,
    name: 'Advanced Model C',
    type: 'HexaCopter with inflight processing',

    description: 'Fast and agile flight Processing drone for advanced operations.',
    subscription: 'Monthly subscription: Rs.2500/month',
    specifications: 'Flight Time: 45 mins | Range: 1800m | Camera: 4K ',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Revti Mishra',
    feedback: 'Using these drones has transformed my orchard management! Highly recommended!',
  },
  {
    id: 2,
    name: 'Jay Sharma',
    feedback: 'Professional service and excellent drone options. The booking process was smooth!',
  },
];

const FAQs = [
  {
    question: 'How do I book a drone?',
    answer: 'Simply click on the "Book Now" button next to the drone you are interested in.',
  },
  {
    question: 'What kind of drones do you offer?',
    answer: 'We offer a variety of drones suitable for photography, surveying, and racing.',
  },
];

const DroneProvider = () => {
  const [selectedDrone, setSelectedDrone] = useState(null);
  const handleBookingClick = (drone) => {
    setSelectedDrone(drone);
  };

  const handleCloseModal = () => {
    setSelectedDrone(null);
  };
  return (
    <div className="drone-provider-container">
      <h2 className="title">Drone Booking for Orchard Owners</h2>
      <img
          src="https://img.freepik.com/free-photo/men-piloting-drone-capture-aerial-farm-image-generated-by-ai_188544-31059.jpg?t=st=1734058444~exp=1734062044~hmac=195744262f436fef076ec1cec29d1360a25edb87ab1d2267fc69f85d64be720e&w=1060"
          alt="Apple Orchard Necessities"  className="header-image"></img>
      <section className="intro">
        <p>Welcome to our drone booking service! We provide a range of drones designed to meet the specific needs of orchard owners, from aerial photography to crop monitoring. Explore our options below and find the perfect drone for your requirements.</p>
      </section>

      <div className="drone-list">
        {droneData.map(drone => (
          <div key={drone.id} className="drone-card">
            <h3 className="drone-name">{drone.name}</h3>
            <p className="drone-type"><strong>Type:</strong> {drone.type}</p>
            {/*<p className="drone-price"><strong>Price:</strong> {drone.price}</p>*/}
            <p className="drone-description">{drone.description}</p>
            <p className="drone-specifications"><strong>Specifications:</strong> {drone.specifications}</p>
            <p className="drone-subscription"><strong>Subscription Info:</strong> {drone.subscription}</p>
            <button className="booking-button" onClick={() => handleBookingClick(drone)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-list">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faqs">
        <h3>Frequently Asked Questions</h3>
        <ul>
          {FAQs.map((faq, index) => (
            <li key={index} className="faq-item">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {selectedDrone && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <BookingForm drone={selectedDrone} />
          </div>
        </div>
      )}

    </div>
  );
};

export default DroneProvider;