import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home.jsx';
import AllArtcraft from './Components/AllArtcraft.jsx';
import AddCraftItem from './Components/AddCraftItem.jsx';
import MyArtCraftList from './Components/MyArtCraftList.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import PrivetRoute from './Components/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allartcraft',
        element:<PrivetRoute><AllArtcraft></AllArtcraft></PrivetRoute>
      },
      {
        path:"addcraftitem",
        element:<AddCraftItem></AddCraftItem>
      },
      {
        path:'myartcraftlist',
        element:<PrivetRoute><MyArtCraftList></MyArtCraftList></PrivetRoute>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
