import React from 'react'
import "./style.scss"

const index = () => {
  return (
    <div className='partner'>
        <div className="container">
            <h1 className="partner__title">Bizning hamkorlar</h1>
            <div className="partner__wrapper">
                <a href="#">
                    <div className='partner__wrapper-idea'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-mediapark'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-storesmart'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-paragraf'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-mobilezona'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-goodzone'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-elmakon'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-radius'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-texnomart'></div>
                </a>
                <a href="#">
                    <div className='partner__wrapper-macbro'></div>
                </a>
            </div>
            <a className='partner__btn' href="#">Barcha dokonlarni korish</a>
        </div>
    </div>
  )
}

export default index