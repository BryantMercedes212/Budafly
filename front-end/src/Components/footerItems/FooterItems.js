import "./FooterItems.css";

const FooterItems = ({ title, items }) => {
  if (items) {
    items = items.map((item) => {
      return <div className="footerItem">{item}</div>;
    });
  }

  return (
    <div className="footerItems">
      <div className="footerTitle"> {title} </div>
      <div className="footerItemsContainer">{items}</div>
    </div>
  );
};

export default FooterItems;
