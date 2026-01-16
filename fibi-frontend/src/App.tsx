import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/footer';

// Section Components (Home)
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ProjectShowcase from './components/ProjectShowcase';

// Page Components
import Projects from './pages/Projects';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      {/* Tailwind 4 tip: 'min-h-svh' (Small Viewport Height) 
        is often better for mobile browsers than 'min-h-screen'
      */}
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
    </Router>
  );
}

export default App;