//proposal.js
import React from "react";
import Manage from "../assets/sketchs/manage.jpg";
import Search from "../assets/sketchs/search.jpg";
import Review from "../assets/sketchs/review.jpg";
const Storyboard = () => {
  return (
    <div>
      <h1>Storyboards & Sketches</h1>
      <h2> Task 1: Posting and Managing a Deal </h2>
      <img src={Manage} alt="Manage Deals" style={{ maxWidth: "70%" }} />
      <div style={{ fontWeight: "bold" }}>
        Why this sketch?
        <span style={{ fontWeight: "normal" }}>
          This sketch was chosen for its clear, structured layout, making it
          easy for restaurant managers to create, edit, and manage deals
          efficiently. It includes:
          <ul>
            <li>
              A dashboard with essential options (
              <strong>Create New Deal</strong>, <strong>Manage Deals</strong>).
            </li>
            <li>
              A deal creation form with necessary fields (<strong>Title</strong>
              , <strong>Discount %</strong>, <strong>Validity</strong>,{" "}
              <strong>Terms</strong>, <strong>Image Upload</strong>).
            </li>
            <li>Quick management controls to edit, delete deals.</li>
            <li>
              A simple, intuitive UI for ease of use and future scalability.
            </li>
          </ul>
        </span>
      </div>

      <h2> Task 2: Finding and Claiming a Deal</h2>
      <img src={Search} alt="Claim Deals" style={{ maxWidth: "70%" }} />
      <div style={{ fontWeight: "bold" }}>
        Why this sketch?{" "}
        <span style={{ fontWeight: "normal" }}>
          Because it effectively displays search filters, deal listings, and an
          intuitive way to claim deals. It ensures easy navigation, highlights
          important deal details to enhance trust and decision-making.
        </span>
      </div>

      <h2> Task 3: Reviewing & Rating a Deal </h2>
      <img src={Review} alt="Review Deals" style={{ maxWidth: "70%" }} />
      <div style={{ fontWeight: "bold" }}>
        Why this sketch?
        <span style={{ fontWeight: "normal" }}>
          This sketch was chosen for its clear and user-friendly layout,
          allowing users to rate deals, write reviews. It includes a star rating
          system, optional rating categories, and a verification step to ensure
          only claimed deals can be reviewed, enhancing credibility and
          usability.
        </span>
      </div>
    </div>
  );
};

export default Storyboard;
