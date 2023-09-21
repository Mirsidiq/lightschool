import React from 'react'
import './lessonsInner.scss'
import Video from "../../assets/images/video.png"
import Books from "../../assets/images/book.png"
import { NavLink } from 'react-router-dom'
export default function LessonsInner() {
  return (
    <section className='lessons-inner'>
        <div className="container">
                <h2 className='lessons-inner__title popular__title'>Kerakli yo'nalishni tanlang</h2>
            <div className="lessons-inner__wrapper">
                <div className="lessons-inner__item">
                    <div className="lessons-inner__item__header">
                            <img src={Video} alt="video darslar" className='lessons-inner__item__img' />
                    </div>
                    <div className="lessons-inner__item__body">
                        <h4 className='lessons-inner__item__title'>Video darslar</h4>
                        <p className='lessons-inner__item__text'>Bilimlaringizni video darslar orqali mustahkamlang</p>
                        <NavLink className="lessons-inner__item__btn">Darsni boshlash</NavLink>
                    </div>
                </div>
                <div className="lessons-inner__item">
                    <div className="lessons-inner__item__header">
                            <img src={Books} alt="video darslar" className='lessons-inner__item__img' />
                    </div>
                    <div className="lessons-inner__item__body">
                        <h4 className='lessons-inner__item__title'>Qo'llanmalar</h4>
                        <p className='lessons-inner__item__text'>Olgan bilimlaringizni sinang</p>
                        <NavLink className="lessons-inner__item__btn">Darsni boshlash</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
