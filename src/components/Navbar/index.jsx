import React from "react";
import "./style.scss";
// import { FiArrowRight } from "react-icons/fi";
import { TiCreditCard } from "react-icons/ti";
import { TbChartPie } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { FiPercent, FiCreditCard } from "react-icons/fi";

const index = () => {
  return (
    <>
      <header className="navbar">
        {/* <div className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__wrapper-logo">
                <div></div>
                <h2>aksiyasi tugashiga qoldi</h2>
              </div>
              <div className="header__wrapper-oclock">18 / 08 / 55</div>
              <a href="https://alifnasiya.uz/juma?locale=uz" className="header__wrapper-btn">
                <span>Batafsil</span>
                <FiArrowRight style={{fontSize: "13px" , marginTop: "2px"}}/>
              </a>
            </div>
          </div>
        </div> */}
        <nav className="nav">
          <div className="container">
            <div className="nav__wrapper">
              <ul className="nav__wrapper-one">
                <span>
                  <img
                    src="https://alifbank.design/assets/img/logos/alif_en.svg"
                    alt=""
                  />
                  <span>nasiya</span>
                </span>
                <li>Do'konlar</li>
                <li>Hamkor bo'ling</li>
                <li> alif Juma </li>
              </ul>

              <ul className="nav__wrapper-two">
                <li>
                  <span>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/555/555451.png"
                      alt=""
                    />
                    <p>Рус</p>
                  </span>
                </li>
                <li>
                  <a href="https://alifnasiya.uz/auth/login-by-sms?locale=uz">
                    Kirish
                  </a>
                </li>
                <li>
                  <a href="https://alifnasiya.uz/auth/registration?locale=uz">
                    Ro`yxatdan o`tish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <a href="https://alifnasiya.uz/juma?locale=ru" className="nav__img">
            <img
              src="https://minio.alifnasiya.uz/service-merchant/e1/94/84/79/e1948479-44ac-4884-9bbe-3d124b3dbd7a.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aGxj0tLP1NLTFS0O%2F20230722%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230722T054618Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=f42ffdd62bab85591d8d335461b2640bdf0ac625a382f3a9f89ca11ffa000dd1"
              alt=""
            />
          </a>

          <ul className="nav__category">
            <li>
              {/* <FiCreditCard   size={'2em'} className="nav__category-card"/> */}
              <i className="bi bi-credit-card nav__category-card"></i>
              <p>Faqatgina pasport va bank kartasi kerak bo’ladi</p>
            </li>
            <li>
              {/* <TbChartPie size={'2em'}/> */}
              <i className="bi bi-pie-chart nav__category-chart"></i>
              <p>Katta mahsulotlarga to’lovlarni bo’lib to’lash</p>
            </li>
            <li>
              {/* <SlBasket size={'2em'}/> */}
              <i className="bi bi-cart nav__category-product"></i>
              <p>O’zbekiston bo’ylab hamkor do’konlar</p>
            </li>
            <li>
              {/* <FiPercent size={'2em'}/> */}
              <i className="bi bi-percent nav__category-paymet"></i>
              <p>Boshlang’ich to’lov 0%</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default index;
