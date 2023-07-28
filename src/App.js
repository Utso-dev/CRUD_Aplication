
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Contact from "./pages/Contact";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Rootlayout/RootLayout";






function App() {
  const route = createBrowserRouter(createRoutesFromElements( <Route path="/" element={<RootLayout></RootLayout>}>
     <Route index element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/user" element={<User />}></Route>
     <Route path="/contact" element={<Contact />}></Route>
    
  </Route>))
  return (
   <>
   <RouterProvider router={route}></RouterProvider>
{/* ===========props ar kaj ==================  */}
   {/* <Contact titel ="Utso Sarkar "/>
   <Contact titel ="Chinmoy Sarkar "/>
   <Contact titel ="Tonmoy Sarkar "/> */}
   {/* ==================props part end */}
   

   </>
  );
}

export default App;
