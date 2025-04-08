import React, { useState } from "react"; // Add useState import
import "./Vendors.css";

import { db } from "./firebaseConfig"; // Import your Firestore config
import { collection, addDoc } from "firebase/firestore";

function Vendors() {
  // State for Vendor Registration form
  const [vendorName, setVendorName] = useState("");
  const [productType, setProductType] = useState("fertilizer");
  const [productQuantity, setProductQuantity] = useState(1);
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [location, setLocation] = useState("");

  // State for Vendor Logistics form
  const [logisticsData, setLogisticsData] = useState({
    vendorName: "",
    phone: "",
    orchardLocation: "",
    deliveryQuantity: 1,
    date: "",
    time: "",
    from: "",
    to: "",
  });

  // State for Product Orders form
  const [productOrderData, setProductOrderData] = useState({
    vendorName: "",
    productType: "fertilizer",
    orderQuantity: "1",
    location: "",
  });

  // Handle change for Logistics form
  const handleLogisticsChange = (e) => {
    const { name, value } = e.target;
    setLogisticsData({ ...logisticsData, [name]: value });
  };

  // Handle change for Product Orders form
  const handleProductOrderChange = (e) => {
    const { name, value } = e.target;
    setProductOrderData({ ...productOrderData, [name]: value });
  };

  // Handle Vendor Registration form submission
  const handleVendorRegistration = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "vendors"), {
        vendorName,
        productType,
        productQuantity,
        pricePerUnit,
        location,
      });
      alert("Vendor Registered Successfully!");
      // Clear form fields
      setVendorName("");
      setProductType("fertilizer");
      setProductQuantity(1);
      setPricePerUnit("");
      setLocation("");
    } catch (error) {
      console.error("Error adding vendor: ", error);
    }
  };

  // Handle Logistics form submission
  const handleLogisticsSubmission = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "logistics"), logisticsData);
      alert("Logistics Scheduled Successfully!");
      // Clear logistics form
      setLogisticsData({
        vendorName: "",
        phone: "",
        orchardLocation: "",
        deliveryQuantity: 1,
        date: "",
        time: "",
        from: "",
        to: "",
      });
    } catch (error) {
      console.error("Error adding logistics: ", error);
      alert("Failed to submit logistics data. Please try again.");
    }
  };

  // Handle Product Orders form submission
  const handleProductOrderSubmission = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "productOrders"), productOrderData);
      alert("Product order submitted successfully!");
      setProductOrderData({
        vendorName: "",
        productType: "fertilizer",
        orderQuantity: "1",
        location: "",
      });
    } catch (error) {
      console.error("Error submitting product order: ", error);
      alert("Failed to submit product order. Please try again.");
    }
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="app-header"></header>

      {/* Main Section */}
      <main className="main-container">
        <h1>Vendors - Apple Orchard Necessities</h1>
        <img
          src="https://img.freepik.com/free-photo/orchard-full-fruit-trees-agricultural-landscape_1268-30591.jpg"
          alt="Apple Orchard Necessities"
          className="header-image"
        />

        {/* Vendor Registration Section */}
        <section className="booking-section">
          <h2>VENDOR REGISTRATION</h2>
          <form className="form-grid" onSubmit={handleVendorRegistration}>
            <div>
              <label>Vendor Name:</label>
              <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                placeholder="Enter vendor name"
                required
              />
            </div>
            <div>
              <label>Product Type:</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="fertilizer">Fertilizer</option>
                <option value="tools">Tools</option>
                <option value="seeds">Seeds</option>
                <option value="pesticides">Pesticides</option>
              </select>
            </div>
            <div>
              <label>Product Quantity:</label>
              <select
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Price per Unit:</label>
              <input
                type="number"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                placeholder="Enter price per unit"
                required
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                required
              />
            </div>
            <button className="primary-button" type="submit">
              Register Vendor
            </button>
          </form>
        </section>

        {/* Product Orders Section */}
        <section className="booking-section">
          <h2>PRODUCT ORDERS</h2>
          <form className="form-grid" onSubmit={handleProductOrderSubmission}>
            <div>
              <label>Vendor Name:</label>
              <input
                type="text"
                name="vendorName"
                value={productOrderData.vendorName}
                onChange={handleProductOrderChange}
                placeholder="Enter vendor name"
                required
              />
            </div>
            <div>
              <label>Product Type:</label>
              <select
                name="productType"
                value={productOrderData.productType}
                onChange={handleProductOrderChange}
                required
              >
                <option value="fertilizer">Fertilizer</option>
                <option value="tools">Tools</option>
                <option value="seeds">Seeds</option>
                <option value="pesticides">Pesticides</option>
              </select>
            </div>
            <div>
              <label>Order Quantity:</label>
              <select
                name="orderQuantity"
                value={productOrderData.orderQuantity}
                onChange={handleProductOrderChange}
                required
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={productOrderData.location}
                onChange={handleProductOrderChange}
                placeholder="Enter location"
                required
              />
            </div>
            <button className="primary-button" type="submit">
              Submit Order
            </button>
          </form>
        </section>

        {/* Vendor Logistics Section */}
        <section className="booking-section">
          <h2>VENDOR LOGISTICS</h2>
          <form className="form-grid" onSubmit={handleLogisticsSubmission}>
            <div>
              <label>Vendor Name:</label>
              <input
                type="text"
                name="vendorName"
                value={logisticsData.vendorName}
                onChange={handleLogisticsChange}
                placeholder="Enter vendor name"
                required
              />
            </div>
            <div>
              <label>Phone No:</label>
              <input
                type="tel"
                name="phone"
                value={logisticsData.phone}
                onChange={handleLogisticsChange}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label>Orchard Location:</label>
              <input
                type="text"
                name="orchardLocation"
                value={logisticsData.orchardLocation}
                onChange={handleLogisticsChange}
                placeholder="Enter orchard location"
                required
              />
            </div>
            <div>
              <label>Delivery Quantity:</label>
              <select
                name="deliveryQuantity"
                value={logisticsData.deliveryQuantity}
                onChange={handleLogisticsChange}
                required
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={logisticsData.date}
                onChange={handleLogisticsChange}
                required
              />
            </div>
            <div>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={logisticsData.time}
                onChange={handleLogisticsChange}
                required
              />
            </div>
            <div>
              <label>From:</label>
              <input
                type="text"
                name="from"
                value={logisticsData.from}
                onChange={handleLogisticsChange}
                placeholder="Starting point"
                required
              />
            </div>
            <div>
              <label>To:</label>
              <input
                type="text"
                name="to"
                value={logisticsData.to}
                onChange={handleLogisticsChange}
                placeholder="Destination point"
                required
              />
            </div>
            <button className="primary-button" type="submit">
              Schedule Delivery
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>&copy; 2024 Apple Orchard Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Vendors;
