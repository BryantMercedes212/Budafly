import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import video from "../../assets/Movie.mp4";
import BarLoader from "react-spinners/BarLoader";
const Home = ({ addItem }) => {
  const URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(function () {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <div className="loading">
      <BarLoader
        height={30}
        width={500}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="green"
      />
    </div>
  ) : (
    <div className="homeContainer">
      <div className="landingContainer">
        <video src={video} className="landingImg" autoPlay loop muted />
        <p className="welcomeMessage">
          {" "}
          Well-being through the power of cannabis.{" "}
        </p>
      </div>
      <div className="aboutUs">
        <div className="aboutUsInformation">
          <div className="aboutUsTitle">ABOUT US</div>
          <h1> Growing green for good.</h1>
          <div className="aboutUsContent">
            At Budafly, we believe in the plant’s potential to improve health,
            happiness, and comfort. We invest in our people, our brands, and our
            retail experiences to power a profound shift in well-being.
          </div>
        </div>
        <img src="./home.jpg" />
      </div>
      <div className="focusAreas">
        <div className="focusAreasTitle">
          <p>FOCUS AREAS</p>
          <h1 className="focusTitle">
            We’re leaving our thumbprint on the industry.
          </h1>
          <p>
            To reach the furthest and do the most good, we focus on three areas:
            people, partners, and the plant.
          </p>
        </div>
        <div className="onfocus">
          <div className="focusItems">
            <img src="/palms.png" />
            <div className="focusItemsTitle">
              A place where people come first
            </div>
            <div className="focusItemsContent">
              Our real power is in our people and our shared commitment to
              giving back to the communities that we serve.
            </div>
          </div>
          <div className="focusItems">
            <img src="/brands.png" />
            <div className="focusItemsTitle">A family of brands</div>
            <div className="focusItemsContent">
              Because well-being is personal, we make brands and products to fit
              different preferences and lifestyle
            </div>
          </div>
          <div className="focusItems">
            <img src="/foward.png" />
            <div className="focusItemsTitle">Forward—thinking investing</div>
            <div className="focusItemsContent">
              We’re building the future of cannabis today. Together our team is
              creating and capturing opportunities with future-minded branding
              and retail experiences.
            </div>
          </div>
          <div className="focusItems">
            <div className="education">
              <img src="/education.png" />
            </div>
            <div className="focusItemsTitle">Information</div>
            <div className="focusItemsContent">
              {" "}
              We’re building the future of cannabis today. Together our team is
              creating and capturing opportunities with future-minded branding
              and retail experiences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
