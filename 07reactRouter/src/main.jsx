import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './components/Github/Github.jsx'
// import githubInfoLoader from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     Element: <Layout/>,
//     children: [
//       {
//         path: "",
//         Element: <Home/>
//       },
//       {
//         path: "about",
//         Element: <About/>,
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      {<Route 
      // loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
