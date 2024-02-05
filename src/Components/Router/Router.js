import { Routes, Route } from "react-router-dom";
import Notfound from "../../Pages/Denied";
import WishLists from "../../Pages/WishLists/Wishlists";
import Contact from "../../Pages/Contact/Contact";
import LoginPage from "../../Pages/Login/LoginPage";
import { AnimatePresence } from "framer-motion";
import Wishes from "../../Pages/WishLists/Wishes";
import AdminSite from "../../Pages/AdminSite";
import Guest from "../../Pages/GuestWishLists/GuestWishlists";
import NewUser from "../../Pages/Login/NewUser";
import Denied from "../../Pages/Denied";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route
            path='/wishlists'
            element={
              <ProtectedRoute restrictedTo='wishlists'>
                <WishLists />
              </ProtectedRoute>
            }
          />

          <Route path='/:username' element={<Wishes />} />

          <Route path='/admin' element={<AdminSite />} />
          <Route path='/admin/:id' element={<AdminSite />} />

          <Route path='/new-user' element={<NewUser />} />
          <Route
            path='/guest'
            element={
              <ProtectedRoute restrictedTo='guest'>
                <Guest />
              </ProtectedRoute>
            }
          />

          <Route path='/contact' element={<Contact />} />

          <Route path='/notfound' element={<Notfound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
