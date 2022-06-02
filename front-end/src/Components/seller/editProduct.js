import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductForm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { id, pid } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    cannabinoid: "",
    type: "",
    description: "",
    feelings: "",
    negatives: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/users/${id}/products/${pid}`)
      .then((response) => setProduct(response.data));
  }, [URL, id]);

  const handleTextChange = (event) => {
    event.preventDefault();
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/users/${id}/products/${pid}`, product)
      .then(() => navigate(`/seller/${id}/products`))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p>I am the Edit Page</p>

      <form>
        <label htmlFor="id">User ID</label>
        <input
          id="id"
          value={product.user_id}
          type="number"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="cannabinoid">Cannabinoid: </label>
        <input
          id="cannabinoid"
          value={product.cannabinoid}
          type="text"
          onChange={handleTextChange}
        ></input>
        <label htmlFor="type">Type: </label>
        <input
          id="type"
          value={product.type}
          type="text"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="feelings">Feelings: </label>
        <input
          id="feelings"
          value={product.feelings}
          type="text"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="negatives">Negatives: </label>
        <input
          id="negatives"
          value={product.negatives}
          type="text"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="price">Price: $</label>
        <input
          id="price"
          value={product.price}
          type="number"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          value={product.description}
          type="text"
          onChange={handleTextChange}
          required
        ></input>
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          value={product.image}
          type="text"
          onChange={handleTextChange}
        ></input>
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditProductForm;
