import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
// import Contact from './Contact/Contact';
// import User from './User/User';

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    {/* <Contact/>
    <User/> */}
    </>
  )
}

export default Layout