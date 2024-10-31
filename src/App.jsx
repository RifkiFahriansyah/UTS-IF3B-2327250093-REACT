import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';

const DataBarangList = React.lazy(() => import('./components/List'));
const DataBarangCreate = React.lazy(() => import('./components/Create'));
const App = () => {
  
  return (
    <>
       <Router>
     {/* navbar */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MDP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={( {isActive} ) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => `nav-link ${isActive ? "active" : ""}`} to="/warehouse">Data Barang</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container">
     <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warehouse" element={<DataBarangList/>} />
        <Route path="/warehouse/create" element={<DataBarangCreate/>} />
     </Routes>
     </Suspense>
     <div className="mt-2">&copy; 2024 UTS</div>
     </div>
    </Router>
    </>
  )
}

export default App
