import React from "react";
import "./style.scss";

const index = () => {
  return (
    <main className="slider">
      <div className="container">
        <h1 className="slider__title">
          Muddatli to’lovga qanday sotib olsa bo’ladi?
        </h1>
        <div className="slider__card">
          <div className="slider__card-one">
            <div>
              <span></span>
            </div>
            <p>
              Saytda yoki alif mobi ilovasida ro’yxatdan o’ting, “azo”yimizga
              aylaning va xaridlar uchun limitga ega bo’ling
            </p>
          </div>
          <div className="slider__card-two">
            <div>
              <span></span>
            </div>
            <p>
              Hamkorlarimiz do’koniga keling va limitingizni ko’rsating.
              Shuningdek, alif nasiya to’lov usuli mavjud saytlarda ham xarid
              qilishingiz mumkin
            </p>
          </div>
          <div className="slider__card-three">
            <div>
              <span></span>
            </div>
            <p>To’lovni amalga oshiring, tovarni oling va bo’lib to’lang</p>
          </div>
        </div> 

         <div className="payment">
          <h1 className="slider__title">
              To’lovni qanday amalga oshirish mumkin?
          </h1>

          <div className="payment__wrapper">
            <div className="payment__wrapper-item">
              <img src="https://cdn6.aptoide.com/imgs/1/5/7/157c81718c00e5c2d549fdc7d642a67b_icon.png" alt="" />
              <p>Alif mobi ilovasini yuklab oling. Nasiya bo’limiga o’ting, bo’lib to’lash rejasini tanlang va to’lovni amalga oshiring</p>
            </div>
            <div className="payment__wrapper-item">
              <span> 
              <img src="https://static.pfmlink.com/storage/images/RyXiMh2UJ8RUUgLDxm1xwMulC9ShBhMoNB6nVN2N.jpg" alt="" />
              <img src="https://uploads-ssl.webflow.com/5f055c68c84aef5e75811c34/5f68d9fb0c259e059291e261_76778253_2643467589079783_5022042260632502272_n.jpg" alt="" />
              <img src="https://megagroup.ru/d/paycom_logo-2.png" alt="" />
              </span>
              <p>Payme, Click yoki Apelsin kabi boshqa mobil ilovalar orqali to’lov amalga oshirishiz mumkin</p>
            </div>
            <div className="payment__wrapper-item">
              <img src="https://yt3.googleusercontent.com/ytc/AGIKgqMAqrl7J2dn6W83KfRoCbiE4HPhBUxA9ttPRztE=s900-c-k-c0x00ffffff-no-rj" alt="" />
              <p>Paynet yoki boshqa mahalliy banklar</p>
            </div>
          </div>
         </div>
      </div>
    </main>
  );
};

export default index;
