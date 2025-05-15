import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Runads from "./components/Runads";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage.jsx";
import Upload from "./pages/Upload.jsx";
import CreateCv from "./pages/CreateCv.jsx";
import Job from "./pages/Job.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PurchaseService from "./pages/PurchaseService";
import MaterLayout from "./pages/MaterLayout";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => {
    // Điều hướng đến /login để mở modal
    navigate("/login", { state: { backgroundLocation: location } });
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    navigate(-1); // Quay về trang trước
    setShowLogin(false);
  };

  const hiddenAdsPaths = ["/upload", "/lien-he","/dashboard","/dashboard/mua-dich-vu"];

  const state = location.state;
  const backgroundLocation = state?.backgroundLocation;

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header onLoginClick={handleOpenLogin} />
      {!hiddenAdsPaths.includes(location.pathname) && (
        <div className="mt-6">
          <Runads />
        </div>
      )}

      <main className="flex-grow">
        <Routes location={backgroundLocation || location}>
          <Route path="/job/" element={<Job />} />
          <Route path="/create-cv" element={<CreateCv />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/dashboard" element={<MaterLayout />}>
            <Route index element={<Upload />} />
            <Route path="mua-dich-vu" element={<PurchaseService />} />
          </Route>
        </Routes>

        {/* Modal login nếu URL là /login */}
        {location.pathname === "/login" && (
          <Login onClose={handleCloseLogin} />
        )}
        {location.pathname === "/register" && (
          <Register onClose={handleCloseLogin} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
