import React from "react";
import "./style.scss";

const index = () => {
  return (
    <footer className="footer">
      <div className="footer__parents">
        <div className="container">
          <div className="footer__parents-wrapper">
            <h1>Bizning hamkorimiz bo'ling</h1>
            <a href="#">Biz bilan bog'lanish</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__bootom">
          <div className="footer__bootom-icons">
            <a href="#"><i className="bi bi-telegram"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
          <div>
            <p>©2023. alif nasiya</p>
            <span>·</span>
            <span>
              <i class="bi bi-file-earmark-text"></i>
              <a href="#">Ommaviy oferta</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
