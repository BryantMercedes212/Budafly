import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProductForm = () => {
    const URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const navigate = useNavigate();

    const [ product, setProduct ] = useState({
        name: "",
        description: "",
        price: 0,
        image: "",
        user_id: id
    });

    const handleTextChange = (event) => {
        event.preventDefault();
        setProduct({...product, [event.target.id]:event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${URL}/users/${id}/products`, product)
        .then(() => navigate(`/seller/${id}/products`))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <p>add a product form</p>
            <form>
                <label htmlFor="id">User ID</label>
                <input
                id="id"
                value={product.user_id}
                type="number"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="name">Name</label>
                <input
                id="name"
                value={product.name}
                type="text"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="price">Price</label>
                <input
                id="price"
                value={product.price}
                type="number"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="description">Description</label>
                <input
                id="description"
                value={product.description}
                type="text"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="image">Image</label>
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

export default AddProductForm;