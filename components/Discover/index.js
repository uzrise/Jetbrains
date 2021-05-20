import React from "react";

import cls from "./discover.module.scss"

export default function Discover() {
    return (
        <div className={cls.discoverContainer}>
            <div className="container">
                <h1>Discover more</h1>
                <div className={cls.discoverCards}>
                    <div className={cls.card}>
                        <img src={"../../play.svg"} alt=""/>
                        <h3>Software development <br/> the JetBrains way: dogfooding</h3>
                        <p>Giving you the scoop on how your favorite products are created</p>
                        <a className="link">Watch Now</a>
                    </div>
                    <div className={cls.card}>
                        <img src={"../../annual.svg"} alt=""/>
                        <h3>JetBrains 2020/21 <br/> Annual Highlights</h3>
                        <p>Find out why more than 10 million developers use and trust our tools</p>
                        <a className="link">Reat Now</a>
                    </div>
                    <div className={cls.card}>
                        <img src={"../../play2.svg"} alt=""/>
                        <h3>The State of Developer <br/> Ecosystem 2020</h3>
                        <p>Developer community trends in JetBrains' fourth annual survey results</p>
                        <a className="link">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
