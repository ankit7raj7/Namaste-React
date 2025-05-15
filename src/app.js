import {createElement as ce, lazy} from "react";
import ReactDOM from "react-dom/client";
//Default import
import HeaderComponent from "./components/header";
//Named import
import { Title } from "./components/header";
import Body from "./components/Body.js";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login.js"
import Profile from "./components/Profile.js"; 

const Instamart = lazy(() => import("./components/Instamart.js"));

    
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
    <Outlet/>
    <Footer/>
    </>
   ) ;
}

const appRouter = createBrowserRouter ([
   {
      path : "/",
      element: <AppLayout/>,
      errorElement: <Error />,
      children: [
         {
            path : "/about",
            element: <About />,
            children:[
               {
                  path: "profile",
                  element: <Profile />
               }
            ]
         },
         {
            path : "/contact",
            element: <Contact/>
         },
         {
            path : "/",
            element: <Body/>
         },
         {
            path : "/restaurant/:id",
            element: <RestaurantMenu/>
         },
         {
            path: "/login",
            element: <Login />
         },
         {
            path: "/instamart",
            element: <Instamart/>
         }
      ]
   }
])


//const parent = ce("div", {id:"parent"},[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
