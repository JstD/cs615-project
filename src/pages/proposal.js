//proposal.js
import React from "react";

const Proposal = () => {
  return (
    <div>
      <h2>Proposal</h2>
      <h3>Group name: Andrew</h3>
      <h3>Member: Dung(Andrew) Truong</h3>
      <div align="left">
        <h3>1. Problem Statement</h3>
        Restaurants often struggle to promote their deals effectively and gather
        customer feedback on their marketing efforts. Traditional advertising
        methods can be costly, inconsistent, and difficult to track. Meanwhile,
        customers lack a centralized platform to discover promotions and share
        their dining experiences.
        <p />
        This project aims to bridge the gap by creating a website where
        restaurant managers can post and manage deals, while users can browse
        offers, provide feedback on promotions, and review restaurants. This
        platform will enhance restaurant visibility, improve marketing
        effectiveness, and foster a more interactive dining community.
        <h3>2. User's Point of View</h3>
        Restaurant managers want an easy way to post and manage promotions while
        gathering insights from customer feedback. Customers want a centralized
        platform to discover restaurant deals and share their experiences.
        <h3>3. User Goals:</h3>
        Restaurant managers want an easy way to post and manage promotions while
        gathering insights from customer feedback. Customers want a centralized
        platform to discover restaurant deals and share their experiences.
        <ul>
          <li>
            For Restaurant managers
            <ul>
              <li>Easily create and update promotional deals.</li>
              <li>Track customer engagement and feedback on deals.</li>
              <li>Improve marketing efforts based on user insights.</li>
            </ul>
          </li>
          <li>
            For customers
            <ul>
              <li>Browse and discover restaurant promotions.</li>
              <li>Provide feedback on promotions and dining experiences.</li>
              <li>Compare deals and find the best offers near them.</li>
            </ul>
          </li>
        </ul>
        <h3>4. User Actions</h3>
        Managers: Post new deals, edit or remove promotions, view feedback.
        <p />
        Users: Browse deals, leave reviews, rate promotions, share experiences.
        <h3>5. Potential Obstacles</h3>
        <ul>
          <li>Need to verify restaurant before uploading deals</li>
          <li>Handling spam or fake reviews.</li>
          <li>Encouraging user engagement with feedback.</li>
        </ul>
      </div>
    </div>
  );
};

export default Proposal;
