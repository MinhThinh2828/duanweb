import React from "react";
import "../styles.css";
import p1 from "../image/cafe Robusta.jpg";
import p2 from "../image/cafe Arabica.jpg";
import p3 from "../image/cafe Cherri.jpg";
import p4 from "../image/cafe Moka.jpg";

const Menu = ({ closeMenu }) => {
  const items = [
    { name: "Cafe Robusta", price: "20,000 VNĐ", image: p1 },
    { name: "Cafe Arabica", price: "25,000 VNĐ", image: p2 },
    { name: "Cafe Cherri", price: "22,000 VNĐ", image: p3 },
    { name: "Cafe Moka", price: "30,000 VNĐ", image: p4 },
  ];

  return (
    <div className="menu-overlay">
      <div className="menu-container">
        {items.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
            </div>
          </div>
        ))}
        <button className="close-menu" onClick={closeMenu}>
          Đóng giao diện
        </button>
      </div>
    </div>
  );
};

export default Menu;
