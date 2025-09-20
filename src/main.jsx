import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/user/HomePage";
import CourseDetail from "./pages/course/CourseDetail";
import CoursePage from "./pages/course/CoursePage";
import Profile from "./pages/user/MyProfile";
import CartPage from "./pages/cart/CartPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />

        {/* Course routes */}
        {/* <Route path="/courses" element={<CourseList />} /> */}
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course/:id/learn" element={<CoursePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
