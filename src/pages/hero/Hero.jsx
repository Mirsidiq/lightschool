import React, { useEffect,useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos'
import './hero.scss'
import 'aos/dist/aos.css'
import Card from "../../components/card/Card"
import MainBg from "../../assets/images/hero-bg.png"
import VideoIcon from "../../assets/images/video.svg"
import { NavLink } from 'react-router-dom'
export default function Hero() {
  const popular =[
    {
      title:"Informatika",
      desc:"Informatika darslari yordamida texnika olamiga kiring"
    },
    {
      title:"Matematika",
      desc:"Matematika bilimlar charxi"
    },
    {
      title:"Ingliz tili",
      desc:"Boshqa davlatlarni kashf et"
    },
  ]
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
      <section className='hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__left__box">
          {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Karyerangiz",
        1000,
        "Karyerangiz yo'lidagi bilimlaringizni yuqori darajaga olib chiqing",
      ]}
      wrapper="span"
      className='hero__left__title'
      speed={30}
      repeat={Infinity}
    /> */}
            <h1 className='hero__left__title'><span className='hero__left__title-bright'>Karyerangiz </span> yo'lidagi <span className='hero__left__title-bright' >bilimlaringizni</span> yuqori darajaga olib chiqing</h1>
          </div>
          <div className="hero__right__box">
            <div className="hero__right__video__box">
            <i className='hero__right__video__icon fa-solid fa-laptop fa-bounce'></i>
                <span className='hero__right__video__title'>Video darslar</span>
            </div>
            <div className="hero__right__user__box">
            {/* <i class="fa-solid fa-user fa-bounce"></i> */}
            <i className="fa-solid fa-user fa-bounce hero__right__user__icon"></i>
                <span className='hero__right__video__title'>Suhbatlar</span>
            </div>
            <img src={MainBg} alt="main bg" className='hero__right__box__img' />
          </div>
        </div>
      </div>
      </section>
      <section className="services">
        <div className="container">
          <h3 className="services__title" data-aos="fade-up" data-aos-delay="300">
            Bizning xizmatlarimiz
          </h3>
          <div className="services__inner">
              <div className="service__card" data-aos="flip-left" data-aos-delay="700">
                <div className="service__card__header">
                <span className='service__card__header__icon__wrapper'>
                <i className='service__card__header__icon fa-solid fa-laptop fa-bounce'></i>
                </span>
                  <h4 className='service__card__title'>Online Darslar</h4>
                </div>
                <div className="service__card__body">
                  <p className='service__card__text'>Darslarimiz zamonaviy metodikalar yordamida tuzilgan</p>
                <NavLink className='service__card__more__btn'>Ko'proq <i className="fa-solid fa-chevron-right fa-beat service__card__more__btn-arrow"></i></NavLink>
                </div>
              </div>
              <div className="service__card" data-aos="flip-right" data-aos-delay="800" data-aos-duration="700">
                <div className="service__card__header">
                <span className='service__card__header__icon__wrapper'>
                <i className='service__card__header__icon fa-solid fa-gamepad fa-shake'></i>
                </span>
                  <h4 className='service__card__title'>O'yinlar</h4>
                </div>
                <div className="service__card__body">
                  <p className='service__card__text'>Turli xildagi o'yinlar bilan vaqtingizni maroqli o'tkazasiz</p>
                <NavLink className='service__card__more__btn'>Ko'proq <i className="fa-solid fa-chevron-right fa-beat service__card__more__btn-arrow"></i></NavLink>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="popular">
        <div className="container">
          <h3 className="popular__title" data-aos="fade-down" data-aos-delay="600">
            Top darslar
          </h3>
          <div className="popular__inner">
           {
            popular.map(e=>(
              <Card data={e} aos={{"data-aos":"zoom-in","data-aos-delay":"800"}}/>
            ))
           }
          </div>
        </div>
      </section>
    </div>
  )
}
