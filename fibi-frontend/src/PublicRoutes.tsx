import {  Routes, Route  } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProjectShowcase from "./components/Projectshowcase";
import HowItWorks from "./components/howitworks";
import Navbar from "./components/Navbar";

export default function PublicRoutes() {
  return (
      <div className="flex min-h-svh flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HowItWorks />
                  <ProjectShowcase />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}
