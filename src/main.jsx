import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MyNavbar from './components/MyNavbar/MyNavbar'
import MyFooter from './components/MyFooter/MyFooter'
import Task1 from './components/Day2/Task1/Task1'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task1",
    element: <Task1 />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyNavbar></MyNavbar>
    <RouterProvider router={router} />
    <MyFooter></MyFooter>
  </React.StrictMode>
)
