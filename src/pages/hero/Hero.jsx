import React, { useEffect,useState,useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'aos/dist/aos.css'
import './hero.scss'
import { EffectCoverflow } from 'swiper/modules';
import Card from "../../components/card/Card"
import MainBg from "../../assets/images/hero-bg.png"
import VideoIcon from "../../assets/images/video.svg"
import Teacher from '../../assets/images/teacher.png'
import { NavLink } from 'react-router-dom'
import Button from '../../components/button/Button';
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
          <h3 className="services__title" data-aos="fade-up" data-aos-delay="1000">
            Bizning xizmatlarimiz
          </h3>
          <div className="services__inner">
              <div className="service__card" data-aos="flip-left" data-aos-delay="1200">
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
              <div className="service__card" data-aos="flip-right" data-aos-delay="1400" data-aos-duration="700">
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
          <h3 className="popular__title" data-aos="fade-down" data-aos-delay="1000">
            Top darslar
          </h3>
          <div className="popular__inner">
           {
            popular.map(e=>(
              <Card data={e} aos={{"data-aos":"zoom-in","data-aos-delay":"1400"}}/>
            ))
           }
          </div>
          <div className="popular__footer">
            <Button className="popular__footer__btn">Barcha darslar</Button>
          </div>
        </div>
      </section>
      <section className="teachers">
        <div className="container">
          <h3 className='services__title teachers__title'>Bizning ustozlar</h3>
          <div className="teachers__inner">
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
       modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="teacher__card">
              <div className="teacher__header">
                  <img src={Teacher} alt="teacher image" className='teacher__img' />
              </div>
              <div className="teacher__body">
                  <h4 className='teacher__name'>Mirsidiq Mirzokirov</h4>
                  <p className='teacher__profession'>Informatika o'qituvchisi</p>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}
