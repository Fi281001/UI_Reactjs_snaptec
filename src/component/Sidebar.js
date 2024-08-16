import React from "react";
import "../maincss/Sidebar.css";
export default function Sidebar() {
  return (
    <div>
      <div className="navigation">
        <ul className="navbar-links">
          <li>
            <i class="bi bi-house"></i>
            <a>Dashboard</a>
          </li>
          <li>
            <i class="bi bi-receipt"></i>
            <a>Orders</a>
          </li>
          <li>
            <i class="bi bi-person"></i>
            <a>Products</a>
          </li>
          <li>
            <i class="bi bi-megaphone"></i>
            <a>Marketing</a>
          </li>
          <li>
            <i class="bi bi-star"></i>
            <a>Rates</a>
          </li>
          <li>
            <i class="bi bi-file-earmark-medical"></i>
            <a>Report</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
