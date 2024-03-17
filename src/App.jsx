import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayOut from './components/layouts/MainLayOut'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayOut />,
      children: [
        { path: "", element: <h1>Home</h1> },
        { path: "messagges", element: <h1>Messages</h1> },
        { path: "needs", element: <h1>Needs</h1> },
        { path: "classes", element: <h1>Classes</h1> },
        { path: "find", element: <h1>Find</h1> },
  
      ]
  
    },
  
  ]);
  return <RouterProvider router={router} />;
  
}

export default App
