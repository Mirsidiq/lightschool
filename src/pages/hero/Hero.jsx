import React from 'react'
import './hero.scss'
import MainBg from "../../assets/images/hero-bg.png"
import VideoIcon from "../../assets/images/video.svg"
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
            <i className='hero__right__video__icon fa-solid fa-laptop'></i>
                <span className='hero__right__video__title'>Video darslar</span>
            </div>
            <div className="hero__right__user__box">
            <i class="fa-solid fa-user hero__right__user__icon"></i>
                <span className='hero__right__video__title'>Suhbatlar</span>
            </div>
            <img src={MainBg} alt="main bg" className='hero__right__box__img' />
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
