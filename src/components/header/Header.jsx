import React from 'react'
import { NavLink } from "react-router-dom";
import "./header.scss"
export default function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="nav">
                <NavLink href="#" className="header__logo">
                    <span className='header__logo__text'>L</span>ight<span className='header__logo__text'>S</span>chool
                </NavLink>
                <ul className='nav__list'> 
                <li className='nav__item'>
                        Kategoriyalar
                        <ul className='nav__inner__list'>
                            <NavLink className="nav__item__inner">
                                Darslar
                            </NavLink>
                            <NavLink className="nav__item__inner">
                                O'yinlar
                            </NavLink>
                        </ul>
                    </li>
                    <NavLink className="nav__item">
                        Biz haqimizda
                    </NavLink>
                    <NavLink className="nav__item">
                        Bog'lanish
                    </NavLink>
                </ul>
            </div>
        </div>
    </header>
  )
}
