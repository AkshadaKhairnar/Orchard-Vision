// BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ drone }) => {
  const [farmSize, setFarmSize] = useState(1); // Default farm size is 1 acre
  const [totalSubscription, setTotalSubscription] = useState(drone.subscription);

  const handleFarmSizeChange = (e) => {
    const size = e.target.value;
    setFarmSize(size);

    // Calculate subscription based on farm size
    const basePrice = parseInt(drone.subscription.match(/\d+/)[0], 10); // Extract base price
    const updatedPrice = basePrice * size; // Adjust subscription as per farm size
    setTotalSubscription(`Rs.${updatedPrice}/month`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for booking ${drone.name} for your ${farmSize}-acre farm. Total cost: ${totalSubscription}`);
  };

  return (
    <div className="booking-form-container">
      <h2>Book {drone.name}</h2>
      <p><strong>Type:</strong> {drone.type}</p>
      <p><strong>Specifications:</strong> {drone.specifications}</p>
      <p><strong>Description:</strong> {drone.description}</p>
      <p><strong>Base Subscription:</strong> {drone.subscription}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Farm Size (in acres):
          <input
            type="number"
            value={farmSize}
            onChange={handleFarmSizeChange}
            min="1"
            required
          />
        </label>
        <p><strong>Total Subscription:</strong> {totalSubscription}</p>
        <button type="submit" className="submit-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
