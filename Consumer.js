import React, { useState } from "react";
import './Consumer.css'; // Ensure to link the correct CSS file
import img3 from "./images/img3.jpg";
import DRONE1 from './images/DRONE1.jpg';
import apple from "./images/apple.png";
import system from "./images/system.png";
import quality from "./images/quality.png";
import farmer from "./images/farmer.png";

function Consumer() {
  const [cartons, setCartons] = useState(0);
  const [totalPrice, setTotalPrice] = useState("Rs. 0");
  const [notification, setNotification] = useState("");

  const handleCartonsChange = (e) => {
    const cartonsValue = parseInt(e.target.value, 10);
    const pricePerCarton = 500;

    if (!isNaN(cartonsValue) && cartonsValue > 0) {
      setCartons(cartonsValue);
      setTotalPrice(`Rs. ${cartonsValue * pricePerCarton}`);
    } else {
      setCartons(0);
      setTotalPrice('Rs. 0');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNotification("Order Placed Successfully!");
    
    setTimeout(() => {
      setCartons(0);
      setTotalPrice('Rs. 0');
      setNotification("");
    }, 3000); // Reset after 3 seconds
  };

  return (
    <div className="Consumer">
      

      <main>
        <section className="her">
          <img src={img3} alt="Orchard Vision" />
          <div className="discover-btn">
            <a href="#discover">Buy Now</a>
          </div>
        </section>

        <section className="info-section">
          <div className="row">
            <div className="image">
              <img src={DRONE1} alt="About Us" />
            </div>
            <div className="content">
              <h2>| ABOUT US</h2>
              <p>Orchard Vision is a cutting-edge precision farming company dedicated to transforming apple orchard management through advanced drone technology...</p>
            </div>
          </div>
        </section>

        <section className="benefits-section">
  <h2 className="benefits-title">| WHY BUY FROM US</h2>
  <div className="benefit-container">
    <div className="card">
      <div className="benefit">
        <img src={apple} alt="Fresh from Farm Icon" className="benefit-icon" />
        <div className="benefit-content">
          <h3><strong>Fresh Right from the Farm:</strong></h3>
          <p>We deliver freshly harvested apples directly from the farm to your doorstep, ensuring top-notch quality and flavor.</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="benefit">
        <img src={system} alt="Eco-Friendly Practices Icon" className="benefit-icon" />
        <div className="benefit-content">
          <h3><strong>Eco-Friendly Practices:</strong></h3>
          <p>Our farming methods prioritize sustainability, promoting healthy ecosystems and reducing environmental impact.</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="benefit">
        <img src={quality} alt="Premium Quality Icon" className="benefit-icon" />
        <div className="benefit-content">
          <h3><strong>Premium Quality Guaranteed:</strong></h3>
          <p>Every apple is carefully selected to meet the highest quality standards for a superior taste experience.</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="benefit">
        <img src={farmer} alt="Support Farmers Icon" className="benefit-icon" />
        <div className="benefit-content">
          <h3><strong>Supporting Local Farmers:</strong></h3>
          <p>Your purchase helps empower local farmers, contributing to their growth and sustainability.</p>
        </div>
      </div>
    </div>
  </div>
</section>



        <div className="variety">
          <h2>| VARIETY WE OFFER</h2>
          <section className="cards-section">
            <div className="card">
              <img src="https://i.ibb.co/t2x706V/amber.jpg" alt="Apple Variety" />
              <div className="card-title">Amber</div>
            </div>
            <div className="card">
              <img src="https://i.ibb.co/H4Cnh7v/american-trel.png" alt="Apple Variety" />
              <div className="card-title">American Trel</div>
            </div>
            <div className="card">
              <img src="https://i.ibb.co/jTDgqYB/red-delicious.png" alt="Apple Variety" />
              <div className="card-title">Red Delicious</div>
            </div>
            <div className="card">
              <img src="https://i.ibb.co/MSvg1QN/maharaja.png" alt="Apple Variety" />
              <div className="card-title">Maharaej</div>
            </div>
          </section>
        </div>

        <section className="buy-now">
          <h2 className="buy-now-title">Buy Now</h2>
          <div className="form-card">
            <form id="buy-form" className="buy-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-row">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required />
              </div>
              <div className="form-row">
                <label htmlFor="cartons">Number of Cartons:</label>
                <input
                  type="number"
                  id="cartons"
                  name="cartons"
                  value={cartons}
                  onChange={handleCartonsChange}
                  required
                  min="1"
                />
                <br></br>
              </div>
              <div className="form-row">
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" required>
                  <option value="consumer">Consumer</option>
                  <option value="cannery">Cannery Owner</option>
                </select>
              </div>
              <br></br>
              <div className="form-row">
                <label htmlFor="total-price">Total Price:</label>
                <input
                  type="text"
                  id="total-price"
                  name="total-price"
                  value={totalPrice}
                  readOnly
                />
              </div>

              <button type="submit" id="buy-now-btn">Buy Now</button>
            </form>
            {notification && <p id="notification" className="notification">{notification}</p>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Consumer;
