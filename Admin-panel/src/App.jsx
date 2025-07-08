import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/admin.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./Component/Header";
import Users from "./Pages/Users";
import Sidebar from "./Component/Sidebar";

export default function App() {
  return (
    <Router>
      <div className="admin-layout">
        <Sidebar />
        <div className="admin-main">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/courses" element={<Courses />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
