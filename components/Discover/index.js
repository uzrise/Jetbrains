import React from "react";

import cls from "./discover.module.scss"
import discover from '../../mock-data/dicvover'

export default function Discover() {
    return (
        <div className={cls.discoverContainer}>
            <div className="container">
                <h1>Discover more</h1>
                <div className={cls.discoverCards}>
                    {discover.map((item) => (
                        <div className={cls.card}>
                            {item.imgUrl}
                            <h3 dangerouslySetInnerHTML={{__html: item?.name_en}} className={cls.title}/>
                            <p className={cls.name}>{item.description}</p>
                            <a className="link">{item.link}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
