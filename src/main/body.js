import React from "react";
import "../styles.css";
import p1 from "../image/cafe Robusta.jpg";
import p2 from "../image/cafe Arabica.jpg";
import p3 from "../image/cafe Cherri.jpg";
import p4 from "../image/cafe Moka.jpg";

const Body = () => {
  return (
    <div className="body-container">
      <h2>
        Tên các loại cà phê nổi tiếng ở Việt Nam không phải ai cũng biết dù cà
        phê là thức uống khá phổ biến được nhiều người ưa chuộng. Việt Nam là
        nước xuất khẩu cà phê lớn thứ 2 trên thế giới với đa dạng các loại cà
        phê. Có 5 loại cà phê phổ biến được ưa chuộng hiện nay là: Robusta,
        Arabica, Cherri, Moka, Culi.
      </h2>
      <div className="coffee-images">
        <div className="coffee-item">
          <img src={p1} alt="Robusta" />
          <p>Robusta</p>
        </div>
        <div className="coffee-item">
          <img src={p2} alt="Arabica" />
          <p>Arabica</p>
        </div>
        <div className="coffee-item">
          <img src={p3} alt="Cherri" />
          <p>Cherri</p>
        </div>
        <div className="coffee-item">
          <img src={p4} alt="Moka" />
          <p>Moka</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
