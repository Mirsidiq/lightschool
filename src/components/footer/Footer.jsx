import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.scss"
export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
           <div className="footer__inner">
           <NavLink href="#" className="header__logo">
                    <span className='header__logo__text'>L</span>ight<span className='header__logo__text'>S</span>chool
                </NavLink>
            <div className="footer__category">
                <h4 className='footer__category__title'>Darslar</h4>
                <NavLink className="footer__item">
                    Matematika
                </NavLink>
                <NavLink className="footer__item">
                    Fizika
                </NavLink>
                <NavLink className="footer__item">
                    Ingliz tili
                </NavLink>
            </div>
            <div className="footer__category">
                <h4 className='footer__category__title'>O'yinlar</h4>
                <NavLink className="footer__item">
                    X Nolik
                </NavLink>
                <NavLink className="footer__item">
                    Sonni top
                </NavLink>
            
            </div>
           </div>
        </div>
    </footer>
  )
}
