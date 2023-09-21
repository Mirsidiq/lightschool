import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import "./main.scss"
import Hero from '../hero/Hero'
import Lessons from "../lessons/Lessons"
import { useParams } from 'react-router-dom'
import LessonsInner from '../lessons-inner/LessonsInner'

export default function Main() {
  return (
    <div>
      <Routes>
        <Route element={ <Hero/>} path='/'/>
        <Route path='lessons' element={<Lessons/>}/>
        <Route path='lessons/:id' element={<LessonsInner/>}/>
      </Routes>
    </div>
  )
}
