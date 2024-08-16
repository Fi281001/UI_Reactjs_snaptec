import React from "react";
import "../maincss/Topsale.css";
import levi from "../../src/image/levi.png";
import long from "../../src/image/long.png";
import cap from "../../src/image/fullcap.png";
import pant from "../../src/image/pant.png";
export default function Topsale() {
  return (
    <div className="top-sale">
      <div className="top-title">
        <span>Top selling products</span>
        <a href="">See all {">"}</a>
      </div>
      <div className="product">
        <div class="block">
          <div class="badge">1</div>
          <img src={levi} alt="Image" class="image2" />
          <div class="info">
            <div class="name">Tshirt Levis</div>
            <div class="price">$49.99</div>
          </div>
        </div>
        <div class="block">
          <div class="badge">2</div>
          <img src={long} alt="Image" class="image2" />
          <div class="info">
            <div class="name">Long jeans jacket</div>
            <div class="price">$129.99</div>
          </div>
        </div>
        <div class="block">
          <div class="badge">3</div>
          <img src={cap} alt="Image" class="image2" />
          <div class="info">
            <div class="name">Fullcap</div>
            <div class="price">$20.99</div>
          </div>
        </div>
        <div class="block">
          <div class="badge">4</div>
          <img src={pant} alt="Image" class="image2" />
          <div class="info">
            <div class="name">Adidas pants</div>
            <div class="price">$89.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}
