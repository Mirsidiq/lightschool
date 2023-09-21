import React from 'react'
import ReactPlayer from 'react-player';
import "./videos.scss"
export default function Videos() {
    const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    return (
       <section className='videos'>
        <div className="container">
            <div className="videos__inner">
                <div className="video__card">
                    <div className="video__card__header">
                    <ReactPlayer
                    className="video__card__content"
                    url={src}
                    controls
                    />
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                    <ReactPlayer
                    className="video__card__content"
                    url={src}
                    controls
                    />
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                    <ReactPlayer
                    className="video__card__content"
                    url={src}
                    controls
                    />
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar</h4>
                    </div>
                </div>
                <div className="video__card">
                    <div className="video__card__header">
                    <ReactPlayer
                    className="video__card__content"
                    url={src}
                    controls
                    />
                    </div>
                    <div className="video__card__body">
                        <h4 className="video__card__title">Ko'phadlar va ular ustida amallar</h4>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}
