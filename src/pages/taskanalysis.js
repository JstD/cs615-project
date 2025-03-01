//proposal.js
import React from "react";

const TaskAnalysis = () => {
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
          <h1>1. Posting and Managing a Deal (Restaurant Manager)</h1>
          <h2 style={{ fontWeight: "bold", color: "#d35400" }}>
            Goal: Allow restaurant managers to create, update, and remove
            promotional deals.
          </h2>

          <h2 style={headerStyle}>Subtasks:</h2>

          <h3 style={subHeaderStyle}>1. Access the deal management page</h3>
          <ul>
            <li>Log in as a restaurant manager.</li>
            <li>
              Navigate to the <strong>“Manage Deals”</strong> section.
            </li>
          </ul>

          <h3 style={subHeaderStyle}>2. Create a new deal</h3>
          <ul>
            <li>
              Click on <strong>“Create New Deal.”</strong>
            </li>
            <li>
              Enter deal details (discount percentage, food items, validity
              period, terms & conditions).
            </li>
            <li>Upload images (optional).</li>
            <li>
              Set deal visibility (public, student-only, time-restricted, etc.).
            </li>
            <li>
              Click <strong>“Publish.”</strong>
            </li>
          </ul>

          <h3 style={subHeaderStyle}>3. Edit or update an existing deal</h3>
          <ul>
            <li>Select an active deal from the list.</li>
            <li>Modify the details (price, validity, images, etc.).</li>
            <li>Save changes.</li>
          </ul>

          <h3 style={subHeaderStyle}>4. Remove a deal</h3>
          <ul>
            <li>Select the deal to be deleted.</li>
            <li>Confirm removal.</li>
          </ul>

          <h1 style={headerStyle}>2. Finding and Claiming a Deal (Customer)</h1>

          <h2 style={{ fontWeight: "bold", color: "#d35400" }}>
            Goal: Help customers search for deals based on preferences and claim
            discounts.
          </h2>

          <h2 style={headerStyle}>Subtasks:</h2>

          <h3 style={subHeaderStyle}>1. Search for a deal</h3>
          <ul>
            <li>Open the app/website.</li>
            <li>
              Use filters (location, cuisine, discount type, student deals,
              etc.).
            </li>
            <li>Browse available promotions.</li>
          </ul>

          <h3 style={subHeaderStyle}>2. View deal details</h3>
          <ul>
            <li>
              Select a deal to see restaurant information, discount details, and
              user reviews.
            </li>
          </ul>

          <h3 style={subHeaderStyle}>3. Claim a deal</h3>
          <ul>
            <li>
              Click <strong>“Claim Deal.”</strong>
            </li>
            <li>Receive a QR code or promo code.</li>
            <li>Follow instructions (use in-store, online, etc.).</li>
          </ul>

          <h3 style={subHeaderStyle}>4. Use the deal at the restaurant</h3>
          <ul>
            <li>Present QR code/promo code at checkout.</li>
            <li>Receive the discount.</li>
          </ul>

          <h1 style={headerStyle}>3. Reviewing & Rating a Deal (Customer)</h1>

          <h2 style={{ fontWeight: "bold", color: "#d35400" }}>
            Goal: Allow customers to review and rate promotions to help others
            make informed choices.
          </h2>

          <h2 style={headerStyle}>Subtasks:</h2>

          <h3 style={subHeaderStyle}>1. Access the review section</h3>
          <ul>
            <li>
              Navigate to <strong>“My Claimed Deals.”</strong>
            </li>
            <li>Select the deal to review.</li>
          </ul>

          <h3 style={subHeaderStyle}>2. Rate the deal</h3>
          <ul>
            <li>Give a star rating (1-5).</li>
            <li>
              Optionally, rate specific aspects (e.g., food quality, discount
              value, service).
            </li>
          </ul>

          <h3 style={subHeaderStyle}>3. Write a review</h3>
          <ul>
            <li>
              Describe the experience (Was the deal worth it? Were there any
              hidden conditions?).
            </li>
            <li>Upload images (optional).</li>
          </ul>

          <h3 style={subHeaderStyle}>4. Submit review</h3>
          <ul>
            <li>
              Click <strong>“Post Review.”</strong>
            </li>
            <li>
              Review gets verified (e.g., only claimed deals can be reviewed).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskAnalysis;
