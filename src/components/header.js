import { Link } from "react-router-dom";

export const Title = () => (
    <a href="/">
    <img 
    className = "logo"
    src = "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/68044/optimized_product_thumb_stage.jpg"
    alt = "Food delivery logo"></img>
    </a>
);


const HeaderComponent = () => {
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/instamart"}>Instamart</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li>Cart</li>
        </ul>
        </div>
        <Link to={"/login"}>Login</Link>
    </div>
    );
}

export default HeaderComponent;