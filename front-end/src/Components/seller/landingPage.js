import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const LandingPage = () => {

    const URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // hard coded user
        axios
        .get(`${URL}/users/${id}/products`)
        .then((response) => setProducts(response.data))
    }, [URL, id]);

    const viewAllProducts = products.map((product) => {
        console.log(products)
        return (
            <article className="wrapper" key={product.id}>
                <img src={product.image} alt={product.description}/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.id}</p>
                <Link to={"/seller/"+id+"/products/"+product.id}>Details page</Link>
            </article>
        );
    });

    return (
        <div>
            <h1>Welcome, seller</h1>
            <h2>ATTENTION, PLEASE READ Below are the products you have listed for sale in Budafly, below the image is a link you can click to edit a product or delete a product or create a product using the button below</h2>
            <Link to={"/seller/"+id+"/products/new"}><button>add a product</button></Link>
            {viewAllProducts}
        </div>
    );
};

export default LandingPage;