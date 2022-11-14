import React, { useState } from "react";

import "./NewsLetter.css";

const NewsLetter = (props) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const submitEmailSubscription = () => {
    // set loader to true
    setLoader(true);

    const requestParams = {
      method: "POST",
    };

    fetch("https://www.myendpoint.com", requestParams)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);

        // replace view with success view
      })
      .catch((err) => {
        // set loader to false
        // set an error state
      });
  };

  return (
    <div className="emailSubscriptionForm">
      <div className="emailSubscriptionForm__title">Join the newsletter!</div>
      <p className="emailSubscriptionForm__description">
        Subscribe to get the latest content by email and to become a fellow
        pineapple 🍍
      </p>
      <form>
        <div className="emailSubscriptionForm__formInput">
          <input
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="emailSubscriptionForm__formInput">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button
          className="emailSubscriptionForm__submitButton"
          onClick={submitEmailSubscription}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
