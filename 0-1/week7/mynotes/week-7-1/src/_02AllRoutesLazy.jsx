import { Suspense, lazy } from 'react'; 
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

// Lazy Loading is a technique in which we load only the required resources at the initial stage and then load the rest of the resources when required.
// It is a performance optimization technique that can be used to improve the performance of the website or web application.

function AllRoutesLazy() {

  // Suspense API is a component that we use to wrap the lazy loaded components.
  return (

    <div>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ background: "red" }}>Top Bar FIXED Lazy Load</h1>
      </div>

      <BrowserRouter>
        <Appbar />
        <Routes>
          < Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          < Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
};

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => {
      navigate("/");                    
    }}>Home Lazy</button> <br />

    <button onClick={() => {
      navigate("/dashboard");
    }}>Dashboard Lazy</button>
  </div>
}

export default AllRoutesLazy;
