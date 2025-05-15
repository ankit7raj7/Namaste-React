import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass"

const About = () => {
 return (
    <div>
        <h1> ABOUT US</h1>
        <h1>
            This is our about us page
        </h1>
        <Outlet/>
        <Profile name="Ankit Raj"/>
        <ProfileClass name="Ankit Raj"/>
    </div>
 );
}

export default About;