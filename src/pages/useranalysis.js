//proposal.js
import React from "react";

const UserAnalysis = () => {
  return (
    <div>
      <h2>Persona</h2>
      <h3 style={{ color: "blue" }}>
        Persona 1: Restaurant Manager (Mr David)
      </h3>
      <div style={{ paddingLeft: "2em" }}>
        <p>
          <strong>Age:</strong> 42
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
        <p>
          <strong>Education:</strong> Bachelor's degree in Business
          Administration
        </p>
        <p>
          <strong>Computer Experience:</strong> Moderate (uses POS systems,
          social media for promotions)
        </p>
        <p>
          <strong>Motivation:</strong> Wants to increase customer traffic and
          engagement with promotions
        </p>
        <p>
          <strong>Domain Experience:</strong> 10+ years managing a mid-sized
          restaurant
        </p>
        <p>
          <strong>Usage Context:</strong> In the restaurant office on a desktop
          or on a tablet while on the go
        </p>
        <p>
          <strong>Distractions:</strong> Busy restaurant environment, staff
          management, order handling
        </p>
        <p>
          <strong>Communication Patterns:</strong> Prefers email and dashboard
          analytics over phone calls
        </p>

        <strong>Needs from the Platform:</strong>
        <ul>
          <li>A fast and easy way to create, update, and remove promotions</li>
          <li>Insights on customer engagement and feedback</li>
          <li>A system to verify and prevent fake reviews</li>
          <li>A way to track the effectiveness of promotions</li>
        </ul>
      </div>
      <h3 style={{ color: "blue" }}>Persona 2: Deal Hunter (Duy Le)</h3>
      <div style={{ paddingLeft: "2em" }}>
        <p>
          <strong>Age:</strong> 22
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
        <p>
          <strong>Education:</strong> Graduate student, majoring in Computer
          Science
        </p>
        <p>
          <strong>Computer Experience:</strong> Tech expert
        </p>
        <p>
          <strong>Motivation:</strong> Wants affordable dining options while
          balancing a tight budget
        </p>
        <p>
          <strong>Domain Experience:</strong> Limited knowledge of restaurant
          marketing, focuses on price over brand
        </p>
        <p>
          <strong>Usage Context:</strong> On mobile/Desktop while looking for
          deals near campus or home
        </p>
        <p>
          <strong>Distractions:</strong> Exams, part-time job, social life
        </p>
        <p>
          <strong>Communication Patterns:</strong> Prefers push notifications
          and emails about top deals
        </p>

        <strong>Needs from the Platform:</strong>
        <ul>
          <li>A simple way to browse and compare restaurant deals</li>
          <li>Clear descriptions and expiration dates for promotions</li>
          <li>Honest user reviews to verify deal quality</li>
          <li>A rating system to highlight the best offers</li>
        </ul>
      </div>
      <h2>Interview Results</h2>
      <h3 style={{ color: "blue" }}>Restaurant Manager, Boston</h3>
      <p style={{ fontWeight: "bold" }}>
        Q: What are your biggest challenges in promoting restaurant deals
        effectively?
      </p>
      <p>
        We post our deals on Instagram and Facebook. We also use Google My
        Business to update promotions, but engagement can be inconsistent.
        Sometimes, people see our posts, but it’s hard to measure if they
        actually visit because of them.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: Why do you think your current promotional strategies are not driving
        enough customer engagement?
      </p>
      <p>
        We post deals on Instagram and Facebook, but the engagement isn’t always
        consistent. Sometimes, our posts get buried in people's feeds, and even
        when customers see the promotion, they might forget about it by the time
        they plan to dine out.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: How do you currently track the success of your promotions? What data
        do you rely on?
      </p>
      <p>
        We compare sales before, during, and after a promotion to see if there’s
        a noticeable increase in customers or revenue. If we see a spike in
        sales, we assume the promotion worked.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: Have fake reviews negatively impacted your business? If so, how do
        you handle them?
      </p>
      <p>
        Yes, we’ve had issues with fake negative reviews from people who never
        dined at our restaurant. Sometimes, competitors or disgruntled former
        employees leave bad reviews, and it’s frustrating because it affects our
        reputation and deters potential customers.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: Would a centralized platform for promotions and customer feedback
        solve your challenges? Why or why not?
      </p>
      <p>
        It sounds useful, but only if it’s easy to use. I don’t have time to
        learn a complicated system. If the platform is simple, lets me track
        promotions, and gives clear feedback, I’d definitely use it.
      </p>
      <h3 style={{ color: "blue" }}>Casual Diner, Boston</h3>
      <p style={{ fontWeight: "bold" }}>
        Q: How do you usually find out about restaurant promotions?
      </p>
      <p>
        If a friend tells me about a great deal at a restaurant they went to,
        I’ll check it out. I don’t actively look for promotions, but if I hear
        about a good one, I’ll take advantage of it.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: What makes you trust or ignore a deal?
      </p>
      <p>
        I ignore deals that seem too good to be true or have too many
        restrictions. If I have to read the fine print to figure out how to use
        it, it’s not worth my time.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: Do you leave reviews for restaurants? If so, why?
      </p>
      <p>
        I only leave reviews if I had an amazing experience or a really bad one.
        If the food and service were great, I want to support the restaurant. If
        I had a terrible experience, I leave a review to warn others.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: What frustrates you about discovering deals?
      </p>
      <p>
        Some places advertise a deal, but when you get there, they say it’s for
        something completely different. It feels like a trick to get people in
        the door.
      </p>

      <p style={{ fontWeight: "bold" }}>
        Q: What would make a deal-hunting platform more appealing to you?
      </p>
      <p>
        The deals need to be real and up to date. I don’t want to show up at a
        restaurant only to find out the deal isn’t valid anymore.
      </p>
    </div>
  );
};

export default UserAnalysis;
