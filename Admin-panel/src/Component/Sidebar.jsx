import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Deep Admin</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          {/* <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/settings">Settings</Link></li> */}
        </ul>
      </nav>
    </aside>
  );
}
