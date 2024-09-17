import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './Home.jsx';
// import About from './About.jsx';
// import Contact from './Contact.jsx';

const Home = lazy(()=> import ('./Home.jsx'))
const About = lazy(()=> import ('./About.jsx'))
const Contact = lazy(()=> import ('./Contact.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
      {
      path:'/about',
      element:<About></About>
    },
      {
      path:'/contact',
      element:<Contact></Contact>
    },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
