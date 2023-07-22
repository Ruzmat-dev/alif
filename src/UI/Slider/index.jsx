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
      </div>
    </main>
  );
};

export default index;
