import React from 'react'
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import "./videos.scss"
import { NavLink, useParams } from 'react-router-dom';

export default function Videos() {
    let {id}=useParams() 
    const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    return (
       <section className='videos'>
        <div className="container">
        <NavLink className="lessons__back back" to={`/lessons/${id}`}><i className="fa-solid fa-chevron-left fa-beat back__chevron"></i>Ortga</NavLink>
            <div className="videos__inner">
                <div className="video__card">
                    <div className="video__card__header">
                        <video src={src} controls className='video__card__content'></video>
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar qo'shish ko'paytirish bo'lish</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                        <video src={""} controls className='video__card__content'></video>
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar qo'shish ko'paytirish bo'lish</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                        <video src={src} controls className='video__card__content'></video>
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar qo'shish ko'paytirish bo'lish</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                        <video src={src} controls className='video__card__content'></video>
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar qo'shish ko'paytirish bo'lish</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                        <video src={src} controls className='video__card__content'></video>
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar qo'shish ko'paytirish bo'lish</h4>
                    </div>
                </div>
              
            </div>
        </div>
       </section>
    )
}
