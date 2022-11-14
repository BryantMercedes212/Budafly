import FooterItems from "../footerItems/FooterItems";
import NewsLetter from "../newsLetter/NewsLetter";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerElements">
          <FooterItems
            title={"Get to Know Us"}
            items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
          />
          <FooterItems
            title={"Get to Know Us"}
            items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
          />
        </div>
        <div className="news">
          {" "}
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
