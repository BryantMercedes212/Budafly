import FooterItems from "../footerItems/FooterItems";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <FooterItems
          title={"Get to Know Us"}
          items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
        />
        <FooterItems
          title={"Get to Know Us"}
          items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
        />

        <FooterItems
          title={"Get to Know Us"}
          items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
        />

        <FooterItems
          title={"Get to Know Us"}
          items={["Mission", "Careers", "NewsRoom", "Contact us", "FAQs"]}
        />
      </div>
    </div>
  );
};

export default Footer;
