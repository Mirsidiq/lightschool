import React from 'react'
import './materials.scss'
import Button from '../../components/button/Button'
import { NavLink, useParams } from 'react-router-dom'
export default function Materials() {
    let {id}=useParams()
    const material=[
        {
            id:1,
            name:'adasdsadasdas',
            img:'',
            file:"asdadadasdsada"
        },
        {
            id:2,
            name:'adasdsadasdas',
            img:'',
            file:"asdadadasdsada"
        },
        {
            id:3,
            name:'adasdsadasdas',
            img:'https://bilimlar.uz/wp-content/uploads/2021/02/rasm-qollanma-uz.jpg',
            file:""
        },
        {
            id:4,
            name:'adasdsadasdas',
            img:'',
            file:"https://www.spot.uz/media/img/2023/08/6F44Gy16927133019779_b.jpg"
        },
        {
            id:4,
            name:'adasdsadasdas',
            img:'',
            file:"https://www.spot.uz/media/img/2023/08/6F44Gy16927133019779_b.jpg"
        },
        {
            id:4,
            name:'adasdsadasdas',
            img:'',
            file:"https://www.spot.uz/media/img/2023/08/6F44Gy16927133019779_b.jpg"
        },
        {
            id:4,
            name:'adasdsadasdas',
            img:'',
            file:"https://www.spot.uz/media/img/2023/08/6F44Gy16927133019779_b.jpg"
        },
    ]
  return (
    <section className="materials">
        <div className="container">
        <NavLink className="lessons__back back" to={`/lessons/${id}`}><i className="fa-solid fa-chevron-left fa-beat back__chevron"></i>Ortga</NavLink>
            <div className="materials__inner">
                {
                    material.map(e=>(
                        <div className="material__card">
                    <div className="material__card__header">
                        <img className='material__card__img' src={e.img ? e.img :"https://bilimlar.uz/wp-content/uploads/2021/02/rasm-qollanma-uz.jpg"}/>
                    </div>
                    <div className="material__card__body">
                        <h4 className="material__card__title">
                            {
                                e.name
                            }
                        </h4>
                        <NavLink className={'material__card__btn'} to={e.file || e.img}>Yuklash</NavLink>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
