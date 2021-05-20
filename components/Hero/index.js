import React from "react";
import cls from "./hero.module.scss"
import {LaptopIcon} from "../svg";

export default function Hero() {
    return (
        <div className={cls.hero_section}>
            <div className="container">
                <div className={cls.title}>
                    <h1>Essential tools for software <br/> developers and teams</h1>
                    <p>We build our software so you can enjoy building yours</p>
                </div>
                <div className={cls.cards}>
                    <div className={cls.card}>
                        <img src="../../image1.png" alt=""/>
                        <h3>Developer Tools</h3>
                        <p>The complete <br/>
                            developer toolkit</p>
                        <a className="link" href=""> Choose your tool</a>
                    </div>
                    <div className={cls.card}>
                        <img src="../../image2.png" alt=""/>
                        <h3>Team Tools</h3>
                        <p>A wide range of tools and integrations for any team</p>
                        <a className="link" href=""> Choose your tool</a>
                    </div>
                    <div className={cls.card}>
                        <img src="../../image3.png" alt=""/>
                        <h3>Learning Tools</h3>
                        <p>Solutions and opportunities for teachers and students</p>
                        <a className="link" href=""> Choose your tool</a>
                    </div>
                    <div className={cls.card}>
                        <img src="../../image4.png" alt=""/>
                        <h3>Kotlin</h3>
                        <p>A modern multiplatform programming language</p>
                        <a className="link"> Choose your tool</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
