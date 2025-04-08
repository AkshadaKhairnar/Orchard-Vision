import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firestore instance
import "./DisplayVendors.css";



function DisplayVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vendors"));
        const vendorList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVendors(vendorList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vendors: ", error);
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="vendors-list">
      <h1>Registered Vendors</h1>
      {vendors.length === 0 ? (
        <p>No vendors found.</p>
      ) : (
        <table className="vendors-table">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Product Type</th>
              <th>Product Quantity</th>
              <th>Price Per Unit</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.vendorName}</td>
                <td>{vendor.productType}</td>
                <td>{vendor.productQuantity}</td>
                <td>{vendor.pricePerUnit}</td>
                <td>{vendor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayVendors;
