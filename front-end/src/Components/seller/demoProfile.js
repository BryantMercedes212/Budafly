import { Link } from "react-router-dom";

const Demo = () => {
    return (
        <div>
            <h1>Profile</h1>
            <h1> I am a farmer who cultivates the best flowers</h1>
            <h1><Link to="/seller/5/products"><h1>For Sale</h1></Link></h1>
        </div>
    )
}

export default Demo;