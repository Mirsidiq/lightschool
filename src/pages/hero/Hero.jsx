import React from 'react'
import "./hero.scss"
import Button from '../../components/button/Button'
import Matem from "../../assets/images/matem.jpg"
export default function Hero() {
  return (
    <section className='hero'>
        <div className="container">
           <div className="hero__lesson">
           <div className="hero__lesson__title section__title">Darslar</div>
            <div className="hero__lessons">
                <div className="hero__lesson__card">
                    <div className="hero__lesson__card__header">
                        <img src={Matem} alt="subject" className='hero__lesson__card__img' />
                    </div>
                    <div className="hero__lesson__card__body">
                        <h4 className='hero__lesson__card__title card__title'>Matematika</h4>
                        <Button className='hero__lesson__card__btn'>boshlash</Button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}
