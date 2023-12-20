import { Routes, Route } from "react-router-dom";
import Notfound from "../../Pages/Notfound";
import WishLists from "../../Pages/WishLists/Wishlists";
import Contact from "../../Pages/Contact/Contact";
import LoginPage from "../../Pages/Login/LoginPage";
import { AnimatePresence } from "framer-motion";
import Wishes from "../../Pages/WishLists/Wishes";
import AdminSite from "../../Pages/AdminSite";

const Router = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route index path="*" element={<WishLists />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/:username" element={<Wishes />} />

          <Route path="/admin" element={<AdminSite />} />
          <Route path="/admin/:id" element={<AdminSite />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/notfound" element={<Notfound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
