import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";
//Default import
import HeaderComponent from "./components/header";
//Named import
import { Title } from "./components/header";
import Body from "./components/Body.js";
import Footer from "./components/Footer";

    
// React.createElement => Object => HTML (DOM)
// const heading = ce(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "Heading 1 for parcel"
// );
// const heading2 = ce(
//     "h2",
//     {
//         id: "title",
//         key: "h2"
//     },
//     "Heading 2 for parcel"
// );


// JSX => React.createElement => Object => HTML (DOM)
// Below is a React Element
// const heading3 = <h1 id="heading1" key="h3">Food Villa</h1>



// React Component
// 1. Functional Component - New
// 2. Class based component - Old






const AppLayout = () => {
   return (
<>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>
   ) ;
}


//const parent = ce("div", {id:"parent"},[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
