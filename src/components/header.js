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
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
    );
}

export default HeaderComponent;