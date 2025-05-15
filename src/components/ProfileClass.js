import { Component } from "react";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                loggin:"",
                avatar_url:"",
            }
        };
        console.log("Profile Class - Constructor");
    }

    componentDidMount() {
        // const data = await fetch ("https://api.github.com/users/ankit7raj7");
        // const json = await data.json();
        // this.setState({
        //     userInfo:json,
        // })
        // console.log("Profile Class - ComponentDidMount");

       this.timer = setInterval(() =>{ console.log("PROFILE");}, 1000);
    }

    componentDidUpdate() {
        console.log("Profile Class - ComponentDidUpdate");
    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

    render () {
        console.log("Profile Class - Render");
        const {userInfo} = this.state;

        return (
            <div>
                <h1>Name: {userInfo.name}</h1>
                <img src={userInfo.avatar_url}></img>
        <h1>This is Class Component</h1>
        <h2>hello {this.props.name}</h2>
    
        </div>)
        
    };
}

export default Profile;