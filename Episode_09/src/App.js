import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

/* All the terms define the process of breaking down our app into smaller logical chunks:-
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On-Demand Loading
- Dynamic import
*/

// lazy loading of data
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        /* Suspense - when React renders the webpage components, and the components are not ready than it gives error. 
        Eg: here the Grocery bundle takes time to load and the React renders very fast so we will get error.
        Hence we need to wrap the component inside "Suspense" components which is given to us by React.
        Now the fallback holds the infoemation that is shown on the webpage until the components renders.
        This is very useful and important when we are working with large scale production ready applications.
        */
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
