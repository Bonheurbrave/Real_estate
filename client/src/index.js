import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import ListingPage from './pages/ListingPage';
import ListingItem from './pages/ListingItem';
import AllListingspage from './pages/AllListingspage';
import Login from './pages/Login';
import Upload from './pages/Upload';
import DisplayImages from './pages/DisplayImage';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    element:<App />,
    errorElement:<ErrorPage/>,
    children:[
    {index:true , element:<Home />},
    { path:"/signup",  element:<SignupPage />},
    { path:"/create-listing",  element:<ListingPage />},
    { path:"/listing/:id",  element:<ListingItem />},
    { path:"/listings",  element:<AllListingspage />},
    { path:"/login",  element:<Login />},
    { path:"/upload-image",  element:<Upload />},
    { path:"/display-images",  element:<DisplayImages />}
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

