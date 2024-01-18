// import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import { Root } from "./Pages/Root/Root";
// import Contact from "./Pages/Contact/Contact";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// const router = createBrowserRouter ([
//     {
//         path: '',
//         element: <Root />,
//         children:[
//             { index: true, element: <Homepage /> },
//         ]
//     }
// ])

function App() {
  return (
      <HelmetProvider>
          <Header />
          <div className="content-main">
              <Homepage />
          </div>
          <Footer />
      </HelmetProvider>

     //  <HelmetProvider>
     //        <RouterProvider router={router} />
     // </HelmetProvider>
  );
}

export default App;
