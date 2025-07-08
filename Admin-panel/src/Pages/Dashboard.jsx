import React from "react";
import StatCard from "../Component/StatCard";
import "../styles/Dashboard.css"


export default function Dashboard() {
  return (
    <div className="page">
      <h2>Overview</h2>
      <div className="stats">
        <StatCard title="Total Users" value="1,204" />
        <StatCard title="Courses" value="38" />
        <StatCard title="Revenue" value="₹2.4L" />
        <StatCard title="Pending Tickets" value="4" />
      </div>
    </div>
  );
}
