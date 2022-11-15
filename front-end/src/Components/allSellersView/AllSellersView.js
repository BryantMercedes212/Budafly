import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AllSellersView.css";

const AllSellerView = () => {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [allSeller, setAllSeller] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URL}/users/`);
      setAllSeller(res.data);
    } catch (error) {
      console.log(error);
      setAllSeller([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const designedSeller = allSeller.map((seller) => {
    return (
      <div className={`sellerCard`}>
        <div
          className="sellerCard__image"
          onClick={() => navigate(`/seller/${seller.user_id}/products`)}
        >
          {seller.image ? (
            <img src={seller.image} alt="sellerStore" className={"image"} />
          ) : (
            <img src={"/shop.png"} alt="sellerStore" className={"image"} />
          )}
        </div>
        <div className="storeName">
          {" "}
          {`${seller.firstname} ${seller.lastname}'s Store`}
        </div>

        <div
          className="goToStore"
          onClick={() => {
            navigate(`/seller/${seller.user_id}/products`);
          }}
        >
          Go To Shop
        </div>
      </div>
    );
  });

  return (
    <div className="productCards">
      <div className="productCards__container">{designedSeller}</div>
    </div>
  );
};

export default AllSellerView;
