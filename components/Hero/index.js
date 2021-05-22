import React from "react";

import cls from "./hero.module.scss"

import hero from '../../mock-data/hero'

export default function Hero() {
    return (
        <div className={cls.hero_section}>
            <div className="container">
                <div className={cls.title}>
                    <h1 className={cls.essential}>Essential tools for software developers and teams</h1>
                    <p>We build our software so you can enjoy building yours</p>
                </div>
                <div className={cls.cards}>
                    {hero.map((item) => (
                        <div key={item.id} className={cls.card}>
                            {item.imgUrl}
                            <h3>{item.title_en}</h3>
                            <p dangerouslySetInnerHTML={{__html:item?.name_en}}/>
                            <a className="link" href=""> {item.link}</a>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
