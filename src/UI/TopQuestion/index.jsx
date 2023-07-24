import React , {useState} from "react";
import "./style.scss";

const index = () => {

  const [limit,setLimit] = useState("Limit — ro'yxatdan o'tgandan keyin muddatli to'lovga mahsulot sotib olish uchun taqdim etiladigan balans. Uning yordamida siz tovarlarni ortiqcha kutmasdan alifshop.uz saytida yoki hamkorlarimiz do‘konlarida sotib olishingiz mumkin.")
  const [lim ,setLim] = useState(true)

  const[cheak , setCheak] = useState("Limit olganingizdan so'ng, uni alifnasiya.uz saytidagi shaxsiy kabinetingizda yoki alif mobi ilovasidagi Nasiya bo‘limida tekshirishingiz mumkin.")
  const[chea , setChea] = useState(true)

  const [buys , setBuys] = useState("Siz alifshop.uz saytida yoki IDEA, Mediapark, Elmakon, Goodzone va boshqalar kabi hamkorlarimiz do'konlarida xarid qilishingiz mumkin.")
  const[buy, setBuy] = useState(true)

  const[names , setNames]= useState("Agar mahsulot narxi sizga berilgan limit miqdoridan oshgan bo'lsa, biz ushbu mahsulotga arizani bir necha daqiqa ichida ko'rib chiqib sizga javob beramiz.")
  const[name , setName] = useState(true)

  const[months , setMonths] = useState("Har oy bog'langan kartadan muddatli to'lovning belgilangan miqdori yechib olinadi. Va siz mustaqil ravishda alifnasiya.uz saytidagi shaxsiy kabinetingiz yoki alif mobi, Payme, Click, Uzum Bank va Paynet to‘lov tizimlari orqali to‘lovni amalga oshirishingiz mumkin.")
  const[month , setMonth] = useState(true)
  return (
    <div className="container">
      <div className="topQuestion">
        <h1 className="topQuestion__title">Tez-tez so'raladigan savollar</h1>
        <div className="topQuestion__wrapper">
          <div className={lim ? "" : "topQuestion__wrapper-lim"}>
            <button onClick={() => setLim(!lim)} className={lim ? "topQuestion__wrapper-btn" : "topQuestion__wrapper-lim-btn"}>
              <span>Limit bu nima?</span>
              <i className={lim ? "bi bi-chevron-down" : "bi bi-chevron-up"}></i>
            </button>
            <p className=""> {lim ? "" : limit} </p>
          </div>

          <div className={chea ? "" : "topQuestion__wrapper-lim"}>
            <button onClick={() => setChea(!chea)} className={chea ? "topQuestion__wrapper-btn" : "topQuestion__wrapper-lim-btn"}>
              <span>Limitni qanday tekshirish mumkin?</span>
              <i className={chea ? "bi bi-chevron-down" : "bi bi-chevron-up"}></i>
            </button>
            <p className=""> {chea ? "" : cheak} </p>
          </div>
          <div className={buy ? "" : "topQuestion__wrapper-lim"}>
            <button onClick={() => setBuy(!buy)} className={buy ? "topQuestion__wrapper-btn" : "topQuestion__wrapper-lim-btn"}>
              <span>Qayerdan xarid qilish mumkin?</span>
              <i className={buy ? "bi bi-chevron-down" : "bi bi-chevron-up"}></i>
            </button>
            <p className=""> {buy ? "" : buys} </p>
          </div>
          <div className={name ? "" : "topQuestion__wrapper-lim"}>
            <button onClick={() => setName(!name)} className={name ? "topQuestion__wrapper-btn" : "topQuestion__wrapper-lim-btn"}>
              <span>Mahsulot narxi menga berilgan limit miqdoridan oshsa nima qilish kerak?</span>
              <i className={name ? "bi bi-chevron-down" : "bi bi-chevron-up"}></i>
            </button>
            <p className=""> {name ? "" : names} </p>
          </div>
          <div className={month ? "" : "topQuestion__wrapper-lim"}>
            <button onClick={() => setMonth(!month)} className={month ? "topQuestion__wrapper-btn" : "topQuestion__wrapper-lim-btn"}>
              <span>Oylik to'lovni qanday amalga oshirish mumkin?</span>
              <i className={month ? "bi bi-chevron-down" : "bi bi-chevron-up"}></i>
            </button>
            <p className=""> {month ? "" : months} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
