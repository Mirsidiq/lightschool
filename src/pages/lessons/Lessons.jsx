import React from 'react'
import "./lessons.scss"
import Card from '../../components/card/Card'
import { NavLink, useParams } from 'react-router-dom';
export default function Lessons() {
    const popular =[
        {
          id:1,
          title:"Informatika",
          desc:"Informatika darslari yordamida texnika olamiga kiring"
        },
        {
          id:2,
          title:"Matematika",
          desc:"Matematika bilimlar charxi"
        },
        {
          title:"Ingliz tili",
          desc:"Boshqa davlatlarni kashf et"
        },
        {
          title:"Informatika",
          desc:"Informatika darslari yordamida texnika olamiga kiring"
        },
        {
          title:"Matematika",
          desc:"Matematika bilimlar charxi"
        },
        {
          title:"Ingliz tili",
          desc:"Boshqa davlatlarni kashf et"
        },
        {
          title:"Informatika",
          desc:"Informatika darslari yordamida texnika olamiga kiring"
        },
        {
          title:"Matematika",
          desc:"Matematika bilimlar charxi"
        },
        {
          title:"Ingliz tili",
          desc:"Boshqa davlatlarni kashf et"
        },
        {
          title:"Informatika",
          desc:"Informatika darslari yordamida texnika olamiga kiring"
        },
        {
          title:"Matematika",
          desc:"Matematika bilimlar charxi"
        },
        {
          title:"Ingliz tili",
          desc:"Boshqa davlatlarni kashf et"
        }
      ]
  return (
    <div className='lessons'>
        <div className="container">
          <NavLink className="lessons__back back" to={'/'}><i class="fa-solid fa-chevron-left fa-beat back__chevron"></i>Ortga</NavLink>
        <h3 className="popular__title lessons__title">
            Barcha darslar
          </h3>
          <div className="popular__inner">
           {
            popular.map(e=>(
              <Card className="lessons__card" data={e}/>
            ))
           }
          </div>
        </div>
    </div>
  )
}
