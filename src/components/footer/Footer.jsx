import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.scss"
export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
           <div className="footer__inner">
           <div className="footer__logo">
           <NavLink href="#" className="header__logo">
                    <span className='header__logo__img'></span>
                    <span className='header__logo__img'></span>
                    <span className='header__logo__text'>Light School</span>
            </NavLink>
            <p className='footer__logo__desc'>
                Yuqori bilim ko'nikmasi talantlarni kashf etadi
            </p>
           </div>
            <div className="footer__info">
            <div className="footer__category">
                <h4 className='footer__category__title'>Xizmatlar</h4>
                <NavLink className="footer__item">
                    O'yinlar
                </NavLink>
                <NavLink className="footer__item">
                    Darslar
                </NavLink>
            </div>
            <div className="footer__category">
                <h4 className='footer__category__title'>Tashkilot</h4>
                <NavLink className="footer__item">
                    Biz haqimizda
                </NavLink>
            </div>
            </div>
           </div>
        </div>
    </footer>
  )
}
