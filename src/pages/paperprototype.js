//proposal.js
import Welcome from "../assets/paper-prototypes/welcome.jpg";
import WelcomeFixed from "../assets/paper-prototypes/welcome-fixed.jpg";

import ListDeal from "../assets/paper-prototypes/list-deal.jpg";
import ListDealFixed from "../assets/paper-prototypes/list-deal-fixed.jpg";

import ClaimedDeal from "../assets/paper-prototypes/claimed-deal.jpg";
import OwnedDeal from "../assets/paper-prototypes/owned-deal.jpg";
import OwnedDealFixed from "../assets/paper-prototypes/owned-deal-fixed.jpg";

import CreateDeal from "../assets/paper-prototypes/create-deal.jpg";
const PaperPrototype = () => {
  return (
    <div>
      <h1>Paper Prototyping and Low-Fidelity Testing</h1>
      <h2>I. Prototype Photos</h2>
      <h3>1. Welcome Screen</h3>
      <img src={Welcome} alt="Welcome Screen" style={{ maxWidth: "50%" }} />
      <h3>2. List Deals & details</h3>
      <img
        src={ListDeal}
        alt="List Deals & details"
        style={{ maxWidth: "50%" }}
      />
      <h3>3. Claimed Deals</h3>
      <img
        src={ClaimedDeal}
        alt="List Deals & details"
        style={{ maxWidth: "50%" }}
      />
      <h3>4. Manager's Deals</h3>
      <img
        src={OwnedDeal}
        alt="List Deals & details"
        style={{ maxWidth: "50%" }}
      />
      <h3>5. Create a new deal</h3>
      <img
        src={CreateDeal}
        alt="create a new deal"
        style={{ maxWidth: "50%" }}
      />
      <h2>II. Briefing</h2>
      <h3>Purpose of the Application</h3>
      This web application is designed to help restaurants promote their deals
      more effectively while providing customers with a centralized platform to
      discover and claim promotions. Traditional restaurant marketing methods,
      such as flyers, social media posts, and third-party advertisements, can be
      inconsistent, costly, and difficult to track. Likewise, customers often
      struggle to find the best restaurant deals because they are scattered
      across various sources. Our platform solves these issues by allowing:
      <ul>
        <li>
          {" "}
          Restaurant managers to post, manage, and track promotions in one
          place.
        </li>
        <li>
          Customers to easily browse and compare restaurant deals, claim
          promotions, and leave feedback.
        </li>
      </ul>
      This will increase restaurant visibility, improve marketing effectiveness,
      and enhance the dining experience by making deals more accessible and
      transparent.
      <h3>Background Information</h3>
      (Some key points about the domain:)
      <ul>
        <li>
          {" "}
          Restaurants frequently run discounts and special offers to attract
          customers, especially during non-peak hours or when launching new menu
          items. However, reaching the right audience efficiently remains a
          challenge.
        </li>
        <li>
          Many customers, particularly students and budget-conscious diners,
          actively seek discounts but may struggle to find them in one place.
          They rely on social media, word of mouth, or restaurant websites,
          which can be time-consuming and inconsistent.
        </li>
        <li>
          Customers may hesitate to trust online promotions due to concerns
          about misleading ads or fake reviews. Our platform mitigates this by
          allowing only verified deal claimers to leave feedback.
        </li>
        <li>
          Restaurants benefit from direct customer feedback on their deals,
          helping them refine their marketing strategies. Customers, in turn,
          appreciate an interactive platform where they can compare offers and
          share experiences.
        </li>
      </ul>
      <h2>III. Scenario Tasks</h2>
      <h3>1. Posting and Managing a Deal (Restaurant Manager)</h3>
      Allow restaurant managers to create, update, and remove promotional deals.
      <h3>2. Finding and Claiming a Deal (Customer)</h3>
      Help customers search for deals based on preferences and claim discounts.
      <h3>3. Reviewing & Rating a Deal (Customer)</h3>
      Allow customers to review and rate promotions to help others make
      informed.
      <h2>IV. Observations</h2>
      <h3>1. Posting and Managing a Deal (Restaurant Manager)</h3>
      <ul>
        <li>
          Tester wanted to see the Deal statistics before viewing other users
          comments
        </li>
        <li>The edit button is unclear to see for tester</li>
      </ul>
      <h3>2. Finding and Claiming a Deal (Customer)</h3>
      <li>
        The placeholder "Search for somethings" make testers being confused
      </li>
      <li>
        Tester try to find out the "Claim" button at the end of page (It is
        currently on the top)
      </li>
      <h2>V. Prototype Iteration</h2>
      Based on tester observations and feedback, we implemented the following
      changes to our prototype:
      <ul>
        <li>
          Page Manager's Deals: Move the deal statistics upper for manager
          easier to see and display number of view in list item
        </li>
        <img
          src={OwnedDealFixed}
          alt="List Deals & details"
          style={{ maxWidth: "50%" }}
        />
        <p />
        <li>
          Page Welcome: replace "Search for somethings" by "Search for deals
        </li>
        <img
          src={WelcomeFixed}
          alt="Welcome Screen"
          style={{ maxWidth: "50%" }}
        />
        <p />
        <li>
          Page List Deals & details: move "Claim" button to bottom of deal
          details. Add number of view in list item
        </li>
        <img
          src={ListDealFixed}
          alt="List Deals & details"
          style={{ maxWidth: "50%" }}
        />
      </ul>
    </div>
  );
};

export default PaperPrototype;
