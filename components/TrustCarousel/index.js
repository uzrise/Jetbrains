import React from "react";

import cls from "./trustCarousel.module.scss"

export default function TrustCarousel() {
    return (
        <div className={cls.trustContainer}>
            <div className="container">
                <div className={cls.card}>
                    <div className={cls.imgCard}>
                        <img src="../../woman.png" alt=""/>
                    </div>
                    <div className={cls.description}>
                        <h2>IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.</h2>
                        <h3>Mary Grygleski</h3>
                        <p>IBM</p>
                    </div>
                </div>
                <button className="btn_b">
                    More testimonials
                </button>
            </div>
        </div>
    )
}
