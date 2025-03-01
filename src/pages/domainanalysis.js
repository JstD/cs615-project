//proposal.js
import React from "react";
import { Image } from "antd";

const DomainAnalysis = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
  };

  const contentStyle = {
    maxWidth: "800px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = { color: "#333" };
  const subHeaderStyle = { color: "#d35400" };
  return (
    <div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headerStyle}>Entities and Relationships</h1>
          <Image
            src="https://i.imgur.com/8CjSf2M.png"
            style={{ width: "500px" }}
          ></Image>
          <h2 style={subHeaderStyle}>Entities:</h2>
          <ul>
            <li>
              <strong>User:</strong> Represents any person using the platform,
              either a Manager (who posts deals) or a Customer (who browses and
              claims deals).
            </li>
            <li>
              <strong>Restaurant:</strong> A dining establishment that offers
              promotions through the platform. Managed by a Restaurant Manager.
            </li>
            <li>
              <strong>Deal:</strong> A special discount or offer created by a
              Manager for a Restaurant. Customers can claim and review deals.
            </li>
            <li>
              <strong>Review:</strong> A rating and review text that a Customer
              leaves for a Restaurant.
            </li>
            <li>
              <strong>Feedback:</strong> A rating and comment that a Customer
              leaves specifically for a Deal to assess its effectiveness.
            </li>
          </ul>

          <h2 style={subHeaderStyle}>Relationships:</h2>
          <ul>
            <li>
              <strong>"Manage" Relationship (1:N):</strong> A Manager oversees
              multiple Restaurants.
            </li>
            <li>
              <strong>"Create" Relationship (1:N):</strong> A Manager can create
              multiple Deals.
            </li>
            <li>
              <strong>"Feedback" Relationship (1:N):</strong> Customers can
              provide feedback on multiple Deals.
            </li>
            <li>
              <strong>"Review" Relationship (1:N):</strong> Customers can review
              multiple Restaurants.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomainAnalysis;
