import React from "react";
import "../maincss/Content.css";
import Charline from "./Charline";
import Topsale from "./Topsale";
import Charsmall from "./Charsmall";
export default function Content() {
  return (
    <>
      <div className="content-col-1">
        <span class="welcome-text">
          Wellcome, <strong class="name-text">Damian</strong>
        </span>
        <div className="stats">
          <div className="stats-order">
            <div class="start-container">
              <div class="icon">
                <i class="bi bi-receipt"></i>
              </div>
              <div class="info">
                <div class="numbers">23 789</div>
                <div class="name">Order</div>
              </div>
              <div class="deal">+20</div>
            </div>
          </div>
          <div className="stats-profit">
            <div class="start-container">
              <div class="icon">
                <i class="bi bi-piggy-bank"></i>
              </div>
              <div class="info">
                <div class="numbers">$ 12 890,89</div>
                <div class="name">Profit</div>
              </div>
              <div class="deal">+$ 840,00</div>
            </div>
          </div>
        </div>
        <Charline />
      </div>
      <div className="content-col-2">
        <div className="nav">
          <div class="search-box">
            <input
              type="text"
              placeholder="Search for product"
              class="search-input"
            />
            <span class="search-icon">
              <i class="bi bi-search"></i>
            </span>
          </div>

          <button className="bell-but">
            <i style={{ fontSize: "16px" }} class="bi bi-bell"></i>
          </button>
          <img
            className="image"
            src="https://i.pinimg.com/236x/10/2d/70/102d7081596cf61051ad81274cf0169e.jpg"
            alt="Description of the image"
          />
        </div>
        <Topsale />
        <Charsmall />
      </div>
    </>
  );
}
