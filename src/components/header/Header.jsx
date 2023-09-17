import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/images/header-logo.svg"
import "./header.scss"
export default function Header() {
    const [dropdown,setDropDown]=useState(false)
    const [toggle,setToggle]=useState(false)
  return (
    <header className='header'>
        <div className="container">
            <div className="nav">
                <NavLink href="#" className="header__logo">
                    <span className='header__logo__img'></span>
                    <span className='header__logo__img'></span>
                    <span className='header__logo__text'>Light School</span>
                </NavLink>
                <ul className={`nav__list ${toggle ? 'nav__list__active':''}`}> 
                <span className='header__toggle__close' onClick={()=>setToggle(false)}></span>
                <li className={'nav__item'} onClick={()=>(setDropDown(!dropdown))} >
                        Kategoriyalar
                        <ul className={`nav__inner__list ${ dropdown ?'nav__inner__list__active':""}`}>
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
                <div className="header__toggle" onClick={()=>setToggle(true)}>
                    <span className='header__toggle__line'></span>
                    <span className='header__toggle__line'></span>
                    <span className='header__toggle__line'></span>
                </div>
            </div>
        </div>
    </header>
  )
}
