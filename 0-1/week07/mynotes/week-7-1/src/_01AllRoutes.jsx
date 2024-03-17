import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';

// This load all the components at the initial stage and then load the rest of the resources when required.
// 

function AllRoutes() {

  return (

    <div>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ background: "red" }}>Top Bar FIXED</h1>
      </div>

      <BrowserRouter>
        <Appbar />
        <Routes>
          < Route path="/dashboard" element={<Dashboard />} />
          < Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
};

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => {
      // window.location.href = "/";   // This is not the best way to navigate it will refresh the page
      navigate("/");                   // This is the best way to navigate it will not refresh the page you can check it in the network tab.   
    }}>Home</button> <br />

    <button onClick={() => {
      // window.location.href = "/dashboard";
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>
}

export default AllRoutes;
