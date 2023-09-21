import React from 'react'
import './card.scss'
import Popular from "../../assets/images/informatika.jpg"
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
export default function Card(props) {
  console.log(props.data.id);
  const navigate=useNavigate()
  return (
    <article className={`card ${props.className}`} {...props.aos} >
        <div className="card__header" >
            <img src={Popular} alt="popular image" className='card__img' />
        </div>
        <div className="card__body">
           <h4 className="card__title">
            {
                props.data.title
            }
           </h4>
           <p className="card__text">
            {
                props.data.desc
            }
           </p>
        </div>
        <div className="card__footer">
          <Button className="card__btn" onClick={()=>navigate(`${props.data.id}`)}>Ko'proq</Button>
        </div>
    </article>
  )
}
