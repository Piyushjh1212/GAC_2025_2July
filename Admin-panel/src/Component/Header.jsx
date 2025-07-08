import React from "react";
import "../styles/Header.css"

export default function Header() {
  return (
    <header className="admin-header">
      <h1>Admin Panel</h1>
      <div className="profile">
        <span>Admin</span>
      </div>
    </header>
  );
}
