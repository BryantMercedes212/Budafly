import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// console.log("Hello world")
// const URL = "http://localhost:3333";
// console.log(URL)

const SingleView = () => {
    
    // const URL = process.env.REACT_APP_API_URL;
    const { id, pid } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState([]);
    
    const fetchProduct = async () => {
        try {
            const res = await axios
            .get(`http://localhost:3333/users/${id}/products/${pid}`)
            setProduct(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error);
            setProduct([]);
        }
    };

    useEffect(() => {
        console.log("Hi")
        fetchProduct()
    }, [id, pid]);

    const handleDelete = () => {
        console.log("I am something")
        axios
        .delete(`http://localhost:3333/users/${id}/products/${pid}`)
        .then(() => navigate(`/seller/${id}/products`))
        .catch((error) => console.log(error));
    };

    return (
        <div>
            <p>Show single product</p>
            <h1>Hi</h1>
            <article key={product.id}>
                <img src={product.image} alt={product.description}/>
                <h3>{product.name}</h3>
                <h2>{product.description}</h2>
                <p>${product.price}</p>
                <Link to={"/seller/"+id+"/products/"+pid+"/edit"}><button>edit</button></Link>
                <button onClick={handleDelete}>delete a product</button>
                {/* <button>delete a product</button> */}
            </article>
        </div>
    );
};

// console.log(typeof SingleView)

export default SingleView;