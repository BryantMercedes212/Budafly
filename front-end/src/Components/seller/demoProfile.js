import { Link } from "react-router-dom";

const Demo = () => {
    return (
        <div className="profile">
            <h1>Antonio X</h1>
            <p>To be successful, I realized it was imperative to take a step back and take a look at the whole process of cannabis product creation from seed, cultivation, handling, wholesale, product packaging, and finally the consumer experience.
            <br></br>
            I realized there are ample opportunities to improve the cannabis space so I started visiting multiple farms and speaking with farmers to ensure the production process was not only adequate but superior to what was already available in the market.
            <br></br>
            I hope you, the customer, can decide if it’s the right product for you.</p>
            <ul>
                <li><h4><Link to="/seller/5/products"><h4>Listed Products</h4></Link></h4></li>
                <li><Link to="https://mail.google.com/"><h4>Contact Me</h4></Link></li>
                <li></li>
                <li></li>
            </ul>
            

        </div>
    )
}

export default Demo;