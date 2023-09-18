import React from 'react'
import './hero.scss'
import MainBg from "../../assets/images/hero-bg.png"
import VideoIcon from "../../assets/images/video.svg"
import { NavLink } from 'react-router-dom'
export default function Hero() {
  return (
    <div>
      <section className='hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__left__box">
            <h1 className='hero__left__title'><span className='hero__left__title-bright'>Karyerangiz </span> yo'lidagi <span className='hero__left__title-bright' >bilimlaringizni</span> yuqori darajaga olib chiqing</h1>
          </div>
          <div className="hero__right__box">
            <div className="hero__right__video__box">
            <i className='hero__right__video__icon fa-solid fa-laptop fa-bounce'></i>
                <span className='hero__right__video__title'>Video darslar</span>
            </div>
            <div className="hero__right__user__box">
            {/* <i class="fa-solid fa-user fa-bounce"></i> */}
            <i class="fa-solid fa-user fa-bounce hero__right__user__icon"></i>
                <span className='hero__right__video__title'>Suhbatlar</span>
            </div>
            <img src={MainBg} alt="main bg" className='hero__right__box__img' />
          </div>
        </div>
      </div>
      </section>
      <section className="services">
        <div className="container">
          <h3 className="services__title">
            Bizning xizmatlarimiz
          </h3>
          <div className="services__inner">
              <div className="service__card">
                <div className="service__card__header">
                <span className='service__card__header__icon__wrapper'>
                <i className='service__card__header__icon fa-solid fa-laptop fa-bounce'></i>
                </span>
                  <h4 className='service__card__title'>Online Darslar</h4>
                </div>
                <div className="service__card__body">
                  <p className='service__card__text'>Darslarimiz zamonaviy metodikalar yordamida tuzilgan</p>
                <NavLink className='service__card__more__btn'>Ko'proq <i class="fa-solid fa-chevron-right fa-beat service__card__more__btn-arrow"></i></NavLink>
                </div>
              </div>
              <div className="service__card">
                <div className="service__card__header">
                <span className='service__card__header__icon__wrapper'>
                <i className='service__card__header__icon fa-solid fa-gamepad fa-shake'></i>
                </span>
                  <h4 className='service__card__title'>O'yinlar</h4>
                </div>
                <div className="service__card__body">
                  <p className='service__card__text'>Turli xildagi o'yinlar bilan vaqtingizni maroqli o'tkazasiz</p>
                <NavLink className='service__card__more__btn'>Ko'proq <i class="fa-solid fa-chevron-right fa-beat service__card__more__btn-arrow"></i></NavLink>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
