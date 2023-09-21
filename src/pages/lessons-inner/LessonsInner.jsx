import React from 'react'
import './lessonsInner.scss'
export default function LessonsInner() {
  return (
    <section className='lessons-inner'>
        <div className="container">
            <div className="lessons-inner__wrapper">
                <div className="lessons-inner__item">
                    <div className="lessons-inner__item__header">
                            {/* <img src={a} alt="video darslar" /> */}
                    </div>
                    <div className="lessons-inner__item__body">
                        <h4 className='lessons-inner__item__title'>Video darslar</h4>
                        <p className='lessons-inner__item__text'>Bilimlaringizni video darslar orqali mustahkamlang</p>
                    </div>
                </div>
                <div className="lessons-inner__item">Qo'llanma va Topshiriqlar</div>
            </div>
        </div>
    </section>
  )
}
