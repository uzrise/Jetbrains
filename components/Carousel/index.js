import React from 'react'

import cls from './carousel.module.scss'

export default function Carousel() {
    return (
        <div className={cls.carouselContainer}>
            <div className="container">
                <div className={cls.card}>
                    <div className={cls.logos}>
                        <img src={"../../imagelogo.png"} alt=""/>
                        <img src={"../../imagelogo1.png"} alt=""/>
                    </div>
                    <h2>IntelliJ IDEA 2021.1:</h2>
                    <h1>Built-in code reviews <br/> powered by Space</h1>
                    <button className="btn"> Learn more</button>
                </div>
            </div>
        </div>
    )
}
