import { useEffect, useState } from "react";

const Profile = (props) => {

    useEffect(() => {
       const timer = setInterval(() => console.log("Func Component"), 1000);
        return () => {
            clearInterval(timer);
        };
    },[])



    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Profile Component</h1>
            <h2>Hello {props.name}</h2>
            <h2>Count = {count}</h2>
            <button onClick={() => setCount(1)}>Click</button>
        </div>
    );
};  

export default Profile;