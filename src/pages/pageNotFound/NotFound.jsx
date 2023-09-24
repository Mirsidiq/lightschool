import React from 'react'
import './notFound.scss'
import { NavLink } from 'react-router-dom'
export default function NotFound() {
  return (
    <section class="error-container">
        <p className='error__text'><span className='error__text-purple'>4</span>0<span className='error__text-purple'>4</span></p>
    <div className="error__body">
    <h4 className='error__title'>Sahifa topilmadi</h4>
    <NavLink className="go-back" to={"/"}>Ortga qaytish</NavLink>
    </div>
    </section>
  )
}
