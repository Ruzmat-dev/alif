import React, { useState } from "react";
import "./style.scss";
// import { FiArrowRight } from "react-icons/fi";
import { TiCreditCard } from "react-icons/ti";
import { TbChartPie } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { FiPercent, FiCreditCard } from "react-icons/fi";

const index = () => {
  const [isMenuCliked, setIsMenuCliked] = useState(false);
  const [toggleClassIcon, setToggleClassIcon] = useState("bi bi-x-lg");

  const updataMenu = () => {
    setIsMenuCliked(true);

    if (isMenuCliked) {
      setIsMenuCliked(false);
    }
  };

  console.log(isMenuCliked);
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
            <div className="nav__wrap">
              <div className="nav__wrap-one">
                <i
                  onClick={updataMenu}
                  className={isMenuCliked ? "bi bi-x-lg" : "bi bi-list"}
                ></i>
                <span>
                  <img
                    src="https://alifbank.design/assets/img/logos/alif_en.svg"
                    alt=""
                  />
                  <p>nasiya</p>
                </span>
              </div>

              <div className="nav__wrap-two">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/555/555451.png"
                  alt=""
                />
                <p>Рус</p>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={isMenuCliked ? "menu__toggle" : "menu__toggle-none"}
        ></div>

        <div className="container">
          <a href="https://alifnasiya.uz/juma?locale=ru" className="nav__img">
            <img
              src="https://minio.alifnasiya.uz/service-merchant/6b/e1/ae/a2/6be1aea2-e23c-468e-8663-99aebc2b2827.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aGxj0tLP1NLTFS0O%2F20230727%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230727T125219Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=80a7ad4347677d22ca019bf1442e603ab130d81966213d65590e8101b385745c"
              alt=""
            />
          </a>

          <div className="nav__menu">
            <a
              className="nav__menu-one"
              href="https://alifnasiya.uz/auth/registration?locale=uz"
            >
              Ro`yxatdan o`tish
            </a>

            <a
              className="nav__menu-two"
              href="https://alifnasiya.uz/auth/login-by-sms?locale=uz"
            >
              Kirish
            </a>
          </div>

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
