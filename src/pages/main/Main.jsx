import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import "./main.scss"
import Hero from '../hero/Hero'
import Lessons from "../lessons/Lessons"
import { useParams } from 'react-router-dom'
import LessonsInner from '../lessons-inner/LessonsInner'
import Videos from '../videos/Videos'
import Materials from '../materials/Materials'
import NotFound from '../pageNotFound/NotFound'
export default function Main() {
  return (
    <div>
      <Routes>
        <Route element={<NotFound/>} path='/*'/>
        <Route element={ <Hero/>} path='/'/>
        <Route path='lessons' element={<Lessons/>}/>
        <Route path='lessons/:id' element={<LessonsInner/>}/>
        <Route path='lessons/:id/videos' element={<Videos/>}/>
        <Route path='lessons/:id/materials' element={<Materials/>}/>
      </Routes>
    </div>
  )
}
