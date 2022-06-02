import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="wrapper">
      <h1>About Budafly</h1>
      <br></br>
      <p>
        Our mission is to support human consciousness - to inspire, connect, and
        calm the mind and body - through intelligent consumption of our natural
        flower, extractions, and infused products.
      </p>
      <br></br>
      <p>
        It's private. Buying legal marijuana online makes the process completely
        private and discreet. We are bringing it directly to the consumers via
        online e-commerce sales and also selling them wholesale to retail
        stores.
      </p>{" "}
      <br></br>
      <p>
        Our commitment to you - great quality products at a reasonable price.
      </p>
      <br></br>
      <br></br>
      <div>
        <h1><Link to="/FAQs">Frequently Asked Questions</Link></h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1><Link to="/Laws">LAWS</Link></h1>
      </div>
    </div>
  );
};

export default About;
